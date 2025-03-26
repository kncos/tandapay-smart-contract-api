import { Address } from "viem";
import { ReadableClient, WriteableClient } from "types";

export type ClientAndAddress<TClient extends ReadableClient | WriteableClient> =
  {
    client: TClient;
    contractAddress: Address;
  };

export type ReadableClientAndAddress = ClientAndAddress<ReadableClient>;
export type WriteableClientAndAddress = ClientAndAddress<WriteableClient>;
