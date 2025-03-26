import { TandaPayWriteMethodAliases } from "tandapay_manager/write/write_method_types";
import { TandaPayRole, TandaPayState } from "types";
import {
  canAcceptSecretaryRole,
  canAdvancePeriod,
  canApproveNewSubgroupMember,
  canApproveSugroupAssignment,
  canDefectFromCommunity,
  canJoinCommunity,
  canRequestEmergencySecretaryHandoff,
  canSubmitClaim,
  CustomFilterParameters,
  CustomFilterReturnType,
} from "./custom_filter_procedures";
import { daysToSeconds } from "utils";
import { WriteableTandaPayManager } from "tandapay_manager/tandapay_manager";
import { TandaPayInfo } from "_contracts/TandaPay";
import { isAddressEqual } from "viem";

//TODO: refactor
export async function getAvailableMethods(manager: WriteableTandaPayManager) {
  const methods = TandaPayInfo.abi
    .filter((m) => m.type === "function" && m.stateMutability !== "view")
    .map((m) => m.name);
  const address = manager.client.wallet.account.address;
  const periodInfo = await manager.read.getPeriodInfo();
  const currentState = await manager.read.getCommunityState();
  const secretary = await manager.read.getSecretaryAddress();
  const memberInfo = await manager.read.getMemberInfoFromAddress({
    walletAddress: address,
  });

  const curBlock = await manager.client.public.getBlock();
  const curTime = curBlock.timestamp;

  let ourRole = TandaPayRole.None;
  if (isAddressEqual(address, secretary)) ourRole = TandaPayRole.Secretary;
  else if (memberInfo.id !== 0n) ourRole = TandaPayRole.Member;

  const res: TandaPayWriteMethodAliases[] = [];

  for (const m of methods) {
    if (m in TandaPayWriteMethodFilters) {
      const filter =
        TandaPayWriteMethodFilters[m as TandaPayWriteMethodAliases];
      if (
        filter.allowableRoles &&
        !filter.allowableRoles.some((r) => r === ourRole)
      )
        continue;

      if (
        filter.allowableStates &&
        !filter.allowableStates.some((s) => s === currentState)
      )
        continue;

      if (filter.allowableTimeInPeriod !== undefined) {
        const { startSecond, endSecond } = filter.allowableTimeInPeriod;
        if (startSecond !== undefined) {
          const startTime = periodInfo.startTimestamp + BigInt(startSecond);
          if (curTime < startTime) continue;
        }
        if (endSecond !== undefined) {
          const endTime = periodInfo.startTimestamp + BigInt(endSecond);
          if (curTime > endTime) continue;
        }
      }

      if (filter.allowedByCustomProcedure) {
        const customProcedureResult = await filter.allowedByCustomProcedure({
          manager,
        });
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
  allowableStates?: TandaPayState[];
  /** Assumed all if undefined */
  allowableRoles?: TandaPayRole[];
  /** Assumed any time if undefined */
  allowableTimeInPeriod?: {
    startSecond?: number | bigint;
    endSecond?: number | bigint;
  };
  allowedByCustomProcedure?: (
    params: CustomFilterParameters,
  ) => Promise<CustomFilterReturnType>;
};

export const TandaPayWriteMethodFilters: Record<
  TandaPayWriteMethodAliases,
  MethodFilter
> = {
  advancePeriod: {
    allowableStates: [TandaPayState.Default, TandaPayState.Fractured],
    allowableRoles: [TandaPayRole.Secretary],
    allowedByCustomProcedure: canAdvancePeriod,
  },
  extendPeriodByOneDay: {
    allowableStates: [TandaPayState.Default, TandaPayState.Fractured],
    allowableRoles: [TandaPayRole.Secretary],
  },
  addMemberToCommunity: {
    allowableStates: [TandaPayState.Initialization, TandaPayState.Default],
    allowableRoles: [TandaPayRole.Secretary],
  },
  approveNewSubgroupMember: {
    allowableStates: [
      TandaPayState.Initialization,
      TandaPayState.Default,
      TandaPayState.Fractured,
    ],
    allowableRoles: [TandaPayRole.Member, TandaPayRole.Secretary],
    allowedByCustomProcedure: canApproveNewSubgroupMember,
  },
  approveSubgroupAssignment: {
    allowableStates: [
      TandaPayState.Initialization,
      TandaPayState.Default,
      TandaPayState.Fractured,
    ],
    allowableRoles: [TandaPayRole.Member, TandaPayRole.Secretary],
    allowedByCustomProcedure: canApproveSugroupAssignment,
  },
  assignMemberToSubgroup: {
    allowableStates: [
      TandaPayState.Initialization,
      TandaPayState.Default,
      TandaPayState.Fractured,
    ],
    allowableRoles: [TandaPayRole.Secretary],
  },
  createSubgroup: {
    allowableStates: [
      TandaPayState.Initialization,
      TandaPayState.Default,
      TandaPayState.Fractured,
    ],
    allowableRoles: [TandaPayRole.Secretary],
  },
  defectFromCommunity: {
    allowableRoles: [TandaPayRole.Member, TandaPayRole.Secretary],
    allowedByCustomProcedure: canDefectFromCommunity,
  },
  defineSecretarySuccessorList: {
    allowableRoles: [TandaPayRole.Secretary],
  },
  divideShortfall: {
    allowableRoles: [TandaPayRole.Secretary],
    allowableTimeInPeriod: {
      endSecond: daysToSeconds(3),
    },
  },
  emergencySecretaryHandoff: {
    allowableRoles: [TandaPayRole.Member],
    allowedByCustomProcedure: canRequestEmergencySecretaryHandoff,
  },
  handoverSecretaryRoleToSuccessor: {
    allowableRoles: [TandaPayRole.Secretary],
  },
  initiateDefaultState: {
    allowableStates: [TandaPayState.Initialization],
    allowableRoles: [TandaPayRole.Secretary],
  },
  injectFunds: {
    allowableRoles: [TandaPayRole.Secretary],
    allowableTimeInPeriod: {
      endSecond: daysToSeconds(3),
    },
  },
  issueRefund: {
    allowableTimeInPeriod: {
      startSecond: daysToSeconds(3),
      endSecond: daysToSeconds(4),
    },
  },
  joinCommunity: {
    allowableStates: [TandaPayState.Default],
    allowedByCustomProcedure: canJoinCommunity,
  },
  leaveSubgroup: {
    allowableRoles: [TandaPayRole.Member, TandaPayRole.Secretary],
  },
  payPremium: {
    allowableRoles: [TandaPayRole.Member, TandaPayRole.Secretary],
    allowableTimeInPeriod: {
      startSecond: daysToSeconds(27),
    },
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
    allowableStates: [TandaPayState.Initialization, TandaPayState.Default],
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
    allowedByCustomProcedure: () =>
      Promise.resolve({ result: false, reason: "not implemented" }),
  },
  deprecated_emergencyRefund: {
    allowableRoles: [],
    allowableStates: [],
    allowedByCustomProcedure: () =>
      Promise.resolve({ result: false, reason: "not implemented" }),
  },
  deprecated_emergencyWithdraw: {
    allowableRoles: [],
    allowableStates: [],
    allowedByCustomProcedure: () =>
      Promise.resolve({ result: false, reason: "not implemented" }),
  },
  deprecated_endEmergency: {
    allowableRoles: [],
    allowableStates: [],
    allowedByCustomProcedure: () =>
      Promise.resolve({ result: false, reason: "not implemented" }),
  },
  deprecated_updateMemberStatus: {
    allowableRoles: [],
    allowableStates: [],
    allowedByCustomProcedure: () =>
      Promise.resolve({ result: false, reason: "not implemented" }),
  },
};
