import { ar } from "auto_reorg";
import { Address } from "viem";


function validateSubgroups(subgroups: Map<number, Address[]>, countEmpty: boolean = false): boolean {
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

describe("auto reorg", () => {
  it("subgroup sizes: 3, 4, 4", () => {
    const subgroups = makeSubgroups([3, 4, 4]);
    const needsAssigned = subgroups.get(1)!;
    const sol = ar({subgroups,needsAssigned});
    expect(validateSubgroups(sol)).toBe(true);
    //console.log(sol);
  });

  it("subgroup sizes: 1, 7, 7", () => {
    const subgroups = makeSubgroups([1,7,7]);
    const needsAssigned = subgroups.get(1)!;
    const sol = ar ({subgroups,needsAssigned});
    expect(validateSubgroups(sol)).toBe(true);
    //console.log(sol);
  });

  it("subgroup sizes: 2, 2, 7", () => {
    const subgroups = makeSubgroups([2,2,7]);
    const needsAssigned = subgroups.get(1)!;
    needsAssigned.push(...subgroups.get(2)!);
    console.log(subgroups);
    const sol = ar ({subgroups,needsAssigned});
    console.log(sol);
    expect(validateSubgroups(sol)).toBe(true);
  });
});