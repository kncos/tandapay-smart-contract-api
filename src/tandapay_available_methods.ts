// three main narrowings:
// we want to narrow based on community state
// we want to narrow based on current time in the period
// we want to narrow based on the user's role

import { TandaPayManager } from "tandapay_manager/tandapay_manager";
import { TandaPayWriteMethodAliases } from "tandapay_manager/write/types";
import { TandaPayRole, TandaPayState } from "types";

export type MethodFilter = {
  allowableStates?: TandaPayState[],
  allowableTimeInPeriod?: {
    startSecond?: number,
    endSecond?: number
  }
  allowableRoles?: TandaPayRole[],
  allowedByCustomProcedure?: (manager: TandaPayManager) => boolean,
}

export const TandaPayWriteMethodFilters: Record<TandaPayWriteMethodAliases, MethodFilter> = {

}