import { Account, Address, Chain, Client, GetContractReturnType, Hex } from "viem";
import { TandaPayInfo } from "../_contracts/TandaPay";

// client type that results in a writeable contract instance
export type WriteableClient = Client & { chain: Chain; account: Account; };

// Generic type for contract instances for the TandaPay smart contract
export type TandaPayContract<TClient extends Client>
    = GetContractReturnType<typeof TandaPayInfo.abi, TClient, Address>;

// enum type representing the different states the TandaPay community can be in
//? when i wrote this enum, it already knew i wanted to write initialization, default,
//? fractured, and collapsed. How??? I didn't even know my IDE had this capability, afaik
//? those terms aren't referenced anywhere in this code base yet, only in the SC code
export enum TandaPayState {
    Initialization = 0,
    Default = 1,
    Fractured = 2,
    Collapsed = 3
};

export type SubgroupInfo = {
    id: bigint;
    members: readonly Hex[];
    isValid: boolean;
};

export type ClaimInfo = {
    id: bigint;
    amount: bigint;
    isWhitelisted: boolean;
    claimantWalletAddress: Hex;
    claimantSubgroupId: bigint;
    hasClaimantClaimedFunds: boolean;
};

// TODO: Experiment with this and see what values it returns,
// TODO: some of these variable names were strange in the smart contract and undocumented
// TODO: Currently, the names here represent my best guess on what each thing does
export type MemberInfo = {
    id: bigint;
    subgroupId: bigint;
    walletAddress: Hex;
    communityEscrowAmount: bigint;
    savingsEscrowAmount: bigint;
    pendingRefundAmount: bigint;
    availableToWithdrawAmount: bigint;
    isEligibleForCoverageThisPeriod: boolean;
    isPremiumPaidThisPeriod: boolean;
    queuedRefundAmountThisPeriod: bigint;
    // TODO: Convert to enum after figuring out mappings
    memberStatus: number;
    assignmentStatus: number;
}// IDEA:
// - have member/secretary write methods be a member of this class
// - have read methods be a member of this class
// - the configuration can change depending on the client, so if a regular public client is passed, just
//   read methods will be available, but if a walletclient is passed, it could make either member/secretary
//   methods available

export enum TandaPayRole {
    None,
    Member,
    Secretary
};

