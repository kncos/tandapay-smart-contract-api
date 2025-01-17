import { Account, Address, Chain, Client, createPublicClient, createWalletClient, getContract, GetContractReturnType, Hex, http, publicActions, Transport, walletActions, WalletClient } from "viem";
import { TandaPayRole, WriteableClient } from "../../contract_managers/types";
import { FaucetTokenInfo } from "../../_contracts/FaucetToken";
import { privateKeyToAccount } from "viem/accounts";
import { anvil } from "viem/chains";
import { createTandaPayManager, WriteableTandaPayManager } from "../../contract_managers/tandapay_manager";
import { TandaPayInfo } from "../../_contracts/TandaPay";

export type FtkContractType<TClient extends WriteableClient> = GetContractReturnType<typeof FaucetTokenInfo.abi, TClient, Address>

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

export const TEST_CHAIN: Chain = anvil;
export const TEST_TRANSPORT: Transport = http();

export type AccountClientManager<TClient extends WriteableClient> = {
    account: Account,
    client: TClient,
    tpManager?: WriteableTandaPayManager<TClient>,
};

export async function deployFtkContract(
    account: Account,
): Promise<Hex> {
    let client = createWalletClient({
        account: account,
        chain: TEST_CHAIN,
        transport: TEST_TRANSPORT,
    }).extend(publicActions);

    // need to deploy the FaucetToken to be able to use TP
    const ftkReceipt = await client.deployContract({
        abi: FaucetTokenInfo.abi,
        bytecode: FaucetTokenInfo.bytecode.object as Hex,
    }).then((hash) => {
        return client.waitForTransactionReceipt( {hash} );
    });

    if (!ftkReceipt || !ftkReceipt.contractAddress) {
        throw new Error("failed to deploy FTK contract");
    }

    // get address of newly deployed faucet token
    let ftkAddress = ftkReceipt.contractAddress;
    return ftkAddress;
}

export async function deployTandaPayContract(
    account: Account,
    ftkTokenAddress: Hex,
    secretaryAddr?: Hex,
): Promise<Hex> {
    let client = createWalletClient({
        account: account, 
        chain: TEST_CHAIN,
        transport: TEST_TRANSPORT,
    }).extend(publicActions);

    let secAddr = secretaryAddr ? secretaryAddr : account.address;

    const tpReceipt = await client.deployContract({
        abi: TandaPayInfo.abi,
        bytecode: TandaPayInfo.bytecode.object as Hex,
        args: [ftkTokenAddress, secAddr],
    }).then((hash) => {
        return client.waitForTransactionReceipt( {hash} );
    });

    if (!tpReceipt || !tpReceipt.contractAddress) {
        throw new Error("failed to deploy TP contract");
    }

    // get address of newly deployed tandapay contract
    let tpAddress = tpReceipt.contractAddress;
    return tpAddress;
}

export function getFtkContract<TClient extends WriteableClient>(
    contract_addr: Hex, 
    client: TClient
): FtkContractType<TClient> {
    return getContract({
        abi: FaucetTokenInfo.abi,
        address: contract_addr,
        client: client
    });
};

export function getAccountClientManagers(
    keys?: Hex[],
    tpContractAddress?: Hex,
    default_role: TandaPayRole = TandaPayRole.Member,
    make_first_secretary: boolean = true,
): AccountClientManager<WriteableClient>[] {
    let sec = make_first_secretary;
    let res = []

    if (!keys)
        keys = PRIVATE_KEYS;
    
    for (let key of keys) {
        // create an account
        let account = privateKeyToAccount(key);
        // create a wallet client
        let client = createWalletClient({
            account: account,
            chain: TEST_CHAIN,
            transport: TEST_TRANSPORT,
        });
        
        if (tpContractAddress) {
            // create a TandaPay manager
            let tpManager = createTandaPayManager(
                tpContractAddress,
                client,
                { clientRole: (sec ? TandaPayRole.Secretary : default_role) },
            );
            // set sec to false so we don't override the default after the 1st acc
            sec = false;
            // add to result
            res.push({ account, client, tpManager });
        } else {
            res.push({ account, client });
        }
    }

    return res;
};

export async function distributeFtk<TClient extends WriteableClient>(
    ftkContractAddr: Hex,
    accountClientManagers: AccountClientManager<TClient>[],
    amountOfFtk = 1000000,
) {
    for (let acm of accountClientManagers) {
        let c = getFtkContract(ftkContractAddr, acm.client);
        await c.write.faucet([BigInt(amountOfFtk) * (10n ** 18n)]);
    }
}

describe('test helpers work', () => {
    it('distributing FTK works', async () => {
        // get a few ACMs
        let acms = getAccountClientManagers();
        // deploy FTK contract with the first one
        let ftkAddr = await deployFtkContract(acms[0].account);
        // iterate through and let each of them call the faucet method.
        // we'll distribute 1.1 million FTK to each
        await distributeFtk(ftkAddr, acms, 1100000);

        for (let acm of acms) {
            let c = getFtkContract(ftkAddr, acm.client);
            let bal = await c.read.balanceOf([acm.account.address]);
            // here, we expect them to have more than 1M Ftk. The reason
            // for the discrepancy between 1.1M and 1M is just to avoid any
            // issues with rounding or gas or anything like that
            expect(bal).toBeGreaterThan(BigInt(1000000 * 10**18));
        }
    });
});