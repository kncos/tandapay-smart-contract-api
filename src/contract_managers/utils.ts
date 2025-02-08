import { Abi, Account, Chain, Client, DeployContractParameters, Hex, Transaction, TransactionReceipt, Transport } from "viem";
import { deployContract, waitForTransactionReceipt } from "viem/actions";


/**
 * Deploys a smart contract and waits for the transaction receipt
 * @param walletClient Client that will perform the contract deployment
 * @param parameters Parameters to include with the deployment, e.g. abi, constructor args
 * @returns A transaction receipt after the contract deployment has been seen on chain (one block confirmation)
 */
export async function deployContractAndWait<
    const abi extends Abi | readonly unknown[],
    chain extends Chain | undefined,
    account extends Account | undefined,
    chainOverride extends Chain | undefined,
>(
    walletClient: Client<Transport, chain, account>,
    parameters: DeployContractParameters<abi, chain, account, chainOverride>,
): Promise<TransactionReceipt> {
    const hash = await deployContract(walletClient, parameters);
    const receipt = await waitForTransactionReceipt(walletClient, { hash }) ;
    return receipt;
}

/** Can be used with JSON.Stringify, allows it to parse `bigint` and `bigint[]` */
export function bigIntJsonReplacer (key: string, value: any): any {
    const toStr = (bigIntValue: bigint) => `${bigIntValue.toString()}n`;

    if (Array.isArray(value)) {
        return value.map((item) => (typeof item === "bigint" ? toStr(item) : item));
    }
    else if (typeof value === "bigint") {
        return toStr(value);
    }
    return value;
}