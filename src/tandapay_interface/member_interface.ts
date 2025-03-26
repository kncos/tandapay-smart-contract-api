import { TandaPayWriteMethodReturnType } from "tandapay_manager/write/tandapay_write_methods";
import { ApiNumericType } from "types";
import { Hex } from "viem";

export type ApproveSubgroupAssignmentParameters = {
  /** whether or not to approve the subgroup assignment */
  approve?: boolean;
}

export type ApproveNewSubgroupMemberParameters = {
  /** subgroup Id of the subgroup you want to approve the assignment in */
  subgroupId: ApiNumericType,
  /** member Id of the member you want to assign */
  newMemberId: ApiNumericType,
  /** boolean value indicating whether or not to approve the member */
  approve: boolean,
}

export type PayPremiumParameters = {
  /** Use withdrawable balance to pay premium or not */
  useAvailableBalance?: boolean;
}

export type EmergencySecretaryHandoffParameters = {
  newSecretaryWalletAddress: Hex;
}

export type WithdrawClaimFundParameters = {
  forfeit?: boolean;
}

export interface TandaPayMemberWriter {
  /** Use case -- The user will join the community and transfer the 11/12th of the individual savings amount's fund.*/
  joinCommunity(): TandaPayWriteMethodReturnType<"joinCommunity">;

  /**
   * Use case -- This function will be used to approve the SubGroup assignment of the member
   * @param {ApproveSubgroupAssignmentParameters} params
   */
  approveSubgroupAssignment(params?: ApproveSubgroupAssignmentParameters): TandaPayWriteMethodReturnType<"approveSubgroupAssignment">;

  /**
   * Use case -- This function will be used to approve a new SubGroup member by the existing SubGroup member if the new member is being re-orged.
   * @param {ApproveNewSubgroupMemberParameters} params
   */
  approveNewSubgroupMember(params: ApproveNewSubgroupMemberParameters): TandaPayWriteMethodReturnType<"approveNewSubgroupMember">;

  /**
   * Use case -- Member will be able to exit from a SubGroup using this function.
   * @deprecated
   */
  //  exitSubgroup(): TandaPayWriteMethodReturnType<"exitSubGroup">;

  /** Use case -- Member will be able to exit from a SubGroup using this function. */
  leaveSubgroup(): TandaPayWriteMethodReturnType<"leaveSubgroup">;

  /** Use case -- Member will be able to defects using this function. */
  defectFromCommunity(): TandaPayWriteMethodReturnType<"defectFromCommunity">;

  /**
   * Use case -- The Valid members will be able to pay the upcoming period's premium using this function
   * @param {PayPremiumParameters} params
   */
  payPremium(params?: PayPremiumParameters): TandaPayWriteMethodReturnType<"payPremium">;

  /**
   * Use case -- The valid members who are in line of the secretary successors list and are being voted for the secretary can accept the secretary using this function.
   */
  acceptSecretaryRole(): TandaPayWriteMethodReturnType<"acceptSecretaryRole">;

  /**
   * Use case --  The valid members who are in the line of the secretary successors list can call this function and set up another valid member who is also in the line of the secretary successors list as a secretary in emergencies.
   * a successor can send this transaction and specify a new secretary to take over in the event of an
   * emergency. For it to actually work, multiple successors have to send this while specifying the same new secretary
   * @param {EmergencySecretaryHandoffParameters} params
   */
  emergencySecretaryHandoff(params: EmergencySecretaryHandoffParameters): TandaPayWriteMethodReturnType<"emergencySecretaryHandoff">;

  /**
   * Use case -- The member will be able to withdraw their available fund by calling this function.
   * allows a user to withdraw their available funds, i.e. refunds from periods in which no claim occurred
   */
  withdrawRefund(): TandaPayWriteMethodReturnType<"withdrawRefund">;

  /**
   * Use case -- The members who are eligible for the coverage will be able to submit for claim using this function.
   */
  submitClaim(): TandaPayWriteMethodReturnType<"submitClaim">;

  /**
   * Use case -- The whitelisted claimant will be able to withdraw the claim amount by calling this function
   * @param {WithdrawClaimFundParameters} params
   */
  withdrawClaimFund(params?: WithdrawClaimFundParameters): TandaPayWriteMethodReturnType<"withdrawClaimFund">;
}