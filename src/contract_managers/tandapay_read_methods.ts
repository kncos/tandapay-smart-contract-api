import { Client, Hex } from "viem";
import { TandaPayState } from "./types";
import { TandaPayContract } from "./types"

// TODO: Improve comments in this file. they were copy+pasted directly from a README in the smart contract source
// TODO: Implement wrappers for the manually collapsed methods and figure out how they work by reading SC source
export class TandaPayReadMethods<TClient extends Client> {
    protected contractInstance: TandaPayContract<TClient>;

    protected get read() {
        return this.contractInstance.read;
    }

    constructor(contractInstance: TandaPayContract<TClient>) {
        this.contractInstance = contractInstance;
    }

    // 1. getPaymentToken =>
    // Use case -- This function will return the current payment token (LUSD) address.
    // Arguments --- none required
    getPaymentTokenAddress = async () => await this.read.getPaymentToken();

    // 2. getCurrentMemberId =>
    // Use case -- This function will return the current member Id. 
    // Arguments --- none required
    getCurrentMemberId = async () => await this.read.getCurrentMemberId(); 

    // 3. getCurrentSubGroupId =>
    // Use case -- This function will return the current SubGroup Id. 
    // Arguments --- none required
    getCurrentSubgroupId = async () => await this.read.getCurrentSubGroupId();
    
    // 4. getCurrentClaimId =>
    // Use case -- This function will return the current Claim Id. 
    // Arguments --- none required 
    getCurrentClaimId = async () => await this.read.getCurrentClaimId();

    // 5. getPeriodId =>
    // Use case -- This function will return the current Period Id.
    // Arguments --- none required 
    getCurrentPeriodId = async () => await this.read.getPeriodId();

    // 6. getTotalCoverage =>
    // Use case -- This function will return the current total coverage amount.
    // Arguments --- none required 
    getTotalCoverageAmount = async () => await this.read.getTotalCoverage();

    // 7. getBasePremium =>
    // Use case -- This function will return the current base premium amount.
    // Arguments --- none required 
    getBasePremium = async () => await this.read.getBasePremium();

    // 8. getManuallyCollapsedPeriod =>
    // Use case -- if manually collapsed then, this function will return the manually collapsed period Id.
    // Arguments --- none required 
    //? is this needed for now? read SC code and find out how this actually works later

    // 9. getIsManuallyCollapsed =>
    // Use case -- This function will return if the manual collapse happened or not.
    // Arguments --- none required 
    //? is this needed for now? find out how this actually works later

    // 10. getCommunityState =>
    // Use case -- This function will return the current community state in number, 0 means it's in initialization state, 1 means default, 2 means fractured, and 3 means collapsed.
    // Arguments --- none required 
    // TODO: decide whether TandaPayState custom type should be moved
    getCommunityState = async () => await this.read.getCommunityState() as TandaPayState; 

    // 11. getSubGroupIdToSubGroupInfo =>
    // Use case -- This function will return the SubGroup-related information.
    // Arguments --- The Caller will have to provide the SubGroup Id.
    // TODO: make a custom type that matches this
    getSubgroupInfo = async (subgroupId: bigint) => await this.read.getSubGroupIdToSubGroupInfo([subgroupId]);

    // 12. getPeriodIdToClaimIdToClaimInfo =>
    // Use case -- This function will return the claim-related information.
    // Arguments --- The caller will have to provide the period Id and the Claim Id.
    // TODO: make a custom type that matches this
    getClaimInfo = async (periodId: bigint, claimId: bigint) => await this.read.getPeriodIdToClaimIdToClaimInfo([periodId, claimId])

    // 13. getPeriodIdToClaimIds =>
    // Use case -- This function will return the claim Ids of the period.
    // Arguments ---The caller will have to provide the period Id.
    getClaimIdsInPeriod = async (periodId: bigint) => await this.read.getPeriodIdToClaimIds([periodId]);

    // 14. getPeriodIdToDefectorsId =>
    // Use case -- This function will return the defectors Ids of the period.
    // Arguments --- The caller will have to provide the period Id.
    getDefectorMemberIdsInPeriod = async (periodId: bigint) => await this.read.getPeriodIdToDefectorsId([periodId]);

    // 15. getPeriodIdToManualCollapse =>
    // Use case -- This function will return the manual collapse information.
    // Arguments --- The caller will have to provide the period Id.
    //? is this needed for now? find out how this actually works later.

    // 16. getMemberToMemberId =>
    // Use case -- This function will return the member Id of the member.
    // Arguments --- The caller will have to provide the member's wallet address.
    getMemberIdFromAddress = async (walletAddress: Hex) => await this.read.getMemberToMemberId([walletAddress]);

    // 17. getPeriodIdWhiteListedClaims =>
    // Use case -- This function will return the white-listed claim Ids of the period
    // Arguments --- The caller will have to provide the period Id.
    getWhitelistedClaimIdsInPeriod = async (periodId: bigint) => await this.read.getPeriodIdWhiteListedClaims([periodId]);

    // 18. getMemberToMemberInfo =>
    // Use case -- This function will return the member's information
    // Arguments --- The caller will have to provide the member's wallet address and an expected period Id. 
    // TODO: make a custom type for this
    // TODO: improve naming/clarity for this
    getMemberInfoFromAddress = async (walletAddress: Hex, periodId: bigint) => await this.read.getMemberToMemberInfo([walletAddress, periodId])

    //! Docs weren't provided for following functions, i'll have to write them myself and inspect SC code to use

    // retrieves the address of the secretary
    getSecretaryAddress = async () => await this.read.secretary();
}


//? Any boxes checked below means the method has been used in a wrapper in the class above
//* these were documented by MD
// - [x] this.read.getTotalCoverage
// - [x] this.read.getSubGroupIdToSubGroupInfo
// - [x] this.read.getPeriodIdWhiteListedClaims
// - [x] this.read.getPeriodIdToDefectorsId
// - [x] this.read.getPeriodIdToClaimIds
// - [x] this.read.getPeriodIdToClaimIdToClaimInfo
// - [x] this.read.getPeriodId
// - [x] this.read.getPaymentToken
// - [x] this.read.getMemberToMemberInfo
// - [x] this.read.getMemberToMemberId
// - [x] this.read.getCurrentSubGroupId
// - [x] this.read.getCurrentMemberId
// - [x] this.read.getCurrentClaimId
// - [x] this.read.getCommunityState
// - [x] this.read.getBasePremium
// - [ ] this.read.getManuallyCollapsedPeriod
// - [ ] this.read.getIsManuallyCollapsed
// - [ ] this.read.getPeriodIdToManualCollapse

//! these weren't documented by MD.
//TODO: figure out why these weren't documented, such as:
//TODO: - if any of them were supposed to be private/internal use only
//TODO: - if any of them are unused or have no utility to us here
// - [ ] this.read.secretary
// - [ ] this.read.getUpcomingSecretary
// - [ ] this.read.getSecretarySuccessors
// - [ ] this.read.getPeriodIdToPeriodInfo
// - [ ] this.read.getIsHandingOver
// - [ ] this.read.getIsAllMemberNotPaidInPeriod
// - [ ] this.read.getIsAMemberDefectedInPeriod
// - [ ] this.read.getHandoverStartedAt
// - [ ] this.read.getEmergencySecretaries
// - [ ] this.read.getEmergencyHandoverStartedAt
// - [ ] this.read.getEmergencyHandOverStartedPeriod
// - [ ] this.read.EmergencyStartTime