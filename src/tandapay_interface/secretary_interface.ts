import { Hex } from "viem";
import { ApiNumericType } from "types";
import { TandaPayWriteMethodReturnType } from "tandapay_manager/write/tandapay_write_methods";

export type AddMemberToCommunityParameters = {
  /** Wallet address of the member to add to the community */
  memberWalletAddress: Hex;
}

export type AssignMemberToSubgroupParameters = {
  /** wallet address of the member you want to assign to a subgroup */
  memberWalletAddress: Hex;
  /** which subgroup to assign the member to */
  subgroupID: ApiNumericType;
  /** whether or not the member is PAID-INVALID and now reorging to a new subgroup */
  isReorging?: boolean;
}

export type InitiateDefaultStateParameters = {
  /** Total coverage for the TandaPay community. Basically, what should the community's combined contribution to the community escrow be each month? Base monthly premiums are calculated as a function of `(total coverage) / (num members)`. */
  totalCoverage: bigint;
}

export type WhitelistClaimParameters = {
  /** unique identifier for the claim that the secretary wants to whitelist */
  claimId: ApiNumericType;
}

export type UpdateCoverageAmountParameters = {
  /** New total coverage amount the community will use. */
  totalCoverage: bigint;
}

export type DefineSecretarySuccesorListParameters = {
    /**
   *  An array of wallet addresses for individuals who will be secretary successors
   *  @todo The smart contract does not require that the secretary define any successors before exiting the
   *  initialization state. Perhaps on L2 we include this as business logic?
   */
  successorListWalletAddresses: [Hex];
}

export type HandoverSecretaryRoleToSuccessorParameters = {
   /** Wallet address of the individual the secretary would like to give their role to */
  successorWalletAddress: Hex;
}

export interface TandaPaySecretaryWriter {
  /**
   * Add a member to the TandaPay community (as the secretary)
   * @param {AddMemberToCommunityParameters} params
   * @returns A transaction receipt after the transaction has been included on a block, or the
   * transaction hash, depending on what `waitForTransactionReceipts` is set to.
   */
  addMemberToCommunity(params: AddMemberToCommunityParameters): TandaPayWriteMethodReturnType<"addMemberToCommunity">;

  /**
   * This function is used to create a new subgroup for the TandaPay community.
   * @returns A transaction receipt after the transaction has been included on a block, or the
   * transaction hash, depending on what `waitForTransactionReceipts` is set to.
   */
  createSubgroup(): TandaPayWriteMethodReturnType<"createSubgroup">;

  /**
   * This function is used to assign a member to a SubGroup.
   * @param {AssignMemberToSubgroupParameters} params
   * @returns A transaction receipt after the transaction has been included on a block, or the
   * transaction hash, depending on what `waitForTransactionReceipts` is set to.
   */
  assignMemberToSubgroup(params: AssignMemberToSubgroupParameters): TandaPayWriteMethodReturnType<"assignMemberToSubgroup">;

  /**
   * This function is used to set the default coverage and initiate the default state of the community.
   * @param {InitiateDefaultStateParameters} params
   * @returns A transaction receipt after the transaction has been included on a block, or the
   * transaction hash, depending on what `waitForTransactionReceipts` is set to.
   */
  initiateDefaultState(params: InitiateDefaultStateParameters): TandaPayWriteMethodReturnType<"initiateDefaultState">;

  /**
   * This function is used to whitelist a claim submitted by the claimants.
   * @param {WhitelistClaimParameters} params
   * @returns A transaction receipt after the transaction has been included on a block, or the
   * transaction hash, depending on what `waitForTransactionReceipts` is set to.
   */
  whitelistClaim(params: WhitelistClaimParameters): TandaPayWriteMethodReturnType<"whitelistClaim">;

  /**
   * This function is used to update the current total coverage amount. This can only be done if the
   * community is in the initialization or default state.
   * @param {UpdateCoverageAmountParameters} params
   * @returns A transaction receipt after the transaction has been included on a block, or the
   * transaction hash, depending on what `waitForTransactionReceipts` is set to.
   */
  updateCoverageAmount(params: UpdateCoverageAmountParameters): TandaPayWriteMethodReturnType<"updateCoverageAmount">;

  /**
   * Defines a list of successor candidates for the Secretary role. If `12 <= (community size) <= 35`,
   * then at least 2 successors must be defined. If `35 < (community size)`, at least 6 successors must
   * be defined.
   * @param {DefineSecretarySuccesorListParameters} params
   * @todo The smart contract does not require that the secretary define any successors before exiting the
   * initialization state. Perhaps on L2 we include this as business logic?
   * @returns A transaction receipt after the transaction has been included on a block, or the
   * transaction hash, depending on what `waitForTransactionReceipts` is set to.
   */
  defineSecretarySuccesorList(params: DefineSecretarySuccesorListParameters): TandaPayWriteMethodReturnType<"defineSecretarySuccessorList">;

  /**
   * Allows the secretary to give their position to one of their successors
   * @param {HandoverSecretaryRoleToSuccessorParameters} params
   * @returns A transaction receipt after the transaction has been included on a block, or the
   * transaction hash, depending on what `waitForTransactionReceipts` is set to.
   */
  handoverSecretaryRoleToSuccessor(params: HandoverSecretaryRoleToSuccessorParameters): TandaPayWriteMethodReturnType<"handoverSecretaryRoleToSuccessor">;

  /**
   * This function is used to inject funds into the community by the secretary. Basically, this is a way
   * that the secretary can save their TandaPay community which may be on the verge of collapse, by
   * putting their own funds into the pot (i.e., the community escrow) to ensure that the coverage requirement
   * (i.e., community escrow amount = total coverage) is met.
   * @todo This transaction requires spending. Perhaps we create some hook that automatically authorizes
   * this spending, given an ERC-20 token wrapper?
   * @returns A transaction receipt after the transaction has been included on a block, or the
   * transaction hash, depending on what `waitForTransactionReceipts` is set to.
   */
  injectFunds(): TandaPayWriteMethodReturnType<"injectFunds">;

  /**
   * If there is a shortfall in the coverage requirement, but every member of the community has enough
   * in their savings accounts that they can be equally debited to make up for the shortfall, then the
   * secretary may call this transaction to make that happen
   * @returns A transaction receipt after the transaction has been included on a block, or the
   * transaction hash, depending on what `waitForTransactionReceipts` is set to.
   */
  divideShortfall(): TandaPayWriteMethodReturnType<"divideShortfall">;

  /**
   * Introduces an additional day before the period will end. This gives members more time to pay
   * their premiums and adds a delay before the secretary may advance the period
   * @returns A transaction receipt after the transaction has been included on a block, or the
   * transaction hash, depending on what `waitForTransactionReceipts` is set to.
   */
  extendPeriodByOneDay(): TandaPayWriteMethodReturnType<"extendPeriodByOneDay">;

  /**
   * This method is used to advance to the next period. Must be called after the previous period has
   * ended.
   * @returns A transaction receipt after the transaction has been included on a block, or the
   * transaction hash, depending on what `waitForTransactionReceipts` is set to.
   */
  advancePeriod(): TandaPayWriteMethodReturnType<"advancePeriod">;
}
