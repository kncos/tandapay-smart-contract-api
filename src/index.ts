
import { Account, createTestClient, createWalletClient, getContract, GetContractReturnType, Hex, http, publicActions, TransactionReceipt, walletActions, WalletClient } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { anvil } from "viem/chains";
import { deployContract } from "./contract_managers/utils";
import { FaucetTokenInfo } from "./_contracts/FaucetToken";
import { AssignmentStatus, ContractDeployerClient, memberInfoJsonReplacer, MemberStatus, periodInfoJsonReplacer, subgroupInfoJsonReplacer, TandaPayRole } from "./contract_managers/types";
import { createTandaPayManager, WriteableTandaPayManager } from "./contract_managers/tandapay_manager";
import { TandaPayInfo } from "./_contracts/TandaPay";
import { watchContractEvent } from "viem/actions";

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
const ftkAddr = await deployContract(FaucetTokenInfo.abi, FaucetTokenInfo.bytecode.object, clients[0]);
const tpAddr = await deployContract(TandaPayInfo.abi, TandaPayInfo.bytecode.object, clients[0], ftkAddr, clients[0].account.address);

const cinstance = getContract({
    abi: TandaPayInfo.abi,
    address: tpAddr,
    client: clients[0]  
});

const unwatch = cinstance.watchEvent.RefundIssued({
    onLogs: (logs) => console.log("refund issued!"),
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

setTimeout(unwatch, 5000);

// TODO: investigate waitForTransactionReceipt in all write methods!!!!!

// https://viem.sh/docs/contract/getContract#calling-methods

// steps to deploy a TandaPay smart contract:
// 1. select an ERC-20 token or deploy one, the address of the SC is needed in the constructor
// 2. need an account & client to deploy it.
// 3. after we've got an account and client, we can deploy the contract, get the address, and use that to make a ContractInstance
// 4. methods on the contract can then be done using .read and .write and should auto populate methods

// This is what a secretary will do in a new TandaPay community. but if someone is joining a community
// for the first time, then they will actually just need to connect to the smart contract, and they won't
// necessarily be deploying it themselves.

// So, we need to:
// 1.) include methods for connecting to an existing smart contract
// 2.) methods for deploying a new smart contract and connecting to that one

// therefore, our separation of concerns should be that we have a module responsible
// for the management of a TandaPay contract instance. Perhaps using DI?
// and we have a whole separate module responsible for deploying it


// So, right now the questions to answer are:
// 1. "What information needs to be kept from a newly deployed smart contract?"
// ---> this will help us decide whether we need an object/class that maintains state, or
// ---> instead just a stateless method that deploys it and returns the hash
//
// 2. "How do we determine if we're the secretary deploying a smart contract or if we're a user joining an existing community?"
// ---> (a) there will need to be validation that any smart contract we connect to is actually a valid TandaPay smart contract
// ---> (b) the actual question can probably be resolved in the app, rather than at the library level where we are now
//
// 3. "What functionality should a TandaPay SC manager have?"
// ---> (a) Ideally, the list of methods that are exposed should depend on the client that is connecting to the SC manager.
//          for instance, a ContractInstance already kind of does this. Depending on if a publicClient or Wallet connects,
//          it determines whether or not read/write functionality are included, respectively.
// ---> (b) Certain methods can only be called at certain times too. Many method calls might be valid on the surface or can't
//          be checked syntactically because they depend on the SC state and might be reverted. So, we should simulate calls
//          and test if transactions will actually work or be reverted
// ---> (c) TandaPay requires some level of collaboration, so there should be an event queue that constantly polls the state of
//          the smart contract and determines if any actions need to be taken by the client that's connected to it. For publicClient,
//          of course there won't be any. If it's a regular user, there will be some. For secretaries, there will be some special ones
//
// 4. "What info does a TandaPay SC manager need?"
// ---> (a) It needs a ContractInstance 
// ---> (b) ContractInstance needs an abi, contract address, and client.
// ---> (c) We already have the ABI, but we're missing contract address and client. These should be configurable.
//
// 5. "How can we structure layers of abstraction for SC manager?"
// ---> (a) One idea would be to have a base SC manager class that just accepts the address and client,
// --->     and just has read-only methods.
// ---> (b) Then there could be a sub-class for members, (subgroup leaders?), and secretaries.
// ---> *** with this idea, the base class could be used for just basic monitoring of the state of a
// --->     TandaPay smart contract, on the chain, and the sub-classes can provide more fine grained control.
// ---> ??? could i extend the regular ContractInstance class that already exists?

