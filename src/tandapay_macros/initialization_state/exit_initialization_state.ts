import {
  ExpectedSuccessorCounts,
  InitializationStateConstants,
} from "tandapay_constants";
import { Address, formatUnits } from "viem";
import { getAutoReorgTransactions } from "../auto_reorg/auto_reorg_transactions";
import { TandaPayBatchReader } from "tandapay_interface/batch_read_interface";
import { TandaPayReader } from "tandapay_interface/read_interface";

export type ExitInitializationStateParams = {
  reader: TandaPayReader;
  batchReader: TandaPayBatchReader;
  totalCoverageWei: bigint;
  newMembers?: Address[];
  newSecretarySuccessors?: Address[];
};

export type ExitInitializationStateReturnType =
  | {
      status: "success" | "too-few-members";
      transactions?: string[];
    }
  | {
      status: "unexpected-successor-count";
      expectedSuccessorCount: number;
    };

async function hasValidMemberCount(params: {
  batchReader: TandaPayBatchReader;
  newMembers?: Address[];
}): Promise<boolean> {
  const { batchReader, newMembers } = params;

  // fetch some information we'll need
  const allMemberInfo = await batchReader.getBatchMemberInfo();

  // create a set with all unique members in the community,
  // including the ones we will be adding
  const uniqueMembers = new Set<string>();
  allMemberInfo
    .map((m) => m.walletAddress.toLowerCase())
    .map((addr) => uniqueMembers.add(addr));

  if (newMembers) newMembers.map((m) => uniqueMembers.add(m.toLowerCase()));

  // if there aren't enough total members, we can't exit the initialization state
  if (
    uniqueMembers.size < InitializationStateConstants.minCommunitySizeToExit
  ) {
    return false;
  }

  return true;
}

async function hasValidSuccessorList(params: {
  reader: TandaPayReader;
  newSecretarySuccessors?: Address[];
}) {
  const { reader, newSecretarySuccessors } = params;
  const communitySize = await reader.getCurrentMemberCount();
  const successorList = await reader.getSecretarySuccessorList();

  console.log(
    `new secretary successors len: ${newSecretarySuccessors?.length}`,
  );

  const expectedSuccessorCount =
    ExpectedSuccessorCounts.getExpectedSuccessorCount(communitySize);
  console.log(`expected count: ${expectedSuccessorCount}`);
  if (
    newSecretarySuccessors &&
    newSecretarySuccessors.length == expectedSuccessorCount
  ) {
    return { status: true };
  } else if (successorList.length != expectedSuccessorCount) {
    return { status: true };
  }

  return {
    status: false,
    expectedSuccessorCount,
  };
}

export async function exitInitializationState(
  params: ExitInitializationStateParams,
): Promise<ExitInitializationStateReturnType> {
  const {
    reader,
    batchReader,
    totalCoverageWei,
    newMembers,
    newSecretarySuccessors,
  } = params;

  const hasEnoughMembers = await hasValidMemberCount({
    batchReader,
    newMembers,
  });
  if (!hasEnoughMembers) {
    return {
      status: "too-few-members",
    };
  }

  const hasExpectedSuccessors = await hasValidSuccessorList({
    reader,
    newSecretarySuccessors,
  });
  if (hasExpectedSuccessors.status === false) {
    return {
      status: "unexpected-successor-count",
      expectedSuccessorCount: hasExpectedSuccessors.expectedSuccessorCount!,
    };
  }

  const autoReorgResult = await getAutoReorgTransactions({
    reader,
    batchReader,
    newMembers,
  });

  const transactions: string[] = [];
  if (autoReorgResult.transactions)
    transactions.push(...autoReorgResult.transactions);

  if (newSecretarySuccessors)
    transactions.push(
      `Define successors list: ${newSecretarySuccessors.map((addr) => addr.slice(0, 8)).join(`, `)}`,
    );

  transactions.push(
    `initialize default state, coverage: ${formatUnits(totalCoverageWei, 18)} units`,
  );

  return {
    status: "success",
    transactions,
  };
}
