import { Account, Address, Chain, Client, getContract, GetContractReturnType, Hex, PublicClient, Transport, WalletClient } from "viem";
import { TandaPayInfo } from "../_contracts/TandaPay";
import { simulateContract } from "viem/actions";
import { WriteableClient } from "./TandaPayWriteMethods";

// Generic type for the contract instance:
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
    Collapsed = 3,
}

// IDEA:
// - have member/secretary write methods be a member of this class
// - have read methods be a member of this class
// - the configuration can change depending on the client, so if a regular public client is passed, just
//   read methods will be available, but if a walletclient is passed, it could make either member/secretary
//   methods available
export class TandaPayManager<TClient extends Client> {
    private contractInstance: TandaPayContract<TClient>;
    private client: TClient;

    constructor(contract_address: Hex, client: TClient) {
        this.contractInstance = getContract({
            address: contract_address,
            abi: TandaPayInfo.abi,
            client: client,
        });

        this.client = client;
    }
}
