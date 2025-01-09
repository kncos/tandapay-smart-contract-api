import { createPublicClient, createTestClient, createWalletClient, formatEther, http, publicActions } from "viem";
import { anvil, foundry, mainnet } from "viem/chains";
import { makeHDWallet, makeWallet } from "./wallets.js";
import { mnemonicToAccount } from "viem/accounts";


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
console.log(addresses)