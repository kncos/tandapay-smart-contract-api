import {
  ApiNumericType,
  ClaimInfo,
  MemberInfo,
  PeriodInfo,
  SubgroupInfo,
  TandaPayState,
} from "types";
import { Address } from "viem";

type PeriodIdParam = { periodId?: ApiNumericType };

export type GetSubgroupInfoParameters = { subgroupId: ApiNumericType };
export type GetClaimInfoParameters = PeriodIdParam & {
  claimId: ApiNumericType;
};
export type GetClaimIdsInPeriodParameters = PeriodIdParam;
export type GetDefectorMemberIdsInPeriodParameters = PeriodIdParam;

export type GetMemberIdFromAddressParameters = { walletAddress: Address };
export type GetWhitelistedClaimIdsInPeriodParameters = PeriodIdParam;

export type GetMemberInfoFromAddressParameters = {
  walletAddress: Address;
  periodId?: ApiNumericType;
};

export type GetPeriodInfoParameters = PeriodIdParam;

export type GetMemberInfoFromIdParameters = {
  memberId: ApiNumericType;
  periodId?: ApiNumericType;
};

export interface TandaPayReader {
  /** @returns A promise that resolves to the contract address of the payment token being used in this TandaPay instance, in hexadecimal string format. */
  getPaymentTokenAddress(): Promise<Address>;

  /** @returns A promise that resolves to the total number of members in the TandaPay community. */
  getCurrentMemberCount(): Promise<bigint>;

  /** @returns A promise that resolves to the total number of subgroups in the TandaPay community. */
  getCurrentSubgroupCount(): Promise<bigint>;

  /** @returns A promise that resolves to the total number of claims that have occurred in the TandaPay community. This will also be the ID of the next claim */
  getCurrentClaimId(): Promise<bigint>;

  /** @returns A promise that resolves to the current period ID, which is just the total number of periods that have elapsed since the community's inception */
  getCurrentPeriodId(): Promise<bigint>;

  /** @returns A promise that resolves to the total coverage amount the community has, i.e. how much must collectively go into the community escrow each period */
  getTotalCoverageAmount(): Promise<bigint>;

  /** @returns A promise that resolves to the base premium, a.k.a. the community escrow contribution each individual member must make. Calculated as `(total coverage) / (member count)` */
  getBasePremium(): Promise<bigint>;

  /** @returns A promise that resolves to an enum value representing the state the TandaPay community is in. (e.g. initialization, default, fractured, collapsed) */
  getCommunityState(): Promise<TandaPayState>;

  /**
   * get up-to-date information about a subgroup
   * @param subgroupId Subgroup ID you want information about
   * @returns A promise resolving to an object containing information about the subgroup
   */
  getSubgroupInfo(params: GetSubgroupInfoParameters): Promise<SubgroupInfo>;

  /**
   * Get information about a claim, given a period and claim ID
   * @param periodId period Id in which the claim occurred
   * @param claimId claim Id for the claim you want information about
   * @returns A promise that resolves to an object containing information about the claim
   */
  getClaimInfo(params: GetClaimInfoParameters): Promise<ClaimInfo>;

  /**
   * Retrieve a list of claim IDs for claims that occurred in a given period
   * @param periodId The period to retrieve claim IDs from
   * @returns A promise resolving to an array of claim IDs in the given period
   */
  getClaimIdsInPeriod(
    params?: GetClaimIdsInPeriodParameters,
  ): Promise<readonly bigint[]>;

  /**
   * Retrieve a list of defectors' member IDs in a given period
   * @param periodId The period to query for defectors
   * @returns A promise resolving to an array of member IDs for members who defected in the given period
   */
  getDefectorMemberIdsInPeriod(
    params?: GetDefectorMemberIdsInPeriodParameters,
  ): Promise<readonly bigint[]>;

  /**
   * Retrieve a member ID given the member's wallet address
   * @param walletAddress wallet address, as a hexadecimal string (valid hex string prefixed with `0x`)
   * @returns A promise resolving to the member's ID number within the community
   */
  getMemberIdFromAddress(
    params: GetMemberIdFromAddressParameters,
  ): Promise<bigint>;

  /**
   * Retrieve whitelisted claims that occurred in a given period
   * @param periodId The period ID to query for whitelisted claims
   * @returns A promise resolving to an array of claim IDs for whitelisted claims in the given period
   */
  getWhitelistedClaimIdsInPeriod(
    params?: GetWhitelistedClaimIdsInPeriodParameters,
  ): Promise<readonly bigint[]>;

  /**
   * Retrieve information about a member given their wallet address and a period Id.
   * @note IF PASSING 0 FOR `periodId`, the underlying smart contract method call simply returns the values for the current period
   * @param memberWalletAddress wallet address of the member in question, as a hexadecimal (valid hex prefixed with `0x`) string
   * @param periodId which period to query for this information. If 0 is passed, it just uses the current period. Default: 0
   * @returns A promise resolving to an object containing information about the given member in the given period ID
   */
  getMemberInfoFromAddress(
    params: GetMemberInfoFromAddressParameters,
  ): Promise<MemberInfo>;

  /** @returns A promise resolving to a hexadecimal string, which is the wallet address of the community's secretary */
  getSecretaryAddress(): Promise<Address>;

  /**
   * Retrieve information about a given period
   * @param periodId period ID to query
   * @returns A promise resolving to an object containing information about the given period
   */
  getPeriodInfo(params?: GetPeriodInfoParameters): Promise<PeriodInfo>;

  /** Returns a list of the secretary successors */
  getSecretarySuccessorList(): Promise<readonly Address[]>;

  /** Returns whether or not the secretary has initiated a voluntary handover */
  isVoluntaryHandoverInProgress(): Promise<boolean>;

  /** If the secretary has initiated a voluntary handover, this returns the address of the nominee */
  getVoluntaryHandoverNominee(): Promise<Address>;

  /**
   * Gets the members who have been nominated by secretary successors to take on the role of
   * secretary in the event of an emergency handover
   */
  getEmergencyHandoverNominees(): Promise<readonly Address[]>;

  /**
   * Get information about a member based on their Id and a given period
   * @param memberId member Id of the member you want to get information about
   * @param periodId what period you want to get information from. Uses current period if 0 is passed. Default = 0
   * @returns information about a member given their Id and an optional periodID
   */
  getMemberInfoFromId(
    params: GetMemberInfoFromIdParameters,
  ): Promise<MemberInfo>;
}

export type GetBatchSubgroupInfoParameters = {
  subgroupIds?: ApiNumericType[];
}

export type GetBatchMemberInfoParameters = {
  memberIds?: ApiNumericType[];
  periodId?: ApiNumericType;
}

export interface TandaPayBatchReader {
  /** 
   * Gets information about multiple subgroups at once. If a list of subgroupIds is not
   * provided, or an empty list is provided, it will simply fetch information about every subgroup
   */
  getBatchSubgroupInfo(params?: GetBatchSubgroupInfoParameters): Promise<SubgroupInfo[]>;

  /** 
   * Gets information about multiple members at once. If a list of memberIds is not
   * provided, or an empty list is provided, it will simply fetch information about every member
   */
  getBatchMemberInfo(params?: GetBatchMemberInfoParameters): Promise<MemberInfo[]>;
}

// unused smart contract abi read methods:
// - getIsAMemberDefectedInPeriod
// - getHandoverStartedAt
// - getEmergencyHandoverStartedAt
// - getEmergencyHandOverStartedPeriod
// - EmergencyStartTime
// - getIsAllMemberNotPaidInPeriod
