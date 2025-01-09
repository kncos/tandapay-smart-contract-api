import { createPublicClient, createTestClient, createWalletClient, formatEther, formatUnits, getContract, http, publicActions } from "viem";
import { anvil, foundry, mainnet } from "viem/chains";
import { makeHDWallet, makeWallet } from "./wallets.js";
import { mnemonicToAccount } from "viem/accounts";
import { TandaPayInfo } from "./contracts/TandaPay.js"
import { FaucetTokenInfo } from "./contracts/FaucetToken.js";

const mnemonic_str: string = 'test test test test test test test test test test test junk';
let accounts = Array.from({length: 3}, (_, index) => {
    return mnemonicToAccount(mnemonic_str, {accountIndex:0, addressIndex:index});
});

console.log(Array.from(accounts, (acc, index) => {
    return acc.address;
}));

const client = createWalletClient({
    account: accounts[0],
    chain: anvil,
    transport: http(),
}).extend(publicActions);

const addresses = await client.getAddresses();
console.log(addresses);

//const hash = await client.deployContract({
//    abi: FaucetTokenInfo.abi,
//    bytecode: FaucetTokenInfo.bytecode.object,
//});
//
//const receipt = await client.waitForTransactionReceipt({hash});
//console.log(receipt.contractAddress);
//
//let addr_str = `0x${receipt.contractAddress}`;

const contract = getContract({
    address: '0xe7f1725e7734ce288f8367e1bb143e90bb3f0512',
    abi: FaucetTokenInfo.abi,
    client: client
});

let balance = await contract.read.balanceOf([accounts[0].address]);
await contract.write.distribute([accounts[1].address, 10n**21n]);
console.log(formatUnits(balance, 18), "FTK");

balance = await contract.read.balanceOf([accounts[1].address]);
console.log(formatUnits(balance, 18), "FTK");
// https://viem.sh/docs/contract/getContract#calling-methods