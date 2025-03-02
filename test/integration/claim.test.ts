import { ChildProcess } from "child_process";
import {
  deployFaucetToken,
  deployTandaPay,
  spawnAnvil,
} from "../helpers/tandapay_test_helpers";
import { TandaPayTestSuite } from "../helpers/tandapay_test_suite";
import {
  TandaPayEventAlias,
  TandaPayLog,
  toTandaPayLogs,
} from "tandapay_manager/read/tandapay_event_aliases";

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
  it("a claim can successfully be made, whitelisted, and paid out", async () => {
    // first, we'll get into the default state. This should do all of the initial
    // setup, having members pay their initial premiums then advancing to the
    // first period
    await suite.toDefaultState();

    const advanceTimeLogs: string[] = [];
    // we'll advance through the period like normal now:
    let l = await suite.advanceTimeAndIssueRefunds();
    advanceTimeLogs.push(...l);
    // this will be the id of our claimant
    const claimant_id = 3;
    // they'll submit a claim
    l = await suite.advanceTimeAndSubmitClaims([claimant_id]);
    advanceTimeLogs.push(...l);
    // the secretary will whitelist it
    l = await suite.advanceTimeAndWhitelistClaims(true);
    advanceTimeLogs.push(...l);
    // we'll advance time and everyone will pay their premiums like normal
    l = await suite.advanceTimeAndPayPremiums();
    advanceTimeLogs.push(...l);
    // finally advance to the next period
    l = await suite.advanceTimeAndAdvancePeriod();
    advanceTimeLogs.push(...l);
    // NOTE: at this point, we could advance time and have them withdraw their fund or forfeit it

    expect(advanceTimeLogs.length).toBe(0);
    // we do this just to make sure that we get all of the logs
    await suite.testClient.mine({ blocks: 100 });
    const logs = toTandaPayLogs(
      await suite.secretary.events.getLogs({
        fromBlock: 0n,
        toBlock: "latest",
      }),
    );
    // we'll omit these since we aren't interested

    // we'll get the appropriate logs we're interested in
    const l1 =
      logs.find((l) => l.alias === "claimSubmitted") ??
      fail("no claimSubmitted log");
    const l2 =
      logs.find((l) => l.alias === "claimWhitelisted") ??
      fail("no claimWhitelisted log");
    // narrow the types
    // TODO: improve this to allow for aliases instead of raw type names
    const submitted = l1 as TandaPayLog<"ClaimSubmitted">;
    const whitelisted = l2 as TandaPayLog<"ClaimWhiteListed">;
    // ensure that the whitelisted claim and submitted claim are the same
    expect(submitted.args.claimId).toBe(whitelisted.args.cId);
  }, 30000);
});

afterAll(() => anvil.kill());
