import { error } from "console";
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
  let paidInvalidCount = paidInvalidMembers.length; let existingValidCapacity = 0;

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
    // first lets calculate how many need reassigned
    let totalNeedingReassigned = paidInvalidMembers.length; 
  }

  return solution;
}

interface ArParams {
  subgroups: Map<number, Address[]>;
  needsAssigned: Address[];
}

function filterSubgroups(params: ArParams): ArParams {
  let {subgroups, needsAssigned} = params;
  // we want to filter subgroups to ensure they don't have the
  // paid-invalid members still listed in them, and to remove
  // excess members from any subgroups that are too large, marking
  // those excess members as needing reassigned
  const filteredSubgorups = new Map<number, Address[]>();
  for (let [id, members] of subgroups) {
    const newMembers = members.filter(m => !needsAssigned.includes(m));
    while (newMembers.length > MAX_SUBGROUP_SIZE)  {
      const m = newMembers.pop();
      if (m === undefined)
        throw new Error("auto reorg error: undefined member popped from too large subgroup?")

      needsAssigned.push(m); 
    }
    filteredSubgorups.set(id, newMembers);
  }
  params.subgroups = filteredSubgorups;
  return params;
}

function sortSubgroupsBySize(subgroups: Map<number, Address[]>): Map<number, number[]> {
  // (size, ids[])
  const sizeSortedGroups = new Map<number, number[]>();
  for (const [id, members] of subgroups) {
    const size = members.length;
    if (sizeSortedGroups.has(size)) {
      sizeSortedGroups.get(size)!.push(id);
    } else {
      sizeSortedGroups.set(size, [id]);
    }
  }
  return sizeSortedGroups;
}

function getValidCapacity(sortedSubgroups: Map<number, number[]>) {
  let capacity = 0;
  for (let i = MIN_SUBGROUP_SIZE; i < MAX_SUBGROUP_SIZE; i++) {
    const cap = MAX_SUBGROUP_SIZE - i;
    const numGroupsThisSize = sortedSubgroups.get(i)?.length;
    if (numGroupsThisSize === undefined)
      continue;

    capacity += (numGroupsThisSize * cap);
  }
  return capacity;
}

function makeNewGroups(needsAssigned: Address[]) {
  if (needsAssigned.length < MIN_SUBGROUP_SIZE)
    throw new Error("cannot make new groups when needsAssigned is smaller than the minimum subgroup size!!");

  const newSubgroups: Address[][] = [];    
  let curSubgroup: Address[] = [];
  while (needsAssigned.length > 0) {
    const m = needsAssigned.pop();
    if (m === undefined)
      throw new Error("auto reorg error: undefined member popped from needsAssigned?");
    
    curSubgroup.push(m);
    if (curSubgroup.length === MIN_SUBGROUP_SIZE) {
      newSubgroups.push([...curSubgroup]);
      curSubgroup = new Array<Address>();
    }
  }

  if (curSubgroup.length > 0)
    newSubgroups[0].push(...curSubgroup);

  return newSubgroups;
}

function assignToEmptyGroups(newSubgroups: Address[][], emptySubgroups: number[], maxSubgroupId: number) {
  const solution = new Map<number, Address[]>();
  while (emptySubgroups.length > 0 && newSubgroups.length > 0) {
    const id = emptySubgroups.pop();
    const members = newSubgroups.pop();
    if (!id || !members)
      throw new Error("got undefined when making new subgroups, popped (id, members) pair and expected a defined result");

    solution.set(id, members);
  }

  if (newSubgroups.length > 0) {
    let newSubgroupId = maxSubgroupId + 1;
    while (newSubgroups.length > 0) {
      const members = newSubgroups.pop();
      if (!members)
        throw new Error("got undefined when making new subgroups. popped member and expected a defined result");

      solution.set(newSubgroupId, members);
      newSubgroupId += 1;
    } 
  }
  return solution;
}

export function ar(params: ArParams): Map<number, Address[]> {
  // removes anyone in needsAssigned from the subgroup members lists,
  // and also removes any excess members in any subgroups and adds them
  // to needsAssigned
  params = filterSubgroups(params);
  const {subgroups, needsAssigned} = params;

  // sorts the subgroups into (size, [ids...]) pairs
  let sizeSortedGroups = sortSubgroupsBySize(subgroups);
  const validCapacity = getValidCapacity(sizeSortedGroups);

  // stores the address and what new subgroup they should be assigned to
  const solution = new Map<number, Address[]>(subgroups);

  // make new subgroups
  if (needsAssigned.length >= MIN_SUBGROUP_SIZE) {
    const newSubgroups = makeNewGroups(needsAssigned);
    const emptySubgroups = sizeSortedGroups.get(0) ?? [];
    const maxSubgroupId = subgroups.size;
    const assignments = assignToEmptyGroups(newSubgroups, emptySubgroups, maxSubgroupId);
    for (const [id, members] of assignments)
      solution.set(id, members);

  // assign to existing subgroups
  } else if (validCapacity >= needsAssigned.length) {
    for (let i = MIN_SUBGROUP_SIZE; i < MAX_SUBGROUP_SIZE; i += 1) {
      const groups = sizeSortedGroups.get(i);
      if (!groups || groups.length === 0)
        continue;

      for (const id of groups) {
        const memberToAssign = needsAssigned.pop()!;
        solution.get(id)!.push(memberToAssign);
      }
      sizeSortedGroups = sortSubgroupsBySize(solution);
    }
    
  // in this case, we don't have enough people needing reassigned to make new subgroups,
  // but we also don't have enough capacity in existing valid subgroups to assign them to,
  // so we have to remove people from a valid group (without causing that group to become
  // smaller than the minimum size) and mark them for reassignment so we can potentially
  // make a new subgroup with them + the members already needing reassigned.
  } else {
    for (let i = MAX_SUBGROUP_SIZE; i > MIN_SUBGROUP_SIZE; i--) {
      const groups = sizeSortedGroups.get(i);
      if (!groups || groups.length === 0)
        continue;

      for (const id of groups) {
        const members = subgroups.get(id)!;
        while (members.length > MIN_SUBGROUP_SIZE && needsAssigned.length < MIN_SUBGROUP_SIZE) {
          const removedMember = members.pop();
          if (!removedMember)
            throw new Error("auto reorg error: removed a member and expected a defined result");

          needsAssigned.push(removedMember);
        }
      }
    }
    return ar({subgroups, needsAssigned});
  }
  return solution;
}