import {
  GetBatchMemberInfoParameters,
  GetBatchSubgroupInfoParameters,
  TandaPayBatchReader,
} from "tandapay_interface/batch_read_interface";
import { MemberInfo, SubgroupInfo } from "types";
import { TandaPayReader } from "tandapay_interface/read_interface";

export type GetBatchSubgroupInfoDeps = {
  reader: Pick<TandaPayReader, "getCurrentSubgroupCount" | "getSubgroupInfo">;
};

export type GetBatchMemberInfoDeps = {
  reader: Pick<TandaPayReader, "getCurrentMemberCount" | "getMemberInfoFromId">;
};

export type GetTandaPayBatchReadActionsParameters = {
  reader: TandaPayReader;
};

export const getBatchMemberInfo = async (
  params: GetBatchMemberInfoDeps & GetBatchMemberInfoParameters,
): Promise<MemberInfo[]> => {
  // extract memberIds from params and map to bigint, otherwise default to empty array
  const memberIds: bigint[] = params?.memberIds?.map((v) => BigInt(v)) ?? [];

  // if we didn't have any members (e.g., empty array), we will simply fetch information about
  // every member. Technically, the programmer could pass an empty array explicitly... but why?
  // even so, behavior can just be documented
  if (memberIds.length === 0) {
    // get total member count, map those to the member IDs for each member, and populate
    // the memberIds array with each ID:
    const memberCount: bigint = await params.reader.getCurrentMemberCount();
    const allMemberIds: bigint[] = Array.from(
      { length: Number(memberCount) },
      (_, i) => BigInt(i + 1),
    );
    memberIds.push(...allMemberIds);
  }

  // if we don't have a periodId, just default to 0. The smart contract interprets a periodId of 0
  // as being "get information wrt. the current period".
  const periodId: bigint = BigInt(params?.periodId ?? 0);
  // get information about all members as a batch
  return await Promise.all(
    memberIds.map((id) =>
      params.reader.getMemberInfoFromId({ memberId: id, periodId: periodId }),
    ),
  );
};

export const getBatchSubgroupInfo = async (
  params: GetBatchSubgroupInfoDeps & GetBatchSubgroupInfoParameters,
): Promise<SubgroupInfo[]> => {
  // extract subgroupIds from params and map to bigint, otherwise default to empty array
  const subgroupIds: bigint[] =
    params?.subgroupIds?.map((v) => BigInt(v)) ?? [];

  // if we didn't have any subgroup IDs defined, we will simply fetch information
  // about every subgroup
  if (subgroupIds.length === 0) {
    // get the total number of subgroups, map that to every subgroup ID, and populate
    // the subgroupIds array with that information
    const subgroupCount: bigint = await params.reader.getCurrentSubgroupCount();
    const allIds: bigint[] = Array.from(
      { length: Number(subgroupCount) },
      (_, i) => BigInt(i + 1),
    );
    subgroupIds.push(...allIds);
  }
  // get information about all subgroups in a batch
  return await Promise.all(
    subgroupIds.map((id) => params.reader.getSubgroupInfo({ subgroupId: id })),
  );
};

export function getTandaPayBatchReadActions(
  params: GetTandaPayBatchReadActionsParameters,
): TandaPayBatchReader {
  const { reader } = params;
  return {
    getBatchMemberInfo: async (args: GetBatchMemberInfoParameters) =>
      getBatchMemberInfo({ reader, ...args }),
    getBatchSubgroupInfo: async (args: GetBatchSubgroupInfoParameters) =>
      getBatchSubgroupInfo({ reader, ...args }),
  };
}
