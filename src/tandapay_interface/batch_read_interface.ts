import { SubgroupInfo, MemberInfo, ApiNumericType } from "types";

export type GetBatchSubgroupInfoParameters = {
  subgroupIds?: ApiNumericType[];
};

export type GetBatchMemberInfoParameters = {
  memberIds?: ApiNumericType[];
  periodId?: ApiNumericType;
};

export interface TandaPayBatchReader {
  /**
   * Gets information about multiple subgroups at once. If a list of subgroupIds is not
   * provided, or an empty list is provided, it will simply fetch information about every subgroup
   */
  getBatchSubgroupInfo(
    params?: GetBatchSubgroupInfoParameters,
  ): Promise<SubgroupInfo[]>;

  /**
   * Gets information about multiple members at once. If a list of memberIds is not
   * provided, or an empty list is provided, it will simply fetch information about every member
   */
  getBatchMemberInfo(
    params?: GetBatchMemberInfoParameters,
  ): Promise<MemberInfo[]>;
}
