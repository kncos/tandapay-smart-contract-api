import {
  Abi,
  AbiStateMutability,
  Address,
  getContract,
  Hash,
  SimulateContractReturnType,
  TransactionReceipt,
} from "viem";
import { TandaPayContract, WriteableClient } from "types";
import { TandaPayInfo } from "../_contracts/TandaPay";
import { waitForTransactionReceipt } from "viem/actions";

type ExtractAbiFunctions<
  abi extends Abi,
  abiStateMutability extends AbiStateMutability = AbiStateMutability,
> = Extract<
  abi[number],
  { type: "function"; stateMutability: abiStateMutability }
>;

type ExtractAbiFunctionNames<
  abi extends Abi,
  abiStateMutability extends AbiStateMutability = AbiStateMutability,
> = ExtractAbiFunctions<abi, abiStateMutability>["name"];

type TandaPayWriteMethodNames = ExtractAbiFunctionNames<
  typeof TandaPayInfo.abi,
  "nonpayable" | "payable"
>;

/** Return type of all TandaPayWriteMethods -- either returns a transaction hash or transaction receipt or a SimulateContractReturnType */
export type TandaPayWriteMethodReturnType<
  TMethodName extends TandaPayWriteMethodNames,
  TSimulateReturnType = SimulateContractReturnType<
    typeof TandaPayInfo.abi,
    Exclude<TMethodName, undefined>
  >,
> = Promise<Hash | TransactionReceipt | TSimulateReturnType>;

export type TandaPayWriteMethodParameters<
  TClient extends WriteableClient = WriteableClient,
> = {
  /** A writeable client; this is any client with WalletActions, and a defined transport/chain/account */
  client: TClient;
  /** Address of the TandaPay smart contract */
  address: Address;
  /** should we wait for transaction receipts? Default = `true` if not specified */
  waitForTransactionReceipts?: boolean;
  /** should we only simulate transactions instead of executing them? Default = `false` if not specified */
  simulateOnly?: boolean;
};

export type performOperationParams<
  TMethodName extends TandaPayWriteMethodNames,
> = {
  simulate: () => Promise<
    SimulateContractReturnType<typeof TandaPayInfo.abi, TMethodName>
  >;
  write: () => Promise<Hash>;
};

/** Abstract class template for all TandaPay smart contract write interactions. */
export abstract class TandaPayWriteMethods<
  TClient extends WriteableClient = WriteableClient,
> {
  /** client used to construct the contract instance. */
  protected client: TClient;
  /** instance of the tandapay contract we are interacting with */
  protected contractInstance: TandaPayContract<TClient>;
  /** If true, all write methods will wait for the transaction to be included in a block (one confirmation) */
  public waitForTransactionReceipts: boolean = true;
  /** If true, all write methods will only simulate the transaction. They won't actually write */
  public simulateOnly: boolean = false;

  /** shorthand for referencing the contractInstance's simulate method */
  protected get simulate() {
    return this.contractInstance.simulate;
  }

  /** shorthand for referencing the contractInstance's write method */
  protected get write() {
    return this.contractInstance.write;
  }

  protected async performOperation<
    TMethodName extends TandaPayWriteMethodNames,
  >(
    params: performOperationParams<TMethodName>,
  ): TandaPayWriteMethodReturnType<TMethodName> {
    const simulatedResult = await params.simulate();
    if (this.simulateOnly) return simulatedResult;

    const hash = await params.write();
    if (!this.waitForTransactionReceipts) return hash;

    const receipt = await waitForTransactionReceipt(this.client, { hash });
    return receipt;
  }

  constructor(params: TandaPayWriteMethodParameters<TClient>) {
    this.client = params.client;
    this.contractInstance = getContract({
      abi: TandaPayInfo.abi,
      address: params.address,
      client: params.client,
    });

    if (params.waitForTransactionReceipts !== undefined)
      this.waitForTransactionReceipts = params.waitForTransactionReceipts;

    if (params.simulateOnly !== undefined)
      this.simulateOnly = params.simulateOnly;
  }
}
