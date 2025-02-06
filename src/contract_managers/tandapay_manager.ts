import { Abi, Account, Address, Chain, Client, getContract, Hex, PublicActions, PublicClientConfig, Transport, WalletActions, WalletClientConfig } from "viem";
import { TandaPayInfo } from "../_contracts/TandaPay";
import { TandaPayRole, TandaPayContract, hasPublicActions } from "./types";
import { TandaPayReadMethods } from "./tandapay_read_methods";
import MemberWriteMethods from "./member_write_methods";
import SecretaryWriteMethods from "./secretary_write_methods";
import { TandaPayEvents } from "./tandapay_events";

// TODO: see about implementing a mechanism for batching JSON RPC calls. This could work by just implementing it into TandaPayManager


// TandaPayManager Rewrite goals:
// 1.   We want to clean up this object so that it can be constructed with either a client,
//      or possibly some combination of transport/chain/account, and depending on what is
//      provided, either readonly methods are provided, or read/write methods are both provided
// 2.   We want to consolidate this into one class, and also remove the ?. syntax from member/secretary.
//      We may be able to do this by either utilizing the extend() pattern within viem (see: client
//      extend source code), or by doing something with an enum like before.
// 3.   


export class TandaPayManager {

}





///** This type is used to pass options to createTandaPayManager, or the constructor of TandaPayManager, or WriteableTandaPayManager. */
//export type TandaPayManagerOptions = {
//    /** This represents what role the client has in the TandaPay community. For example, if
//     * they are a member, they can execute all-member write methods, and if they are a secretary
//     * they can execute both member and secretary-only write methods. Depending on what is passed
//     * here, the functionality of the Writeable TandaPayManager will automatically be extended
//     * with the appropriate methods.
//     */
//    clientRole?: TandaPayRole;
//};
//
//
///**
// * createTandaPayManager, this method creates an object that essentially acts as a basic wrapper around the 
// * TandaPay Smart Contract, enabling interaction with it through the given client. 
// * @param contract_address This is the address of the TandaPay Smart Contract instance you want to connect to
// * @param client This is the client that will be interacting with the TandaPay Smart Contract instance
// * @param opts Optional parameter. Can use it to specify options for creation of a TandaPayManager instnace
// * @returns a WriteableTandaPayManager if a client with write capabilities was passed, or a regular readonly TandaPayManager otherwise
// */
//export function createTandaPayManager<TClient extends Client>(
//    contract_address: Hex,
//    client: TClient,
//    opts?: TandaPayManagerOptions
//): TClient extends WalletActions & { account: Account; chain: Chain; } ? WriteableTandaPayManager<TClient> : TandaPayManager<TClient> {
//    if ((client as any).sendTransaction !== undefined) {
//        return new WriteableTandaPayManager(contract_address, client, opts) as TClient extends WalletActions & { account: Account; chain: Chain; } ? WriteableTandaPayManager<TClient> : never;
//    }
//
//    return new TandaPayManager(contract_address, client) as TClient extends WalletActions ? never : TandaPayManager<TClient>;
//}
//
///** TandaPayManager enables readonly interactions with an instance of a TandaPay smart contract */
//export class TandaPayManager<TClient extends Client> {
//    protected contractInstance: TandaPayContract<TClient>;
//    protected readMethods: TandaPayReadMethods<TClient>;
//
//    /** The address of the TandaPay contract this object is managing. provided in the constructor */
//    readonly contractAddress: Hex;
//    /** the client that was provided in the constructor to this manager. */
//    readonly client: TClient;
//    /** The TandaPay abi. this is a constant value retrieved from `TandaPayInfo.abi`, also provided here for easy access */
//    readonly abi: Abi;
//
//    /** Exposes wrappers for all of the read methods for interacting with the TandaPay smart contract */
//    get read() {
//        return this.readMethods;
//    }
//
//    /**
//     * @param contractAddress Blockchain address of the TandaPay smart contract instance you want to connect to
//     * @param client A client to perform blockchain interactions through
//     */
//    constructor(
//        contractAddress: Hex, 
//        client: TClient, 
//    ) {
//        // we create a viem contract instance which exposes methods for interacting with the
//        // smart contract at a low level. We will inject this into helper classes which wrap all of the necessary methods
//        this.contractInstance = getContract({
//            address: contractAddress,
//            abi: TandaPayInfo.abi,
//            client: client,
//        });
//
//        // wraps all of the read methods for the TandaPay smart contract. When the programmer uses
//        // a TandaPayManager, they say `tpManager.read.someWrapperMethod(...)`
//        this.readMethods = new TandaPayReadMethods(this.contractInstance);
//
//        // readonly constants that just provide some information about how this object was created
//        // that might be useful when working with it in other parts of the code base
//        this.contractAddress = contractAddress;
//        this.client = client;
//        this.abi = TandaPayInfo.abi;
//    }
//}
//
///** Internal type. Return type of `write` getter inside of WriteableTandaPayManager */
//type WriteGetterType<TClient extends Client> = { member?: MemberWriteMethods<TClient>; secretary?: SecretaryWriteMethods<TClient>; };
////    | { member: MemberWriteMethods<TClient>; }
////    | {};
//
///**
// * WriteableTandaPayManager enables both read and write interactions with an instance of a TandaPay smart contract.
// * It extends the readonly `TandaPayManager` class to add this write functionality. Needs a client with write capabilities.
// */
//export class WriteableTandaPayManager<TClient extends Client & WalletActions & { account: Account; chain: Chain; }> extends TandaPayManager<TClient> {
//    protected memberWriteMethods?: MemberWriteMethods<TClient>;
//    protected secretaryWriteMethods?: SecretaryWriteMethods<TClient>;
//    
//    protected txWaitClient?: TClient & PublicActions;
//
//    /**
//     * Exposes wrappers for all of the write methods for interacting with the TandaPay smart contract.
//     * If the WriteableTandaPayManager has been extended with Member actions, then you can say `myManager.write.member.someMethod(...)`,
//     * and likewise, if it has been extended with Secretary actions, you can say `myManager.write.secretary.someMethod(...)`.
//     */
//    get write(): WriteGetterType<TClient> {
//        return {
//            member: this.memberWriteMethods,
//            secretary: this.secretaryWriteMethods,
//        }
//    }
//
//    /**
//     * @param contract_address Blockchain address of the TandaPay smart contract instance you want to connect to
//     * @param client A client to perform blockchain interactions through. Must have write capabilities (e.g. WalletClient). See: WriteableClient type
//     * @param opts Optional parameter to specify some additional configuration upon construction of this object
//     */
//    constructor(
//        contract_address: Hex, 
//        client: TClient, 
//        opts?: TandaPayManagerOptions,
//    ) {
//        super(contract_address, client);
//
//        if (hasPublicActions(client)) {
//            this.txWaitClient = client as TClient extends PublicActions ? TClient & PublicActions : never;
//        }
//
//        if (opts) {
//            if (opts.clientRole === TandaPayRole.Secretary) {
//                this.memberWriteMethods = new MemberWriteMethods(this.contractInstance, this.txWaitClient);
//                this.secretaryWriteMethods = new SecretaryWriteMethods(this.contractInstance, this.txWaitClient);
//            }
//            else if (opts.clientRole === TandaPayRole.Member) {
//                this.memberWriteMethods = new MemberWriteMethods(this.contractInstance, this.txWaitClient);
//            }
//        }
//    }
//
//    /**
//     * Enables new write methods depending on the role that is passed. For instance, extending it with the member
//     * functionality allows for `.write.member.someMethod(...)` and extending it with the secretary functionality
//     * not only allowed all member functions, but also `.write.secretary.someSecretaryOnlyMethod(...)`
//     * @param role Role within the TandaPay community that the client account holds. (e.g. member or secretary)
//     * @returns It returns `this` so that `.extend` calls may be chained together
//     */
//    extend(opts: TandaPayManagerOptions) {
//
//        switch (opts.clientRole) {
//            case TandaPayRole.Member: {
//                if (this.memberWriteMethods === undefined) {
//                    this.memberWriteMethods = new MemberWriteMethods(this.contractInstance, this.txWaitClient);
//                }
//                break;
//            }
//            case TandaPayRole.Secretary: {
//                if (this.memberWriteMethods === undefined) {
//                    this.memberWriteMethods = new MemberWriteMethods(this.contractInstance, this.txWaitClient);
//                }
//                if (this.secretaryWriteMethods === undefined) {
//                    this.secretaryWriteMethods = new SecretaryWriteMethods(this.contractInstance, this.txWaitClient);
//                }
//                break;
//            }
//        }
//
//        return this;
//    }
//}
//