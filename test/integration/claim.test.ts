import { ChildProcess } from "child_process";
import {
  deployFaucetToken,
  deployTandaPay,
  spawnAnvil,
} from "../helpers/tandapay_test_helpers";
import { TandaPayTestSuite } from "../helpers/tandapay_test_suite";
import { toTandaPayLogs } from "tandapay_manager/read/types";
import { TandaPayLog } from "tandapay_manager/read/types";
import { DEFAULT_CLAIMANT_INDEX, DEFAULT_DEFECTOR } from "../test_config";
import { TandaPayState } from "types";
import { Address } from "viem";

let anvil: ChildProcess;
let suite: TandaPayTestSuite;
/** logs we'll commonly want to omit */

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
afterEach(() => {
  anvil.kill();
});

describe("testing claims, defectors, etc.", () => {
  //TODO: perhaps make a helper that does different printing ops like this?
  //  const printCommunityState = async (msg: string = "State:") =>
  //    console.log(
  //      `${msg}: ${TandaPayState[await suite.secretary.read.getCommunityState()]}`,
  //    );
  //  const printCoverageAmount = async (msg: string = "Coverage Amt:") =>
  //    console.log(
  //      `${msg}: ${(await suite.timeline.getCurrentPeriodInfo()).coverageAmount}`,
  //    );
  //  const printSubgroupInfo = async (subgroup: bigint) => {
  //    const subgroupInfo = await suite.secretary.read.getSubgroupInfo(subgroup);
  //    console.log(
  //      `=== Subgroup Info ===\n ${JSON.stringify(subgroupInfo, subgroupInfoJsonReplacer, 2)}`,
  //    );
  //  };

  it("A claim can be submitted, whitelisted, and paid out", async () => {
    // first, we'll get into the default state. This should do all of the initial
    // setup, having members pay their initial premiums then advancing to the
    // first period
    await suite.toPeriodAfterClaim({ alreadyInDefault: false });
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
    const submitted = l1 as TandaPayLog<"claimSubmitted">;
    const whitelisted = l2 as TandaPayLog<"claimWhitelisted">;

    // ensure that the claim we submitted and the claim that was whitelisted
    // were the same
    expect(submitted.args.claimId).toBe(whitelisted.args.cId);

    // let's get their balance before they withdraw their claim fund
    const beforeBalance = await suite.getFtkBalanceOf(DEFAULT_CLAIMANT_INDEX);

    // now have the claimant claim their funds
    const possErr = await suite.advanceTimeAndWithdrawClaimFund({
      include: [DEFAULT_CLAIMANT_INDEX],
      forfeit: false,
    });
    expect(possErr.length).toBe(0);

    // get their balance after they withdraw their claim fund
    const afterBalance = await suite.getFtkBalanceOf(DEFAULT_CLAIMANT_INDEX);

    // get the claim info for this specific claim. We'll use the whitelisted claim Id from
    // the event that was fetched earlier
    const lastperiod = (await suite.secretary.read.getCurrentPeriodId()) - 1n;
    const claimInfo = await suite.secretary.read.getClaimInfo(
      lastperiod,
      whitelisted.args.cId!,
    );

    // we expect the difference to be the claim amount
    expect(afterBalance - claimInfo.amount).toBe(beforeBalance);
  });

  it("one defector, doesn't pay last premium, community remains in default state.", async () => {
    // perform setup
    const claimants = [DEFAULT_CLAIMANT_INDEX];
    const defectors = [DEFAULT_DEFECTOR];
    const errors = await suite.toPeriodAfterDefectors({
      alreadyInDefault: false,
      claimants,
      defectors,
    });

    if (errors && errors.length > 0) console.warn(errors);

    // even after all of that, the community should still be in the default state
    const communityState = await suite.secretary.read.getCommunityState();
    expect(communityState).toBe(TandaPayState.Default);
  });

  it("two defectors, different subgroups, doesn't pay last premium, community goes to fractured state", async () => {
    // perform setup
    const claimants = [DEFAULT_CLAIMANT_INDEX];
    const defectors = [DEFAULT_DEFECTOR, 5];
    const errors = await suite.toPeriodAfterDefectors({
      alreadyInDefault: false,
      claimants,
      defectors,
    });

    if (errors && errors.length > 0) console.warn(errors);

    // after all of that, the community should be in the fractured state
    const communityState = await suite.secretary.read.getCommunityState();
    expect(communityState).toBe(TandaPayState.Fractured);
  });

  it("two defectors, same subgroup, doesn't pay last premium, community goes to fractured state", async () => {
    const claimants = [DEFAULT_CLAIMANT_INDEX];
    const defectors = [2, 3];
    const errors = await suite.toPeriodAfterDefectors({
      alreadyInDefault: false,
      claimants,
      defectors,
    });

    if (errors && errors.length > 0) console.warn(errors);

    const communityState = await suite.secretary.read.getCommunityState();
    expect(communityState).toBe(TandaPayState.Fractured);
  });

  it("3 defectors, one subgroup becomes invalid, paid-invalid members reorg into a new subgroup, community goes to fractured state", async () => {
    // we'll have the default claimant for this test
    const claimants = [DEFAULT_CLAIMANT_INDEX];
    // we added a 3rd defector, #5 (who will be in subgroup 2), so that way
    // subgroup 2 goes to 4 members, and we can reorg the remaining 3 members in
    // subgroup 1 into subgroup 2, for a total of 7 members in subgroup 2. The max
    // number of members in any given subgroup is 7
    const defectors = [2, 3, 5];

    // perform setup
    await suite.toPeriodAfterClaim({
      alreadyInDefault: false,
      claimants: claimants,
      defectors: defectors,
    });
    await suite.advanceTimeAndDefect({ include: defectors });
    await suite.advanceTimeAndWithdrawClaimFund({
      include: claimants,
      forfeit: false,
    });

    const subgroup1Members = (await suite.secretary.read.getSubgroupInfo(1n))
      .members;
    const paidInvalidNewSubgroups = new Map<Address, bigint>();
    for (const addr of subgroup1Members) {
      paidInvalidNewSubgroups.set(addr, 2n);
    }
    await suite.reorgHelper({ paidInvalidNewSubgroups });

    // advance time now that all of that has been done
    await suite.advanceTimeAndPayPremiums({ exclude: defectors });
    await suite.advanceTimeAndAdvancePeriod();
    // the community should still be in the fractured state
    const communityState = await suite.secretary.read.getCommunityState();
    expect(communityState).toBe(TandaPayState.Fractured);
  });
});

//afterAll(() => anvil.kill());
