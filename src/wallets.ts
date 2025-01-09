import { createWalletClient, HDKey, Hex, http, publicActions } from "viem";
import { mnemonicToAccount, privateKeyToAccount } from "viem/accounts";
import { anvil } from "viem/chains";

export async function makeWallet(private_key: Hex = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80") {
    const client = createWalletClient({
        account: privateKeyToAccount(private_key),
        chain: anvil,
        transport: http(),
    }).extend(publicActions);

    const [address] = await client.getAddresses();
    const balance = await client.getBalance({ address });
    return [address, balance];
}

export function makeHDWallet(mnemonic: string = 'test junk able acid test junk able acid test junk able acid') {
    try {
        return mnemonicToAccount(mnemonic)
    } catch (error) {
        throw error;
    }
}