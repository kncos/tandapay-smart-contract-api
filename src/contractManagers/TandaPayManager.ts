import { Client, getContract, GetContractReturnType, Hex, PublicClient, WalletClient } from "viem";
import { TandaPayInfo } from "../_contracts/TandaPay";

type ContractClient = Client | { public: Client; wallet: Client };
type TandaPayContractInstance = GetContractReturnType<typeof TandaPayInfo.abi, ContractClient>

export default class TandaPayManager {
    private contractInstance: TandaPayContractInstance;

    constructor(contract_address: Hex, client: ContractClient) {
        this.contractInstance = getContract({
            address: contract_address,
            abi: TandaPayInfo.abi,
            client: client,
        });
    }

    async getSecretary(): Promise<any> {
        return this.contractInstance.read.secretary();
    }
}