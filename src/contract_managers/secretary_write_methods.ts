import { Hex } from "viem";
import {
  TandaPayWriteMethodReturnType,
  TandaPayWriteMethods,
} from "./tandapay_write_methods";

// TODO: create some hook for approving spending automatically


/** methods within the TandaPay smart contract that only the secretary may call */
export default class SecretaryWriteMethods extends TandaPayWriteMethods {
  /**
   * Add a member to the TandaPay community (as the secretary)
   * @param memberWalletAddress Wallet address of the member to add to the community
   * @returns A transaction receipt after the transaction has been included on a block, or the
   * transaction hash, depending on what `waitForTransactionReceipts` is set to.
   */
  async addMemberToCommunity(
    memberWalletAddress: Hex,
  ): TandaPayWriteMethodReturnType<'addToCommunity'> {
    const simulate = async () => this.simulate.addToCommunity([memberWalletAddress]);
    const write = async () => this.write.addToCommunity([memberWalletAddress]);
    return this.performOperation({simulate, write});
  }

  /**
   * This function is used to create a new subgroup for the TandaPay community.
   * @returns A transaction receipt after the transaction has been included on a block, or the
   * transaction hash, depending on what `waitForTransactionReceipts` is set to.
   */
  async createSubgroup(): TandaPayWriteMethodReturnType<'createSubGroup'> {
    const simulate = async () => await this.simulate.createSubGroup();
    const write = async () => this.write.createSubGroup();
    return this.performOperation({simulate, write});
  }

  // TODO
  /**
   * This function is used to assign a member to a SubGroup.
   * @param memberWalletAddress wallet address of the member you want to assign to a subgroup
   * @param subgroupID which subgroup to assign the member to
   * @param isReorging whether or not the member is PAID-INVALID and now reorging to a new subgroup
   * @todo omit isReorging and figure this automatically, maybe in L2?
   * @returns A transaction receipt after the transaction has been included on a block, or the
   * transaction hash, depending on what `waitForTransactionReceipts` is set to.
   */
  async assignMemberToSubgroup(
    memberWalletAddress: Hex,
    subgroupID: bigint,
    isReorging: boolean = false,
  ): TandaPayWriteMethodReturnType<'assignToSubGroup'> {
    const simulate = async () => await this.simulate.assignToSubGroup([
      memberWalletAddress,
      subgroupID,
      isReorging,
    ]);
    const write = async () => await this.write.assignToSubGroup([
      memberWalletAddress,
      subgroupID,
      isReorging,
    ]);
    return this.performOperation({simulate, write});
  }

  /**
   * This function is used to set the default coverage and initiate the default state of the community.
   * @param totalCoverage Total coverage for the TandaPay community. Basically, what should the community's
   * combined contribution to the community escrow be each month? Base monthly premiums are calculated
   * as a function of `(total coverage) / (num members)`.
   * @returns A transaction receipt after the transaction has been included on a block, or the
   * transaction hash, depending on what `waitForTransactionReceipts` is set to.
   */
  async initiateDefaultState(
    totalCoverage: bigint,
  ): TandaPayWriteMethodReturnType<'initiatDefaultStateAndSetCoverage'> {
    const simulate = async () => await this.simulate.initiatDefaultStateAndSetCoverage([totalCoverage]);
    const write = async () => await this.write.initiatDefaultStateAndSetCoverage([
      totalCoverage,
    ]);
    return this.performOperation({simulate, write});
  }

  /**
   * This function is used to whitelist a claim submitted by the claimants.
   * @param claimID unique identifier for the claim that the secretary wants to whitelist
   * @returns A transaction receipt after the transaction has been included on a block, or the
   * transaction hash, depending on what `waitForTransactionReceipts` is set to.
   */
  async whitelistClaim(claimID: bigint): TandaPayWriteMethodReturnType<'whitelistClaim'> {
    const simulate = async () => await this.simulate.whitelistClaim([claimID]);
    const write = async () => await this.write.whitelistClaim([claimID]);
    return this.performOperation({simulate, write});
  }

  /**
   * This function is used to update the current total coverage amount. This can only be done if the
   * community is in the initialization or default state.
   * @param totalCoverage New total coverage amount the community will use.
   * @returns A transaction receipt after the transaction has been included on a block, or the
   * transaction hash, depending on what `waitForTransactionReceipts` is set to.
   */
  async updateCoverageAmount(
    totalCoverage: bigint,
  ): TandaPayWriteMethodReturnType<'updateCoverageAmount'> {
    const simulate = async () => await this.simulate.updateCoverageAmount([totalCoverage]);
    const write = async () => await this.write.updateCoverageAmount([totalCoverage]);
    return this.performOperation({simulate, write});
  }

  // TODO:
  /**
   * Defines a list of successor candidates for the Secretary role. If `12 <= (community size) <= 35`,
   * then at least 2 successors must be defined. If `35 < (community size)`, at least 6 successors must
   * be defined.
   * @param successorListWalletAddresses An array of wallet addresses for individuals who will be secretary successors
   * @todo The smart contract does not require that the secretary define any successors before exiting the
   * initialization state. Perhaps on L2 we include this as business logic?
   * @returns A transaction receipt after the transaction has been included on a block, or the
   * transaction hash, depending on what `waitForTransactionReceipts` is set to.
   */
  async defineSecretarySuccesorList(
    successorListWalletAddresses: [Hex],
  ): TandaPayWriteMethodReturnType<'defineSecretarySuccessor'> {
    const simulate = async () => await this.simulate.defineSecretarySuccessor([
      successorListWalletAddresses,
    ]);
    const write = async () => await this.write.defineSecretarySuccessor([
      successorListWalletAddresses,
    ]);
    return this.performOperation({simulate, write});
  }

  /**
   * Allows the secretary to give their position to one of their successors
   * @param successorWalletAddress Wallet address of the individual the secretary would like to give their role to
   * @returns A transaction receipt after the transaction has been included on a block, or the
   * transaction hash, depending on what `waitForTransactionReceipts` is set to.
   */
  async handoverSecretaryRoleToSuccessor(
    successorWalletAddress: Hex,
  ): TandaPayWriteMethodReturnType<'handoverSecretary'> {
    const simulate = async () => await this.simulate.handoverSecretary([successorWalletAddress]);
    const write = async () => await this.write.handoverSecretary([successorWalletAddress]);
    return this.performOperation({simulate, write});
  }

  // TODO
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
  async injectFunds(): TandaPayWriteMethodReturnType<'injectFunds'> {
    const simulate = async () => await this.simulate.injectFunds();
    const write = async () => await this.write.injectFunds();
    return this.performOperation({simulate, write});
  }

  /**
   * If there is a shortfall in the coverage requirement, but every member of the community has enough
   * in their savings accounts that they can be equally debited to make up for the shortfall, then the
   * secretary may call this transaction to make that happen
   * @returns A transaction receipt after the transaction has been included on a block, or the
   * transaction hash, depending on what `waitForTransactionReceipts` is set to.
   */
  async divideShortfall(): TandaPayWriteMethodReturnType<'divideShortFall'> {
    const simulate = async () => await this.simulate.divideShortFall();
    const write = async () => await this.write.injectFunds();
    return this.performOperation({simulate, write});
  }

  /**
   * Introduces an additional day before the period will end. This gives members more time to pay
   * their premiums and adds a delay before the secretary may advance the period
   * @returns A transaction receipt after the transaction has been included on a block, or the
   * transaction hash, depending on what `waitForTransactionReceipts` is set to.
   */
  async extendPeriodByOneDay(): TandaPayWriteMethodReturnType<'addAdditionalDay'> {
    const simulate = async () => await this.simulate.addAdditionalDay();
    const write = async () => await this.write.addAdditionalDay();
    return this.performOperation({simulate, write});
  }

  /**
   * The secretary may call this method to manually collapse the community. A collapsed community is
   * dead, it only enters this state if the community fails to meet its coverage requirement by the end
   * of a period, or if the secretary does it manually. There is a 4 day delay upon calling this transaction
   * in which the secretary may cancel it
   * @returns A transaction receipt after the transaction has been included on a block, or the
   * transaction hash, depending on what `waitForTransactionReceipts` is set to.
   */
  async manuallyCollapseCommunity(): TandaPayWriteMethodReturnType<'manualCollapsBySecretary'> {
    const simulate = async () => await this.simulate.manualCollapsBySecretary();
    const write = async () => await this.write.manualCollapsBySecretary();
    return this.performOperation({simulate, write});
  }

  /**
   * If the secretary was going to manually collapse the community, but decided to cancel it within the
   * 4 day window, they may cancel it using this transaction and the community will continue operating
   * like normal. This transaction will not work once the community *is* in a collapsed state.
   * @returns A transaction receipt after the transaction has been included on a block, or the
   * transaction hash, depending on what `waitForTransactionReceipts` is set to.
   */
  async cancelManualCollapse(): TandaPayWriteMethodReturnType<'cancelManualCollapsBySecretary'> {
    const simulate = async () => await this.simulate.cancelManualCollapsBySecretary();
    const write = async () => await this.write.cancelManualCollapsBySecretary();
    return this.performOperation({simulate, write});
  }

  /**
   * This method is used to advance to the next period. Must be called after the previous period has
   * ended.
   * @returns A transaction receipt after the transaction has been included on a block, or the
   * transaction hash, depending on what `waitForTransactionReceipts` is set to.
   */
  async advancePeriod(): TandaPayWriteMethodReturnType<'AdvanceToTheNextPeriod'> {
    const simulate = async () => await this.simulate.AdvanceToTheNextPeriod();
    const write = async () => await this.write.AdvanceToTheNextPeriod();
    return this.performOperation({simulate, write});
  }
}
