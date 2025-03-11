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
} from "tandapay_manager/read/types";
import { DEFAULT_CLAIMANT_INDEX, DEFAULT_DEFECTOR } from "../test_config";
import { MemberStatus, subgroupInfoJsonReplacer, TandaPayState } from "types";

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
});

describe("testing claims, defectors, etc.", () => {
  it.skip("A claim can be submitted, whitelisted, and paid out", async () => {
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
  }, 30000);

  const printCommunityState = async (msg: string = "State:") =>
    console.log(
      `${msg}: ${TandaPayState[await suite.secretary.read.getCommunityState()]}`,
    );
  const printCoverageAmount = async (msg: string = "Coverage Amt:") =>
    console.log(
      `${msg}: ${(await suite.timeline.getCurrentPeriodInfo()).coverageAmount}`,
    );
  const printSubgroupInfo = async (subgroup: bigint) => {
    const subgroupInfo = await suite.secretary.read.getSubgroupInfo(subgroup);
    console.log(
      `=== Subgroup Info ===\n ${JSON.stringify(subgroupInfo, subgroupInfoJsonReplacer, 2)}`,
    );
  };

  const defectorSetup = async (claimants: number[], defectors: number[]) => {
    await suite.toPeriodAfterClaim({
      alreadyInDefault: false,
      claimants: claimants,
      wontPayPremium: defectors,
    });

    const ops = [
      async () => await suite.advanceTimeAndDefect({ include: defectors }),
      async () =>
        await suite.advanceTimeAndWithdrawClaimFund({ include: claimants }),
      async () => await suite.advanceTimeAndPayPremiums({ exclude: defectors }),
      async () => await suite.advanceTimeAndAdvancePeriod(),
    ];

    const allErrors: string[] = [];
    for (const op of ops) {
      const errors = await op();
      //await printCommunityState();
      //await printCoverageAmount();
      if (Array.isArray(errors) && errors && errors.length > 0)
        allErrors.push(...errors);
    }

    return allErrors;
  };

  const validateDefectors = async () => {
    // this will get logs for when someone defects
    const tandaPayLogs = toTandaPayLogs(
      await suite.secretary.events.getLogs({
        fromBlock: 0n,
        toBlock: "latest",
      }),
    ).filter((log) => log.alias === "memberDefected");

    // we'll also get a list of the defector IDs
    const currentPeriod = await suite.secretary.read.getCurrentPeriodId();
    const defectorIdsArr =
      await suite.secretary.read.getDefectorMemberIdsInPeriod(
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
        await suite.secretary.read.getMemberInfoFromAddress(defectorAddress);

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

  it.skip("one defector, doesn't pay last premium, community remains in default state.", async () => {
    // perform setup
    const claimants = [DEFAULT_CLAIMANT_INDEX];
    const defectors = [DEFAULT_DEFECTOR];
    const errors = await defectorSetup(claimants, defectors);
    if (errors && errors.length > 0) console.warn(errors);

    // perform validation on the defectors
    await validateDefectors();

    // even after all of that, the community should still be in the default state
    const communityState = await suite.secretary.read.getCommunityState();
    expect(communityState).toBe(TandaPayState.Default);
  });

  it.skip("two defectors, different subgroups, doesn't pay last premium, community goes to fractured state", async () => {
    // perform setup
    const claimants = [DEFAULT_CLAIMANT_INDEX];
    const defectors = [DEFAULT_DEFECTOR, 5];
    const errors = await defectorSetup(claimants, defectors);
    if (errors && errors.length > 0) console.warn(errors);

    // perform validation on the defectors
    await validateDefectors();

    // after all of that, the community should be in the fractured state
    const communityState = await suite.secretary.read.getCommunityState();
    expect(communityState).toBe(TandaPayState.Fractured);
  });

  it.skip("two defectors, same subgroup, doesn't pay last premium, community goes to fractured state", async () => {
    const claimants = [DEFAULT_CLAIMANT_INDEX];
    const defectors = [2, 3];

    await suite.toPeriodAfterClaim({
      alreadyInDefault: false,
      claimants: claimants,
      wontPayPremium: defectors,
    });
    await suite.advanceTimeAndDefect({ include: defectors });
    //await printSubgroupInfo(1n);
    await suite.advanceTimeAndWithdrawClaimFund({
      include: claimants,
      forfeit: false,
    });
    await suite.advanceTimeAndPayPremiums({ exclude: defectors });
    await suite.advanceTimeAndAdvancePeriod();
    //await printSubgroupInfo(1n);

    const communityState = await suite.secretary.read.getCommunityState();
    expect(communityState).toBe(TandaPayState.Fractured);
  });

  it("two defectors, same subgroup, subgroup members reorg, community goes to fractured state", async () => {
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
      wontPayPremium: defectors,
    });
    await suite.advanceTimeAndDefect({ include: defectors });
    await suite.advanceTimeAndWithdrawClaimFund({
      include: claimants,
      forfeit: false,
    });

    // the members in subgroup 1 will be the ones remaining after the defectors.
    // They should all become paid-invalid
    const subgroupInfo = await suite.secretary.read.getSubgroupInfo(1n);
    // extract those addresses
    const paid_invalid_addrs = suite.accounts
      .map((acc) => acc.address)
      .filter((addr) => subgroupInfo.members.includes(addr));
    // extract their corresponding managers from the suite
    const paid_invalid_managers = suite.managers.filter((m) =>
      subgroupInfo.members.includes(m.client.account!.address),
    );

    // have paid-invalid members leave their subgroups (they need to do this to be marked paid-invalid)
    for (const m of paid_invalid_managers) await m.write.member.leaveSubgroup();

    // we need to get someone who is already in subgroup 2 before these guys join so
    // that they can perform the approval transaction. This is a little awkward but we ball
    const subgroupPeer =
      (await (async () => {
        const subgroup = await suite.secretary.read.getSubgroupInfo(2n);
        const memberAddr = subgroup.members[0];
        return suite.managers.find(
          (m) => m.client.account?.address === memberAddr,
        );
      })()) ?? fail("no subgroup peer manager found");

    // for each paid invalid member, we'll assign them to subgroup 2,
    // expect their status to become Reorged, then have the existing member in
    // subgroup 2 approve them.
    for (const a of paid_invalid_addrs) {
      // secretary reorgs them into subgroup 2
      await suite.secretary.write.secretary.assignMemberToSubgroup(a, 2n, true);

      // now that they are in subgroup 2, they should be "Reorged" status
      const memberInfoBefore =
        await suite.secretary.read.getMemberInfoFromAddress(a);
      expect(memberInfoBefore.memberStatus).toBe(MemberStatus.Reorged);

      // we'll have them approve their own subgroup assignment, although
      //! this is actually redundant because it works even without this tx.
      const manager =
        suite.getManagerFromAddress(a) ??
        fail("manager not found from address");
      await manager.write.member.approveSubgroupAssignment();

      // have someone in subgroup ID 2 approve their joining
      await subgroupPeer.write.member.approveNewSubgroupMember(
        2n,
        memberInfoBefore.id,
        true,
      );

      // after being approved to join, they should become Valid
      const memberInfoAfter =
        await suite.secretary.read.getMemberInfoFromAddress(a);
      expect(memberInfoAfter.memberStatus).toBe(MemberStatus.Valid);
    }

    // now, everyone that was paid invalid should be in subgroup 2's members list:
    const subgroupInfo2 = await suite.secretary.read.getSubgroupInfo(2n);
    expect(subgroupInfo2.members).toEqual(
      expect.arrayContaining(paid_invalid_addrs),
    );

    // advance time now that all of that has been done
    await suite.advanceTimeAndPayPremiums({ exclude: defectors });
    await suite.advanceTimeAndAdvancePeriod();
    // the community should still be in the fractured state
    const communityState = await suite.secretary.read.getCommunityState();
    expect(communityState).toBe(TandaPayState.Fractured);
  });
});

//afterAll(() => anvil.kill());
