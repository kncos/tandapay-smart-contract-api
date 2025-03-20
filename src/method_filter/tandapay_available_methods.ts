import { TandaPayWriteMethodAliases } from "tandapay_interface/write_method_types";
import { TandaPayRole, TandaPayState } from "types";
import { canAdvancePeriod, canApproveNewSubgroupMember, canApproveSugroupAssignment, CustomFilterParameters, CustomFilterReturnType } from "./custom_filter_procedures";

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
    startSecond?: number,
    endSecond?: number,
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
  cancelManualCollapse: {
    allowableRoles: [TandaPayRole.Secretary]
  },
  createSubgroup: {
    allowableRoles: [TandaPayRole.Secretary]
  },
  defectFromCommunity: {
    //
  },
  defineSecretarySuccesorList: {
    allowableRoles: [TandaPayRole.Secretary]
  },
  divideShortfall: {
    allowableRoles: [TandaPayRole.Secretary]
  },
  emergencySecretaryHandoff: {
    //! ensure this is a member method
  },
  exitSubgroup: {
    // should this be enabled at all?

  },
  handoverSecretaryRoleToSuccessor: {
    allowableRoles: [TandaPayRole.Secretary]
  },
  initiateDefaultState: {
    allowableRoles: [TandaPayRole.Secretary]
  },
  injectFunds: {
    allowableRoles: [TandaPayRole.Secretary]
  },
  issueRefund: {
    // anyone
  },
  joinCommunity: {
    // anyone
  },
  leaveSubgroup: {
    // anyone
  },
  manuallyCollapseCommunity: {
    allowableRoles: [TandaPayRole.Secretary]
  },
  payPremium: {
    // anyone
  },
  acceptSecretaryRole: {
    // anyone
  },
  submitClaim: {
    // anyone
  },
  updateCoverageAmount: {
    allowableRoles: [TandaPayRole.Secretary]
  },
  whitelistClaim: {
    allowableRoles: [TandaPayRole.Secretary]
  },
  withdrawClaimFund: {
    // anyone
  },
  withdrawRefund: {
    // anyone
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