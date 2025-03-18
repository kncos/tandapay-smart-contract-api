import { WriteableTandaPayManager } from "tandapay_manager/tandapay_manager";
import {
  memberInfoJsonReplacer,
  MemberStatus,
  subgroupInfoJsonReplacer, WriteableClient
} from "types";
import {
  TestClient,
  PublicClient,
  Address,
  publicActions,
  Account,
  DumpStateReturnType,
  isAddressEqual,
} from "viem";
import {
  makeWriteableClients,
  makeManagers,
  makeTestClient,
  makeAccounts,
  ftkApprove,
  getFtkBalance,
} from "./tandapay_test_helpers";
import { TandaPayTimeline } from "./tandapay_timeline";
import { filterAndValidate, Validators } from "utils";
import {
  NUM_TEST_ACCOUNTS,
  DEFAULT_FTK_BALANCE,
  DEFAULT_COVERAGE_REQUIREMENT,
  DEFAULT_CLAIMANT_INDEX,
} from "../test_config";
import { TandaPayLog, toTandaPayLogs } from "tandapay_manager/read/types";

export type TestClientWithPublicActions = TestClient & PublicClient;
export type DoActionForEachManagerParams = {
  /** managers that will perform the action. If omitted, defaults to all */
  include?: number[];
  /** managers that will not perform the action. if omitted, defaults to none */
  exclude?: number[];
};

export type ToPeriodAfterClaimParameters = {
  alreadyInDefault?: boolean;
  claimants?: number[];
  defectors?: number[];
  reorgPaidInvalid?: boolean;
};

export type ReorgHelperParameters = {
  paidInvalidNewSubgroups: Map<Address, bigint>;
};

export type ToPeriodAfterDefectorsParameters = ToPeriodAfterClaimParameters;

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
  public readonly managers: WriteableTandaPayManager<'secretary'>[];
  /** An array of clients that are used to create the managers */
  public readonly clients: WriteableClient[];
  /** a test client that has also been extended with publicActions */
  public readonly testClient: TestClientWithPublicActions;
  /** An alias for managers[0], this is the secretary of the community */
  public readonly secretary: WriteableTandaPayManager<'secretary'>;

  public readonly secretaryAccount: Account;

  public readonly secretaryClient: WriteableClient;
  /**
   * A timeline helper. Allows us to easily advance to specific points within
   * the TandaPay monthly period to perform conditional logic based on time
   */
  public readonly timeline: TandaPayTimeline;

  private addressToManagerMap = new Map<
    Address,
    WriteableTandaPayManager<'secretary'>
  >();

  /**
   * A dump of the test network upon first getting to the default state and having
   * all of the members join the community and apporve their subgroup assignments
   */
  //public afterDeploymentDump: DumpStateReturnType | null = null;
  //public defaultStateDump: DumpStateReturnType | null = null;
  //public periodAfterClaimDump: DumpStateReturnType | null = null;

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

    for (const m of this.managers) {
      const addr = (() => {
        if ('wallet' in m.client && m.client.wallet)
          return m.client.wallet.account.address;
        else if ('account' in m.client && m.client.account)
          return m.client.account.address;
        else
          throw new Error("in tp test suite: could not extract client account!!");
      })();

      if (addr === undefined)
        throw new Error("undefined manager address in tandapay test suite?");
      // we use .toLowerCase because addresses are not case sensitive and can
      // seemingly have random casing at times
      this.addressToManagerMap.set(addr.toLowerCase() as Address, m);
    }
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

  async getFtkBalanceOf(managerIndex: number) {
    if (managerIndex < 0 || managerIndex >= this.managers.length)
      throw new Error("manager index out of bounds!");

    return getFtkBalance({
      ftkAddress: this.ftkAddress,
      walletAddress: this.accounts[managerIndex].address,
    });
  }

  loadDump = async (dump: DumpStateReturnType) =>
    await this.testClient.loadState({ state: dump });
  getDump = async () => await this.testClient.dumpState();

  getManagerFromAddress = (address: Address) =>
    this.addressToManagerMap.get(address.toLowerCase() as Address);

  async toDefaultState() {
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
  }

  async toPeriodAfterClaim(params: ToPeriodAfterClaimParameters) {
    if (
      params.alreadyInDefault === undefined ||
      params.alreadyInDefault === false
    )
      await this.toDefaultState();

    const logs: string[] = [];
    // we'll advance through the period like normal now:
    let l = await this.advanceTimeAndIssueRefunds();
    //console.log(`issuing refunds. day: ${await this.timeline.getCurrentDayInPeriod()}`)
    logs.push(...l);
    // they'll submit a claim
    l = await this.advanceTimeAndSubmitClaims(
      params.claimants ? params.claimants : [DEFAULT_CLAIMANT_INDEX],
    );
    //console.log(`submitting claims. day: ${await this.timeline.getCurrentDayInPeriod()}`)
    logs.push(...l);
    // the secretary will whitelist it
    l = await this.advanceTimeAndWhitelistClaims(true);
    //console.log(`whitelisting claims. day: ${await this.timeline.getCurrentDayInPeriod()}`)
    logs.push(...l);
    // we'll advance time and everyone will pay their premiums like normal
    l = await this.advanceTimeAndPayPremiums({
      exclude: params.defectors,
    });
    //console.log(`paying premiums. day: ${await this.timeline.getCurrentDayInPeriod()}`)
    logs.push(...l);
    // finally advance to the next period
    l = await this.advanceTimeAndAdvancePeriod();
    //console.log(`advancing period. day: ${await this.timeline.getCurrentDayInPeriod()}`)
    logs.push(...l);

    if (l.length != 0)
      console.warn("!!! in toPeriodAfterClaim !!!\n", l.join("\n"));
  }

  async toPeriodAfterDefectors(params: ToPeriodAfterDefectorsParameters) {
    await this.toPeriodAfterClaim(params);

    const allErrors: string[] = [];
    let l = await this.advanceTimeAndDefect({ include: params.defectors });
    allErrors.push(...l);
    l = await this.advanceTimeAndWithdrawClaimFund({
      include: params.claimants,
    });
    allErrors.push(...l);

    if (params.reorgPaidInvalid) {
      // await this.reorgHelper();
    }

    l = await this.advanceTimeAndPayPremiums({ exclude: params.defectors });
    allErrors.push(...l);
    l = await this.advanceTimeAndAdvancePeriod();
    allErrors.push(...l);

    await this.validateDefectors();
    return allErrors;
  }

  validateDefectors = async () => {
    // this will get logs for when someone defects
    const tandaPayLogs = toTandaPayLogs(
      await this.secretary.events.getLogs({
        fromBlock: 0n,
        toBlock: "latest",
      }),
    ).filter((log) => log.alias === "memberDefected");

    // we'll also get a list of the defector IDs
    const currentPeriod = await this.secretary.read.getCurrentPeriodId();
    const defectorIdsArr =
      await this.secretary.read.getDefectorMemberIdsInPeriod(
        currentPeriod - 1n,
      );

    // one log should be emitted for each defector
    expect(defectorIdsArr.length).toBe(tandaPayLogs.length);

    // Here, we create a set containing each defector ID. As we loop through the events,
    // we will ensure that each one is present by removing them from the set and checking
    // that the set is empty by the time the loop is done executing
    const defectorIds = new Set<bigint>(defectorIdsArr);

    // go through each log
    for (const log of tandaPayLogs) {
      // the logs should be properly filtered to just memberDefected logs
      if (log.alias !== "memberDefected")
        fail(
          `check tandaPayLogs filter. found log that wasn't 'memberDefected': ${log.alias}`,
        );

      // narrow the type of the log
      const l = log as TandaPayLog<"memberDefected">;
      // get info about the defector described in this log
      const defectorAddress =
        l.args.member ?? fail("defectorAddress was undefined");
      const defectorInfo =
        await this.secretary.read.getMemberInfoFromAddress(defectorAddress);

      // remove the defector's ID from the set to keep track of which ones have been seen
      defectorIds.delete(defectorInfo.id);

      // they shouldn't be in a subgroup
      expect(defectorInfo.subgroupId).toBe(0n);
      // their status should be that of a Defector
      expect(defectorInfo.memberStatus).toBe(MemberStatus.Defected);

      // they shouldn't have any funds in their savings or community escrow (it should all be in pending)
      expect(defectorInfo.communityEscrowAmount).toBe(0n);
      expect(defectorInfo.savingsEscrowAmount).toBe(0n);

      // they shouldn't have coverage this period or have their premium paid
      expect(defectorInfo.isEligibleForCoverageThisPeriod).toBe(false);
      expect(defectorInfo.isPremiumPaidThisPeriod).toBe(false);
    }

    // this will ensure that all of the defectors had a corresponding event emitted
    expect(defectorIds.size).toBe(0);
  };

  reorgHelper = async (params: ReorgHelperParameters) => {
    const { paidInvalidNewSubgroups } = params;
    // the set of new subgroups they're going to. We'll use this to create a map so that
    // we can get a "peer" that is already in each said subgroup to approve the reorg-ing members.
    const allUniqueNewSubgroupIds = new Set<bigint>(
      paidInvalidNewSubgroups.values(),
    );
    // this will be the map that stores a (subgroupID, peer) pair, where the peer is the writeable
    // tandapay manager associated with that peer's account
    const subgroupPeers = new Map<
      bigint,
      WriteableTandaPayManager<'secretary'>
    >();

    // build up the map for each unique subgroup id
    for (const id of allUniqueNewSubgroupIds) {
      // get the subgroup info
      const peerSubgroupInfo = await this.secretary.read.getSubgroupInfo(id);
      // verify that we actually have a peer to use
      if (peerSubgroupInfo.members.length === 0) {
        console.warn(
          `in reorgHelper, encountered a peer subgroup with 0 members.`,
        );
        console.warn(
          `${JSON.stringify(peerSubgroupInfo, subgroupInfoJsonReplacer, 2)}`,
        );
        continue;
      }

      // doesn't matter which one we got, but as long as there is someone in
      // the list, we can just select the first one
      const peerAddr = peerSubgroupInfo.members[0];
      // get the TandaPay manager associated with their address
      const peerManager = this.getManagerFromAddress(peerAddr);
      // this should never happen, but if it does, fail the test
      if (peerManager === undefined)
        fail("no manager for peer address in reorg helper?");

      // finally, add the manager for this subgroup ID
      subgroupPeers.set(id, peerManager);
    }

    // now, let's go through each paid-invalid member and do the appropriate action with them
    for (const [address, newSubgroupId] of paidInvalidNewSubgroups) {
      const m =
        this.getManagerFromAddress(address) ??
        fail("failed to get manager from address");
      // they need to leave from their own subgroup
      await m.write.member.leaveSubgroup();
      let memberInfo = await m.read.getMemberInfoFromAddress(address);
      // they should be Paid Invalid now
      expect(memberInfo.memberStatus).toBe(MemberStatus.PaidInvalid);

      // if they have a new subgroup ID of 0, then they are just going to leave, so
      // we won't do anything else.
      if (newSubgroupId === 0n) {
        console.log(`${JSON.stringify(memberInfo, memberInfoJsonReplacer, 2)}
        ^^^ newSubgroupId was set to 0n, so this guy won't be reorging`);
        continue;
      }

      // have secretary assign them to a new subgroup ID
      await this.secretary.write.secretary.assignMemberToSubgroup(
        address,
        newSubgroupId,
        true,
      );
      memberInfo = await m.read.getMemberInfoFromAddress(address);
      // they should become reorged at this time
      expect(memberInfo.memberStatus).toBe(MemberStatus.Reorged);

      // they approve their own subgroup assignment
      await m.write.member.approveSubgroupAssignment(true);

      // finally, a peer in their new subgroup approves their joining
      const peer = subgroupPeers.get(newSubgroupId);
      if (!peer)
        fail(
          `no peer was populated in the subgroupPeers map for subgroup ID ${newSubgroupId}`,
        );

      await peer.write.member.approveNewSubgroupMember(
        newSubgroupId,
        memberInfo.id,
        true,
      );
      memberInfo = await m.read.getMemberInfoFromAddress(address);
      // now they should go back to being valid, since they've been assigned to a new subgroup successfully
      expect(memberInfo.memberStatus).toBe(MemberStatus.Valid);
    }

    // now, go through each subgroup and ensure the members were properly added
    for (const [address, newSubgroupId] of paidInvalidNewSubgroups) {
      const subgroupInfo =
        await this.secretary.read.getSubgroupInfo(newSubgroupId);
      const includesAddress = subgroupInfo.members.some((addr) =>
        isAddressEqual(addr, address),
      );
      expect(includesAddress).toBe(true);
    }
  };

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

  advanceTimeAndDefect = async (params: DoActionForEachManagerParams) =>
    await this.advanceTimeAndDoAction(
      async () => {
        await this.timeline.advanceToDefectDay();
      },
      async () => {
        const indices = this.filterManagerIndices(params);
        for (const i of indices)
          await this.managers[i].write.member.defectFromCommunity();
      },
    );

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
        //const f = async () => await this.secretary.read.getCurrentPeriodId();
        await this.secretary.write.secretary.advancePeriod();
      },
    );

  advanceTimeAndWithdrawClaimFund = async (
    params: DoActionForEachManagerParams & { forfeit?: boolean },
  ) =>
    await this.advanceTimeAndDoAction(
      async () => {
        await this.timeline.advanceToWithdrawClaimFundDay();
      },
      async () => {
        const { forfeit, ...rest } = params;

        // Get all of the unique claimants with validation
        const uniqueClaimants = this.filterManagerIndices(rest);

        // Have each one submit a claim
        for (const c of uniqueClaimants) {
          await this.managers[c].write.member.withdrawClaimFund(
            forfeit !== undefined ? forfeit : false,
          );
        }
      },
    );
}
