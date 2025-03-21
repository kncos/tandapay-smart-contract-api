import { Hex } from "viem";
import {
  TandaPayWriteMethodReturnType,
  TandaPayWriteMethods,
} from "./tandapay_write_methods";

/** methods within the TandaPay smart contract that only the secretary may call */
export class SecretaryWriteMethods extends TandaPayWriteMethods {
  /**
   * Add a member to the TandaPay community (as the secretary)
   * @param memberWalletAddress Wallet address of the member to add to the community
   * @returns A transaction receipt after the transaction has been included on a block, or the
   * transaction hash, depending on what `waitForTransactionReceipts` is set to.
   */
  async addMemberToCommunity(
    memberWalletAddress: Hex,
  ): TandaPayWriteMethodReturnType<"addMemberToCommunity"> {
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
   * @param memberWalletAddress wallet address of the member you want to assign to a subgroup
   * @param subgroupID which subgroup to assign the member to
   * @param isReorging whether or not the member is PAID-INVALID and now reorging to a new subgroup
   * @returns A transaction receipt after the transaction has been included on a block, or the
   * transaction hash, depending on what `waitForTransactionReceipts` is set to.
   */
  async assignMemberToSubgroup(
    memberWalletAddress: Hex,
    subgroupID: bigint,
    isReorging: boolean = false,
  ): TandaPayWriteMethodReturnType<"assignMemberToSubgroup"> {
    const simulate = async () =>
      await this.simulate.assignMemberToSubgroup([
        memberWalletAddress,
        subgroupID,
        isReorging,
      ]);
    const write = async () =>
      await this.write.assignMemberToSubgroup([
        memberWalletAddress,
        subgroupID,
        isReorging,
      ]);
    return this.performOperation({ simulate, write });
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
  ): TandaPayWriteMethodReturnType<"initiateDefaultState"> {
    const simulate = async () =>
      await this.simulate.initiateDefaultState([totalCoverage]);
    const write = async () =>
      await this.write.initiateDefaultState([totalCoverage]);
    return this.performOperation({ simulate, write });
  }

  /**
   * This function is used to whitelist a claim submitted by the claimants.
   * @param claimID unique identifier for the claim that the secretary wants to whitelist
   * @returns A transaction receipt after the transaction has been included on a block, or the
   * transaction hash, depending on what `waitForTransactionReceipts` is set to.
   */
  async whitelistClaim(
    claimID: bigint,
  ): TandaPayWriteMethodReturnType<"whitelistClaim"> {
    const simulate = async () => await this.simulate.whitelistClaim([claimID]);
    const write = async () => await this.write.whitelistClaim([claimID]);
    return this.performOperation({ simulate, write });
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
  ): TandaPayWriteMethodReturnType<"updateCoverageAmount"> {
    const simulate = async () =>
      await this.simulate.updateCoverageAmount([totalCoverage]);
    const write = async () =>
      await this.write.updateCoverageAmount([totalCoverage]);
    return this.performOperation({ simulate, write });
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
  ): TandaPayWriteMethodReturnType<"defineSecretarySuccessorList"> {
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
   * @param successorWalletAddress Wallet address of the individual the secretary would like to give their role to
   * @returns A transaction receipt after the transaction has been included on a block, or the
   * transaction hash, depending on what `waitForTransactionReceipts` is set to.
   */
  async handoverSecretaryRoleToSuccessor(
    successorWalletAddress: Hex,
  ): TandaPayWriteMethodReturnType<"handoverSecretaryRoleToSuccessor"> {
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
   * The secretary may call this method to manually collapse the community. A collapsed community is
   * dead, it only enters this state if the community fails to meet its coverage requirement by the end
   * of a period, or if the secretary does it manually. There is a 4 day delay upon calling this transaction
   * in which the secretary may cancel it
   * @returns A transaction receipt after the transaction has been included on a block, or the
   * transaction hash, depending on what `waitForTransactionReceipts` is set to.
   */
  //  async manuallyCollapseCommunity(): TandaPayWriteMethodReturnType<"manualCollapsBySecretary"> {
  //    const simulate = async () => await this.simulate.manualCollapsBySecretary();
  //    const write = async () => await this.write.manualCollapsBySecretary();
  //    return this.performOperation({ simulate, write });
  //  }

  /**
   * If the secretary was going to manually collapse the community, but decided to cancel it within the
   * 4 day window, they may cancel it using this transaction and the community will continue operating
   * like normal. This transaction will not work once the community *is* in a collapsed state.
   * @returns A transaction receipt after the transaction has been included on a block, or the
   * transaction hash, depending on what `waitForTransactionReceipts` is set to.
   */
  //  async cancelManualCollapse(): TandaPayWriteMethodReturnType<"cancelManualCollapsBySecretary"> {
  //    const simulate = async () =>
  //      await this.simulate.cancelManualCollapsBySecretary();
  //    const write = async () => await this.write.cancelManualCollapsBySecretary();
  //    return this.performOperation({ simulate, write });
  //  }

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
