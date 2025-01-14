import { Hex } from "viem";
import { TandaPayWriteMethods, WriteableClient } from "./TandaPayWriteMethods";

export default class MemberWriteMethods<TClient extends WriteableClient> extends TandaPayWriteMethods<TClient> {
    // 1.  joinToCommunity  =>
    // Use case -- The user will join the community and transfer the 11/12th of the individual savings amount's fund.
    // Arguments --- none required
    async joinCommunity() {
        await this.simulate.joinToCommunity();
        await this.write.joinToCommunity();
    }

    // 2. approveSubGroupAssignment  =>
    // Use case -- This function will be used to approve the SubGroup assignment of the member 
    // Arguments --- members will have to pass a boolean value of if they want to join or not.
    async approveSubgroupAssignment(approve: boolean = true) {
        await this.simulate.approveSubGroupAssignment([approve]);
        await this.write.approveSubGroupAssignment([approve])
    }

    // 3. approveNewSubgroupMember  =>
    // Use case -- This function will be used to approve a new SubGroup member by the existing SubGroup member if the new member is being re-orged.
    // Arguments --- The member will have to pass the SubGroup ID, the new member's ID, and a boolean value of whether the new member is accepted or not.
    async approveNewSubgroupMember(subgroupId: bigint, newMemberId: bigint, approve: boolean = true) {
        await this.simulate.approveNewSubgroupMember([subgroupId, newMemberId, approve]);
        await this.write.approveNewSubgroupMember([subgroupId, newMemberId, approve]);
    }

    // 4. exitSubGroup  =>
    // Use case -- Member will be able to exit from a SubGroup using this function.
    // Arguments --- none required
    async exitSubgroup() {
        await this.simulate.exitSubGroup();
        await this.write.exitSubGroup();
    }

    // 5. defects  =>
    // Use case -- Member will be able to defects using this function.
    // Arguments --- none required
    async defectFromCommunity() {
        await this.simulate.defects();
        await this.write.defects();
    }

    // 6. payPremium  =>
    // Use case -- The Valid members will be able to pay the upcoming period's premium using this function
    // Arguments --- none required
    async payPremium(useAvailableBalance: boolean = false) {
        await this.simulate.payPremium([useAvailableBalance]);
        await this.write.payPremium([useAvailableBalance]);
    }

    // 7. secretaryAcceptance  =>
    // Use case -- The valid members who are in line of the secretary successors list and are being voted for the secretary can accept the secretary using this function.
    // Arguments --- none required
    async acceptSecretaryRole() {
        await this.simulate.secretaryAcceptance();
        await this.write.secretaryAcceptance();
    }

    // 8. emergencyHandOverSecretary  =>
    // Use case --  The valid members who are in the line of the secretary successors list can call this function and set up another valid member who is also in the line of the secretary successors list as a secretary in emergencies.
    // Arguments --- The member will have to pass the preferred successors wallet address while calling this function.
    // a successor can send this transaction and specify a new secretary to take over in the event of an
    // emergency. For it to actually work, multiple successors have to send this while specifying the same new secretary
    async emergencySecretaryHandoff(newSecretaryWalletAddress: Hex) {
        await this.simulate.emergencyHandOverSecretary([newSecretaryWalletAddress]);
        await this.write.emergencyHandOverSecretary([newSecretaryWalletAddress]);
    }

    // 9. withdrawRefund=>
    // Use case -- The member will be able to withdraw their available fund by calling this function.
    // Arguments --- none required
    // allows a user to withdraw their available funds, i.e. refunds from periods in which no claim occurred
    async withdrawRefund() {
        await this.simulate.withdrawRefund();
        await this.write.withdrawRefund();
    }

    // 10. submitClaim =>
    // Use case -- The members who are eligible for the coverage will be able to submit for claim using this function.
    // Arguments --- none required
    async submitClaim() {
        await this.simulate.submitClaim();
        await this.write.submitClaim();
    }

    // 11. withdrawClaimFund  =>
    // Use case -- The whitelisted claimant will be able to withdraw the claim amount by calling this function
    // Arguments --- none required
    async withdrawClaimFund(forfeit: boolean = false) {
        await this.simulate.withdrawClaimFund([forfeit]);
        await this.write.withdrawClaimFund([forfeit]);
    }
}
