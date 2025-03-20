import { Hex } from "viem";
import {
  TandaPayWriteMethodReturnType,
  TandaPayWriteMethods,
} from "./tandapay_write_methods";

export class MemberWriteMethods extends TandaPayWriteMethods {
  // 1.  joinToCommunity  =>
  // Use case -- The user will join the community and transfer the 11/12th of the individual savings amount's fund.
  // Arguments --- none required
  async joinCommunity(): TandaPayWriteMethodReturnType<"joinToCommunity"> {
    const simulate = async () => await this.simulate.joinToCommunity();
    const write = async () => await this.write.joinToCommunity();
    return this.performOperation({ simulate, write });
  }

  // 2. approveSubGroupAssignment  =>
  // Use case -- This function will be used to approve the SubGroup assignment of the member
  // Arguments --- members will have to pass a boolean value of if they want to join or not.
  async approveSubgroupAssignment(
    approve: boolean = true,
  ): TandaPayWriteMethodReturnType<"approveSubGroupAssignment"> {
    const simulate = async () =>
      await this.simulate.approveSubGroupAssignment([approve]);
    const write = async () =>
      await this.write.approveSubGroupAssignment([approve]);
    return this.performOperation({ simulate, write });
  }

  // 3. approveNewSubgroupMember  =>
  // Use case -- This function will be used to approve a new SubGroup member by the existing SubGroup member if the new member is being re-orged.
  // Arguments --- The member will have to pass the SubGroup ID, the new member's ID, and a boolean value of whether the new member is accepted or not.
  async approveNewSubgroupMember(
    subgroupId: bigint,
    newMemberId: bigint,
    approve: boolean = true,
  ): TandaPayWriteMethodReturnType<"approveNewSubgroupMember"> {
    const simulate = async () =>
      await this.simulate.approveNewSubgroupMember([
        subgroupId,
        newMemberId,
        approve,
      ]);
    const write = async () =>
      await this.write.approveNewSubgroupMember([
        subgroupId,
        newMemberId,
        approve,
      ]);
    return this.performOperation({ simulate, write });
  }

  // 4. exitSubGroup  =>
  // Use case -- Member will be able to exit from a SubGroup using this function.
  // Arguments --- none required
  /** @deprecated */
  async exitSubgroup(): TandaPayWriteMethodReturnType<"exitSubGroup"> {
    const simulate = async () => await this.simulate.exitSubGroup();
    const write = async () => await this.write.exitSubGroup();
    return this.performOperation({ simulate, write });
  }

  //! not documented by MD, added by Julian?
  async leaveSubgroup(): TandaPayWriteMethodReturnType<"leaveFromASubGroup"> {
    const simulate = async () => await this.simulate.leaveFromASubGroup();
    const write = async () => await this.write.leaveFromASubGroup();
    return this.performOperation({ simulate, write });
  }

  // 5. defects  =>
  // Use case -- Member will be able to defects using this function.
  // Arguments --- none required
  async defectFromCommunity(): TandaPayWriteMethodReturnType<"defects"> {
    const simulate = async () => await this.simulate.defects();
    const write = async () => await this.write.defects();
    return this.performOperation({ simulate, write });
  }

  // 6. payPremium  =>
  // Use case -- The Valid members will be able to pay the upcoming period's premium using this function
  // Arguments --- none required
  async payPremium(
    useAvailableBalance: boolean = false,
  ): TandaPayWriteMethodReturnType<"payPremium"> {
    const simulate = async () =>
      await this.simulate.payPremium([useAvailableBalance]);
    const write = async () =>
      await this.write.payPremium([useAvailableBalance]);
    return this.performOperation({ simulate, write });
  }

  // 7. secretaryAcceptance  =>
  // Use case -- The valid members who are in line of the secretary successors list and are being voted for the secretary can accept the secretary using this function.
  // Arguments --- none required
  async acceptSecretaryRole(): TandaPayWriteMethodReturnType<"secretaryAcceptance"> {
    const simulate = async () => await this.simulate.secretaryAcceptance();
    const write = async () => await this.write.secretaryAcceptance();
    return this.performOperation({ simulate, write });
  }

  // 8. emergencyHandOverSecretary  =>
  // Use case --  The valid members who are in the line of the secretary successors list can call this function and set up another valid member who is also in the line of the secretary successors list as a secretary in emergencies.
  // Arguments --- The member will have to pass the preferred successors wallet address while calling this function.
  // a successor can send this transaction and specify a new secretary to take over in the event of an
  // emergency. For it to actually work, multiple successors have to send this while specifying the same new secretary
  async emergencySecretaryHandoff(
    newSecretaryWalletAddress: Hex,
  ): TandaPayWriteMethodReturnType<"emergencyHandOverSecretary"> {
    const simulate = async () =>
      await this.simulate.emergencyHandOverSecretary([
        newSecretaryWalletAddress,
      ]);
    const write = async () =>
      await this.write.emergencyHandOverSecretary([newSecretaryWalletAddress]);
    return this.performOperation({ simulate, write });
  }

  // 9. withdrawRefund=>
  // Use case -- The member will be able to withdraw their available fund by calling this function.
  // Arguments --- none required
  // allows a user to withdraw their available funds, i.e. refunds from periods in which no claim occurred
  async withdrawRefund(): TandaPayWriteMethodReturnType<"withdrawRefund"> {
    const simulate = async () => await this.simulate.withdrawRefund();
    const write = async () => await this.write.withdrawRefund();
    return this.performOperation({ simulate, write });
  }

  // 10. submitClaim =>
  // Use case -- The members who are eligible for the coverage will be able to submit for claim using this function.
  // Arguments --- none required
  async submitClaim(): TandaPayWriteMethodReturnType<"submitClaim"> {
    const simulate = async () => await this.simulate.submitClaim();
    const write = async () => await this.write.submitClaim();
    return this.performOperation({ simulate, write });
  }

  // 11. withdrawClaimFund  =>
  // Use case -- The whitelisted claimant will be able to withdraw the claim amount by calling this function
  // Arguments --- none required
  async withdrawClaimFund(
    forfeit: boolean = false,
  ): TandaPayWriteMethodReturnType<"withdrawClaimFund"> {
    const simulate = async () =>
      await this.simulate.withdrawClaimFund([forfeit]);
    const write = async () => await this.write.withdrawClaimFund([forfeit]);
    return this.performOperation({ simulate, write });
  }
}
