import { Address, getContract, Hex } from "viem";
import {
  AssignmentStatus,
  ClaimInfo,
  MemberInfo,
  MemberStatus,
  PeriodInfo,
  ReadableClient,
  SubgroupInfo,
  TandaPayContract,
  TandaPayState
} from "types";
import { TandaPayInfo } from "../../_contracts/TandaPay";
import {
  GetBatchMemberInfoParameters,
  GetBatchSubgroupInfoParameters,
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

  getBatchMemberInfo = async (params?: GetBatchMemberInfoParameters): Promise<MemberInfo[]> => {
    // extract memberIds from params and map to bigint, otherwise default to empty array
    const memberIds: bigint[] = params?.memberIds?.map(v => BigInt(v)) ?? [];

    // if we didn't have any members (e.g., empty array), we will simply fetch information about
    // every member. Technically, the programmer could pass an empty array explicitly... but why?
    // even so, this behavior can just be documented
    if (memberIds.length === 0) {
      // get total member count, map those to the member IDs for each member, and populate
      // the memberIds array with each ID:
      const memberCount: bigint = await this.getCurrentMemberCount();
      const allMemberIds: bigint[] = Array.from({length: Number(memberCount)}, (_,i) => BigInt(i+1));
      memberIds.push(...allMemberIds);
    }

    // if we don't have a periodId, just default to 0. The smart contract interprets a periodId of 0
    // as being "get information wrt. the current period".
    const periodId: bigint = BigInt(params?.periodId ?? 0);
    // get information about all members as a batch
    return await Promise.all(
      memberIds.map(id => this.getMemberInfoFromId({memberId: id, periodId: periodId}))
    );
  }

  getBatchSubgroupInfo = async (params?: GetBatchSubgroupInfoParameters): Promise<SubgroupInfo[]> => {
    // extract subgroupIds from params and map to bigint, otherwise default to empty array
    const subgroupIds: bigint[] = params?.subgroupIds?.map(v => BigInt(v)) ?? [];

    // if we didn't have any subgroup IDs defined, we will simply fetch information
    // about every subgroup
    if (subgroupIds.length === 0) {
      // get the total number of subgroups, map that to every subgroup ID, and populate
      // the subgroupIds array with that information
      const subgroupCount: bigint = await this.getCurrentSubgroupCount();
      const allIds: bigint[] = Array.from({length: Number(subgroupCount)}, (_,i) => BigInt(i+1));
      subgroupIds.push(...allIds);
    }
    // get information about all subgroups in a batch
    return await Promise.all(
      subgroupIds.map(id => this.getSubgroupInfo({subgroupId: id}))
    )
  }
}
