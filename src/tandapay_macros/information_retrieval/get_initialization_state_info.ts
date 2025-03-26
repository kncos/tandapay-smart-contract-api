import {
  InitializationStateConstants,
  SubgroupConstants,
} from "tandapay_constants";
import { TandaPayReader } from "tandapay_interface/read_interface";
import { TandaPayBatchReader } from "tandapay_interface/batch_read_interface";
import { TandaPayState } from "types";

/**
 * Information about the initialization state -- whether or not we're in it, whether or not we can
 * exit it by moving to the default state, and if we can't exit it -- why?
 * @property isInitializationState - Are we in the initialization state?
 * @property [canExit] - Can the secretary initiate the default state at this point?
 * @property [membersNeeded] - How many members need to be added before we can exit? If 0, no more are required.
 * @property [subgroupsNeeded] - How many subgroups need to be created before we can exit? If 0, no more are required.
 * @property [reorgNeeded] - Do we need to reorg the members such that all of the subgroups are valid? If false, we don't.
 */
export type InitializationStateInfo =
  | {
      /** We are not in the initialization state */
      isInitializationState: false;
    }
  | {
      /** We are in the initialization state */
      isInitializationState: true;
      /** We can leave the initialization state */
      canExit: true;
    }
  | {
      /** We are in the initialization state */
      isInitializationState: true;
      /** We cannot leave the initialization state without performing more actions first */
      canExit: false;
      /** How many members need to be added before we can exit? If 0, no more are required. */
      membersNeeded: number;
      /** How many subgroups need to be created before we can exit? If 0, no more are required. */
      subgroupsNeeded: number;
      /** Do we need to reorg the members such that all of the subgroups are valid? If false, we don't. */
      reorgNeeded: boolean;
    };

/**
 * Returns information about the initialization state. If the community is in it, whether the community
 * can exit it (and if not, why the community can't exit it)
 */
export async function getInitializationStateInfo(
  reader: TandaPayReader,
  batchReader: TandaPayBatchReader,
): Promise<InitializationStateInfo> {
  // constants for later use
  const minMembers = InitializationStateConstants.minCommunitySizeToExit;
  const minSubgroups = InitializationStateConstants.minSubgroupCountToExit;

  // get current community state. if it's not initialization, we can just exit here
  const state = await reader.getCommunityState();
  if (state !== TandaPayState.Initialization)
    return { isInitializationState: false };

  // get a list of all of the members in the community. If we have that, it's all we need to determine
  // what we need to do to exit the initialization state
  const allMembers = await batchReader.getBatchMemberInfo();

  // store the count we find in each subgroup
  const subgroups = new Map<bigint, number>();
  for (const member of allMembers) {
    const count = subgroups.get(member.subgroupId);
    if (count) {
      subgroups.set(member.subgroupId, count + 1);
    } else {
      subgroups.set(member.subgroupId, 1);
    }
  }

  // if we have less than minMembers when we fetched all members info, then we need members
  const membersNeeded =
    allMembers.length >= minMembers ? 0 : minMembers - allMembers.length;
  // if we had any members with a subgroup of 0, that means they weren't assigned to one and
  // thus reorganization is needed
  let reorgNeeded = subgroups.delete(0n);
  // if we had less than minSubgroups subgroups, then calculate how many we need
  const subgroupsNeeded =
    subgroups.size >= minSubgroups ? 0 : minSubgroups - subgroups.size;

  // even if no members were unassigned to a subgroup, there could still be invalid subgroups
  // (e.g. those that are too large or too small), so here we'll check for that and see if
  // reorganization is needed
  if (!reorgNeeded) {
    for (const count of subgroups.values()) {
      if (count < SubgroupConstants.minSize) reorgNeeded = true;
      if (count > SubgroupConstants.maxSize) reorgNeeded = true;
      // break early if reorganization is needed
      if (reorgNeeded) break;
    }
  }

  // if we don't have enough members, don't have enough subgroups, or need reorganization,
  // then we can't exit the initialization state
  const canExit =
    membersNeeded === 0 && subgroupsNeeded === 0 && reorgNeeded === false;

  // return the information
  return {
    isInitializationState: true,
    canExit,
    membersNeeded,
    subgroupsNeeded,
    reorgNeeded,
  };
}
