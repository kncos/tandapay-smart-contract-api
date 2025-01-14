import { Account, Address, Chain, Client, GetContractReturnType } from "viem";
import { TandaPayInfo } from "../_contracts/TandaPay";

// client type that results in a writeable contract instance
export type WriteableClient = Client & { chain: Chain; account: Account; };

// Generic type for contract instances for the TandaPay smart contract
export type TandaPayContract<TClient extends Client>
    = GetContractReturnType<typeof TandaPayInfo.abi, TClient, Address>;

// enum type representing the different states the TandaPay community can be in
//? when i wrote this enum, it already knew i wanted to write initialization, default,
//? fractured, and collapsed. How??? I didn't even know my IDE had this capability, afaik
//? those terms aren't referenced anywhere in this code base yet, only in the SC code
export enum TandaPayState {
    Initialization = 0,
    Default = 1,
    Fractured = 2,
    Collapsed = 3
}
