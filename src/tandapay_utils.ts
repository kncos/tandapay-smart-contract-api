import {
  BaseTandaPayManager,
} from "tandapay_manager/tandapay_manager";
import { SubgroupInfo } from "types";

export async function getAllSubgroupInfo(
  manager: BaseTandaPayManager
): Promise<Map<bigint, SubgroupInfo>> {
  const subgroupCount = await manager.read.getCurrentSubgroupCount();
  // make an array of subgroupIds from 1..subgroupCount (inclusive)
  const subgroupIds = Array.from({length: Number(subgroupCount)}, (_, i) => BigInt(i+1));

  const subgroupInfoArray = await Promise.all(
    subgroupIds.map(async (id) => {
      const info = await manager.read.getSubgroupInfo(id);
      return {id, info};
    })
  );

  return new Map<bigint, SubgroupInfo>(subgroupInfoArray.map(({id, info}) => [id, info]));
}
