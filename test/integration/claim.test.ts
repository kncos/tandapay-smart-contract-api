import { ChildProcess } from "child_process";
import {
  deployFaucetToken,
  deployTandaPay,
  getFtkTransactions,
  spawnAnvil,
} from "../helpers/tandapay_test_helpers";
import { TandaPayTestSuite } from "../helpers/tandapay_test_suite";
import {
  TandaPayEventAlias,
  TandaPayLog,
  toTandaPayLogs,
} from "tandapay_manager/read/types";
import { formatEther } from "viem";
import { DEFAULT_CLAIMANT_INDEX, DEFAULT_DEFECTOR } from "../test_config";

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

beforeAll(async () => {
  anvil = await spawnAnvil();
  const fa = await deployFaucetToken();
  const ta = await deployTandaPay(fa);
  suite = new TandaPayTestSuite(fa, ta);
});

describe("testing claims, defectors, etc.", () => {
  it("A claim can be submitted, whitelisted, and paid out", async () => {
    // first, we'll get into the default state. This should do all of the initial
    // setup, having members pay their initial premiums then advancing to the
    // first period
    await suite.toPeriodAfterClaim();

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
    await suite.toPeriodAfterClaim();
    console.log(await suite.timeline.getCurrentDayInPeriod());
    let errs = await suite.advanceTimeAndDefect({include: [DEFAULT_DEFECTOR]});
    console.log(await suite.timeline.getCurrentDayInPeriod());
    errs.push(...(await suite.advanceTimeAndPayPremiums()));
    console.log(await suite.timeline.getCurrentDayInPeriod());
    errs.push(...(await suite.advanceTimeAndAdvancePeriod()));
    console.log(await suite.timeline.getCurrentDayInPeriod());
    console.log(errs);

    const logs = toTandaPayLogs(
      await suite.secretary.events.getLogs({
        fromBlock: 0n,
        toBlock: "latest",
      }),
    ).filter(e => !logsToOmit.includes(e.alias)).map(l => l.alias);

    console.log(logs);
  });
});

afterAll(() => anvil.kill());
