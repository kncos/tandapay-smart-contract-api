import { Account, Chain, Client, getContract, GetContractReturnType, Hex, PublicClient, Transport, WalletClient } from "viem";
import { TandaPayInfo } from "../_contracts/TandaPay";

type ContractClient = Client | { public: Client; wallet: Client };
//type TandaPayContractInstance = GetContractReturnType<typeof TandaPayInfo.abi, WalletClient>

export default class TandaPayManager {
    private contractInstance;//: TandaPayContractInstance;

    constructor(contract_address: Hex, client: WalletClient<Transport, Chain, Account>) {
        this.contractInstance = getContract({
            address: contract_address,
            abi: TandaPayInfo.abi,
            client: client,
        });
    }

    async getSecretary(): Promise<Hex> {
        return this.contractInstance.read.secretary();
    }

    // TODO: implement the methods needed for secretaries to start a community
    async addMember(address: Hex) {
        const { request } = await this.contractInstance.simulate.addToCommunity([address]);
        await this.contractInstance.write.addToCommunity([address]);
    }
}

/*
Argument of type '
{ 
address: `0x${string}`; 
type?: "legacy" | undefined; 
value?: undefined; 
gas?: bigint | undefined; 
nonce?: number | undefined; 
maxFeePerBlobGas?: undefined; 
gasPrice?: bigint | undefined; ... 13 more ...; 
account?: undefined; } | ... 18 more ... | { ...; }' 

is not assignable to parameter of type 

'{ 
type?: "legacy" | undefined; 
account: `0x${string}` | Account | null; 
chain: Chain | null | undefined; 
value?: undefined; 
gas?: bigint | undefined; 
nonce?: number | undefined; ... 10 more ...; 
dataSuffix?: `0x${string}` | undefined; } | { ...; } | { ...; } | { ...; } | { ...; }'.

*/