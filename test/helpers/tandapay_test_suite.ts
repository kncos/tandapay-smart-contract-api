import { WriteableTandaPayManager } from "contract_managers/tandapay_manager";
import { TandaPayRole, WriteableClient } from "types";
import { TestClient, PublicClient, Address, publicActions, Account, DumpStateReturnType } from "viem";
import { makeWriteableClients, makeManagers, makeTestClient, makeAccounts, ftkApprove } from "./tandapay_test_helpers";
import TandaPayTimeline from "./tandapay_timeline";

export type TestClientWithPublicActions = TestClient & PublicClient;
export const DAYS_IN_SECONDS = 24 * 60 * 60;
export const NUM_TEST_ACCOUNTS = 15;
export const DEFAULT_FTK_BALANCE = (10n ** 8n) * (10n ** 18n);
export const DEFAULT_COVERAGE_REQUIREMENT = 1500n * 10n * 18n;

export type DoActionForEachManagerParams = {
  /** managers that will perform the action. If omitted, defaults to all */
  include?: number[],
  /** managers that will not perform the action. if omitted, defaults to none */
  exclude?: number[],
}

export class TandaPayTestSuite {
  public readonly tpAddress: Address;
  public readonly ftkAddress: Address;
  public readonly accounts: Account[];
  public readonly managers: WriteableTandaPayManager<TandaPayRole.Secretary>[];
  public readonly clients: WriteableClient[];
  public readonly testClient: TestClientWithPublicActions;
  public readonly secretary: WriteableTandaPayManager<TandaPayRole.Secretary>;

  public readonly timeline: TandaPayTimeline;

  protected defaultStateDump: DumpStateReturnType | null = null;

  constructor(ftkAddress: Address, tpAddress: Address) {
    // address of faucet token contract.
    this.ftkAddress = ftkAddress;
    // address for tandapay contract
    this.tpAddress = tpAddress;
    this.accounts = makeAccounts(NUM_TEST_ACCOUNTS);
    // writeable clients we'll be using to perform write ops on tandapay
    this.clients = makeWriteableClients(NUM_TEST_ACCOUNTS);
    // managers we'll use to interact with tandapay via the write clients
    this.managers = makeManagers(this.clients, this.tpAddress);
    this.secretary = this.managers[0];
    // a test client for general use
    this.testClient = makeTestClient().extend(publicActions);
    // a timeline helper
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
      this.testClient.loadState({state: this.defaultStateDump});
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
        const subgroupId = BigInt(i+1);
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
    await this.secretary.write.secretary.initiateDefaultState(DEFAULT_COVERAGE_REQUIREMENT);
    
    // have every member (including the secretary) join the community and
    // approve their subgroup assignment
    for (const m of this.managers) {
      await m.write.member.joinCommunity();
      await m.write.member.approveSubgroupAssignment(true);
    }

    // cache default state
    this.defaultStateDump = await this.testClient.dumpState();
    return this.defaultStateDump;
  }

  private async advanceTimeAndDoAction(
    advanceTimeFunc: () => Promise<void>, 
    actionFunc: () => Promise<void>
  ): Promise<string[]> {
    let log: string[] = [];
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
      } catch(error) {
        log.push(`action failed: ${error}`);
      }
    }

    return log;
  }


  doActionForEachManager = async (params: DoActionForEachManagerParams) => {
    let includeNumbers = new Set<number>(params.include ?? Array.from({length: this.managers.length}, (_, i) => i));
    let excludeNumbers = new Set<number>(params.exclude ?? []);
    let batch = new Set<number>([...includeNumbers].filter((index) => !excludeNumbers.has(index)));

    if (batch.size > this.managers.length)
      return Promise.reject(`Too many elements given in doActionForEachManager. batch size ${batch.size} >= managers size ${this.managers.length}!!`);

    if ([...batch].some(i => i < 0 || i >= this.managers.length)) 
      return Promise.reject(`At least one element given to doActionForEachManager is out of bounds! Should be 0 <= i < ${this.managers.length}`);;

    for (let i of batch)
      this.managers[i]
  }

  advanceTimeAndIssueRefunds = async () => await this.advanceTimeAndDoAction(
    async () => {await this.timeline.advanceToRefundsDay()},
    async () => {await this.secretary.write.public.issueRefund()},
  );

  advanceTimeAndSubmitClaims = async (claimants: number[]) => await this.advanceTimeAndDoAction(
    async () => {
      await this.timeline.advanceToSubmitClaimsDay();
    },
    async () => {
      // get each unique claimant (in case duplicates were passed for whatever reason)
      const uniqueClaimants = new Set<number>(claimants);
      // if the list of unique claimants is greater than the total number of possible claimants,
      // then that means we inherently have some invalid ones. return an error
      if (uniqueClaimants.size > this.managers.length)
        return Promise.reject(`too many unique claimants to be valid? ${uniqueClaimants.size} given, maximum of ${this.managers.length} expected`);
      // ensure that every claimant given is the valid index of one of our managers
      if ([...uniqueClaimants].some(i => i < 0 || i >= this.managers.length))
        return Promise.reject(`One or more claimants passed that was out of bounds! expected 0 <= claimant < ${this.managers.length}`);

      // have each one submit a claim
      for (let c of uniqueClaimants) {
        await this.managers[c].write.member.submitClaim();
      }
    },
  );

  advanceTimeAndWhitelistClaims = async (claims: boolean | bigint[]) => await this.advanceTimeAndDoAction(
    async () => { await this.timeline.advanceToWhitelistClaimsDay() },
    async () => {
      // if `claims === false`, then we aren't whitelisting any claims
      if (claims === false)
        return;

      // otherwise, we'll need to know what claims were actually submitted:
      let periodId = await this.secretary.read.getCurrentPeriodId();
      let claimIds = new Set<bigint>(await this.secretary.read.getClaimIdsInPeriod(periodId));

      // if `true` was given, we're just whitelisting every claim that was submitted
      if (claims === true) {
        for (let c of claimIds)
          await this.secretary.write.secretary.whitelistClaim(c);
      // otherwise, if an array of bigints was given, that is an array of claimIds which we will be whitelisting
      } else if (Array.isArray(claims)) {
        // get every unique claimid that was passed
        const uniqueClaims = new Set<bigint>(claims);
        // if too many were given, that doesn't make sense, so just return an error.
        // that would necessarily mean at least one of them is out of bounds.
        if (uniqueClaims.size > claimIds.size)
          return Promise.reject(`too many claims provided? only had ${claimIds.size} in period ${periodId}. Was given ${uniqueClaims.size} claim ids`);
        
        // ensure that claimIds is a superset of uniqueClaims, because if it isn't, that means
        // at least one invalid claim ID was passed
        let isSuperset = [...uniqueClaims].every(elem => claimIds.has(elem));
        if (!isSuperset)
          return Promise.reject(`claims given that are not in the list of submitted claim IDs for this period! Given: ${uniqueClaims}, Submitted claims were: ${claimIds}`);
        
        // otherwise, all seems good so just whitelist every claim that was given
        for (let c of uniqueClaims)
          this.secretary.write.secretary.whitelistClaim(c);
      }
    }
  )

  advanceTimeAndPayPremiums = async (payees: boolean | number[]) => await this.advanceTimeAndDoAction(
    async () => { await this.timeline.advanceToPayPremiumsDay() },
    async () => {
      // if false was given, nobody pays their claims, we'll just advance time
      if (payees === false)
        return;

      // if true was given, everyone pays their premiums
      if (payees === true)
        for (let m of this.managers)
          m.write.member.payPremium();

      // otherwise, if an array was given, only have the ones specified in the
      // array pay their premium
    }
  )



//  async advanceTimeAndIssueRefunds(): Promise<string[]> {
//    return await this.advanceTimeAndDoAction(
//      async (): Promise<void> => {await this.timeline.advanceToRefundsDay()},
//      async (): Promise<void> => {await this.secretary.write.public.issueRefund()},
//    );
//  }
}

