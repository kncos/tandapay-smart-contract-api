import { TandaPayInfo } from "_contracts/TandaPay";
import {
  createPublicClient,
  createWalletClient,
  getContract,
  http,
} from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { deployFaucetToken, deployTandaPay, makeAccounts, spawnAnvil } from "../test/helpers/tandapay_test_helpers";
import { TandaPayTestSuite } from "../test/helpers/tandapay_test_suite";

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


let a = await spawnAnvil();
const ftk = await deployFaucetToken();
const tp = await deployTandaPay(ftk);
let suite = new TandaPayTestSuite(ftk,tp);
const acc = makeAccounts(30)[29];
const info = await suite.secretary.read.getMemberInfoFromAddress(acc.address);
console.log(info);

a.kill();