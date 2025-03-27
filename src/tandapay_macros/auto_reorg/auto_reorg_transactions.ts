import { SubgroupConstants } from "tandapay_constants";
import { TandaPayBatchReader } from "tandapay_interface/batch_read_interface";
import { TandaPayReader } from "tandapay_interface/read_interface";
import { Address, isAddressEqual } from "viem";
import { autoReorg } from "./auto_reorg";
import { MemberStatus } from "types";

export interface GetAutoReorgTransactionsParameters {
  reader: TandaPayReader;
  //writer: TandaPayWriter;
  batchReader: TandaPayBatchReader;
  newMembersToAdd?: Address[];
}

export type GetAutoReorgTransactionsReturnType = {
  status: "all-valid" | "needs-reorged" | "too-few-members";
  transactions?: string[];
};

export async function getAutoReorgTransactions(
  params: GetAutoReorgTransactionsParameters,
): Promise<GetAutoReorgTransactionsReturnType> {
  const { reader, batchReader } = params;

  const allMembers = await batchReader.getBatchMemberInfo();

  // k-v pairs that store each subgroups
  const subgroups = new Map<number, Address[]>();

  // a list of all members that aren't assigned a subgroup
  const needsAssigned: Address[] = [];
  const needsAdded: Address[] = [];

  // if new members were specified, we'll make sure they aren't
  // already in the community
  if (params.newMembersToAdd) {
    // we use toLowerCase for addresses in the set because addresses are not case
    // sensitive, and casing can be random when fetched from the API
    const alreadyAddedAddresses = new Set(
      allMembers.map((m) => m.walletAddress.toLowerCase()),
    );

    // check if any of the new members are already added here
    for (const newMemberAddr of params.newMembersToAdd) {
      // if they're already in, skip them
      if (alreadyAddedAddresses.has(newMemberAddr.toLowerCase())) continue;

      // otherwise, add them to needsAssigned
      needsAssigned.push(newMemberAddr);
      needsAdded.push(newMemberAddr);
    }
  }

  // we need to know this to determine whether subgroups have to be created
  const maxSubgroupId = await reader.getCurrentSubgroupCount();

  // build up a map of subgroupId: Members, adding members who
  // don't have a subgroup to needsAssigned
  for (const member of allMembers) {
    const subgroupId = Number(member.subgroupId);
    const address = member.walletAddress;

    // if the defected, quit, or left, don't reorg them
    if (member.memberStatus === MemberStatus.Defected) continue;
    if (member.memberStatus === MemberStatus.UserQuit) continue;
    if (member.memberStatus === MemberStatus.UserLeft) continue;

    // if they don't have a subgroup, we won't add them to the map. the smart
    // contract uses a placeholder value (0) to represent no subgroup.
    if (subgroupId === SubgroupConstants.noSubgroupIdPlaceholder) {
      needsAssigned.push(address);
      // we continue here so we don't end up with a subgroup ID in the
      // map with the placeholder value.
      continue;
    }

    // otherwise, if they have a subgroup, populate them in the map
    if (subgroups.has(subgroupId)) {
      subgroups.get(subgroupId)!.push(address);
    } else {
      subgroups.set(subgroupId, [address]);
    }
  }

  // now go through and find any subgroups that are too small, and add the
  // members of those subgroups into needsAssigned, since they'll need reorged
  for (const members of subgroups.values()) {
    if (members.length < SubgroupConstants.minSize)
      needsAssigned.push(...members);
  }

  // get the new subgroup organizations
  const newSubgroups = autoReorg({
    subgroups,
    needsAssigned,
  });

  // list of transactions the secretary needs to send to
  const transactions: string[] = [];
  for (const member of needsAdded)
    transactions.push(`add member: ${member.slice(0, 8)}`);

  // if we need to make new subgroups to fit all of the members,
  // we will do that here:
  const newMaxSubgroupId = Math.max(...newSubgroups.keys());
  for (let i = maxSubgroupId; i < newMaxSubgroupId; i++) {
    transactions.push("createSubgroup");
  }

  // now, go through each new subgroup, compare it with the old subgroup,
  // and if any member is in the new subgroup but not in the old subgroup,
  // then add an assign operation
  for (const [id, newMembers] of newSubgroups) {
    const oldMembers = subgroups.get(id);
    for (const member of newMembers) {
      if (!oldMembers) {
        transactions.push(`assign: ${member.slice(0, 8)} -> ${id}`);
      } else if (!oldMembers.some((m) => isAddressEqual(m, member))) {
        transactions.push(`assign: ${member.slice(0, 8)} -> ${id}`);
      }
    }
  }

  if (transactions.length === 0) {
    return {
      status: "all-valid",
    };
  } else {
    return {
      status: "needs-reorged",
      transactions,
    };
  }
}
