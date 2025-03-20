import { TandaPayInfo } from "_contracts/TandaPay";
import {
  createPublicClient,
  createWalletClient,
  getContract,
  http,
} from "viem";
import { privateKeyToAccount } from "viem/accounts";

const writeMethods = TandaPayInfo.abi
  .filter((m) => m.type === "function" && m.stateMutability !== "view")
  .map((m) => m.name);
console.log(writeMethods.join("\n"));

//AdvanceToTheNextPeriod
//EmergencyWithdrawal
//addAdditionalDay
//addToCommunity
//approveNewSubgroupMember
//approveSubGroupAssignment
//assignToSubGroup
//beginEmergency
//cancelManualCollapsBySecretary
//createSubGroup
//defects
//defineSecretarySuccessor
//divideShortFall
//emergencyHandOverSecretary
//emergencyRefund
//endEmergency
//exitSubGroup
//handoverSecretary
//initiatDefaultStateAndSetCoverage
//injectFunds
//issueRefund
//joinToCommunity
//leaveFromASubGroup
//manualCollapsBySecretary
//payPremium
//secretaryAcceptance
//submitClaim
//updateCoverageAmount
//updateMemberStatus
//whitelistClaim
//withdrawClaimFund
//withdrawRefund

//const c = getContract({
//  abi: TandaPayInfo.abi,
//  address: '0x0',
//  client: {
//    public: createPublicClient({transport: http()}),
//    wallet: createWalletClient({transport: http(), account: privateKeyToAccount('0x0')}),
//  }
//})
