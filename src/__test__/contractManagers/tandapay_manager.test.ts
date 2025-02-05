import { ChildProcess, spawn } from "child_process";
import { Account, Chain, createTestClient, createWalletClient, Hex, http, parseEther, PublicActions, publicActions, TestActions, TestClient, WalletActions, walletActions } from "viem";
import { foundry } from "viem/chains";
import { deployContract } from "../../contract_managers/utils";
import { TandaPayInfo } from "../../_contracts/TandaPay";
import { FaucetTokenInfo } from "../../_contracts/FaucetToken";
import { mnemonicToAccount, privateKeyToAccount } from "viem/accounts";
import { TandaPayRole, WriteableClient } from "../../contract_managers/types";
import { createTandaPayManager } from "../../contract_managers/tandapay_manager";


const defaultMnemonic = "test test test test test test test test test test test junk";

let anvilProcess: ChildProcess;
let testClient: WriteableClient & TestActions & WalletActions & PublicActions;
let tpAddr: Hex;

beforeEach(async () => {
    // spawn an anvil instance
    anvilProcess = spawn("anvil", ["-a", "0"], {
        stdio: "ignore", //"inherit",
        shell: true,
    });

    // wait to ensure the anvil instance has spawned
    await new Promise((resolve) => setTimeout(resolve, 500));

    // create a test client connection to the anvil instance
    testClient = createTestClient({
        // i did this to make the test client work with some of this wrapper's methods that require
        // account to be defined. Ideally this shouldn't impact account impersonation?
        account: mnemonicToAccount(defaultMnemonic),
        chain: foundry,
        mode: 'anvil',
        transport: http(),
    }).extend(publicActions).extend(walletActions);

    let addresses = await testClient.getAddresses();
    testClient.setBalance({address: addresses[0], value: parseEther('10000')});
    let ftkReceipt = await deployContract(FaucetTokenInfo.abi, FaucetTokenInfo.bytecode.object, testClient);
    let tpReceipt = await deployContract(TandaPayInfo.abi, TandaPayInfo.bytecode.object, testClient, ftkReceipt.contractAddress, addresses[0])
    tpAddr = tpReceipt.contractAddress ?? fail("failed to deploy contract");

    // automine = true. This needs to be true so that when
    // we advance the time or do other actions on the test network,
    // they actually take effect and work on the next transaction
    await testClient.setAutomine(true);
});


test("can get the secretary", async () => {
    let addresses = await testClient.getAddresses();
    testClient.setBalance({address: addresses[0], value: parseEther('10000')});

    let tpm = createTandaPayManager(tpAddr, testClient, { txWaitClient: testClient, clientRole: TandaPayRole.Secretary })

    await testClient.impersonateAccount({address: mnemonicToAccount(defaultMnemonic, {accountIndex: 1}).address});
});


afterEach(() => {
    anvilProcess.kill();
})


