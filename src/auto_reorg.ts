import { SubgroupInfo } from "types";
import { Address } from "viem";

const MIN_SUBGROUP_SIZE = 4 as const;
const MAX_SUBGROUP_SIZE = 7 as const;

export type AutoReorgParameters = {
  subgroupInfoMap: Map<bigint, SubgroupInfo>,
  paidInvalidMembers: Address[],
}

//TODO: complete
export function autoReorg(params: AutoReorgParameters) {
  const {subgroupInfoMap, paidInvalidMembers} = params;

  // categorize each subgroup
  const emptyIds: bigint[] = [];
  const invalidIds: bigint[] = [];
  const validNotFullIds: bigint[] = [];
  const fullIds: bigint[] = [];

  // keep track of some other variables that will be useful
  let paidInvalidCount = paidInvalidMembers.length;
  let existingValidCapacity = 0;

  // store the solution
  const solution = new Map<bigint, Address[]>();

  for (const [id, info] of subgroupInfoMap) {
    if (info.members.length === 0) {
      // if there are no members, subgroup is empty
      emptyIds.push(id);
    } else if (info.members.length > 0 && info.members.length < MIN_SUBGROUP_SIZE) {
      // if there are members but the subgroup is too small to be valid,
      // then the members in it are invalid.
      invalidIds.push(id);
    } else if (info.members.length >= MIN_SUBGROUP_SIZE && info.members.length < MAX_SUBGROUP_SIZE) {
      // subgroups that are valid but not full
      validNotFullIds.push(id);
      existingValidCapacity += MAX_SUBGROUP_SIZE - info.members.length;
    } else {
      // finally, full subgroups. we'll pop from these if we need members to make new valid subgroups
      fullIds.push(id);
    }
  }

  // if the paid invalid count is enough to make a valid subgroup
  // using only the existing paid invalid members, we'll do that
  const newSubgroups: Address[][] = [];
  if (paidInvalidCount >= MIN_SUBGROUP_SIZE) {
    // we want to divide them into groups of 4, but if the number of paid-invalid members
    // isn't perfectly divisible by 4, then we'll have an odd subgroup of 5/6/7 to ensure
    // that they are all successfully assigned
    let curSubgroup: Address[] = [];
    // we'll iterate while we have paid-invalid members
    while (paidInvalidMembers.length > 0) {
      // get this paid-invalid member
      const addr = paidInvalidMembers.pop()!;
      // assign them to the subgroup
      curSubgroup.push(addr);
      // once it reaches 4 members, add it to the newSubgroups list and reset
      if (curSubgroup.length === 4) {
        newSubgroups.push(curSubgroup);
        curSubgroup = [];
      }
    }

    // finally, if we had a last subgroup that did not reach 4 members, it
    // wouldn't have been added. These are our "odd" members, we can just add
    // them to one of the groups of 4 we already created
    if (curSubgroup.length > 0)
      newSubgroups[0].push(...curSubgroup);

    //! for debugging
    if (paidInvalidMembers.length > 0)
      throw new Error("this should never appear. paidInvalidMembers length > 0 after autoReorg. (0)");
  // otherwise, if there is enough space in the existing valid subgroups, then we
  // will reassign these paid-invalid members into those subgroups
  } else if (paidInvalidCount <= existingValidCapacity) {
    // iterate through the IDs of each valid subgroup
    for (const id of validNotFullIds) {
      // we'll start off our new subgroup with the existing members in this one
      let curSubgroup: Address[] = subgroupInfoMap.get(id)!.members.slice();
      // so long as there is capacity in this subgroup and we still have
      // paid-invalid members who need to be reorged, we'll add them to this subgroup:
      while (paidInvalidMembers.length > 0 && curSubgroup.length < MAX_SUBGROUP_SIZE) {
        const addr = paidInvalidMembers.pop()!;
        curSubgroup.push(addr);
      }
      // and now, we have either ran out of capacity or assigned all of the paid-invalid
      // members, so it's time to add this subgroup to the newSubgroups array
      newSubgroups.push(curSubgroup);
    }
   
    //! for debugging
    if (paidInvalidMembers.length > 0)
      throw new Error("this should never appear. paidInvalidMembers length > 0 after autoReorg. (1)");
  // finally, if neither of those two things worked, that means we need to pop a valid member
  // out of their group so that they can make a new valid subgroup with the paid-invalid members.
  // we'll prioritize subgroups of size 7, and if that doesn't work, we'll work our way down to 6 and 5
  } else {

  }

  return solution;
}