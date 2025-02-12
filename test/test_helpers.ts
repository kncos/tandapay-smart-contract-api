import { ChildProcess, spawn } from "child_process";
import { Account, Address, createPublicClient, createTestClient, createWalletClient, getContract, HDAccount, http, PublicClient, WalletClient } from "viem";
import { mnemonicToAccount } from "viem/accounts";
import { anvil } from "viem/chains";
import { FaucetTokenInfo } from "../src/_contracts/FaucetToken";
import { waitForTransactionReceipt } from "viem/actions";
import { TandaPayInfo } from "../src/_contracts/TandaPay";
import { createTandaPayManager, WriteableTandaPayManager } from "../src/contract_managers/tandapay_manager";
import { TandaPayRole, WriteableClient } from "../src/contract_managers/types";

/** viem transport we'll use for test networks */
export const TEST_TRANSPORT = http();
/** viem chain we will use for test networks */
export const TEST_CHAIN = anvil;
/** viem "mode" we will use for constructing test clients */
export const TEST_MODE = 'anvil';
/** mnemonic used to generate accounts used in testing */
export const TEST_ACCOUNT_MNEMONIC = 'test test test test test test test test test test test junk';

// not exported, will simply be used with methods in here
const UTILITY_ACC = mnemonicToAccount(TEST_ACCOUNT_MNEMONIC);
const DEFAULT_ACCOUNT_COUNT = 15;

/**
 * Creates an array of accounts for use in testing
 * @param n Number of accounts to create
 * @returns An array of HDAccounts created from the mnemonic with differing derivation paths
 */
export function makeAccounts(n: number = DEFAULT_ACCOUNT_COUNT): HDAccount[] {
    const accounts: HDAccount[] = [];
    // create accounts by using the test mnemonic, but just incrementing the
    // `addressIndex` to get new private keys from the derivation path. This matches
    // up with what `anvil` test network does.
    for (let i = 0; i < n; i++) {
        accounts.push(mnemonicToAccount(TEST_ACCOUNT_MNEMONIC,
            {
                addressIndex: i,
            }
        ));
    }
    return accounts;
}

/**
 * create a test client quickly
 * @returns A test client created with the predefined test transport, chain, and mode
 */
export function makeTestClient() {
    const testAcc = createTestClient({
        transport: TEST_TRANSPORT,
        chain: TEST_CHAIN,
        mode: TEST_MODE,
    });
    return testAcc;
}

/**
 * Spawns an anvil instance configured with the specified number of accounts, and configures it
 * @param num_accounts number of accounts to configure anvil with
 * @returns A child process for the anvil instance
 */
export async function spawnAnvil(num_accounts: number = DEFAULT_ACCOUNT_COUNT): Promise<ChildProcess> {
    const anvilProcess = spawn("anvil", ["-a", `${num_accounts}`], {
        stdio: "ignore",
        shell: true,
    });

    const tc = makeTestClient();
    // enable auto mining to update state automatically any time a transaction is sent
    await tc.setAutomine(true);

    // return the anvil process
    return anvilProcess;
}

/**
 * advances the time of the anvil test network instance
 * @param seconds number of seconds to increase test network time by
 */
export async function advanceTime(seconds: number) {
    const tc = makeTestClient();
    await tc.increaseTime({
        seconds
    });

    // NOTE: when advancing time, you do have to manually mine a block
    await tc.mine({blocks: 1});
}

/** Make one wallet client from a singular viem account */
export function makeWalletClients(account: Account): WalletClient[];
/** Make many wallet clients from an array of viem accounts */
export function makeWalletClients(accounts: Account[]): WalletClient[];

/** makeWalletClients overload implementation signature */
export function makeWalletClients(accountOrAccounts: Account | Account[]): WalletClient[] {
    // if an array was passed, iterate through and make wallet clients for each account in the array
    if (Array.isArray(accountOrAccounts)) {
        const wc: WalletClient[] = [];
        for (const acc of accountOrAccounts) {
            wc.push(createWalletClient({
                transport: TEST_TRANSPORT,
                chain: TEST_CHAIN,
                account: acc,
            }));
        }
        return wc;
    } 
    // otherwise, just make a singular wallet client using the single account that was passed
    return [createWalletClient({
        transport: TEST_TRANSPORT,
        chain: TEST_CHAIN,
        account: accountOrAccounts,
    })];
}

/**
 * Create either one or many public clients
 * @param n number of public clients to make
 * @returns either a singular public client, or an array
 */
export function makePublicClients(n: number = 1): PublicClient[] {
    // if a number > 1 was passed, make multiple public accounts and return those
    if (n > 1) {
        const pc: PublicClient[] = [];
        for (let i = 0; i < n; i++) {
            pc.push(createPublicClient({
                transport: TEST_TRANSPORT,
                chain: TEST_CHAIN,
            }));
        }
        return pc;
    } 
    // otherwise, just make a singular public client
    return [createPublicClient({
        transport: TEST_TRANSPORT,
        chain: TEST_CHAIN,
    })];
}

/**
 * Deploys the faucet token smart contract
 * @param account optional account to use for deploying the faucet token. Defaults to the 0-th account given by anvil's default mnemonic
 * @returns Transaction receipt from contract deployment
 */
export async function deployFaucetToken(account: Account = UTILITY_ACC) {
    // create wallet client for deploying it
    const [wc] = makeWalletClients(account);
    // deploy the faucet token contract
    const hash = await wc.deployContract({
        abi: FaucetTokenInfo.abi,
        bytecode: FaucetTokenInfo.bytecode.object,
        account: account,
        chain: TEST_CHAIN,
    });
    
    // wait for the transaction to be confirmed (one block confirmation)
    const receipt = await waitForTransactionReceipt(wc, { hash });
    // return the transaction receipt 
    return receipt;
}

/**
 * deploy an instance of the TandaPay smart contract, and also deploy the faucet token it requires if not provided
 * @param account optional account to use for deploying TandaPay smart contract. Defaults to the 0-th account given by anvil's default mnemonic
 * @param ftk_address optional address for the faucet token. If this isn't provided, this method deploys the faucet token automatically
 * @returns An object that has the transaction receipt from deploying the TandaPay smart contract, and the address of the faucet token contract
 */
export async function deployTandaPay(account: Account = UTILITY_ACC, ftk_address?: Address) {

    let address = ftk_address;
    // if no faucet token address was provided, we will deploy it
    if (!address) {
        const ftk = await deployFaucetToken(account);
        if (!ftk.contractAddress) {
            throw new Error("failed to deploy Faucet Token contract?");
        }

        address = ftk.contractAddress;
    }

    // create a wallet client for deploying the TandaPay contract
    const [wc] = makeWalletClients(account);
    // deploy tandapay contract. The parameters passed to the smart contract constructor are
    // the address (of the ERC-20 token it's using for payments) and then the account address of
    // the individual who deployed it (who will become the secretary of the community).
    const hash = await wc.deployContract({
        abi: TandaPayInfo.abi,
        bytecode: TandaPayInfo.bytecode.object,
        account: account,
        chain: TEST_CHAIN,
        args: [address, account.address],
    });
    // wait for the transaction receipt, one block confirmation
    const receipt = await waitForTransactionReceipt(wc, { hash });

    // return the transaction receipt for the TandaPay smart contract deployment, and also
    // the address for the faucet token deployment.
    return {
        ftkAddress: address,
        tpReceipt: receipt,
    };
}

/**
 * deploy TandaPay, create instances of tandapay managers, issue faucet token to each account and approve the tandapay
 * contract for spending the full balance
 * @param n number of managers and clients to create (default is 15)
 * @returns an array of writeable TandaPay managers and Writeable wallet clients
 */
export async function deployTandaPayAndMakeManagers(n: number = 15) {
    const accs = makeAccounts(n);
    const wallets = makeWalletClients(accs) as WriteableClient[];
    const managers: WriteableTandaPayManager<TandaPayRole>[] = [];

    const tpr = await deployTandaPay();

    if (!tpr.tpReceipt || !tpr.tpReceipt.contractAddress)
        throw new Error("TandaPay contract deployment failed.");

    managers.push(createTandaPayManager(wallets[0], tpr.tpReceipt.contractAddress, TandaPayRole.Secretary));
    for (let i = 1; i < n; i++) {
        managers.push(createTandaPayManager(
            wallets[i],
            tpr.tpReceipt.contractAddress,
            TandaPayRole.Member,
        ));
    }

    const amountToDistribute: bigint = 1_000_000n * 10n ** 18n;
    for (const wallet of wallets) {
        const ftkContract = getContract({
            abi: FaucetTokenInfo.abi,
            client: wallet,
            address: tpr.ftkAddress,
        });
        let hash = await ftkContract.write.distribute([wallet.account.address, amountToDistribute]);
        await waitForTransactionReceipt(wallets[0], {hash});
        hash = await ftkContract.write.approve([tpr.tpReceipt.contractAddress, amountToDistribute])
        await waitForTransactionReceipt(wallets[0], {hash});
    }

    return {
        managers,
        wallets,
    };
}