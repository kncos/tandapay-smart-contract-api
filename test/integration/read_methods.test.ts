import { TandaPayState } from "types";
import {
  deployFaucetToken,
  deployTandaPay,
  spawnAnvil,
} from "../helpers/tandapay_test_helpers";
import { TandaPayTestSuite } from "../helpers/tandapay_test_suite";

let anvil: Awaited<ReturnType<typeof spawnAnvil>>;
let suite: TandaPayTestSuite;

beforeAll(async () => {
  anvil = await spawnAnvil();
  const fa = await deployFaucetToken();
  const ta = await deployTandaPay(fa);
  suite = new TandaPayTestSuite(fa, ta);
  await suite.toDefaultState();
});

afterAll(() => {
  anvil.kill();
});

describe("TandaPay Read Methods", () => {
  it("can get the payment address token", async () => {
    const paymentTokenAddr =
      await suite.secretary.read.getPaymentTokenAddress();
    expect(paymentTokenAddr.toUpperCase()).toBe(suite.ftkAddress.toUpperCase());
  });

  it("can get current member count", async () => {
    const memberCount = await suite.secretary.read.getCurrentMemberCount();
    // 15 because this is what we expect after setting up the default state
    expect(memberCount).toBe(15n);
  });

  it("can get current subgroup count", async () => {
    const subgroupCount = await suite.secretary.read.getCurrentSubgroupCount();
    // 15 members will be divided into 3 subgroups
    expect(subgroupCount).toBe(3n);
  });

  it("Gets the current claim ID", async () => {
    const claimCount = await suite.secretary.read.getCurrentClaimId();
    expect(claimCount).toBe(0n);
  });

  it("get current period ID", async () => {
    const periodId = await suite.secretary.read.getCurrentPeriodId();
    expect(periodId).toBe(1n);
  });

  it("Get the total coverage amount & base premium", async () => {
    const coverageAmount = await suite.secretary.read.getTotalCoverageAmount();
    expect(coverageAmount).toBeGreaterThan(0n);
    const basePremium = await suite.secretary.read.getBasePremium();
    // in case it's like, 14.999 but truncates
    expect(coverageAmount / basePremium).toBeGreaterThanOrEqual(14n);
  });

  it("Get the community state (should be default)", async () => {
    const state = await suite.secretary.read.getCommunityState();
    expect(state).toBe(TandaPayState.Default);
  });

  it("Get subgroup info for a subgroup id", async () => {
    const subgroupInfo = await suite.secretary.read.getSubgroupInfo({
      subgroupId: 1n,
    });
    expect(subgroupInfo.members.length).toBe(5);
  });

  // getClaimInfo
  // getClaimIdsInPeriod
  // getDefectorMemberIdsInPeriod

  it("get Member ID from address", async () => {
    const memberId = await suite.secretary.read.getMemberIdFromAddress({
      walletAddress: suite.secretaryAccount.address,
    });
    // member IDs start at 1 in TandaPay's smart contract
    expect(memberId).toBe(1n);
  });

  // getWhitelistedClaimIdsInPeriod

  it("get member info from both address and id", async () => {
    const memberInfo1 = await suite.secretary.read.getMemberInfoFromAddress({
      walletAddress: suite.secretaryAccount.address,
    });
    const memberInfo2 = await suite.secretary.read.getMemberInfoFromId({
      memberId: 1,
    });
    expect(memberInfo1.id).toBe(memberInfo2.id);
  });

  it("can get the secretary address", async () => {
    const secretaryAddress = await suite.secretary.read.getSecretaryAddress();
    expect(secretaryAddress).toBe(suite.secretaryAccount.address);
  });

  it("can get period info", async () => {
    const periodInfo = await suite.secretary.read.getPeriodInfo();
    expect(periodInfo.claimIds.length).toBe(0);
  });
});
