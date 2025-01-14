import { TandaPayContract, WriteableClient } from "./types";

export abstract class TandaPayWriteMethods<TClient extends WriteableClient> {
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