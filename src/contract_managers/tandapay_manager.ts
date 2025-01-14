import { Client, getContract, Hex } from "viem";
import { TandaPayInfo } from "../_contracts/TandaPay";
import { TandaPayContract } from "./types";


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
