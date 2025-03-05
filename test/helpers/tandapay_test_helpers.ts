import { ChildProcess, spawn } from "child_process";
import {
  Address,
  createPublicClient,
  createTestClient,
  createWalletClient,
  getContract,
  HDAccount,
  publicActions,
  PublicClient,
} from "viem";
import { mnemonicToAccount } from "viem/accounts";
import { FaucetTokenInfo } from "../../src/_contracts/FaucetToken";
import { waitForTransactionReceipt } from "viem/actions";
import { TandaPayInfo } from "../../src/_contracts/TandaPay";
import { TandaPayRole, WriteableClient } from "types";
import {
  createTandaPayManager,
  WriteableTandaPayManager,
} from "tandapay_manager/tandapay_manager";
import {
  TEST_ACCOUNT_MNEMONIC,
  TEST_TRANSPORT,
  TEST_CHAIN,
  TEST_MODE,
  NUM_TEST_ACCOUNTS,
} from "../test_config";

/**
 * Creates an array of accounts for use in testing
 * @param n Number of accounts to create
 * @returns An array of HDAccounts created from the mnemonic with differing derivation paths
 */
export function makeAccounts(n: number = NUM_TEST_ACCOUNTS): HDAccount[] {
  const accounts: HDAccount[] = [];
  // create accounts by using the test mnemonic, but just incrementing the
  // `addressIndex` to get new private keys from the derivation path. This matches
  // up with what `anvil` test network does.
  for (let i = 0; i < n; i++) {
    accounts.push(
      mnemonicToAccount(TEST_ACCOUNT_MNEMONIC, {
        addressIndex: i,
      }),
    );
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
export async function spawnAnvil(
  num_accounts: number = NUM_TEST_ACCOUNTS,
): Promise<ChildProcess> {
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
    seconds,
  });

  // NOTE: when advancing time, you do have to manually mine a block
  await tc.mine({ blocks: 1 });
}

/**
 * Creates writeable clients
 * @param n number of writeable clients to make
 * @returns an array containing the specified number of writeable clients
 */
export function makeWriteableClients(
  n: number = NUM_TEST_ACCOUNTS,
): WriteableClient[] {
  if (n < 1) n = 1;

  const accounts = makeAccounts(n);
  const wc: WriteableClient[] = [];
  for (const acc of accounts) {
    wc.push(
      createWalletClient({
        transport: TEST_TRANSPORT,
        chain: TEST_CHAIN,
        account: acc,
      }),
    );
  }
  return wc;
}

/**
 * Creates public clients
 * @param n number of public clients to make
 * @returns an array containing the specified number of public clients
 */
export function makePublicClients(n: number = 1): PublicClient[] {
  if (n < 1) n = 1;

  const pc: PublicClient[] = [];
  for (let i = 0; i < n; i++) {
    pc.push(
      createPublicClient({
        transport: TEST_TRANSPORT,
        chain: TEST_CHAIN,
      }),
    );
  }
  return pc;
}

/**
 * Deploys the ERC-20 faucet token smart contract. Uses the 0-th account in the test mnemonic for deployment
 * @returns Address of the faucet token smart contract
 */
export async function deployFaucetToken() {
  // create wallet client for deploying it
  const [wc] = makeWriteableClients(1);
  // deploy the faucet token contract
  const hash = await wc.deployContract({
    abi: FaucetTokenInfo.abi,
    bytecode: FaucetTokenInfo.bytecode.object,
    account: wc.account,
    chain: TEST_CHAIN,
  });

  // wait for the transaction to be confirmed (one block confirmation)
  const receipt = await waitForTransactionReceipt(wc, { hash });
  if (!receipt || !receipt.contractAddress)
    throw new Error(
      "failed to deploy TandaPay smart contract. receipt or receipt.contractAddress is missing!",
    );

  // return the address of the faucet token
  return receipt.contractAddress;
}

/**
 * Deploys the TandaPay smart contract. Uses the 0-th account in the test mnemonic for deployment and as the secretary
 * @param ftk_address address of the ERC-20 faucet token contract to use for testing
 * @returns The address of the TandaPay smart contract
 */
export async function deployTandaPay(ftk_address: Address): Promise<Address> {
  // create a wallet client for deploying the TandaPay contract
  const [wc] = makeWriteableClients(1);

  // deploy tandapay contract. The parameters passed to the smart contract constructor are
  // the address (of the ERC-20 token it's using for payments) and then the account address of
  // the individual who deployed it (who will become the secretary of the community).
  const hash = await wc.deployContract({
    abi: TandaPayInfo.abi,
    bytecode: TandaPayInfo.bytecode.object,
    account: wc.account,
    chain: TEST_CHAIN,
    args: [ftk_address, wc.account.address],
  });

  // wait for the transaction receipt, one block confirmation
  const receipt = await waitForTransactionReceipt(wc, { hash });
  if (!receipt || !receipt.contractAddress)
    throw new Error(
      "failed to deploy TandaPay smart contract. receipt or receipt.contractAddress is missing!",
    );

  // return the tandapay smart contract address
  return receipt.contractAddress;
}

/**
 * Creates a bunch of tandapay managers (with secretary privileges by default) from a list of writeableClients
 * and a tandapay smart contract address
 */
export function makeManagers(
  writeableClients: WriteableClient[],
  tpAddress: Address,
) {
  const managers: WriteableTandaPayManager<TandaPayRole.Secretary>[] = [];
  for (const wc of writeableClients) {
    managers.push(createTandaPayManager(wc, tpAddress, TandaPayRole.Secretary));
  }
  return managers;
}

export type ftkApproveOptions = {
  writeableClients: WriteableClient[];
  ftkAddress: Address;
  spender: Address;
  amount: bigint;
  amountToDistribute?: bigint;
};

export async function getFtkBalance(params: {ftkAddress: Address, walletAddress: Address}) {
  const contract = getContract({
    abi: FaucetTokenInfo.abi,
    address: params.ftkAddress,
    client: makeTestClient().extend(publicActions),
  });
  return await contract.read.balanceOf([params.walletAddress]);
}

export async function getFtkTransactions(params: {ftkAddress: Address, walletAddress: Address}) {
  let pc = makeTestClient().extend(publicActions);
  const outgoing = await pc.getContractEvents({
    address: params.ftkAddress,
    abi: FaucetTokenInfo.abi,
    eventName: 'Transfer',
    fromBlock: 0n,
    toBlock: 'latest',
    args: {
      from: params.walletAddress,
    },
  });
  const incoming = await pc.getContractEvents({
    address: params.ftkAddress,
    abi: FaucetTokenInfo.abi,
    eventName: 'Transfer',
    fromBlock: 0n,
    toBlock: 'latest',
    args: {
      to: params.walletAddress,
    }
  });

  return {incoming, outgoing};
}

/** approves spending for faucet token contract. Also distributes to each client */
export async function ftkApprove(opts: ftkApproveOptions) {
  for (const wc of opts.writeableClients) {
    // create a contract instance with this client and the ERC-20 contract address
    // to use for write operations (e.g., distribute, approve).
    const contract = getContract({
      abi: FaucetTokenInfo.abi,
      address: opts.ftkAddress,
      client: wc,
    });

    // distribute FTK if that option was enabled
    if (opts.amountToDistribute) {
      const distributeHash = await contract.write.distribute([
        wc.account.address,
        opts.amountToDistribute,
      ]);
      const distributeReceipt = await waitForTransactionReceipt(wc, {
        hash: distributeHash,
      });
      if (!distributeReceipt)
        throw new Error(
          "failed to distribute ftk! no distribute transaction receipt!",
        );
    }

    // approve ftk spending
    const approvalHash = await contract.write.approve([
      opts.spender,
      opts.amount,
    ]);
    const approvalReceipt = await waitForTransactionReceipt(wc, {
      hash: approvalHash,
    });
    if (!approvalReceipt)
      throw new Error(
        "failed to approve ftk spending! no transaction receipt?",
      );
  }
}
