export type TandaPayEventName =
  | "AddedToCommunity"
  | "AdditionalDayAdded"
  | "ApproveNewGroupMember"
  | "ApprovedGroupAssignment"
  | "AssignedToSubGroup"
  | "ClaimSubmitted"
  | "ClaimWhiteListed"
  | "CommunityCollapsed"
  | "CoverageUpdated"
  | "DefaultStateInitiatedAndCoverageSet"
  | "EmergencyBegan"
  | "EmergencyPayment"
  | "EmergencyhandOverSecretary"
  | "ExitedFromSubGroup"
  | "ForfeitClaim"
  | "FundClaimed"
  | "FundInjected"
  | "JoinedToCommunity"
  | "LeavedFromGroup"
  /** @deprecated seems to be unused? */
  | "ManualCollapseCancelled"
  | "ManualCollapsedCancelled"
  | "ManualCollapsedHappenend"
  | "MemberDefected"
  | "MemberStatusUpdated"
  | "NextPeriodInitiated"
  | "PremiumPaid"
  | "RefundIssued"
  | "RefundWithdrawn"
  | "SecretaryAccepted"
  | "SecretaryHandOverEnabled"
  | "SecretarySuccessorsDefined"
  | "SecretaryTransferred"
  | "ShortFallDivided"
  | "SubGroupCreated";

import { TandaPayInfo } from "_contracts/TandaPay";
import { ReadableClient, TandaPayContract } from "types";
import {
  Address,
  getContract,
  GetContractEventsParameters,
  GetLogsParameters,
  WatchContractEventParameters,
} from "viem";

export type GetTandaPayEventsParameters = Omit<
  GetContractEventsParameters<typeof TandaPayInfo.abi>,
  "address" | "abi"
>;
export type WatchTandaPayEventsParameters = Omit<
  WatchContractEventParameters<typeof TandaPayInfo.abi>,
  "address" | "abi"
>;
export type GetTandaPayLogsParameters = Omit<GetLogsParameters, "address">;

export default class TandaPayEvents<
  TClient extends ReadableClient = ReadableClient,
> {
  protected client: TClient;
  protected address: Address;
  public contract: TandaPayContract<TClient>;

  /**
   * @param client Any client compliant with `ReadableClient`. This could be a viem client with a defined `chain`
   * @param tpAddress Address of the TandaPay smart contract
   */
  constructor(client: TClient, tpAddress: Address) {
    this.client = client;
    this.address = tpAddress;

    this.contract = getContract({
      abi: TandaPayInfo.abi,
      address: this.address,
      client: this.client,
    });
  }
}
