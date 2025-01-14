import { Client, getContract, Hex } from "viem";
import { TandaPayInfo } from "../_contracts/TandaPay";
import { TandaPayRole, TandaPayContract, WriteableClient } from "./types";
import { TandaPayReadMethods } from "./tandapay_read_methods";
import MemberWriteMethods from "./member_write_methods";
import SecretaryWriteMethods from "./secretary_write_methods";

// this is tightly coupled to TandaPayManager, so it isn't going to types.ts
export type TandaPayManagerOptions = {
    clientRole?: TandaPayRole;
};

export class TandaPayManager<TClient extends Client> {
    private contractInstance: TandaPayContract<TClient>;

    private readMethods: TandaPayReadMethods<TClient>
    private memberWriteMethods?: TClient extends WriteableClient ? MemberWriteMethods<WriteableClient> : undefined;
    private secretaryWriteMethods?: TClient extends WriteableClient ? SecretaryWriteMethods<WriteableClient> : undefined;

    constructor(
        contract_address: Hex, 
        client: TClient, 
        opts?: TClient extends WriteableClient ? TandaPayManagerOptions : Omit<TandaPayManagerOptions, 'clientRole'>
    ) {
        this.contractInstance = getContract({
            address: contract_address,
            abi: TandaPayInfo.abi,
            client: client,
        });

        this.readMethods = new TandaPayReadMethods(this.contractInstance);
        if (opts && 'clientRole' in opts) {
            if (opts.clientRole === TandaPayRole.Secretary) {
                this.memberWriteMethods = new MemberWriteMethods(this.contractInstance);
                this.secretaryWriteMethods = new SecretaryWriteMethods(this.contractInstance);
            }
            else if (opts.clientRole === TandaPayRole.Member) {
                this.memberWriteMethods = new MemberWriteMethods(this.contractInstance);
            }
        }
    }
}
