import { autoReorg } from "auto_reorg";
import { Address } from "viem";


function validateSubgroups(subgroups: Map<number, Address[]>, countEmpty: boolean, expectedMemberCount: number): boolean {
  const uniqueMembers = new Set<Address>();
  for (const [id, members] of subgroups) {
    if (members.length > 0 && members.length < 4)
      return false;
    if (members.length > 7)
      return false;
    if (countEmpty && members.length === 0)
      return false;

    for (const m of members) {
      if (uniqueMembers.has(m.toLowerCase() as Address))
        return false;
      else
        uniqueMembers.add(m.toLowerCase() as Address);
    }
  }

  if (uniqueMembers.size !== expectedMemberCount)
    return false;

  return true;
}

function generateAddress(): Address {
  return `0x${[...Array(40)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join('')}` as Address;
}

function makeSubgroup(size: number) {
  const addresses: Address[] = []
  for (let i = 0; i < size; i++)
    addresses.push(generateAddress());

  return addresses;
}

function makeSubgroups(sizes: number[]) {
  const subgroups = new Map<number, Address[]>();
  for (const [index, size] of sizes.entries()) {
    subgroups.set(index+1, makeSubgroup(size));
  }
  return subgroups;
}

function doTest(subgroupSizes: number[]) {
  const subgroups = makeSubgroups(subgroupSizes);
  const needsAssigned: Address[] = [];
  for (const [id, members] of subgroups) {
    if (members.length < 4)
      needsAssigned.push(...members);
  }
  const sol = autoReorg({subgroups,needsAssigned});
  expect(validateSubgroups(sol, false, subgroupSizes.reduce((acc, num) => acc + num, 0))).toBe(true);
}

describe("auto reorg", () => {
  it("subgroup sizes: 3, 4, 4", () => {
    doTest([3,4,4]);
  });

  it("subgroup sizes: 1, 7, 7", () => {
    doTest([1,7,7]);
  });

  it("subgroup sizes: 2, 2, 7", () => {
    doTest([2,2,7]);
  });

  it("random tests? let's see if they work", () => {
    let totalTests = 0;
    for (let i = 0; i < 5000; i++) {
      const numSubgroups = 3 + Math.ceil(Math.random() * 20);
      const subgroupSizes: number[] = [];
      for (let i = 0; i < numSubgroups; i++) {
        subgroupSizes.push(Math.floor(Math.random() * 10));
      }
      const totalMembers = subgroupSizes.reduce((acc,num) => acc+num, 0);
      if (totalMembers < 4)
        continue;

      doTest(subgroupSizes);
      totalTests += 1;
    }
    console.log(totalTests);
  });
});