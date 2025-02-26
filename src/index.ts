import {
  Address,
  createPublicClient,
  createTestClient,
  createWalletClient,
  getContract,
  Hex,
  http,
  publicActions,
} from "viem";
import { anvil } from "viem/chains";
import { FaucetTokenInfo } from "./_contracts/FaucetToken";
import { deployContract, waitForTransactionReceipt } from "viem/actions";
import { spawn } from "child_process";
import { hasWalletActions, periodInfoJsonReplacer } from "./types";
import { privateKeyToAccount } from "viem/accounts";
import { TandaPayInfo } from "_contracts/TandaPay";
import { memberWriteMethodNames, publicWriteMethodNames, secretaryWriteMethodNames } from "types";

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

//const anvilProcess = spawn("anvil", ["-a", "15"], {
//  stdio: "ignore",
//  shell: true,
//});
//
//const testClient = createTestClient({
//  chain: anvil,
//  mode: "anvil",
//  transport: http(),
//}).extend(publicActions);
//
//await testClient.setAutomine(true);
//
//const wc = createWalletClient({
//  transport: http(),
//  chain: anvil,
//  account: privateKeyToAccount(PRIVATE_KEYS[0]),
//});
//
const pc = createPublicClient({
  transport: http(),
  chain: anvil,
});

//
//const ftkReceipt = await deployContract(wc, {
//  abi: FaucetTokenInfo.abi,
//  bytecode: FaucetTokenInfo.bytecode.object,
//  account: null,
//  chain: anvil,
//}).then((hash) => waitForTransactionReceipt(wc, { hash }));
//
//const tpReceipt = await deployContract(wc, {
//  abi: TandaPayInfo.abi,
//  bytecode: TandaPayInfo.bytecode.object,
//  account: wc.account,
//  chain: anvil,
//  args: [ftkReceipt.contractAddress as Address, wc.account.address as Address],
//}).then((hash) => waitForTransactionReceipt(wc, {hash}));

//console.log(JSON.stringify(ftkReceipt.contractAddress, null, 2));

//const ci = getContract({
//  abi: TandaPayInfo.abi,
//  address: tpReceipt.contractAddress as Address,
//  client: wc,
//});

//let functions = TandaPayInfo.abi.filter((value) => value.type === "function" && value.stateMutability !== "view");
//let names = functions.map(f => f.name);
//console.log(names.join('\t'));

//let pi = await ci.read.getPeriodIdToPeriodInfo([0n]);
//console.log(JSON.stringify(pi, periodInfoJsonReplacer, 2));

//anvilProcess.kill();

//console.log(hasWalletActions(wc));
//console.log(hasWalletActions(pc));
//console.log(hasWalletActions(testClient));

console.log(publicWriteMethodNames);
console.log(memberWriteMethodNames);
console.log(secretaryWriteMethodNames);

// What's next?
// - It's time to get started on Layer 2
// - Layer 2 will have to contain some logic that builds on the contract managers. But how?
// -

// How Layer 2 builds on top of contract managers
// - we need to have a mechanism for handling errors. Perhaps custom errors at this stage?
// - we should probably have some sort of abstraction for advancing the smart contract state
// - we should probably have some basic options for querying the smart contract state. We don't need to
//   actually keep track of it at this stage, but we do need a way to query info in a more robust manner
//   which can then be used by L3 to track the state, to an extent

// Where to start?
// - fleshing out the test cases would probably be a good idea
