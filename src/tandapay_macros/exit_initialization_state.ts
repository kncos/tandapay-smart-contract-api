import { InitializationStateConstants } from "tandapay_constants";
import { TandaPayReader } from "tandapay_interface/read_interface";
import { Address } from "viem";

export type ExitInitializationStateParams = {
  membersToAdd: Address[];
  reader: TandaPayReader;
};

export type ExitInitializationStateReturnType = {
  status: "success" | "too-few-members";
  transactions?: string[];
};

export async function exitInitializationState(
  params: ExitInitializationStateParams,
): Promise<ExitInitializationStateReturnType> {
  const { reader, membersToAdd } = params;

  const memberCount = Number(await reader.getCurrentMemberCount());
  if (
    memberCount + membersToAdd.length <
    InitializationStateConstants.minCommunitySizeToExit
  ) {
    return {
      status: "too-few-members",
    };
  }

  const transactions: string[] = [];

  return {
    status: "success",
    transactions,
  };
}
