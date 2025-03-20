import { TandaPayWriteMethodAliases } from "tandapay_interface/write_method_types";
import { MemberStatus, TandaPayRole, TandaPayState } from "types";
import { canAcceptSecretaryRole, canAdvancePeriod, canApproveNewSubgroupMember, canApproveSugroupAssignment, canDefectFromCommunity, canJoinCommunity, canRequestEmergencySecretaryHandoff, canSubmitClaim, CustomFilterParameters, CustomFilterReturnType } from "./custom_filter_procedures";
import { daysToSeconds } from "utils";
import { WriteableTandaPayManager } from "tandapay_manager/tandapay_manager";
import { TandaPayInfo } from "_contracts/TandaPay";
import { isAddress, isAddressEqual } from "viem";
import { curtis } from "viem/chains";

const I = TandaPayState.Initialization;
const D = TandaPayState.Default;
const F = TandaPayState.Fractured;
const C = TandaPayState.Collapsed;

//TODO: refactor
export async function getAvailableMethods(manager: WriteableTandaPayManager) {
  const methods = TandaPayInfo.abi.filter((m) => m.type === "function" && m.stateMutability !== "view").map(m => m.name);
  const address = manager.client.wallet.account.address;
  const periodInfo = await manager.read.getCurrentPeriodInfo();
  const currentState = await manager.read.getCommunityState();
  const secretary = await manager.read.getSecretaryAddress();
  const memberInfo = await manager.read.getMemberInfoFromAddress(address);

  const curBlock = await manager.client.public.getBlock();
  const curTime = curBlock.timestamp;

  let ourRole = TandaPayRole.None;
  if (isAddressEqual(address, secretary))
    ourRole = TandaPayRole.Secretary;
  else if (memberInfo.id !== 0n)
    ourRole = TandaPayRole.Member;

  const res: TandaPayWriteMethodAliases[] = [];

  for (const m of methods) {
    if (m in TandaPayWriteMethodFilters) {
      const filter = TandaPayWriteMethodFilters[m as TandaPayWriteMethodAliases];
      if (filter.allowableRoles && !filter.allowableRoles.some((r) => r === ourRole))
        continue;

      if (filter.allowableStates && !filter.allowableStates.some((s) => s === currentState))
        continue;

      if (filter.allowableTimeInPeriod !== undefined) {
        const {startSecond, endSecond} = filter.allowableTimeInPeriod;
        if (startSecond !== undefined) {
          const startTime = periodInfo.startTimestamp + BigInt(startSecond);
          if (curTime < startTime)
            continue;
        }
        if (endSecond !== undefined) {
          const endTime = periodInfo.startTimestamp + BigInt(endSecond);
          if (curTime > endTime)
            continue;
        }
      }

      if (filter.allowedByCustomProcedure) {
        const customProcedureResult = await filter.allowedByCustomProcedure({manager});
        if (customProcedureResult.result === false) {
          console.log(customProcedureResult.reason);
          continue;
        }
      }

      res.push(m as TandaPayWriteMethodAliases);
    }
  }
  return res;
}

export type MethodFilter = {
  /** Assumed all if undefined */
  allowableStates?: TandaPayState[],
  /** Assumed all if undefined */
  allowableRoles?: TandaPayRole[],
  /** Assumed any time if undefined */
  allowableTimeInPeriod?: {
    startSecond?: number | bigint,
    endSecond?: number | bigint,
  },
  allowedByCustomProcedure?: (params: CustomFilterParameters) => Promise<CustomFilterReturnType>,
}

export const TandaPayWriteMethodFilters: Record<TandaPayWriteMethodAliases, MethodFilter> = {
  advancePeriod: {
    allowableStates: [D, F],
    allowableRoles: [TandaPayRole.Secretary],
    allowedByCustomProcedure: canAdvancePeriod,
  },
  extendPeriodByOneDay: {
    allowableStates: [D, F],
    allowableRoles: [TandaPayRole.Secretary]
  },
  addMemberToCommunity: {
    allowableStates: [I, D],
    allowableRoles: [TandaPayRole.Secretary]
  },
  approveNewSubgroupMember: {
    allowableStates: [I, D, F],
    allowableRoles: [TandaPayRole.Member, TandaPayRole.Secretary],
    allowedByCustomProcedure: canApproveNewSubgroupMember,
  },
  approveSubgroupAssignment: {
    allowableStates: [I, D, F],
    allowableRoles: [TandaPayRole.Member, TandaPayRole.Secretary],
    allowedByCustomProcedure: canApproveSugroupAssignment,
  },
  assignMemberToSubgroup: {
    allowableStates: [I, D, F],
    allowableRoles: [TandaPayRole.Secretary],
  },
  createSubgroup: {
    allowableStates: [I, D, F],
    allowableRoles: [TandaPayRole.Secretary],
  },
  defectFromCommunity: {
    allowableRoles: [TandaPayRole.Member, TandaPayRole.Secretary],
    allowedByCustomProcedure: canDefectFromCommunity,
  },
  defineSecretarySuccessorList: {
    allowableRoles: [TandaPayRole.Secretary]
  },
  divideShortfall: {
    allowableRoles: [TandaPayRole.Secretary],
    allowableTimeInPeriod: {
      endSecond: daysToSeconds(3),
    }
  },
  emergencySecretaryHandoff: {
    allowableRoles: [TandaPayRole.Member],
    allowedByCustomProcedure: canRequestEmergencySecretaryHandoff,
  },
  handoverSecretaryRoleToSuccessor: {
    allowableRoles: [TandaPayRole.Secretary]
  },
  initiateDefaultState: {
    allowableStates: [I],
    allowableRoles: [TandaPayRole.Secretary]
  },
  injectFunds: {
    allowableRoles: [TandaPayRole.Secretary],
    allowableTimeInPeriod: {
      endSecond: daysToSeconds(3),
    }
  },
  issueRefund: {
    allowableTimeInPeriod: {
      startSecond: daysToSeconds(3),
      endSecond: daysToSeconds(4),
    }
  },
  joinCommunity: {
    allowableStates: [D],
    allowedByCustomProcedure: canJoinCommunity,
  },
  leaveSubgroup: {
    allowableRoles: [TandaPayRole.Member, TandaPayRole.Secretary],
  },
  payPremium: {
    allowableRoles: [TandaPayRole.Member, TandaPayRole.Secretary],
    allowableTimeInPeriod: {
      startSecond: daysToSeconds(27),
    }
  },
  acceptSecretaryRole: {
    allowableRoles: [TandaPayRole.Member],
    allowedByCustomProcedure: canAcceptSecretaryRole,
  },
  submitClaim: {
    allowableRoles: [TandaPayRole.Member, TandaPayRole.Secretary],
    allowableTimeInPeriod: {
      endSecond: daysToSeconds(14),
    },
    allowedByCustomProcedure: canSubmitClaim,
  },
  updateCoverageAmount: {
    allowableRoles: [TandaPayRole.Secretary],
    allowableStates: [I, D],
  },
  whitelistClaim: {
    allowableRoles: [TandaPayRole.Secretary],
    allowableTimeInPeriod: {
      endSecond: daysToSeconds(15),
    },
  },
  withdrawClaimFund: {
    // no check for noW
  },
  withdrawRefund: {
    // no check for now
  },

  // deprecated methods below
  deprecated_beginEmergency: {
    allowableRoles: [],
    allowableStates: [],
    allowedByCustomProcedure: () => Promise.resolve({ result: false, reason: "not implemented"}),
  },
  deprecated_emergencyRefund: {
    allowableRoles: [],
    allowableStates: [],
    allowedByCustomProcedure: () => Promise.resolve({ result: false, reason: "not implemented"}),
  },
  deprecated_emergencyWithdraw: {
    allowableRoles: [],
    allowableStates: [],
    allowedByCustomProcedure: () => Promise.resolve({ result: false, reason: "not implemented"}),
  },
  deprecated_endEmergency: {
    allowableRoles: [],
    allowableStates: [],
    allowedByCustomProcedure: () => Promise.resolve({result: false, reason: "not implemented"}),
  },
  deprecated_updateMemberStatus: {
    allowableRoles: [],
    allowableStates: [],
    allowedByCustomProcedure: () => Promise.resolve({ result: false, reason: "not implemented"}),
  },
};