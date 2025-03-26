import { TandaPayInfo } from "_contracts/TandaPay";
import {
  GetSubgroupInfoParameters,
  GetClaimInfoParameters,
  GetClaimIdsInPeriodParameters,
  GetDefectorMemberIdsInPeriodParameters,
  GetMemberIdFromAddressParameters,
  GetWhitelistedClaimIdsInPeriodParameters,
  GetMemberInfoFromAddressParameters,
  GetPeriodInfoParameters,
  GetMemberInfoFromIdParameters,
  TandaPayReader,
} from "tandapay_interface/read_interface";
import {
  TandaPayState,
  SubgroupInfo,
  ClaimInfo,
  MemberInfo,
  MemberStatus,
  AssignmentStatus,
  PeriodInfo,
} from "types";
import { Address } from "viem";
import { ReadableClientAndAddress } from "./types";

export const getPaymentTokenAddress = async (
  params: ReadableClientAndAddress,
): Promise<Address> => {
  const { client, contractAddress: address } = params;
  return await client.readContract({
    address,
    abi: TandaPayInfo.abi,
    functionName: "getPaymentTokenAddress",
  });
};

/** @returns A promise that resolves to the total number of members in the TandaPay community. */
export const getCurrentMemberCount = async (
  params: ReadableClientAndAddress,
): Promise<bigint> => {
  const { client, contractAddress: address } = params;
  return await client.readContract({
    address,
    abi: TandaPayInfo.abi,
    functionName: "getCurrentMemberCount",
  });
};

/** @returns A promise that resolves to the total number of subgroups in the TandaPay community. */
export const getCurrentSubgroupCount = async (
  params: ReadableClientAndAddress,
): Promise<bigint> => {
  const { client, contractAddress: address } = params;
  return await client.readContract({
    address,
    abi: TandaPayInfo.abi,
    functionName: "getCurrentSubgroupCount",
  });
};

/** @returns A promise that resolves to the total number of claims that have occurred in the TandaPay community. This will also be the ID of the next claim */
export const getCurrentClaimId = async (
  params: ReadableClientAndAddress,
): Promise<bigint> => {
  const { client, contractAddress: address } = params;
  return await client.readContract({
    address,
    abi: TandaPayInfo.abi,
    functionName: "getCurrentClaimId",
  });
};

/** @returns A promise that resolves to the current period ID, which is just the total number of periods that have elapsed since the community's inception */
export const getCurrentPeriodId = async (
  params: ReadableClientAndAddress,
): Promise<bigint> => {
  const { client, contractAddress: address } = params;
  return await client.readContract({
    address,
    abi: TandaPayInfo.abi,
    functionName: "getCurrentPeriodId",
  });
};

/** @returns A promise that resolves to the total coverage amount the community has, i.e. how much must collectively go into the community escrow each period */
export const getTotalCoverageAmount = async (
  params: ReadableClientAndAddress,
): Promise<bigint> => {
  const { client, contractAddress: address } = params;
  return await client.readContract({
    address,
    abi: TandaPayInfo.abi,
    functionName: "getTotalCoverageAmount",
  });
};

/** @returns A promise that resolves to the base premium, a.k.a. the community escrow contribution each individual member must make. Calculated as `(total coverage) / (member count)` */
export const getBasePremium = async (
  params: ReadableClientAndAddress,
): Promise<bigint> => {
  const { client, contractAddress: address } = params;
  return await client.readContract({
    address,
    abi: TandaPayInfo.abi,
    functionName: "getBasePremium",
  });
};

/** @returns A promise that resolves to an enum value representing the state the TandaPay community is in. (e.g. initialization, default, fractured, collapsed) */
export const getCommunityState = async (
  params: ReadableClientAndAddress,
): Promise<TandaPayState> => {
  const { client, contractAddress: address } = params;
  return await client.readContract({
    address,
    abi: TandaPayInfo.abi,
    functionName: "getCommunityState",
  });
};

/**
 * get up-to-date information about a subgroup
 * @param subgroupId Subgroup ID you want information about
 * @returns A promise resolving to an object containing information about the subgroup
 */
export const getSubgroupInfo = async (
  params: ReadableClientAndAddress & GetSubgroupInfoParameters,
): Promise<SubgroupInfo> => {
  const { client, contractAddress: address } = params;
  return await client.readContract({
    address,
    abi: TandaPayInfo.abi,
    functionName: "getSubgroupInfo",
    args: [BigInt(params.subgroupId)],
  });
};

/**
 * Get information about a claim, given a period and claim ID
 * @param periodId period Id in which the claim occurred
 * @param claimId claim Id for the claim you want information about
 * @returns A promise that resolves to an object containing information about the claim
 */
export const getClaimInfo = async (
  params: ReadableClientAndAddress & GetClaimInfoParameters,
): Promise<ClaimInfo> => {
  const { client, contractAddress: address } = params;
  const res = await client.readContract({
    address,
    abi: TandaPayInfo.abi,
    functionName: "getClaimInfo",
    args: [BigInt(params.periodId ?? 0), BigInt(params.claimId)],
  });
  return {
    id: res.id,
    periodId: BigInt(params.periodId ?? 0),
    amount: res.claimAmount,
    isWhitelisted: res.isWhitelistd,
    claimantWalletAddress: res.claimant,
    claimantSubgroupId: res.SGId,
    hasClaimantClaimedFunds: res.isClaimed,
  };
};

/**
 * Retrieve a list of claim IDs for claims that occurred in a given period
 * @param periodId The period to retrieve claim IDs from
 * @returns A promise resolving to an array of claim IDs in the given period
 */
export const getClaimIdsInPeriod = async (
  params: ReadableClientAndAddress & GetClaimIdsInPeriodParameters,
): Promise<readonly bigint[]> => {
  const { client, contractAddress: address } = params;
  return await client.readContract({
    address,
    abi: TandaPayInfo.abi,
    functionName: "getClaimIdsInPeriod",
    args: [BigInt(params.periodId ?? 0n)],
  });
};

/**
 * Retrieve a list of defectors' member IDs in a given period
 * @param periodId The period to query for defectors
 * @returns A promise resolving to an array of member IDs for members who defected in the given period
 */
export const getDefectorMemberIdsInPeriod = async (
  params: ReadableClientAndAddress & GetDefectorMemberIdsInPeriodParameters,
): Promise<readonly bigint[]> => {
  const { client, contractAddress: address } = params;
  return await client.readContract({
    address,
    abi: TandaPayInfo.abi,
    functionName: "getDefectorMemberIdsInPeriod",
    args: [BigInt(params.periodId ?? 0n)],
  });
};

/**
 * Retrieve a member ID given the member's wallet address
 * @param walletAddress wallet address, as a hexadecimal string (valid hex string prefixed with `0x`)
 * @returns A promise resolving to the member's ID number within the community
 */
export const getMemberIdFromAddress = async (
  params: ReadableClientAndAddress & GetMemberIdFromAddressParameters,
): Promise<bigint> => {
  const { client, contractAddress: address } = params;
  return await client.readContract({
    address,
    abi: TandaPayInfo.abi,
    functionName: "getMemberIdFromAddress",
    args: [params.walletAddress],
  });
};

/**
 * Retrieve whitelisted claims that occurred in a given period
 * @param periodId The period ID to query for whitelisted claims
 * @returns A promise resolving to an array of claim IDs for whitelisted claims in the given period
 */
export const getWhitelistedClaimIdsInPeriod = async (
  params: ReadableClientAndAddress & GetWhitelistedClaimIdsInPeriodParameters,
): Promise<readonly bigint[]> => {
  const { client, contractAddress: address } = params;
  return await client.readContract({
    address,
    abi: TandaPayInfo.abi,
    functionName: "getWhitelistedClaimIdsInPeriod",
    args: [BigInt(params.periodId ?? 0n)],
  });
};

/**
 * Retrieve information about a member given their wallet address and a period Id.
 * @note IF PASSING 0 FOR `periodId`, the underlying smart contract method call simply returns the values for the current period
 * @param memberWalletAddress wallet address of the member in question, as a hexadecimal (valid hex prefixed with `0x`) string
 * @param periodId which period to query for this information. If 0 is passed, it just uses the current period. Default: 0
 * @returns A promise resolving to an object containing information about the given member in the given period ID
 */
export const getMemberInfoFromAddress = async (
  params: ReadableClientAndAddress & GetMemberInfoFromAddressParameters,
): Promise<MemberInfo> => {
  const { client, contractAddress: address } = params;
  const memberInfo = await client.readContract({
    address,
    abi: TandaPayInfo.abi,
    functionName: "getMemberInfoFromAddress",
    args: [params.walletAddress, BigInt(params.periodId ?? 0n)],
  });
  return {
    id: memberInfo.memberId,
    subgroupId: memberInfo.associatedGroupId,
    walletAddress: memberInfo.member,
    communityEscrowAmount: memberInfo.cEscrowAmount,
    savingsEscrowAmount: memberInfo.ISEscorwAmount,
    pendingRefundAmount: memberInfo.pendingRefundAmount,
    availableToWithdrawAmount: memberInfo.availableToWithdraw,
    isEligibleForCoverageThisPeriod: memberInfo.eligibleForCoverageInPeriod,
    isPremiumPaidThisPeriod: memberInfo.isPremiumPaid,
    queuedRefundAmountThisPeriod: memberInfo.idToQuedRefundAmount,
    memberStatus: memberInfo.status as MemberStatus,
    assignmentStatus: memberInfo.assignment as AssignmentStatus,
  };
};

/** @returns A promise resolving to a hexadecimal string, which is the wallet address of the community's secretary */
export const getSecretaryAddress = async (
  params: ReadableClientAndAddress,
): Promise<Address> => {
  const { client, contractAddress: address } = params;
  return await client.readContract({
    address,
    abi: TandaPayInfo.abi,
    functionName: "getSecretaryAddress",
  });
};

/**
 * Retrieve information about a given period
 * @param periodId period ID to query
 * @returns A promise resolving to an object containing information about the given period
 */
export const getPeriodInfo = async (
  params: ReadableClientAndAddress & GetPeriodInfoParameters,
): Promise<PeriodInfo> => {
  const { client, contractAddress: address } = params;
  const periodInfo = await client.readContract({
    address,
    abi: TandaPayInfo.abi,
    functionName: "getPeriodIdToPeriodInfo",
    args: [BigInt(params.periodId ?? 0n)],
  });
  return {
    startTimestamp: periodInfo.startedAt,
    endTimestamp: periodInfo.willEndAt,
    coverageAmount: periodInfo.coverage,
    totalPremiumsPaid: periodInfo.totalPaid,
    claimIds: periodInfo.claimIds,
  };
};

/** Returns a list of the secretary successors */
export const getSecretarySuccessorList = async (
  params: ReadableClientAndAddress,
): Promise<readonly Address[]> => {
  const { client, contractAddress: address } = params;
  return await client.readContract({
    address,
    abi: TandaPayInfo.abi,
    functionName: "getSecretarySuccessorList",
  });
};

/** Returns whether or not the secretary has initiated a voluntary handover */
export const isVoluntaryHandoverInProgress = async (
  params: ReadableClientAndAddress,
): Promise<boolean> => {
  const { client, contractAddress: address } = params;
  return await client.readContract({
    address,
    abi: TandaPayInfo.abi,
    functionName: "getIsHandingOver",
  });
};

/** If the secretary has initiated a voluntary handover, this returns the address of the nominee */
export const getVoluntaryHandoverNominee = async (
  params: ReadableClientAndAddress,
): Promise<Address> => {
  const { client, contractAddress: address } = params;
  return await client.readContract({
    address,
    abi: TandaPayInfo.abi,
    functionName: "getUpcomingSecretary",
  });
};

/**
 * Gets the members who have been nominated by secretary successors to take on the role of
 * secretary in the event of an emergency handover
 */
export const getEmergencyHandoverNominees = async (
  params: ReadableClientAndAddress,
): Promise<readonly Address[]> => {
  const { client, contractAddress: address } = params;
  return await client.readContract({
    address,
    abi: TandaPayInfo.abi,
    functionName: "getEmergencySecretaries",
  });
};

/**
 * Get information about a member based on their Id and a given period
 * @param memberId member Id of the member you want to get information about
 * @param periodId what period you want to get information from. Uses current period if 0 is passed. Default = 0
 * @returns information about a member given their Id and an optional periodID
 */
export const getMemberInfoFromId = async (
  params: ReadableClientAndAddress & GetMemberInfoFromIdParameters,
): Promise<MemberInfo> => {
  const { client, contractAddress: address } = params;
  const memberInfo = await client.readContract({
    address,
    abi: TandaPayInfo.abi,
    functionName: "getMemberInfoFromId",
    args: [BigInt(params.memberId), BigInt(params.periodId ?? 0n)],
  });
  // map raw type to MemberInfo type
  return {
    id: memberInfo.memberId,
    subgroupId: memberInfo.associatedGroupId,
    walletAddress: memberInfo.member,
    communityEscrowAmount: memberInfo.cEscrowAmount,
    savingsEscrowAmount: memberInfo.ISEscorwAmount,
    pendingRefundAmount: memberInfo.pendingRefundAmount,
    availableToWithdrawAmount: memberInfo.availableToWithdraw,
    isEligibleForCoverageThisPeriod: memberInfo.eligibleForCoverageInPeriod,
    isPremiumPaidThisPeriod: memberInfo.isPremiumPaid,
    queuedRefundAmountThisPeriod: memberInfo.idToQuedRefundAmount,
    memberStatus: memberInfo.status as MemberStatus,
    assignmentStatus: memberInfo.assignment as AssignmentStatus,
  };
};

/**
 * Given a ReadableClient and smart contract Address, it returns an object that has all TandaPay
 * read actions, automatically injecting the client and contract address into the actions so that
 * there is no need to pass them around each time.
 */
export function getTandaPayReadActions(
  params: ReadableClientAndAddress,
): TandaPayReader {
  const { client, contractAddress: address } = params;
  return {
    getPaymentTokenAddress: async () =>
      getPaymentTokenAddress({ client, contractAddress: address }),
    getCurrentMemberCount: async () =>
      getCurrentMemberCount({ client, contractAddress: address }),
    getCurrentSubgroupCount: async () =>
      getCurrentSubgroupCount({ client, contractAddress: address }),
    getCurrentClaimId: async () =>
      getCurrentClaimId({ client, contractAddress: address }),
    getCurrentPeriodId: async () =>
      getCurrentPeriodId({ client, contractAddress: address }),
    getTotalCoverageAmount: async () =>
      getTotalCoverageAmount({ client, contractAddress: address }),
    getBasePremium: async () =>
      getBasePremium({ client, contractAddress: address }),
    getCommunityState: async () =>
      getCommunityState({ client, contractAddress: address }),
    getSubgroupInfo: async (args: GetSubgroupInfoParameters) =>
      getSubgroupInfo({ client, contractAddress: address, ...args }),
    getClaimInfo: (args: GetClaimInfoParameters) =>
      getClaimInfo({ client, contractAddress: address, ...args }),
    getClaimIdsInPeriod: (args?: GetClaimIdsInPeriodParameters) =>
      getClaimIdsInPeriod({ client, contractAddress: address, ...args }),
    getDefectorMemberIdsInPeriod: (
      args?: GetDefectorMemberIdsInPeriodParameters,
    ) =>
      getDefectorMemberIdsInPeriod({
        client,
        contractAddress: address,
        ...args,
      }),
    getMemberIdFromAddress: (args: GetMemberIdFromAddressParameters) =>
      getMemberIdFromAddress({ client, contractAddress: address, ...args }),
    getWhitelistedClaimIdsInPeriod: (
      args?: GetWhitelistedClaimIdsInPeriodParameters,
    ) =>
      getWhitelistedClaimIdsInPeriod({
        client,
        contractAddress: address,
        ...args,
      }),
    getMemberInfoFromAddress: (args: GetMemberInfoFromAddressParameters) =>
      getMemberInfoFromAddress({ client, contractAddress: address, ...args }),
    getSecretaryAddress: async () =>
      getSecretaryAddress({ client, contractAddress: address }),
    getPeriodInfo: (args?: GetPeriodInfoParameters) =>
      getPeriodInfo({ client, contractAddress: address, ...args }),
    getSecretarySuccessorList: async () =>
      getSecretarySuccessorList({ client, contractAddress: address }),
    isVoluntaryHandoverInProgress: async () =>
      isVoluntaryHandoverInProgress({ client, contractAddress: address }),
    getVoluntaryHandoverNominee: async () =>
      getVoluntaryHandoverNominee({ client, contractAddress: address }),
    getEmergencyHandoverNominees: async () =>
      getEmergencyHandoverNominees({ client, contractAddress: address }),
    getMemberInfoFromId: (args: GetMemberInfoFromIdParameters) =>
      getMemberInfoFromId({ client, contractAddress: address, ...args }),
  };
}
