import {
  TandaPayEventAlias,
  AliasToRawEventNameMapping,
  TandaPayEventAliasArgs,
  isRawTandaPayEventName,
  isValidEventArgs,
  RawEventNameToAliasMapping,
} from "tandapay_manager/read/event_types";
import { Address, Hash, BlockNumber, AbiEvent, GetLogsReturnType } from "viem";

/** Represents one log for a given TandaPayEvent */
export type TandaPayLog<
  eventAlias extends TandaPayEventAlias = TandaPayEventAlias,
  /** This changes whether or not the properties in args are allowed to be undefined */
  strict extends boolean | undefined = undefined,
  /** This changes whether or not the logs can be pending */
  pending extends boolean = boolean,
> = {
  /** the smart contract address */
  address: Address;
  /** alias that we're using to refer to this event */
  alias: eventAlias;
  /** Hash of the block containing this log or `null` if pending */
  blockHash: pending extends true ? null : Hash;
  /** Number of the block containing this log or `null` if pending */
  blockNumber: pending extends true ? null : BlockNumber;
  /** original abi event name on the smart contract */
  eventName: (typeof AliasToRawEventNameMapping)[eventAlias];
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
  args: TandaPayEventAliasArgs<eventAlias, strict>;
};

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

