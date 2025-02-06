import { Address, getContract, Hash, TransactionReceipt } from "viem";
import { TandaPayContract, WriteableClient } from "./types";
import { TandaPayInfo } from "../_contracts/TandaPay";
import { waitForTransactionReceipt } from "viem/actions";

/** Return type of all TandaPayWriteMethods -- either returns a transaction hash or transaction receipt. */
export type TandaPayWriteMethodReturnType = Promise<Hash | TransactionReceipt>;

/** Abstract class template for all TandaPay smart contract write interactions. */
export abstract class TandaPayWriteMethods<TClient extends WriteableClient = WriteableClient> {
    /** client used to construct the contract instance. */
    protected client: TClient;
    /** instance of the tandapay contract we are interacting with */
    protected contractInstance: TandaPayContract<TClient>;
    /** If true, all write methods will wait for the transaction to be included in a block (one confirmation) */
    public waitForTransactionReceipts: boolean = true;

    /** shorthand for referencing the contractInstance's simulate method */
    protected get simulate() {
        return this.contractInstance.simulate;
    }

    /** shorthand for referencing the contractInstance's write method */
    protected get write() {
        return this.contractInstance.write;
    }

    /** 
     * Deals with hashes at the end of every write method call. if `waitForTransactionReceipts` is set 
     * to true, then it waits for the transaction to be included in a block (one confirmation) then
     * returns the transaction receipt
    */
    protected async handleHash(hash: Hash): TandaPayWriteMethodReturnType {
        if (this.waitForTransactionReceipts) {
            return await waitForTransactionReceipt(this.client, { hash }) as TransactionReceipt;
        } 

        return hash as Hash;
    }

    /**
     * @param client Any client that extends `WriteableClient`, e.g. has WalletActions, an Account, and
     * a Chain.
     * @param address The address of the smart contract
     */
    constructor(client: TClient, address: Address) {
        this.client = client;
        this.contractInstance = getContract({
            abi: TandaPayInfo.abi,
            address: address,
            client: client,
        });
    }
}