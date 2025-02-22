//import { Client } from "viem";
//import { TandaPayContract } from "../types";
//
///**
// * keys are the identifiers used in the smart contract, values are the identifiers that will be used
// * in this code base.
// */
//const eventIdentifierMap = {
//    AddedToCommunity: "",
//    AdditionalDayAdded: "",
//    ApproveNewGroupMember: "",
//    ApprovedGroupAssignment: "",
//    AssignedToSubGroup: "",
//    ClaimSubmitted: "",
//    ClaimWhiteListed: "",
//    CommunityCollapsed: "",
//    CoverageUpdated: "",
//    DefaultStateInitiatedAndCoverageSet: "",
//    EmergencyBegan: "",
//    EmergencyPayment: "",
//    EmergencyhandOverSecretary: "",
//    ExitedFromSubGroup: "",
//    ForfeitClaim: "",
//    FundClaimed: "",
//    FundInjected: "",
//    JoinedToCommunity: "",
//    LeavedFromGroup: "",
//
//    /** @deprecated seems to be unused? */
//    ManualCollapseCancelled: "",
//
//    ManualCollapsedCancelled: "",
//    ManualCollapsedHappenend: "",
//    MemberDefected: "",
//    MemberStatusUpdated: "",
//    NextPeriodInitiated: "",
//    PremiumPaid: "",
//    RefundIssued: "",
//    RefundWithdrawn: "",
//    SecretaryAccepted: "",
//    SecretaryHandOverEnabled: "",
//    SecretarySuccessorsDefined: "",
//    SecretaryTransferred: "",
//    ShortFallDivided: "",
//    SubGroupCreated: "",
//} as const;
//
//
//export class TandaPayEvents<TClient extends Client> {
//    contractInstance: TandaPayContract<TClient>;
//
//    constructor(contractInstance: TandaPayContract<TClient>) {
//        this.contractInstance = contractInstance;
//    }
//}

import { TandaPayInfo } from "_contracts/TandaPay";
import { Address, PublicClient, TransactionReceipt } from "viem";


export default class TandaPayWatcher<TClient extends PublicClient> {
  protected client: TClient;
  protected receipt: TransactionReceipt;

  constructor(client: TClient, deploymentReceipt: TransactionReceipt) {
    this.client = client;
    this.receipt = deploymentReceipt;

    if (!this.receipt || !this.receipt.contractAddress)
      throw new Error('attempting to construct TandaPayWatcher with invalid receipt!');

    this.receipt = deploymentReceipt; 
  }

  async getEvents() {
    return await this.client.getContractEvents({
      address: this.receipt.contractAddress as Address,
      abi: TandaPayInfo.abi,
    });
  }
}
