import { Client, getContract, Hex } from "viem";
import { TandaPayInfo } from "../_contracts/TandaPay";
import { TandaPayRole, TandaPayContract, WriteableClient, isWriteableClient } from "./types";
import { TandaPayReadMethods } from "./tandapay_read_methods";
import MemberWriteMethods from "./member_write_methods";
import SecretaryWriteMethods from "./secretary_write_methods";

/** This type is used to pass options to createTandaPayManager, or the constructor of TandaPayManager, or WriteableTandaPayManager. */
export type TandaPayManagerOptions = {
    /** This represents what role the client has in the TandaPay community. For example, if
     * they are a member, they can execute all-member write methods, and if they are a secretary
     * they can execute both member and secretary-only write methods. Depending on what is passed
     * here, the functionality of the Writeable TandaPayManager will automatically be extended
     * with the appropriate methods.
     */
    clientRole?: TandaPayRole;
};

/**
 * createTandaPayManager, this method creates an object that essentially acts as a basic wrapper around the 
 * TandaPay Smart Contract, enabling interaction with it through the given client. 
 * @param contract_address This is the address of the TandaPay Smart Contract instance you want to connect to
 * @param client This is the client that will be interacting with the TandaPay Smart Contract instance
 * @param opts Optional parameter. Can use it to specify options for creation of a TandaPayManager instnace
 * @returns a WriteableTandaPayManager if a client with write capabilities was passed, or a regular readonly TandaPayManager otherwise
 */
export function createTandaPayManager<TClient extends Client | WriteableClient>(
    contract_address: Hex,
    client: TClient,
    opts?: TandaPayManagerOptions
): TClient extends WriteableClient ? WriteableTandaPayManager<TClient> : TandaPayManager<TClient> {
    //* This took a while to figure out. I had the following issue:
    //* - returning WriteableTPM | TPM resulted in .extend not being available when this method was used
    //* - returning using a ternary operator caused the `return` statements to have compile time errors
    //* - `as any` seems to have fixed this, and it now has the intended behavior of when a publicClient is
    //*   passed, only .read is available (and is the only method the IDE autocompletes), and when a walletClient
    //*   (or other type of WriteableClient) is passed, .write and .extend are available
    if (isWriteableClient(client)) {
        return new WriteableTandaPayManager(contract_address, client, opts) as any;
    }
    return new TandaPayManager(contract_address, client) as any;
}

/** TandaPayManager enables readonly interactions with an instance of a TandaPay smart contract */
export class TandaPayManager<TClient extends Client> {
    protected contractInstance: TandaPayContract<TClient>;
    protected readMethods: TandaPayReadMethods<TClient>

    /** Exposes wrappers for all of the read methods for interacting with the TandaPay smart contract */
    get read() {
        return this.readMethods;
    }

    /**
     * @param contract_address Blockchain address of the TandaPay smart contract instance you want to connect to
     * @param client A client to perform blockchain interactions through
     */
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

/** Internal type. Return type of `write` getter inside of WriteableTandaPayManager */
type WriteGetterType<TClient extends WriteableClient> = 
    | { member: MemberWriteMethods<TClient>; secretary: SecretaryWriteMethods<TClient>; }
    | { member: MemberWriteMethods<TClient>; }
    | {};

/**
 * WriteableTandaPayManager enables both read and write interactions with an instance of a TandaPay smart contract.
 * It extends the readonly `TandaPayManager` class to add this write functionality. Needs a client with write capabilities.
 */
export class WriteableTandaPayManager<TClient extends WriteableClient> extends TandaPayManager<TClient> {
    protected memberWriteMethods?: MemberWriteMethods<TClient>;
    protected secretaryWriteMethods?: SecretaryWriteMethods<TClient>;

    /**
     * Exposes wrappers for all of the write methods for interacting with the TandaPay smart contract.
     * If the WriteableTandaPayManager has been extended with Member actions, then you can say `myManager.write.member.someMethod(...)`,
     * and likewise, if it has been extended with Secretary actions, you can say `myManager.write.secretary.someMethod(...)`.
     */
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

    /**
     * @param contract_address Blockchain address of the TandaPay smart contract instance you want to connect to
     * @param client A client to perform blockchain interactions through. Must have write capabilities (e.g. WalletClient). See: WriteableClient type
     * @param opts Optional parameter to specify some additional configuration upon construction of this object
     */
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

    /**
     * Enables new write methods depending on the role that is passed. For instance, extending it with the member
     * functionality allows for `.write.member.someMethod(...)` and extending it with the secretary functionality
     * not only allowed all member functions, but also `.write.secretary.someSecretaryOnlyMethod(...)`
     * @param role Role within the TandaPay community that the client account holds. (e.g. member or secretary)
     * @returns It returns `this` so that `.extend` calls may be chained together
     */
    extend(role: TandaPayRole) {
        switch (role) {
            case TandaPayRole.Member: {
                if (this.memberWriteMethods === undefined) {
                    this.memberWriteMethods = new MemberWriteMethods(this.contractInstance);
                }
                break;
            }
            case TandaPayRole.Secretary: {
                if (this.memberWriteMethods === undefined) {
                    this.memberWriteMethods = new MemberWriteMethods(this.contractInstance);
                }
                if (this.secretaryWriteMethods === undefined) {
                    this.secretaryWriteMethods = new SecretaryWriteMethods(this.contractInstance);
                }
                break;
            }
        }
        return this;
    }
}