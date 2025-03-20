import { WriteableTandaPayManager } from "tandapay_manager/tandapay_manager";
import { AssignmentStatus, MemberStatus } from "types";
import { BooleanResult } from "utils";

export type CustomFilterReturnType = BooleanResult;

export type CustomFilterParameters = {
  manager: WriteableTandaPayManager,
}

/** 
 * Determines whether or not the current time is beyond the end timestamp 
 * of the current period. When this condition is true, the period may advance.
 */
export async function canAdvancePeriod(params: CustomFilterParameters): Promise<CustomFilterReturnType> {
  const {manager} = params;
  const curPeriodInfo = await manager.read.getCurrentPeriodInfo();
  const curBlock = await manager.client.public.getBlock();

  if (curPeriodInfo.endTimestamp < curBlock.timestamp) {
    return { result: true };
  } else {
    return {
      result: false,
      reason: `Cannot advance timestamp. Current block timestamp: ${curBlock.timestamp}. End of Period Timestamp: ${curPeriodInfo.endTimestamp}`,
    };
  }
}

/**
 * Determines whether or not the client that belongs to this manager can/should approve
 * a subgroup peer. For this to return true, the account associated with the client must
 * be a valid member of a subgroup, and there must be at least one member trying to reorg
 * into this subgroup
 */
export async function canApproveNewSubgroupMember(params: CustomFilterParameters): Promise<CustomFilterReturnType> {
  const {manager} = params;
  // get own info. we'll need this to both verify that we can actually approve a new member,
  // and to determine what the relevant subgroup is
  const address = manager.client.wallet.account.address;
  const ownInfo = await manager.read.getMemberInfoFromAddress(address);
  const baseErr = "cannot approve a new subgroup peer: ";

  // if we aren't a valid member of a subgroup, we can't approve a new peer
  if (ownInfo.assignmentStatus !== AssignmentStatus.AssignmentSuccessful) {
    return {
      result: false,
      reason: `${baseErr} own assignmentstatus is not AssignmentSuccessful.`,
    };
  }
  if (ownInfo.memberStatus !== MemberStatus.Valid) {
    return {
      result: false,
      reason: `${baseErr} own memberStatus is not valid.`
    };
  }

  // check that there are actually members being reorged into this subgroup
  const ownSubgroupInfo = await manager.read.getSubgroupInfo(ownInfo.subgroupId);
  const allPeers = await Promise.all(
    ownSubgroupInfo.members.map((addr) => manager.read.getMemberInfoFromAddress(addr))
  );
  // if not, then there is no peer to approve
  if (allPeers.some((member) => member.memberStatus === MemberStatus.Reorged))
    return { result: true };

  return {
    result: false,
    reason: `${baseErr} no members were reorging into this subgroup`,
  };
}

/**
 * Determines if a member can approve their own subgroup assignment. They can so long as
 * the secretary has assigned them to a subgroup
 */
export async function canApproveSugroupAssignment(params: CustomFilterParameters): Promise<CustomFilterReturnType> {
  const {manager} = params;
  const address = manager.client.wallet.account.address;
  const ownInfo = await manager.read.getMemberInfoFromAddress(address);
  const baseErr = "Cannot approve own subgroup assignment: ";

  // must be assigned to a subgroup in order to approve that assignment
  if (ownInfo.subgroupId === 0n) {
    return {
      result: false,
      reason: `${baseErr} have not yet been assigned to a subgroup by the secretary.`,
    };
  }

  //! note: we don't check if they are already assignmentSuccessful here because technically,
  //! they can be assignmentSuccessful while reorging and their status just hasn't been updated
  //! yet. Unknown if there are other cases like this so rather be safe than sorry
  
  return { 
    result: true, 
  }
}

export async function canCancelManualCollapse(params: CustomFilterParameters): Promise<CustomFilterReturnType> {
  const {manager} = params;
  const baseErr = "cannot cancel manual collapse: ";
  const manualCollapseInfo = await manager.read.getManuallyCollapsedInfo();
  if (manualCollapseInfo.isManuallyCollapsed === false) {
    return {
      result: false,
      reason: `${baseErr} community is not being manually collapsed`,
    }
  }

  const block = await manager.client.public.getBlock();
  if (manualCollapseInfo.cancelDeadlineTimestamp < block.timestamp) {
    return {
      result: false,
      reason: `${baseErr} deadline to cancel manual collapse has passed`
    };
  }

  return { result: true };
}