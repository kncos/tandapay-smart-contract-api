/**
 * @author Kevin C.
 * @fileoverview Exposes types, type guards, and enums for contract managers.
 * @note This file is organized in the following manner: Type guard methods, then type definitions, then enums, then miscellaneous (e.g. aliases, json replacers)
 */

import {
  Account,
  Address,
  Chain,
  Client,
  GetContractReturnType,
  Hex,
  publicActions,
  PublicClient,
  walletActions,
  WalletClient,
} from "viem";
import { TandaPayInfo } from "./_contracts/TandaPay";
import { bigIntJsonReplacer } from "./utils";
import MemberWriteMethods from "contract_managers/member_write_methods";
import PublicWriteMethods from "contract_managers/public_write_methods";
import SecretaryWriteMethods from "contract_managers/secretary_write_methods";

/** Tests if a viem client has been extended with WalletActions at runtime */
export function hasWalletActions<TClient extends Client>(client: TClient) {
  const wa = walletActions(client);
  return Object.keys(wa).every(
    (key) => typeof (client as Record<string, unknown>)[key] !== "undefined",
  );
}

/** Tests if a viem client has been extended with PublicActions at runtime */
export function hasPublicActions<TClient extends Client>(client: TClient) {
  const pa = publicActions(client);
  return Object.keys(pa).every(
    (key) => typeof (client as Record<string, unknown>)[key] !== "undefined",
  );
}

/**
 * Any viem client that at least has: A defined transport, a defined chain, a defined account,
 * and is extended with `WalletActions`.
 */
export interface WriteableClient extends WalletClient {
  account: Account;
  chain: Chain;
}

/**
 * Any viem client that at least has: A defined transport, a defined chain, and
 * is extended with PublicActions. Account is optional.
 */
export interface ReadableClient extends PublicClient {
  chain: Chain;
}

/**
 * Generic type representing instances of the TandaPay smart contract, given by Viem's getContract method.
 * For more information about contract instances or getContract, see: https://viem.sh/docs/contract/getContract
 */
export type TandaPayContract<TClient extends Client> = GetContractReturnType<
  typeof TandaPayInfo.abi,
  TClient,
  Address
>;

/** Contains information about a given subgroup, including it's subgroup ID, addresses of its members, and whether it is a valid subgroup */
export type SubgroupInfo = {
  /** the Subgroup ID */
  id: bigint;
  /** Addresses of each member in this subgroup */
  members: readonly Hex[];
  /** validity of the subgroup (a subgroup is valid if it has between 4 and 7 members, inclusive) */
  isValid: boolean;
};

/**
 * Contains information about a given claim, including the Claim ID, the amount, whether it was whitelisted by the secretary,
 * the wallet address of the claimant, the subgroup ID of the claimant, and whether or not the claimant has accepted the funds
 * or has chosen to relinquish them.
 */
export type ClaimInfo = {
  /** Claim ID */
  id: bigint;
  /** Period ID the claim occurred in */
  periodId: bigint;
  /** Amount of the claim */
  amount: bigint;
  /** Whether the claim was whitelisted by the secretary */
  isWhitelisted: boolean;
  /** Wallet address of the claimant */
  claimantWalletAddress: Hex;
  /** ID of the subgroup the claimant belongs to */
  claimantSubgroupId: bigint;
  /** Whether or not the claimant has claimed these funds */
  hasClaimantClaimedFunds: boolean;
};

/**
 * Contains information about a given member of the TandaPay community.
 * TODO: Currently, these variables represent what I think each value does, but more experimentation is needed,
 * TODO: since some of them are ambiguous and undocumented within the smart contract source code.
 */
export type MemberInfo = {
  /** Member ID */
  id: bigint;
  /** Period ID the member info is associated with */
  periodId: bigint;
  /** ID of the subgroup this member belongs to */
  subgroupId: bigint;
  /** This member's wallet address */
  walletAddress: Hex;
  /** Amount the member contributed to the community escrow this period */
  communityEscrowAmount: bigint;
  /** Amount the member contributed to their savings escrow this period */
  savingsEscrowAmount: bigint;
  /** Pending refund the user has */
  pendingRefundAmount: bigint;
  /** Refunds that are available for the user to withdraw */
  availableToWithdrawAmount: bigint;
  /** Whether or not the user has coverage this period (whether or not they can make a claim) */
  isEligibleForCoverageThisPeriod: boolean;
  /** Whether or not the user paid their premium this period. */
  isPremiumPaidThisPeriod: boolean;
  /**  */
  queuedRefundAmountThisPeriod: bigint;
  memberStatus: MemberStatus;
  assignmentStatus: AssignmentStatus;
};

/** contains information about the period, including it's ID, start/end times, total coverage, total premiums paid, and all claim IDs */
export type PeriodInfo = {
  /** this is the ID of the period */
  id: bigint;
  /** The timestamp when the period begins */
  startTimestamp: bigint;
  /** This is the timestamp that the period ended at, or is currently scheduled to end at. Warning: for current periods, the secretary can push this back. */
  endTimestamp: bigint;
  /** This is the total amount of coverage that the community had this period */
  coverageAmount: bigint;
  /** Pretty sure this includes savings contributions */
  totalPremiumsPaid: bigint;
  /** an array contianing the IDs of each claim that occurred this period */
  claimIds: readonly bigint[];
};

/** enum type representing the different states the TandaPay community can be in */
export enum TandaPayState {
  /**
   * Initialization state, the TandaPay community starts in this state. The smart contract requires at least 12 members to
   * be added to the community, and for them to be assigned into at least 3 subgroups, before the state can be updated to default.
   * Additional requirements (or warnings) should include: 1.) secretary has defined at least 2 successors, 2.) everyone has enough
   * to cover 110% of their premium, so that when they pay 220% can be paid in the first default period.
   */
  Initialization = 0,
  /** Default state of the community, this happens when the community hasn't had any claims that caused individuals to defect */
  Default,
  /** Fractured state of the community, the community enters this state when there have been claims and at least 12% of the community defected */
  Fractured,
  /** Collapsed state. The community is essentially destroyed. They failed to meet their coverage requirement and thus have been terminated. */
  Collapsed,
}

/** enum type representing  the different roles a member can have in a TandaPay community */
export enum TandaPayRole {
  /** None, this is a default placeholder to represent individuals not affiliated with the community */
  None = 0,
  /** A regular member of the TandaPay community, who does not have privileges to perform secretary write actions */
  Member,
  /** The secretary of the TandaPay community. Has permissions to perform secretary write actions */
  Secretary,
}

/** enum type representing the status of a member as it relates to their subgroup assignment. */
export enum AssignmentStatus {
  /**
   * The member has not been assigned to a subgroup by the secretary.
   * @deprecated This doesn't appear to be used in the smart contract? except maybe as a default value
   */
  Unassigned = 0,
  /** The member has been added to the community, but not assigned to a subgroup yet. */
  AddedBySecretery,
  /** The member has been assigned to a subgroup by the secretary */
  AssignedToGroup,
  /**
   * If a member is reorging (changing subgroups because their previous subgroup became invalid), the member has to approve of their new
   * subgroup assignment. They receive this state after the secretary has assigned them to a group, AND the member themselves has approved it.
   */
  ApprovedByMember,
  /**
   * If a member is reorging (changing subgroups because their previous subgroup became invalid), first the secretary has to assign them to
   * a new subgroup, then the member themselves has to approve this new subgroup assignment, and finally a member of that subgroup must approve
   * for them to join.
   * @deprecated It seems like this value goes ununsed in the smart contract, and instead, when a subgroup member approves them, they go straight
   *  to assignment Successful
   */
  ApprovedByGroupMember,
  /** The member has successfully been assigned to a subgroup */
  AssignmentSuccessful,
  /**
   * The member is reorging (changing subgroups because their previous subgroup became invalid), and they refused the new subgroup
   * that the secretary assigned them to
   */
  CancelledByMember,
  /**
   * The member is reorging (changing subgroups because their previous subgroup became invalid), and one of the members of their new subgroup
   * veto'd them joining the subgroup
   */
  CancelledByGroupMember,
}

/**
 * Represents a member's status within a TandaPay community, as it relates to their premium payments, subgroup
 * dynamics, and how they will be treated w.r.t. claims and coverage.
 */
export enum MemberStatus {
  /** @deprecated Doesn't seem to be used in the smart contract? could be a default placeholder. Called `UnAssigned` in the smart contract */
  None = 0,
  /**
   * Members seem to get this status upon being added to the community by the secretary. Members who
   * are joining after the community is in the default state must have this status in order to send a
   * "join community" transaction. NOTE: called `Assigned` in the smart contract, renamed to `Added` here
   */
  Added,
  /**
   * Members receive this status if they are joining in the default state, after the secretary has added them to the community,
   * and the member themselves has sent the "join community" transaction.
   */
  New,
  /** @deprecated Seems to be unused in the smart contract, not sure why it's here. Only included for compatibility reasons. */
  SAEPaid,
  /**
   * Members have this status when they have met the criteria of being in a valid subgroup and also paid their premiums.
   * When they have this status, it means that they have active coverage and are allowed to make a claim.
   */
  Valid,
  /**
   * If a member pays their premium, but then individuals in their subgroup leave the community, resulting in their subgroup
   * becoming invalid, they receive this status. When they have this status, they need to reorg into a new subgroup
   */
  PaidInvalid,
  /**
   * If a member fails to pay their premium, but the community is in the default state, this removes their coverage but allows
   * them to remain in the community for an extra period and pay their next premium to get their coverage back.
   */
  UnpaidInvalid,
  /**
   * This means that a member has successfully reorganized into a new subgroup after previously being paid-invalid. They become
   * `Valid` again if their new subgroup doesn't become invalid and they remain in good standing by paying their premiums.
   */
  Reorged,
  /** Users get this status when they leave the community, either by not successfully reorging or by failing to pay premiums. */
  UserLeft,
  /** Users get this status when they opt to defect from the community while having coverage due to disagreeing with a claim.  */
  Defected,
  /** Users get this status when they leave the community following defections. Typically when they leave the community after losing coverage */
  UserQuit,
  /** @deprecated This also seems to not be used by the smart contract. kept for compatibility reasons */
  REJECTEDBYGM,
}

/** Use this replacer when serializing `SubgroupInfo` to json */
export const subgroupInfoJsonReplacer = bigIntJsonReplacer;
/** Use this replacer when serializing `PeriodInfo` to json */
export const periodInfoJsonReplacer = bigIntJsonReplacer;
/** Use this replacer when serializing `ClaimInfo` to json */
export const claimInfoJsonReplacer = bigIntJsonReplacer;
/** use this replacer when serializing `MemberInfo` to json */
export function memberInfoJsonReplacer(key: string, value: unknown): unknown {
  const memberStatusKey = "memberStatus";
  const assignmentStatusKey = "assignmentStatus";

  if (key === memberStatusKey) return MemberStatus[value as MemberStatus];
  else if (key === assignmentStatusKey)
    return AssignmentStatus[value as AssignmentStatus];

  return bigIntJsonReplacer(key, value);
}

/**
 * Utility that allows you to retrieve a union with all public method names given an
 * object type. Omits constructor and methods beginning with `_` (underscore)
 */
export type MethodNames<T> = {
  [K in keyof T]: K extends "constructor"
    ? never
    : T[K] extends Function
      ? K extends `_${string}`
        ? never
        : K
      : never;
}[keyof T];

/** Union type with all public method names on PublicWriteMethods */
export type PublicWriteMethodNames = MethodNames<PublicWriteMethods>;
/** Union type with all public method names on MemberWriteMethods */
export type MemberWriteMethodNames = MethodNames<MemberWriteMethods>;
/** Union type with all public method names on SecretaryWriteMethods */
export type SecretaryWriteMethodNames = MethodNames<SecretaryWriteMethods>;

/**
 * Retrieves all of the names of public methods on any given object
 * @param o Any object type
 * @returns An array with all of the method names on that object
 */
export function getMethodNames(o: object) {
  const names = Object.getOwnPropertyNames(o);
  const methodNames = names.filter((name) => {
    if (name === "constructor") return false;
    const descriptor = Object.getOwnPropertyDescriptor(o, name);
    if (typeof descriptor?.value !== "function") return false;

    return true;
  });
  return methodNames;
}

/** runtime constant, has an array of all method names on PublicWriteMethods */
export const publicWriteMethodNames = getMethodNames(
  PublicWriteMethods.prototype,
) as PublicWriteMethodNames[];
/** runtime constant, has an array of all method names on MemberWriteMethods */
export const memberWriteMethodNames = getMethodNames(
  MemberWriteMethods.prototype,
) as MemberWriteMethodNames[];
/** runtime constant, has an array of all method names on SecretaryWriteMethods */
export const secretaryWriteMethodNames = getMethodNames(
  SecretaryWriteMethods.prototype,
) as SecretaryWriteMethodNames[];
