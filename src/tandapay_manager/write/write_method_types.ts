import { TandaPayInfo } from "_contracts/TandaPay";

/**
 * Mapping of all raw write method names on the TandaPay smart contract abi
 * to their corresponding aliases that we'll use in this codebase
 */
export const RawWriteMethodToAliasMapping = {
  advancePeriod: "advancePeriod",
  extendPeriodByOneDay: "extendPeriodByOneDay",
  addMemberToCommunity: "addMemberToCommunity",
  approveNewSubgroupMember: "approveNewSubgroupMember",
  approveSubgroupAssignment: "approveSubgroupAssignment",
  assignMemberToSubgroup: "assignMemberToSubgroup",
  createSubgroup: "createSubgroup",
  defectFromCommunity: "defectFromCommunity",
  defineSecretarySuccessorList: "defineSecretarySuccessorList",
  divideShortfall: "divideShortfall",
  emergencySecretaryHandoff: "emergencySecretaryHandoff",
  handoverSecretaryRoleToSuccessor: "handoverSecretaryRoleToSuccessor",
  initiateDefaultState: "initiateDefaultState",
  injectFunds: "injectFunds",
  issueRefund: "issueRefund",
  joinCommunity: "joinCommunity",
  leaveSubgroup: "leaveSubgroup",
  payPremium: "payPremium",
  acceptSecretaryRole: "acceptSecretaryRole",
  submitClaim: "submitClaim",
  updateCoverageAmount: "updateCoverageAmount",
  whitelistClaim: "whitelistClaim",
  withdrawClaimFund: "withdrawClaimFund",
  withdrawRefund: "withdrawRefund",
  /** @deprecated unimplemented in tandapay write methods abstraction */
  emergencyWithdraw: "deprecated_emergencyWithdraw",
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
  advancePeriod: "advancePeriod",
  extendPeriodByOneDay: "extendPeriodByOneDay",
  addMemberToCommunity: "addMemberToCommunity",
  approveNewSubgroupMember: "approveNewSubgroupMember",
  approveSubgroupAssignment: "approveSubgroupAssignment",
  assignMemberToSubgroup: "assignMemberToSubgroup",
  createSubgroup: "createSubgroup",
  defectFromCommunity: "defectFromCommunity",
  defineSecretarySuccessorList: "defineSecretarySuccessorList",
  divideShortfall: "divideShortfall",
  emergencySecretaryHandoff: "emergencySecretaryHandoff",
  handoverSecretaryRoleToSuccessor: "handoverSecretaryRoleToSuccessor",
  initiateDefaultState: "initiateDefaultState",
  injectFunds: "injectFunds",
  issueRefund: "issueRefund",
  joinCommunity: "joinCommunity",
  leaveSubgroup: "leaveSubgroup",
  payPremium: "payPremium",
  acceptSecretaryRole: "acceptSecretaryRole",
  submitClaim: "submitClaim",
  updateCoverageAmount: "updateCoverageAmount",
  whitelistClaim: "whitelistClaim",
  withdrawClaimFund: "withdrawClaimFund",
  withdrawRefund: "withdrawRefund",
  /** @deprecated unimplemented in tandapay write methods abstraction */
  deprecated_emergencyWithdraw: "emergencyWithdraw",
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
  } ? S extends "view" ? never : N : never;
}[number];

/** All raw write method names from TandaPay's smart contract ABI */
export type RawTandaPayWriteMethodNames = ExtractWriteMethodNames<
  typeof TandaPayInfo.abi
>;

/** All tandapay write method aliases used in this codebase */
export type TandaPayWriteMethodAliases = keyof typeof AliasToRawWriteMethodMapping;

// check that all write methods have an alias
type AllWriteMethodsMappedCheck = Exclude<
  RawTandaPayWriteMethodNames, keyof typeof RawWriteMethodToAliasMapping
> extends never ? true : { error: "Missing write methods in RawWriteMethodToAliasMapping"; };

// ensure that all raw-alias mappings have a corresponding alias-raw mapping
type ForwardToBackwardCheck = {
  [K in keyof typeof RawWriteMethodToAliasMapping]: (typeof RawWriteMethodToAliasMapping)[K] extends keyof typeof AliasToRawWriteMethodMapping ? (typeof AliasToRawWriteMethodMapping)[(typeof RawWriteMethodToAliasMapping)[K]] extends K ? true : {
    error: "Mismatch in mapping";
    key: K;
    forward: (typeof RawWriteMethodToAliasMapping)[K];
    backward: (typeof AliasToRawWriteMethodMapping)[(typeof RawWriteMethodToAliasMapping)[K]];
  } : {
    error: "Missing in AliasToRawWriteMethodMapping";
    key: K;
    value: (typeof RawWriteMethodToAliasMapping)[K];
  };
};

// collect any missing mappings
type ForwardToBackwardError = {
  [K in keyof ForwardToBackwardCheck]: ForwardToBackwardCheck[K] extends true ? never : ForwardToBackwardCheck[K];
}[keyof ForwardToBackwardCheck];

// this is the final check. Both should extend true if there are no issues
type VerifyMappings = [
  AllWriteMethodsMappedCheck extends true ? true : never,
  ForwardToBackwardError extends never ? true : never
];

// create a dummy variable that will cause an error if all methods aren't properly mapped
const allMapped: VerifyMappings = [true, true] as const;
