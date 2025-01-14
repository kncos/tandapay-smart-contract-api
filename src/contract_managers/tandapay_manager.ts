import { Client, getContract, Hex } from "viem";
import { TandaPayInfo } from "../_contracts/TandaPay";
import { TandaPayRole, TandaPayContract, WriteableClient, isWriteableClient } from "./types";
import { TandaPayReadMethods } from "./tandapay_read_methods";
import MemberWriteMethods from "./member_write_methods";
import SecretaryWriteMethods from "./secretary_write_methods";

// this is tightly coupled to TandaPayManager, so it isn't going to types.ts
export type TandaPayManagerOptions = {
    clientRole?: TandaPayRole;
};

export function createTandaPayManager(
    contract_address: Hex,
    client: Client | WriteableClient,
    opts?: TandaPayManagerOptions, 
): TandaPayManager<Client> | WriteableTandaPayManager<WriteableClient> {
    if (isWriteableClient(client)) {
        return new WriteableTandaPayManager(contract_address, client, opts);
    } else {
        return new TandaPayManager(contract_address, client);
    }
}

export class TandaPayManager<TClient extends Client> {
    protected contractInstance: TandaPayContract<TClient>;
    protected readMethods: TandaPayReadMethods<TClient>

    get read() {
        return this.readMethods;
    }

    constructor(
        contract_address: Hex, 
        client: TClient, 
    ) {
        this.contractInstance = getContract({
            address: contract_address,
            abi: TandaPayInfo.abi,
            client: client,
        });

        this.readMethods = new TandaPayReadMethods(this.contractInstance);
    }
}

type WriteGetterType<TClient extends WriteableClient> = 
    | { member: MemberWriteMethods<TClient>; secretary: SecretaryWriteMethods<TClient>; }
    | { member: MemberWriteMethods<TClient>; }
    | {};

export enum TandaPayManagerActions {
    MemberWriteActions,
    SecretaryWriteActions,
};

export class WriteableTandaPayManager<TClient extends WriteableClient> extends TandaPayManager<TClient> {
    protected memberWriteMethods?: MemberWriteMethods<TClient>;
    protected secretaryWriteMethods?: SecretaryWriteMethods<TClient>;

    get write(): WriteGetterType<TClient> {
        if (this.secretaryWriteMethods !== undefined && this.memberWriteMethods !== undefined) {
            return {
                member: this.memberWriteMethods,
                secretary: this.secretaryWriteMethods,
            };
        }
        else if (this.memberWriteMethods !== undefined) {
            return {
                member: this.memberWriteMethods,
            }
        }
        return {};
    }

    constructor(
        contract_address: Hex, 
        client: TClient, 
        opts?: TandaPayManagerOptions,
    ) {
        super(contract_address, client);
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

    extend(actions: TandaPayManagerActions) {
        switch (actions) {
            case TandaPayManagerActions.MemberWriteActions: {
                if (this.memberWriteMethods === undefined) {
                    this.memberWriteMethods = new MemberWriteMethods(this.contractInstance);
                }
                break;
            }
            case TandaPayManagerActions.SecretaryWriteActions: {
                if (this.secretaryWriteMethods === undefined) {
                    this.secretaryWriteMethods = new SecretaryWriteMethods(this.contractInstance);
                }
                break;
            }
        }
        return this;
    }
}