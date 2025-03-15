import { Address, createClient, createPublicClient, createWalletClient, defineChain, getContract, Hex, http, publicActions, walletActions } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { multicall } from "viem/actions";
import { anvil } from "viem/chains";
import { deployFaucetToken, deployTandaPay, spawnAnvil } from "../test/helpers/tandapay_test_helpers";
import { TandaPayInfo } from "_contracts/TandaPay";
import { TandaPayState } from "types";
import { MultiCallInfo } from "_contracts/Multicall3";
import { createTandaPayManager } from "tandapay_manager/tandapay_manager";

// private keys we can use for testing purposes here
export const PRIVATE_KEYS: Hex[] = [
  "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
  "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d",
  "0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a",
  "0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6",
  "0x47e179ec197488593b187f80a00eb0da91f1b9d0b13f8733639f19c30a34926a",
  "0x8b3a350cf5c34c9194ca85829a2df0ec3153be0318b5e2d3348e872092edffba",
  "0x92db14e403b83dfe3df233f83dfa3a0d7096f21ca9b0d6d6b8d88b2b4ec1564e",
  "0x4bbbf85ce3377467afe5d46f804f221813b2bb87f24d81f60f1fcdbf7cbf4356",
  "0xdbda1821b80551c9d65939329250298aa3472ba22feea921c0cf5d620ea67b97",
  "0x2a871d0798f97d79848a013d4936a73bf4cc922c825d33c1cf7073dff6d409c6",
  "0xf214f2b2cd398c806f84e317254e0f0b801d0643303237d97a22a48e01628897",
  "0x701b615bbdfb9de65240bc28bd21bbc0d996645a3dd57e7b12bc2bdf6f192c82",
  "0xa267530f49f8280200edf313ee7af6b827f2a8bce2897751d06a843f644967b1",
  "0x47c99abed3324a2707c28affff1267e45918ec8c3f20b8aa892e8b065d2942dd",
  "0xc526ee95bf44d8fc405a158bb884d9d1238d99f0612e9f33d006bb0789009aaa",
];

let publicClient = createPublicClient({
  batch: {
    multicall: true,
  },
  transport: http(),
  chain: anvil
});

let walletClient = createWalletClient({
  transport: http(),
  chain: anvil,
  account: privateKeyToAccount(PRIVATE_KEYS[0]),
});

const multicallDeploymentHash = await walletClient.deployContract({
  abi: MultiCallInfo.abi,
  bytecode: MultiCallInfo.bytecode.object,
});

const receipt = await publicClient.waitForTransactionReceipt({hash: multicallDeploymentHash});
const mcAddress = receipt.contractAddress as Address;

const modifiedChain = defineChain({
  ...anvil,
  contracts: {
    multicall3: {
      address: mcAddress,
      blockCreated: Number(await publicClient.getBlockNumber()!),
    }
  }
});

publicClient = createPublicClient({
  batch: {
    multicall: true,
  },
  transport: http(),
  chain: modifiedChain,
});

//Const anvilInstance = await spawnAnvil(15);
const ftk = await deployFaucetToken();
const tp = await deployTandaPay(ftk);

let tpClient = createClient({
  batch: {
    multicall: true
  },
  transport: http(),
  chain: modifiedChain,
  account: privateKeyToAccount(PRIVATE_KEYS[0]),
}).extend(publicActions).extend(walletActions);

let contract = getContract({
  abi: TandaPayInfo.abi,
  address: tp,
  client: {
    public: publicClient,
    wallet: tpClient,
  },
});

const tpm = createTandaPayManager(tpClient, tp);
console.log(tpClient.batch);

let [secretary, state] = await Promise.all([
  contract.read.secretary(),
  contract.read.getCommunityState(),
]);

console.log(`${secretary}\n${TandaPayState[state]}`);

//let [secretary, state] = await publicClient.multicall({
//  contracts: [
//    {
//      address: tp,
//      abi: TandaPayInfo.abi,
//      functionName: 'secretary'
//    },
//    {
//      address: tp,
//      abi: TandaPayInfo.abi,
//      functionName: 'getCommunityState'
//    },
//  ],
//});
//
//console.log(secretary.result);
//if (state.result !== undefined)
//  console.log(TandaPayState[state.result]);