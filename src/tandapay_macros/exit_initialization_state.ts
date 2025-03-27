import { ExpectedSuccessorCounts, InitializationStateConstants } from "tandapay_constants";
import { Address, formatUnits } from "viem";
import { getAutoReorgTransactions } from "./auto_reorg/auto_reorg_transactions";
import { getSecretarySuccessorList } from "tandapay_actions/read_actions";
import { ApiNumericType, MemberInfo } from "types";

export type ExitInitializationStateParams = {
  newMembersToAdd: Address[];
  totalCoverageWei: bigint;
  secretarysuccessorsList: Address[];
  allMemberInfo: MemberInfo[];
  subgroupCount: ApiNumericType;
}

export type ExitInitializationStateReturnType = {
  status: "success" | "too-few-members";
  transactions?: string[];
} | {
  status: "unexpected-successor-count";
  expectedSuccessorCount: number;
};

export function exitInitializationState(
  params: ExitInitializationStateParams,
): ExitInitializationStateReturnType {
  const {
    newMembersToAdd,
    totalCoverageWei,
    secretarysuccessorsList,
    allMemberInfo,
    subgroupCount,
  } = params;

  // create a set with all unique members in the community,
  // including the ones we will be adding
  const uniqueMembers = new Set<string>();
  allMemberInfo
    .map(m => m.walletAddress.toLowerCase())
    .map(addr => uniqueMembers.add(addr));
  newMembersToAdd.map(m => uniqueMembers.add(m.toLowerCase()));

  // if there aren't enough total members, we can't exit the initialization state 
  if (uniqueMembers.size < InitializationStateConstants.minCommunitySizeToExit) {
    return {
      status: 'too-few-members',
    };
  }
  // if we have the wrong amount of successors defined
  const expectedSuccessorCount = ExpectedSuccessorCounts.getExpectedSuccessorCount(uniqueMembers.size);
  if (expectedSuccessorCount !== secretarysuccessorsList.length) {
    return {
      status: 'unexpected-successor-count',
      expectedSuccessorCount,
    };
  }

  const autoReorgResult = getAutoReorgTransactions({
    newMembersToAdd,
    allMemberInfo,
    subgroupCount
  });

  const transactions: string[] = [];
  if (autoReorgResult.transactions)
    transactions.push(...autoReorgResult.transactions);

  transactions.push(`Define successors list: ${secretarysuccessorsList.map(addr => addr.slice(0,8)).join(`, `)}`);

  transactions.push(`initialize default state, coverage: ${formatUnits(totalCoverageWei, 18)} units`);

  return {
    status: 'success',
    transactions,
  };
}
