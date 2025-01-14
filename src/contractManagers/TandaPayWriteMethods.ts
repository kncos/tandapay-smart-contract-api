import { Account, Address, Chain, Client, GetContractReturnType, Hex } from "viem";
import { TandaPayInfo } from "../_contracts/TandaPay";

import { TandaPayContract } from "./TandaPayManager";

// client type that results in a writeable contract instance
export type WriteableClient = Client & { chain: Chain; account: Account; };

export class TandaPayWriteMethods<TClient extends WriteableClient> {
    protected contractInstance: TandaPayContract<TClient>;

    protected get simulate() {
        return this.contractInstance.simulate;
    }

    protected get write() {
        return this.contractInstance.write;
    }

    constructor(contractInstance: TandaPayContract<TClient>) {
        this.contractInstance = contractInstance;
    }
}