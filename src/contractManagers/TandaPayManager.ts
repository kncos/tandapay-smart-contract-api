import { Account, Address, Chain, Client, getContract, GetContractReturnType, Hex, PublicClient, Transport, WalletClient } from "viem";
import { TandaPayInfo } from "../_contracts/TandaPay";
import { simulateContract } from "viem/actions";
import { WriteableClient } from "./BaseWriteManager";

// Generic type for the contract instance:
export type TandaPayContract<TClient extends Client>
    = GetContractReturnType<typeof TandaPayInfo.abi, TClient, Address>;

export class TandaPayManager<TClient extends Client> {
    private contractInstance: TandaPayContract<TClient>;//: TandaPayContractInstance;
    private client: TClient;

    constructor(contract_address: Hex, client: TClient) {
        this.contractInstance = getContract({
            address: contract_address,
            abi: TandaPayInfo.abi,
            client: client,
        });

        this.client = client;
    }

    async getSecretary(): Promise<Hex> {
        return this.contractInstance.read.secretary();
    }

    
}
