import { Client, Hash, PublicActions, TransactionReceipt, WalletActions } from "viem";
import { TandaPayContract } from "./types";


export abstract class TandaPayWriteMethods<TClient extends Client & WalletActions> {
    protected contractInstance: TandaPayContract<TClient>;
    /** 
     * This is any viem client that has the `waitForTransactionReceipt` public action functionality. It's optional,
     * but if it's defined, TandaPayWriteMethods will use it to wait for transaction receipts. Likewise, this
     * functionality can be disabled by simply setting this to undefined again.
     */
    public txWaitClient?: TClient & PublicActions; 

    protected get simulate() {
        return this.contractInstance.simulate;
    }

    protected get write() {
        return this.contractInstance.write;
    }

    protected async handleHash(hash: Hash): Promise<Hash | TransactionReceipt> {
        if (this.txWaitClient) {
            return await this.txWaitClient.waitForTransactionReceipt({ hash }) as TransactionReceipt;
        } 
        throw new Error("should never go this way");
        //return hash as Hash;
    }

    constructor(contractInstance: TandaPayContract<TClient>, txWaitClient?: TClient & PublicActions) {
        this.contractInstance = contractInstance;
        this.txWaitClient = txWaitClient;
    }
}