import { Address, getContract, Hex } from "viem";
import {
  AssignmentStatus,
  ClaimInfo,
  ManualCollapseInfo,
  MemberInfo,
  MemberStatus,
  PeriodInfo,
  ReadableClient,
  SubgroupInfo,
  TandaPayContract,
  TandaPayState,
} from "types";
import { TandaPayInfo } from "../../_contracts/TandaPay";

export type TandaPayReadMethodParameters = {
  client: ReadableClient;
  address: Address;
};

/**
 * This class wraps all of the readonly methods for the TandaPay smart contract, providing better naming schemes,
 * mapping raw data from the smart contract onto cleaner types, and providing quality of life functions that automate
 * complex tasks involving multiple readonly method calls that might be useful in other areas of the code base
 */
export class TandaPayReadMethods {
  protected contractInstance: TandaPayContract<ReadableClient>;
  protected client: ReadableClient;

  protected get read() {
    return this.contractInstance.read;
  }

  /**
   * @param contractInstance a TandaPay contract instance with .read functionality
   */
  constructor(params: TandaPayReadMethodParameters) {
    this.client = params.client;
    this.contractInstance = getContract({
      abi: TandaPayInfo.abi,
      address: params.address,
      client: params.client,
    });
  }

  /** @returns A promise that resolves to the contract address of the payment token being used in this TandaPay instance, in hexadecimal string format. */
  getPaymentTokenAddress = async (): Promise<Hex> =>
    await this.read.getPaymentToken();

  /** @returns A promise that resolves to the total number of members in the TandaPay community. */
  getCurrentMemberCount = async () => await this.read.getCurrentMemberId();

  /** @returns A promise that resolves to the total number of subgroups in the TandaPay community. */
  getCurrentSubgroupCount = async () => await this.read.getCurrentSubGroupId();

  /** @returns A promise that resolves to the total number of claims that have occurred in the TandaPay community. This will also be the ID of the next claim */
  getCurrentClaimId = async () => await this.read.getCurrentClaimId();

  /** @returns A promise that resolves to the current period ID, which is just the total number of periods that have elapsed since the community's inception */
  getCurrentPeriodId = async () => await this.read.getPeriodId();

  /** @returns A promise that resolves to the total coverage amount the community has, i.e. how much must collectively go into the community escrow each period */
  getTotalCoverageAmount = async () => await this.read.getTotalCoverage();

  /** @returns A promise that resolves to the base premium, a.k.a. the community escrow contribution each individual member must make. Calculated as `(total coverage) / (member count)` */
  getBasePremium = async () => await this.read.getBasePremium();

  // 8. getManuallyCollapsedPeriod =>
  // Use case -- if manually collapsed then, this function will return the manually collapsed period Id.
  //? is this needed for now? read SC code and find out how this actually works later
  // TODO: implement

  // 9. getIsManuallyCollapsed =>
  // Use case -- This function will return if the manual collapse happened or not.
  //? is this needed for now? find out how this actually works later
  // TODO: implement

  /** @returns A promise that resolves to an enum value representing the state the TandaPay community is in. (e.g. initialization, default, fractured, collapsed) */
  getCommunityState = async () =>
    (await this.read.getCommunityState()) as TandaPayState;

  /**
   * get up-to-date information about a subgroup
   * @param subgroupId Subgroup ID you want information about
   * @returns A promise resolving to an object containing information about the subgroup
   */
  getSubgroupInfo = async (subgroupId: bigint): Promise<SubgroupInfo> =>
    await this.read.getSubGroupIdToSubGroupInfo([subgroupId]);

  //! add integration test
  /**
   * Get information about a claim, given a period and claim ID
   * @param periodId period Id in which the claim occurred
   * @param claimId claim Id for the claim you want information about
   * @returns A promise that resolves to an object containing information about the claim
   */
  getClaimInfo = async (
    periodId: bigint,
    claimId: bigint,
  ): Promise<ClaimInfo> => {
    const claimInformation = await this.read.getPeriodIdToClaimIdToClaimInfo([
      periodId,
      claimId,
    ]);
    // Mapping the object returned by the smart contract to an internal object in this code
    // base that has better naming conventions and works with everything else. In theory, the
    // actual type returned from the smart contract should never need to be used elsewhere.
    return {
      id: claimInformation.id,
      periodId: periodId,
      amount: claimInformation.claimAmount,
      isWhitelisted: claimInformation.isWhitelistd,
      claimantWalletAddress: claimInformation.claimant,
      claimantSubgroupId: claimInformation.SGId,
      hasClaimantClaimedFunds: claimInformation.isClaimed,
    };
  };

  /**
   * Retrieve a list of claim IDs for claims that occurred in a given period
   * @param periodId The period to retrieve claim IDs from
   * @returns A promise resolving to an array of claim IDs in the given period
   */
  getClaimIdsInPeriod = async (periodId: bigint) =>
    await this.read.getPeriodIdToClaimIds([periodId]);

  //! add integration test
  /**
   * Retrieve a list of defectors' member IDs in a given period
   * @param periodId The period to query for defectors
   * @returns A promise resolving to an array of member IDs for members who defected in the given period
   */
  getDefectorMemberIdsInPeriod = async (periodId: bigint) =>
    await this.read.getPeriodIdToDefectorsId([periodId]);

  // 15. getPeriodIdToManualCollapse =>
  // Use case -- This function will return the manual collapse information.
  // Arguments --- The caller will have to provide the period Id.
  //? is this needed for now? find out how this actually works later.
  // TODO: implement

  /**
   * Retrieve a member ID given the member's wallet address
   * @param walletAddress wallet address, as a hexadecimal string (valid hex string prefixed with `0x`)
   * @returns A promise resolving to the member's ID number within the community
   */
  getMemberIdFromAddress = async (walletAddress: Hex) =>
    await this.read.getMemberToMemberId([walletAddress]);

  //! add integration test
  /**
   * Retrieve whitelisted claims that occurred in a given period
   * @param periodId The period ID to query for whitelisted claims
   * @returns A promise resolving to an array of claim IDs for whitelisted claims in the given period
   */
  getWhitelistedClaimIdsInPeriod = async (periodId: bigint) =>
    await this.read.getPeriodIdWhiteListedClaims([periodId]);

  /**
   * Retrieve information about a member given their wallet address and a period Id.
   * @note IF PASSING 0 FOR `periodId`, the underlying smart contract method call simply returns the values for the current period
   * @param memberWalletAddress wallet address of the member in question, as a hexadecimal (valid hex prefixed with `0x`) string
   * @param periodId which period to query for this information. If 0 is passed, it just uses the current period. Default: 0
   * @returns A promise resolving to an object containing information about the given member in the given period ID
   */
  getMemberInfoFromAddress = async (
    memberWalletAddress: Hex,
    periodId: bigint = 0n,
  ): Promise<MemberInfo> => {
    const memberInfo = await this.read.getMemberToMemberInfo([
      memberWalletAddress,
      periodId,
    ]);

    // if 0 was passed, let's get the actual period that this information is going to be associated with
    let curPeriod = periodId;
    if (periodId === 0n) curPeriod = await this.read.getPeriodId();

    // Mapping the object returned by the smart contract to an internal object in this code
    // base that has better naming conventions and works with everything else. In theory, the
    // actual type returned from the smart contract should never need to be used elsewhere.
    return {
      id: memberInfo.memberId,
      periodId: curPeriod, // if 0 was passed, this will be the current period
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

  //! Docs weren't provided for following functions, i'll have to write them myself and inspect SC code to use

  /** @returns A promise resolving to a hexadecimal string, which is the wallet address of the community's secretary */
  getSecretaryAddress = async () => await this.read.secretary();

  /** temp: this is an experimental method */
  // TODO: figure out why this doesn't work?
  //haveAllMembersPaid = async (periodId: bigint) => await this.read.getIsAllMemberNotPaidInPeriod([periodId]);

  /**
   * Retrieve information about a given period
   * @param periodId period ID to query
   * @returns A promise resolving to an object containing information about the given period
   */
  getPeriodInfo = async (periodId: bigint): Promise<PeriodInfo> => {
    const periodInfo = await this.read.getPeriodIdToPeriodInfo([periodId]);
    return {
      /** period Id associated with this information */
      id: periodId,
      /** The timestamp when the period begins */
      startTimestamp: periodInfo.startedAt,
      /** This is the timestamp that the period ended at, or is currently scheduled to end at. Warning: for current periods, the secretary can push this back. */
      endTimestamp: periodInfo.willEndAt,
      /** This is the total amount of coverage that the community had this period */
      coverageAmount: periodInfo.coverage,
      /** Pretty sure this includes savings contributions */
      totalPremiumsPaid: periodInfo.totalPaid,
      /** an array contianing the IDs of each claim that occurred this period */
      claimIds: periodInfo.claimIds,
    };
  };

  /** Returns a list of the secretary successors */
  getSecretarySuccessorList = async () =>
    await this.read.getSecretarySuccessors();

  //! Methods below are custom methods added by me

  /**
   * Get information about a member based on their Id and a given period
   * @param memberId member Id of the member you want to get information about
   * @param periodId what period you want to get information from. Uses current period if 0 is passed. Default = 0
   * @returns information about a member given their Id and an optional periodID
   */
  getMemberInfoFromId = async (memberId: bigint, periodId: bigint = 0n) => {
    const memberInfo = await this.read.getMemberInfoFromId([
      memberId,
      periodId,
    ]);

    // if 0 was passed, let's get the actual period that this information is going to be associated with
    let curPeriod = periodId;
    if (periodId === 0n) curPeriod = await this.getCurrentPeriodId();

    // Mapping the object returned by the smart contract to an internal object in this code
    // base that has better naming conventions and works with everything else. In theory, the
    // actual type returned from the smart contract should never need to be used elsewhere.
    return {
      id: memberInfo.memberId,
      periodId: curPeriod, // if 0 was passed, this will be the current period
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
   * Get information about every subgroup in the community all at once
   * @param numSubgroups how many subgroups are there? optional, will request the subgroup count if
   * no value is passed.
   * @returns an array of subgroupInfo
   */
  getAllSubgroupInfo = async (
    numSubgroups?: bigint | number,
  ): Promise<SubgroupInfo[]> => {
    if (!numSubgroups) numSubgroups = await this.getCurrentSubgroupCount();

    // create an array of subgroup IDs given the number of subgroups that we have.
    // subgroupIds go from 1...subgroupCount, inclusive
    const subgroupIds = Array.from({ length: Number(numSubgroups) }, (_, i) =>
      BigInt(i + 1),
    );

    // get all subgroup info
    const subgroupInfo = await Promise.all(
      subgroupIds.map((v) => this.getSubgroupInfo(v)),
    );

    return subgroupInfo;
  };

  /**
   * Get information about all community members at once
   * @param numMembers how many members in the community? optional, by default it looks this up
   * @param periodId what period do you want to query for information? if none is passed, uses the current period
   * @returns An array of MemberInfo
   */
  getAllMemberInfo = async (
    numMembers?: bigint | number,
    periodId?: bigint | number,
  ): Promise<MemberInfo[]> => {
    if (!numMembers) numMembers = await this.getCurrentMemberCount();
    if (!periodId) periodId = await this.getCurrentPeriodId();

    const memberIds = Array.from({ length: Number(numMembers) }, (_, i) =>
      BigInt(i + 1),
    );
    const memberInfo = await Promise.all(
      memberIds.map((id) => this.getMemberInfoFromId(id, BigInt(periodId))),
    );

    return memberInfo;
  };

  /** Returns information about the current period */
  getCurrentPeriodInfo = async (): Promise<PeriodInfo> => {
    const periodId = await this.getCurrentPeriodId();
    return await this.getPeriodInfo(periodId);
  };
}

// NOTE: saAmount refers to the amount required by the savings escrow
// NOTE: ISEscorwAmount = amount in member's savings escrow
// NOTE: CEscrowAmount = amount member will contribute to community escrow

//? Any boxes checked below means the method has been used in a wrapper in the class above
//* these were documented by MD
// - [x] this.read.getTotalCoverage
// - [x] this.read.getSubGroupIdToSubGroupInfo
// - [x] this.read.getPeriodIdWhiteListedClaims
// - [x] this.read.getPeriodIdToDefectorsId
// - [x] this.read.getPeriodIdToClaimIds
// - [x] this.read.getPeriodIdToClaimIdToClaimInfo
// - [x] this.read.getPeriodId
// - [x] this.read.getPaymentToken
// - [x] this.read.getMemberToMemberInfo
// - [x] this.read.getMemberToMemberId
// - [x] this.read.getCurrentSubGroupId
// - [x] this.read.getCurrentMemberId
// - [x] this.read.getCurrentClaimId
// - [x] this.read.getCommunityState
// - [x] this.read.getBasePremium
// - [ ] this.read.getManuallyCollapsedPeriod
// - [ ] this.read.getIsManuallyCollapsed
// - [ ] this.read.getPeriodIdToManualCollapse

//! these weren't documented by MD.
//TODO: figure out why these weren't documented, such as:
//TODO: - if any of them were supposed to be private/internal use only
//TODO: - if any of them are unused or have no utility to us here
// - [x] this.read.secretary                                (no clue why it wasn't documented)
// - [ ] this.read.getUpcomingSecretary
// - [x] this.read.getSecretarySuccessors                   (definitely needed for filters)
// - [x] this.read.getPeriodIdToPeriodInfo                  (I think this is necessary, not sure why MD didn't document it)
// - [ ] this.read.getIsHandingOver
// - [x] this.read.getIsAllMemberNotPaidInPeriod            (not sure why MD didn't document it, we'll need to test it though)
// - [ ] this.read.getIsAMemberDefectedInPeriod
// - [ ] this.read.getHandoverStartedAt
// - [ ] this.read.getEmergencySecretaries
// - [ ] this.read.getEmergencyHandoverStartedAt
// - [ ] this.read.getEmergencyHandOverStartedPeriod
// - [ ] this.read.EmergencyStartTime

//! I added these to the smart contract source
