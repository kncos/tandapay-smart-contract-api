import { Hex } from "viem";
import { TandaPayWriteMethods, WriteableClient } from "./TandaPayWriteMethods";

export default class MemberWriteMethods<TClient extends WriteableClient> extends TandaPayWriteMethods<TClient> {
    async joinCommunity() {
        this.simulate.joinToCommunity();
        this.write.joinToCommunity();
    }

    async approveSubgroupAssignment(approve: boolean = true) {
        this.simulate.approveSubGroupAssignment([approve]);
        this.write.approveSubGroupAssignment([approve])
    }

    // approveNewSubgroupMember

    async exitSubgroup() {
        this.simulate.exitSubGroup();
        this.write.exitSubGroup();
    }

    async defectFromCommunity() {
        this.simulate.defects();
        this.write.defects();
    }

    async payPremium(useAvailableBalance: boolean = false) {
        this.simulate.payPremium([useAvailableBalance]);
        this.write.payPremium([useAvailableBalance]);
    }

    async acceptSecretaryRole() {
        this.simulate.secretaryAcceptance();
        this.write.secretaryAcceptance();
    }

    // a successor can send this transaction and specify a new secretary to take over in the event of an
    // emergency. For it to actually work, multiple successors have to send this while specifying the same new secretary
    async emergencySecretaryHandoff(newSecretaryWalletAddress: Hex) {
        this.simulate.emergencyHandOverSecretary([newSecretaryWalletAddress]);
        this.write.emergencyHandOverSecretary([newSecretaryWalletAddress]);
    }

    // allows a user to withdraw their available funds, i.e. refunds from periods in which no claim occurred
    async withdrawRefund() {
        this.simulate.withdrawRefund();
        this.write.withdrawRefund();
    }

    async submitClaim() {
        this.simulate.submitClaim();
        this.write.submitClaim();
    }

    async withdrawClaimFund(forfeit: boolean = false) {
        this.simulate.withdrawClaimFund([forfeit]);
        this.write.withdrawClaimFund([forfeit]);
    }
}