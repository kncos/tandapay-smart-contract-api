import { Account, Address, Chain, Client, getContract, GetContractReturnType, Hex, PublicClient, Transport, WalletClient } from "viem";
import { TandaPayInfo } from "../_contracts/TandaPay";

export default class TandaPayManager<TClient extends Client> {
    private contractInstance: GetContractReturnType<typeof TandaPayInfo.abi, TClient, Address>;//: TandaPayContractInstance;

    // Idea: we could have the constructor poll the blockchain to figure out:
    //  a.) is the contract address valid
    //  b.) what role the account associated with TClient plays and then expose only methods that are accessible to them
    // -- might be better to do this elsewhere or potentially on another layer though
    constructor(contract_address: Hex, client: TClient) {
        this.contractInstance = getContract({
            address: contract_address,
            abi: TandaPayInfo.abi,
            client: client,
        });
    }

    //TODO: refactor
    async getSecretary(): Promise<Hex> {
        return this.contractInstance.read.secretary();
    }

    /**
     * @description This method adds a member to the TandaPay community. It may only be called by a Secretary client 
     * @param address - The wallet address of the member being added to the community.
     * @throws An exception if the smart contract transaction will fail, or if contractInstance doesn't have `simulate` or `write`
     * @returns A promise that resolves once data has actually been written to the blockchain
     */
    async addMemberToCommunity<T extends TClient>(
        // By specifying `this` with a refined type, we're basically saying: This method can only be
        // invoked on instances of TandaPayManager where the generic type T extends TClient and has the
        // additional properties `chain`, `account`. A chain and account are required for us to
        // have access to write (and simulate?) so this method only makes sense in that context.
        this: TandaPayManager<T & { chain: Chain; account: Account; }>,
        address: Hex,
    ): Promise<void> {
        const { simulate, write } = this.contractInstance;
        
        // Is this necessary? write and simulate should be available if T has chain and account.
        if (!simulate || !write) {
            throw new Error("This client does not support the required methods for `addMember`! Either no .simulate or .write");
        }

        // simulate the transaction first. If this fails, it will throw and exception
        const { request } = await simulate.addToCommunity([address]);
        // finally, write to the actual blockchain
        await write.addToCommunity([address]);
    }

    async createSubGroup<T extends TClient>(
        this: TandaPayManager<T & { chain: Chain; account: Account; }>,
    ): Promise<void> {
        const { simulate, write } = this.contractInstance;
        
        // Is this necessary? write and simulate should be available if T has chain and account.
        if (!simulate || !write) {
            throw new Error("This client does not support the required methods for `addMember`! Either no .simulate or .write");
        }
        
        // simulate the transaction first. If this fails, it will throw and exception
        const { request } = await simulate.createSubGroup();
        // finally, write to the actual blockchain
        await write.createSubGroup();
    }
}

/*
1. addToCommunity =>
Use case -- This function will be used to add a new member to the TandaPay community.
Arguments --- The secretary needs to provide the member's wallet address while adding a member to the community.

2. createSubGroup=>
Use case -- This function will be used to create a SubGroup for the TandaPay community.
Arguments --- none required.

3 . assignToSubGroup =>
Use case -- This function will be used to assign a member to a SubGroup.
Arguments --- The secretary needs to provide the member's wallet, the SubGroup ID, if the member is being re-orged or not using a bool variable.

4. initiatDefaultStateAndSetCoverage =>
Use case -- This function will be used to set the default coverage and initiate the default state of the community.
Arguments --- The secretary will have to pass the default coverage amount while calling this function.

5. whitelistClaim =>
Use case -- This function will be used to whitelist a claim submitted by the claimants.
Arguments --- The secretary will have to pass the claim ID while calling this function

6. updateCoverageAmount =>
Use case -- This function will be used to update the current total coverage amount.
Arguments --- The secretary will have to pass the new coverage amount while calling this function

7. defineSecretarySuccessor =>
Use case -- This function will be used to define the secretary successors list.
Arguments --- The secretary will have to pass an array of addresses while calling this function

8. handoverSecretary =>
Use case -- This function will be used to hand over the secretary to a new member who is in line with the successors.
Arguments --- The secretary will have to pass an address while calling this function if the secretary has a preferred successor otherwise zero address.

9. injectFunds =>
Use case -- This function will be used to inject funds by the secretary while necessary.
Arguments --- none required

10. divideShortFall =>
Use case -- This function will be used to divide the short amount among all the members.
Arguments --- none required

11. addAdditionalDay =>
Use case -- This function will be used to add a day before the end of the period.
Arguments --- none required

12. manualCollapsBySecretary =>
Use case -- This function will be used to manually collapse the community.
Arguments --- none required

13. cancelManualCollapsBySecretary =>
Use case -- This function will be used to cancel the manual collapse which was enabled by the secretary.
Arguments --- none required

14. AdvanceToTheNextPeriod =>
Use case -- This function will be used to advance the current period and initiate the next period.
Arguments --- none required
*/