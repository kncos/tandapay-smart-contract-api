import { WriteableTandaPayManager } from "../../src/contract_managers/tandapay_manager";
import { TandaPayRole, TandaPayState } from "types";
import { deployTandaPayAndMakeManagers, spawnAnvil } from "../test_helpers";

test("get to default state", async () => {
  const anvil = await spawnAnvil();

  const managersAndWallets = await deployTandaPayAndMakeManagers();
  const wallets = managersAndWallets.wallets;
  const secretary = managersAndWallets
    .managers[0] as WriteableTandaPayManager<TandaPayRole.Secretary>;
  const members = managersAndWallets.managers.slice(
    1,
  ) as WriteableTandaPayManager<TandaPayRole.Member>[];

  for (let i = 0; i < 3; i++) {
    // let the secretary make a subgroup
    await secretary.write.secretary.createSubGroup();
    for (let j = 0; j < 5; j++) {
      const walletIndex = i * 5 + j;
      // let the secretary add members to the community, and the subgroup
      await secretary.write.secretary.addMemberToCommunity(
        wallets[walletIndex].account.address,
      );
      await secretary.write.secretary.assignMemberToSubgroup(
        wallets[walletIndex].account.address,
        BigInt(i + 1),
      );
    }
  }

  await secretary.write.secretary.initiateDefaultState(1000n * 10n ** 18n);

  await secretary.write.member.approveSubgroupAssignment(true);
  await secretary.write.member.joinCommunity();
  for (const m of members) {
    await m.write.member.approveSubgroupAssignment(true);
    await m.write.member.joinCommunity();
  }

  const state = await secretary.read.getCommunityState();
  expect(state).toBe(TandaPayState.Default);

  anvil.kill();
});
