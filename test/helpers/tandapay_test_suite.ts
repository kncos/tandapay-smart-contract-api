import { WriteableTandaPayManager } from "tandapay_manager/tandapay_manager";
import { TandaPayRole, WriteableClient } from "types";
import {
  TestClient,
  PublicClient,
  Address,
  publicActions,
  Account,
  DumpStateReturnType,
} from "viem";
import {
  makeWriteableClients,
  makeManagers,
  makeTestClient,
  makeAccounts,
  ftkApprove,
} from "./tandapay_test_helpers";
import TandaPayTimeline from "./tandapay_timeline";
import { filterAndValidate, Validators } from "utils";
import {
  NUM_TEST_ACCOUNTS,
  DEFAULT_FTK_BALANCE,
  DEFAULT_COVERAGE_REQUIREMENT,
} from "../test_config";

export type TestClientWithPublicActions = TestClient & PublicClient;
export type DoActionForEachManagerParams = {
  /** managers that will perform the action. If omitted, defaults to all */
  include?: number[];
  /** managers that will not perform the action. if omitted, defaults to none */
  exclude?: number[];
};

export class TandaPayTestSuite {
  /** Address where the TandaPay smart contract has been deployed */
  public readonly tpAddress: Address;
  /** Address where the ERC-20 payment token (faucet token) used with TandaPay has been deployed */
  public readonly ftkAddress: Address;
  /** An array of viem `Account` that we can use for general transactions */
  public readonly accounts: Account[];
  /**
   * An array of `WriteableTandaPayManager`. All are assigned the role of `Secretary` for simplicity,
   * but only managers[0] is *actually* a secretary in the contract. the rest are members. Why? just
   * so it's easier to work with the types and iterate over them all. This is a use case that will only
   * be seen in the test suite ideally.
   */
  public readonly managers: WriteableTandaPayManager<TandaPayRole.Secretary>[];
  /** An array of clients that are used to create the managers */
  public readonly clients: WriteableClient[];
  /** a test client that has also been extended with publicActions */
  public readonly testClient: TestClientWithPublicActions;
  /** An alias for managers[0], this is the secretary of the community */
  public readonly secretary: WriteableTandaPayManager<TandaPayRole.Secretary>;

  public readonly secretaryAccount: Account;

  public readonly secretaryClient: WriteableClient;
  /**
   * A timeline helper. Allows us to easily advance to specific points within
   * the TandaPay monthly period to perform conditional logic based on time
   */
  public readonly timeline: TandaPayTimeline;

  /**
   * A dump of the test network upon first getting to the default state and having
   * all of the members join the community and apporve their subgroup assignments
   */
  protected defaultStateDump: DumpStateReturnType | null = null;

  constructor(ftkAddress: Address, tpAddress: Address) {
    this.ftkAddress = ftkAddress;
    this.tpAddress = tpAddress;
    this.accounts = makeAccounts(NUM_TEST_ACCOUNTS);
    this.clients = makeWriteableClients(NUM_TEST_ACCOUNTS);
    this.managers = makeManagers(this.clients, this.tpAddress);
    this.secretary = this.managers[0];
    this.secretaryAccount = this.accounts[0];
    this.secretaryClient = this.clients[0];
    this.testClient = makeTestClient().extend(publicActions);
    this.timeline = new TandaPayTimeline(this.tpAddress);
  }

  async approveFtkForAllAccounts() {
    await ftkApprove({
      writeableClients: this.clients,
      ftkAddress: this.ftkAddress,
      spender: this.tpAddress,
      amount: DEFAULT_FTK_BALANCE,
      amountToDistribute: DEFAULT_FTK_BALANCE,
    });
  }

  async toDefaultState(useCacheIfExists: boolean = true) {
    if (useCacheIfExists && this.defaultStateDump) {
      await this.testClient.loadState({ state: this.defaultStateDump });
      return this.defaultStateDump;
    }

    // in order for them to spend FTK joining the community, and later
    // paying premiums and other stuff, we'll need to make sure that they
    // have FTK and that they've approved the tandapay contract to spend
    await this.approveFtkForAllAccounts();

    // we'll create 3 subgroups for 15 members
    for (let i = 0; i < 3; i++) {
      await this.secretary.write.secretary.createSubgroup();
      // we'll divide 5 members into each of the 3 subgroups
      for (let j = 0; j < 5; j++) {
        // calculate wallet index and subgroupID
        const walletIndex = i * 5 + j;
        const subgroupId = BigInt(i + 1);
        // add this member to the community
        await this.secretary.write.secretary.addMemberToCommunity(
          this.accounts[walletIndex].address,
        );
        // assign them to their subgroup
        await this.secretary.write.secretary.assignMemberToSubgroup(
          this.accounts[walletIndex].address,
          subgroupId,
        );
      }
    }

    // initiate default state
    await this.secretary.write.secretary.initiateDefaultState(
      DEFAULT_COVERAGE_REQUIREMENT,
    );

    // have every member (including the secretary) join the community and
    // approve their subgroup assignment
    for (const m of this.managers) {
      await m.write.member.joinCommunity();
      await m.write.member.approveSubgroupAssignment(true);
      await m.write.member.payPremium();
    }
    await this.secretary.write.secretary.advancePeriod();

    // cache default state
    this.defaultStateDump = await this.testClient.dumpState();
    return this.defaultStateDump;
  }

  private async advanceTimeAndDoAction(
    advanceTimeFunc: () => Promise<void>,
    actionFunc: () => Promise<void>,
  ): Promise<string[]> {
    const log: string[] = [];
    let doAction = true;
    try {
      await advanceTimeFunc();
    } catch (error) {
      log.push(`aborting action, advance time failed: ${error}`);
      doAction = false;
    }

    if (doAction) {
      try {
        await actionFunc();
      } catch (error) {
        log.push(`action failed: ${error}`);
      }
    }

    return log;
  }

  /**
   * Filter manager indices using the generic utility
   */
  private filterManagerIndices = (
    params?: DoActionForEachManagerParams,
  ): Set<number> => {
    return filterAndValidate<number>({
      include: params ? params.include : undefined,
      exclude: params ? params.exclude : undefined,
      defaultInclude: () =>
        Array.from({ length: this.managers.length }, (_, i) => i),
      validators: [
        (filtered: Set<number>) =>
          Validators.setSize(filtered, this.managers.length, "manager indices"),
        (filtered: Set<number>) =>
          Validators.indicesInBounds(
            filtered,
            this.managers.length - 1,
            "manager index",
          ),
      ],
    });
  };

  /**
   * Filter claim IDs using the generic utility
   */
  private filterClaimIds = (
    claimIds: bigint[] | boolean,
    allClaimIds: Set<bigint>,
  ): Set<bigint> => {
    // Handle boolean cases
    if (claimIds === false) return new Set<bigint>();
    if (claimIds === true) return new Set<bigint>(allClaimIds);

    // Handle array case
    return filterAndValidate<bigint>({
      include: claimIds,
      defaultInclude: () => [],
      validators: [
        (filtered: Set<bigint>) =>
          Validators.setSize(filtered, allClaimIds.size, "claim IDs"),
        (filtered: Set<bigint>) =>
          Validators.elementsInSuperset(
            filtered,
            allClaimIds,
            `Claims given that are not in the list of submitted claim IDs!`,
          ),
      ],
    });
  };

  advanceTimeAndIssueRefunds = async () =>
    await this.advanceTimeAndDoAction(
      async () => {
        await this.timeline.advanceToRefundsDay();
      },
      async () => {
        await this.secretary.write.public.issueRefund();
      },
    );

  advanceTimeAndSubmitClaims = async (claimants: number[]) =>
    await this.advanceTimeAndDoAction(
      async () => {
        await this.timeline.advanceToSubmitClaimsDay();
      },
      async () => {
        // Get all of the unique claimants with validation
        const uniqueClaimants = this.filterManagerIndices({
          include: claimants,
        });

        // Have each one submit a claim
        for (const c of uniqueClaimants) {
          await this.managers[c].write.member.submitClaim();
        }
      },
    );

  advanceTimeAndWhitelistClaims = async (claims: boolean | bigint[]) =>
    await this.advanceTimeAndDoAction(
      async () => {
        await this.timeline.advanceToWhitelistClaimsDay();
      },
      async () => {
        // If claims === false, we aren't whitelisting any claims
        if (claims === false) return;

        // Get all submitted claims
        const periodId = await this.secretary.read.getCurrentPeriodId();
        const allClaimIds = new Set<bigint>(
          await this.secretary.read.getClaimIdsInPeriod(periodId),
        );

        // Filter and validate the claims
        const claimsToWhitelist = this.filterClaimIds(claims, allClaimIds);

        // Whitelist all the filtered and validated claims
        for (const c of claimsToWhitelist) {
          await this.secretary.write.secretary.whitelistClaim(c);
        }
      },
    );

  advanceTimeAndPayPremiums = async (params?: DoActionForEachManagerParams) =>
    await this.advanceTimeAndDoAction(
      async () => {
        await this.timeline.advanceToPayPremiumsDay();
      },
      async () => {
        const indices = this.filterManagerIndices(params);
        for (const i of indices)
          await this.managers[i].write.member.payPremium();
      },
    );

  advanceTimeAndAdvancePeriod = async () =>
    await this.advanceTimeAndDoAction(
      async () => {
        await this.timeline.advancePastEndOfPeriod();
      },
      async () => {
        await this.secretary.write.secretary.advancePeriod();
      },
    );

  advanceTimeAndWithdrawClaimFund = async (
    claimants: number[],
    forfeit: boolean = false,
  ) =>
    await this.advanceTimeAndDoAction(
      async () => {
        await this.timeline.advanceToWithdrawClaimFundDay();
      },
      async () => {
        // Get all of the unique claimants with validation
        const uniqueClaimants = this.filterManagerIndices({
          include: claimants,
        });

        // Have each one submit a claim
        for (const c of uniqueClaimants) {
          await this.managers[c].write.member.withdrawClaimFund(forfeit);
        }
      },
    );
}
