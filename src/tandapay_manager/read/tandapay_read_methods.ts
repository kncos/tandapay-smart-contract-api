import { Address, getContract, Hex } from "viem";
import {
  ApiNumericType,
  AssignmentStatus,
  ClaimInfo,
  MemberInfo,
  MemberStatus,
  PeriodInfo,
  ReadableClient,
  SubgroupInfo,
  TandaPayContract,
  TandaPayState,
} from "types";
import { TandaPayInfo } from "../../_contracts/TandaPay";
import {
  GetClaimIdsInPeriodParameters,
  GetClaimInfoParameters,
  GetDefectorMemberIdsInPeriodParameters,
  GetMemberIdFromAddressParameters,
  GetMemberInfoFromAddressParameters,
  GetMemberInfoFromIdParameters,
  GetPeriodInfoParameters,
  GetSubgroupInfoParameters,
  GetWhitelistedClaimIdsInPeriodParameters,
  TandaPayBatchReader,
  TandaPayReader,
} from "tandapay_interface/read_interface";

export type TandaPayReadMethodParameters = {
  client: ReadableClient;
  address: Address;
};

/**
 * This class wraps all of the readonly methods for the TandaPay smart contract, providing better naming schemes,
 * mapping raw data from the smart contract onto cleaner types, and providing quality of life functions that automate
 * complex tasks involving multiple readonly method calls that might be useful in other areas of the code base
 */
export class TandaPayReadMethods
  implements TandaPayReader, TandaPayBatchReader
{
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

  getPaymentTokenAddress = async (): Promise<Hex> =>
    await this.read.getPaymentTokenAddress();

  getCurrentMemberCount = async () => await this.read.getCurrentMemberCount();

  getCurrentSubgroupCount = async () =>
    await this.read.getCurrentSubgroupCount();

  getCurrentClaimId = async () => await this.read.getCurrentClaimId();

  getCurrentPeriodId = async () => await this.read.getCurrentPeriodId();

  getTotalCoverageAmount = async () => await this.read.getTotalCoverageAmount();

  getBasePremium = async () => await this.read.getBasePremium();

  getCommunityState = async () =>
    (await this.read.getCommunityState()) as TandaPayState;

  getSubgroupInfo = async (
    params: GetSubgroupInfoParameters,
  ): Promise<SubgroupInfo> =>
    await this.read.getSubgroupInfo([BigInt(params.subgroupId)]);

  getClaimInfo = async (params: GetClaimInfoParameters): Promise<ClaimInfo> => {
    const claimInformation = await this.read.getClaimInfo([
      BigInt(params.periodId ?? 0),
      BigInt(params.claimId),
    ]);
    // Mapping the object returned by the smart contract to an internal object in this code
    // base that has better naming conventions and works with everything else. In theory, the
    // actual type returned from the smart contract should never need to be used elsewhere.
    return {
      id: claimInformation.id,
      periodId: BigInt(params.periodId ?? 0),
      amount: claimInformation.claimAmount,
      isWhitelisted: claimInformation.isWhitelistd,
      claimantWalletAddress: claimInformation.claimant,
      claimantSubgroupId: claimInformation.SGId,
      hasClaimantClaimedFunds: claimInformation.isClaimed,
    };
  };

  getClaimIdsInPeriod = async (params: GetClaimIdsInPeriodParameters) =>
    await this.read.getClaimIdsInPeriod([BigInt(params.periodId ?? 0)]);

  getDefectorMemberIdsInPeriod = async (
    params: GetDefectorMemberIdsInPeriodParameters,
  ) =>
    await this.read.getDefectorMemberIdsInPeriod([
      BigInt(params.periodId ?? 0),
    ]);

  getMemberIdFromAddress = async (params: GetMemberIdFromAddressParameters) =>
    await this.read.getMemberIdFromAddress([params.walletAddress]);

  getWhitelistedClaimIdsInPeriod = async (
    params: GetWhitelistedClaimIdsInPeriodParameters,
  ) =>
    await this.read.getWhitelistedClaimIdsInPeriod([
      BigInt(params.periodId ?? 0),
    ]);

  getMemberInfoFromAddress = async (
    params: GetMemberInfoFromAddressParameters,
  ): Promise<MemberInfo> => {
    const memberInfo = await this.read.getMemberInfoFromAddress([
      params.walletAddress,
      BigInt(params.periodId ?? 0),
    ]);

    // map raw type to memberInfo type
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

  getSecretaryAddress = async () => await this.read.getSecretaryAddress();

  getPeriodInfo = async (
    params?: GetPeriodInfoParameters,
  ): Promise<PeriodInfo> => {
    const periodId = params && params.periodId ? BigInt(params.periodId) : 0n;
    const periodInfo = await this.read.getPeriodIdToPeriodInfo([periodId]);
    return {
      startTimestamp: periodInfo.startedAt,
      endTimestamp: periodInfo.willEndAt,
      coverageAmount: periodInfo.coverage,
      totalPremiumsPaid: periodInfo.totalPaid,
      claimIds: periodInfo.claimIds,
    };
  };

  getSecretarySuccessorList = async () =>
    await this.read.getSecretarySuccessorList();

  isVoluntaryHandoverInProgress = async () =>
    await this.read.getIsHandingOver();

  getVoluntaryHandoverNominee = async () =>
    await this.read.getUpcomingSecretary();

  getEmergencyHandoverNominees = async () =>
    await this.read.getEmergencySecretaries();

  //! Methods below are custom methods added by me

  /**
   * Get information about a member based on their Id and a given period
   * @param memberId member Id of the member you want to get information about
   * @param periodId what period you want to get information from. Uses current period if 0 is passed. Default = 0
   * @returns information about a member given their Id and an optional periodID
   */
  getMemberInfoFromId = async (
    params: GetMemberInfoFromIdParameters,
  ): Promise<MemberInfo> => {
    const memberInfo = await this.read.getMemberInfoFromId([
      BigInt(params.memberId),
      BigInt(params.periodId ?? 0),
    ]);

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
   * Get information about every subgroup in the community all at once
   * @param numSubgroups how many subgroups are there? optional, will request the subgroup count if
   * no value is passed.
   * @returns an array of subgroupInfo
   */
  getAllSubgroupInfo = async (
    numSubgroups?: ApiNumericType,
  ): Promise<SubgroupInfo[]> => {
    if (!numSubgroups) numSubgroups = await this.getCurrentSubgroupCount();

    // create an array of subgroup IDs given the number of subgroups that we have.
    // subgroupIds go from 1...subgroupCount, inclusive
    const subgroupIds = Array.from({ length: Number(numSubgroups) }, (_, i) =>
      BigInt(i + 1),
    );

    // get all subgroup info
    const subgroupInfo = await Promise.all(
      subgroupIds.map((v) => this.getSubgroupInfo({ subgroupId: v })),
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
    numMembers?: ApiNumericType,
    periodId?: ApiNumericType,
  ): Promise<MemberInfo[]> => {
    if (!numMembers) numMembers = await this.getCurrentMemberCount();
    if (!periodId) periodId = await this.getCurrentPeriodId();

    const memberIds = Array.from({ length: Number(numMembers) }, (_, i) =>
      BigInt(i + 1),
    );
    const memberInfo = await Promise.all(
      memberIds.map((id) =>
        this.getMemberInfoFromId({ memberId: id, periodId: periodId }),
      ),
    );

    return memberInfo;
  };
}
