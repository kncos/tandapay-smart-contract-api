import { ChildProcess } from "child_process";
import {
  deployFaucetToken,
  deployTandaPay, spawnAnvil
} from "../helpers/tandapay_test_helpers";
import { TandaPayTestSuite } from "../helpers/tandapay_test_suite";
import {
  TandaPayEventAlias,
  TandaPayLog,
  toTandaPayLogs,
} from "tandapay_manager/read/types";
import { DEFAULT_CLAIMANT_INDEX, DEFAULT_DEFECTOR } from "../test_config";
import { memberInfoJsonReplacer, MemberStatus, periodInfoJsonReplacer, TandaPayState } from "types";
import * as fs from 'fs/promises';
import { isAddressEqual } from "viem";

let anvil: ChildProcess;
let suite: TandaPayTestSuite;
/** logs we'll commonly want to omit */
const logsToOmit: TandaPayEventAlias[] = [
  "addedToCommunity",
  "approvedOwnSubgroupAssignment",
  "assignedToSubgroup",
  "memberJoinedCommunity",
  "memberStatusUpdated",
  "premiumPaid",
  "newSubgroupCreated",
  "secretaryRoleTransferred",
  "enteredDefaultState",
];

//let dump: DumpStateReturnType;

//beforeAll(async () => {
//  anvil = await spawnAnvil();
//  const fa = await deployFaucetToken();
//  const ta = await deployTandaPay(fa);
//  suite = new TandaPayTestSuite(fa, ta);
//  await suite.toDefaultState();
//  dump = await suite.getDump();
//}, 30000);

beforeEach(async () => {
  anvil = await spawnAnvil();
  const fa = await deployFaucetToken();
  const ta = await deployTandaPay(fa);
  suite = new TandaPayTestSuite(fa, ta);
  //await suite.toDefaultState();
});
afterEach(async () => {
  anvil.kill();
})

describe("testing claims, defectors, etc.", () => {
  it("A claim can be submitted, whitelisted, and paid out", async () => {
    // first, we'll get into the default state. This should do all of the initial
    // setup, having members pay their initial premiums then advancing to the
    // first period
    await suite.toPeriodAfterClaim({alreadyInDefault: false});
    // we mine just to make sure that we get all of the logs
    await suite.testClient.mine({ blocks: 100 });
    const logs = toTandaPayLogs(
      await suite.secretary.events.getLogs({
        fromBlock: 0n,
        toBlock: "latest",
      }),
    );

    // we'll get the appropriate logs we're interested in
    const l1 =
      logs.find((l) => l.alias === "claimSubmitted") ??
      fail("no claimSubmitted log");
    const l2 =
      logs.find((l) => l.alias === "claimWhitelisted") ??
      fail("no claimWhitelisted log");
    // narrow the types
    const submitted = l1 as TandaPayLog<"claimSubmitted">
    const whitelisted = l2 as TandaPayLog<"claimWhitelisted">

    // ensure that the claim we submitted and the claim that was whitelisted
    // were the same
    expect(submitted.args.claimId).toBe(whitelisted.args.cId);

    // let's get their balance before they withdraw their claim fund
    const beforeBalance = await suite.getFtkBalanceOf(DEFAULT_CLAIMANT_INDEX);

    // now have the claimant claim their funds
    const possErr = await suite.advanceTimeAndWithdrawClaimFund({ include: [DEFAULT_CLAIMANT_INDEX], forfeit: false });
    expect(possErr.length).toBe(0);

    // get their balance after they withdraw their claim fund
    const afterBalance = await suite.getFtkBalanceOf(DEFAULT_CLAIMANT_INDEX);

    // get the claim info for this specific claim. We'll use the whitelisted claim Id from
    // the event that was fetched earlier
    const lastperiod = (await suite.secretary.read.getCurrentPeriodId()) - 1n;
    const claimInfo = await suite.secretary.read.getClaimInfo(lastperiod, whitelisted.args.cId!);

    // we expect the difference to be the claim amount
    expect(afterBalance-claimInfo.amount).toBe(beforeBalance);
  }, 30000);

  const defectorSetup = async (claimants: number[], defectors: number[]) => {
    await suite.toPeriodAfterClaim({alreadyInDefault: false, claimants: claimants, wontPayPremium: defectors});

    const ops = [
      async () => await suite.advanceTimeAndDefect({include: defectors}),
      async () => await suite.advanceTimeAndWithdrawClaimFund({include: claimants}),
      async () => await suite.advanceTimeAndPayPremiums({exclude: defectors}),
      async () => await suite.advanceTimeAndAdvancePeriod(),
    ]

    const allErrors: string[] = [];
    for (const op of ops) {
      const errors = await op();
      if (Array.isArray(errors) && errors && errors.length > 0)
        allErrors.push(...errors);
    }

    return allErrors;
  }

  it("one defector, doesn't pay last premium, community remains in default state.", async () => {
    // perform setup
    const claimants = [DEFAULT_CLAIMANT_INDEX];
    const defectors = [DEFAULT_DEFECTOR];
    const errors = await defectorSetup(claimants, defectors);
    if (errors && errors.length > 0) 
      console.warn(errors);

    // this will get logs for when someone defects, regardless of whether or not
    // their status is updated to "defected" or something else like 'user-quit"/"unpaid-invalid"
    let tandaPayLogs = toTandaPayLogs((await suite.secretary.events.getLogs({
      fromBlock: 0n,
      toBlock: 'latest',
    }))).filter(log => log.alias === "memberDefected");

    // we expect there to be an event emitted for each defector
    expect(tandaPayLogs.length).toBe(defectors.length);

    // go through each log
    for (const log of tandaPayLogs) {
      // the logs should be properly filtered to just memberDefected logs
      if (log.alias !== "memberDefected")
        fail(`check tandaPayLogs filter. found log that wasn't \'memberDefected\': ${log.alias}`);

      // narrow the type
      const l = log as TandaPayLog<'memberDefected'>;
      // check that the address in the event matches our defector's address
      const defectorAddress = l.args.member ?? fail('defectorAddress was undefined');
      const defectorInfo = await suite.secretary.read.getMemberInfoFromId(BigInt(DEFAULT_DEFECTOR)+1n);
      expect(isAddressEqual(defectorAddress, defectorInfo.walletAddress)).toBe(true);

      expect(defectorInfo.subgroupId).toBe(0n);

      // they shouldn't have any funds in their savings or community escrow (it should all be in pending)
      expect(defectorInfo.communityEscrowAmount).toBe(0n);
      expect(defectorInfo.savingsEscrowAmount).toBe(0n);

      // they shouldn't have coverage this period or have their premium paid
      expect(defectorInfo.isEligibleForCoverageThisPeriod).toBe(false);
      expect(defectorInfo.isPremiumPaidThisPeriod).toBe(false);
    }

    const communityState = await suite.secretary.read.getCommunityState();
    expect(communityState).toBe(TandaPayState.Default);
    const currentPeriod = await suite.secretary.read.getCurrentPeriodId();
    const defectorIds = await suite.secretary.read.getDefectorMemberIdsInPeriod(currentPeriod-1n);
    expect(defectorIds.length).toBe(defectors.length);
  });

});

//afterAll(() => anvil.kill());
