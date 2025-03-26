import { Hex } from "viem";
import {
  ApproveNewSubgroupMemberParameters,
  ApproveSubgroupAssignmentParameters,
  EmergencySecretaryHandoffParameters,
  PayPremiumParameters,
  TandaPayMemberWriter,
  WithdrawClaimFundParameters,
} from "tandapay_interface/member_interface";
import { TandaPayWriteMethodReturnType, TandaPayWriteMethods } from "./tandapay_write_methods";

export class MemberWriteMethods extends TandaPayWriteMethods implements TandaPayMemberWriter {
  async joinCommunity(): TandaPayWriteMethodReturnType<"joinCommunity"> {
    const simulate = async () => await this.simulate.joinCommunity();
    const write = async () => await this.write.joinCommunity();
    return this.performOperation({ simulate, write });
  }

  async approveSubgroupAssignment(
    params?: ApproveSubgroupAssignmentParameters,
  ): TandaPayWriteMethodReturnType<"approveSubgroupAssignment"> {
    const approve = params?.approve ?? true;
    const simulate = async () =>
      await this.simulate.approveSubgroupAssignment([approve]);
    const write = async () =>
      await this.write.approveSubgroupAssignment([approve]);
    return this.performOperation({ simulate, write });
  }

  async approveNewSubgroupMember(
    params: ApproveNewSubgroupMemberParameters,
  ): TandaPayWriteMethodReturnType<"approveNewSubgroupMember"> {
    const { subgroupId, newMemberId, approve = true } = params;
    const simulate = async () =>
      await this.simulate.approveNewSubgroupMember([
        BigInt(subgroupId),
        BigInt(newMemberId),
        approve,
      ]);
    const write = async () =>
      await this.write.approveNewSubgroupMember([
        BigInt(subgroupId),
        BigInt(newMemberId),
        approve,
      ]);
    return this.performOperation({ simulate, write });
  }

  async leaveSubgroup(): TandaPayWriteMethodReturnType<"leaveSubgroup"> {
    const simulate = async () => await this.simulate.leaveSubgroup();
    const write = async () => await this.write.leaveSubgroup();
    return this.performOperation({ simulate, write });
  }

  async defectFromCommunity(): TandaPayWriteMethodReturnType<"defectFromCommunity"> {
    const simulate = async () => await this.simulate.defectFromCommunity();
    const write = async () => await this.write.defectFromCommunity();
    return this.performOperation({ simulate, write });
  }

  async payPremium(
    params?: PayPremiumParameters,
  ): TandaPayWriteMethodReturnType<"payPremium"> {
    const useAvailableBalance = params?.useAvailableBalance ?? false;
    const simulate = async () =>
      await this.simulate.payPremium([useAvailableBalance]);
    const write = async () =>
      await this.write.payPremium([useAvailableBalance]);
    return this.performOperation({ simulate, write });
  }

  async acceptSecretaryRole(): TandaPayWriteMethodReturnType<"acceptSecretaryRole"> {
    const simulate = async () => await this.simulate.acceptSecretaryRole();
    const write = async () => await this.write.acceptSecretaryRole();
    return this.performOperation({ simulate, write });
  }

  async emergencySecretaryHandoff(
    params: EmergencySecretaryHandoffParameters,
  ): TandaPayWriteMethodReturnType<"emergencySecretaryHandoff"> {
    const { newSecretaryWalletAddress } = params;
    const simulate = async () =>
      await this.simulate.emergencySecretaryHandoff([
        newSecretaryWalletAddress,
      ]);
    const write = async () =>
      await this.write.emergencySecretaryHandoff([newSecretaryWalletAddress]);
    return this.performOperation({ simulate, write });
  }

  async withdrawRefund(): TandaPayWriteMethodReturnType<"withdrawRefund"> {
    const simulate = async () => await this.simulate.withdrawRefund();
    const write = async () => await this.write.withdrawRefund();
    return this.performOperation({ simulate, write });
  }

  async submitClaim(): TandaPayWriteMethodReturnType<"submitClaim"> {
    const simulate = async () => await this.simulate.submitClaim();
    const write = async () => await this.write.submitClaim();
    return this.performOperation({ simulate, write });
  }

  async withdrawClaimFund(
    params?: WithdrawClaimFundParameters,
  ): TandaPayWriteMethodReturnType<"withdrawClaimFund"> {
    const forfeit = params?.forfeit ?? false;
    const simulate = async () =>
      await this.simulate.withdrawClaimFund([forfeit]);
    const write = async () => await this.write.withdrawClaimFund([forfeit]);
    return this.performOperation({ simulate, write });
  }
}
