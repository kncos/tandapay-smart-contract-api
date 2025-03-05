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
import { memberInfoJsonReplacer, MemberStatus } from "types";
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

  it("Defection works", async () => {
    await suite.toPeriodAfterClaim({alreadyInDefault: false});

    let e = await suite.advanceTimeAndDefect({include: [DEFAULT_DEFECTOR]});
    console.log(e);
    e = await suite.advanceTimeAndWithdrawClaimFund({include: [DEFAULT_CLAIMANT_INDEX]});
    console.log(e);
    e = await suite.advanceTimeAndPayPremiums({exclude: [DEFAULT_DEFECTOR]});
    console.log(e);
    e = await suite.advanceTimeAndAdvancePeriod();
    console.log(e);

    let tandaPayLogs = toTandaPayLogs((await suite.secretary.events.getLogs({
      fromBlock: 0n,
      toBlock: 'latest',
    }))).filter(log => log.alias === "memberDefected");

    const curPeriod = await suite.secretary.read.getCurrentPeriodId();
    console.log(curPeriod);
    for (let memberId = 1n; memberId <= 15n; memberId++) {
      let memberInfo = await suite.secretary.read.getMemberInfoFromId(memberId, curPeriod-1n);
      console.log(memberInfo);
    }

    console.log(tandaPayLogs);
    for (const log of tandaPayLogs) {
      if (log.alias !== "memberDefected")
        fail(`check tandaPayLogs filter. found log that wasn't \'memberDefected\': ${log.alias}`);

      const l = log as TandaPayLog<'memberDefected'>;
      const defectorAddress = l.args.member ?? fail('defectorAddress was undefined');
      const defectorInfo = await suite.secretary.read.getMemberInfoFromId(BigInt(DEFAULT_DEFECTOR)+1n);
      expect(isAddressEqual(defectorAddress, defectorInfo.walletAddress)).toBe(true);
      // make sure they are marked as defected
      expect(defectorInfo.memberStatus).toBe(MemberStatus.Defected);
      // they shouldn't have any funds in their savings or community escrow (it should all be in pending)
      expect(defectorInfo.communityEscrowAmount).toBe(0n);
      expect(defectorInfo.savingsEscrowAmount).toBe(0n);
      // they shouldn't have coverage this period or have their premium paid
      expect(defectorInfo.isEligibleForCoverageThisPeriod).toBe(false);
      expect(defectorInfo.isPremiumPaidThisPeriod).toBe(false);
      // their subgroup id should be "0" -- in TandaPay's smart contract, subgroup IDs seem to start
      // from 1, with 0 being used as a placeholder for "invalid" -- which makes sense if they defected.
      expect(defectorInfo.subgroupId).toBe(0n); 
    }
  });

});

//afterAll(() => anvil.kill());
