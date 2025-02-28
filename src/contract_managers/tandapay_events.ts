import { TandaPayInfo } from "_contracts/TandaPay";
import { RawTandaPayEventNames, ReadableClient, WriteableClient } from "types";
import { Address, Hash, publicActions } from "viem";

/** Maps event names with better naming conventions to the ones used in the smart contract */
export const EventNameMap = {
  addedToCommunity: 'AddedToCommunity',
  additionalDayAdded: 'AdditionalDayAdded',
  approvedNewSubgroupPeer: 'ApproveNewGroupMember',
  approvedOwnSubgroupAssignment: 'ApprovedGroupAssignment',
  assignedToSubgroup: 'AssignedToSubGroup',
  claimSubmitted: 'ClaimSubmitted',
  claimWhitelisted: 'ClaimWhiteListed',
  communityCollapsed: 'CommunityCollapsed',
  coverageRequirementUpdated: 'CoverageUpdated',
  enteredDefaultState: 'DefaultStateInitiatedAndCoverageSet',
  enteredEmergencyState: 'EmergencyBegan',
  emergencyPaymentIssued: 'EmergencyPayment',
  emergencySecretaryHandover: 'EmergencyhandOverSecretary',
  exitedFromSubgroup: 'ExitedFromSubGroup',
  forfeitedClaimReward: 'ForfeitClaim',
  claimRewardClaimed: 'FundClaimed',
  secretaryInjectedFunds: 'FundInjected',
  memberJoinedCommunity: 'JoinedToCommunity',
  leftFromSubgroup: 'LeavedFromGroup',
  /** @deprecated unused in the smart contract code, left here to satisfy the type checker in a specific area */
  deprecated_doNotUse_ManualCollapseCancelled: 'ManualCollapseCancelled',
  manualCollapseCancelled: 'ManualCollapsedCancelled',
  manualCollapseInitiated: 'ManualCollapsedHappenend',
  memberDefected: 'MemberDefected',
  memberStatusUpdated: 'MemberStatusUpdated',
  advancedPeriod: 'NextPeriodInitiated',
  premiumPaid: 'PremiumPaid',
  refundsIssued: 'RefundIssued',
  refundClaimed: 'RefundWithdrawn',
  successorAcceptsSecretaryRole: 'SecretaryAccepted',
  secretaryInitiatesHandover: 'SecretaryHandOverEnabled',
  secretaryDefinesSuccessors: 'SecretarySuccessorsDefined',
  secretaryRoleTransferred: 'SecretaryTransferred',
  shortfallDivided: 'ShortFallDivided',
  newSubgroupCreated: 'SubGroupCreated',
} as const;

/** All of te renamed event name aliases that we use in this codebase. Mapped to RawTandaPayEventName */
export type TandaPayEventName = keyof typeof EventNameMap;
/** Type of the mapping between TandaPayEventName: RawTandaPayEventName */
export type TandaPayEventNameToRawEventName = {
  [K in TandaPayEventName]: typeof EventNameMap[K];
};

/** given a TandaPayEventName alias, returns the actual abi entry for the corresponding event on the smart contract */
export function tandaPayEventNameToAbiEvent(event: TandaPayEventName) {
  let [e] = TandaPayInfo.abi.filter(item => item.type === "event" && item.name === EventNameMap[event])
  return e;
}

/** given a TandaPayEventName alias, returns an array of actual abi entries for the corresponding events on the smart contract */
export function tandaPayEventNamesToAbiEvents(events: TandaPayEventName[]) {
  const rawNames = new Set<RawTandaPayEventNames>(events.map(event => EventNameMap[event]));
  return TandaPayInfo.abi.filter(item => item.type === "event" && rawNames.has(item.name));
}

/** Parameters passed to the constructor of `TandaPayEvents` */
export interface TandaPayEventsParameters<TClient extends ReadableClient> {
  /** any readable client */
  client: TClient;
  /** address of the tandapay smart contract */
  address: Address;
}

/** argument for getLogs in TandaPayEvents */
export type GetEventLogParameters = 
 & ({ event: TandaPayEventName } | { events?: TandaPayEventName[] })
 & ({ fromBlock?: bigint; toBlock?: bigint; } | { blockHash: Hash });

/** 
 * thin wrapper around viem's `getLogs` that gives us an object so we don't need to keep
 * passing around the smart contract address or a client, and also allows us to use our
 * TandaPayEventName aliases for better code readability
 */
export class TandaPayEvents<TClient extends ReadableClient> {
  client: TClient;
  address: Address;

  constructor (params: TandaPayEventsParameters<TClient>) {
    this.client = params.client;
    this.address = params.address;
  }

  /**
   * Returns an array of logs that match the given TandaPayEventName aliases
   * @param params event or events to retrieve, as well as a fromBlock/toBlock range or a block hash to look up
   * @returns A list of viem `Log[]` with all of the logs for the corresponding events
   */
  async getLogs(params: GetEventLogParameters) {
    // build up options for the method call
    let opts = {}

    // if we have a singular event...
    if ('event' in params) {
      opts = {
        ...opts,
        event: tandaPayEventNameToAbiEvent(params.event),
      }
    // if we have multiple events
    } else if ('events' in params) {
      // if it was undefined, just default to all events
      if (params.events === undefined)
        params.events = Object.keys(EventNameMap) as TandaPayEventName[];

      opts = {
        ...opts,
        events: tandaPayEventNamesToAbiEvents(params.events),
      }
    }

    // if fromBlock or toBlock were provided (or left as undefined but no blockHash was provided)
    // then add those options in. If they're undefined, it will still work fine
    if ('fromBlock' in params || 'toBlock' in params) {
      opts = {
        ...opts,
        fromBlock: params.fromBlock,
        toBlock: params.toBlock,
      }
    // otherwise if blockHash was provided, we'll use that
    } else if ('blockHash' in params) {
      opts = {
        ...opts,
        blockHash: params.blockHash,
      }
    }

    // finally, use viem's `getLogs` with our built up options
    return await this.client.getLogs({
      ...opts,
      address: this.address
    });
  }
}