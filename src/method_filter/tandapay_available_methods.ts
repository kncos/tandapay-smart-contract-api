// three main narrowings:
// we want to narrow based on community state
// we want to narrow based on current time in the period
// we want to narrow based on the user's role

import { TandaPayManager } from "tandapay_manager/tandapay_manager";
import { TandaPayWriteMethodAliases } from "tandapay_manager/write/types";
import { TandaPayRole, TandaPayState } from "types";

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
  allowedByCustomProcedure?: (manager: TandaPayManager) => Promise<boolean>,
}

export const TandaPayWriteMethodFilters: Record<TandaPayWriteMethodAliases, MethodFilter> = {
  advancePeriod: {
    allowableRoles: [TandaPayRole.Secretary]
  },
  extendPeriodByOneDay: {
    allowableRoles: [TandaPayRole.Secretary]
  },
  addMemberToCommunity: {
    allowableRoles: [TandaPayRole.Secretary]
  },
  approveNewSubgroupMember: {
    //
  },
  approveSubgroupAssignment: {
    //
  },
  assignMemberToSubgroup: {
    allowableRoles: [TandaPayRole.Secretary]
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
    allowedByCustomProcedure: () => Promise.resolve(false),
  },
  deprecated_emergencyRefund: {
    allowableRoles: [],
    allowableStates: [],
    allowedByCustomProcedure: () => Promise.resolve(false),
  },
  deprecated_emergencyWidthaw: {
    allowableRoles: [],
    allowableStates: [],
    allowedByCustomProcedure: () => Promise.resolve(false),
  },
  deprecated_endEmergency: {
    allowableRoles: [],
    allowableStates: [],
    allowedByCustomProcedure: () => Promise.resolve(false),
  },
  deprecated_updateMemberStatus: {
    allowableRoles: [],
    allowableStates: [],
    allowedByCustomProcedure: () => Promise.resolve(false),
  },
}