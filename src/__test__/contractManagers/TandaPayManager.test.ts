import { PublicClient, WalletClient, Transport, Chain, Hex, createPublicClient, http, createWalletClient } from "viem";
import { Account, privateKeyToAccount } from "viem/accounts";
import { anvil } from "viem/chains";
import { FaucetTokenInfo } from "../../_contracts/FaucetToken";
import { TandaPayInfo } from "../../_contracts/TandaPay";
import { createTandaPayManager, WriteableTandaPayManager } from "../../contract_managers/tandapay_manager";
import { isWriteableClient, TandaPayRole } from "../../contract_managers/types";

const default_account = privateKeyToAccount('0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80');
let publicClient: PublicClient;
let walletClient: WalletClient<Transport, Chain, Account>;
let ftkAddress: Hex;
let tpAddress: Hex;

beforeAll(async () => {
    // create a simple public client
    publicClient = createPublicClient({
        chain: anvil,
        transport: http(),
    });

    // create a wallet client. should automatically have
    // accounts since we're using anvil
    walletClient = createWalletClient({
        account: default_account, 
        chain: anvil,
        transport: http(),
    });

    // need to deploy the FaucetToken to be able to use TP
    const ftkReceipt = await walletClient.deployContract({
        abi: FaucetTokenInfo.abi,
        bytecode: FaucetTokenInfo.bytecode.object as Hex,
    }).then((hash) => {
        return publicClient.waitForTransactionReceipt( {hash} );
    });

    if (!ftkReceipt || !ftkReceipt.contractAddress) {
        throw new Error("failed to deploy FTK contract");
    }

    ftkAddress = ftkReceipt.contractAddress;

    const tpReceipt = await walletClient.deployContract({
        abi: TandaPayInfo.abi,
        bytecode: TandaPayInfo.bytecode.object as Hex,
        args: [ftkAddress, default_account.address],
    }).then((hash) => {
        return publicClient.waitForTransactionReceipt( {hash} );
    });

    if (!tpReceipt || !tpReceipt.contractAddress) {
        throw new Error("failed to deploy TP contract");
    }

    tpAddress = tpReceipt.contractAddress;
});

describe('Here I simply run stuff to test it for experimentation purposes', () => {
    it('walletClient is a writeable client', async () => {
        expect(isWriteableClient(walletClient)).toBe(true);
    });

    it('tp Manager created from walletClient is a Writeable TP Manager', () => {
        let tpManager = createTandaPayManager(tpAddress, walletClient, { clientRole: TandaPayRole.Secretary });
        expect(tpManager).toBeInstanceOf(WriteableTandaPayManager);
    });
});
