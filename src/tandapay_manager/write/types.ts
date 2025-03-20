import { TandaPayInfo } from "_contracts/TandaPay";

/** 
 * Mapping of all raw write method names on the TandaPay smart contract abi
 * to their corresponding aliases that we'll use in this codebase
 */
export const RawWriteMethodToAliasMapping = {
  AdvanceToTheNextPeriod: "advancePeriod",
  addAdditionalDay: "extendPeriodByOneDay",
  addToCommunity: "addMemberToCommunity",
  approveNewSubgroupMember: "approveNewSubgroupMember",
  approveSubGroupAssignment: "approveSubgroupAssignment",
  assignToSubGroup: "assignMemberToSubgroup",
  cancelManualCollapsBySecretary: "cancelManualCollapse",
  createSubGroup: "createSubgroup",
  defects: "defectFromCommunity",
  defineSecretarySuccessor: "defineSecretarySuccesorList",
  divideShortFall: "divideShortfall",
  emergencyHandOverSecretary: "emergencySecretaryHandoff",
  exitSubGroup: "exitSubgroup",
  handoverSecretary: "handoverSecretaryRoleToSuccessor",
  initiatDefaultStateAndSetCoverage: "initiateDefaultState",
  injectFunds: "injectFunds",
  issueRefund: "issueRefund",
  joinToCommunity: "joinCommunity",
  leaveFromASubGroup: "leaveSubgroup",
  manualCollapsBySecretary: "manuallyCollapseCommunity",
  payPremium: "payPremium",
  secretaryAcceptance: "acceptSecretaryRole",
  submitClaim: "submitClaim",
  updateCoverageAmount: "updateCoverageAmount",
  whitelistClaim: "whitelistClaim",
  withdrawClaimFund: "withdrawClaimFund",
  withdrawRefund: "withdrawRefund",
  /** @deprecated unimplemented in tandapay write methods abstraction */
  EmergencyWithdrawal: "deprecated_emergencyWidthaw",
  /** @deprecated unimplemented in tandapay write methods abstraction */
  updateMemberStatus: "deprecated_updateMemberStatus",
  /** @deprecated unimplemented in tandapay write methods abstraction */
  emergencyRefund: "deprecated_emergencyRefund",
  /** @deprecated unimplemented in tandapay write methods abstraction */
  beginEmergency: "deprecated_beginEmergency",
  /** @deprecated unimplemented in tandapay write methods abstraction */
  endEmergency: "deprecated_endEmergency",
} as const;

/** 
 * Mapping of all write method aliases used in this codebase to their
 * corresponding raw TandaPay write method names as defined on the ABI
 */
export const AliasToRawWriteMethodMapping = {
  advancePeriod: "AdvanceToTheNextPeriod",
  extendPeriodByOneDay: "addAdditionalDay",
  addMemberToCommunity: "addToCommunity",
  approveNewSubgroupMember: "approveNewSubgroupMember",
  approveSubgroupAssignment: "approveSubGroupAssignment",
  assignMemberToSubgroup: "assignToSubGroup",
  cancelManualCollapse: "cancelManualCollapsBySecretary",
  createSubgroup: "createSubGroup",
  defectFromCommunity: "defects",
  defineSecretarySuccesorList: "defineSecretarySuccessor",
  divideShortfall: "divideShortFall",
  // ensure that this is a member method
  emergencySecretaryHandoff: "emergencyHandOverSecretary",
  exitSubgroup: "exitSubGroup",
  handoverSecretaryRoleToSuccessor: "handoverSecretary",
  initiateDefaultState: "initiatDefaultStateAndSetCoverage",
  injectFunds: "injectFunds",
  issueRefund: "issueRefund",
  joinCommunity: "joinToCommunity",
  leaveSubgroup: "leaveFromASubGroup",
  manuallyCollapseCommunity: "manualCollapsBySecretary",
  payPremium: "payPremium",
  acceptSecretaryRole: "secretaryAcceptance",
  submitClaim: "submitClaim",
  updateCoverageAmount: "updateCoverageAmount",
  whitelistClaim: "whitelistClaim",
  withdrawClaimFund: "withdrawClaimFund",
  withdrawRefund: "withdrawRefund",
  /** @deprecated unimplemented in tandapay write methods abstraction */
  deprecated_emergencyWidthaw: "EmergencyWithdrawal",
  /** @deprecated unimplemented in tandapay write methods abstraction */
  deprecated_updateMemberStatus: "updateMemberStatus",
  /** @deprecated unimplemented in tandapay write methods abstraction */
  deprecated_emergencyRefund: "emergencyRefund",
  /** @deprecated unimplemented in tandapay write methods abstraction */
  deprecated_beginEmergency: "beginEmergency",
  /** @deprecated unimplemented in tandapay write methods abstraction */
  deprecated_endEmergency: "endEmergency",
} as const;

// extracts all write method names from an ABI
type ExtractWriteMethodNames<T extends readonly any[]> = {
  [K in keyof T]: T[K] extends {
    type: "function";
    name: infer N;
    stateMutability: infer S;
  }
    ? S extends "view"
      ? never
      : N
    : never;
}[number];

/** All raw write method names from TandaPay's smart contract ABI */
export type RawTandaPayWriteMethodNames = ExtractWriteMethodNames<typeof TandaPayInfo.abi>;
/** All tandapay write method aliases used in this codebase */
export type TandaPayWriteMethodAliases = keyof typeof AliasToRawWriteMethodMapping;

// check that all write methods have an alias
type AllWriteMethodsMappedCheck = Exclude<
  RawTandaPayWriteMethodNames, 
  keyof typeof RawWriteMethodToAliasMapping
> extends never ? true : { error: "Missing write methods in RawWriteMethodToAliasMapping" };

// ensure that all raw-alias mappings have a corresponding alias-raw mapping
type ForwardToBackwardCheck = {
  [K in keyof typeof RawWriteMethodToAliasMapping]: 
    typeof RawWriteMethodToAliasMapping[K] extends keyof typeof AliasToRawWriteMethodMapping
      ? typeof AliasToRawWriteMethodMapping[typeof RawWriteMethodToAliasMapping[K]] extends K
        ? true
        : { error: "Mismatch in mapping"; key: K; forward: typeof RawWriteMethodToAliasMapping[K]; backward: typeof AliasToRawWriteMethodMapping[typeof RawWriteMethodToAliasMapping[K]] }
      : { error: "Missing in AliasToRawWriteMethodMapping"; key: K; value: typeof RawWriteMethodToAliasMapping[K] };
};

// collect any missing mappings
type ForwardToBackwardError = {
  [K in keyof ForwardToBackwardCheck]:
    ForwardToBackwardCheck[K] extends true ? never : ForwardToBackwardCheck[K]
}[keyof ForwardToBackwardCheck];

// this is the final check. Both should extend true if there are no issues
type VerifyMappings = [
  AllWriteMethodsMappedCheck extends true ? true : never,
  ForwardToBackwardError extends never ? true : never,
];

// create a dummy variable that will cause an error if all methods aren't properly mapped
const allMapped: VerifyMappings = [true, true];