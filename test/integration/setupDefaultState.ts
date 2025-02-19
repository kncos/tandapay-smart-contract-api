import { WriteableTandaPayManager } from "contract_managers/tandapay_manager";
import { ftkApprove, makeManagers, makeTestClient, makeWriteableClients } from "../test_helpers";
import { TandaPayRole } from "types";
import { Address, DumpStateReturnType } from "viem";

export type CachedDefaultStateInfo = {
  tpAddress: Address;
  ftkAddress: Address;
  dump: DumpStateReturnType;
};

const cache = new Map<Address, CachedDefaultStateInfo>();

export function getAnyCachedDefaultState(): CachedDefaultStateInfo | null {
  if (cache.size > 0) {
    const [key, ...keys] = cache.keys();
    return cache.get(key)!;
  }
  return null;
}

/** 
 * Gets the community to the default state. Uses caching so it doesn't have to be done multiple times,
 * returns a blob dumped from the blockchain where it was after this transaction was run for the first time.
 * Use this to test anything *after* getting to the default state. Assumes there is an `anvil` instance running.
 */
export async function setupDefaultState(tpAddress: Address, ftkAddress: Address): Promise<CachedDefaultStateInfo> {
  // return result if it's cached
  if (cache.has(tpAddress))
    return cache.get(tpAddress)!;

  // create 15 wallet clients for each member including the secretary
  const wallets = makeWriteableClients(15);
  // create tandaPayManagers from those wallets and the address we've been passed
  const managers = makeManagers(wallets, tpAddress);
  await ftkApprove({
    writeableClients: wallets,
    ftkAddress: ftkAddress,
    spender: tpAddress,
    // arbitrarily high amount, like 10 million FTK
    amount: (10n ** 7n) * (10n ** 18n),
    // distribute ftk to them so they actually have some
    amountToDistribute: (10n ** 7n) * (10n ** 18n),
  });

  const secretary = managers[0];
  const members = managers.slice(1) as unknown as WriteableTandaPayManager<TandaPayRole.Member>[];

  // make subgroups and assign members to it
  for (let i = 0; i < 3; i++) {
    // let the secretary make a subgroup
    await secretary.write.secretary.createSubGroup();
    for (let j = 0; j < 5; j++) {
      const walletIndex = i * 5 + j;
      // let the secretary add members to the community, and the subgroup
      await secretary.write.secretary.addMemberToCommunity(
        wallets[walletIndex].account.address
      );
      await secretary.write.secretary.assignMemberToSubgroup(
        wallets[walletIndex].account.address,
        BigInt(i + 1)
      );
    }
  }

  // initiate the default state with a coverage requirement
  await secretary.write.secretary.initiateDefaultState(1000n * 10n ** 18n);

  // have the secretary approve their own subgroup assignment and join the community.
  // note that joining the community requires a payment and thus an ERC-20 approve
  await secretary.write.member.joinCommunity();
  await secretary.write.member.approveSubgroupAssignment(true);
  // have each member do the same
  for (const m of members) {
    await m.write.member.joinCommunity();
    await m.write.member.approveSubgroupAssignment(true);
  }

  const testClient = makeTestClient();
  const dump = await testClient.dumpState();
  cache.set(tpAddress, {
    tpAddress,
    ftkAddress,
    dump,
  });
  return cache.get(tpAddress)!;
}
