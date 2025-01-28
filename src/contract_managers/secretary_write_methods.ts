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
        const hash = await this.write.addToCommunity([memberWalletAddress]);
        return this.handleHash(hash);
    }

    // 2. createSubGroup =>
    // Use case -- This function will be used to create a SubGroup for the TandaPay community.
    // Arguments --- none required.
    async createSubGroup() {
        await this.simulate.createSubGroup();
        const hash = await this.write.createSubGroup();
        return this.handleHash(hash);
    }

    // 3 . assignToSubGroup =>
    // Use case -- This function will be used to assign a member to a SubGroup.
    // Arguments --- The secretary needs to provide the member's wallet, the SubGroup ID, if the member is being re-orged or not using a bool variable.
    async assignMemberToSubgroup(memberWalletAddress: Hex, subgroupID: bigint, isReorging: boolean = false) {
        await this.simulate.assignToSubGroup([memberWalletAddress, subgroupID, isReorging]);
        const hash = await this.write.assignToSubGroup([memberWalletAddress, subgroupID, isReorging]);
        return this.handleHash(hash);
    }

    // 4. initiatDefaultStateAndSetCoverage =>
    // Use case -- This function will be used to set the default coverage and initiate the default state of the community.
    // Arguments --- The secretary will have to pass the default coverage amount while calling this function.
    async initiateDefaultState(totalCoverage: bigint) {
        await this.simulate.initiatDefaultStateAndSetCoverage([totalCoverage]);
        const hash = await this.write.initiatDefaultStateAndSetCoverage([totalCoverage]);
        return this.handleHash(hash);
    }

    // 5. whitelistClaim =>
    // Use case -- This function will be used to whitelist a claim submitted by the claimants.
    // Arguments --- The secretary will have to pass the claim ID while calling this function
    async whitelistClaim(claimID: bigint) {
        await this.simulate.whitelistClaim([claimID]);
        const hash = await this.write.whitelistClaim([claimID]);
        return this.handleHash(hash);
    }

    // 6. updateCoverageAmount =>
    // Use case -- This function will be used to update the current total coverage amount.
    // Arguments --- The secretary will have to pass the new coverage amount while calling this function
    async updateCoverageAmount(totalCoverage: bigint) {
        await this.simulate.updateCoverageAmount([totalCoverage]);
        const hash = await this.write.updateCoverageAmount([totalCoverage]);
        return this.handleHash(hash);
    }

    // 7. defineSecretarySuccessor =>
    // Use case -- This function will be used to define the secretary successors list.
    // Arguments --- The secretary will have to pass an array of addresses while calling this function
    async defineSecretarySuccesorList(successorListWalletAddresses: [Hex]) {
        await this.simulate.defineSecretarySuccessor([successorListWalletAddresses]);
        const hash = await this.write.defineSecretarySuccessor([successorListWalletAddresses]);
        return this.handleHash(hash);
    }

    // 8. handoverSecretary =>
    // Use case -- This function will be used to hand over the secretary to a new member who is in line with the successors.
    // Arguments --- The secretary will have to pass an address while calling this function if the secretary has a preferred successor otherwise zero address.
    async handoverSecretaryRoleToSuccessor(successorWalletAddress: Hex) {
        await this.simulate.handoverSecretary([successorWalletAddress]);
        const hash = await this.write.handoverSecretary([successorWalletAddress]);
        return this.handleHash(hash);
    }

    // 9. injectFunds =>
    // Use case -- This function will be used to inject funds by the secretary while necessary.
    // Arguments --- none required
    async injectFunds() {
        await this.simulate.injectFunds();
        const hash = await this.write.injectFunds();
        return this.handleHash(hash);
    }

    // 10. divideShortFall =>
    // Use case -- This function will be used to divide the short amount among all the members.
    // Arguments --- none required
    async divideShortfall() {
        await this.simulate.divideShortFall();
        const hash = await this.write.injectFunds();
        return this.handleHash(hash);
    }

    // 11. addAdditionalDay =>
    // Use case -- This function will be used to add a day before the end of the period.
    // Arguments --- none required
    async extendPeriodByOneDay() {
        await this.simulate.addAdditionalDay();
        const hash = await this.write.addAdditionalDay();
        return this.handleHash(hash);
    }

    // 12. manualCollapsBySecretary =>
    // Use case -- This function will be used to manually collapse the community.
    // Arguments --- none required
    async manuallyCollapseCommunity() {
        await this.simulate.manualCollapsBySecretary();
        const hash = await this.write.manualCollapsBySecretary();
        return this.handleHash(hash);
    }

    // 13. cancelManualCollapsBySecretary =>
    // Use case -- This function will be used to cancel the manual collapse which was enabled by the secretary.
    // Arguments --- none required
    async cancelManualCollapse() {
        await this.simulate.cancelManualCollapsBySecretary();
        const hash = await this.write.cancelManualCollapsBySecretary();
        return this.handleHash(hash);
    }

    // 14. AdvanceToTheNextPeriod =>
    // Use case -- This function will be used to advance the current period and initiate the next period.
    // Arguments --- none required
    async advancePeriod() {
        await this.simulate.AdvanceToTheNextPeriod();
        const hash = await this.write.AdvanceToTheNextPeriod();
        return this.handleHash(hash);
    }
}