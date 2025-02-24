export type TandaPayEventName = 
  | "AddedToCommunity"
  | "AdditionalDayAdded"
  | "ApproveNewGroupMember"
  | "ApprovedGroupAssignment"
  | "AssignedToSubGroup"
  | "ClaimSubmitted"
  | "ClaimWhiteListed"
  | "CommunityCollapsed"
  | "CoverageUpdated"
  | "DefaultStateInitiatedAndCoverageSet"
  | "EmergencyBegan"
  | "EmergencyPayment"
  | "EmergencyhandOverSecretary"
  | "ExitedFromSubGroup"
  | "ForfeitClaim"
  | "FundClaimed"
  | "FundInjected"
  | "JoinedToCommunity"
  | "LeavedFromGroup"
  /** @deprecated seems to be unused? */
  | "ManualCollapseCancelled"
  | "ManualCollapsedCancelled"
  | "ManualCollapsedHappenend"
  | "MemberDefected"
  | "MemberStatusUpdated"
  | "NextPeriodInitiated"
  | "PremiumPaid"
  | "RefundIssued"
  | "RefundWithdrawn"
  | "SecretaryAccepted"
  | "SecretaryHandOverEnabled"
  | "SecretarySuccessorsDefined"
  | "SecretaryTransferred"
  | "ShortFallDivided"
  | "SubGroupCreated"


import { TandaPayInfo } from "_contracts/TandaPay";
import { ReadableClient } from "types";
import { Address, GetContractEventsParameters, GetLogsParameters, WatchContractEventParameters } from "viem";

export type GetTandaPayEventsParameters = Omit<GetContractEventsParameters<typeof TandaPayInfo.abi>, 'address' | 'abi'>;
export type WatchTandaPayEventsParameters = Omit<WatchContractEventParameters<typeof TandaPayInfo.abi>, 'address' | 'abi'>;
export type GetTandaPayLogsParameters = Omit<GetLogsParameters, 'address'>;

/** 
 * Thin wrapper around some of viem's event methods. Allows for slightly easier usage with the
 * TandaPay smart contract, removing the need to import the abi or pass a client/address every time.
 * This may be expanded as time goes on to include additional types and functionality
 */
export default class TandaPayWatcher<TClient extends ReadableClient> {
  protected client: TClient;
  protected address: Address;

  /**
   * @param client Any client compliant with `ReadableClient`. This could be a viem client with a defined `chain`
   * @param tpAddress Address of the TandaPay smart contract
   */
  constructor(client: TClient, tpAddress: Address) {
    this.client = client;
    this.address = tpAddress;
  }

  /**
   * Thin wrapper around viem's getEvents. Returns events from this instance of the TandaPay
   * smart contract. Can be narrowed given an eventname, `fromBlock`/`toBlock`, and more.
   * @param params parameters needed to get contract events. Narrow by event name, to/from block, or block hash
   * @returns `Log[]` array for TandaPay contract events. See: `Log` and `getContractEvents` from viem
   */
  async getTandaPayEvent(params: GetTandaPayEventsParameters) {
    // we take out blockHash, fromBlock, and toBlock because there must
    // be some conditional logic that ensures that IF a blockhash is provided,
    // then fromBlock and toBlock are *not* provided.
    const { blockHash, fromBlock, toBlock, ...rest } = params;
   
    const options = {
      address: this.address,
      abi: TandaPayInfo.abi,
      // fromblock/toblock and blockhash are mutually exclusive
      ...(fromBlock || toBlock ? { fromBlock, toBlock } : { blockHash }),
      ...rest
    };

    return await this.client.getContractEvents(options);
  }

  /**
   * Watch for events on this instance of the TandaPay smart contract, performing some action upon
   * logs being received. Thin wrapper around viem's `watchContractEvent`
   * @param params Same as viem's `WatchContractEventParameters` but omits `abi` and `address`.
   * @returns A method to stop watching for events
   */
  watchTandaPayEvent(params: WatchTandaPayEventsParameters) {
    const unwatch = this.client.watchContractEvent({
      ...params,
      address: this.address,
      abi: TandaPayInfo.abi,
    });
    return unwatch;
  }


  async getTandaPayLogs(params: GetTandaPayLogsParameters) {
    const {event, events, args, fromBlock, toBlock, blockHash, ...rest} = params;

    // build up the options
    const options = {
      // pass in the address from this object
      address: this.address,
      // pass in other params that don't need conditional logic
      ...rest,
      // if we have `event`, we can use `event` & `args`, otherwise if we
      // have `events`, we use `events`. Those are mutually exclusive options.
      ...(event ? { event, args } : events ? { events } : {}),
      // if we have fromBlock or toBlock, we can't use blockHash, and vice-versa.
      // those are mutually exclusive options
      ...(fromBlock || toBlock ? { fromBlock, toBlock } : { blockHash }),
    }
    
    return await this.client.getLogs(options);
  }

}