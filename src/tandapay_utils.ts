import {
  ReadOnlyTandaPayManager,
  WriteableTandaPayManager,
} from "tandapay_manager/tandapay_manager";
import { SubgroupInfo } from "types";

export async function getAllSubgroupInfo(
  manager: ReadOnlyTandaPayManager | WriteableTandaPayManager,
) {
  const subgroupCount = await manager.read.getCurrentSubgroupCount();
  const subgroupInfo = new Map<bigint, SubgroupInfo>();

  // subgroup IDs begin at 1
  for (let i = 1n; i <= subgroupCount; i++) {
    const info = await manager.read.getSubgroupInfo(i);
    subgroupInfo.set(i, info);
  }

  return subgroupInfo;
}
