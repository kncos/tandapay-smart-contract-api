import { Abi, Account, Chain, Client, DeployContractParameters, Hex, Transaction, TransactionReceipt, Transport } from "viem";
import { deployContract, waitForTransactionReceipt } from "viem/actions";


//export async function deployContract<TClient extends ContractDeployerClient> (
//    abi: Abi, 
//    bytecode: Hex, 
//    client: TClient,
//    ...args: any[]
//): Promise<TransactionReceipt> {
//
//    const receipt = await client.deployContract({
//        account: client.account,
//        chain: client.chain,
//        abi: abi,
//        bytecode: bytecode,
//        args: args,
//    }).then (
//        (hash) => client.waitForTransactionReceipt( {hash} ),
//    );
//
//    if (!receipt || !receipt.contractAddress) {
//        throw new Error("failed to deploy smart contract! either transaction receipt or contractAddress is undefined!");
//    }
//
//    return receipt;
//}


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