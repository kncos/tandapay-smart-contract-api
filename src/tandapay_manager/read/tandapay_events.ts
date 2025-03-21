import { ReadableClient } from "types";
import {
  AliasToRawEventNameMapping,
  TandaPayEventAlias,
  tandaPayEventAliasesToAbiEvents,
  tandaPayEventAliasToAbiEvent,
} from "tandapay_interface/event_types";
import {
  AbiEvent,
  Address,
  BlockNumber,
  BlockTag,
  GetLogsReturnType,
  Hash,
} from "viem";

/** Parameters passed to the constructor of `TandaPayEvents` */
export interface TandaPayEventsParameters {
  /** any readable client */
  client: ReadableClient;
  /** address of the tandapay smart contract */
  address: Address;
}

/** argument for getLogs in TandaPayEvents */
export type GetEventLogParameters = (
  | { event: TandaPayEventAlias }
  | { events?: TandaPayEventAlias[] }
) &
  (
    | { fromBlock?: BlockNumber | BlockTag; toBlock?: BlockNumber | BlockTag }
    | { blockHash: Hash }
  ) & { strict?: boolean };

/**
 * thin wrapper around viem's `getLogs` that gives us an object so we don't need to keep
 * passing around the smart contract address or a client, and also allows us to use our
 * TandaPayEventName aliases for better code readability
 */
export class TandaPayEvents {
  client: ReadableClient;
  address: Address;

  constructor(params: TandaPayEventsParameters) {
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
    let opts = {};

    // enable strict mode support
    if ("strict" in params) {
      opts = {
        strict: params.strict ? params.strict : false,
      };
    }

    // if we have a singular event...
    if ("event" in params) {
      opts = {
        ...opts,
        event: tandaPayEventAliasToAbiEvent(params.event),
      };
      // if we have multiple events
    } else {
      // if it was undefined, just default to all events
      if (params.events === undefined)
        params.events = Object.keys(
          AliasToRawEventNameMapping,
        ) as TandaPayEventAlias[];

      opts = {
        ...opts,
        events: tandaPayEventAliasesToAbiEvents(params.events),
      };
    }

    // if fromBlock or toBlock were provided (or left as undefined but no blockHash was provided)
    // then add those options in. If they're undefined, it will still work fine
    if ("fromBlock" in params || "toBlock" in params) {
      opts = {
        ...opts,
        fromBlock: params.fromBlock,
        /** Here, we'll have this default to `safe` */
        toBlock: params.toBlock ? params.toBlock : "safe",
      };
      // otherwise if blockHash was provided, we'll use that
    } else if ("blockHash" in params) {
      opts = {
        ...opts,
        blockHash: params.blockHash,
      };
    }

    // finally, use viem's `getLogs` with our built up options
    return (await this.client.getLogs({
      ...opts,
      address: this.address,
    })) as GetLogsReturnType<AbiEvent>;
  }
}
