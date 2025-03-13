import { Address } from "viem";
 
const MIN_SUBGROUP_SIZE = 4 as const;
const MAX_SUBGROUP_SIZE = 7 as const;

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

export function autoReorg(params: ArParams): Map<number, Address[]> {
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
      if (needsAssigned.length === 0)
        break;

      for (const id of groups) {
        if (needsAssigned.length === 0)
          break;

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
    return autoReorg({subgroups, needsAssigned});
  }
  return solution;
}