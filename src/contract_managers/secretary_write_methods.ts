import { Hex } from "viem";
import { TandaPayWriteMethods } from "./tandapay_write_methods";
import { WriteableClient } from "./types";

// methods within the TandaPay smart contract that only the secretary may call
export default class SecretaryWriteMethods<TClient extends WriteableClient> extends TandaPayWriteMethods<TClient> {
    // 1. addToCommunity =>
    // Use case -- This function will be used to add a new member to the TandaPay community.
    // Arguments --- The secretary needs to provide the member's wallet address while adding a member to the community.
    async addMemberToCommunity(memberWalletAddress: Hex) {
        await this.simulate.addToCommunity([memberWalletAddress]);
        await this.write.addToCommunity([memberWalletAddress]);
    }

    // 2. createSubGroup =>
    // Use case -- This function will be used to create a SubGroup for the TandaPay community.
    // Arguments --- none required.
    async createSubGroup() {
        await this.simulate.createSubGroup();
        await this.write.createSubGroup();
    }

    // 3 . assignToSubGroup =>
    // Use case -- This function will be used to assign a member to a SubGroup.
    // Arguments --- The secretary needs to provide the member's wallet, the SubGroup ID, if the member is being re-orged or not using a bool variable.
    async assignMemberToSubgroup(memberWalletAddress: Hex, subgroupID: bigint, isReorging: boolean = false) {
        await this.simulate.assignToSubGroup([memberWalletAddress, subgroupID, isReorging]);
        await this.write.assignToSubGroup([memberWalletAddress, subgroupID, isReorging]);
    }

    // 4. initiatDefaultStateAndSetCoverage =>
    // Use case -- This function will be used to set the default coverage and initiate the default state of the community.
    // Arguments --- The secretary will have to pass the default coverage amount while calling this function.
    async initiateDefaultState(totalCoverage: bigint) {
        await this.simulate.initiatDefaultStateAndSetCoverage([totalCoverage]);
        await this.write.initiatDefaultStateAndSetCoverage([totalCoverage]);
    }

    // 5. whitelistClaim =>
    // Use case -- This function will be used to whitelist a claim submitted by the claimants.
    // Arguments --- The secretary will have to pass the claim ID while calling this function
    async whitelistClaim(claimID: bigint) {
        await this.simulate.whitelistClaim([claimID]);
        await this.write.whitelistClaim([claimID]);
    }

    // 6. updateCoverageAmount =>
    // Use case -- This function will be used to update the current total coverage amount.
    // Arguments --- The secretary will have to pass the new coverage amount while calling this function
    async updateCoverageAmount(totalCoverage: bigint) {
        await this.simulate.updateCoverageAmount([totalCoverage]);
        await this.write.updateCoverageAmount([totalCoverage]);
    }

    // 7. defineSecretarySuccessor =>
    // Use case -- This function will be used to define the secretary successors list.
    // Arguments --- The secretary will have to pass an array of addresses while calling this function
    async defineSecretarySuccesorList(successorListWalletAddresses: [Hex]) {
        await this.simulate.defineSecretarySuccessor([successorListWalletAddresses]);
        await this.write.defineSecretarySuccessor([successorListWalletAddresses]);
    }

    // 8. handoverSecretary =>
    // Use case -- This function will be used to hand over the secretary to a new member who is in line with the successors.
    // Arguments --- The secretary will have to pass an address while calling this function if the secretary has a preferred successor otherwise zero address.
    async handoverSecretaryRoleToSuccessor(successorWalletAddress: Hex) {
        await this.simulate.handoverSecretary([successorWalletAddress]);
        await this.write.handoverSecretary([successorWalletAddress]);
    }

    // 9. injectFunds =>
    // Use case -- This function will be used to inject funds by the secretary while necessary.
    // Arguments --- none required
    async injectFunds() {
        await this.simulate.injectFunds();
        await this.write.injectFunds();
    }

    // 10. divideShortFall =>
    // Use case -- This function will be used to divide the short amount among all the members.
    // Arguments --- none required
    async divideShortfall() {
        await this.simulate.divideShortFall();
        await this.write.injectFunds();
    }

    // 11. addAdditionalDay =>
    // Use case -- This function will be used to add a day before the end of the period.
    // Arguments --- none required
    async extendPeriodByOneDay() {
        await this.simulate.addAdditionalDay();
        await this.write.addAdditionalDay();
    }

    // 12. manualCollapsBySecretary =>
    // Use case -- This function will be used to manually collapse the community.
    // Arguments --- none required
    async manuallyCollapseCommunity() {
        await this.simulate.manualCollapsBySecretary();
        await this.write.manualCollapsBySecretary();
    }

    // 13. cancelManualCollapsBySecretary =>
    // Use case -- This function will be used to cancel the manual collapse which was enabled by the secretary.
    // Arguments --- none required
    async cancelManualCollapse() {
        await this.simulate.cancelManualCollapsBySecretary();
        await this.write.cancelManualCollapsBySecretary();
    }

    // 14. AdvanceToTheNextPeriod =>
    // Use case -- This function will be used to advance the current period and initiate the next period.
    // Arguments --- none required
    async advancePeriod() {
        await this.simulate.AdvanceToTheNextPeriod();
        await this.write.AdvanceToTheNextPeriod();
    }
}