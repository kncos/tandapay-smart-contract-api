
import { Account, createTestClient, createWalletClient, getContract, GetContractReturnType, Hex, http, publicActions, TransactionReceipt, walletActions, WalletClient } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { anvil } from "viem/chains";
import { deployContract } from "./contract_managers/utils";
import { FaucetTokenInfo } from "./_contracts/FaucetToken";
import { AssignmentStatus, ContractDeployerClient, memberInfoJsonReplacer, MemberStatus, periodInfoJsonReplacer, subgroupInfoJsonReplacer, TandaPayRole } from "./contract_managers/types";
import { createTandaPayManager, WriteableTandaPayManager } from "./contract_managers/tandapay_manager";
import { TandaPayInfo } from "./_contracts/TandaPay";
import { watchContractEvent } from "viem/actions";
import { spawn } from "child_process";


let anvilProcess = spawn("anvil", ["-a", "15"], {
    stdio: "inherit",
    shell: true,
});

const testClient = createTestClient({
    chain: anvil,
    mode: 'anvil',
    transport: http(),
}).extend(publicActions);

await testClient.setAutomine(true);

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

// create a bunch of accounts from those private keys
const accounts = ((keys) => {
    const accountArr: Account[] = [];
    for (const key of keys) {
        accountArr.push(privateKeyToAccount(key));
    }
    return accountArr;
})(PRIVATE_KEYS);

// create a bunch of clients that can write and deploy contracts from those accounts
const clients = ((accs) => {
    const clientArr: ContractDeployerClient[] = [];
    for (const account of accs) {
        const c = createWalletClient({
            account: account,
            chain: anvil,
            transport: http(),
        }).extend(publicActions);

        clientArr.push(c);
    }
    return clientArr;
})(accounts);


// deploy the faucet token and TandaPay smart contracts
const ftkreceipt = await deployContract(FaucetTokenInfo.abi, FaucetTokenInfo.bytecode.object, clients[0]);
const ftkAddr = ftkreceipt.contractAddress as Hex;

const tpreceipt = await deployContract(TandaPayInfo.abi, TandaPayInfo.bytecode.object, clients[0], ftkAddr, clients[0].account.address);
const tpAddr = tpreceipt.contractAddress as Hex;

const cinstance = getContract({
    abi: TandaPayInfo.abi,
    address: tpAddr,
    client: clients[0]  
});

// create a contract instance for each client for the FTK token 
const ftkContracts = ((clients) => {
    const ftkContracts = [];
    for (const client of clients) {
        const c = getContract({
            abi: FaucetTokenInfo.abi,
            address: ftkAddr,
            client: client,
        });
        ftkContracts.push(c);
    }
    return ftkContracts;
})(clients);

// easily convert an amount of FTK/ETH/etc. to wei
const toWei = (input: bigint) => input * (10n ** 18n);

// give every member a bunch of FTK to start with
const startBal = toWei(2_500_000n);
for (const acc of accounts) {
    let hash = await ftkContracts[0].write.distribute([acc.address, startBal]);
    await clients[0].waitForTransactionReceipt({ hash });
}

// create tpManagers for each account for the TandaPay smart contract
const tpManagers = ((clients, tpAddress) => {
    const tpArr: WriteableTandaPayManager<ContractDeployerClient>[] = [];
    for (const c of clients) {
        const tpm = createTandaPayManager(tpAddress, c);
        tpArr.push(tpm);
    }
    return tpArr;
})(clients, tpAddr);

// let first one be the secretary
tpManagers[0].extend({ 
    clientRole: TandaPayRole.Secretary, 
    txWaitClient: clients[0],
});

// let remaining ones be members
for (let i = 1; i < tpManagers.length; i++) {
    tpManagers[i].extend({
        clientRole: TandaPayRole.Member,
        txWaitClient: clients[0],
    });
}

const SUBGROUPS = 3n;
const MEMBERS_PER_SUBGROUP = 5n;

// now, the secretary can get the community out of the initialization state
for (let i = 0n; i < SUBGROUPS; i++) {
    // create a subgroup
    await tpManagers[0].write.secretary?.createSubGroup();
    for (let j = 0n; j < MEMBERS_PER_SUBGROUP; j++) {
        // add members to the subgroup
        const accIndex = Number((i*MEMBERS_PER_SUBGROUP) + j);
        const accAddr = accounts[accIndex].address;

        // secretary adds them
        await tpManagers[0].write.secretary?.addMemberToCommunity(accAddr);
        // secretary assigns them to a subgroup. (i+1 because subgroup IDs start at 1)
        await tpManagers[0].write.secretary?.assignMemberToSubgroup(accAddr, i+1n);
    }
}

// secretary can then exit the initialization state
const TOTAL_COVERAGE = toWei(15000n);
await tpManagers[0].write.secretary?.initiateDefaultState(TOTAL_COVERAGE);

const NUM_MEMBERS = SUBGROUPS * MEMBERS_PER_SUBGROUP;
const BASE_PREMIUM = TOTAL_COVERAGE / NUM_MEMBERS;

// join fee will be 110% of the base premium
const JOIN_FEE = (BASE_PREMIUM * 110n) / 100n;

// now, each member needs to send joinCommunity and pay the initial fee, and approve their subgroup assignment
for (let i = 0; i < tpManagers.length; i++) {
    const tpm = tpManagers[i];
    const ftk = ftkContracts[i];
   
    const hash = await ftk.write.approve([tpAddr, JOIN_FEE]);
    await clients[0].waitForTransactionReceipt({ hash });
    await tpm.write.member?.joinCommunity();
    await tpm.write.member?.approveSubgroupAssignment(); 
}

async function payPremiums() {
    // now each member needs to pay their first premium and the community may advance
    for (let i = 0; i < tpManagers.length; i++) {
        const tpm = tpManagers[i];
        const ftk = ftkContracts[i];

        // for the first premium, it will be equal to JOIN_FEE again, since the first
        // premium is also 110% (110 + 110 = 220%, so 120% goes to savings and 100% goes to community escrow)
        const hash = await ftk.write.approve([tpAddr, JOIN_FEE]);
        await clients[0].waitForTransactionReceipt({ hash });
        let txReceipt = await tpm.write.member?.payPremium(true) as TransactionReceipt;
        //console.log(txReceipt.blockNumber)
    }

}

async function getCurPeriodInfo() {
    const curPeriod = await tpManagers[0].read.getCurrentPeriodId();
    const pInfo = await tpManagers[0].read.getPeriodInfo(curPeriod);
    return pInfo;
}

async function printEverything() {
    for (const account of accounts) {
        let info = await tpManagers[0].read.getMemberInfoFromAddress(account.address);
        let balance = await ftkContracts[0].read.balanceOf([account.address]);

        console.log(JSON.stringify(info, memberInfoJsonReplacer, 2), " ftk bal: ", (balance / (10n ** 18n)));
    }

    const pInfo = await getCurPeriodInfo();

    console.log("\n---- period info ----\n");
    console.log(JSON.stringify(pInfo, periodInfoJsonReplacer, 2));
    console.log("\n---- subgroup info ----\n");

    for (let i = 1n; i <= SUBGROUPS; i++) {
        const sInfo = await tpManagers[0].read.getSubgroupInfo(i);
        console.log(JSON.stringify(sInfo, subgroupInfoJsonReplacer, 2));
    }
}


const daysToSeconds = (days: number) => days * 60 * 60 * 24;

const increaseTime = async (seconds: number) => {
    await testClient.increaseTime({
        seconds
    });
    await testClient.mine({blocks: 1});
}

// pay premiums for period 1 and advance to next period and next payment window
await payPremiums();
await printEverything();
await tpManagers[0].write.secretary?.advancePeriod();
await increaseTime(daysToSeconds(3.5));
await tpManagers[0].write.member?.issueRefund();
await increaseTime(daysToSeconds(24.5));
await printEverything();

await payPremiums();
await increaseTime(daysToSeconds(4));
await printEverything();
await tpManagers[0].write.secretary?.advancePeriod();
await increaseTime(daysToSeconds(3.5));
await tpManagers[0].write.member?.issueRefund();
await increaseTime(daysToSeconds(24.5));
await printEverything();

await payPremiums();
await increaseTime(daysToSeconds(4));
await printEverything();
await tpManagers[0].write.secretary?.advancePeriod();
await increaseTime(daysToSeconds(3.5));
await tpManagers[0].write.member?.issueRefund();
await increaseTime(daysToSeconds(24.5));
await printEverything();

anvilProcess.kill();

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
