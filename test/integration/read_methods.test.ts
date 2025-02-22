import { TandaPayRole, TandaPayState, WriteableClient } from "types";
import {
  makeManagers,
  makeWriteableClients,
  spawnAnvil,
} from "../test_helpers";
import { getAnyCachedDefaultStateOrDeploy } from "./setupDefaultState";
import { WriteableTandaPayManager } from "contract_managers/tandapay_manager";

let anvil: Awaited<ReturnType<typeof spawnAnvil>>;
let defaultStateInfo: Awaited<
  ReturnType<typeof getAnyCachedDefaultStateOrDeploy>
>;

let writeableClient: WriteableClient;
let manager: WriteableTandaPayManager<TandaPayRole.Secretary>;

beforeEach(async () => {
  anvil = await spawnAnvil();
  defaultStateInfo = await getAnyCachedDefaultStateOrDeploy();
  [writeableClient] = makeWriteableClients(1);
  [manager] = makeManagers([writeableClient], defaultStateInfo.tpAddress);
});

describe("TandaPay Read Methods", () => {
  it("can get the payment address token", async () => {
    const paymentTokenAddr = await manager.read.getPaymentTokenAddress();
    expect(paymentTokenAddr.toUpperCase()).toBe(
      defaultStateInfo.ftkAddress.toUpperCase(),
    );
  });

  it("can get current member count", async () => {
    const memberCount = await manager.read.getCurrentMemberCount();
    // 15 because this is what we expect after setting up the default state
    expect(memberCount).toBe(15n);
  });

  it("can get current subgroup count", async () => {
    const subgroupCount = await manager.read.getCurrentSubgroupCount();
    // 15 members will be divided into 3 subgroups
    expect(subgroupCount).toBe(3n);
  });

  it("Gets the current claim ID", async () => {
    const claimCount = await manager.read.getCurrentClaimId();
    expect(claimCount).toBe(0n);
  });

  it("get current period ID", async () => {
    const periodId = await manager.read.getCurrentPeriodId();
    expect(periodId).toBe(0n);
  });

  it("Get the total coverage amount & base premium", async () => {
    const coverageAmount = await manager.read.getTotalCoverageAmount();
    expect(coverageAmount).toBeGreaterThan(0n);
    const basePremium = await manager.read.getBasePremium();
    // in case it's like, 14.999 but truncates
    expect(coverageAmount / basePremium).toBeGreaterThanOrEqual(14n);
  });

  it("Get the community state (should be default)", async () => {
    const state = await manager.read.getCommunityState();
    expect(state).toBe(TandaPayState.Default);
  });

  it("Get subgroup info for a subgroup id", async () => {
    const subgroupInfo = await manager.read.getSubgroupInfo(1n);
    expect(subgroupInfo.members.length).toBe(5);
  });

  // getClaimInfo
  // getClaimIdsInPeriod
  // getDefectorMemberIdsInPeriod

  it("get Member ID from address", async () => {
    const memberId = await manager.read.getMemberIdFromAddress(
      writeableClient.account.address,
    );
    // member IDs start at 1 in TandaPay's smart contract
    expect(memberId).toBe(1n);
  });

  // getWhitelistedClaimIdsInPeriod

  it("get member info from both address and id", async () => {
    const memberInfo1 = await manager.read.getMemberInfoFromAddress(
      writeableClient.account.address,
    );
    const memberInfo2 = await manager.read.getMemberInfoFromId(1n);
    expect(memberInfo1.id).toBe(memberInfo2.id);
  });

  it("can get the secretary address", async () => {
    const secretaryAddress = await manager.read.getSecretaryAddress();
    expect(secretaryAddress).toBe(writeableClient.account.address);
  });

  it("can get period info", async () => {
    const periodInfo = await manager.read.getPeriodInfo(0n);
    expect(periodInfo.id).toBe(0n);
  });
});

afterEach(() => {
  anvil.kill();
});
