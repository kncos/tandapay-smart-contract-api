import { autoReorg } from "auto_reorg";
import { Address } from "viem";

function validateSubgroups(
  subgroups: Map<number, Address[]>,
  countEmpty: boolean,
  expectedMemberCount: number,
): boolean {
  const uniqueMembers = new Set<Address>();
  for (const memberList of subgroups.values()) {
    if (memberList.length > 0 && memberList.length < 4) return false;
    if (memberList.length > 7) return false;
    if (countEmpty && memberList.length === 0) return false;

    for (const m of memberList) {
      if (uniqueMembers.has(m.toLowerCase() as Address)) return false;
      else uniqueMembers.add(m.toLowerCase() as Address);
    }
  }

  if (uniqueMembers.size !== expectedMemberCount) return false;

  return true;
}

function generateAddress(): Address {
  return `0x${Array.from({ length: 40 }, () =>
    Math.floor(Math.random() * 16).toString(16),
  ).join("")}`;
}

function makeSubgroup(size: number) {
  const addresses: Address[] = [];
  for (let i = 0; i < size; i++) addresses.push(generateAddress());

  return addresses;
}

function makeSubgroups(sizes: number[]) {
  const subgroups = new Map<number, Address[]>();
  for (const [index, size] of sizes.entries()) {
    subgroups.set(index + 1, makeSubgroup(size));
  }
  return subgroups;
}

function doTest(subgroupSizes: number[]) {
  const subgroups = makeSubgroups(subgroupSizes);
  const needsAssigned: Address[] = [];
  for (const memberList of subgroups.values()) {
    if (memberList.length < 4) needsAssigned.push(...memberList);
  }
  const sol = autoReorg({ subgroups, needsAssigned });
  expect(
    validateSubgroups(
      sol,
      false,
      subgroupSizes.reduce((acc, num) => acc + num, 0),
    ),
  ).toBe(true);
}

describe("auto reorg", () => {
  it("subgroup sizes: 3, 4, 4", () => {
    doTest([3, 4, 4]);
  });

  it("subgroup sizes: 1, 7, 7", () => {
    doTest([1, 7, 7]);
  });

  it("subgroup sizes: 2, 2, 7", () => {
    doTest([2, 2, 7]);
  });

  it("all valid subgroups", () => {
    doTest([4, 4, 4]);
  });

  it("valid subgroups and one too large", () => {
    doTest([4, 4, 8]);
  });

  it("random tests? let's see if they work", () => {
    //let totalTests = 0;
    for (let i = 0; i < 100; i++) {
      const numSubgroups = 3 + Math.ceil(Math.random() * 20);
      const subgroupSizes: number[] = [];
      for (let i = 0; i < numSubgroups; i++) {
        subgroupSizes.push(Math.floor(Math.random() * 10));
      }
      const totalMembers = subgroupSizes.reduce((acc, num) => acc + num, 0);
      if (totalMembers < 4) continue;

      doTest(subgroupSizes);
      //totalTests += 1;
    }
  });
});
