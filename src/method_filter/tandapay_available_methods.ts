import { TandaPayWriteMethodAliases } from "tandapay_interface/write_method_types";
import { MemberStatus, TandaPayRole, TandaPayState } from "types";
import { canAcceptSecretaryRole, canAdvancePeriod, canApproveNewSubgroupMember, canApproveSugroupAssignment, canDefectFromCommunity, canJoinCommunity, canRequestEmergencySecretaryHandoff, canSubmitClaim, CustomFilterParameters, CustomFilterReturnType } from "./custom_filter_procedures";
import { daysToSeconds } from "utils";

const I = TandaPayState.Initialization;
const D = TandaPayState.Default;
const F = TandaPayState.Fractured;
const C = TandaPayState.Collapsed;

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
}