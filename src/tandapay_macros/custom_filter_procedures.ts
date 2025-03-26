import { WriteableTandaPayManager } from "tandapay_manager/tandapay_manager";
import { AssignmentStatus, MemberStatus } from "types";
import { BooleanResult } from "utils";
import { isAddressEqual } from "viem";

export type CustomFilterReturnType = BooleanResult;

export type CustomFilterParameters = {
  manager: WriteableTandaPayManager;
};

/**
 * Determines whether or not the current time is beyond the end timestamp
 * of the current period. When this condition is true, the period may advance.
 */
export async function canAdvancePeriod(
  params: CustomFilterParameters,
): Promise<CustomFilterReturnType> {
  const { manager } = params;
  const curPeriodInfo = await manager.read.getPeriodInfo();
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
export async function canApproveNewSubgroupMember(
  params: CustomFilterParameters,
): Promise<CustomFilterReturnType> {
  const { manager } = params;
  // get own info. we'll need this to both verify that we can actually approve a new member,
  // and to determine what the relevant subgroup is
  const address = manager.client.wallet.account.address;
  const ownInfo = await manager.read.getMemberInfoFromAddress({
    walletAddress: address,
  });
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
      reason: `${baseErr} own memberStatus is not valid.`,
    };
  }

  // check that there are actually members being reorged into this subgroup
  const ownSubgroupInfo = await manager.read.getSubgroupInfo({
    subgroupId: ownInfo.subgroupId,
  });
  const allPeers = await Promise.all(
    ownSubgroupInfo.members.map((addr) =>
      manager.read.getMemberInfoFromAddress({ walletAddress: addr }),
    ),
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
export async function canApproveSugroupAssignment(
  params: CustomFilterParameters,
): Promise<CustomFilterReturnType> {
  const { manager } = params;
  const address = manager.client.wallet.account.address;
  const ownInfo = await manager.read.getMemberInfoFromAddress({
    walletAddress: address,
  });
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
  };
}

/**
 * Determines if a member can defect from the community. They can so
 * long as there were claims in the previous period.
 */
export async function canDefectFromCommunity(
  params: CustomFilterParameters,
): Promise<CustomFilterReturnType> {
  const { manager } = params;
  const baseErr = "Cannot defect from community: ";

  // if we're in the 0th period, there was no previous period for the claim to occur in.
  // if we're in the 1st period, the last period was the 0th period, which is normally
  // the period the community is in during initialization. No claims occur in initialization.
  const periodId = await manager.read.getCurrentPeriodId();
  if (periodId === 0n || periodId - 1n === 0n) {
    return {
      result: false,
      reason: `${baseErr} too early for any claims to have happened!`,
    };
  }

  // if there were no claims, there is no reason to defect
  const claims = await manager.read.getClaimIdsInPeriod({
    periodId: periodId - 1n,
  });
  if (claims.length === 0) {
    return {
      result: false,
      reason: `${baseErr} no claims occurred in the previous period!`,
    };
  }

  return {
    result: true,
  };
}

/**
 * Determines whether or not the member may request an emergency secretary handoff. Requires
 * that their status be valid and that they be in the list of defined secretary successors.
 */
export async function canRequestEmergencySecretaryHandoff(
  params: CustomFilterParameters,
): Promise<CustomFilterReturnType> {
  const { manager } = params;
  const baseErr = "Cannot request emergency secretary handoff: ";

  const address = manager.client.wallet.account.address;
  const memberInfo = await manager.read.getMemberInfoFromAddress({
    walletAddress: address,
  });

  // the smart contract checks if they are valid
  if (memberInfo.memberStatus !== MemberStatus.Valid) {
    return {
      result: false,
      reason: `${baseErr} member status must be Valid! found: ${MemberStatus[memberInfo.memberStatus]}`,
    };
  }

  // they must also be defined in the list of secretary successors
  const secretarySuccessorList = await manager.read.getSecretarySuccessorList();
  if (
    !secretarySuccessorList.some((successorAddr) =>
      isAddressEqual(address, successorAddr),
    )
  ) {
    return {
      result: false,
      reason: `${baseErr} not included in the secretary successor list.`,
    };
  }

  return {
    result: true,
  };
}

/**
 * Determines whether or not a member may call the method to join the community,
 * and pay the join fee. Requires that they have been added by the secretary
 */
export async function canJoinCommunity(
  params: CustomFilterParameters,
): Promise<CustomFilterReturnType> {
  const { manager } = params;
  const address = manager.client.wallet.account.address;
  const baseErr = "Cannot join community:";

  const memberInfo = await manager.read.getMemberInfoFromAddress({
    walletAddress: address,
  });
  if (memberInfo.memberStatus !== MemberStatus.Added) {
    return {
      result: false,
      reason: `${baseErr} member status is not "Assigned" ("Added"). Secretary must add them to the community`,
    };
  }

  return {
    result: true,
  };
}

/**
 * Determines whether or not a member may accept the role of secretary, provided
 * the secretary is attempting to hand over the position to them. Just requires that
 * they be in the successor list
 */
export async function canAcceptSecretaryRole(
  params: CustomFilterParameters,
): Promise<CustomFilterReturnType> {
  const { manager } = params;
  const baseErr = "cannot accept secretary role:";

  const address = manager.client.wallet.account.address;

  //! there is no check in the smart contract to see if they're a valid member?

  // they must also be defined in the list of secretary successors
  const secretarySuccessorList = await manager.read.getSecretarySuccessorList();
  if (
    !secretarySuccessorList.some((successorAddr) =>
      isAddressEqual(address, successorAddr),
    )
  ) {
    return {
      result: false,
      reason: `${baseErr} not included in the secretary successor list.`,
    };
  }

  return {
    result: true,
  };
}

export async function canSubmitClaim(
  params: CustomFilterParameters,
): Promise<CustomFilterReturnType> {
  const { manager } = params;
  const baseErr = "Cannot submit a claim:";

  const address = manager.client.wallet.account.address;
  const curPeriod = await manager.read.getCurrentPeriodId();
  const memberInfo = await manager.read.getMemberInfoFromAddress({
    walletAddress: address,
  });
  // ensure they are eligible for coverage this period
  if (!memberInfo.isEligibleForCoverageThisPeriod) {
    return {
      result: false,
      reason: `${baseErr} not eligible for coverage this period`,
    };
  }

  const claimIds = await manager.read.getClaimIdsInPeriod({
    periodId: curPeriod,
  });
  const claims = await Promise.all(
    claimIds.map((id) =>
      manager.read.getClaimInfo({
        periodId: curPeriod,
        claimId: id,
      }),
    ),
  );

  // ensure they haven't already submitted a claim this period
  if (
    claims.some((claimInfo) =>
      isAddressEqual(claimInfo.claimantWalletAddress, address),
    )
  ) {
    return {
      result: false,
      reason: `${baseErr} already submitted a claim this period!`,
    };
  }

  return {
    result: true,
  };
}
