import { PublicClient, WalletClient, Transport, Chain, Hex, createPublicClient, http, createWalletClient } from "viem";
import { Account, privateKeyToAccount } from "viem/accounts";
import { anvil } from "viem/chains";
import { FaucetTokenInfo } from "../../_contracts/FaucetToken";
import { TandaPayInfo } from "../../_contracts/TandaPay";
import { TandaPayManager } from "../../contractManagers/TandaPayManager";
import { doesNotMatch } from "assert";

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

describe('TandaPayManager instantiation', () => {
    it('Can be instantiated with publicClient', async () => {
        let tpManager = new TandaPayManager(tpAddress, publicClient);
        let secretaryAddr = await tpManager.getSecretary();
        expect(secretaryAddr).toBe(default_account.address);
    });

    it('Can be instantiated with walletClient', async () => {
        let tpManager = new TandaPayManager(tpAddress, walletClient);
        let secretaryAddr = await tpManager.getSecretary();
        expect(secretaryAddr).toBe(default_account.address);
    });

    //TODO: decide whether or not to axe this feature, for now it's not implemented
    // it('Can be instantiated with both publicClient and WalletClient', async () => {
    //     let tpManager = new TandaPayManager(tpAddress, { public: publicClient, wallet: walletClient } );
    //     let secretaryAddr = await tpManager.getSecretary();
    //     expect(secretaryAddr).toBe(default_account.address);
    // });

    it('Should not work with an invalid address', async () => {
        try {
            let tpManager = new TandaPayManager(`0x0`, publicClient);
            await tpManager.getSecretary();
            fail("Expected an error to be thrown, but none was");
        } catch (error) {
            const errorMessage = String(error);
            //console.log("Caught error:", errorMessage.split('\n').slice(0,50).join('\n'));
            expect(error).toBeDefined();
        }
    });
});

describe('Secretary Actions work', () => {
//    it('Should allow members to be added', async () => {
//        let tpManager = new TandaPayManager(tpAddress, walletClient);
//        const res = await tpManager.addMemberToCommunity("0x70997970C51812dc3A010C7d01b50e0d17dc79C8");
//
//        console.log(await publicClient.getContractEvents({
//            abi: TandaPayInfo.abi,
//            address: tpAddress,
//        }));
//
//        //console.log(JSON.stringify(res, null, 2).split('\n').splice(0,50).join('\n'));
//    });
});

afterAll(() => {
    //... 
});