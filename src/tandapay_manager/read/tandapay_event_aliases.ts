import { TandaPayInfo } from "_contracts/TandaPay";
import {
  AbiEvent,
  Address,
  BlockNumber,
  GetEventArgs,
  GetLogsReturnType,
  Hash
} from "viem";

//! note, this seems redundant but it was here because I was using `Exclude` and some other
//! things to narrow it down a bit and remove unused event names. That caused problems but
//! is something to revisit at a later date
type RawEventName = Extract<
  (typeof TandaPayInfo.abi)[number],
  { type: "event" }
>["name"];
/** Raw event names for every TandaPay event */
export type RawTandaPayEventName = RawEventName;

/** This is a stringed union that contains all of the aliases we use for TandaPay events */
export type TandaPayEventAlias =
  | "addedToCommunity"
  | "additionalDayAdded"
  | "approvedNewSubgroupPeer"
  | "approvedOwnSubgroupAssignment"
  | "assignedToSubgroup"
  | "claimSubmitted"
  | "claimWhitelisted"
  | "communityCollapsed"
  | "coverageRequirementUpdated"
  | "enteredDefaultState"
  | "enteredEmergencyState"
  | "emergencyPaymentIssued"
  | "emergencySecretaryHandover"
  | "exitedFromSubgroup"
  | "forfeitedClaimReward"
  | "claimRewardClaimed"
  | "secretaryInjectedFunds"
  | "memberJoinedCommunity"
  | "leftFromSubgroup"
  | "deprecated_doNotUse_ManualCollapseCancelled"
  | "manualCollapseCancelled"
  | "manualCollapseInitiated"
  | "memberDefected"
  | "memberStatusUpdated"
  | "advancedPeriod"
  | "premiumPaid"
  | "refundsIssued"
  | "refundClaimed"
  | "successorAcceptsSecretaryRole"
  | "secretaryInitiatesHandover"
  | "secretaryDefinesSuccessors"
  | "secretaryRoleTransferred"
  | "shortfallDivided"
  | "newSubgroupCreated";

/** Maps event names with better naming conventions to the ones used in the smart contract */
export const RawEventNameToAliasMapping: {
  [K in RawTandaPayEventName]: TandaPayEventAlias;
} = {
  AddedToCommunity: "addedToCommunity",
  AdditionalDayAdded: "additionalDayAdded",
  ApproveNewGroupMember: "approvedNewSubgroupPeer",
  ApprovedGroupAssignment: "approvedOwnSubgroupAssignment",
  AssignedToSubGroup: "assignedToSubgroup",
  ClaimSubmitted: "claimSubmitted",
  ClaimWhiteListed: "claimWhitelisted",
  CommunityCollapsed: "communityCollapsed",
  CoverageUpdated: "coverageRequirementUpdated",
  DefaultStateInitiatedAndCoverageSet: "enteredDefaultState",
  EmergencyBegan: "enteredEmergencyState",
  EmergencyPayment: "emergencyPaymentIssued",
  EmergencyhandOverSecretary: "emergencySecretaryHandover",
  ExitedFromSubGroup: "exitedFromSubgroup",
  ForfeitClaim: "forfeitedClaimReward",
  FundClaimed: "claimRewardClaimed",
  FundInjected: "secretaryInjectedFunds",
  JoinedToCommunity: "memberJoinedCommunity",
  LeavedFromGroup: "leftFromSubgroup",
  ManualCollapseCancelled: "deprecated_doNotUse_ManualCollapseCancelled",
  ManualCollapsedCancelled: "manualCollapseCancelled",
  ManualCollapsedHappenend: "manualCollapseInitiated",
  MemberDefected: "memberDefected",
  MemberStatusUpdated: "memberStatusUpdated",
  NextPeriodInitiated: "advancedPeriod",
  PremiumPaid: "premiumPaid",
  RefundIssued: "refundsIssued",
  RefundWithdrawn: "refundClaimed",
  SecretaryAccepted: "successorAcceptsSecretaryRole",
  SecretaryHandOverEnabled: "secretaryInitiatesHandover",
  SecretarySuccessorsDefined: "secretaryDefinesSuccessors",
  SecretaryTransferred: "secretaryRoleTransferred",
  ShortFallDivided: "shortfallDivided",
  SubGroupCreated: "newSubgroupCreated",
} as const;

/** This maps all of our aliases to their corresponding ABI event names */
export const AliasToRawEventNameMapping: {
  [K in TandaPayEventAlias]: RawTandaPayEventName;
} = {
  addedToCommunity: "AddedToCommunity",
  additionalDayAdded: "AdditionalDayAdded",
  approvedNewSubgroupPeer: "ApproveNewGroupMember",
  approvedOwnSubgroupAssignment: "ApprovedGroupAssignment",
  assignedToSubgroup: "AssignedToSubGroup",
  claimSubmitted: "ClaimSubmitted",
  claimWhitelisted: "ClaimWhiteListed",
  communityCollapsed: "CommunityCollapsed",
  coverageRequirementUpdated: "CoverageUpdated",
  enteredDefaultState: "DefaultStateInitiatedAndCoverageSet",
  enteredEmergencyState: "EmergencyBegan",
  emergencyPaymentIssued: "EmergencyPayment",
  emergencySecretaryHandover: "EmergencyhandOverSecretary",
  exitedFromSubgroup: "ExitedFromSubGroup",
  forfeitedClaimReward: "ForfeitClaim",
  claimRewardClaimed: "FundClaimed",
  secretaryInjectedFunds: "FundInjected",
  memberJoinedCommunity: "JoinedToCommunity",
  leftFromSubgroup: "LeavedFromGroup",
  deprecated_doNotUse_ManualCollapseCancelled: "ManualCollapseCancelled",
  manualCollapseCancelled: "ManualCollapsedCancelled",
  manualCollapseInitiated: "ManualCollapsedHappenend",
  memberDefected: "MemberDefected",
  memberStatusUpdated: "MemberStatusUpdated",
  advancedPeriod: "NextPeriodInitiated",
  premiumPaid: "PremiumPaid",
  refundsIssued: "RefundIssued",
  refundClaimed: "RefundWithdrawn",
  successorAcceptsSecretaryRole: "SecretaryAccepted",
  secretaryInitiatesHandover: "SecretaryHandOverEnabled",
  secretaryDefinesSuccessors: "SecretarySuccessorsDefined",
  secretaryRoleTransferred: "SecretaryTransferred",
  shortfallDivided: "ShortFallDivided",
  newSubgroupCreated: "SubGroupCreated",
} as const;

/** Accepts a raw TandaPay event name and returns an abi item for that event */
export function tandaPayEventNameToAbiEvent(eventName: RawTandaPayEventName) {
  const [e] = TandaPayInfo.abi.filter(
    (item) => item.type === "event" && item.name === eventName,
  );
  return e;
}

/** Accepts an array of raw TandaPay event names and returns an array of abi items for those events */
export function tandaPayEventNamesToAbiEvents(
  eventNames: RawTandaPayEventName[],
) {
  const rawNames = new Set<RawTandaPayEventName>(eventNames);
  return TandaPayInfo.abi.filter(
    (item) => item.type === "event" && rawNames.has(item.name),
  );
}

/** Accepts a TandaPay event alias and returns the abi item for its corresponding event */
export function tandaPayEventAliasToAbiEvent(alias: TandaPayEventAlias) {
  return tandaPayEventNameToAbiEvent(AliasToRawEventNameMapping[alias]);
}

/** Accepts an array of TandaPay event aliases and returns the abi items for the corresponding events */
export function tandaPayEventAliasesToAbiEvents(aliases: TandaPayEventAlias[]) {
  return tandaPayEventNamesToAbiEvents(
    aliases.map((alias) => AliasToRawEventNameMapping[alias]),
  );
}

/** A type predicate that returns whether or not a given string is a raw TandaPay event name */
export function isRawTandaPayEventName(
  eventName: string,
): eventName is RawTandaPayEventName {
  return eventName in RawEventNameToAliasMapping;
}

/** Returns an array with all of the keys you would expect in the arguments for a given raw TandaPay event name */
export function getRawTandaPayEventArgs(rawEventName: RawTandaPayEventName) {
  const event = TandaPayInfo.abi
    .filter((t) => t.type === "event")
    .find((e) => e.name === rawEventName);
  if (!event) return [];

  return event.inputs.map((input) => input.name);
}

/**
 * A type predicate that determines if `args` is the correct set of arguments that you would expect on the given `eventName`
 * @param eventName a `RawTandaPayEventName` -- e.g., not an alias.
 * @param args The list of arguments you want to check
 * @returns whether or not the `args` are the ones that go with the given `eventName` on the ABI
 */
export function isValidEventArgs(
  eventName: RawTandaPayEventName,
  args: Record<string, unknown> | readonly unknown[],
): args is TandaPayEventArgs<typeof eventName> {
  const expectedArgNames = getRawTandaPayEventArgs(eventName);
  const hasAllProps = expectedArgNames.every((name) => name in args);
  return hasAllProps;
}

/**
 * to be used with `TandaPayEvents`, or `events...` on TandaPayManager. Converts the output of `getLogs` to a
 * internal type for the logs instead of the viem default
 * @param logs the return type from getLogs -- expects this to be AbiEvent only. `GetLogsReturnType<AbiEvent>`
 * @returns the logs but converted into `TandaPayLog[]` which is a more simple internal type we'll use for
 * logs with the TandaPay smart contract events
 */
export function toTandaPayLogs(
  logs: GetLogsReturnType<AbiEvent>,
): TandaPayLog[] {
  const tandaPayLogs: TandaPayLog[] = [];
  for (const l of logs) {
    // ensure that the eventName is a valid event on the TandaPay ABI
    if (!isRawTandaPayEventName(l.eventName)) continue;

    // ensure that the args are the appropriate ones for this event
    if (!isValidEventArgs(l.eventName, l.args)) continue;

    // convert to tandaPayLogs
    tandaPayLogs.push({
      address: l.address,
      alias: RawEventNameToAliasMapping[l.eventName],
      blockHash: l.blockHash,
      blockNumber: l.blockNumber,
      eventName: l.eventName,
      transactionHash: l.transactionHash,
      transactionIndex: l.transactionIndex,
      logIndex: l.logIndex,
      args: l.args,
    });
  }
  return tandaPayLogs;
}

/** The arguments for any given TandaPay raw event name */
export type TandaPayEventArgs<
  rawEventName extends RawTandaPayEventName = RawTandaPayEventName,
  strict = boolean,
> = Exclude<
  GetEventArgs<
    typeof TandaPayInfo.abi,
    rawEventName,
    {
      EnableUnion: false;
      IndexedOnly: false;
      Required: strict extends boolean ? strict : false;
    }
  >,
  readonly unknown[]
>;

/** Represents one log for a given TandaPayEvent */
export type TandaPayLog<
  rawEventName extends RawTandaPayEventName = RawTandaPayEventName,
  /** This changes whether or not the properties in args are allowed to be undefined */
  strict extends boolean | undefined = undefined,
  /** This changes whether or not the logs can be pending */
  pending extends boolean = boolean,
> = {
  /** the smart contract address */
  address: Address;
  /** alias that we're using to refer to this event */
  alias: (typeof RawEventNameToAliasMapping)[rawEventName];
  /** Hash of the block containing this log or `null` if pending */
  blockHash: pending extends true ? null : Hash;
  /** Number of the block containing this log or `null` if pending */
  blockNumber: pending extends true ? null : BlockNumber;
  /** original abi event name on the smart contract */
  eventName: rawEventName;
  /** Hash of the transaction that created this log or `null` if pending */
  transactionHash: pending extends true ? null : Hash;
  /** Index of the transaction that created this log or `null` if pending */
  transactionIndex: pending extends true ? null : number;
  /** Index of this log within its block or `null` if pending */
  logIndex: pending extends true ? null : number;
  /** `true` if this filter has been destroyed and is invalid */
  //removed: boolean,
  /**
   * Arguments that were passed to the emitted event. This will include
   * useful information about the event that has been emitted
   */
  args: TandaPayEventArgs<rawEventName, strict>;
};
