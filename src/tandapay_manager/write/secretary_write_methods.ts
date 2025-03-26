import { AddMemberToCommunityParameters, AssignMemberToSubgroupParameters, DefineSecretarySuccesorListParameters, HandoverSecretaryRoleToSuccessorParameters, InitiateDefaultStateParameters, TandaPaySecretaryWriter, UpdateCoverageAmountParameters, WhitelistClaimParameters } from "tandapay_interface/secretary_interface";
import { TandaPayWriteMethodReturnType, TandaPayWriteMethods } from "./tandapay_write_methods";

/** methods within the TandaPay smart contract that only the secretary may call */
export class SecretaryWriteMethods extends TandaPayWriteMethods implements TandaPaySecretaryWriter {
  /**
   * Add a member to the TandaPay community (as the secretary)
   * @param {AddMemberToCommunityParameters} params
   * @returns A transaction receipt after the transaction has been included on a block, or the
   * transaction hash, depending on what `waitForTransactionReceipts` is set to.
   */
  async addMemberToCommunity(params: AddMemberToCommunityParameters): TandaPayWriteMethodReturnType<"addMemberToCommunity"> {
    const { memberWalletAddress } = params;
    const simulate = async () =>
      this.simulate.addMemberToCommunity([memberWalletAddress]);
    const write = async () =>
      this.write.addMemberToCommunity([memberWalletAddress]);
    return this.performOperation({ simulate, write });
  }

  /**
   * This function is used to create a new subgroup for the TandaPay community.
   * @returns A transaction receipt after the transaction has been included on a block, or the
   * transaction hash, depending on what `waitForTransactionReceipts` is set to.
   */
  async createSubgroup(): TandaPayWriteMethodReturnType<"createSubgroup"> {
    const simulate = async () => await this.simulate.createSubgroup();
    const write = async () => this.write.createSubgroup();
    return this.performOperation({ simulate, write });
  }

  /**
   * This function is used to assign a member to a SubGroup.
   * @param {AssignMemberToSubgroupParameters} params
   * @returns A transaction receipt after the transaction has been included on a block, or the
   * transaction hash, depending on what `waitForTransactionReceipts` is set to.
   */
  async assignMemberToSubgroup(params: AssignMemberToSubgroupParameters): TandaPayWriteMethodReturnType<"assignMemberToSubgroup"> {
    const { memberWalletAddress, subgroupID, isReorging = false } = params;
    const simulate = async () =>
      await this.simulate.assignMemberToSubgroup([
        memberWalletAddress,
        BigInt(subgroupID),
        isReorging,
      ]);
    const write = async () =>
      await this.write.assignMemberToSubgroup([
        memberWalletAddress,
        BigInt(subgroupID),
        isReorging,
      ]);
    return this.performOperation({ simulate, write });
  }

  /**
   * This function is used to set the default coverage and initiate the default state of the community.
   * @param {InitiateDefaultStateParameters} params
   * @returns A transaction receipt after the transaction has been included on a block, or the
   * transaction hash, depending on what `waitForTransactionReceipts` is set to.
   */
  async initiateDefaultState(params: InitiateDefaultStateParameters): TandaPayWriteMethodReturnType<"initiateDefaultState"> {
    const { totalCoverage } = params;
    const simulate = async () =>
      await this.simulate.initiateDefaultState([totalCoverage]);
    const write = async () =>
      await this.write.initiateDefaultState([totalCoverage]);
    return this.performOperation({ simulate, write });
  }

  /**
   * This function is used to whitelist a claim submitted by the claimants.
   * @param {WhitelistClaimParameters} params
   * @returns A transaction receipt after the transaction has been included on a block, or the
   * transaction hash, depending on what `waitForTransactionReceipts` is set to.
   */
  async whitelistClaim(params: WhitelistClaimParameters): TandaPayWriteMethodReturnType<"whitelistClaim"> {
    const { claimId } = params;
    const simulate = async () =>
      await this.simulate.whitelistClaim([BigInt(claimId)]);
    const write = async () =>
      await this.write.whitelistClaim([BigInt(claimId)]);
    return this.performOperation({ simulate, write });
  }

  /**
   * This function is used to update the current total coverage amount. This can only be done if the
   * community is in the initialization or default state.
   * @param {UpdateCoverageAmountParameters} params
   * @returns A transaction receipt after the transaction has been included on a block, or the
   * transaction hash, depending on what `waitForTransactionReceipts` is set to.
   */
  async updateCoverageAmount(params: UpdateCoverageAmountParameters): TandaPayWriteMethodReturnType<"updateCoverageAmount"> {
    const { totalCoverage } = params;
    const simulate = async () =>
      await this.simulate.updateCoverageAmount([totalCoverage]);
    const write = async () =>
      await this.write.updateCoverageAmount([totalCoverage]);
    return this.performOperation({ simulate, write });
  }

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
  async defineSecretarySuccesorList(params: DefineSecretarySuccesorListParameters): TandaPayWriteMethodReturnType<"defineSecretarySuccessorList"> {
    const { successorListWalletAddresses } = params;
    const simulate = async () =>
      await this.simulate.defineSecretarySuccessorList([
        successorListWalletAddresses,
      ]);
    const write = async () =>
      await this.write.defineSecretarySuccessorList([
        successorListWalletAddresses,
      ]);
    return this.performOperation({ simulate, write });
  }

  /**
   * Allows the secretary to give their position to one of their successors
   * @param {HandoverSecretaryRoleToSuccessorParameters} params
   * @returns A transaction receipt after the transaction has been included on a block, or the
   * transaction hash, depending on what `waitForTransactionReceipts` is set to.
   */
  async handoverSecretaryRoleToSuccessor(params: HandoverSecretaryRoleToSuccessorParameters): TandaPayWriteMethodReturnType<"handoverSecretaryRoleToSuccessor"> {
    const { successorWalletAddress } = params;
    const simulate = async () =>
      await this.simulate.handoverSecretaryRoleToSuccessor([
        successorWalletAddress,
      ]);
    const write = async () =>
      await this.write.handoverSecretaryRoleToSuccessor([
        successorWalletAddress,
      ]);
    return this.performOperation({ simulate, write });
  }

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
  async injectFunds(): TandaPayWriteMethodReturnType<"injectFunds"> {
    const simulate = async () => await this.simulate.injectFunds();
    const write = async () => await this.write.injectFunds();
    return this.performOperation({ simulate, write });
  }

  /**
   * If there is a shortfall in the coverage requirement, but every member of the community has enough
   * in their savings accounts that they can be equally debited to make up for the shortfall, then the
   * secretary may call this transaction to make that happen
   * @returns A transaction receipt after the transaction has been included on a block, or the
   * transaction hash, depending on what `waitForTransactionReceipts` is set to.
   */
  async divideShortfall(): TandaPayWriteMethodReturnType<"divideShortfall"> {
    const simulate = async () => await this.simulate.divideShortfall();
    const write = async () => await this.write.divideShortfall();
    return this.performOperation({ simulate, write });
  }

  /**
   * Introduces an additional day before the period will end. This gives members more time to pay
   * their premiums and adds a delay before the secretary may advance the period
   * @returns A transaction receipt after the transaction has been included on a block, or the
   * transaction hash, depending on what `waitForTransactionReceipts` is set to.
   */
  async extendPeriodByOneDay(): TandaPayWriteMethodReturnType<"extendPeriodByOneDay"> {
    const simulate = async () => await this.simulate.extendPeriodByOneDay();
    const write = async () => await this.write.extendPeriodByOneDay();
    return this.performOperation({ simulate, write });
  }

  /**
   * This method is used to advance to the next period. Must be called after the previous period has
   * ended.
   * @returns A transaction receipt after the transaction has been included on a block, or the
   * transaction hash, depending on what `waitForTransactionReceipts` is set to.
   */
  async advancePeriod(): TandaPayWriteMethodReturnType<"advancePeriod"> {
    const simulate = async () => await this.simulate.advancePeriod();
    const write = async () => await this.write.advancePeriod();
    return this.performOperation({ simulate, write });
  }
}
