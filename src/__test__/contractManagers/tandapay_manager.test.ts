import { PublicClient, WalletClient, Transport, Chain, Hex, createPublicClient, http, createWalletClient } from "viem";
import { Account, privateKeyToAccount } from "viem/accounts";
import { anvil } from "viem/chains";
import { FaucetTokenInfo } from "../../_contracts/FaucetToken";
import { TandaPayInfo } from "../../_contracts/TandaPay";
import { createTandaPayManager, TandaPayManager, WriteableTandaPayManager } from "../../contract_managers/tandapay_manager";
import { AssignmentStatus, isWriteableClient, TandaPayRole, TandaPayState, WriteableClient } from "../../contract_managers/types";

const secretaryAccount = privateKeyToAccount('0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80');
const additional_private_keys: Hex[] = [
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

let publicClient: PublicClient;
let walletClient: WalletClient<Transport, Chain, Account>;
let ftkAddress: Hex;
let tpAddress: Hex;
let memberWallets = makeWallets(additional_private_keys);
let memberManagers: WriteableTandaPayManager<WriteableClient>[] = [];
let allAddresses: Hex[] = [secretaryAccount.address];

function makeWallets(private_keys: Hex[]) {
    let wallets: WalletClient[] = [];
    for (let pk of private_keys) {
        wallets.push(createWalletClient({
            account: privateKeyToAccount(pk),
            chain: anvil,
            transport: http(),
        }));
    }
    return wallets;
}

beforeAll(async () => {
    // create a simple public client
    publicClient = createPublicClient({
        chain: anvil,
        transport: http(),
    });

    // create a wallet client. should automatically have
    // accounts since we're using anvil
    walletClient = createWalletClient({
        account: secretaryAccount, 
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

    // get address of newly deployed faucet token
    ftkAddress = ftkReceipt.contractAddress;

    // deploy TandaPay contract using the faucet token contract address and secretary's wallet address
    const tpReceipt = await walletClient.deployContract({
        abi: TandaPayInfo.abi,
        bytecode: TandaPayInfo.bytecode.object as Hex,
        args: [ftkAddress, secretaryAccount.address],
    }).then((hash) => {
        return publicClient.waitForTransactionReceipt( {hash} );
    });

    if (!tpReceipt || !tpReceipt.contractAddress) {
        throw new Error("failed to deploy TP contract");
    }

    tpAddress = tpReceipt.contractAddress;

    // here we'll make a TP manager for each member other than the default_account which is the secretary
    memberManagers = (() => {
        let managers = [];
        for (let w of memberWallets) {
            managers.push(createTandaPayManager(tpAddress, w, { clientRole: TandaPayRole.Member }));
        }
        return managers;
    })() as WriteableTandaPayManager<WriteableClient>[];


    // then add all of the regular members' addresses, with an immediately invoked function
    let memberAddressesNoSecretary: Hex[] = await (async () => {
        // build up an array of addresses by iterating through each memberWallet,
        // getting the address, then adding that address to the array
        let addresses: Hex[] = [];
        for (let w of memberWallets) {
            let [addr] = await w.getAddresses();
            addresses.push(addr);
        }
        return addresses;
    })();

    // add all of the memberAddresses we just computed into the array with all addresses
    allAddresses.push(...memberAddressesNoSecretary);


});

describe('TandaPayManager creation', () => {
    it('publicClient should not be a writeableClient', () => {
        expect(isWriteableClient(publicClient)).toBe(false);
    });

    it('walletClient should be a writeable client', () => {
        expect(isWriteableClient(walletClient)).toBe(true);
    });

    it('tp manager created from publicClient IS NOT a Writeable TP Manager, and should not have .write or .extend', () => {
        let tpManager = createTandaPayManager(tpAddress, publicClient);
        expect(tpManager).toBeInstanceOf(TandaPayManager);
        expect(tpManager).not.toBeInstanceOf(WriteableTandaPayManager);
        expect((tpManager as any).write).toBeUndefined();
        expect((tpManager as any).extend).toBeUndefined();
    });

    it('tp manager created from walletClient IS a Writeable TP Manager', () => {
        let tpManager = createTandaPayManager(tpAddress, walletClient);
        expect(tpManager).toBeInstanceOf(WriteableTandaPayManager);
    });

    it('tp manager created from walletClient has .extend and .write, but no .write.member or .write.secretary by default', () => {
        let tpManager = createTandaPayManager(tpAddress, walletClient);
        expect(tpManager.write).toBeDefined();
        expect(tpManager.extend).toBeDefined();
        expect(tpManager.write.member).toBeUndefined();
        expect(tpManager.write.secretary).toBeUndefined();
    });

    it('writeable tp manager created using { clientRole = member } should have .write.member but not .write.secretary', () => {
        let tpManager = createTandaPayManager(tpAddress, walletClient, { clientRole: TandaPayRole.Member });
        expect(tpManager.write.member).toBeDefined();
        expect(tpManager.write.secretary).toBeUndefined();
    });

    it('writeable tp manager created using { clientRole = secretary } should have both .write.member and .write.secretary', () => {
        let tpManager = createTandaPayManager(tpAddress, walletClient, { clientRole: TandaPayRole.Secretary });
        expect(tpManager.write.member).toBeDefined();
        expect(tpManager.write.secretary).toBeDefined();
    });
});

describe('Can get to the TandaPay default state from initial deployment using tp Manager', () => {
    it('The secretary is correct, i.e. matches the walletClient that deployed it', async () => {
        let tpManager = createTandaPayManager(tpAddress, walletClient, { clientRole: TandaPayRole.Secretary });
        let secretaryAddr: Hex = await tpManager.read.getSecretaryAddress();
        expect(secretaryAddr).toBe(secretaryAccount.address as Hex);
    });

    it('The secretary can add members and the number of members the contract has ends up matching', async () => {
        const tpManager = createTandaPayManager(tpAddress, walletClient, { clientRole: TandaPayRole.Secretary });
        // secretary needs to add themselves to the community
        await tpManager.write.secretary?.addMemberToCommunity(secretaryAccount.address);
        // secretary needs to add all of the members to the community
        for (const wallet of memberWallets) {
            const addresses = await wallet.getAddresses();
            await tpManager.write.secretary?.addMemberToCommunity(addresses[0]);
        }

        // getCurrentMemberID will essentially be the number of members in the TandaPay contract
        const memberAddresses = await tpManager.read.getCurrentMemberId();
        // we expect it to be 1 + memberWallets.length, because we have the secretary + all the members
        expect(memberAddresses).toEqual(BigInt(15));
    });

    it('The secretary can create subgroups and assign each member to a subgroup', async () => {
        const tpManager = createTandaPayManager(tpAddress, walletClient, { clientRole: TandaPayRole.Secretary });

        //* note that if the number of members changes in the future, this will need to change, but
        //* due to the nature of sub groups it's inconvenient to dynamically decide how each member is
        //* assigned to them for now. This solution should work, and later on if it doesn't, i'll change it
        let allManagers: WriteableTandaPayManager<WriteableClient>[] = [tpManager, ...memberManagers];
        for (let i = 0; i < 3; i++) {
            // create a new subgroup
            await tpManager.write.secretary?.createSubGroup();
            // then add 5 of the 15 members to it
            for (let j = 0; j < 5; j++) {
                // we'll calculate what subgroup we're in, then add which of the 5 members we're on for this subgroup
                let memberIndex = (i * 5) + j;
                
                // first, their status should just be that they've been aded by the secretary
                let assignmentStatus = (await tpManager.read.getMemberInfo(allAddresses[memberIndex], 0n)).assignmentStatus;
                expect(assignmentStatus).toBe(AssignmentStatus.AddedBySecretery);

                // then, actually assign that member to the subgroup. we expect their status to change to
                // AssignedToGroup, which means they've been assigned to a group by the secretary
                await tpManager.write.secretary?.assignMemberToSubgroup(allAddresses[memberIndex], BigInt(i+1));
                assignmentStatus = (await tpManager.read.getMemberInfo(allAddresses[memberIndex], 0n)).assignmentStatus;
                expect(assignmentStatus).toBe(AssignmentStatus.AssignedToGroup);

                // then, the member will approve their subgroup assignment. If they've reorged, at this point they'll
                // be "ApprovedByMember", which means their subgroup colleagues still need to approve them. Otherwise,
                // they will be "AssignmentSuccessful" and will be in part of a subgroup. Since reorging isn't possible
                // at this stage, they will be successfully assigned
                await allManagers[memberIndex].write.member?.approveSubgroupAssignment();
                assignmentStatus = (await tpManager.read.getMemberInfo(allAddresses[memberIndex], 0n)).assignmentStatus;
                expect(assignmentStatus).toBe(AssignmentStatus.AssignmentSuccessfull);
            }
        }
    });

    it('can go into the default state', async () => {
        // The criteria to enter the default state in a TandaPay community is:
        // 1.) added at least 12 members to the community (at this point, we have 15)
        // 2.) have divided the members into at least 3 subgroups, each of which have a member count between
        //     4 and 7 (inclusive). we have 5 members in each of our 3 subgroups
        // 3.) Finally, to go into the default state, we have to specify the total community coverage.

        const tpManager = createTandaPayManager(tpAddress, walletClient, { clientRole: TandaPayRole.Secretary });
        await tpManager.write.secretary?.initiateDefaultState(1500n);

        let communityState = await tpManager.read.getCommunityState();
        expect(communityState).toBe(TandaPayState.Default);
    });
});
