export const TandaPayInfo = {
  abi: [
    {
      type: "constructor",
      inputs: [
        { name: "_paymentToken", type: "address", internalType: "address" },
        { name: "owner", type: "address", internalType: "address" },
      ],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "EmergencyStartTime",
      inputs: [],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "acceptSecretaryRole",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "addMemberToCommunity",
      inputs: [{ name: "_member", type: "address", internalType: "address" }],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "advancePeriod",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "approveNewSubgroupMember",
      inputs: [
        { name: "_sId", type: "uint256", internalType: "uint256" },
        { name: "_nMemberId", type: "uint256", internalType: "uint256" },
        { name: "_accepted", type: "bool", internalType: "bool" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "approveSubgroupAssignment",
      inputs: [{ name: "_shouldJoin", type: "bool", internalType: "bool" }],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "assignMemberToSubgroup",
      inputs: [
        { name: "_member", type: "address", internalType: "address" },
        { name: "_sId", type: "uint256", internalType: "uint256" },
        { name: "_isReorging", type: "bool", internalType: "bool" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "beginEmergency",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "createSubgroup",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "defectFromCommunity",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "defineSecretarySuccessorList",
      inputs: [
        { name: "_successors", type: "address[]", internalType: "address[]" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "divideShortfall",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "emergencyRefund",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "emergencySecretaryHandoff",
      inputs: [
        { name: "_eSecretary", type: "address", internalType: "address" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "emergencyWithdraw",
      inputs: [
        { name: "to", type: "address", internalType: "address" },
        { name: "amount", type: "uint256", internalType: "uint256" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "endEmergency",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "extendPeriodByOneDay",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "getBasePremium",
      inputs: [],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getCommunityState",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "uint8",
          internalType: "enum TandaPay.CommunityStates",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getCurrentClaimId",
      inputs: [],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getCurrentMemberId",
      inputs: [],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getCurrentSubGroupId",
      inputs: [],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getEmergencyHandOverStartedPeriod",
      inputs: [],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getEmergencyHandoverStartedAt",
      inputs: [],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getEmergencySecretaries",
      inputs: [],
      outputs: [{ name: "", type: "address[2]", internalType: "address[2]" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getHandoverStartedAt",
      inputs: [],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getIsAMemberDefectedInPeriod",
      inputs: [{ name: "_pId", type: "uint256", internalType: "uint256" }],
      outputs: [{ name: "", type: "bool", internalType: "bool" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getIsAllMemberNotPaidInPeriod",
      inputs: [{ name: "_pId", type: "uint256", internalType: "uint256" }],
      outputs: [{ name: "", type: "bool", internalType: "bool" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getIsHandingOver",
      inputs: [],
      outputs: [{ name: "", type: "bool", internalType: "bool" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getMemberInfoFromId",
      inputs: [
        { name: "_memberId", type: "uint256", internalType: "uint256" },
        { name: "_pId", type: "uint256", internalType: "uint256" },
      ],
      outputs: [
        {
          name: "",
          type: "tuple",
          internalType: "struct TandaPay.DemoMemberInfo",
          components: [
            { name: "memberId", type: "uint256", internalType: "uint256" },
            {
              name: "associatedGroupId",
              type: "uint256",
              internalType: "uint256",
            },
            { name: "member", type: "address", internalType: "address" },
            { name: "cEscrowAmount", type: "uint256", internalType: "uint256" },
            {
              name: "ISEscorwAmount",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "pendingRefundAmount",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "availableToWithdraw",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "eligibleForCoverageInPeriod",
              type: "bool",
              internalType: "bool",
            },
            { name: "isPremiumPaid", type: "bool", internalType: "bool" },
            {
              name: "idToQuedRefundAmount",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "status",
              type: "uint8",
              internalType: "enum TandaPayEvents.MemberStatus",
            },
            {
              name: "assignment",
              type: "uint8",
              internalType: "enum TandaPay.AssignmentStatus",
            },
          ],
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getMemberToMemberId",
      inputs: [{ name: "_member", type: "address", internalType: "address" }],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getMemberToMemberInfo",
      inputs: [
        { name: "_member", type: "address", internalType: "address" },
        { name: "_pId", type: "uint256", internalType: "uint256" },
      ],
      outputs: [
        {
          name: "",
          type: "tuple",
          internalType: "struct TandaPay.DemoMemberInfo",
          components: [
            { name: "memberId", type: "uint256", internalType: "uint256" },
            {
              name: "associatedGroupId",
              type: "uint256",
              internalType: "uint256",
            },
            { name: "member", type: "address", internalType: "address" },
            { name: "cEscrowAmount", type: "uint256", internalType: "uint256" },
            {
              name: "ISEscorwAmount",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "pendingRefundAmount",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "availableToWithdraw",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "eligibleForCoverageInPeriod",
              type: "bool",
              internalType: "bool",
            },
            { name: "isPremiumPaid", type: "bool", internalType: "bool" },
            {
              name: "idToQuedRefundAmount",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "status",
              type: "uint8",
              internalType: "enum TandaPayEvents.MemberStatus",
            },
            {
              name: "assignment",
              type: "uint8",
              internalType: "enum TandaPay.AssignmentStatus",
            },
          ],
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getPaymentToken",
      inputs: [],
      outputs: [{ name: "", type: "address", internalType: "address" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getPeriodId",
      inputs: [],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getPeriodIdToClaimIdToClaimInfo",
      inputs: [
        { name: "_pId", type: "uint256", internalType: "uint256" },
        { name: "_cId", type: "uint256", internalType: "uint256" },
      ],
      outputs: [
        {
          name: "",
          type: "tuple",
          internalType: "struct TandaPay.ClaimInfo",
          components: [
            { name: "id", type: "uint256", internalType: "uint256" },
            { name: "claimant", type: "address", internalType: "address" },
            { name: "claimAmount", type: "uint256", internalType: "uint256" },
            { name: "SGId", type: "uint256", internalType: "uint256" },
            { name: "isWhitelistd", type: "bool", internalType: "bool" },
            { name: "isClaimed", type: "bool", internalType: "bool" },
          ],
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getPeriodIdToClaimIds",
      inputs: [{ name: "_pId", type: "uint256", internalType: "uint256" }],
      outputs: [{ name: "", type: "uint256[]", internalType: "uint256[]" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getPeriodIdToDefectorsId",
      inputs: [{ name: "_pId", type: "uint256", internalType: "uint256" }],
      outputs: [{ name: "", type: "uint256[]", internalType: "uint256[]" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getPeriodIdToPeriodInfo",
      inputs: [{ name: "_pId", type: "uint256", internalType: "uint256" }],
      outputs: [
        {
          name: "",
          type: "tuple",
          internalType: "struct TandaPay.PeriodInfo",
          components: [
            { name: "startedAt", type: "uint256", internalType: "uint256" },
            { name: "willEndAt", type: "uint256", internalType: "uint256" },
            { name: "claimIds", type: "uint256[]", internalType: "uint256[]" },
            { name: "coverage", type: "uint256", internalType: "uint256" },
            { name: "totalPaid", type: "uint256", internalType: "uint256" },
          ],
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getPeriodIdWhiteListedClaims",
      inputs: [{ name: "_pId", type: "uint256", internalType: "uint256" }],
      outputs: [{ name: "", type: "uint256[]", internalType: "uint256[]" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getSecretarySuccessors",
      inputs: [],
      outputs: [{ name: "", type: "address[]", internalType: "address[]" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getSubGroupIdToSubGroupInfo",
      inputs: [{ name: "_sId", type: "uint256", internalType: "uint256" }],
      outputs: [
        {
          name: "",
          type: "tuple",
          internalType: "struct TandaPay.SubGroupInfo",
          components: [
            { name: "id", type: "uint256", internalType: "uint256" },
            { name: "members", type: "address[]", internalType: "address[]" },
            { name: "isValid", type: "bool", internalType: "bool" },
          ],
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getTotalCoverage",
      inputs: [],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getUpcomingSecretary",
      inputs: [],
      outputs: [{ name: "", type: "address", internalType: "address" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "handoverSecretaryRoleToSuccessor",
      inputs: [
        {
          name: "_prefferedSuccessor",
          type: "address",
          internalType: "address",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "initiateDefaultState",
      inputs: [{ name: "_coverage", type: "uint256", internalType: "uint256" }],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "injectFunds",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "issueRefund",
      inputs: [{ name: "_shouldTransfer", type: "bool", internalType: "bool" }],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "joinCommunity",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "leaveSubgroup",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "payPremium",
      inputs: [{ name: "_useFromATW", type: "bool", internalType: "bool" }],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "secretary",
      inputs: [],
      outputs: [{ name: "", type: "address", internalType: "address" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "submitClaim",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "updateCoverageAmount",
      inputs: [{ name: "_coverage", type: "uint256", internalType: "uint256" }],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "updateMemberStatus",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "whitelistClaim",
      inputs: [{ name: "_cId", type: "uint256", internalType: "uint256" }],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "withdrawClaimFund",
      inputs: [{ name: "isForfeit", type: "bool", internalType: "bool" }],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "withdrawRefund",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "event",
      name: "AddedToCommunity",
      inputs: [
        {
          name: "member",
          type: "address",
          indexed: false,
          internalType: "address",
        },
        {
          name: "id",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "AdditionalDayAdded",
      inputs: [
        {
          name: "pEndTime",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "ApproveNewGroupMember",
      inputs: [
        {
          name: "member",
          type: "address",
          indexed: false,
          internalType: "address",
        },
        {
          name: "approver",
          type: "address",
          indexed: false,
          internalType: "address",
        },
        {
          name: "groupId",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "approved",
          type: "bool",
          indexed: false,
          internalType: "bool",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "ApprovedGroupAssignment",
      inputs: [
        {
          name: "member",
          type: "address",
          indexed: false,
          internalType: "address",
        },
        {
          name: "groupId",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        { name: "joined", type: "bool", indexed: false, internalType: "bool" },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "AssignedToSubGroup",
      inputs: [
        {
          name: "member",
          type: "address",
          indexed: false,
          internalType: "address",
        },
        {
          name: "groupId",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "isReOrging",
          type: "bool",
          indexed: false,
          internalType: "bool",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "ClaimSubmitted",
      inputs: [
        {
          name: "member",
          type: "address",
          indexed: false,
          internalType: "address",
        },
        {
          name: "claimId",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "ClaimWhiteListed",
      inputs: [
        {
          name: "cId",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "CommunityCollapsed",
      inputs: [
        {
          name: "collapsedAt",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "CoverageUpdated",
      inputs: [
        {
          name: "coverage",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "basePremium",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "DefaultStateInitiatedAndCoverageSet",
      inputs: [
        {
          name: "coverage",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "EmergencyBegan",
      inputs: [
        {
          name: "emergencyStartedAt",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "EmergencyPayment",
      inputs: [
        {
          name: "to",
          type: "address",
          indexed: false,
          internalType: "address",
        },
        {
          name: "amount",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "EmergencyhandOverSecretary",
      inputs: [
        {
          name: "secretary",
          type: "address",
          indexed: false,
          internalType: "address",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "ExitedFromSubGroup",
      inputs: [
        {
          name: "member",
          type: "address",
          indexed: false,
          internalType: "address",
        },
        {
          name: "groupId",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "ForfeitClaim",
      inputs: [
        {
          name: "claimant",
          type: "address",
          indexed: false,
          internalType: "address",
        },
        {
          name: "claimId",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "FundClaimFailed",
      inputs: [
        {
          name: "totalClaimableAmount",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "cAmount",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "vmCount",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "pmAmount",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "pmShortAmount",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "FundClaimed",
      inputs: [
        {
          name: "claimant",
          type: "address",
          indexed: false,
          internalType: "address",
        },
        {
          name: "amount",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "cId",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "FundInjected",
      inputs: [
        {
          name: "amount",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "JoinedToCommunity",
      inputs: [
        {
          name: "member",
          type: "address",
          indexed: false,
          internalType: "address",
        },
        {
          name: "paidAmount",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "LeavedFromGroup",
      inputs: [
        {
          name: "member",
          type: "address",
          indexed: false,
          internalType: "address",
        },
        {
          name: "gId",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "mId",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "ManualCollapseCancelled",
      inputs: [],
      anonymous: false,
    },
    {
      type: "event",
      name: "ManualCollapsedCancelled",
      inputs: [
        {
          name: "timee",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "ManualCollapsedHappenend",
      inputs: [],
      anonymous: false,
    },
    {
      type: "event",
      name: "MemberDefected",
      inputs: [
        {
          name: "member",
          type: "address",
          indexed: false,
          internalType: "address",
        },
        {
          name: "periodId",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "MemberStatusUpdated",
      inputs: [
        {
          name: "member",
          type: "address",
          indexed: false,
          internalType: "address",
        },
        {
          name: "newStatus",
          type: "uint8",
          indexed: false,
          internalType: "enum TandaPayEvents.MemberStatus",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "NextPeriodInitiated",
      inputs: [
        {
          name: "periodId",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "coverage",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "baseAmount",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "PremiumPaid",
      inputs: [
        {
          name: "member",
          type: "address",
          indexed: false,
          internalType: "address",
        },
        {
          name: "periodId",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "amount",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "usingATW",
          type: "bool",
          indexed: false,
          internalType: "bool",
        },
      ],
      anonymous: false,
    },
    { type: "event", name: "RefundIssued", inputs: [], anonymous: false },
    {
      type: "event",
      name: "RefundWithdrawn",
      inputs: [
        {
          name: "member",
          type: "address",
          indexed: false,
          internalType: "address",
        },
        {
          name: "amount",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "SecretaryAccepted",
      inputs: [
        {
          name: "nSecretary",
          type: "address",
          indexed: false,
          internalType: "address",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "SecretaryHandOverEnabled",
      inputs: [
        {
          name: "prefferedSuccessr",
          type: "address",
          indexed: false,
          internalType: "address",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "SecretarySuccessorsDefined",
      inputs: [
        {
          name: "successors",
          type: "address[]",
          indexed: false,
          internalType: "address[]",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "SecretaryTransferred",
      inputs: [
        {
          name: "previousOwner",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "newOwner",
          type: "address",
          indexed: true,
          internalType: "address",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "ShortFallDivided",
      inputs: [
        {
          name: "totalAmount",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "pmAmount",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "fromSecrretary",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "SubGroupCreated",
      inputs: [
        {
          name: "id",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    { type: "error", name: "AlreadyAdded", inputs: [] },
    { type: "error", name: "AlreadyClaimed", inputs: [] },
    { type: "error", name: "AlreadySet", inputs: [] },
    { type: "error", name: "AlreadySubmitted", inputs: [] },
    { type: "error", name: "AmountZero", inputs: [] },
    { type: "error", name: "CannotBeZeroAddress", inputs: [] },
    { type: "error", name: "CannotEmergencyRefund", inputs: [] },
    { type: "error", name: "ClaimNoOccured", inputs: [] },
    { type: "error", name: "ClaimantNotValidMember", inputs: [] },
    { type: "error", name: "CommunityIsCollapsed", inputs: [] },
    { type: "error", name: "CoverageFullfilled", inputs: [] },
    { type: "error", name: "DFNotMet", inputs: [] },
    { type: "error", name: "DelayInitiated", inputs: [] },
    { type: "error", name: "EmergencyGracePeriod", inputs: [] },
    { type: "error", name: "InEmergency", inputs: [] },
    { type: "error", name: "InValidClaim", inputs: [] },
    { type: "error", name: "InsufficientFunds", inputs: [] },
    { type: "error", name: "InvalidMember", inputs: [] },
    { type: "error", name: "InvalidSubGroup", inputs: [] },
    { type: "error", name: "ManuallyCollapsed", inputs: [] },
    { type: "error", name: "NeedMoreSuccessor", inputs: [] },
    { type: "error", name: "NoClaimOccured", inputs: [] },
    { type: "error", name: "NoValiddMember", inputs: [] },
    { type: "error", name: "NotAssignedYet", inputs: [] },
    { type: "error", name: "NotClaimSubmittionWindow", inputs: [] },
    { type: "error", name: "NotClaimWindow", inputs: [] },
    { type: "error", name: "NotClaimant", inputs: [] },
    { type: "error", name: "NotDefectWindow", inputs: [] },
    { type: "error", name: "NotFirstSuccessor", inputs: [] },
    { type: "error", name: "NotHandingOver", inputs: [] },
    { type: "error", name: "NotInAssigned", inputs: [] },
    { type: "error", name: "NotInAssignmentSuccessfull", inputs: [] },
    { type: "error", name: "NotInCovereged", inputs: [] },
    { type: "error", name: "NotInDefOrFra", inputs: [] },
    { type: "error", name: "NotInEmergency", inputs: [] },
    { type: "error", name: "NotInInDefault", inputs: [] },
    { type: "error", name: "NotInIniOrDef", inputs: [] },
    { type: "error", name: "NotInInitilization", inputs: [] },
    { type: "error", name: "NotInInjectionWindow", inputs: [] },
    { type: "error", name: "NotInManualCollaps", inputs: [] },
    { type: "error", name: "NotInSuccessorList", inputs: [] },
    { type: "error", name: "NotIncluded", inputs: [] },
    { type: "error", name: "NotPaidInvalid", inputs: [] },
    { type: "error", name: "NotPayWindow", inputs: [] },
    { type: "error", name: "NotRefundWindow", inputs: [] },
    { type: "error", name: "NotReorged", inputs: [] },
    { type: "error", name: "NotValidMember", inputs: [] },
    { type: "error", name: "NotWhiteListed", inputs: [] },
    { type: "error", name: "NotWhitelistWindow", inputs: [] },
    { type: "error", name: "OutOfTheCommunity", inputs: [] },
    { type: "error", name: "PrevPeriodNotEnded", inputs: [] },
    { type: "error", name: "ReentrancyGuardReentrantCall", inputs: [] },
    { type: "error", name: "SGMNotFullfilled", inputs: [] },
    { type: "error", name: "SamePeriod", inputs: [] },
    {
      type: "error",
      name: "SecretaryInvalidOwner",
      inputs: [{ name: "owner", type: "address", internalType: "address" }],
    },
    {
      type: "error",
      name: "SecretaryUnauthorizedSecretary",
      inputs: [{ name: "account", type: "address", internalType: "address" }],
    },
    { type: "error", name: "TimeNotPassed", inputs: [] },
    { type: "error", name: "TurningTimePassed", inputs: [] },
    { type: "error", name: "WLCAvailable", inputs: [] },
  ],
  bytecode: {
    object:
      "0x608034620000ea57601f6200552738819003918201601f19168301916001600160401b03831184841017620000ee578084926040948552833981010312620000ea5760206200004e8262000102565b916001600160a01b0391829162000066910162000102565b16908115620000d2575f549260018060a01b03199280848616175f558260405195167f688b8f34d886f8a2414b39aa6cef1ec6198215ba9b47fe8ac4260b44139bd5b65f80a360016009551690600a541617600a5560ff196012541660125561540f9081620001188239f35b6040516351f49ec560e01b81525f6004820152602490fd5b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b51906001600160a01b0382168203620000ea5756fe60806040526004361015610011575f80fd5b5f3560e01c8062b16fee146144625780630899fe41146144385780630a5b34f214614409578063108f1d0314614300578063110f8874146141f757806316bfe25c146140705780631afbd12814613e8657806327bd3ef014613df857806339786a96146139d45780633a85bded146139aa5780633f1b3f8f1461386157806342c1b0ef146135e75780634ae4ab48146134015780634ee4a857146133825780634ee9c6f7146132f357806350c8e1fd146131d35780635495d2aa146131ac5780635c6af45614612fd15780635d86b8e114612fb45780636619980814612f855780636d4da76d14612f5d57806372547ec914612bf757806372f833a814612bda578063756b01b6146129ec5780637985940d146129c35780637b47d7e8146129a65780637b55476d146128c657806395ccea67146127155780639e99d7c6146124675780639f2592b31461244a578063a0b34a301461242d578063a3d033e514612323578063a482b10214612259578063a504f8091461206e578063a8fdb78814611f63578063ac115bbe14611f46578063b87b1d0d14611e55578063bc017b5714611b61578063be47120614611939578063c2a41da014611917578063c3a42297146112eb578063c4afc37a14610fc7578063cc10a3aa14610faa578063d26a624b14610c59578063d41c3a6514610c31578063d98b250314610be2578063dbcd14f014610a81578063e15d69f314610a64578063e319ace914610a2c578063e329972d1461093e578063ea398bc114610904578063ec15a89014610746578063f2ddec411461060c578063f34cf775146105ef578063f3f02d0314610397578063fb3944f1146102ac5763fef4c5501461028b575f80fd5b346102a8575f3660031901126102a8576020600854604051908152f35b5f80fd5b346102a8575f3660031901126102a8576102c4615244565b60ff60125416600581101561038357600481146103715760031461035f57600e54805f526019602052600160405f2001549062015180820180921161034b575f526019602052600160405f200155600e545f527f1053ff2559207f3358e287928bbde971ad88f7b99c0335368afe0c5baf1ef55f6020600160405f200154604051908152a1005b634e487b7160e01b5f52601160045260245ffd5b60405163f856e0a560e01b8152600490fd5b6040516338f25eb760e21b8152600490fd5b634e487b7160e01b5f52602160045260245ffd5b346102a8575f3660031901126102a8576012805460059160ff9182168381101561038357600481146103715760031461035f5760015b600b546001810180911161034b578110156105ed57805f526020906014825260405f2091600a8301908582541691600c831015928361038357801515806105df575b84816105ce575b816105bd575b50610430575b5050505060019150016103cd565b60089283870194600e92835491825f528784528b60405f2054165f14610560575050835460ff19166004178455505b888854168a811015610383576001148061054b575b610526575b88885416948a861015610383576001977f732dc60c5d1b1df84f06b7e689c1024b7164003eeeded6276c17827b428734c8966040966104e3958d9460028094149081610511575b506104ed575b5050898060a01b039101541693541690845193845283019061477b565ba185808080610422565b60ff199182895416178855545f52600783018552875f209081541690558d806104c6565b905081545f52865284895f205416155f6104c0565b60ff1960068185541617845582545f5260078801825260405f20908154169055610479565b5081545f528481528860405f20541615610474565b610383576004148061059e575b610578575b5061045f565b5f19810190811161034b575f52601c815260405f20600160ff198254161790558a610572565b505f19810181811161034b575f52601c82528960405f2054161561056d565b90506103835760098114158461041c565b905061038357600181141584610416565b505f9350600281141561040f565b005b346102a8575f3660031901126102a8576020600d54604051908152f35b346102a85760203660031901126102a85761062561474f565b60ff601254166005811015610383576003811461035f57610644615244565b6004811461037157801515908161073a575b50610728576001600160a01b0381165f8181526018602052604090205490919061071657600a7f6041a3b674b81a0fecc93042cf89f30bf96db96073f1312e253264f8a5cceba3926106a9600b546148cb565b600b8181555f8281526014602090815260408083208581558684526018835292819020949094556002820180546001600160a01b03191690951790945593909301805461ffff1916610101179055915482516001600160a01b03909416845290830152819081015b0390a1005b60405163f411c32760e01b8152600490fd5b60405163897c9a9360e01b8152600490fd5b60019150141582610656565b346102a8576020806003193601126102a85760043590610764615244565b60ff6012541660058110156103835760048114610371576003811461035f57600181141590816108f8575b506108e657600e5491825f526019825260405f20546213c680810180821161034b5742119081156108dc575b506108ca57825f526016825260405f20815f52825260405f208054938285036108b85760018201546001600160a01b03165f818152601886526040808220548252601487529020600a015490919060ff16600c8110156103835760041491821592610888575b5050610876577f3d37a493337dd24e7cb7bec23d4bde6447e3a1d6e75803de86dbf9f9b5732b8493600461086d9201600160ff19825416179055600e545f526013845260405f20614976565b604051908152a1005b6040516329ceba1160e11b8152600490fd5b9091505f526018845260405f20545f5260148452600760405f2001905f52835260ff60405f205416158580610821565b60405163e22b971160e01b8152600490fd5b604051633341b44560e11b8152600490fd5b90504210846107bb565b604051637bf65ebd60e11b8152600490fd5b6002915014158361078f565b346102a85760203660031901126102a8576004355f52601760205261093a61092e60405f2061487b565b60405191829182614603565b0390f35b346102a8576020806003193601126102a8575f608060405161095f816146f5565b82815282848201526060604082015282606082015201526004355f526019815260405f2060405161098f816146f5565b815481526001926001830154928183019384526109ae6002820161487b565b9160408401928352600460038301549260608601938452015492608085019384526040519582875260c08701955183880152516040870152519360a0606087015284518091528160e087019501915f5b828110610a195784516080890152855160a089015287870388f35b83518752958101959281019288016109fe565b346102a85760203660031901126102a8576001600160a01b03610a4d61474f565b165f526018602052602060405f2054604051908152f35b346102a8575f3660031901126102a8576020600754604051908152f35b346102a85760603660031901126102a857600435610a9d614691565b60ff60125416916005831015610383576004831461037157600380931461035f57805f52601560205260405f20916024355f52601460205260405f20600a81019485549460ff8616600c81101561038357600703610bd1575f915f9060018093018054925b838110610b9b575b505050505015610b89577f5cf6fd140141a8a14aca1d538d93e40de68c6a776df311ae862a898ea2a660ef946080948315610b795750805461ffff19166105041790555b60020154604080516001600160a01b03909216825233602083015281019290925215156060820152a1005b61ff001916610700179055610b4e565b604051633d76489160e01b8152600490fd5b610ba58183614961565b90543391851b1c6001600160a01b031614610bc1578401610b02565b5050505090508680808080610b0a565b60405162789f4360e21b8152600490fd5b346102a85760203660031901126102a857610bfb614682565b610c03615221565b60ff60125416600581101561038357600481146103715760031461035f57610c2a90614ae7565b6001600955005b346102a8575f3660031901126102a857600a546040516001600160a01b039091168152602090f35b346102a85760203660031901126102a857610c7261474f565b6001600160a01b0381811691908215610f985760ff60125416600581101561038357600380911461035f575f335f52601860205260405f20548015159081610f72575b50610f6a575b15610b89575f925f93600194858054915b828110610f415750505015610f2f5781548316158080610f23575b80610f16575b610ee95715610e7757600380546001600160a01b0319166001600160a01b0390921691909117905542600855600e546006555b818154169283151580610e6a575b610d60575b7f882febe0458c27b4ed12caa22ad034f24f206e2da9aa922015eff66e45f2006b602086604051908152a1005b5f9492938460045416145f14610e4957610d7c84835416615373565b8054825485165f5b828110610e22575050505b6001600160601b0360a01b8083541683556004541660045554935f19850194851161034b57610df4602094610e1293610de87f882febe0458c27b4ed12caa22ad034f24f206e2da9aa922015eff66e45f2006b986148e6565b9054911b1c16916148e6565b90919060018060a01b038084549260031b9316831b921b1916179055565b610e1a614a15565b918380610d33565b8187610e2d836148e6565b905490881b1c1614610e41575b8301610d84565b965086610e3a565b9350610e6383610e5761492f565b905490841b1c16615373565b5f93610d8f565b5082600454161515610d2e565b60085462015180810180911161034b5780421080610f09575b15610eae575050600480546001600160a01b03191685179055610d20565b421180610efb575b15610ee957600380546001600160a01b0319166001600160a01b0390921691909117905542600855600e54600655610d20565b604051637787a74d60e01b8152600490fd5b50600654600e541415610eb6565b50600654600e5414610e90565b50600654600e5414610ced565b50836004541615610ce7565b6040516362c9b45b60e01b8152600490fd5b86610f4b826148e6565b905490881b1c168914610f61575b018690610ccc565b92508092610f59565b506001610cbb565b90505f52601460205260ff600a60405f20015416600c8110156103835760041486610cb5565b604051631e7d738760e21b8152600490fd5b346102a8575f3660031901126102a8576020600f54604051908152f35b346102a85760203660031901126102a857610fe0614682565b610fe8615221565b60ff60125416600581101561038357600481146103715760031461035f57600e54805f52601960205260405f205462054600810180911161034b57421180156112c9575b6112b7575f19810190811161034b575f52601360205260405f20546112a557600b5460015b60018201821161034b576001820181101561127a57805f52601460205260405f2090600582018054908161126b575b5050600e54600181118061124a575b8061123d575b6111be575b50600e5460038111611163575b508380611156575b6110be575b6001915001611051565b6006820180545f91829055600a5460029094015460405163a9059cbb60e01b81526001600160a01b039182166004820152602481019290925290936020928592604492849291165af191821561114b5760019261111c575b506110b4565b61113d9060203d602011611144575b611135818361472d565b810190614863565b5084611116565b503d61112b565b6040513d5f823e3d90fd5b50600682015415156110af565b8060021981011161034b57600219015f526009820160205260405f205480156110a75761119560068401918254614856565b9055600e548060021981011161034b57600219015f52600982016020525f6040812055846110a7565b60ff60125416600581101561038357600214908161121e575b501561120b57600382015f81549155600e54805f1981011161034b575f19015f526009830160205260405f20555b8461109a565b600382015f815491556006830155611205565b5f1981019150811161034b575f52601360205260405f205415856111d7565b5060038301541515611095565b50805f1981011161034b575f1981015f52601360205260405f20541561108f565b5f905560068301558480611080565b7f01c9e927536754e1d95ea7a9eda17265ab11a240401b5926f33c0eb76c9d7f335f80a16001600955005b60405163fcb6f0ab60e01b8152600490fd5b60405163d53184ed60e01b8152600490fd5b50805f52601960205260405f20546203f480810180911161034b57421061102c565b346102a8575f3660031901126102a857611303615244565b60125460ff81169060058210156103835760048214610371576003821461035f575f91600181141580611909575b6108e657600e54801515806118f1575b6118df5761134e906148cb565b9283600e55610383576002146117e7575b505f52601960205260405f20428155600f546113db575b62278d00420180421161034b578160039160017f08a7ba25f6100ab18c633572926abf5bd6a45439a9322adee245bc3a9685efda940155600f549182910155600e54610711601054604051938493846040919493926060820195825260208201520152565b60ff60125416600581101561038357600481146103715760031461035f5760015b600b546001810180911161034b5781101561163657805f52601460205260405f209060ff600a83015416600c81101590816103835780151580611628575b8281611617575b81611606575b50611459575b505060019150016113fc565b600e5491825f526008850160205260ff60405f2054165f146115a657505050600a8201805460ff191660041790555b60ff601254166005811015610383576001148061158b575b61155e575b60ff601254169160058310156103835760407f732dc60c5d1b1df84f06b7e689c1024b7164003eeeded6276c17827b428734c89160026001951480611544575b611518575b61151060ff600a878060a01b03600285015416930154168351928352602083019061477b565ba1838061144d565b60ff19600881600a8401541617600a830155600e545f5260078201602052825f209081541690556114ea565b50600e545f526008810160205260ff825f205416156114e5565b60ff19600681600a8501541617600a840155600e545f526007830160205260405f209081541690556114a5565b50600e545f526008820160205260ff60405f205416156114a0565b61038357600414806115e5575b6115be575b50611488565b5f19810190811161034b575f52601c60205260405f20600160ff19825416179055836115b8565b505f19810181811161034b575f52601c60205260ff60405f205416156115b3565b905061038357600981141582611447565b905061038357600181141582611441565b505f9150600281141561143a565b5060015b600c80546001810180911161034b5782101561172b57815f526015602052600160405f20018054600481109081611721575b5061167c575b505060010161163a565b90925f5b8254811015611715576116938184614961565b60018060a01b0391549060031b1c165f52601860205260405f20545f52601460205260405f2090600a82019182549260ff84169388851015610383576004600195146116e3575b50505001611680565b60089060ff1916179055600660038201915f8354816117086004850192835490614856565b95555501558680806116da565b50925050600183611672565b905015158561166c565b50505f90600190600b546001810180911192835b61034b578181101561178c57805f52601460205260ff600a60405f20015416600c81101561038357600414611778575b6001018361173f565b936117846001916148cb565b94905061176f565b50509190506001600e54116117a2575b50611376565b806117d35750600360ff1960125416176012555f805160206153ba8339815191526020604051428152a15b8161179c565b6117df90600f54614838565b6010556117cd565b5f19820182811161034b57805f526020601a815260ff60405f2054161591826118bc575b82611899575b82611880575b508161185d575b8161183a575b501561135f5760ff19166001176012558161135f565b6002198401915083821161034b57601c915f525260ff60405f2054161583611824565b9050600119830183811161034b575f52601c815260ff60405f205416159061181e565b9091505f52601c815260ff60405f205416159084611817565b9150600219840184811161034b575f52601a815260ff60405f2054161591611811565b9150600119840184811161034b575f52601a815260ff60405f205416159161180b565b6040516307318e9360e31b8152600490fd5b50805f526019602052600160405f2001544210611341565b505f92506002811415611331565b346102a8575f3660031901126102a857602060ff600554166040519015158152f35b346102a85760603660031901126102a85761195261474f565b60243561195d614691565b9160ff601254166005811015610383576003811461035f57600490611980615244565b1461037157815f52601560205260405f209260018060a01b03908183165f52601860205260405f20545f52601460205260405f2091855415611b4f57600283015416918215611b3d576001860192835490600160401b821015611b2957610df48260016119f09401875586614961565b8115611ae757600a81019586549360ff8516600c81101561038357600503611ad5578660016002947fd23000da82104e78ccbf3c41c153eca50a357a80f2ae156096b8b1b43f36f2e19a60076107119960ff19161790555b01555460048110159081611ac9575b5015611aa95701805460ff811615611a99575b50505b604080516001600160a01b03909416845260208401949094521515928201929092529081906060820190565b60ff191660011790558580611a6a565b01805460ff8116611abc575b5050611a6d565b60ff191690558580611ab5565b60079150111588611a57565b6040516333ddf1dd60e01b8152600490fd5b7fd23000da82104e78ccbf3c41c153eca50a357a80f2ae156096b8b1b43f36f2e1956107119386600184600a6002960161020061ff0019825416179055611a48565b634e487b7160e01b5f52604160045260245ffd5b6040516339ec64c160e11b8152600490fd5b604051635ad439e560e11b8152600490fd5b346102a8575f3660031901126102a857611b79615221565b611b81615244565b60ff8060125416600581101561038357600481146103715760031461035f57600e54611bac81615304565b611bb58161534b565b5f5260206019815260405f20600360048201549101549081811015611e4357611bdd916148d9565b5f905f600b5493600180860180961195865b61034b5780821015611c8357815f526014835260405f209188600a8401541692600c841015610383576004899414611c2c575b5060010191611bef565b94611c386004916148cb565b9501548015611c225790968015801580611c7a575b15611c5f575050600190965b90611c22565b90979150611c70575b600190611c59565b9495508594611c68565b50818310611c4d565b90508593879580611c948684614838565b1015611e3d5750611ca58482614838565b935b5f926001875b61034b5781811015611d1257805f526014865260405f209089600a8301541691600c83101561038357600460019314611ce9575b500187611cad565b60040180548980821015611cff575b5050611ce1565b611d08916148d9565b90558a8089611cf8565b8487858886600e545f5260198252600460405f2001611d32848254614856565b905582611d3f8286614825565b10611d93575b5050611d897f39657cef6eb725e291a5e37fe8032a18477b98dd7abc4a03d93428153eff3d0393604051938493846040919493926060820195825260208201520152565b0390a16001600955005b611da9919450611da39084614825565b826148d9565b600a546040516323b872dd60e01b8152336004820152306024820152604481018390529491908290869060649082905f906001600160a01b03165af191821561114b577f39657cef6eb725e291a5e37fe8032a18477b98dd7abc4a03d93428153eff3d0395611d8993611e1f575b505093611d45565b81611e3592903d1061114457611135818361472d565b508580611e17565b93611ca7565b604051633958314d60e01b8152600490fd5b346102a85760203660031901126102a857611e6e61474f565b611e76615244565b60ff6012541690600582101561038357600380921461035f576001600160a01b039081169182611ef3575b7f9d35d6f02c23b682244e3ab27b9be76fa329228dd25ecfa1b9b9974d77c22a14602084806001600160601b0360a01b600254161760025542600755600160ff196005541617600555604051908152a1005b5f915f90600192600154925b838110611f18575b505050505015610b89578180611ea1565b82611f22826148e6565b905490841b1c168714611f36578401611eff565b5050505090508280808080611f07565b346102a8575f3660031901126102a8576020600654604051908152f35b346102a85761093a61200961205c60ff611f7c36614765565b90611f85614a77565b505f52601460205260405f209080155f146120685750600e54905b80549160018201549060018060a01b0360028401541690600384015460048501546005860154916006870154935f52600787016020528860405f20541694600888016020528960405f2054169660098901602052600a60405f2054990154996040519d8e6146bc565b8d5260208d015260408c015260608b015260808a015260a089015260c0880152151560e0870152151561010086015261012085015261204e8282166101408601614acf565b60081c166101608301614adb565b60405191829182614788565b90611fa0565b346102a8575f3660031901126102a85760ff60125416600581101561038357600380911461035f5760055460ff811615612247575f905f91600192838054915b8281106122175750505015610b895760ff19166005556002546001600160a01b039190821633810361216b57506120e433615373565b5f915f918054925b8381106121445750505f19820191821161034b5761211093610de8610df4936148e6565b612118614a15565b7f6a36d5245b4e10f0299e42d1766cde6e266f8168b22e7cb0f8ab6e71021a54e56020604051338152a1005b8261214e826148e6565b905490881b1c163314612163575b81016120ec565b93508361215c565b1515806121ff575b6121ed578161218061492f565b905490851b1c1633145f146121db576121a78261219b61492f565b905490861b1c16615373565b545f1981019290831161034b576121c06121ce936148e6565b9054911b1c16610df461492f565b6121d6614a15565b612118565b6040516301bb5b1f60e51b8152600490fd5b604051631a0a745560e11b8152600490fd5b5060075462015180810180911161034b574210612173565b612220816148e6565b90543391891b1c6001600160a01b03161461223e575b0184906120ae565b92508092612236565b604051631e72ba9760e01b8152600490fd5b346102a8576020806003193601126102a8575f60408051612279816146d9565b82815260608482015201526004355f526015815260405f2060405161229d816146d9565b8154815260019260ff60026122b4600186016149aa565b9483850195865201541690604083019115158252604051938185526080850193518286015251926060604086015283518091528160a086019401915f5b8281106123075784511515606088015286860387f35b83516001600160a01b03168652948101949281019287016122f1565b346102a85760403660031901126102a85761093a61233f61474f565b61205c60ff60243561234f614a77565b506001600160a01b039384165f908152601860209081526040808320548352601482529091209091806124275750600e54945b81549560018301549160028401541690600384015460048501546005860154916006870154935f526007870188528860405f205416946008880189528960405f20541696600989018a52600a60405f2054990154996040519d8e6123e5816146bc565b528d015260408c015260608b015260808a015260a089015260c0880152151560e0870152151561010086015261012085015261204e8282166101408601614acf565b94612382565b346102a8575f3660031901126102a8576020600e54604051908152f35b346102a8575f3660031901126102a8576020600c54604051908152f35b346102a8575f3660031901126102a85760ff8060125416600581101561038357600481146103715760031461035f57335f5260206018815260405f20545f526014906014815260405f20906001928383019485545f526015835260405f206002850160018060a01b0397888254161561270357600e54805f526019875260405f20546203f480810180911161034b57421180156126ef575b6126dd575f19810190811161034b575f526017865260405f2054156126cb57600a91600a8801998960099560ff199c8d8154166009179055016125419061526f565b82549154165f52601b875260405f20555f9055600e545f52601d855260405f20865461256c91614976565b600386018054906004880191825461258391614856565b60058901555f90555f90556012549160ff83166005811015610383578814612624575b50505050506007601a92600e545f5201815260405f20848154169055600e545f525260405f2091825460ff811615612617575b600e546040805133815260208101929092527f188272a28ee264707f833eac91033ac3a9a04f67845e5a9034afc774a4a9603c919081908101610711565b16179055808080806125d9565b600b54965f95909489939091898501808b11865b61267c575b50505050505050600c850294808604600c149015171561034b57866007936064601a97041061266e575b82956125a6565b166002176012558686612667565b8061034b57818710156126c657865f52828b52848460405f2001541696600c88101561038357868e98146126b3575b870196612638565b996126be88916148cb565b9a90506126ab565b61263d565b604051631f86a3f560e21b8152600490fd5b6040516379055d9d60e01b8152600490fd5b50805f526019875260405f205442106124ff565b60405163092ebc6d60e31b8152600490fd5b346102a85760403660031901126102a85761272e61474f565b602435612739615221565b612741615244565b60ff60125416600581101561038357600481036128b45760115462015180810180911161034b5742106128a25760031461035f576001600160a01b0382811615610f9857600a5416916040516370a0823160e01b81523060048201526020908181602481885afa801561114b5784915f91612871575b501061285f5760405163a9059cbb60e01b81526001600160a01b038316600482015260248101849052938190859060449082905f905af193841561114b577f20a3ee7ebf8af442c82daa0e821d3c5a43acc00c80968747a24d6e7f3663d35494612841575b5050604080516001600160a01b03909216825260208201929092529081908101611d89565b8161285792903d1061114457611135818361472d565b50838061281c565b60405163356680b760e01b8152600490fd5b809250838092503d831161289b575b61288a818361472d565b810103126102a857839051866127b7565b503d612880565b6040516302e9939360e41b8152600490fd5b604051633b1cf39760e21b8152600490fd5b346102a8576128d436614765565b905f60a06040516128e4816146a0565b82815282602082015282604082015282606082015282608082015201525f52601660205260405f20905f5260205260c060405f2060405190612925826146a0565b80549182815260018060a01b03918260018201541692602083019384526002820154906040840191825260046003840154936060860194855201549460ff60a0608087019682891615158852019660081c161515865260405196875251166020860152516040850152516060840152511515608083015251151560a0820152f35b346102a8575f3660031901126102a8576020601154604051908152f35b346102a8575f3660031901126102a85760ff601254166040516005821015610383576020918152f35b346102a8575f3660031901126102a857612a04615244565b60125460ff8116600581101561038357600481146103715760031461035f5760ff191660041760125542601155612a39615221565b60ff6012541660058110156103835760038114159081612bce575b50612bbc57600b546001905b60018101811161034b5760018101821015612b8b57815f52601460205260405f2091612ab1612aa6612a9b6003860154600487015490614856565b600586015490614856565b600685015490614856565b906003600e54115f14612b3757600e546009850193925b600e54600219810190811161034b578211612b1057612af390825f528560205260405f205490614856565b90805f52846020525f6040812055801561034b575f190190612ac8565b91929460019450600691505b5f60038201555f60048201555f600582015501550190612a60565b91905f905b600e548211612b7d57612b61612b7791835f526009870160205260405f205490614856565b91805f52600986016020525f60408120556148cb565b90612b3c565b905060066001939294612b1c565b60016009557fac72b0b13eb85909e8e5deeb2bb65c912e147d60cfd7284a17b85e0fe88fdae66020604051428152a1005b60405163a7c1043560e01b8152600490fd5b60049150141581612a54565b346102a8575f3660031901126102a8576020600b54604051908152f35b346102a8576020806003193601126102a857600435612c14615244565b60ff601281601254169060059160058110156103835760048114610371576003811461035f575f908015159081612f4e575b5061072857600f54612d1c575b50505081600f555f9060018091600b548260018201809211905b612cc4575b7fd4116e5003fcbb3a549e4e271b1d73063c38f23828139309c6ac1ef0700a4a506040888a612ca18a83614838565b601055600e545f5260198152816003845f200155601054908351928352820152a1005b8095949561034b5781861015612d1457855f526014885282600a60405f20015416600c81101561038357600414612d01575b838095960194612c6d565b83612d0c81966148cb565b955050612cf6565b849550612c72565b94909291946103835760015b600b546001810180911161034b57811015612f4157805f526014825260405f2090600a820184815416600c81101591826103835781151580612f33575b8381612f22575b81612f11575b50612d85575b5050506001915001612d28565b60089182860193600e91825491825f52868a528a60405f2054165f14612eb4575050825460ff19166004178355505b878954168b8110156103835760011480612e9f575b612e7a575b87895416938b851015610383576001967f732dc60c5d1b1df84f06b7e689c1024b7164003eeeded6276c17827b428734c895604095612e38948c9460028094149081612e65575b50612e41575b5050888060a01b039101541692541683519283528783019061477b565ba1878080612d78565b60ff199182885416178755545f52600783018b52865f209081541690558e80612e1b565b905081545f528c5284885f205416155f612e15565b60ff1960068184541617835581545f5260078701885260405f20908154169055612dce565b5080545f528387528760405f20541615612dc9565b6103835760041480612ef2575b612ecc575b50612db4565b5f19810190811161034b575f52601c875260405f20600160ff198254161790558b612ec6565b505f19810181811161034b575f52601c88528860405f20541615612ec1565b905061038357600982141583612d72565b905061038357600182141583612d6c565b505f92506002821415612d65565b5093509050838080612c53565b91505060015f91141587612c46565b346102a8575f3660031901126102a8576002546040516001600160a01b039091168152602090f35b346102a85760203660031901126102a8576004355f52601c602052602060ff60405f2054166040519015158152f35b346102a8575f3660031901126102a8576020601054604051908152f35b346102a8576020806003193601126102a857612feb614682565b60ff601254166005811015610383576004811461037157600380911461035f57335f526018835260405f20545f526014835260405f209060019060018301948554801561319a575f526015815260405f2092855f146130c95750505050600a019182549260ff841693600c851015610383577f4506ecebb8afddc27b5896d964fe56a6aa511603ed4fac7fb871650473f2175d946007036130b95750805461ff0019166103001790555b54604080513381526020810192909252911515918101919091528060608101610711565b61ff001916610500179055613095565b90919593505f9060015f9401968754945b85811061316b575050505f19830192831161034b578561314061314592610df46131276014977f4506ecebb8afddc27b5896d964fe56a6aa511603ed4fac7fb871650473f2175d9b614961565b905460039190911b1c6001600160a01b03169184614961565b614a5b565b335f526018815260405f20545f5252600a60405f2001600a60ff19825416179055613095565b613175818a614961565b905490831b1c6001600160a01b03163314613192575b82016130da565b92508261318b565b60405163b4479a6360e01b8152600490fd5b346102a8575f3660031901126102a8575f546040516001600160a01b039091168152602090f35b346102a8575f3660031901126102a8576131eb615221565b6131f3615244565b60ff60125416600581101561038357600481146103715760031461035f57600e5461321d81615304565b6132268161534b565b5f52601960205260405f20600481016003815492015480831015611e435761325183613258926148d9565b8093614856565b9055600a546040516323b872dd60e01b8152336004820152306024820152604481018390529190602090839060649082905f906001600160a01b03165af190811561114b577f11f018c083eb908425163290b18ec4bff42c1ba4edf4020de879c7ae1b7ce0f3926020926132d6575b50604051908152a16001600955005b6132ec90833d851161114457611135818361472d565b50836132c7565b346102a8575f3660031901126102a8576040805161331081614711565b36903760405160035f825b60028210613362578361332d81614711565b604051905f90825b6002831061334257604084f35b81516001600160a01b031681526001929092019160209182019101613335565b82546001600160a01b03168152600192830192919091019060200161331b565b346102a8575f3660031901126102a85760ff601254166005811015610383576003811461035f576004906133b4615244565b14610371577f3b88d52dc51aa53d344c3581f44ecf26dd6a764b15cd0e86e576d816c283616360206133e7600c546148cb565b80600c55805f52601582528060405f2055604051908152a1005b346102a8575f3660031901126102a85760ff60125416600581101561038357600481146103715760031461035f57335f52601860205260405f20545f52601460205260405f20600181019081545f52601560205260405f209160018060a01b0360028301541615612703575f9055600a8101805460ff1916600517905561348a6001830161526f565b600e545f526007810160205260405f2060ff198154169055600381015f8154816134ba6004860192835490614856565b9355556006906134cf60068401918254614856565b90556004600184015410613531575b50600281015491549054604080516001600160a01b0390941684526020840192909252908201527fed11cf2f685bc5fb16110aa145d0b495f9cfdc2ed33e03b9362d4bdc3fba262d908060608101610711565b60028301805460ff191690555f5b60018401548110156135bf578061355a600192838701614961565b838060a01b0391549060031b1c165f52601860205260405f20545f52601460205260405f20600a8101600560ff198254161790556135b78460038301925f8454816135ab6004850192835490614856565b96555501918254614856565b90550161353f565b50507fed11cf2f685bc5fb16110aa145d0b495f9cfdc2ed33e03b9362d4bdc3fba262d6134de565b346102a8576020806003193601126102a8576004359067ffffffffffffffff8083116102a857366023840112156102a857826004013592602491841161384d578360051b6040519461363b8583018761472d565b85528284860191830101913683116102a8578301905b82821061382e57505050613663615244565b60ff60125416600581101561381a5760031461035f57600b5490600c8210158061380f575b156137e15760028451106137cf57929190925b5f936001928184809301809111925b6136df575b6040517f37624b43bc21d01bec4f033a1fb10552d28b406b1a68210476d53af5a7d4e68e9080610711898261463e565b85518710156137ca575f85805b61374b575b5015610b89576001600160a01b036137098888614a01565b5116968554600160401b8110156137385790613730879899610df4848a80960186556148e6565b0196956136aa565b85634e487b7160e01b5f5260416004525ffd5b84919498979596986137b757828110156137aa576001600160a01b03806137728a89614a01565b511690825f5260148652600260405f200154161461379c57969794969495949093908601866136ec565b5092508694939596886136f1565b97959496979390936136f1565b86634e487b7160e01b5f5260116004525ffd5b6136af565b6040516350a01e1d60e11b8152600490fd5b602382116137f3575b9291909261369b565b6006845110156137ea576040516350a01e1d60e11b8152600490fd5b506023821115613688565b50634e487b7160e01b5f9081526021600452fd5b81356001600160a01b03811681036102a8578152908401908401613651565b50634e487b7160e01b5f9081526041600452fd5b346102a8575f3660031901126102a857613879615221565b613881615244565b60125460ff81166005811015610383576004036128b45760115462015180810180911161034b5742106128a25760ff1916600317601255600a546040516370a0823160e01b81523060048201526001600160a01b0391909116906020908181602481865afa90811561114b575f9161397d575b50601054811061391c575b5f805160206153ba83398151915282604051428152a16001600955005b60405163a9059cbb60e01b81523360048201526024810191909152918190839060449082905f905af191821561114b575f805160206153ba83398151915292156138ff5761397690823d841161114457611135818361472d565b50826138ff565b90508181813d83116139a3575b613994818361472d565b810103126102a85751836138f4565b503d61398a565b346102a85760203660031901126102a8576004355f52601d60205261093a61092e60405f2061487b565b346102a8576020806003193601126102a8576139ee614682565b6139f6615221565b60ff601254169160058310156103835760048314610371576003831461035f57600192838114159081613dec575b506108e657600e5480613d9d575b83810180911161034b575f9081526019825260408082203383526018845281832054835260148452912060028101546001600160a01b03919082161561270357600a8101805460ff8160081c16600881101561038357600503613d8c5760ff16600c81101590816103835760098114918215613d7f575b8215613d6e575b5050613d5c5760105493601485028581046014148615171561034b576064613ad9910486614856565b8760048501928354838110613d44575b50600401613af8888254614856565b9055613d00575b60105491613b1260038601938454614856565b8093558054828110613ce4575b5083549260ff841692600c84101592836103835760028514928315613cd6575b848415613cc4575b5083613cb7575b5082613cab575b5050613c3b575b505050505081613bad575b50907fed66735ec09b73f80882349a417c96f1ac5bb6bf493441951d147d84c5ed5d8c92608092600e5460405193338552840152604083015215156060820152a1600955005b600a546040516323b872dd60e01b81523360048201523060248201526044810184905294929392918391869160649183915f91165af192831561114b577fed66735ec09b73f80882349a417c96f1ac5bb6bf493441951d147d84c5ed5d8c94608094613c1e575b5091925092613b67565b613c3490843d861161114457611135818361472d565b5086613c14565b61038357600403613c9b575b5050600e5486810180911161034b575f5260078101845260405f209060ff19918783825416179055600e549087820180921161034b576008915f520184528560405f20918254161790558580808080613b5c565b60ff191660041790558680613c47565b54101590508b80613b55565b601054111592508d613b4e565b90935061038357600685149284613b47565b5f9450600486149350613b3f565b80613cf2613cf892856148d9565b90614856565b81558a613b1f565b946006840180549082821190815f14613d3d57613d1d84846148d9565b905b5515613d2f5750505f5b94613aff565b613d38916148d9565b613d29565b5f90613d1f565b60049198613cf2613d5592866148d9565b9790613ae9565b60405163fdc7b1fb60e01b8152600490fd5b909150610383576008148880613ab0565b50600a811491505f613aa9565b604051627c247360e31b8152600490fd5b805f526019825260405f205462239880810180911161034b5742108015613dd6575b15613a32576040516337888d6760e01b8152600490fd5b50805f52601982528360405f2001544211613dbf565b60029150141584613a24565b346102a8575f3660031901126102a857604051806001916001549283825260208092019360015f527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6925f905b828210613e685761093a86613e5c818a038261472d565b6040519182918261463e565b84546001600160a01b03168752958601959383019390830190613e45565b346102a8575f3660031901126102a85760ff60125416600581101561038357600481146103715760031461035f57600e54805f526020906019825260405f205462127500810180911161034b574211801561405c575b61404a57600181118061401d575b61400b57600d613efa81546148cb565b92838255335f52601e815260405f20835f52815260405f2054155f14613ff9577fedb73a28656fc54b5b54d180d469da306262375b8fab1d30e7bfdfe6fa4d71a89361071193335f52601e835260405f20905f52825260405f20556014600e5491825f5260168152613f8560405f20855490815f52835260405f20945f526017835260405f20614976565b600e545f5260198152613fa0600260405f2001855490614976565b8354835560018301336001600160601b0360a01b825416179055335f526018815260405f20545f52526003600160405f20015491015554604051918291338360209093929193604081019460018060a01b031681520152565b604051639fbfc58960e01b8152600490fd5b6040516303a5a26f60e11b8152600490fd5b50335f526018825260405f20545f5260148252600760405f2001815f52825260ff60405f20541615613eea565b60405163709758ab60e11b8152600490fd5b50805f526019825260405f20544210613edc565b346102a8575f3660031901126102a857614088615221565b60ff60125416600581101561038357600390600381141590816141eb575b50612bbc57600b546001808201809211805b61034b5782821015610c2a57815f526020916014835260405f209185830180546140e86004860191825490614856565b916140f96005870193845490614856565b9361410a6006880195865490614856565b90600e9a808c54115f1461418c5760098c9b99939b5493019a5b8c54600219810190811161034b5784116141695761414d90845f528c8c5260405f205490614856565b92805f528b8b525f6040812055801561034b575f190192614124565b9695935f95929c5085935083919b506001999a505b5555555501909192806140b8565b60095f9c9b9c9a99939a9301995b8b5484116141d2576141ba6141cc91855f528c8c5260405f205490614856565b93805f528b8b525f60408120556148cb565b9261419a565b9695935f95929c9a5085935083919b506001995061417e565b600491501415826140a6565b346102a8575f3660031901126102a85761420f615221565b335f52601860205260405f20545f52601460205260405f20600681019081549081156142ee575f92839055600a54600291909101805460405163a9059cbb60e01b81526001600160a01b039182166004820152602481018590529490926020918691604491839187165af193841561114b577f3d97f39b86d061200a7834082f5926e58ec10fd85a9d6930f497729d5e6cc35c946142cf575b505460408051929091166001600160a01b0316825260208201929092529081908101611d89565b6142e79060203d60201161114457611135818361472d565b50846142a8565b6040516365e52d5160e11b8152600490fd5b346102a8576020806003193601126102a8576004359061431e615244565b60125460ff811660058110156103835760048114610371576003811461035f576143f757600b5491600c831080156143eb575b6143d95760015b600481106143a9577fe891dc01ac1296966aff69221063a5796adb4993741b159b043f7066e292393960208661439d8760018860ff19161760125582600f5582614838565b601055604051908152a1005b805f52601582526004600160405f200154106143c757600101614358565b6040516305a2d66760e11b8152600490fd5b60405163dd5d9ea160e01b8152600490fd5b506003600c5410614351565b6040516305c3c4b960e41b8152600490fd5b346102a85760203660031901126102a8576004355f52601a602052602060ff60405f2054166040519015158152f35b346102a85760203660031901126102a8576004355f52601360205261093a61092e60405f2061487b565b346102a8575f3660031901126102a85761447a615221565b60ff601254166005811015610383576003811461035f5760048114610371576001036145f157335f52601860205260405f20545f52601460205260405f20600a810180549060ff8216600c811015610383576001036145df5760105460148102908082046014148115171561034b5760646144f6920490614856565b600b810290808204600b149015171561034b57600c61030291049260048501614520858254614856565b905561ffff1916179055600a546040516323b872dd60e01b815233600482015230602482015260448101839052926001600160a01b0391602090859060649082905f9087165af190811561114b577fa1036ac26bc1acfe7c0581273bb656a2426fb6f32067116729c8fad15a58bfc7946002926145c0575b50015460408051929091166001600160a01b0316825260208201929092529081908101611d89565b6145d89060203d60201161114457611135818361472d565b5085614598565b60405163991c8dc760e01b8152600490fd5b604051637250f10560e01b8152600490fd5b60209060206040818301928281528551809452019301915f5b82811061462a575050505090565b83518552938101939281019260010161461c565b60209060206040818301928281528551809452019301915f5b828110614665575050505090565b83516001600160a01b031685529381019392810192600101614657565b6004359081151582036102a857565b6044359081151582036102a857565b60c0810190811067ffffffffffffffff821117611b2957604052565b610180810190811067ffffffffffffffff821117611b2957604052565b6060810190811067ffffffffffffffff821117611b2957604052565b60a0810190811067ffffffffffffffff821117611b2957604052565b6040810190811067ffffffffffffffff821117611b2957604052565b90601f8019910116810190811067ffffffffffffffff821117611b2957604052565b600435906001600160a01b03821682036102a857565b60409060031901126102a8576004359060243590565b90600c8210156103835752565b919091610180810192805182526020810151602083015260018060a01b036040820151166040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e0810151151560e0830152610100808201511515908301526101208082015190830152614810610140808301519084019061477b565b61016080910151916008831015610383570152565b8181029291811591840414171561034b57565b8115614842570490565b634e487b7160e01b5f52601260045260245ffd5b9190820180921161034b57565b908160209103126102a8575180151581036102a85790565b90604051918281549182825260209260208301915f5260205f20935f905b8282106148b1575050506148af9250038361472d565b565b855484526001958601958895509381019390910190614899565b5f19811461034b5760010190565b9190820391821161034b57565b60015481101561491b5760015f527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf601905f90565b634e487b7160e01b5f52603260045260245ffd5b6001541561491b5760015f527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6905f90565b805482101561491b575f5260205f2001905f90565b8054600160401b811015611b295761499391600182018155614961565b819291549060031b91821b915f19901b1916179055565b90604051918281549182825260209260208301915f5260205f20935f905b8282106149de575050506148af9250038361472d565b85546001600160a01b0316845260019586019588955093810193909101906149c8565b805182101561491b5760209160051b010190565b6001548015614a47575f1901614a42614a2d826148e6565b81549060018060a01b039060031b1b19169055565b600155565b634e487b7160e01b5f52603160045260245ffd5b80548015614a47575f190190614a74614a2d8383614961565b55565b60405190614a84826146bc565b5f610160838281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201520152565b600c8210156103835752565b60088210156103835752565b90600e54805f52601960205260405f205462151800810180911161034b57421080156151fe575b6151ec57805f1981011161034b575f1981015f52601660205260405f20335f52601e60205260405f205f1983015f5260205260405f20545f5260205260405f209260018060a01b03600185015416908133036151da5760048501805460ff8116156151c85760ff8160081c166151b657835f52601860205260405f20545f52601460205260ff600a60405f20015416600c811015610383576004036108765761ff00191661010017905561516557505f1981015f526017602052614bd460405f2061487b565b5f915f5b8251811015614c2c575f1982015f52601660205260405f20614bfa8285614a01565b515f5260205260ff600460405f20015416614c18575b600101614bd8565b92614c246001916148cb565b939050614c10565b50614c4a9291505f19015f526019602052600360405f200154614838565b915f8093600193600b54945b60018601861161034b5760018601811015614cab57805f52601460205260ff600a60405f20015416600c81101561038357600414614c97575b600101614c56565b95614ca36001916148cb565b969050614c8f565b509091929350606093600e545f52601a60205260ff60405f20541661513f575b614cd58684614838565b925f9660015b600b5460018101811161034b57600101811015614d7557805f52601460205260405f2060ff600a82015416600c81101561038357600414614d20575b50600101614cdb565b6003018054919791878110614d50575b600192614d4992614d428a80946148d9565b9055614856565b9690614d17565b600192614d68614d49939c613cf284614d429c6148d9565b9b82995092509250614d30565b509094939195969296805180614f23575b5050848410614e5a575050505060028201819055600a54600183015460405163a9059cbb60e01b81526001600160a01b039182166004820152602481018490529391602091859116815f81604481015b03925af192831561114b577f1d3e1b711499f6260ce9c1c1eeabe0f46dfc60b81542d0021ecef0716d0ed1cb93614e3b575b5060018101549054604080516001600160a01b03909316835260208301939093529181019190915280606081015b0390a1565b614e539060203d60201161114457611135818361472d565b505f614e08565b6402540be400614e6a85876148d9565b1015614ebc5750505060028301819055600a54600184015460405163a9059cbb60e01b81526001600160a01b0391821660048201526024810193909352919391602091859116815f8160448101614dd6565b7fd2c92d0f1dd9e4ffc64744c794d5c6f0c58306865dcb816a20cf0db5c300d97e955060a094600360ff1960125416176012556040519485526020850152604084015260608301526080820152a15f805160206153ba8339815191526020604051428152a1565b5f989498979391959692975088155f146151255750969591959492945b875f935b865185101561511557614f578588614a01565b515f52601460205260018060a01b03600260405f200154165f52601b60205260405f20545f526015602052614f91600160405f20016149aa565b965f985f9a5f5b8a5181101561505c576001600160a01b03614fb3828d614a01565b51165f52601860205260405f20545f52601460205260405f2060ff600a82015416600c81101561038357600414614fee575b50600101614f98565b909b9c614ffa906148cb565b9c801580158061504f575b1561501b575050600460019101549b5b90614fe5565b9c91909c61502d575b50600190615015565b6004919c5001548060011b908082046002149015171561034b579a6001615024565b5060048301548211615005565b5092959194999093979b969a6150729088614838565b908082101561510d5750985b5f5b89518110156150f4576001600160a01b0361509b828c614a01565b51165f52601860205260405f20545f52601460205260405f2060ff600a82015416600c811015610383576004146150d6575b50600101615080565b8b6001929e60046150ed9301614d428382546148d9565b9c906150cd565b50959a9199929850929650946001909101939192614f44565b90509861507e565b9296985092509293505f80614d86565b90613cf2615133928a614838565b96959195949294614f40565b949350601d60205261515f61515660405f2061487b565b94855190614856565b94614ccb565b5f60028501559254604080516001600160a01b039095168552602085019190915291927f2f6a2242608827783b40fb797960e2d61ea6e692e9c61049f223ec66f18bbc429290915081908101614e36565b604051630c8d9eab60e31b8152600490fd5b604051636a9a57a560e01b8152600490fd5b604051634a7777b360e11b8152600490fd5b60405163215eb65f60e21b8152600490fd5b50805f52601960205260405f205462224700810180911161034b57421015614b0e565b600260095414615232576002600955565b604051633ee5aeb560e01b8152600490fd5b5f546001600160a01b0316330361525757565b6040516306b66d0160e01b8152336004820152602490fd5b905f905f5b83548110156152b0576152878185614961565b90543360039290921b1c6001600160a01b0316146152a8575b600101615274565b9150816152a0565b509180545f19810190811161034b576148af926152dd6152d36131409385614961565b9190549285614961565b81546001600160a01b03600392831b81811b199092169490921b9490941c1690921b179055565b5f52601960205260405f2054804210908115615334575b5061532257565b6040516307f1ee4960e31b8152600490fd5b90506203f480810180911161034b5742115f61531b565b5f526019602052600260405f2001541561536157565b60405163a8de391160e01b8152600490fd5b5f80546001600160a01b039283166001600160a01b03198216811783559216907f688b8f34d886f8a2414b39aa6cef1ec6198215ba9b47fe8ac4260b44139bd5b69080a356fe7a406291d7dedc33dcf93635d6443b37b6f30b4d33a6b86f5e2427e9d96f7c22a2646970667358221220b336b87084de7c21a03af77acf1a19da3d91ad19bff6188cd3c365f31d9bd41d64736f6c63430008170033",
    sourceMap:
      "274:69880:3:-:0;;;;;;;;;;;;;-1:-1:-1;;274:69880:3;;;;-1:-1:-1;;;;;274:69880:3;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;-1:-1:-1;;;;;274:69880:3;;;;;;;:::i;:::-;;766:30:4;;;762:101;;-1:-1:-1;274:69880:3;;;;;;;;;;;;;;-1:-1:-1;274:69880:3;;;;;;2256:44:4;-1:-1:-1;2256:44:4;;1857:1:2;2061:21;1857:1;274:69880:3;;5353:36;274:69880;;;5353:36;274:69880;;;5399:48;274:69880;;5399:48;274:69880;;;;;;;;762:101:4;274:69880:3;;-1:-1:-1;;;819:33:4;;-1:-1:-1;819:33:4;;;274:69880:3;;;819:33:4;274:69880:3;-1:-1:-1;274:69880:3;;;;;;-1:-1:-1;274:69880:3;;;;;-1:-1:-1;274:69880:3;;;;-1:-1:-1;;;;;274:69880:3;;;;;;:::o",
    linkReferences: {},
  },
  deployedBytecode: {
    object:
      "0x60806040526004361015610011575f80fd5b5f3560e01c8062b16fee146144625780630899fe41146144385780630a5b34f214614409578063108f1d0314614300578063110f8874146141f757806316bfe25c146140705780631afbd12814613e8657806327bd3ef014613df857806339786a96146139d45780633a85bded146139aa5780633f1b3f8f1461386157806342c1b0ef146135e75780634ae4ab48146134015780634ee4a857146133825780634ee9c6f7146132f357806350c8e1fd146131d35780635495d2aa146131ac5780635c6af45614612fd15780635d86b8e114612fb45780636619980814612f855780636d4da76d14612f5d57806372547ec914612bf757806372f833a814612bda578063756b01b6146129ec5780637985940d146129c35780637b47d7e8146129a65780637b55476d146128c657806395ccea67146127155780639e99d7c6146124675780639f2592b31461244a578063a0b34a301461242d578063a3d033e514612323578063a482b10214612259578063a504f8091461206e578063a8fdb78814611f63578063ac115bbe14611f46578063b87b1d0d14611e55578063bc017b5714611b61578063be47120614611939578063c2a41da014611917578063c3a42297146112eb578063c4afc37a14610fc7578063cc10a3aa14610faa578063d26a624b14610c59578063d41c3a6514610c31578063d98b250314610be2578063dbcd14f014610a81578063e15d69f314610a64578063e319ace914610a2c578063e329972d1461093e578063ea398bc114610904578063ec15a89014610746578063f2ddec411461060c578063f34cf775146105ef578063f3f02d0314610397578063fb3944f1146102ac5763fef4c5501461028b575f80fd5b346102a8575f3660031901126102a8576020600854604051908152f35b5f80fd5b346102a8575f3660031901126102a8576102c4615244565b60ff60125416600581101561038357600481146103715760031461035f57600e54805f526019602052600160405f2001549062015180820180921161034b575f526019602052600160405f200155600e545f527f1053ff2559207f3358e287928bbde971ad88f7b99c0335368afe0c5baf1ef55f6020600160405f200154604051908152a1005b634e487b7160e01b5f52601160045260245ffd5b60405163f856e0a560e01b8152600490fd5b6040516338f25eb760e21b8152600490fd5b634e487b7160e01b5f52602160045260245ffd5b346102a8575f3660031901126102a8576012805460059160ff9182168381101561038357600481146103715760031461035f5760015b600b546001810180911161034b578110156105ed57805f526020906014825260405f2091600a8301908582541691600c831015928361038357801515806105df575b84816105ce575b816105bd575b50610430575b5050505060019150016103cd565b60089283870194600e92835491825f528784528b60405f2054165f14610560575050835460ff19166004178455505b888854168a811015610383576001148061054b575b610526575b88885416948a861015610383576001977f732dc60c5d1b1df84f06b7e689c1024b7164003eeeded6276c17827b428734c8966040966104e3958d9460028094149081610511575b506104ed575b5050898060a01b039101541693541690845193845283019061477b565ba185808080610422565b60ff199182895416178855545f52600783018552875f209081541690558d806104c6565b905081545f52865284895f205416155f6104c0565b60ff1960068185541617845582545f5260078801825260405f20908154169055610479565b5081545f528481528860405f20541615610474565b610383576004148061059e575b610578575b5061045f565b5f19810190811161034b575f52601c815260405f20600160ff198254161790558a610572565b505f19810181811161034b575f52601c82528960405f2054161561056d565b90506103835760098114158461041c565b905061038357600181141584610416565b505f9350600281141561040f565b005b346102a8575f3660031901126102a8576020600d54604051908152f35b346102a85760203660031901126102a85761062561474f565b60ff601254166005811015610383576003811461035f57610644615244565b6004811461037157801515908161073a575b50610728576001600160a01b0381165f8181526018602052604090205490919061071657600a7f6041a3b674b81a0fecc93042cf89f30bf96db96073f1312e253264f8a5cceba3926106a9600b546148cb565b600b8181555f8281526014602090815260408083208581558684526018835292819020949094556002820180546001600160a01b03191690951790945593909301805461ffff1916610101179055915482516001600160a01b03909416845290830152819081015b0390a1005b60405163f411c32760e01b8152600490fd5b60405163897c9a9360e01b8152600490fd5b60019150141582610656565b346102a8576020806003193601126102a85760043590610764615244565b60ff6012541660058110156103835760048114610371576003811461035f57600181141590816108f8575b506108e657600e5491825f526019825260405f20546213c680810180821161034b5742119081156108dc575b506108ca57825f526016825260405f20815f52825260405f208054938285036108b85760018201546001600160a01b03165f818152601886526040808220548252601487529020600a015490919060ff16600c8110156103835760041491821592610888575b5050610876577f3d37a493337dd24e7cb7bec23d4bde6447e3a1d6e75803de86dbf9f9b5732b8493600461086d9201600160ff19825416179055600e545f526013845260405f20614976565b604051908152a1005b6040516329ceba1160e11b8152600490fd5b9091505f526018845260405f20545f5260148452600760405f2001905f52835260ff60405f205416158580610821565b60405163e22b971160e01b8152600490fd5b604051633341b44560e11b8152600490fd5b90504210846107bb565b604051637bf65ebd60e11b8152600490fd5b6002915014158361078f565b346102a85760203660031901126102a8576004355f52601760205261093a61092e60405f2061487b565b60405191829182614603565b0390f35b346102a8576020806003193601126102a8575f608060405161095f816146f5565b82815282848201526060604082015282606082015201526004355f526019815260405f2060405161098f816146f5565b815481526001926001830154928183019384526109ae6002820161487b565b9160408401928352600460038301549260608601938452015492608085019384526040519582875260c08701955183880152516040870152519360a0606087015284518091528160e087019501915f5b828110610a195784516080890152855160a089015287870388f35b83518752958101959281019288016109fe565b346102a85760203660031901126102a8576001600160a01b03610a4d61474f565b165f526018602052602060405f2054604051908152f35b346102a8575f3660031901126102a8576020600754604051908152f35b346102a85760603660031901126102a857600435610a9d614691565b60ff60125416916005831015610383576004831461037157600380931461035f57805f52601560205260405f20916024355f52601460205260405f20600a81019485549460ff8616600c81101561038357600703610bd1575f915f9060018093018054925b838110610b9b575b505050505015610b89577f5cf6fd140141a8a14aca1d538d93e40de68c6a776df311ae862a898ea2a660ef946080948315610b795750805461ffff19166105041790555b60020154604080516001600160a01b03909216825233602083015281019290925215156060820152a1005b61ff001916610700179055610b4e565b604051633d76489160e01b8152600490fd5b610ba58183614961565b90543391851b1c6001600160a01b031614610bc1578401610b02565b5050505090508680808080610b0a565b60405162789f4360e21b8152600490fd5b346102a85760203660031901126102a857610bfb614682565b610c03615221565b60ff60125416600581101561038357600481146103715760031461035f57610c2a90614ae7565b6001600955005b346102a8575f3660031901126102a857600a546040516001600160a01b039091168152602090f35b346102a85760203660031901126102a857610c7261474f565b6001600160a01b0381811691908215610f985760ff60125416600581101561038357600380911461035f575f335f52601860205260405f20548015159081610f72575b50610f6a575b15610b89575f925f93600194858054915b828110610f415750505015610f2f5781548316158080610f23575b80610f16575b610ee95715610e7757600380546001600160a01b0319166001600160a01b0390921691909117905542600855600e546006555b818154169283151580610e6a575b610d60575b7f882febe0458c27b4ed12caa22ad034f24f206e2da9aa922015eff66e45f2006b602086604051908152a1005b5f9492938460045416145f14610e4957610d7c84835416615373565b8054825485165f5b828110610e22575050505b6001600160601b0360a01b8083541683556004541660045554935f19850194851161034b57610df4602094610e1293610de87f882febe0458c27b4ed12caa22ad034f24f206e2da9aa922015eff66e45f2006b986148e6565b9054911b1c16916148e6565b90919060018060a01b038084549260031b9316831b921b1916179055565b610e1a614a15565b918380610d33565b8187610e2d836148e6565b905490881b1c1614610e41575b8301610d84565b965086610e3a565b9350610e6383610e5761492f565b905490841b1c16615373565b5f93610d8f565b5082600454161515610d2e565b60085462015180810180911161034b5780421080610f09575b15610eae575050600480546001600160a01b03191685179055610d20565b421180610efb575b15610ee957600380546001600160a01b0319166001600160a01b0390921691909117905542600855600e54600655610d20565b604051637787a74d60e01b8152600490fd5b50600654600e541415610eb6565b50600654600e5414610e90565b50600654600e5414610ced565b50836004541615610ce7565b6040516362c9b45b60e01b8152600490fd5b86610f4b826148e6565b905490881b1c168914610f61575b018690610ccc565b92508092610f59565b506001610cbb565b90505f52601460205260ff600a60405f20015416600c8110156103835760041486610cb5565b604051631e7d738760e21b8152600490fd5b346102a8575f3660031901126102a8576020600f54604051908152f35b346102a85760203660031901126102a857610fe0614682565b610fe8615221565b60ff60125416600581101561038357600481146103715760031461035f57600e54805f52601960205260405f205462054600810180911161034b57421180156112c9575b6112b7575f19810190811161034b575f52601360205260405f20546112a557600b5460015b60018201821161034b576001820181101561127a57805f52601460205260405f2090600582018054908161126b575b5050600e54600181118061124a575b8061123d575b6111be575b50600e5460038111611163575b508380611156575b6110be575b6001915001611051565b6006820180545f91829055600a5460029094015460405163a9059cbb60e01b81526001600160a01b039182166004820152602481019290925290936020928592604492849291165af191821561114b5760019261111c575b506110b4565b61113d9060203d602011611144575b611135818361472d565b810190614863565b5084611116565b503d61112b565b6040513d5f823e3d90fd5b50600682015415156110af565b8060021981011161034b57600219015f526009820160205260405f205480156110a75761119560068401918254614856565b9055600e548060021981011161034b57600219015f52600982016020525f6040812055846110a7565b60ff60125416600581101561038357600214908161121e575b501561120b57600382015f81549155600e54805f1981011161034b575f19015f526009830160205260405f20555b8461109a565b600382015f815491556006830155611205565b5f1981019150811161034b575f52601360205260405f205415856111d7565b5060038301541515611095565b50805f1981011161034b575f1981015f52601360205260405f20541561108f565b5f905560068301558480611080565b7f01c9e927536754e1d95ea7a9eda17265ab11a240401b5926f33c0eb76c9d7f335f80a16001600955005b60405163fcb6f0ab60e01b8152600490fd5b60405163d53184ed60e01b8152600490fd5b50805f52601960205260405f20546203f480810180911161034b57421061102c565b346102a8575f3660031901126102a857611303615244565b60125460ff81169060058210156103835760048214610371576003821461035f575f91600181141580611909575b6108e657600e54801515806118f1575b6118df5761134e906148cb565b9283600e55610383576002146117e7575b505f52601960205260405f20428155600f546113db575b62278d00420180421161034b578160039160017f08a7ba25f6100ab18c633572926abf5bd6a45439a9322adee245bc3a9685efda940155600f549182910155600e54610711601054604051938493846040919493926060820195825260208201520152565b60ff60125416600581101561038357600481146103715760031461035f5760015b600b546001810180911161034b5781101561163657805f52601460205260405f209060ff600a83015416600c81101590816103835780151580611628575b8281611617575b81611606575b50611459575b505060019150016113fc565b600e5491825f526008850160205260ff60405f2054165f146115a657505050600a8201805460ff191660041790555b60ff601254166005811015610383576001148061158b575b61155e575b60ff601254169160058310156103835760407f732dc60c5d1b1df84f06b7e689c1024b7164003eeeded6276c17827b428734c89160026001951480611544575b611518575b61151060ff600a878060a01b03600285015416930154168351928352602083019061477b565ba1838061144d565b60ff19600881600a8401541617600a830155600e545f5260078201602052825f209081541690556114ea565b50600e545f526008810160205260ff825f205416156114e5565b60ff19600681600a8501541617600a840155600e545f526007830160205260405f209081541690556114a5565b50600e545f526008820160205260ff60405f205416156114a0565b61038357600414806115e5575b6115be575b50611488565b5f19810190811161034b575f52601c60205260405f20600160ff19825416179055836115b8565b505f19810181811161034b575f52601c60205260ff60405f205416156115b3565b905061038357600981141582611447565b905061038357600181141582611441565b505f9150600281141561143a565b5060015b600c80546001810180911161034b5782101561172b57815f526015602052600160405f20018054600481109081611721575b5061167c575b505060010161163a565b90925f5b8254811015611715576116938184614961565b60018060a01b0391549060031b1c165f52601860205260405f20545f52601460205260405f2090600a82019182549260ff84169388851015610383576004600195146116e3575b50505001611680565b60089060ff1916179055600660038201915f8354816117086004850192835490614856565b95555501558680806116da565b50925050600183611672565b905015158561166c565b50505f90600190600b546001810180911192835b61034b578181101561178c57805f52601460205260ff600a60405f20015416600c81101561038357600414611778575b6001018361173f565b936117846001916148cb565b94905061176f565b50509190506001600e54116117a2575b50611376565b806117d35750600360ff1960125416176012555f805160206153ba8339815191526020604051428152a15b8161179c565b6117df90600f54614838565b6010556117cd565b5f19820182811161034b57805f526020601a815260ff60405f2054161591826118bc575b82611899575b82611880575b508161185d575b8161183a575b501561135f5760ff19166001176012558161135f565b6002198401915083821161034b57601c915f525260ff60405f2054161583611824565b9050600119830183811161034b575f52601c815260ff60405f205416159061181e565b9091505f52601c815260ff60405f205416159084611817565b9150600219840184811161034b575f52601a815260ff60405f2054161591611811565b9150600119840184811161034b575f52601a815260ff60405f205416159161180b565b6040516307318e9360e31b8152600490fd5b50805f526019602052600160405f2001544210611341565b505f92506002811415611331565b346102a8575f3660031901126102a857602060ff600554166040519015158152f35b346102a85760603660031901126102a85761195261474f565b60243561195d614691565b9160ff601254166005811015610383576003811461035f57600490611980615244565b1461037157815f52601560205260405f209260018060a01b03908183165f52601860205260405f20545f52601460205260405f2091855415611b4f57600283015416918215611b3d576001860192835490600160401b821015611b2957610df48260016119f09401875586614961565b8115611ae757600a81019586549360ff8516600c81101561038357600503611ad5578660016002947fd23000da82104e78ccbf3c41c153eca50a357a80f2ae156096b8b1b43f36f2e19a60076107119960ff19161790555b01555460048110159081611ac9575b5015611aa95701805460ff811615611a99575b50505b604080516001600160a01b03909416845260208401949094521515928201929092529081906060820190565b60ff191660011790558580611a6a565b01805460ff8116611abc575b5050611a6d565b60ff191690558580611ab5565b60079150111588611a57565b6040516333ddf1dd60e01b8152600490fd5b7fd23000da82104e78ccbf3c41c153eca50a357a80f2ae156096b8b1b43f36f2e1956107119386600184600a6002960161020061ff0019825416179055611a48565b634e487b7160e01b5f52604160045260245ffd5b6040516339ec64c160e11b8152600490fd5b604051635ad439e560e11b8152600490fd5b346102a8575f3660031901126102a857611b79615221565b611b81615244565b60ff8060125416600581101561038357600481146103715760031461035f57600e54611bac81615304565b611bb58161534b565b5f5260206019815260405f20600360048201549101549081811015611e4357611bdd916148d9565b5f905f600b5493600180860180961195865b61034b5780821015611c8357815f526014835260405f209188600a8401541692600c841015610383576004899414611c2c575b5060010191611bef565b94611c386004916148cb565b9501548015611c225790968015801580611c7a575b15611c5f575050600190965b90611c22565b90979150611c70575b600190611c59565b9495508594611c68565b50818310611c4d565b90508593879580611c948684614838565b1015611e3d5750611ca58482614838565b935b5f926001875b61034b5781811015611d1257805f526014865260405f209089600a8301541691600c83101561038357600460019314611ce9575b500187611cad565b60040180548980821015611cff575b5050611ce1565b611d08916148d9565b90558a8089611cf8565b8487858886600e545f5260198252600460405f2001611d32848254614856565b905582611d3f8286614825565b10611d93575b5050611d897f39657cef6eb725e291a5e37fe8032a18477b98dd7abc4a03d93428153eff3d0393604051938493846040919493926060820195825260208201520152565b0390a16001600955005b611da9919450611da39084614825565b826148d9565b600a546040516323b872dd60e01b8152336004820152306024820152604481018390529491908290869060649082905f906001600160a01b03165af191821561114b577f39657cef6eb725e291a5e37fe8032a18477b98dd7abc4a03d93428153eff3d0395611d8993611e1f575b505093611d45565b81611e3592903d1061114457611135818361472d565b508580611e17565b93611ca7565b604051633958314d60e01b8152600490fd5b346102a85760203660031901126102a857611e6e61474f565b611e76615244565b60ff6012541690600582101561038357600380921461035f576001600160a01b039081169182611ef3575b7f9d35d6f02c23b682244e3ab27b9be76fa329228dd25ecfa1b9b9974d77c22a14602084806001600160601b0360a01b600254161760025542600755600160ff196005541617600555604051908152a1005b5f915f90600192600154925b838110611f18575b505050505015610b89578180611ea1565b82611f22826148e6565b905490841b1c168714611f36578401611eff565b5050505090508280808080611f07565b346102a8575f3660031901126102a8576020600654604051908152f35b346102a85761093a61200961205c60ff611f7c36614765565b90611f85614a77565b505f52601460205260405f209080155f146120685750600e54905b80549160018201549060018060a01b0360028401541690600384015460048501546005860154916006870154935f52600787016020528860405f20541694600888016020528960405f2054169660098901602052600a60405f2054990154996040519d8e6146bc565b8d5260208d015260408c015260608b015260808a015260a089015260c0880152151560e0870152151561010086015261012085015261204e8282166101408601614acf565b60081c166101608301614adb565b60405191829182614788565b90611fa0565b346102a8575f3660031901126102a85760ff60125416600581101561038357600380911461035f5760055460ff811615612247575f905f91600192838054915b8281106122175750505015610b895760ff19166005556002546001600160a01b039190821633810361216b57506120e433615373565b5f915f918054925b8381106121445750505f19820191821161034b5761211093610de8610df4936148e6565b612118614a15565b7f6a36d5245b4e10f0299e42d1766cde6e266f8168b22e7cb0f8ab6e71021a54e56020604051338152a1005b8261214e826148e6565b905490881b1c163314612163575b81016120ec565b93508361215c565b1515806121ff575b6121ed578161218061492f565b905490851b1c1633145f146121db576121a78261219b61492f565b905490861b1c16615373565b545f1981019290831161034b576121c06121ce936148e6565b9054911b1c16610df461492f565b6121d6614a15565b612118565b6040516301bb5b1f60e51b8152600490fd5b604051631a0a745560e11b8152600490fd5b5060075462015180810180911161034b574210612173565b612220816148e6565b90543391891b1c6001600160a01b03161461223e575b0184906120ae565b92508092612236565b604051631e72ba9760e01b8152600490fd5b346102a8576020806003193601126102a8575f60408051612279816146d9565b82815260608482015201526004355f526015815260405f2060405161229d816146d9565b8154815260019260ff60026122b4600186016149aa565b9483850195865201541690604083019115158252604051938185526080850193518286015251926060604086015283518091528160a086019401915f5b8281106123075784511515606088015286860387f35b83516001600160a01b03168652948101949281019287016122f1565b346102a85760403660031901126102a85761093a61233f61474f565b61205c60ff60243561234f614a77565b506001600160a01b039384165f908152601860209081526040808320548352601482529091209091806124275750600e54945b81549560018301549160028401541690600384015460048501546005860154916006870154935f526007870188528860405f205416946008880189528960405f20541696600989018a52600a60405f2054990154996040519d8e6123e5816146bc565b528d015260408c015260608b015260808a015260a089015260c0880152151560e0870152151561010086015261012085015261204e8282166101408601614acf565b94612382565b346102a8575f3660031901126102a8576020600e54604051908152f35b346102a8575f3660031901126102a8576020600c54604051908152f35b346102a8575f3660031901126102a85760ff8060125416600581101561038357600481146103715760031461035f57335f5260206018815260405f20545f526014906014815260405f20906001928383019485545f526015835260405f206002850160018060a01b0397888254161561270357600e54805f526019875260405f20546203f480810180911161034b57421180156126ef575b6126dd575f19810190811161034b575f526017865260405f2054156126cb57600a91600a8801998960099560ff199c8d8154166009179055016125419061526f565b82549154165f52601b875260405f20555f9055600e545f52601d855260405f20865461256c91614976565b600386018054906004880191825461258391614856565b60058901555f90555f90556012549160ff83166005811015610383578814612624575b50505050506007601a92600e545f5201815260405f20848154169055600e545f525260405f2091825460ff811615612617575b600e546040805133815260208101929092527f188272a28ee264707f833eac91033ac3a9a04f67845e5a9034afc774a4a9603c919081908101610711565b16179055808080806125d9565b600b54965f95909489939091898501808b11865b61267c575b50505050505050600c850294808604600c149015171561034b57866007936064601a97041061266e575b82956125a6565b166002176012558686612667565b8061034b57818710156126c657865f52828b52848460405f2001541696600c88101561038357868e98146126b3575b870196612638565b996126be88916148cb565b9a90506126ab565b61263d565b604051631f86a3f560e21b8152600490fd5b6040516379055d9d60e01b8152600490fd5b50805f526019875260405f205442106124ff565b60405163092ebc6d60e31b8152600490fd5b346102a85760403660031901126102a85761272e61474f565b602435612739615221565b612741615244565b60ff60125416600581101561038357600481036128b45760115462015180810180911161034b5742106128a25760031461035f576001600160a01b0382811615610f9857600a5416916040516370a0823160e01b81523060048201526020908181602481885afa801561114b5784915f91612871575b501061285f5760405163a9059cbb60e01b81526001600160a01b038316600482015260248101849052938190859060449082905f905af193841561114b577f20a3ee7ebf8af442c82daa0e821d3c5a43acc00c80968747a24d6e7f3663d35494612841575b5050604080516001600160a01b03909216825260208201929092529081908101611d89565b8161285792903d1061114457611135818361472d565b50838061281c565b60405163356680b760e01b8152600490fd5b809250838092503d831161289b575b61288a818361472d565b810103126102a857839051866127b7565b503d612880565b6040516302e9939360e41b8152600490fd5b604051633b1cf39760e21b8152600490fd5b346102a8576128d436614765565b905f60a06040516128e4816146a0565b82815282602082015282604082015282606082015282608082015201525f52601660205260405f20905f5260205260c060405f2060405190612925826146a0565b80549182815260018060a01b03918260018201541692602083019384526002820154906040840191825260046003840154936060860194855201549460ff60a0608087019682891615158852019660081c161515865260405196875251166020860152516040850152516060840152511515608083015251151560a0820152f35b346102a8575f3660031901126102a8576020601154604051908152f35b346102a8575f3660031901126102a85760ff601254166040516005821015610383576020918152f35b346102a8575f3660031901126102a857612a04615244565b60125460ff8116600581101561038357600481146103715760031461035f5760ff191660041760125542601155612a39615221565b60ff6012541660058110156103835760038114159081612bce575b50612bbc57600b546001905b60018101811161034b5760018101821015612b8b57815f52601460205260405f2091612ab1612aa6612a9b6003860154600487015490614856565b600586015490614856565b600685015490614856565b906003600e54115f14612b3757600e546009850193925b600e54600219810190811161034b578211612b1057612af390825f528560205260405f205490614856565b90805f52846020525f6040812055801561034b575f190190612ac8565b91929460019450600691505b5f60038201555f60048201555f600582015501550190612a60565b91905f905b600e548211612b7d57612b61612b7791835f526009870160205260405f205490614856565b91805f52600986016020525f60408120556148cb565b90612b3c565b905060066001939294612b1c565b60016009557fac72b0b13eb85909e8e5deeb2bb65c912e147d60cfd7284a17b85e0fe88fdae66020604051428152a1005b60405163a7c1043560e01b8152600490fd5b60049150141581612a54565b346102a8575f3660031901126102a8576020600b54604051908152f35b346102a8576020806003193601126102a857600435612c14615244565b60ff601281601254169060059160058110156103835760048114610371576003811461035f575f908015159081612f4e575b5061072857600f54612d1c575b50505081600f555f9060018091600b548260018201809211905b612cc4575b7fd4116e5003fcbb3a549e4e271b1d73063c38f23828139309c6ac1ef0700a4a506040888a612ca18a83614838565b601055600e545f5260198152816003845f200155601054908351928352820152a1005b8095949561034b5781861015612d1457855f526014885282600a60405f20015416600c81101561038357600414612d01575b838095960194612c6d565b83612d0c81966148cb565b955050612cf6565b849550612c72565b94909291946103835760015b600b546001810180911161034b57811015612f4157805f526014825260405f2090600a820184815416600c81101591826103835781151580612f33575b8381612f22575b81612f11575b50612d85575b5050506001915001612d28565b60089182860193600e91825491825f52868a528a60405f2054165f14612eb4575050825460ff19166004178355505b878954168b8110156103835760011480612e9f575b612e7a575b87895416938b851015610383576001967f732dc60c5d1b1df84f06b7e689c1024b7164003eeeded6276c17827b428734c895604095612e38948c9460028094149081612e65575b50612e41575b5050888060a01b039101541692541683519283528783019061477b565ba1878080612d78565b60ff199182885416178755545f52600783018b52865f209081541690558e80612e1b565b905081545f528c5284885f205416155f612e15565b60ff1960068184541617835581545f5260078701885260405f20908154169055612dce565b5080545f528387528760405f20541615612dc9565b6103835760041480612ef2575b612ecc575b50612db4565b5f19810190811161034b575f52601c875260405f20600160ff198254161790558b612ec6565b505f19810181811161034b575f52601c88528860405f20541615612ec1565b905061038357600982141583612d72565b905061038357600182141583612d6c565b505f92506002821415612d65565b5093509050838080612c53565b91505060015f91141587612c46565b346102a8575f3660031901126102a8576002546040516001600160a01b039091168152602090f35b346102a85760203660031901126102a8576004355f52601c602052602060ff60405f2054166040519015158152f35b346102a8575f3660031901126102a8576020601054604051908152f35b346102a8576020806003193601126102a857612feb614682565b60ff601254166005811015610383576004811461037157600380911461035f57335f526018835260405f20545f526014835260405f209060019060018301948554801561319a575f526015815260405f2092855f146130c95750505050600a019182549260ff841693600c851015610383577f4506ecebb8afddc27b5896d964fe56a6aa511603ed4fac7fb871650473f2175d946007036130b95750805461ff0019166103001790555b54604080513381526020810192909252911515918101919091528060608101610711565b61ff001916610500179055613095565b90919593505f9060015f9401968754945b85811061316b575050505f19830192831161034b578561314061314592610df46131276014977f4506ecebb8afddc27b5896d964fe56a6aa511603ed4fac7fb871650473f2175d9b614961565b905460039190911b1c6001600160a01b03169184614961565b614a5b565b335f526018815260405f20545f5252600a60405f2001600a60ff19825416179055613095565b613175818a614961565b905490831b1c6001600160a01b03163314613192575b82016130da565b92508261318b565b60405163b4479a6360e01b8152600490fd5b346102a8575f3660031901126102a8575f546040516001600160a01b039091168152602090f35b346102a8575f3660031901126102a8576131eb615221565b6131f3615244565b60ff60125416600581101561038357600481146103715760031461035f57600e5461321d81615304565b6132268161534b565b5f52601960205260405f20600481016003815492015480831015611e435761325183613258926148d9565b8093614856565b9055600a546040516323b872dd60e01b8152336004820152306024820152604481018390529190602090839060649082905f906001600160a01b03165af190811561114b577f11f018c083eb908425163290b18ec4bff42c1ba4edf4020de879c7ae1b7ce0f3926020926132d6575b50604051908152a16001600955005b6132ec90833d851161114457611135818361472d565b50836132c7565b346102a8575f3660031901126102a8576040805161331081614711565b36903760405160035f825b60028210613362578361332d81614711565b604051905f90825b6002831061334257604084f35b81516001600160a01b031681526001929092019160209182019101613335565b82546001600160a01b03168152600192830192919091019060200161331b565b346102a8575f3660031901126102a85760ff601254166005811015610383576003811461035f576004906133b4615244565b14610371577f3b88d52dc51aa53d344c3581f44ecf26dd6a764b15cd0e86e576d816c283616360206133e7600c546148cb565b80600c55805f52601582528060405f2055604051908152a1005b346102a8575f3660031901126102a85760ff60125416600581101561038357600481146103715760031461035f57335f52601860205260405f20545f52601460205260405f20600181019081545f52601560205260405f209160018060a01b0360028301541615612703575f9055600a8101805460ff1916600517905561348a6001830161526f565b600e545f526007810160205260405f2060ff198154169055600381015f8154816134ba6004860192835490614856565b9355556006906134cf60068401918254614856565b90556004600184015410613531575b50600281015491549054604080516001600160a01b0390941684526020840192909252908201527fed11cf2f685bc5fb16110aa145d0b495f9cfdc2ed33e03b9362d4bdc3fba262d908060608101610711565b60028301805460ff191690555f5b60018401548110156135bf578061355a600192838701614961565b838060a01b0391549060031b1c165f52601860205260405f20545f52601460205260405f20600a8101600560ff198254161790556135b78460038301925f8454816135ab6004850192835490614856565b96555501918254614856565b90550161353f565b50507fed11cf2f685bc5fb16110aa145d0b495f9cfdc2ed33e03b9362d4bdc3fba262d6134de565b346102a8576020806003193601126102a8576004359067ffffffffffffffff8083116102a857366023840112156102a857826004013592602491841161384d578360051b6040519461363b8583018761472d565b85528284860191830101913683116102a8578301905b82821061382e57505050613663615244565b60ff60125416600581101561381a5760031461035f57600b5490600c8210158061380f575b156137e15760028451106137cf57929190925b5f936001928184809301809111925b6136df575b6040517f37624b43bc21d01bec4f033a1fb10552d28b406b1a68210476d53af5a7d4e68e9080610711898261463e565b85518710156137ca575f85805b61374b575b5015610b89576001600160a01b036137098888614a01565b5116968554600160401b8110156137385790613730879899610df4848a80960186556148e6565b0196956136aa565b85634e487b7160e01b5f5260416004525ffd5b84919498979596986137b757828110156137aa576001600160a01b03806137728a89614a01565b511690825f5260148652600260405f200154161461379c57969794969495949093908601866136ec565b5092508694939596886136f1565b97959496979390936136f1565b86634e487b7160e01b5f5260116004525ffd5b6136af565b6040516350a01e1d60e11b8152600490fd5b602382116137f3575b9291909261369b565b6006845110156137ea576040516350a01e1d60e11b8152600490fd5b506023821115613688565b50634e487b7160e01b5f9081526021600452fd5b81356001600160a01b03811681036102a8578152908401908401613651565b50634e487b7160e01b5f9081526041600452fd5b346102a8575f3660031901126102a857613879615221565b613881615244565b60125460ff81166005811015610383576004036128b45760115462015180810180911161034b5742106128a25760ff1916600317601255600a546040516370a0823160e01b81523060048201526001600160a01b0391909116906020908181602481865afa90811561114b575f9161397d575b50601054811061391c575b5f805160206153ba83398151915282604051428152a16001600955005b60405163a9059cbb60e01b81523360048201526024810191909152918190839060449082905f905af191821561114b575f805160206153ba83398151915292156138ff5761397690823d841161114457611135818361472d565b50826138ff565b90508181813d83116139a3575b613994818361472d565b810103126102a85751836138f4565b503d61398a565b346102a85760203660031901126102a8576004355f52601d60205261093a61092e60405f2061487b565b346102a8576020806003193601126102a8576139ee614682565b6139f6615221565b60ff601254169160058310156103835760048314610371576003831461035f57600192838114159081613dec575b506108e657600e5480613d9d575b83810180911161034b575f9081526019825260408082203383526018845281832054835260148452912060028101546001600160a01b03919082161561270357600a8101805460ff8160081c16600881101561038357600503613d8c5760ff16600c81101590816103835760098114918215613d7f575b8215613d6e575b5050613d5c5760105493601485028581046014148615171561034b576064613ad9910486614856565b8760048501928354838110613d44575b50600401613af8888254614856565b9055613d00575b60105491613b1260038601938454614856565b8093558054828110613ce4575b5083549260ff841692600c84101592836103835760028514928315613cd6575b848415613cc4575b5083613cb7575b5082613cab575b5050613c3b575b505050505081613bad575b50907fed66735ec09b73f80882349a417c96f1ac5bb6bf493441951d147d84c5ed5d8c92608092600e5460405193338552840152604083015215156060820152a1600955005b600a546040516323b872dd60e01b81523360048201523060248201526044810184905294929392918391869160649183915f91165af192831561114b577fed66735ec09b73f80882349a417c96f1ac5bb6bf493441951d147d84c5ed5d8c94608094613c1e575b5091925092613b67565b613c3490843d861161114457611135818361472d565b5086613c14565b61038357600403613c9b575b5050600e5486810180911161034b575f5260078101845260405f209060ff19918783825416179055600e549087820180921161034b576008915f520184528560405f20918254161790558580808080613b5c565b60ff191660041790558680613c47565b54101590508b80613b55565b601054111592508d613b4e565b90935061038357600685149284613b47565b5f9450600486149350613b3f565b80613cf2613cf892856148d9565b90614856565b81558a613b1f565b946006840180549082821190815f14613d3d57613d1d84846148d9565b905b5515613d2f5750505f5b94613aff565b613d38916148d9565b613d29565b5f90613d1f565b60049198613cf2613d5592866148d9565b9790613ae9565b60405163fdc7b1fb60e01b8152600490fd5b909150610383576008148880613ab0565b50600a811491505f613aa9565b604051627c247360e31b8152600490fd5b805f526019825260405f205462239880810180911161034b5742108015613dd6575b15613a32576040516337888d6760e01b8152600490fd5b50805f52601982528360405f2001544211613dbf565b60029150141584613a24565b346102a8575f3660031901126102a857604051806001916001549283825260208092019360015f527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6925f905b828210613e685761093a86613e5c818a038261472d565b6040519182918261463e565b84546001600160a01b03168752958601959383019390830190613e45565b346102a8575f3660031901126102a85760ff60125416600581101561038357600481146103715760031461035f57600e54805f526020906019825260405f205462127500810180911161034b574211801561405c575b61404a57600181118061401d575b61400b57600d613efa81546148cb565b92838255335f52601e815260405f20835f52815260405f2054155f14613ff9577fedb73a28656fc54b5b54d180d469da306262375b8fab1d30e7bfdfe6fa4d71a89361071193335f52601e835260405f20905f52825260405f20556014600e5491825f5260168152613f8560405f20855490815f52835260405f20945f526017835260405f20614976565b600e545f5260198152613fa0600260405f2001855490614976565b8354835560018301336001600160601b0360a01b825416179055335f526018815260405f20545f52526003600160405f20015491015554604051918291338360209093929193604081019460018060a01b031681520152565b604051639fbfc58960e01b8152600490fd5b6040516303a5a26f60e11b8152600490fd5b50335f526018825260405f20545f5260148252600760405f2001815f52825260ff60405f20541615613eea565b60405163709758ab60e11b8152600490fd5b50805f526019825260405f20544210613edc565b346102a8575f3660031901126102a857614088615221565b60ff60125416600581101561038357600390600381141590816141eb575b50612bbc57600b546001808201809211805b61034b5782821015610c2a57815f526020916014835260405f209185830180546140e86004860191825490614856565b916140f96005870193845490614856565b9361410a6006880195865490614856565b90600e9a808c54115f1461418c5760098c9b99939b5493019a5b8c54600219810190811161034b5784116141695761414d90845f528c8c5260405f205490614856565b92805f528b8b525f6040812055801561034b575f190192614124565b9695935f95929c5085935083919b506001999a505b5555555501909192806140b8565b60095f9c9b9c9a99939a9301995b8b5484116141d2576141ba6141cc91855f528c8c5260405f205490614856565b93805f528b8b525f60408120556148cb565b9261419a565b9695935f95929c9a5085935083919b506001995061417e565b600491501415826140a6565b346102a8575f3660031901126102a85761420f615221565b335f52601860205260405f20545f52601460205260405f20600681019081549081156142ee575f92839055600a54600291909101805460405163a9059cbb60e01b81526001600160a01b039182166004820152602481018590529490926020918691604491839187165af193841561114b577f3d97f39b86d061200a7834082f5926e58ec10fd85a9d6930f497729d5e6cc35c946142cf575b505460408051929091166001600160a01b0316825260208201929092529081908101611d89565b6142e79060203d60201161114457611135818361472d565b50846142a8565b6040516365e52d5160e11b8152600490fd5b346102a8576020806003193601126102a8576004359061431e615244565b60125460ff811660058110156103835760048114610371576003811461035f576143f757600b5491600c831080156143eb575b6143d95760015b600481106143a9577fe891dc01ac1296966aff69221063a5796adb4993741b159b043f7066e292393960208661439d8760018860ff19161760125582600f5582614838565b601055604051908152a1005b805f52601582526004600160405f200154106143c757600101614358565b6040516305a2d66760e11b8152600490fd5b60405163dd5d9ea160e01b8152600490fd5b506003600c5410614351565b6040516305c3c4b960e41b8152600490fd5b346102a85760203660031901126102a8576004355f52601a602052602060ff60405f2054166040519015158152f35b346102a85760203660031901126102a8576004355f52601360205261093a61092e60405f2061487b565b346102a8575f3660031901126102a85761447a615221565b60ff601254166005811015610383576003811461035f5760048114610371576001036145f157335f52601860205260405f20545f52601460205260405f20600a810180549060ff8216600c811015610383576001036145df5760105460148102908082046014148115171561034b5760646144f6920490614856565b600b810290808204600b149015171561034b57600c61030291049260048501614520858254614856565b905561ffff1916179055600a546040516323b872dd60e01b815233600482015230602482015260448101839052926001600160a01b0391602090859060649082905f9087165af190811561114b577fa1036ac26bc1acfe7c0581273bb656a2426fb6f32067116729c8fad15a58bfc7946002926145c0575b50015460408051929091166001600160a01b0316825260208201929092529081908101611d89565b6145d89060203d60201161114457611135818361472d565b5085614598565b60405163991c8dc760e01b8152600490fd5b604051637250f10560e01b8152600490fd5b60209060206040818301928281528551809452019301915f5b82811061462a575050505090565b83518552938101939281019260010161461c565b60209060206040818301928281528551809452019301915f5b828110614665575050505090565b83516001600160a01b031685529381019392810192600101614657565b6004359081151582036102a857565b6044359081151582036102a857565b60c0810190811067ffffffffffffffff821117611b2957604052565b610180810190811067ffffffffffffffff821117611b2957604052565b6060810190811067ffffffffffffffff821117611b2957604052565b60a0810190811067ffffffffffffffff821117611b2957604052565b6040810190811067ffffffffffffffff821117611b2957604052565b90601f8019910116810190811067ffffffffffffffff821117611b2957604052565b600435906001600160a01b03821682036102a857565b60409060031901126102a8576004359060243590565b90600c8210156103835752565b919091610180810192805182526020810151602083015260018060a01b036040820151166040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e0810151151560e0830152610100808201511515908301526101208082015190830152614810610140808301519084019061477b565b61016080910151916008831015610383570152565b8181029291811591840414171561034b57565b8115614842570490565b634e487b7160e01b5f52601260045260245ffd5b9190820180921161034b57565b908160209103126102a8575180151581036102a85790565b90604051918281549182825260209260208301915f5260205f20935f905b8282106148b1575050506148af9250038361472d565b565b855484526001958601958895509381019390910190614899565b5f19811461034b5760010190565b9190820391821161034b57565b60015481101561491b5760015f527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf601905f90565b634e487b7160e01b5f52603260045260245ffd5b6001541561491b5760015f527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6905f90565b805482101561491b575f5260205f2001905f90565b8054600160401b811015611b295761499391600182018155614961565b819291549060031b91821b915f19901b1916179055565b90604051918281549182825260209260208301915f5260205f20935f905b8282106149de575050506148af9250038361472d565b85546001600160a01b0316845260019586019588955093810193909101906149c8565b805182101561491b5760209160051b010190565b6001548015614a47575f1901614a42614a2d826148e6565b81549060018060a01b039060031b1b19169055565b600155565b634e487b7160e01b5f52603160045260245ffd5b80548015614a47575f190190614a74614a2d8383614961565b55565b60405190614a84826146bc565b5f610160838281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201520152565b600c8210156103835752565b60088210156103835752565b90600e54805f52601960205260405f205462151800810180911161034b57421080156151fe575b6151ec57805f1981011161034b575f1981015f52601660205260405f20335f52601e60205260405f205f1983015f5260205260405f20545f5260205260405f209260018060a01b03600185015416908133036151da5760048501805460ff8116156151c85760ff8160081c166151b657835f52601860205260405f20545f52601460205260ff600a60405f20015416600c811015610383576004036108765761ff00191661010017905561516557505f1981015f526017602052614bd460405f2061487b565b5f915f5b8251811015614c2c575f1982015f52601660205260405f20614bfa8285614a01565b515f5260205260ff600460405f20015416614c18575b600101614bd8565b92614c246001916148cb565b939050614c10565b50614c4a9291505f19015f526019602052600360405f200154614838565b915f8093600193600b54945b60018601861161034b5760018601811015614cab57805f52601460205260ff600a60405f20015416600c81101561038357600414614c97575b600101614c56565b95614ca36001916148cb565b969050614c8f565b509091929350606093600e545f52601a60205260ff60405f20541661513f575b614cd58684614838565b925f9660015b600b5460018101811161034b57600101811015614d7557805f52601460205260405f2060ff600a82015416600c81101561038357600414614d20575b50600101614cdb565b6003018054919791878110614d50575b600192614d4992614d428a80946148d9565b9055614856565b9690614d17565b600192614d68614d49939c613cf284614d429c6148d9565b9b82995092509250614d30565b509094939195969296805180614f23575b5050848410614e5a575050505060028201819055600a54600183015460405163a9059cbb60e01b81526001600160a01b039182166004820152602481018490529391602091859116815f81604481015b03925af192831561114b577f1d3e1b711499f6260ce9c1c1eeabe0f46dfc60b81542d0021ecef0716d0ed1cb93614e3b575b5060018101549054604080516001600160a01b03909316835260208301939093529181019190915280606081015b0390a1565b614e539060203d60201161114457611135818361472d565b505f614e08565b6402540be400614e6a85876148d9565b1015614ebc5750505060028301819055600a54600184015460405163a9059cbb60e01b81526001600160a01b0391821660048201526024810193909352919391602091859116815f8160448101614dd6565b7fd2c92d0f1dd9e4ffc64744c794d5c6f0c58306865dcb816a20cf0db5c300d97e955060a094600360ff1960125416176012556040519485526020850152604084015260608301526080820152a15f805160206153ba8339815191526020604051428152a1565b5f989498979391959692975088155f146151255750969591959492945b875f935b865185101561511557614f578588614a01565b515f52601460205260018060a01b03600260405f200154165f52601b60205260405f20545f526015602052614f91600160405f20016149aa565b965f985f9a5f5b8a5181101561505c576001600160a01b03614fb3828d614a01565b51165f52601860205260405f20545f52601460205260405f2060ff600a82015416600c81101561038357600414614fee575b50600101614f98565b909b9c614ffa906148cb565b9c801580158061504f575b1561501b575050600460019101549b5b90614fe5565b9c91909c61502d575b50600190615015565b6004919c5001548060011b908082046002149015171561034b579a6001615024565b5060048301548211615005565b5092959194999093979b969a6150729088614838565b908082101561510d5750985b5f5b89518110156150f4576001600160a01b0361509b828c614a01565b51165f52601860205260405f20545f52601460205260405f2060ff600a82015416600c811015610383576004146150d6575b50600101615080565b8b6001929e60046150ed9301614d428382546148d9565b9c906150cd565b50959a9199929850929650946001909101939192614f44565b90509861507e565b9296985092509293505f80614d86565b90613cf2615133928a614838565b96959195949294614f40565b949350601d60205261515f61515660405f2061487b565b94855190614856565b94614ccb565b5f60028501559254604080516001600160a01b039095168552602085019190915291927f2f6a2242608827783b40fb797960e2d61ea6e692e9c61049f223ec66f18bbc429290915081908101614e36565b604051630c8d9eab60e31b8152600490fd5b604051636a9a57a560e01b8152600490fd5b604051634a7777b360e11b8152600490fd5b60405163215eb65f60e21b8152600490fd5b50805f52601960205260405f205462224700810180911161034b57421015614b0e565b600260095414615232576002600955565b604051633ee5aeb560e01b8152600490fd5b5f546001600160a01b0316330361525757565b6040516306b66d0160e01b8152336004820152602490fd5b905f905f5b83548110156152b0576152878185614961565b90543360039290921b1c6001600160a01b0316146152a8575b600101615274565b9150816152a0565b509180545f19810190811161034b576148af926152dd6152d36131409385614961565b9190549285614961565b81546001600160a01b03600392831b81811b199092169490921b9490941c1690921b179055565b5f52601960205260405f2054804210908115615334575b5061532257565b6040516307f1ee4960e31b8152600490fd5b90506203f480810180911161034b5742115f61531b565b5f526019602052600260405f2001541561536157565b60405163a8de391160e01b8152600490fd5b5f80546001600160a01b039283166001600160a01b03198216811783559216907f688b8f34d886f8a2414b39aa6cef1ec6198215ba9b47fe8ac4260b44139bd5b69080a356fe7a406291d7dedc33dcf93635d6443b37b6f30b4d33a6b86f5e2427e9d96f7c22a2646970667358221220b336b87084de7c21a03af77acf1a19da3d91ad19bff6188cd3c365f31d9bd41d64736f6c63430008170033",
    sourceMap:
      "274:69880:3:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;274:69880:3;;;;;1882:26:4;274:69880:3;;;;;;;;;;;;;;;;;-1:-1:-1;;274:69880:3;;;;920:70:4;;:::i;:::-;274:69880:3;4638:15;274:69880;;;;;;;;;4638:44;;4634:95;;5083:25;5064:44;5060:104;;38218:8;274:69880;;;;38197:20;274:69880;;;;;;38197:40;274:69880;;38253:6;274:69880;;;;;;;;;38197:20;274:69880;;;;;;38142:40;274:69880;38218:8;274:69880;;;38275:60;274:69880;;;;;38294:40;274:69880;;;;;;38275:60;274:69880;;;;;;;;;;;;;5060:104;274:69880;;-1:-1:-1;;;5131:22:3;;274:69880;;5131:22;4634:95;274:69880;;-1:-1:-1;;;4705:13:3;;274:69880;;4705:13;274:69880;;;;;;;;;;;;;;;;;;-1:-1:-1;;274:69880:3;;;;4638:15;274:69880;;;;;;;;;;;;;;;4638:44;;4634:95;;5083:25;5064:44;5060:104;;274:69880;47976:3;47962:8;274:69880;;;;;;;;;47958:16;;;;;274:69880;;;;;48022:20;274:69880;;;;;48080:12;;;;274:69880;;;;;;;;;;;;;;48080:39;;;:91;;;47976:3;48080:148;;;;47976:3;48080:237;;;47976:3;48059:1617;;;47976:3;;;;;274:69880;47976:3;;274:69880;47943:13;;48059:1617;48354:19;;;;;48374:8;;274:69880;;;;;;;;;;;;;;;;48350:406;274:69880;;;-1:-1:-1;;274:69880:3;;-1:-1:-1;;274:69880:3;;;;;-1:-1:-1;48350:406:3;274:69880;;;;;;;;;;;48902:42;:96;;;48350:406;48877:296;;48350:406;274:69880;;;;;;;;;;;;49235:25;49614:47;49235:25;274:69880;49235:25;274:69880;49235:25;;;;49216:44;;;:205;;;;48350:406;49191:400;;;48350:406;274:69880;;;;;;;49634:12;;274:69880;;;;;;;;;;;;;;;:::i;:::-;49614:47;48059:1617;;;;;;49191:400;274:69880;;;;;;;;;;;;;49521:33;;;274:69880;;;;;;;;;;;49191:400;;;;49216:205;274:69880;;;;;;;;;;;;;;49391:30;49216:205;;;48877:296;274:69880;;49054:27;274:69880;;;;;;;;;;;49103:33;;;274:69880;;;;;;;;;;;48877:296;;48902:96;274:69880;;;;;;;;;;;;;;48968:30;48902:96;;48350:406;274:69880;;;48516:34;:103;;;48350:406;48487:251;;48350:406;;;;48487:251;-1:-1:-1;;274:69880:3;;;;;;;;;48668:26;274:69880;;;;;;;;;;;;;;48487:251;;;48516:103;-1:-1:-1;;;274:69880:3;;;;;;;;;48579:26;274:69880;;;;;;;;48578:41;48516:103;;48080:237;274:69880;;;;48296:21;48280:37;;;48080:237;;;:148;274:69880;;;;;48191:37;;;48080:148;;;:91;-1:-1:-1;274:69880:3;;-1:-1:-1;48155:16:3;48139:32;;;48080:91;;47958:16;274:69880;;;;;;;-1:-1:-1;;274:69880:3;;;;;64592:7;274:69880;;;;;;;;;;;;;-1:-1:-1;;274:69880:3;;;;;;:::i;:::-;;5064:15;274:69880;;;;;;;;5083:25;5064:44;;5060:104;;920:70:4;;:::i;:::-;274:69880:3;4638:44;;4634:95;;5827:49;;;:107;;;;274:69880;5810:182;;;-1:-1:-1;;;;;274:69880:3;;;;;;6055:16;274:69880;;;;;;;;;6051:82;;6349:12;6462:35;274:69880;6143:10;;274:69880;6143:10;:::i;:::-;;274:69880;;;;;;;6190:20;274:69880;;;;;;;;;;;;;;6055:16;274:69880;;;;;;;;;;6317:12;;;274:69880;;-1:-1:-1;;;;;;274:69880:3;;;;;;;6349:12;;;;274:69880;;-1:-1:-1;;274:69880:3;;;;;;;;;-1:-1:-1;;;;;274:69880:3;;;;;;;;;;;;;6462:35;;;;274:69880;6051:82;274:69880;;-1:-1:-1;;;6108:14:3;;274:69880;;6108:14;5810:182;274:69880;;-1:-1:-1;;;5966:15:3;;274:69880;;5966:15;5827:107;274:69880;5892:42;;;;5827:107;;;274:69880;;;;;;;;;;;;;;;920:70:4;;;:::i;:::-;274:69880:3;4638:15;274:69880;;;;;;;;;4638:44;;4634:95;;5083:25;5064:44;;5060:104;;274:69880;16470:42;;;:102;;;;274:69880;16453:177;;;16687:8;274:69880;;;;;16666:20;274:69880;;;;;;16869:7;274:69880;;;;;;;16828:15;:49;:90;;;;;274:69880;16811:170;;;274:69880;;;17162:28;274:69880;;;;;;;;;;;;;;;17220:16;;;;17216:68;;274:69880;17389:14;;274:69880;-1:-1:-1;;;;;274:69880:3;;;;;17372:16;274:69880;;;;;;;;;17351:20;274:69880;;;;17351:61;;274:69880;;;;;;;;;;;;;17351:95;;;;:221;;;274:69880;17334:305;;;;17781:22;17680:18;274:69880;17715:50;17680:18;;274:69880;;;;;;;;;16687:8;274:69880;;;17715:25;274:69880;;;;;17715:50;:::i;:::-;274:69880;;;;;17781:22;274:69880;17334:305;274:69880;;-1:-1:-1;;;17604:24:3;;274:69880;;17604:24;17351:221;274:69880;;;;;17372:16;274:69880;;;;;;;;17351:20;274:69880;;17463:99;274:69880;;;17463:99;274:69880;;;;;;;;;;;17462:110;17351:221;;;;17216:68;274:69880;;-1:-1:-1;;;17259:14:3;;274:69880;;17259:14;16811:170;274:69880;;-1:-1:-1;;;16950:20:3;;274:69880;;16950:20;16828:90;:15;;;16893:25;16828:90;;;16453:177;274:69880;;-1:-1:-1;;;16604:15:3;;274:69880;;16604:15;16470:102;16547:25;16528:44;;;;16470:102;;;274:69880;;;;;;-1:-1:-1;;274:69880:3;;;;;;;;66547:18;274:69880;;;;;;;;:::i;:::-;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;69849:20;274:69880;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;274:69880:3;;;;-1:-1:-1;;;;;274:69880:3;;:::i;:::-;;;;67318:16;274:69880;;;;;;;;;;;;;;;;;;;-1:-1:-1;;274:69880:3;;;;;1764:17:4;274:69880:3;;;;;;;;;;;;;-1:-1:-1;;274:69880:3;;;;;;;;:::i;:::-;;4638:15;274:69880;;;;;;;;;;4638:44;;4634:95;;5083:25;;5064:44;;5060:104;;274:69880;;;13206:24;274:69880;;;;;;;;;;13273:20;274:69880;;;;;13353:12;;;274:69880;;;;;;;;;;;;;13369:20;13353:36;13349:86;;274:69880;13522:13;274:69880;;;;13541:13;;274:69880;;13517:178;13537:24;;;;;;13517:178;13708:5;;;;;;13704:56;;14077:64;;274:69880;;13835:227;;;;-1:-1:-1;274:69880:3;;-1:-1:-1;;274:69880:3;;;;;13835:227;14099:12;;274:69880;;;;-1:-1:-1;;;;;274:69880:3;;;;;13586:10;274:69880;;;;;;;;;;;;;;;;14077:64;274:69880;13835:227;-1:-1:-1;;274:69880:3;;;;;13835:227;;13704:56;274:69880;;-1:-1:-1;;;13736:13:3;;274:69880;;13736:13;13563:3;13600:16;;;;:::i;:::-;274:69880;;13586:10;274:69880;;;;-1:-1:-1;;;;;274:69880:3;13586:30;13582:103;;13563:3;274:69880;13522:13;;13582:103;13636:11;;;;;;13665:5;;;;;;;13349:86;274:69880;;-1:-1:-1;;;13412:12:3;;274:69880;;13412:12;274:69880;;;;;;-1:-1:-1;;274:69880:3;;;;;;:::i;:::-;2466:103:2;;:::i;:::-;274:69880:3;4638:15;274:69880;;;;;;;;;4638:44;;4634:95;;5083:25;5064:44;5060:104;;5173:1;;;:::i;:::-;274:69880;3068:21:2;274:69880:3;;;;;;;;-1:-1:-1;;274:69880:3;;;;64099:12;274:69880;;;-1:-1:-1;;;;;274:69880:3;;;;;;;;;;;;;;-1:-1:-1;;274:69880:3;;;;;;:::i;:::-;-1:-1:-1;;;;;274:69880:3;;;;;4501:18;;4497:77;;274:69880;5064:15;274:69880;;;;;;;;5083:25;5064:44;;;5060:104;;274:69880;30961:10;274:69880;;30944:16;274:69880;;;;;;30999:10;;;:94;;;;274:69880;30982:158;;;274:69880;31153:5;31149:56;;274:69880;31308:13;274:69880;;;;;;;31303:170;31323:30;;;;;;31486:7;;;;31482:65;;274:69880;;;;31621:38;;;:92;;31303:170;31621:150;;;31303:170;31604:222;;31839:38;;;274:69880;;;-1:-1:-1;;;;;;274:69880:3;-1:-1:-1;;;;;274:69880:3;;;;;;;;;31974:15;31945:44;274:69880;32036:8;274:69880;32003:41;274:69880;31835:987;274:69880;;;;32928:38;;;;:92;;;31835:987;32911:908;;31835:987;33834:39;274:69880;;;;;;;33834:39;274:69880;32911:908;274:69880;33045:13;;;274:69880;;;;33076:52;33072:472;274:69880;;;33167:24;274:69880;;;;33167:24;:::i;:::-;274:69880;;;;;;;33231:30;;;;;;33072:472;;;;-1:-1:-1;;;;;274:69880:3;;;;;;;;;;;;;;;;;;;;;;;;33659:26;274:69880;33688:81;33659:110;33688:81;;33834:39;33688:81;;:::i;:::-;274:69880;;;;;;33659:26;;:::i;:::-;:110;274:69880;;;;;;;;;;;;;;;;;;;;;;;;;33659:110;33783:23;;:::i;:::-;32911:908;;;;;33263:3;33294:22;;;;;:::i;:::-;274:69880;;;;;;;33294:50;33290:114;;33263:3;;274:69880;33216:13;;33290:114;33372:9;-1:-1:-1;33372:9:3;33290:114;;33072:472;33479:22;;;;;;:::i;:::-;274:69880;;;;;;;33479:22;:::i;:::-;274:69880;33072:472;;;32928:92;274:69880;;;;;32982:38;;32928:92;;31835:987;32130:26;274:69880;32160:6;274:69880;;;;;;;32096:15;;:71;:133;;;31835:987;32075:737;;;-1:-1:-1;;274:69880:3;;;-1:-1:-1;;;;;;274:69880:3;;;;;31835:987;;32075:737;32096:15;32364:75;:141;;;32075:737;32339:459;;;274:69880;;;-1:-1:-1;;;;;;274:69880:3;-1:-1:-1;;;;;274:69880:3;;;;;;;;;32096:15;32130:26;274:69880;32705:8;274:69880;32672:41;274:69880;31835:987;;32339:459;274:69880;;-1:-1:-1;;;32767:12:3;;274:69880;;32767:12;32364:141;274:69880;32463:30;274:69880;32497:8;274:69880;32463:42;;32364:141;;32096:133;274:69880;32187:30;274:69880;32221:8;274:69880;32187:42;32096:133;;31621:150;274:69880;31729:30;274:69880;31763:8;274:69880;31729:42;31621:150;;:92;274:69880;;;;;31675:38;31621:92;;31482:65;274:69880;;-1:-1:-1;;;31516:20:3;;274:69880;;31516:20;31355:3;31393:22;;;;:::i;:::-;274:69880;;;;;;;31378:37;;31374:89;;31355:3;274:69880;31308:13;;;;31374:89;31435:13;;;31374:89;;;30982:158;31118:11;274:69880;30982:158;;30999:94;274:69880;;;;31025:20;274:69880;;;31025:34;274:69880;;;31025:34;274:69880;;;;;;;;;31025:68;30999:94;;;4497:77;274:69880;;-1:-1:-1;;;4542:21:3;;274:69880;;4542:21;274:69880;;;;;;-1:-1:-1;;274:69880:3;;;;;64899:13;274:69880;;;;;;;;;;;;;-1:-1:-1;;274:69880:3;;;;;;:::i;:::-;2466:103:2;;:::i;:::-;274:69880:3;4638:15;274:69880;;;;;;;;;4638:44;;4634:95;;5083:25;5064:44;5060:104;;59254:8;274:69880;;;;59233:20;274:69880;;;;;;59277:6;274:69880;;;;;;;59203:15;:81;:178;;;;274:69880;59186:255;;-1:-1:-1;;274:69880:3;;;;;;;;;59454:25;274:69880;;;;;;59450:102;;61304:8;274:69880;;61357:3;274:69880;;;;;;;;;;61342:13;;;;;274:69880;;;61403:20;274:69880;;;;;61444:25;274:69880;61444:25;;274:69880;;61444:29;;61440:250;;61357:3;274:69880;;59254:8;274:69880;;61814:12;;:83;;;61357:3;61814:126;;;61357:3;61793:741;;61357:3;274:69880;59254:8;274:69880;5083:25;62601:12;;62597:322;;61357:3;62988:48;;;;;61357:3;62984:239;;61357:3;274:69880;61357:3;;274:69880;61327:13;;62984:239;63074:25;;;274:69880;;;;;;;63164:12;274:69880;63186:12;;;;274:69880;;;-1:-1:-1;;;63164:44:3;;-1:-1:-1;;;;;274:69880:3;;;;63164:44;;274:69880;;;;;;;;;;;;;;;;;;;;63164:44;;;;;;;274:69880;63164:44;;;62984:239;;;;63164:44;;;274:69880;63164:44;274:69880;63164:44;;;;;;;;:::i;:::-;;;;;:::i;:::-;;;;;;;;;;;274:69880;;;;;;;;;62988:48;63007:25;;;;274:69880;63007:29;;62988:48;;62597:322;274:69880;;;;;;;;;;;;;62637:26;;;274:69880;;;;;;62637:44;62633:272;62597:322;62633:272;62705:115;:25;;;274:69880;;;62705:115;:::i;:::-;274:69880;;59254:8;274:69880;;;;;;;;;;;;;;62637:26;;;274:69880;;;;;;;62633:272;62597:322;;61793:741;274:69880;4638:15;274:69880;;;;;;;;62017:25;61998:44;:119;;;;61793:741;-1:-1:-1;61973:547:3;;;5083:25;62178:19;;274:69880;;;;;59254:8;274:69880;;;;;;;;;;;;;;62264:26;;;274:69880;;;;;;61973:547;61793:741;;;61973:547;5083:25;62380:19;;274:69880;;;;;62466:25;;;274:69880;61973:547;;61998:119;-1:-1:-1;;274:69880:3;;;-1:-1:-1;274:69880:3;;;;;;59454:25;274:69880;;;;;;62066:51;61998:119;;;61814:126;61917:19;5083:25;61917:19;;274:69880;61917:23;;61814:126;;:83;274:69880;;;;;;;;;;;;;;;59454:25;274:69880;;;;;;61846:51;61814:83;;61440:250;274:69880;;;61640:25;;;274:69880;61440:250;;;;61342:13;63248:14;274:69880;63248:14;;274:69880;3068:21:2;274:69880:3;;59450:102;274:69880;;-1:-1:-1;;;59527:14:3;;274:69880;;59527:14;59186:255;274:69880;;-1:-1:-1;;;59413:17:3;;274:69880;;59413:17;59203:178;274:69880;;;;59233:20;274:69880;;;;;;59374:6;274:69880;;;;;;;59203:15;59300:81;59203:178;;274:69880;;;;;;-1:-1:-1;;274:69880:3;;;;920:70:4;;:::i;:::-;4638:15:3;274:69880;;;;;;;;;;;;4638:44;;4634:95;;5083:25;5064:44;;5060:104;;274:69880;44290:42;274:69880;44290:42;;;:102;;;274:69880;44273:177;;44476:8;274:69880;44476:12;;;:86;;;274:69880;44459:166;;44635:10;;;:::i;:::-;274:69880;;44476:8;274:69880;;;44737:25;44718:44;44714:527;;274:69880;;;;45341:20;274:69880;;;;;45399:15;274:69880;;45429:13;274:69880;45425:2062;;274:69880;47534:7;45399:15;274:69880;45399:15;;274:69880;;;47497:15;5083:25;47497:15;274:69880;47598:57;47497:15;;274:69880;45429:13;274:69880;47552:14;;;;274:69880;44476:8;274:69880;47598:57;47643:11;274:69880;;;47598:57;;;;274:69880;;;;;;;;;;;;;;;;;;45425:2062;274:69880;4638:15;274:69880;;;;;;;;;4638:44;;4634:95;;5083:25;5064:44;5060:104;;274:69880;47976:3;47962:8;274:69880;;;;;;;;;47958:16;;;;;274:69880;;;48022:20;274:69880;;;;;48080:12;274:69880;48080:12;;;274:69880;;;;;;;;;;48080:39;;;:91;;;47976:3;48080:148;;;;47976:3;48080:237;;;47976:3;48059:1617;;;47976:3;;;274:69880;47976:3;;274:69880;47943:13;;48059:1617;44476:8;274:69880;;;;;48354:19;;;274:69880;;;;;;;;48350:406;274:69880;;;-1:-1:-1;;;48080:12:3;;;274:69880;;-1:-1:-1;;274:69880:3;;;;;48350:406;274:69880;4638:15;274:69880;;;;;;;;;48902:42;:96;;;48350:406;48877:296;;48350:406;274:69880;4638:15;274:69880;;;;;;;;;;49614:47;49216:44;44737:25;274:69880;49216:44;;:205;;;48350:406;49191:400;;48350:406;274:69880;;48080:12;274:69880;;;;;44737:25;49634:12;;274:69880;;48080:12;;274:69880;;;;;;;;;;;;:::i;:::-;49614:47;48059:1617;;;;49191:400;274:69880;;48354:19;48080:12;;;;274:69880;;;48080:12;;;274:69880;44476:8;274:69880;;;49521:33;;;274:69880;;;;;;;;;;;49191:400;;49216:205;274:69880;44476:8;274:69880;;;48354:19;;;274:69880;;;;;;;;49391:30;49216:205;;48877:296;274:69880;;49054:27;48080:12;;;;274:69880;;;48080:12;;;274:69880;44476:8;274:69880;;;49103:33;;;274:69880;;;;;;;;;;;48877:296;;48902:96;274:69880;44476:8;274:69880;;;48354:19;;;274:69880;;;;;;;;48968:30;48902:96;;48350:406;274:69880;;;48516:34;:103;;;48350:406;48487:251;;48350:406;;;;48487:251;-1:-1:-1;;274:69880:3;;;;;;;;;48668:26;274:69880;;;;;;;;;;;;;;48487:251;;;48516:103;-1:-1:-1;;;274:69880:3;;;;;;;;;48579:26;274:69880;;;;;;;;48578:41;48516:103;;48080:237;274:69880;;;;48296:21;48280:37;;;48080:237;;;:148;274:69880;;;;;48191:37;;;48080:148;;;:91;-1:-1:-1;274:69880:3;;-1:-1:-1;44737:25:3;48139:32;;;48080:91;;47958:16;;274:69880;45537:3;274:69880;;;;;;;;;;;45517:18;;;;;274:69880;;;45589:24;274:69880;;;;;;45731:13;274:69880;;;45731:24;;:52;;;;45537:3;45727:976;;;45537:3;;;274:69880;;45502:13;;45727:976;45894:13;;274:69880;45935:3;274:69880;;45909:24;;;;;46060:16;;;;:::i;:::-;274:69880;;;;;;;;5083:25;274:69880;;;;;46043:16;274:69880;;;;;;;;48022:20;274:69880;;;;;46239:12;48080;46239;;274:69880;;;;;;;;;;;;;;;;46239:34;;46235:428;;45935:3;;;;274:69880;45894:13;;46235:428;48354:19;274:69880;;;;;;;46601:25;5083;46390:19;;274:69880;;;;46444:20;46390:74;274:69880;46444:20;;274:69880;;;46390:74;;:::i;:::-;274:69880;;;46601:25;274:69880;46235:428;;;;;45909:24;;;;;274:69880;45727:976;;;45731:52;45759:24;;;;45731:52;;;45517:18;;;274:69880;46949:13;274:69880;;47962:8;274:69880;;;;;;;46944:183;;46982:3;274:69880;;46964:16;;;;;;274:69880;;;48022:20;274:69880;;;48080:12;274:69880;;;47009:30;274:69880;;;;;;;;;47009:52;47005:108;;46982:3;274:69880;;46949:13;;;47005:108;47085:9;;274:69880;47085:9;;:::i;:::-;47005:108;;;;;46964:16;;;;;;274:69880;44476:8;274:69880;47145:12;47141:336;;46944:183;45425:2062;;;47141:336;47181:12;;;274:69880;5083:25;274:69880;;4638:15;274:69880;;;4638:15;274:69880;-1:-1:-1;;;;;;;;;;;274:69880:3;;;45399:15;274:69880;;47287:35;47177:269;47141:336;;;47177:269;47404:23;274:69880;45429:13;274:69880;47404:23;:::i;:::-;47390:37;274:69880;47177:269;;44714:527;-1:-1:-1;;274:69880:3;;;;;;;;;;;44800:25;274:69880;;;;;;;;44799:40;:100;;;;44714:527;44799:160;;;44714:527;44799:221;;;44714:527;44799:282;;;;44714:527;44799:343;;;44714:527;44778:453;;44714:527;44778:453;-1:-1:-1;;274:69880:3;;;4638:15;274:69880;44778:453;44714:527;;44799:343;-1:-1:-1;;274:69880:3;;;-1:-1:-1;274:69880:3;;;;;45102:26;274:69880;;;;;;;;;;45101:41;44799:343;;;:282;274:69880;-1:-1:-1;;;274:69880:3;;;;;;;;;45041:26;274:69880;;;;;;;;45040:41;44799:282;;;:221;274:69880;;;;;44980:26;274:69880;;;;;;;;44979:41;44799:221;;;;:160;274:69880;-1:-1:-1;;;274:69880:3;;;;;;;;;44800:25;274:69880;;;;;;;;44919:40;44799:160;;;:100;274:69880;-1:-1:-1;;;274:69880:3;;;;;;;;;44800:25;274:69880;;;;;;;;44859:40;44799:100;;;44459:166;274:69880;;-1:-1:-1;;;44594:20:3;;274:69880;;44594:20;44476:86;274:69880;;;;44522:20;274:69880;;;;;;44522:40;274:69880;44504:15;:58;44476:86;;44290:102;-1:-1:-1;274:69880:3;;-1:-1:-1;44367:25:3;44348:44;;;44290:102;;274:69880;;;;;;-1:-1:-1;;274:69880:3;;;;;;1524:13:4;274:69880:3;;;;;;;;;;;;;;;;-1:-1:-1;;274:69880:3;;;;;;:::i;:::-;;;;;:::i;:::-;;;5064:15;274:69880;;;;;;;;5083:25;5064:44;;5060:104;;274:69880;920:70:4;;;:::i;:::-;4638:44:3;4634:95;;274:69880;;;7391:24;274:69880;;;;;;;;;;;;;;;;;7492:16;274:69880;;;;;;;;7458:20;274:69880;;;;;;;;7582:13;7578:68;;7660:12;;;274:69880;;7660:26;;;7656:79;;274:69880;7779:13;;274:69880;;;;-1:-1:-1;;;274:69880:3;;;;;;;;;;;;;;;:::i;:::-;7892:452;;;;7965:12;;;274:69880;;;;;;;;;;;;;;7965:41;7961:103;;274:69880;;7660:12;274:69880;8826:46;274:69880;8172:20;8826:46;274:69880;;;;;;;7892:452;8511:23;274:69880;;;8555:25;;;:54;;;;7892:452;-1:-1:-1;8551:260:3;;;8630:13;274:69880;;;;;8629:14;8625:73;;8551:260;;;;274:69880;;;-1:-1:-1;;;;;274:69880:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8625:73;-1:-1:-1;;274:69880:3;;;;;8625:73;;;;8551:260;8732:13;274:69880;;;;;8728:73;;8551:260;;;;;8728:73;-1:-1:-1;;274:69880:3;;;8728:73;;;;8555:54;8608:1;8584:25;;;;8555:54;;;7961:103;274:69880;;-1:-1:-1;;;8033:16:3;;274:69880;;8033:16;7892:452;8826:46;8282:16;8826:46;8282:16;;274:69880;8282:16;;7660:12;8282:16;;274:69880;;;;;;;;;7892:452;;274:69880;;;;;;;;;;;;7656:79;274:69880;;-1:-1:-1;;;7709:15:3;;274:69880;;7709:15;7578:68;274:69880;;-1:-1:-1;;;7618:17:3;;274:69880;;7618:17;274:69880;;;;;;-1:-1:-1;;274:69880:3;;;;2466:103:2;;:::i;:::-;920:70:4;;:::i;:::-;274:69880:3;;4638:15;274:69880;;;;;;;;;4638:44;;4634:95;;5083:25;5064:44;5060:104;;35962:8;274:69880;36002:3;;;:::i;:::-;36037;;;:::i;:::-;274:69880;;;36079:20;274:69880;;;;;5083:25;274:69880;36123:15;;274:69880;36142:14;;274:69880;36123:33;;;;;36119:91;;36297:32;;;:::i;:::-;274:69880;36339:19;274:69880;36411:8;274:69880;36434:13;274:69880;;;;;;;36429:528;;36465:3;274:69880;;36449:14;;;;;;274:69880;;;36511:20;274:69880;;;;;36552:12;;;;;274:69880;;;;;;;;;;36552:34;;;36548:399;;36465:3;;274:69880;;36434:13;;;36548:399;36606:13;;274:69880;36606:13;;:::i;:::-;36641:20;;274:69880;36641:24;36637:296;36548:399;36637:296;36693:13;;;;;;:48;;;36637:296;36689:226;;;36769:31;;274:69880;36769:31;36689:226;;36637:296;36548:399;;36689:226;36829:86;;;;;;36689:226;274:69880;36689:226;;;36829:86;36874:18;;-1:-1:-1;36874:18:3;;36829:86;;36693:48;36710:31;;;;36693:48;;36449:14;;;;;;;37042:21;;;;;:::i;:::-;:32;:91;;;37089:21;;;;;:::i;:::-;37042:91;;274:69880;;;37182:13;37213:3;274:69880;;37197:14;;;;;;274:69880;;;36511:20;274:69880;;;;;37300:12;;36552;37300;;274:69880;;;;;;;;;;;37300:34;;37296:183;;37213:3;;274:69880;37182:13;;;37296:183;274:69880;37358:20;274:69880;;37358:32;;;;;37354:111;;37296:183;;;;;37354:111;37414:32;;;:::i;:::-;274:69880;;37354:111;;;;;37197:14;;;;;;35962:8;274:69880;;;36079:20;274:69880;;;;;;37499:40;:51;274:69880;;;37499:51;:::i;:::-;274:69880;;37564:22;;;;;:::i;:::-;:32;37560:273;;37177:312;274:69880;;37848:52;;274:69880;;;37848:52;;;;274:69880;;;;;;;;;;;;;;;;;;37848:52;;;;274:69880;3068:21:2;274:69880:3;;37560:273;37643:34;37654:22;;;;;;;:::i;:::-;37643:34;;:::i;:::-;36552:12;274:69880;;;-1:-1:-1;;;37691:131:3;;37734:10;274:69880;37691:131;;274:69880;37770:4;274:69880;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;;274:69880:3;37691:131;;;;;;;37848:52;37691:131;37848:52;37691:131;;;37560:273;;;;;;37691:131;;;;;;-1:-1:-1;37691:131:3;;;;;;:::i;:::-;;;;;;37042:91;;;;36119;274:69880;;-1:-1:-1;;;36179:20:3;;274:69880;;36179:20;274:69880;;;;;;-1:-1:-1;;274:69880:3;;;;;;:::i;:::-;920:70:4;;:::i;:::-;274:69880:3;5064:15;274:69880;;;;;;;;;5083:25;;5064:44;;5060:104;;-1:-1:-1;;;;;274:69880:3;;;;;28061:382;;274:69880;28583:45;274:69880;;;-1:-1:-1;;;;;274:69880:3;;28453:39;274:69880;;;28453:39;274:69880;28522:15;28502:35;274:69880;;;;;;;;;;;;;;;28583:45;274:69880;28061:382;274:69880;28142:13;274:69880;;;;;;28137:219;28157:30;;;;;;28137:219;28373:5;;;;;;28369:64;;28061:382;;;;28189:3;28239:22;;;;:::i;:::-;274:69880;;;;;;;28216:45;;28212:130;;28189:3;274:69880;28142:13;;28212:130;28285:11;;;;;;28318:5;;;;;;;274:69880;;;;;;-1:-1:-1;;274:69880:3;;;;;1642:30:4;274:69880:3;;;;;;;;;;;;;68893:451;274:69880;;;;:::i;:::-;;;;:::i;:::-;;;;68749:20;274:69880;;;;;68826:27;:9;;:27;:9;;;274:69880;68838:8;274:69880;68826:27;;274:69880;;68949:23;;;;274:69880;;;;;;;68986:12;;;274:69880;;69012:19;;;;274:69880;;69045:20;;274:69880;69079:25;;;274:69880;69118:25;;;;274:69880;;;;69157:33;;;274:69880;;;;;;;;69209:19;;;;274:69880;;;;;;;;69247:26;;;;274:69880;;69292:12;274:69880;;;;69292:12;;274:69880;;;;;;;:::i;:::-;;;;68893:451;;274:69880;;68893:451;;274:69880;68893:451;;;274:69880;68893:451;;;274:69880;68893:451;;;274:69880;68893:451;;;274:69880;;;;68893:451;;274:69880;;;68893:451;;;274:69880;68893:451;;;274:69880;68893:451;274:69880;;;68893:451;;;;:::i;:::-;69209:19;274:69880;;68893:451;;;;:::i;:::-;274:69880;;;;;;;:::i;68826:27::-;;;;274:69880;;;;;;-1:-1:-1;;274:69880:3;;;;;5064:15;274:69880;;;;;;;;5083:25;5064:44;;;5060:104;;274:69880;;;;;28903:14;28899:68;;274:69880;29055:13;274:69880;;;;;;;29050:167;29070:30;;;;;;29230:5;;;;29226:56;;-1:-1:-1;;274:69880:3;;;29442:17;274:69880;-1:-1:-1;;;;;274:69880:3;;;;29125:10;29428:31;;;;29125:10;29494;29125;29494;:::i;:::-;274:69880;29551:13;274:69880;;;;29546:181;29566:30;;;;;;-1:-1:-1;;;;274:69880:3;;;;;;;29740:110;29769:81;;29740:26;29769:81;;:::i;29740:110::-;29864:23;;:::i;:::-;30504:29;274:69880;;;29125:10;274:69880;;30504:29;274:69880;29598:3;29639:22;;;;:::i;:::-;274:69880;;;;;;;29125:10;29625:36;29621:92;;29598:3;;274:69880;29551:13;;29621:92;29685:9;-1:-1:-1;29685:9:3;29621:92;;29424:1065;29941:31;;:97;;;29424:1065;29920:188;;30140:22;;;:::i;:::-;274:69880;;;;;;;29125:10;30126:36;30122:357;274:69880;;;30201:22;;;;:::i;:::-;274:69880;;;;;;;30201:22;:::i;:::-;274:69880;-1:-1:-1;;274:69880:3;;;;;;;;30267:89;30242:114;30267:89;;:::i;:::-;274:69880;;;;;;30242:22;;:::i;:114::-;30374:23;;:::i;:::-;29424:1065;;30122:357;274:69880;;-1:-1:-1;;;30445:19:3;;274:69880;;30445:19;29920:188;274:69880;;-1:-1:-1;;;30078:15:3;;274:69880;;30078:15;29941:97;274:69880;30010:17;274:69880;30030:8;274:69880;;;;;;;29992:15;:46;29941:97;;29102:3;29139:22;;;:::i;:::-;274:69880;;29125:10;274:69880;;;;-1:-1:-1;;;;;274:69880:3;29125:36;29121:86;;29102:3;274:69880;29055:13;;;;29121:86;29181:11;;;29121:86;;;28899:68;274:69880;;-1:-1:-1;;;28940:16:3;;274:69880;;28940:16;274:69880;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;65936:24;274:69880;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;274:69880:3;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;274:69880:3;;;;;;;:::i;:::-;68096:451;274:69880;;;;;:::i;:::-;-1:-1:-1;;;;;;274:69880:3;;;;;;;67970:16;274:69880;;;;;;;;;;;67936:20;274:69880;;;;;;;68029:9;;;274:69880;68041:8;274:69880;68029:27;;274:69880;;68152:23;274:69880;68152:23;;274:69880;68189:12;;;;274:69880;;68215:19;;;;274:69880;;68248:20;;274:69880;68282:25;;;274:69880;68321:25;;;;274:69880;;;;68360:33;;;274:69880;;;;;;;;68412:19;;;;274:69880;;;;;;;;68450:26;;;;274:69880;;68495:12;274:69880;;;;68495:12;;274:69880;;;;;;;;;:::i;:::-;;68096:451;;274:69880;;68096:451;;274:69880;68096:451;;;274:69880;68096:451;;;274:69880;68096:451;;;274:69880;68096:451;;;274:69880;;;;68096:451;;274:69880;;;68096:451;;;274:69880;68096:451;;;274:69880;68096:451;274:69880;;;68096:451;;;;:::i;68029:27::-;;;;274:69880;;;;;;-1:-1:-1;;274:69880:3;;;;;64746:8;274:69880;;;;;;;;;;;;;-1:-1:-1;;274:69880:3;;;;;64430:10;274:69880;;;;;;;;;;;;;-1:-1:-1;;274:69880:3;;;;;;4638:15;274:69880;;;;;;;;;4638:44;;4634:95;;5083:25;5064:44;5060:104;;18256:10;274:69880;;;18239:16;274:69880;;;;;;;;18205:20;274:69880;18205:20;274:69880;;;;;;;18354:23;;;;274:69880;;;;;18316:24;274:69880;;;;;18439:12;;;274:69880;;;;;;;;;;18439:26;18435:80;;18680:8;274:69880;;;;18659:20;274:69880;;;;;;18703:6;274:69880;;;;;;;18629:15;:81;:155;;;;274:69880;18612:232;;-1:-1:-1;;274:69880:3;;;;;;;;;18921:18;274:69880;;;;;;18921:44;18917:98;;19484:12;;;;;19499:21;;;274:69880;;;;;;;;19499:21;274:69880;;;19556:13;19534:36;;;:::i;:::-;274:69880;;;;;;;19585:29;274:69880;;;;;;;;;18680:8;274:69880;;;19726:21;274:69880;;;;;;;19726:52;;;:::i;:::-;5083:25;19912:19;;274:69880;;19934:20;274:69880;19934:20;;274:69880;;;19912:42;;;:::i;:::-;274:69880;19884:25;;274:69880;;;;;;;4638:15;274:69880;;;;;;;;;;;20105:42;;20101:531;;274:69880;;;;;;20720:33;20835:25;274:69880;18680:8;274:69880;;;20720:33;274:69880;;;;;;;;;;;18680:8;274:69880;;;;;;;;;;;;;20834:36;20830:109;;274:69880;18680:8;274:69880;;;;18256:10;274:69880;;;;;;;;;20954:36;;274:69880;;;;;20954:36;274:69880;20830:109;274:69880;;;;20830:109;;;;;;20101:531;20216:8;274:69880;;;;20163:15;;20197:13;;20163:15;;274:69880;;;;;;20197:13;274:69880;;;20192:238;274:69880;;;;;;;;;;;;;;;;;;;;;;;20720:33;274:69880;20540:3;20835:25;274:69880;;-1:-1:-1;20507:115:3;;20192:238;20101:531;;;;20507:115;274:69880;18439:12;274:69880;4638:15;274:69880;20507:115;;;;20230:3;274:69880;;;20212:16;;;;;;274:69880;;;;;;;;;;;20326:13;274:69880;;;;;;;;;20326:38;;;;20322:94;;20230:3;;274:69880;20197:13;;;20322:94;20388:9;;;;;:::i;:::-;20322:94;;;;;20212:16;;;18917:98;274:69880;;-1:-1:-1;;;18988:16:3;;274:69880;;18988:16;18612:232;274:69880;;-1:-1:-1;;;18816:17:3;;274:69880;;18816:17;18629:155;274:69880;;;;18659:20;274:69880;;;;;;18629:15;18726:58;18629:155;;18435:80;274:69880;;-1:-1:-1;;;18488:16:3;;274:69880;;18488:16;274:69880;;;;;;-1:-1:-1;;274:69880:3;;;;;;:::i;:::-;;;2466:103:2;;:::i;:::-;920:70:4;;:::i;:::-;274:69880:3;4790:15;274:69880;;;;;;;;;4790:44;;4786:98;;4915:18;274:69880;4936:8;274:69880;;;;;;;4897:15;:47;4893:107;;5083:25;5064:44;5060:104;;-1:-1:-1;;;;;274:69880:3;;;4501:18;4497:77;;43159:12;274:69880;;;;;;;;43159:37;;43190:4;274:69880;43159:37;;274:69880;;43159:37;;;274:69880;43159:37;;;;;;;;;;274:69880;43159:37;;;274:69880;43159:46;;43155:103;;274:69880;;-1:-1:-1;;;43267:33:3;;-1:-1:-1;;;;;274:69880:3;;;43267:33;;274:69880;;;;;;;;;;;;;;;;-1:-1:-1;;43267:33:3;;;;;;;43315:28;43267:33;;;274:69880;-1:-1:-1;;274:69880:3;;;-1:-1:-1;;;;;274:69880:3;;;;;;;;;;;;;;;;;43315:28;274:69880;43267:33;;;;;;-1:-1:-1;43267:33:3;;;;;;:::i;:::-;;;;;;43155:103;274:69880;;-1:-1:-1;;;43228:19:3;;274:69880;;43228:19;43159:37;;;;;;;;;;;;;;;;;;:::i;:::-;;;274:69880;;;;;;;43159:37;;;;;;;;4893:107;274:69880;;-1:-1:-1;;;4967:22:3;;274:69880;;4967:22;4786:98;274:69880;;-1:-1:-1;;;4857:16:3;;274:69880;;4857:16;274:69880;;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;66282:28;274:69880;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;274:69880:3;;;;;825:33;274:69880;;;;;;;;;;;;;-1:-1:-1;;274:69880:3;;;;;65687:15;274:69880;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;274:69880:3;;;;920:70:4;;:::i;:::-;4638:15:3;274:69880;;;;;;;;;;;4638:44;;4634:95;;5083:25;5064:44;5060:104;;-1:-1:-1;;274:69880:3;;;4638:15;274:69880;42608:15;42587:36;274:69880;2466:103:2;;:::i;:::-;274:69880:3;4638:15;274:69880;;;;;;;;5083:25;59777:44;;;:92;;;;274:69880;59773:153;;;59951:8;274:69880;;59969:959;60004:3;274:69880;;;;;;;;;;59989:13;;;;;274:69880;;;60050:20;274:69880;;;;;60087:19;60135:98;:70;:42;5083:25;60135:19;;274:69880;;60157:20;;274:69880;60135:42;;:::i;:::-;274:69880;60180:25;;274:69880;60135:70;;:::i;:::-;60208:25;;;274:69880;60135:98;;:::i;:::-;274:69880;5083:25;60251:8;274:69880;60251:12;60247:487;5083:25;;;60251:8;274:69880;60387:26;;;;274:69880;60328:3;60251:8;274:69880;-1:-1:-1;;274:69880:3;;;;;;;60309:17;;;;60372:44;274:69880;;;;;;;;;;;60372:44;;:::i;:::-;274:69880;;;;;;;;;;;;;;;;-1:-1:-1;;274:69880:3;;60287:20;;60309:17;;;;274:69880;60309:17;;60208:25;60309:17;;60247:487;274:69880;5083:25;60135:19;;274:69880;;;60157:20;;274:69880;;;60180:25;;274:69880;60208:25;274:69880;;59974:13;;;60247:487;60532:9;;274:69880;60528:192;60558:3;60251:8;274:69880;60543:13;;;;60602:44;60558:3;274:69880;;;;60617:26;;;274:69880;;;;;;60602:44;;:::i;:::-;274:69880;;;;60617:26;;;274:69880;;;;;;;60558:3;:::i;:::-;60532:9;;;60543:13;;;60208:25;274:69880;60543:13;;;60247:487;;59989:13;274:69880;3068:21:2;274:69880:3;42665:31;274:69880;;;42608:15;274:69880;;42665:31;274:69880;59773:153;274:69880;;-1:-1:-1;;;59892:23:3;;274:69880;;59892:23;59777:92;274:69880;59825:44;;;;59777:92;;;274:69880;;;;;;-1:-1:-1;;274:69880:3;;;;;64265:8;274:69880;;;;;;;;;;;;;;;;;;;;;;920:70:4;;:::i;:::-;274:69880:3;4638:15;274:69880;4638:15;274:69880;;;;;;;;;;;;4638:44;;4634:95;;5083:25;5064:44;;5060:104;;274:69880;25291:49;;;;:107;;;;274:69880;25274:182;;;25529:13;274:69880;25525:69;;274:69880;;;;;25529:13;274:69880;;25723:13;274:69880;;;25742:8;274:69880;;;;;;;;25718:175;274:69880;;;25718:175;26098:39;274:69880;25988:27;;;;;;:::i;:::-;25974:41;274:69880;26048:8;274:69880;;;26027:20;274:69880;;;5083:25;274:69880;;;26027:39;274:69880;25974:41;274:69880;;;;;;;;;;26098:39;274:69880;25756:3;274:69880;;;;;;25738:16;;;;;;274:69880;;;25779:20;274:69880;;;25779:30;274:69880;;;25779:30;274:69880;;;;;;;;;25779:52;25775:108;;25756:3;;;;;274:69880;25723:13;;;25775:108;25851:17;;;;;:::i;:::-;25775:108;;;;;25738:16;;;;;;25525:69;274:69880;;;;;;;;47976:3;47962:8;274:69880;;;;;;;;;47958:16;;;;;274:69880;;;48022:20;274:69880;;;;;48080:12;;;;274:69880;;;;;;;;;;;;48080:39;;;:91;;;47976:3;48080:148;;;;47976:3;48080:237;;;47976:3;48059:1617;;;47976:3;;;;274:69880;47976:3;;274:69880;47943:13;;48059:1617;48354:19;;;;;48374:8;;274:69880;;;;;;;;;;;;;;;;48350:406;274:69880;;;-1:-1:-1;;274:69880:3;;-1:-1:-1;;274:69880:3;;;;;-1:-1:-1;48350:406:3;274:69880;;;;;;;;;;;48902:42;:96;;;48350:406;48877:296;;48350:406;274:69880;;;;;;;;;;;;49235:25;49614:47;49235:25;274:69880;49235:25;274:69880;49235:25;;;;49216:44;;;:205;;;;48350:406;49191:400;;;48350:406;274:69880;;;;;;;49634:12;;274:69880;;;;;;;;;;;;;;;:::i;:::-;49614:47;48059:1617;;;;;49191:400;274:69880;;;;;;;;;;;;;49521:33;;;274:69880;;;;;;;;;;;49191:400;;;;49216:205;274:69880;;;;;;;;;;;;;;49391:30;49216:205;;;48877:296;274:69880;;49054:27;274:69880;;;;;;;;;;;49103:33;;;274:69880;;;;;;;;;;;48877:296;;48902:96;274:69880;;;;;;;;;;;;;;48968:30;48902:96;;48350:406;274:69880;;;48516:34;:103;;;48350:406;48487:251;;48350:406;;;;48487:251;-1:-1:-1;;274:69880:3;;;;;;;;;48668:26;274:69880;;;;;;;;;;;;;;48487:251;;;48516:103;-1:-1:-1;;;274:69880:3;;;;;;;;;48579:26;274:69880;;;;;;;;48578:41;48516:103;;48080:237;274:69880;;;;48296:21;48280:37;;;48080:237;;;:148;274:69880;;;;;48191:37;;;48080:148;;;:91;-1:-1:-1;274:69880:3;;-1:-1:-1;48155:16:3;48139:32;;;48080:91;;47958:16;;;;;;25525:69;;;;;25291:107;274:69880;;;;;25356:42;;;25291:107;;;274:69880;;;;;;-1:-1:-1;;274:69880:3;;;;1296:17:4;274:69880:3;;;-1:-1:-1;;;;;274:69880:3;;;;;;;;;;;;;;-1:-1:-1;;274:69880:3;;;;;;;;70113:26;274:69880;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;274:69880:3;;;;;65053:11;274:69880;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;4638:15;274:69880;;;;;;;;;4638:44;;4634:95;;5083:25;;5064:44;;5060:104;;11518:10;274:69880;;11501:16;274:69880;;;;;;;;11467:20;274:69880;;;;;;;11553:23;274:69880;11553:23;;274:69880;;;11553:28;;11549:82;;274:69880;;11670:24;274:69880;;;;;11815:712;;;;;;11850:12;;;;;;274:69880;;;;;;;;;;;;;;12542:119;;11866:20;11850:36;11866:20;;-1:-1:-1;274:69880:3;;-1:-1:-1;;274:69880:3;;;;;11846:223;274:69880;;;;11518:10;274:69880;;;;;;;;;;;;;;;;;;;;;;;12542:119;274:69880;11846:223;-1:-1:-1;;274:69880:3;;;;;11846:223;;11815:712;12099:13;;;;;274:69880;12131:13;274:69880;;12150:13;;274:69880;;;12126:169;12146:24;;;;;;-1:-1:-1;;;;;274:69880:3;;;;;;;12331:39;12308:62;12384:17;12331:39;12308:20;12331:39;11467:20;12331:39;12542:119;12331:39;;:::i;:::-;274:69880;;5083:25;274:69880;;;;;-1:-1:-1;;;;;274:69880:3;;12308:20;;:::i;:62::-;12384:17;:::i;:::-;11518:10;274:69880;;11501:16;274:69880;;;;;;;;;12494:22;274:69880;;;12417:74;12494:22;274:69880;;;;;;;;11815:712;;12172:3;12199:16;;;;:::i;:::-;274:69880;;;;;;-1:-1:-1;;;;;274:69880:3;11518:10;12199:30;12195:86;;12172:3;;274:69880;12131:13;;12195:86;12253:9;-1:-1:-1;12253:9:3;12195:86;;11549:82;274:69880;;-1:-1:-1;;;11604:16:3;;274:69880;;11604:16;274:69880;;;;;;-1:-1:-1;;274:69880:3;;;;;;;;-1:-1:-1;;;;;274:69880:3;;;;;;;;;;;;;;-1:-1:-1;;274:69880:3;;;;2466:103:2;;:::i;:::-;920:70:4;;:::i;:::-;274:69880:3;4638:15;274:69880;;;;;;;;;4638:44;;4634:95;;5083:25;5064:44;5060:104;;34333:8;274:69880;34373:3;;;:::i;:::-;34407;;;:::i;:::-;274:69880;;34450:20;274:69880;;;;;;34494:15;;5083:25;274:69880;;34513:14;;274:69880;34494:33;;;;34490:91;;34684:32;;34735:26;34684:32;;:::i;:::-;34735:26;;;:::i;:::-;274:69880;;34771:12;274:69880;;;-1:-1:-1;;;34771:61:3;;34797:10;274:69880;34771:61;;274:69880;34817:4;274:69880;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;;274:69880:3;34771:61;;;;;;;34847:21;34771:61;274:69880;34771:61;;;274:69880;;;;;;;34847:21;274:69880;3068:21:2;274:69880:3;;34771:61;;;;;;;;;;;;;:::i;:::-;;;;;274:69880;;;;;;-1:-1:-1;;274:69880:3;;;;;;;;;;:::i;:::-;;;;;;1418:21:4;274:69880:3;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;274:69880:3;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;274:69880:3;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;274:69880:3;;;;;5064:15;274:69880;;;;;;;;5083:25;5064:44;;5060:104;;274:69880;920:70:4;;;:::i;:::-;4638:44:3;4634:95;;6836:27;274:69880;6703:12;;274:69880;6703:12;:::i;:::-;274:69880;6703:12;274:69880;;;;6754:24;274:69880;;;;;;;;;;;;6836:27;274:69880;;;;;;;-1:-1:-1;;274:69880:3;;;;;4638:15;274:69880;;;;;;;;;4638:44;;4634:95;;5083:25;5064:44;5060:104;;40786:10;274:69880;;40769:16;274:69880;;;;;;;;40735:20;274:69880;;;;;;40884:23;;274:69880;;;;;40846:24;274:69880;;;;;;;;;;;40969:12;;;274:69880;;40969:26;40965:80;;274:69880;;;41149:12;;;274:69880;;-1:-1:-1;;274:69880:3;;;;;41199:36;-1:-1:-1;41221:13:3;;41199:36;:::i;:::-;41353:8;274:69880;;;41319:33;;;274:69880;;;;;;;;;;;;5083:25;41398:19;;274:69880;;;41420:20;41398:42;274:69880;41420:20;;274:69880;;;41398:42;;:::i;:::-;274:69880;;;41517:25;;:36;:25;;;274:69880;;;41517:36;:::i;:::-;274:69880;;;;41221:13;;274:69880;41629:24;41625:576;;274:69880;-1:-1:-1;40969:12:3;;;274:69880;;;;;;;;-1:-1:-1;;;;;274:69880:3;;;;;;;;;;;;;;;;42216:55;;274:69880;;;;42216:55;274:69880;41625:576;40969:12;41669:13;;274:69880;;-1:-1:-1;;274:69880:3;;;-1:-1:-1;41750:3:3;274:69880;41221:13;;274:69880;41724:24;;;;;41221:13;41860:16;274:69880;41221:13;;;;41860:16;:::i;:::-;274:69880;;;;;;;;5083:25;274:69880;;;;;40769:16;274:69880;;;;;;;;40735:20;274:69880;;;;;41149:12;41913:13;;274:69880;;;;;;;;;42138:38;41991:20;5083:25;41991:20;;274:69880;;;;42014:21;41991:44;274:69880;42014:21;;274:69880;;;41991:44;;:::i;:::-;274:69880;;;42138:26;274:69880;;;42138:38;:::i;:::-;274:69880;;;41709:13;;41724:24;;;42216:55;41625:576;;274:69880;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;920:70:4;;;;;:::i;:::-;274:69880:3;5064:15;274:69880;;;;;;;;5083:25;5064:44;5060:104;;26733:8;274:69880;26756:11;26765:2;26756:11;;;:26;;;274:69880;26752:276;;;26823:1;274:69880;;26802:22;26798:87;;26752:276;;;;;274:69880;;;;;;;;;;;;27089:433;274:69880;;;27089:433;274:69880;;27537:39;;274:69880;27537:39;274:69880;;27537:39;:::i;27133:3::-;274:69880;;27109:22;;;;;274:69880;27180:13;;274:69880;;;27175:205;27397:5;;27393:64;;-1:-1:-1;;;;;27496:14:3;;;;:::i;:::-;274:69880;;;;;-1:-1:-1;;;274:69880:3;;;;;;;;;;;;;;;;;;;:::i;:::-;;27094:13;;;;274:69880;;;;;;;;;;;;27210:3;274:69880;;;;;;;;;;27195:13;;;;;;-1:-1:-1;;;;;274:69880:3;27237:14;;;;:::i;:::-;274:69880;;;;;;27255:20;274:69880;;27255:30;274:69880;;;27255:30;274:69880;;27237:48;27233:133;;27180:13;;;;27210:3;;27180:13;27210:3;;27180:13;274:69880;;27210:3;27180:13;;27233:133;27309:11;;;;;;;;27342:5;;;27195:13;;;;;;;;;;;274:69880;;;;;;;;;;;;27109:22;;;26798:87;274:69880;;-1:-1:-1;;;26851:19:3;;274:69880;;26851:19;26752:276;274:69880;26905:10;;26901:127;;26752:276;;;;;;;26901:127;26956:1;274:69880;;26935:22;26931:87;26901:127;26931:87;274:69880;;-1:-1:-1;;;26984:19:3;;274:69880;;26984:19;26756:26;26771:11;274:69880;26771:11;;;26756:26;;274:69880;-1:-1:-1;;;;274:69880:3;;;;;;;;;;;-1:-1:-1;;;;;274:69880:3;;;;;;;;;;;;;;;;;-1:-1:-1;;;;274:69880:3;;;;;;;;;;;;;;-1:-1:-1;;274:69880:3;;;;2466:103:2;;:::i;:::-;920:70:4;;:::i;:::-;4790:15:3;274:69880;;;;;;;;;;;4790:44;4786:98;;4915:18;274:69880;4936:8;274:69880;;;;;;;4897:15;:47;4893:107;;-1:-1:-1;;274:69880:3;43677:25;274:69880;4790:15;274:69880;43726:12;274:69880;;;-1:-1:-1;;;43726:37:3;;43757:4;274:69880;43726:37;;274:69880;-1:-1:-1;;;;;274:69880:3;;;;;43726:37;;;274:69880;;;;43726:37;;;;;;;274:69880;43726:37;;;274:69880;;43783:11;274:69880;43777:17;;43773:86;;274:69880;-1:-1:-1;;;;;;;;;;;274:69880:3;;;4897:15;274:69880;;43873:35;274:69880;3068:21:2;274:69880:3;;43773:86;274:69880;;-1:-1:-1;;;43810:38:3;;43832:10;274:69880;43810:38;;274:69880;;;;;;;;;;;;;;;;;-1:-1:-1;;43810:38:3;;;;;;;-1:-1:-1;;;;;;;;;;;43810:38:3;;43773:86;43810:38;;;;;;;;;;;;;:::i;:::-;;;43773:86;;43726:37;;;;;;;;;;;;;;;;:::i;:::-;;;274:69880;;;;;43726:37;;;;;;;;274:69880;;;;;;-1:-1:-1;;274:69880:3;;;;;;;;66803:21;274:69880;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;:::i;:::-;2466:103:2;;:::i;:::-;274:69880:3;4638:15;274:69880;;;;;;;;;;4638:44;;4634:95;;5083:25;5064:44;;5060:104;;274:69880;21655:42;;;;;:102;;;;274:69880;21638:177;;;21829:8;274:69880;21829:12;21825:299;;274:69880;;;;;;;;;;;;;22169:20;274:69880;;;;;;22291:10;274:69880;;22274:16;274:69880;;;;;;;;22240:20;274:69880;;;;22364:12;;;274:69880;-1:-1:-1;;;;;274:69880:3;;;;22364:26;22360:80;;22505:16;;;274:69880;;;;;;;;;;;;;;22505:67;22488:155;;274:69880;;;;;;;;;;22720:21;22704:37;;:91;;;;;274:69880;22704:145;;;;274:69880;22687:224;;;;22943:11;274:69880;;22240:20;274:69880;;;;;22240:20;274:69880;;;;;;;23019:3;22983:40;274:69880;;22983:40;;:::i;:::-;23103:20;274:69880;23103:20;;274:69880;;;23103:31;;;23099:108;;274:69880;23279:15;274:69880;23279:15;:30;274:69880;;;23279:30;:::i;:::-;274:69880;;23391:295;;274:69880;22943:11;274:69880;23696:19;:34;5083:25;23696:19;;274:69880;;;23696:34;:::i;:::-;274:69880;;;;;23803:31;;;23799:117;;274:69880;;;;;;;;;;;;;;;;;22364:12;24012:32;;:86;;;;;274:69880;24012:149;;;;;274:69880;24011:201;;;;274:69880;24011:249;;;;274:69880;23994:529;;;;274:69880;24585:15;;;;;;24581:137;;274:69880;;;24733:59;274:69880;;;21829:8;274:69880;;;22291:10;;274:69880;;;;;;;;;;;;;;;24733:59;22720:21;274:69880;;24581:137;22505:16;274:69880;;;-1:-1:-1;;;24616:65:3;;22291:10;274:69880;24616:65;;274:69880;24662:4;274:69880;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;274:69880:3;24616:65;;;;;;;24733:59;24616:65;274:69880;24616:65;;;24581:137;;;;;;;;24616:65;;;;;;;;;;;;;:::i;:::-;;;;;23994:529;274:69880;;;24289:34;24285:106;;23994:529;274:69880;;21829:8;274:69880;;;;;;;;;;;24404:33;;;274:69880;;;;;;;;;;;;;;;;;21829:8;274:69880;;;;;;;;;;;;;;24472:19;274:69880;;;;;;;;;;;;;23994:529;;;;;;;24285:106;-1:-1:-1;;274:69880:3;;;;;24285:106;;;;24011:249;274:69880;24228:32;;;-1:-1:-1;24011:249:3;;;;:201;22943:11;274:69880;-1:-1:-1;24178:34:3;;-1:-1:-1;24011:201:3;;;24012:149;274:69880;;;;;24134:27;24118:43;;24012:149;;;;:86;274:69880;;-1:-1:-1;274:69880:3;24064:34;;;-1:-1:-1;24012:86:3;;23799:117;23874:31;;23850:55;23874:31;;;:::i;:::-;23850:55;;:::i;:::-;274:69880;;23799:117;;;23391:295;23442:25;;;;274:69880;;23509:23;;;;:85;;;;;;23551:23;;;;:::i;:::-;23509:85;;274:69880;23622:53;;;;;274:69880;23622:53;23391:295;;;23622:53;23652:23;;;:::i;:::-;23622:53;;23509:85;274:69880;23509:85;;;23099:108;274:69880;23165:31;;;23150:46;23165:31;;;:::i;23150:46::-;23099:108;;;;22687:224;274:69880;;-1:-1:-1;;;22881:19:3;;274:69880;;22881:19;22704:145;274:69880;;;;;;22811:38;22704:145;;;;:91;-1:-1:-1;22505:16:3;22757:38;;;-1:-1:-1;274:69880:3;22704:91;;22488:155;274:69880;;-1:-1:-1;;;22604:28:3;;274:69880;;22604:28;21825:299;274:69880;;;21895:20;274:69880;;;;;;21959:7;274:69880;;;;;;;21861:15;:106;:184;;;;21825:299;21857:257;21825:299;21857:257;274:69880;;-1:-1:-1;;;22085:14:3;;274:69880;;22085:14;21861:184;274:69880;;;;21895:20;274:69880;;;;;;22005:40;274:69880;21861:15;21987:58;21861:184;;21655:102;21732:25;21713:44;;;;21655:102;;;274:69880;;;;;;-1:-1:-1;;274:69880:3;;;;;;;1185:19:4;274:69880:3;1185:19:4;274:69880:3;;;;;;;;;;1185:19:4;274:69880:3;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;:::i;:::-;;;-1:-1:-1;;;;;274:69880:3;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;274:69880:3;;;;;4638:15;274:69880;;;;;;;;;4638:44;;4634:95;;5083:25;5064:44;5060:104;;57442:8;274:69880;;;;;;57421:20;274:69880;;;;;;57465:7;274:69880;;;;;;;57391:15;:82;:156;;;;274:69880;57374:242;;274:69880;57695:12;;:134;;;274:69880;57678:210;;57898:9;;274:69880;;57898:9;:::i;:::-;274:69880;;;;58012:10;274:69880;;57985:26;274:69880;;;;;;;;;;;;;;57985:53;57981:198;274:69880;;;58706:39;58012:10;58706:39;58012:10;;274:69880;;57985:26;274:69880;;;;;;;;;;;;;;58609:20;57442:8;274:69880;;;;;58359:28;274:69880;;58416:42;274:69880;;;;;;;;;;;;;;;;;58416:18;274:69880;;;;;58416:42;:::i;:::-;57442:8;274:69880;;;57421:20;274:69880;;58468:53;:39;274:69880;;;58468:39;274:69880;;58468:53;;:::i;:::-;274:69880;;;;;58559:14;;58012:10;-1:-1:-1;;;;;274:69880:3;;;;;;;;58012:10;274:69880;;58630:16;274:69880;;;;;;;;;5083:25;274:69880;;;;58609:81;274:69880;58596:10;;274:69880;;;;58012:10;;;;58706:39;274:69880;;;;;;;;;;;;;;;;;;;;;57981:198;274:69880;;-1:-1:-1;;;58150:18:3;;274:69880;;58150:18;57678:210;274:69880;;-1:-1:-1;;;57861:16:3;;274:69880;;57861:16;57695:134;57762:10;;274:69880;;57745:16;274:69880;;;;;;;;57724:20;274:69880;;57724:95;274:69880;;;57724:95;274:69880;;;;;;;;;;;57723:106;57695:134;;57374:242;274:69880;;-1:-1:-1;;;57579:26:3;;274:69880;;57579:26;57391:156;274:69880;;;;57421:20;274:69880;;;;;;57391:15;57489:58;57391:156;;274:69880;;;;;;-1:-1:-1;;274:69880:3;;;;2466:103:2;;:::i;:::-;274:69880:3;59777:15;274:69880;;;;;;;;59796:25;59777:44;59796:25;59777:44;;;:92;;;;274:69880;59773:153;;;59951:8;274:69880;;;;;;;;59969:959;60004:3;274:69880;;59989:13;;;;;;274:69880;;;;;60050:20;274:69880;;;;;60087:19;60135;;;274:69880;;60135:42;274:69880;60157:20;;274:69880;;;60135:42;;:::i;:::-;60180:25;60135:70;274:69880;60180:25;;274:69880;;;60135:70;;:::i;:::-;60208:25;60135:98;60208:25;;;274:69880;;;60135:98;;:::i;:::-;60251:8;;274:69880;;;;60251:12;60247:487;59796:25;;;60387:26;274:69880;;;;;;60387:26;;60283:207;60328:3;274:69880;;-1:-1:-1;;274:69880:3;;;;;;;60309:17;;;;60372:44;274:69880;;;;;;;;;;;60372:44;;:::i;:::-;274:69880;;;;;;;;;;;;;;;;-1:-1:-1;;274:69880:3;;60287:20;;60309:17;;;;274:69880;60309:17;;;;;;;;;;;274:69880;60309:17;;;60247:487;274:69880;;;;;59974:13;;;;;;60247:487;60617:26;274:69880;60532:9;;;;;;;60617:26;;60528:192;60558:3;274:69880;;60543:13;;;;60602:44;60558:3;274:69880;;;;;;;;;;;60602:44;;:::i;:::-;274:69880;;;;;;;;;;;;60558:3;:::i;:::-;60532:9;;;60543:13;;;;274:69880;60543:13;;;;;;;;;;;;274:69880;60543:13;;60247:487;;59777:92;274:69880;59825:44;;;;59777:92;;;274:69880;;;;;;-1:-1:-1;;274:69880:3;;;;2466:103:2;;:::i;:::-;63525:10:3;274:69880;;63508:16;274:69880;;;;;;;;63474:20;274:69880;;;;;63575:25;;;274:69880;;;63669:12;;;63665:62;;274:69880;;;;;63776:12;274:69880;63798:12;;;;;274:69880;;;;-1:-1:-1;;;63776:44:3;;-1:-1:-1;;;;;274:69880:3;;;;63776:44;;274:69880;;;;;;;;;;;;;;;;;;;;63776:44;;;;;;;63835:38;63776:44;;;274:69880;-1:-1:-1;274:69880:3;;;;;;;;-1:-1:-1;;;;;274:69880:3;;;;;;;;;;;;;;;63835:38;274:69880;63776:44;;;274:69880;63776:44;274:69880;63776:44;;;;;;;:::i;:::-;;;;;63665:62;274:69880;;-1:-1:-1;;;63704:12:3;;274:69880;;63704:12;274:69880;;;;;;;;;;;;;;;920:70:4;;;:::i;:::-;4638:15:3;274:69880;;;;;;;;;;;4638:44;;4634:95;;5083:25;5064:44;;5060:104;;10359:107;;10560:8;274:69880;10560:13;10571:2;10560:13;;:31;;;;274:69880;10556:79;;274:69880;10665:5;274:69880;10665:5;;;;11096:46;274:69880;;11060:20;274:69880;;;;;;;4638:15;274:69880;;11002:25;274:69880;11060:20;;:::i;:::-;11046:34;274:69880;;;;;;11096:46;274:69880;10672:3;274:69880;;;10752:24;274:69880;;;;;;;10752:35;274:69880;10752:46;10748:110;;274:69880;;10650:13;;10748:110;274:69880;;-1:-1:-1;;;10825:18:3;;274:69880;;10825:18;10556:79;274:69880;;-1:-1:-1;;;10614:10:3;;274:69880;;10614:10;10560:31;274:69880;5083:25;10571:2;274:69880;10577:14;10560:31;;10359:107;274:69880;;-1:-1:-1;;;10435:20:3;;274:69880;;10435:20;274:69880;;;;;;-1:-1:-1;;274:69880:3;;;;;;;;69601:25;274:69880;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;274:69880:3;;;;;;;;67586:25;274:69880;;;;;;;;:::i;:::-;;;;;;-1:-1:-1;;274:69880:3;;;;2466:103:2;;:::i;:::-;274:69880:3;5064:15;274:69880;;;;;;;;5083:25;5064:44;;5060:104;;274:69880;4638:44;;4634:95;;274:69880;9177:42;9173:96;;9357:10;274:69880;;9340:16;274:69880;;;;;;;;9306:20;274:69880;;;;;9447:12;;;274:69880;;;;;;;;;;;;;9447:37;9443:90;;9615:11;274:69880;9306:20;274:69880;;;;;;9306:20;274:69880;;;;;;;9651:3;9615:40;274:69880;;9615:40;;:::i;:::-;9695:2;274:69880;;;;;;9695:2;274:69880;;;;;;;;;;;9714:20;274:69880;9714:20;;:31;274:69880;;;9714:31;:::i;:::-;274:69880;;-1:-1:-1;;274:69880:3;;;;9447:12;274:69880;;;-1:-1:-1;;;9858:61:3;;9357:10;274:69880;9858:61;;274:69880;9904:4;274:69880;;;;;;;;;;;-1:-1:-1;;;;;274:69880:3;;;;;;;;;-1:-1:-1;;274:69880:3;;9858:61;;;;;;;9934:53;9858:61;9770:16;9858:61;;;274:69880;-1:-1:-1;9952:12:3;274:69880;;;;;;;;-1:-1:-1;;;;;274:69880:3;;;;;;;;;;;;;;;9934:53;274:69880;9858:61;;;274:69880;9858:61;274:69880;9858:61;;;;;;;:::i;:::-;;;;;9443:90;274:69880;;-1:-1:-1;;;9507:15:3;;274:69880;;9507:15;9173:96;274:69880;;-1:-1:-1;;;9242:16:3;;274:69880;;9242:16;274:69880;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;-1:-1:-1;;;;;274:69880:3;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;-1:-1:-1;;;;;274:69880:3;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;-1:-1:-1;274:69880:3;;-1:-1:-1;274:69880:3;;-1:-1:-1;274:69880:3;;;;;;;;;;;;;;;;:::i;:::-;:::o;:::-;;;;;;;;;;;;-1:-1:-1;274:69880:3;;;;;;;;;;;-1:-1:-1;;274:69880:3;;;;;;;:::o;:::-;;;;;;;;;;:::o;:::-;29074:19;274:69880;;;;;;29074:19;-1:-1:-1;274:69880:3;;;;-1:-1:-1;274:69880:3;:::o;:::-;;;;;;;;;;;;;29074:19;274:69880;;;;29074:19;274:69880;;;;;;:::o;:::-;;;;;;;;-1:-1:-1;274:69880:3;;-1:-1:-1;274:69880:3;;;-1:-1:-1;274:69880:3;:::o;:::-;;;-1:-1:-1;;;274:69880:3;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;-1:-1:-1;274:69880:3;;-1:-1:-1;274:69880:3;;-1:-1:-1;274:69880:3;;;;;;;;;;;;;;;;:::i;:::-;;;-1:-1:-1;;;;;274:69880:3;;;;;;;;;;-1:-1:-1;274:69880:3;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;29074:19;274:69880;;;;;-1:-1:-1;;274:69880:3;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;29074:19;274:69880;:::o;:::-;;;;;;;;;;;;;;;;;;;-1:-1:-1;;274:69880:3;;;;;;;:::i;:::-;;:::o;:::-;;;;;;;:::i;:::-;-1:-1:-1;274:69880:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;:::o;:::-;;;;;;;;:::o;49939:7128::-;;50186:8;274:69880;;-1:-1:-1;274:69880:3;50165:20;274:69880;;;-1:-1:-1;274:69880:3;;50209:7;274:69880;;;;;;;50135:15;:82;:181;;;;49939:7128;50118:257;;274:69880;;;;;;;;;;;;-1:-1:-1;274:69880:3;50559:28;274:69880;;;-1:-1:-1;274:69880:3;50640:10;-1:-1:-1;274:69880:3;50613:26;274:69880;;;-1:-1:-1;274:69880:3;;;;;-1:-1:-1;274:69880:3;;;;-1:-1:-1;274:69880:3;;-1:-1:-1;274:69880:3;;;;-1:-1:-1;274:69880:3;;;;;;;50522:1;50701:14;;274:69880;;50640:10;;;50687:28;50683:79;;50776:18;;;274:69880;;;;;50775:19;50771:73;;274:69880;;;;;50853:69;;274:69880;-1:-1:-1;274:69880:3;50969:16;274:69880;;;-1:-1:-1;274:69880:3;;-1:-1:-1;274:69880:3;50948:20;274:69880;;;50948:61;274:69880;-1:-1:-1;274:69880:3;50948:61;274:69880;;;;;;;;50776:18;50948:95;50931:179;;-1:-1:-1;;274:69880:3;;;;;51151:138;;274:69880;;;;;-1:-1:-1;274:69880:3;51461:18;274:69880;;;;-1:-1:-1;274:69880:3;;:::i;:::-;-1:-1:-1;51531:13:3;-1:-1:-1;51564:3:3;274:69880;;51546:16;;;;;274:69880;;;;-1:-1:-1;274:69880:3;50559:28;274:69880;;;-1:-1:-1;274:69880:3;51645:8;;;;:::i;:::-;274:69880;-1:-1:-1;274:69880:3;;;;50776:18;274:69880;-1:-1:-1;274:69880:3;51604:63;274:69880;;51583:141;;51564:3;50522:1;274:69880;51531:13;;51583:141;51700:9;;50522:1;51700:9;;:::i;:::-;51583:141;;;;;51546:16;;51899:51;51546:16;;;274:69880;;;-1:-1:-1;274:69880:3;50165:20;274:69880;;51899:41;274:69880;-1:-1:-1;274:69880:3;51899:41;274:69880;51899:51;:::i;:::-;51960:28;-1:-1:-1;;52070:13:3;50522:1;274:69880;52089:8;274:69880;52065:167;52103:3;50522:1;274:69880;;;;;;50522:1;274:69880;;52085:16;;;;;274:69880;-1:-1:-1;274:69880:3;50948:20;274:69880;;;50948:61;274:69880;-1:-1:-1;274:69880:3;52126:30;274:69880;;;;;;;;50776:18;52126:52;52122:100;;52103:3;50522:1;274:69880;52070:13;;52122:100;52198:9;;50522:1;52198:9;;:::i;:::-;52122:100;;;;;52085:16;;;;;;;274:69880;;50186:8;274:69880;-1:-1:-1;274:69880:3;52463:25;274:69880;;;;-1:-1:-1;274:69880:3;;;52459:142;;52065:167;52639:17;;;;:::i;:::-;52666:21;-1:-1:-1;52711:13:3;50522:1;52744:3;52089:8;274:69880;50522:1;274:69880;;;;;;50522:1;274:69880;52726:16;;;;;274:69880;-1:-1:-1;274:69880:3;50948:20;274:69880;;;-1:-1:-1;274:69880:3;;50948:61;52831:12;;274:69880;;;;;;;;50776:18;52831:34;52827:647;;52744:3;;50522:1;274:69880;52711:13;;52827:647;51899:41;52889:19;274:69880;;52889:19;;;:30;;;52885:476;;52827:647;50522:1;53378:31;53427:32;53378:31;;;;;;:::i;:::-;274:69880;;53427:32;:::i;:::-;52827:647;;;;52885:476;50522:1;52961:30;52943:49;53427:32;52961:30;;;;53378:31;52961:30;;:::i;52943:49::-;53312:30;;52885:476;;;;;;;;52726:16;;;;;;;;;;274:69880;;53561:16;53557:2603;;52706:778;-1:-1:-1;;56184:31:3;;;;;-1:-1:-1;;;;56231:17:3;;;274:69880;;;50948:61;274:69880;;50701:14;;274:69880;;;-1:-1:-1;;;56272:46:3;;-1:-1:-1;;;;;274:69880:3;;;50776:18;56272:46;;274:69880;;;;;;;;56231:17;274:69880;;;;;;-1:-1:-1;274:69880:3;;;;56272:46;;;;;;;;;;56385;56272;;;56180:881;-1:-1:-1;274:69880:3;50701:14;;274:69880;;;;;;-1:-1:-1;;;;;274:69880:3;;;;;;;;;;;;;;;;;;;;;;;56385:46;;;;49939:7128::o;56272:46::-;;;274:69880;56272:46;274:69880;56272:46;;;;;;;:::i;:::-;;;;;56180:881;56488:7;56454:30;;;;:::i;:::-;56453:42;56488:7;;;-1:-1:-1;;;56563:17:3;;;274:69880;;;50948:61;274:69880;;50701:14;;274:69880;;;-1:-1:-1;;;56615:59:3;;-1:-1:-1;;;;;274:69880:3;;;50776:18;56615:59;;274:69880;;;;;;;;;;56563:17;274:69880;;;;;;-1:-1:-1;274:69880:3;;;;56615:59;274:69880;56449:612;56831:165;274:69880;;;;51899:41;274:69880;;4790:15;274:69880;;;4790:15;274:69880;;;;;;;;;;;;;;;;;;;;;;56831:165;-1:-1:-1;;;;;;;;;;;274:69880:3;;;50135:15;274:69880;;57015:35;274:69880::o;53557:2603::-;-1:-1:-1;53716:105:3;;;;;;;;;;:18;;;:105;:18;;;:105;;;;;;;;;53705:116;-1:-1:-1;53880:2270:3;53918:3;274:69880;;53900:16;;;;;54225:8;;;;:::i;:::-;274:69880;-1:-1:-1;274:69880:3;50948:20;274:69880;;;;;;;54204:37;274:69880;-1:-1:-1;274:69880:3;54204:37;274:69880;;-1:-1:-1;274:69880:3;54149:29;274:69880;;;-1:-1:-1;274:69880:3;;-1:-1:-1;274:69880:3;54103:24;274:69880;;;50522:1;274:69880;-1:-1:-1;274:69880:3;54328:13;274:69880;:::i;:::-;54391:23;-1:-1:-1;54360:13:3;-1:-1:-1;54487:13:3;-1:-1:-1;54524:3:3;274:69880;;54502:20;;;;;-1:-1:-1;;;;;54642:12:3;;;;:::i;:::-;274:69880;;-1:-1:-1;274:69880:3;50969:16;274:69880;;;-1:-1:-1;274:69880:3;;-1:-1:-1;274:69880:3;50948:20;274:69880;;;-1:-1:-1;274:69880:3;;50948:61;54703:13;;274:69880;;;;;;;;50776:18;54703:35;54699:501;;54524:3;;50522:1;274:69880;54487:13;;54699:501;54766:7;;;;;;:::i;:::-;54832:20;;;;;:91;;;54699:501;54799:379;;;54998:21;;50776:18;50522:1;54998:21;;274:69880;54799:379;;54699:501;;;54799:379;55052:126;;;;;;54799:379;;50522:1;54799:379;;;55052:126;50776:18;55126:21;;;;274:69880;;50522:1;274:69880;;;;;54204:37;274:69880;;;;;;;55108:43;50522:1;55052:126;;54832:91;54902:21;50776:18;54902:21;;274:69880;54884:39;;54832:91;;54502:20;;;;;;;;;;;;;55419:16;54502:20;55419:16;;:::i;:::-;55464:95;:26;;;;;;:95;;;-1:-1:-1;55759:3:3;274:69880;;55737:20;;;;;-1:-1:-1;;;;;55878:12:3;;;;:::i;:::-;274:69880;;-1:-1:-1;274:69880:3;50969:16;274:69880;;;-1:-1:-1;274:69880:3;;-1:-1:-1;274:69880:3;50948:20;274:69880;;;-1:-1:-1;274:69880:3;;50948:61;55939:14;;274:69880;;;;;;;;50776:18;55939:36;55935:183;;55759:3;;50522:1;274:69880;55722:13;;55935:183;56003:22;50522:1;56003:22;;50776:18;56063:32;56003:22;;:34;274:69880;;;56003:34;:::i;56063:32::-;55935:183;;;;55737:20;-1:-1:-1;55737:20:3;;;;;;-1:-1:-1;55737:20:3;;-1:-1:-1;55737:20:3;50522:1;274:69880;;;;55737:20;;53885:13;;55464:95;;;;;;53900:16;;;;;;;;;;53557:2603;;;;53716:105;53792:28;;53780:41;53792:28;;;:::i;53780:41::-;53716:105;;;;;;;;;52459:142;274:69880;;;52522:21;274:69880;;52567:23;274:69880;;-1:-1:-1;274:69880:3;;:::i;:::-;;;;52567:23;;:::i;:::-;52459:142;;;51151:138;-1:-1:-1;51180:17:3;;;274:69880;;;;;;-1:-1:-1;;;;;274:69880:3;;;;;;;;;;;;51180:17;;51220:38;;274:69880;;-1:-1:-1;274:69880:3;;;;51220:38;274:69880;50853:69;274:69880;;-1:-1:-1;;;50895:16:3;;50776:18;;50895:16;50771:73;274:69880;;-1:-1:-1;;;50817:16:3;;50776:18;;50817:16;50683:79;274:69880;;-1:-1:-1;;;50738:13:3;;;;;50118:257;274:69880;;-1:-1:-1;;;50348:16:3;;;;;50135:181;274:69880;;-1:-1:-1;274:69880:3;50165:20;274:69880;;;-1:-1:-1;274:69880:3;;50308:7;274:69880;;;;;;;50135:15;50233:83;;50135:181;;2575:307:2;1899:1;2702:7;274:69880:3;2702:18:2;2698:86;;1899:1;2702:7;274:69880:3;2575:307:2:o;2698:86::-;274:69880:3;;-1:-1:-1;;;2743:30:2;;;;;1920:174:4;1072:10;274:69880:3;-1:-1:-1;;;;;274:69880:3;735:10:1;1983:27:4;1979:109;;1920:174::o;1979:109::-;274:69880:3;;-1:-1:-1;;;2033:44:4;;735:10:1;2033:44:4;;;274:69880:3;;;2033:44:4;40000:324:3;;-1:-1:-1;40105:13:3;-1:-1:-1;40140:3:3;274:69880;;40120:18;;;;;40177:10;;;;:::i;:::-;274:69880;;40163:10;274:69880;;;;;;-1:-1:-1;;;;;274:69880:3;40163:24;40159:72;;40140:3;274:69880;;40105:13;;40159:72;40207:9;-1:-1:-1;40207:9:3;40159:72;;40120:18;;;274:69880;;;;;;;;;;;40304:11;40267:27;40250:14;40267:27;40250:44;40267:27;;;:::i;:::-;274:69880;;;40250:14;;;:::i;:::-;274:69880;;-1:-1:-1;;;;;274:69880:3;;;;;;;;;;;;;;;;;;;;;;;;;;;34995:310;-1:-1:-1;274:69880:3;35101:20;274:69880;;;-1:-1:-1;274:69880:3;;35083:15;;:56;:151;;;;;34995:310;35066:233;;;34995:310::o;35066:233::-;274:69880;;-1:-1:-1;;;35266:22:3;;;;;35083:151;274:69880;;35227:6;274:69880;;;;;;;35083:15;35155:79;35083:151;;;35422:178;-1:-1:-1;274:69880:3;35495:20;274:69880;;35495:37;274:69880;-1:-1:-1;274:69880:3;35495:37;274:69880;35495:49;35491:103;;35422:178::o;35491:103::-;274:69880;;-1:-1:-1;;;35567:16:3;;;;;2100:207:4;2196:10;274:69880:3;;-1:-1:-1;;;;;274:69880:3;;;-1:-1:-1;;;;;;274:69880:3;;;;;;;;;2256:44:4;;2196:10;2256:44;2100:207::o",
    linkReferences: {},
  },
  methodIdentifiers: {
    "EmergencyStartTime()": "7b47d7e8",
    "acceptSecretaryRole()": "a504f809",
    "addMemberToCommunity(address)": "f2ddec41",
    "advancePeriod()": "c3a42297",
    "approveNewSubgroupMember(uint256,uint256,bool)": "dbcd14f0",
    "approveSubgroupAssignment(bool)": "5c6af456",
    "assignMemberToSubgroup(address,uint256,bool)": "be471206",
    "beginEmergency()": "756b01b6",
    "createSubgroup()": "4ee4a857",
    "defectFromCommunity()": "9e99d7c6",
    "defineSecretarySuccessorList(address[])": "42c1b0ef",
    "divideShortfall()": "bc017b57",
    "emergencyRefund()": "16bfe25c",
    "emergencySecretaryHandoff(address)": "d26a624b",
    "emergencyWithdraw(address,uint256)": "95ccea67",
    "endEmergency()": "3f1b3f8f",
    "extendPeriodByOneDay()": "fb3944f1",
    "getBasePremium()": "5d86b8e1",
    "getCommunityState()": "7985940d",
    "getCurrentClaimId()": "f34cf775",
    "getCurrentMemberId()": "72f833a8",
    "getCurrentSubGroupId()": "9f2592b3",
    "getEmergencyHandOverStartedPeriod()": "ac115bbe",
    "getEmergencyHandoverStartedAt()": "fef4c550",
    "getEmergencySecretaries()": "4ee9c6f7",
    "getHandoverStartedAt()": "e15d69f3",
    "getIsAMemberDefectedInPeriod(uint256)": "0a5b34f2",
    "getIsAllMemberNotPaidInPeriod(uint256)": "66199808",
    "getIsHandingOver()": "c2a41da0",
    "getMemberInfoFromId(uint256,uint256)": "a8fdb788",
    "getMemberToMemberId(address)": "e319ace9",
    "getMemberToMemberInfo(address,uint256)": "a3d033e5",
    "getPaymentToken()": "d41c3a65",
    "getPeriodId()": "a0b34a30",
    "getPeriodIdToClaimIdToClaimInfo(uint256,uint256)": "7b55476d",
    "getPeriodIdToClaimIds(uint256)": "ea398bc1",
    "getPeriodIdToDefectorsId(uint256)": "3a85bded",
    "getPeriodIdToPeriodInfo(uint256)": "e329972d",
    "getPeriodIdWhiteListedClaims(uint256)": "0899fe41",
    "getSecretarySuccessors()": "27bd3ef0",
    "getSubGroupIdToSubGroupInfo(uint256)": "a482b102",
    "getTotalCoverage()": "cc10a3aa",
    "getUpcomingSecretary()": "6d4da76d",
    "handoverSecretaryRoleToSuccessor(address)": "b87b1d0d",
    "initiateDefaultState(uint256)": "108f1d03",
    "injectFunds()": "50c8e1fd",
    "issueRefund(bool)": "c4afc37a",
    "joinCommunity()": "00b16fee",
    "leaveSubgroup()": "4ae4ab48",
    "payPremium(bool)": "39786a96",
    "secretary()": "5495d2aa",
    "submitClaim()": "1afbd128",
    "updateCoverageAmount(uint256)": "72547ec9",
    "updateMemberStatus()": "f3f02d03",
    "whitelistClaim(uint256)": "ec15a890",
    "withdrawClaimFund(bool)": "d98b2503",
    "withdrawRefund()": "110f8874",
  },
  rawMetadata:
    '{"compiler":{"version":"0.8.23+commit.f704f362"},"language":"Solidity","output":{"abi":[{"inputs":[{"internalType":"address","name":"_paymentToken","type":"address"},{"internalType":"address","name":"owner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"AlreadyAdded","type":"error"},{"inputs":[],"name":"AlreadyClaimed","type":"error"},{"inputs":[],"name":"AlreadySet","type":"error"},{"inputs":[],"name":"AlreadySubmitted","type":"error"},{"inputs":[],"name":"AmountZero","type":"error"},{"inputs":[],"name":"CannotBeZeroAddress","type":"error"},{"inputs":[],"name":"CannotEmergencyRefund","type":"error"},{"inputs":[],"name":"ClaimNoOccured","type":"error"},{"inputs":[],"name":"ClaimantNotValidMember","type":"error"},{"inputs":[],"name":"CommunityIsCollapsed","type":"error"},{"inputs":[],"name":"CoverageFullfilled","type":"error"},{"inputs":[],"name":"DFNotMet","type":"error"},{"inputs":[],"name":"DelayInitiated","type":"error"},{"inputs":[],"name":"EmergencyGracePeriod","type":"error"},{"inputs":[],"name":"InEmergency","type":"error"},{"inputs":[],"name":"InValidClaim","type":"error"},{"inputs":[],"name":"InsufficientFunds","type":"error"},{"inputs":[],"name":"InvalidMember","type":"error"},{"inputs":[],"name":"InvalidSubGroup","type":"error"},{"inputs":[],"name":"ManuallyCollapsed","type":"error"},{"inputs":[],"name":"NeedMoreSuccessor","type":"error"},{"inputs":[],"name":"NoClaimOccured","type":"error"},{"inputs":[],"name":"NoValiddMember","type":"error"},{"inputs":[],"name":"NotAssignedYet","type":"error"},{"inputs":[],"name":"NotClaimSubmittionWindow","type":"error"},{"inputs":[],"name":"NotClaimWindow","type":"error"},{"inputs":[],"name":"NotClaimant","type":"error"},{"inputs":[],"name":"NotDefectWindow","type":"error"},{"inputs":[],"name":"NotFirstSuccessor","type":"error"},{"inputs":[],"name":"NotHandingOver","type":"error"},{"inputs":[],"name":"NotInAssigned","type":"error"},{"inputs":[],"name":"NotInAssignmentSuccessfull","type":"error"},{"inputs":[],"name":"NotInCovereged","type":"error"},{"inputs":[],"name":"NotInDefOrFra","type":"error"},{"inputs":[],"name":"NotInEmergency","type":"error"},{"inputs":[],"name":"NotInInDefault","type":"error"},{"inputs":[],"name":"NotInIniOrDef","type":"error"},{"inputs":[],"name":"NotInInitilization","type":"error"},{"inputs":[],"name":"NotInInjectionWindow","type":"error"},{"inputs":[],"name":"NotInManualCollaps","type":"error"},{"inputs":[],"name":"NotInSuccessorList","type":"error"},{"inputs":[],"name":"NotIncluded","type":"error"},{"inputs":[],"name":"NotPaidInvalid","type":"error"},{"inputs":[],"name":"NotPayWindow","type":"error"},{"inputs":[],"name":"NotRefundWindow","type":"error"},{"inputs":[],"name":"NotReorged","type":"error"},{"inputs":[],"name":"NotValidMember","type":"error"},{"inputs":[],"name":"NotWhiteListed","type":"error"},{"inputs":[],"name":"NotWhitelistWindow","type":"error"},{"inputs":[],"name":"OutOfTheCommunity","type":"error"},{"inputs":[],"name":"PrevPeriodNotEnded","type":"error"},{"inputs":[],"name":"ReentrancyGuardReentrantCall","type":"error"},{"inputs":[],"name":"SGMNotFullfilled","type":"error"},{"inputs":[],"name":"SamePeriod","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"SecretaryInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"SecretaryUnauthorizedSecretary","type":"error"},{"inputs":[],"name":"TimeNotPassed","type":"error"},{"inputs":[],"name":"TurningTimePassed","type":"error"},{"inputs":[],"name":"WLCAvailable","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"member","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"}],"name":"AddedToCommunity","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"pEndTime","type":"uint256"}],"name":"AdditionalDayAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"member","type":"address"},{"indexed":false,"internalType":"address","name":"approver","type":"address"},{"indexed":false,"internalType":"uint256","name":"groupId","type":"uint256"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApproveNewGroupMember","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"member","type":"address"},{"indexed":false,"internalType":"uint256","name":"groupId","type":"uint256"},{"indexed":false,"internalType":"bool","name":"joined","type":"bool"}],"name":"ApprovedGroupAssignment","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"member","type":"address"},{"indexed":false,"internalType":"uint256","name":"groupId","type":"uint256"},{"indexed":false,"internalType":"bool","name":"isReOrging","type":"bool"}],"name":"AssignedToSubGroup","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"member","type":"address"},{"indexed":false,"internalType":"uint256","name":"claimId","type":"uint256"}],"name":"ClaimSubmitted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"cId","type":"uint256"}],"name":"ClaimWhiteListed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"collapsedAt","type":"uint256"}],"name":"CommunityCollapsed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"coverage","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"basePremium","type":"uint256"}],"name":"CoverageUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"coverage","type":"uint256"}],"name":"DefaultStateInitiatedAndCoverageSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"emergencyStartedAt","type":"uint256"}],"name":"EmergencyBegan","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyPayment","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"secretary","type":"address"}],"name":"EmergencyhandOverSecretary","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"member","type":"address"},{"indexed":false,"internalType":"uint256","name":"groupId","type":"uint256"}],"name":"ExitedFromSubGroup","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"claimant","type":"address"},{"indexed":false,"internalType":"uint256","name":"claimId","type":"uint256"}],"name":"ForfeitClaim","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"totalClaimableAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"cAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"vmCount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"pmAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"pmShortAmount","type":"uint256"}],"name":"FundClaimFailed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"claimant","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"cId","type":"uint256"}],"name":"FundClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"FundInjected","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"member","type":"address"},{"indexed":false,"internalType":"uint256","name":"paidAmount","type":"uint256"}],"name":"JoinedToCommunity","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"member","type":"address"},{"indexed":false,"internalType":"uint256","name":"gId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"mId","type":"uint256"}],"name":"LeavedFromGroup","type":"event"},{"anonymous":false,"inputs":[],"name":"ManualCollapseCancelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"timee","type":"uint256"}],"name":"ManualCollapsedCancelled","type":"event"},{"anonymous":false,"inputs":[],"name":"ManualCollapsedHappenend","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"member","type":"address"},{"indexed":false,"internalType":"uint256","name":"periodId","type":"uint256"}],"name":"MemberDefected","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"member","type":"address"},{"indexed":false,"internalType":"enum TandaPayEvents.MemberStatus","name":"newStatus","type":"uint8"}],"name":"MemberStatusUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"periodId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"coverage","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"baseAmount","type":"uint256"}],"name":"NextPeriodInitiated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"member","type":"address"},{"indexed":false,"internalType":"uint256","name":"periodId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"bool","name":"usingATW","type":"bool"}],"name":"PremiumPaid","type":"event"},{"anonymous":false,"inputs":[],"name":"RefundIssued","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"member","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RefundWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"nSecretary","type":"address"}],"name":"SecretaryAccepted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"prefferedSuccessr","type":"address"}],"name":"SecretaryHandOverEnabled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address[]","name":"successors","type":"address[]"}],"name":"SecretarySuccessorsDefined","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"SecretaryTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"totalAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"pmAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"fromSecrretary","type":"uint256"}],"name":"ShortFallDivided","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"}],"name":"SubGroupCreated","type":"event"},{"inputs":[],"name":"EmergencyStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acceptSecretaryRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_member","type":"address"}],"name":"addMemberToCommunity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"advancePeriod","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_sId","type":"uint256"},{"internalType":"uint256","name":"_nMemberId","type":"uint256"},{"internalType":"bool","name":"_accepted","type":"bool"}],"name":"approveNewSubgroupMember","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_shouldJoin","type":"bool"}],"name":"approveSubgroupAssignment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_member","type":"address"},{"internalType":"uint256","name":"_sId","type":"uint256"},{"internalType":"bool","name":"_isReorging","type":"bool"}],"name":"assignMemberToSubgroup","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"beginEmergency","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"createSubgroup","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"defectFromCommunity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_successors","type":"address[]"}],"name":"defineSecretarySuccessorList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"divideShortfall","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyRefund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_eSecretary","type":"address"}],"name":"emergencySecretaryHandoff","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endEmergency","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"extendPeriodByOneDay","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getBasePremium","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCommunityState","outputs":[{"internalType":"enum TandaPay.CommunityStates","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentClaimId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentMemberId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentSubGroupId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getEmergencyHandOverStartedPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getEmergencyHandoverStartedAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getEmergencySecretaries","outputs":[{"internalType":"address[2]","name":"","type":"address[2]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getHandoverStartedAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pId","type":"uint256"}],"name":"getIsAMemberDefectedInPeriod","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pId","type":"uint256"}],"name":"getIsAllMemberNotPaidInPeriod","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getIsHandingOver","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_memberId","type":"uint256"},{"internalType":"uint256","name":"_pId","type":"uint256"}],"name":"getMemberInfoFromId","outputs":[{"components":[{"internalType":"uint256","name":"memberId","type":"uint256"},{"internalType":"uint256","name":"associatedGroupId","type":"uint256"},{"internalType":"address","name":"member","type":"address"},{"internalType":"uint256","name":"cEscrowAmount","type":"uint256"},{"internalType":"uint256","name":"ISEscorwAmount","type":"uint256"},{"internalType":"uint256","name":"pendingRefundAmount","type":"uint256"},{"internalType":"uint256","name":"availableToWithdraw","type":"uint256"},{"internalType":"bool","name":"eligibleForCoverageInPeriod","type":"bool"},{"internalType":"bool","name":"isPremiumPaid","type":"bool"},{"internalType":"uint256","name":"idToQuedRefundAmount","type":"uint256"},{"internalType":"enum TandaPayEvents.MemberStatus","name":"status","type":"uint8"},{"internalType":"enum TandaPay.AssignmentStatus","name":"assignment","type":"uint8"}],"internalType":"struct TandaPay.DemoMemberInfo","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_member","type":"address"}],"name":"getMemberToMemberId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_member","type":"address"},{"internalType":"uint256","name":"_pId","type":"uint256"}],"name":"getMemberToMemberInfo","outputs":[{"components":[{"internalType":"uint256","name":"memberId","type":"uint256"},{"internalType":"uint256","name":"associatedGroupId","type":"uint256"},{"internalType":"address","name":"member","type":"address"},{"internalType":"uint256","name":"cEscrowAmount","type":"uint256"},{"internalType":"uint256","name":"ISEscorwAmount","type":"uint256"},{"internalType":"uint256","name":"pendingRefundAmount","type":"uint256"},{"internalType":"uint256","name":"availableToWithdraw","type":"uint256"},{"internalType":"bool","name":"eligibleForCoverageInPeriod","type":"bool"},{"internalType":"bool","name":"isPremiumPaid","type":"bool"},{"internalType":"uint256","name":"idToQuedRefundAmount","type":"uint256"},{"internalType":"enum TandaPayEvents.MemberStatus","name":"status","type":"uint8"},{"internalType":"enum TandaPay.AssignmentStatus","name":"assignment","type":"uint8"}],"internalType":"struct TandaPay.DemoMemberInfo","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPaymentToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPeriodId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pId","type":"uint256"},{"internalType":"uint256","name":"_cId","type":"uint256"}],"name":"getPeriodIdToClaimIdToClaimInfo","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"claimant","type":"address"},{"internalType":"uint256","name":"claimAmount","type":"uint256"},{"internalType":"uint256","name":"SGId","type":"uint256"},{"internalType":"bool","name":"isWhitelistd","type":"bool"},{"internalType":"bool","name":"isClaimed","type":"bool"}],"internalType":"struct TandaPay.ClaimInfo","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pId","type":"uint256"}],"name":"getPeriodIdToClaimIds","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pId","type":"uint256"}],"name":"getPeriodIdToDefectorsId","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pId","type":"uint256"}],"name":"getPeriodIdToPeriodInfo","outputs":[{"components":[{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"willEndAt","type":"uint256"},{"internalType":"uint256[]","name":"claimIds","type":"uint256[]"},{"internalType":"uint256","name":"coverage","type":"uint256"},{"internalType":"uint256","name":"totalPaid","type":"uint256"}],"internalType":"struct TandaPay.PeriodInfo","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pId","type":"uint256"}],"name":"getPeriodIdWhiteListedClaims","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSecretarySuccessors","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_sId","type":"uint256"}],"name":"getSubGroupIdToSubGroupInfo","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address[]","name":"members","type":"address[]"},{"internalType":"bool","name":"isValid","type":"bool"}],"internalType":"struct TandaPay.SubGroupInfo","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalCoverage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getUpcomingSecretary","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_prefferedSuccessor","type":"address"}],"name":"handoverSecretaryRoleToSuccessor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_coverage","type":"uint256"}],"name":"initiateDefaultState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"injectFunds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_shouldTransfer","type":"bool"}],"name":"issueRefund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"joinCommunity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"leaveSubgroup","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_useFromATW","type":"bool"}],"name":"payPremium","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"secretary","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"submitClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_coverage","type":"uint256"}],"name":"updateCoverageAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"updateMemberStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cId","type":"uint256"}],"name":"whitelistClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"isForfeit","type":"bool"}],"name":"withdrawClaimFund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawRefund","outputs":[],"stateMutability":"nonpayable","type":"function"}],"devdoc":{"errors":{"ReentrancyGuardReentrantCall()":[{"details":"Unauthorized reentrant call."}]},"kind":"dev","methods":{"acceptSecretaryRole()":{"details":"Allows a designated successor to accept the Secretary role, completing the handover process."},"addMemberToCommunity(address)":{"details":"Adds a new member to the community","params":{"_member":"address of new member to add"}},"advancePeriod()":{"details":"Advances the community to the next period, resetting the state and recalculating premiums if necessary."},"approveNewSubgroupMember(uint256,uint256,bool)":{"details":"Allows existing subgroup members to approve or reject a new member\'s assignment to their subgroup.","params":{"_accepted":"true if accepted, false if rejecet","_nMemberId":"new member id","_sId":"subgroup id"}},"approveSubgroupAssignment(bool)":{"details":"Allows a member to approve or reject their assignment to a subgroup.","params":{"_shouldJoin":"true to approve assignment, false to reject"}},"assignMemberToSubgroup(address,uint256,bool)":{"details":"assign a member to a subgroup, with reorg option","params":{"_isReorging":"flag that decides if this operation is part of a reorganization process","_member":"address of new member to add","_sId":"subgroup Id"}},"beginEmergency()":{"details":"Secretary enters emergency state"},"createSubgroup()":{"details":"creates new subgroup"},"defectFromCommunity()":{"details":"Allows a member to defect from the community during the defect window, altering their status and potentially affecting the community\'s state."},"defineSecretarySuccessorList(address[])":{"details":"Defines a list of successor candidates for the Secretary role based on the community\'s size.only callable by secretary","params":{"_successors":"list of successors to the secretary"}},"divideShortfall()":{"details":"Divides any shortfall in coverage among the valid members during the injection window."},"emergencyRefund()":{"details":"emergency refund. Makes all funds refundable to members."},"emergencySecretaryHandoff(address)":{"details":"Facilitates an emergency handover of the Secretary role when two designated successors agree.","params":{"_eSecretary":"emergency successor address"}},"emergencyWithdraw(address,uint256)":{"details":"Secretary sends out emergency funding","params":{"amount":"amount of tokens to send","to":"the address to send emergency fund"}},"endEmergency()":{"details":"Secretary Ends Emergency, collapses community"},"extendPeriodByOneDay()":{"details":"Extends the current period by adding an extra day."},"getBasePremium()":{"details":"returns the base premium"},"getCommunityState()":{"details":"returns community states"},"getCurrentClaimId()":{"details":"returns the most recent claim Id"},"getCurrentMemberId()":{"details":"returns the most recent memberId"},"getCurrentSubGroupId()":{"details":"returns the most recent subGroupId"},"getIsAMemberDefectedInPeriod(uint256)":{"details":"returns flag if member has defected at a give period","params":{"_pId":"period Id"}},"getIsAllMemberNotPaidInPeriod(uint256)":{"details":"returns flag whether all members in a period have paid","params":{"_pId":"period Id"}},"getMemberToMemberId(address)":{"details":"returns the member Id","params":{"_member":"user address"}},"getMemberToMemberInfo(address,uint256)":{"details":"returns member info from address and member Id","params":{"_member":"user address","_pId":"member Id"}},"getPaymentToken()":{"details":"returns the address of the payment token"},"getPeriodId()":{"details":"returns the most recent period Id"},"getPeriodIdToClaimIdToClaimInfo(uint256,uint256)":{"details":"returns claim info based on period and claim Id","params":{"_cId":"claim Id (specific to period)","_pId":"period Id"}},"getPeriodIdToClaimIds(uint256)":{"details":"returns array of claim Ids per period","params":{"_pId":"period Id"}},"getPeriodIdToDefectorsId(uint256)":{"details":"returns array of defectors IDs per period","params":{"_pId":"period Id"}},"getPeriodIdToPeriodInfo(uint256)":{"details":"returns period information","params":{"_pId":"period Id"}},"getPeriodIdWhiteListedClaims(uint256)":{"details":"returns array of whitelisted claimIds per period","params":{"_pId":"period Id"}},"getSubGroupIdToSubGroupInfo(uint256)":{"details":"returns subgroup information","params":{"_sId":"id of the subgroup"}},"getTotalCoverage()":{"details":"returns the total coverage"},"handoverSecretaryRoleToSuccessor(address)":{"details":"Initiates the handover process for the Secretary role to a preferred successor.only callable by secretary","params":{"_prefferedSuccessor":"address to be the new secretary"}},"initiateDefaultState(uint256)":{"details":"Transitions the community from INITIALIZATION to DEFAULT state and sets the total coverage amount.","params":{"_coverage":"amount of coverage"}},"injectFunds()":{"details":"Allows the Secretary to inject additional funds into the contract during the injection window to cover a shortfall."},"issueRefund(bool)":{"details":"Issues refunds to members during the refund window, optionally transferring the funds directly to the members.","params":{"_shouldTransfer":"whether refunds should be transferred to users or not"}},"joinCommunity()":{"details":"allows members (msg.sender) to join the community"},"leaveSubgroup()":{"details":"Allows a member to leave their subgroup, resetting their status and adjusting the subgroup\'s validity."},"payPremium(bool)":{"details":"Allows a member to pay their premium for the upcoming period, either from their available withdrawal balance or directly via transfer.","params":{"_useFromATW":"if true, pay from available balance, if false, must pay with token."}},"submitClaim()":{"details":"Allows a member to submit a claim during the claim submission window."},"updateCoverageAmount(uint256)":{"details":"Updates the total coverage amount for the community and recalculates the base premium accordingly.only callable by secretary","params":{"_coverage":"amount of coverage to assign"}},"updateMemberStatus()":{"details":"Updates the status of all members based on their premium payment status and the current community state."},"whitelistClaim(uint256)":{"details":"Whitelists a claim during the designated whitelist window, making it eligible for further processing.","params":{"_cId":"the claim id"}},"withdrawClaimFund(bool)":{"details":"Allows a member to withdraw their claim fund, either fully or forfeiting it, depending on the provided flag.","params":{"isForfeit":"allows member to choose to leave their claim instead"}},"withdrawRefund()":{"details":"Allows a member to withdraw their available refund amount."}},"version":1},"userdoc":{"kind":"user","methods":{"addMemberToCommunity(address)":{"notice":"only secretary can call"},"advancePeriod()":{"notice":"only secretary can call"},"approveNewSubgroupMember(uint256,uint256,bool)":{"notice":"new member must have \\"REORGED\\" status"},"assignMemberToSubgroup(address,uint256,bool)":{"notice":"only secretary can call"},"beginEmergency()":{"notice":"only secretary can call"},"createSubgroup()":{"notice":"only secretary can call"},"defectFromCommunity()":{"notice":"defecting can only happen if a claim occured in the previous period"},"divideShortfall()":{"notice":"only secretary can call"},"emergencyWithdraw(address,uint256)":{"notice":"only secretary can callcan only be called if 24 hours elapses post-emergency declaration"},"endEmergency()":{"notice":"only secretary can callcan only be called if 24 hours elapses post-emergency declaration"},"extendPeriodByOneDay()":{"notice":"only secretary can call"},"initiateDefaultState(uint256)":{"notice":"Can only be called by secretary"},"injectFunds()":{"notice":"only secretary can call"},"joinCommunity()":{"notice":"Can only join if community status is \\"DEFAULT\\""},"leaveSubgroup()":{"notice":"Removes the member from the subgroup, updates their eligibility and escrow amounts, and potentially invalidates the subgroup."},"payPremium(bool)":{"notice":"Validates the payment window, calculates the required payment, and updates the member\'s escrow amounts and eligibility for coverage in the next period."},"updateCoverageAmount(uint256)":{"notice":"can only update if community is not default or initializing"},"whitelistClaim(uint256)":{"notice":"only callable by secretary"}},"version":1}},"settings":{"compilationTarget":{"src/TandaPay.sol":"TandaPay"},"evmVersion":"shanghai","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":true,"runs":200},"remappings":[":@openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/",":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",":aave-v3-core/=lib/aave-v3-core/",":ds-test/=lib/solmate/lib/ds-test/src/",":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",":forge-std/=lib/forge-std/src/",":halmos-cheatcodes/=lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/",":openzeppelin-contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/",":openzeppelin-contracts/=lib/openzeppelin-contracts/",":solmate/=lib/solmate/src/"],"viaIR":true},"sources":{"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol":{"keccak256":"0xe06a3f08a987af6ad2e1c1e774405d4fe08f1694b67517438b467cecf0da0ef7","license":"MIT","urls":["bzz-raw://df6f0c459663c9858b6cba2cda1d14a7d05a985bed6d2de72bd8e78c25ee79db","dweb:/ipfs/QmeTTxZ7qVk9rjEv2R4CpCwdf8UMCcRqDNMvzNxHc3Fnn9"]},"lib/openzeppelin-contracts/contracts/utils/Context.sol":{"keccak256":"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2","license":"MIT","urls":["bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12","dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF"]},"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol":{"keccak256":"0x11a5a79827df29e915a12740caf62fe21ebe27c08c9ae3e09abe9ee3ba3866d3","license":"MIT","urls":["bzz-raw://3cf0c69ab827e3251db9ee6a50647d62c90ba580a4d7bbff21f2bea39e7b2f4a","dweb:/ipfs/QmZiKwtKU1SBX4RGfQtY7PZfiapbbu6SZ9vizGQD9UHjRA"]},"src/TandaPay.sol":{"keccak256":"0x2f3ad68fe71894809a4ebbda64d647ee0d639ce94739ce1daa9d0b7991bcc4be","license":"MIT","urls":["bzz-raw://70cf0e32e82b06046f621e52085c56af19825c79a885595acc395ca419db7b2f","dweb:/ipfs/QmZ5MCZW4VNbYNMqGNPaxUJAS5p8gNr9tPCGxbFBaHPFRs"]},"src/secretary.sol":{"keccak256":"0x2ac557d1de7cdc2a09329fa9db6669f2a968fa5ff0302adab6d015ede832d995","license":"MIT","urls":["bzz-raw://7c596bcf17ba59430f594f69059666db9da5ced373f7bcadf3f1e8fc2718f706","dweb:/ipfs/QmR3fNu1X8oJ2dVPE41Pq8ZrUNZ9mSesGSoMUSsRZyq4HT"]},"src/util/TandaPayErrors.sol":{"keccak256":"0x5185d070d308719c6f50db5cb43e8426720acedb0eb94c0c8a9fb953e914de64","license":"MIT","urls":["bzz-raw://cf510382857b2574e70f4a83137ed6640ee1f94177407186ad2500d3c4ff0400","dweb:/ipfs/QmbZmNrrmm2cDvAaLk18oQfYhkhZ3sTcV4SXZdeiheHY1G"]},"src/util/TandaPayEvents.sol":{"keccak256":"0x9701311d9ca3c3fd051db8bca5e79093960d1963029ea14e07f82deaee6bda4d","license":"MIT","urls":["bzz-raw://127d95bdc72329a725af2262983e0bbca58963fa62b2956c990c686df10bc7fe","dweb:/ipfs/QmPSCXCAYcMREiqhApmm5eJK1QKrTGu53Y7cUdtaUW3yio"]}},"version":1}',
  metadata: {
    compiler: { version: "0.8.23+commit.f704f362" },
    language: "Solidity",
    output: {
      abi: [
        {
          inputs: [
            { internalType: "address", name: "_paymentToken", type: "address" },
            { internalType: "address", name: "owner", type: "address" },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        { inputs: [], type: "error", name: "AlreadyAdded" },
        { inputs: [], type: "error", name: "AlreadyClaimed" },
        { inputs: [], type: "error", name: "AlreadySet" },
        { inputs: [], type: "error", name: "AlreadySubmitted" },
        { inputs: [], type: "error", name: "AmountZero" },
        { inputs: [], type: "error", name: "CannotBeZeroAddress" },
        { inputs: [], type: "error", name: "CannotEmergencyRefund" },
        { inputs: [], type: "error", name: "ClaimNoOccured" },
        { inputs: [], type: "error", name: "ClaimantNotValidMember" },
        { inputs: [], type: "error", name: "CommunityIsCollapsed" },
        { inputs: [], type: "error", name: "CoverageFullfilled" },
        { inputs: [], type: "error", name: "DFNotMet" },
        { inputs: [], type: "error", name: "DelayInitiated" },
        { inputs: [], type: "error", name: "EmergencyGracePeriod" },
        { inputs: [], type: "error", name: "InEmergency" },
        { inputs: [], type: "error", name: "InValidClaim" },
        { inputs: [], type: "error", name: "InsufficientFunds" },
        { inputs: [], type: "error", name: "InvalidMember" },
        { inputs: [], type: "error", name: "InvalidSubGroup" },
        { inputs: [], type: "error", name: "ManuallyCollapsed" },
        { inputs: [], type: "error", name: "NeedMoreSuccessor" },
        { inputs: [], type: "error", name: "NoClaimOccured" },
        { inputs: [], type: "error", name: "NoValiddMember" },
        { inputs: [], type: "error", name: "NotAssignedYet" },
        { inputs: [], type: "error", name: "NotClaimSubmittionWindow" },
        { inputs: [], type: "error", name: "NotClaimWindow" },
        { inputs: [], type: "error", name: "NotClaimant" },
        { inputs: [], type: "error", name: "NotDefectWindow" },
        { inputs: [], type: "error", name: "NotFirstSuccessor" },
        { inputs: [], type: "error", name: "NotHandingOver" },
        { inputs: [], type: "error", name: "NotInAssigned" },
        { inputs: [], type: "error", name: "NotInAssignmentSuccessfull" },
        { inputs: [], type: "error", name: "NotInCovereged" },
        { inputs: [], type: "error", name: "NotInDefOrFra" },
        { inputs: [], type: "error", name: "NotInEmergency" },
        { inputs: [], type: "error", name: "NotInInDefault" },
        { inputs: [], type: "error", name: "NotInIniOrDef" },
        { inputs: [], type: "error", name: "NotInInitilization" },
        { inputs: [], type: "error", name: "NotInInjectionWindow" },
        { inputs: [], type: "error", name: "NotInManualCollaps" },
        { inputs: [], type: "error", name: "NotInSuccessorList" },
        { inputs: [], type: "error", name: "NotIncluded" },
        { inputs: [], type: "error", name: "NotPaidInvalid" },
        { inputs: [], type: "error", name: "NotPayWindow" },
        { inputs: [], type: "error", name: "NotRefundWindow" },
        { inputs: [], type: "error", name: "NotReorged" },
        { inputs: [], type: "error", name: "NotValidMember" },
        { inputs: [], type: "error", name: "NotWhiteListed" },
        { inputs: [], type: "error", name: "NotWhitelistWindow" },
        { inputs: [], type: "error", name: "OutOfTheCommunity" },
        { inputs: [], type: "error", name: "PrevPeriodNotEnded" },
        { inputs: [], type: "error", name: "ReentrancyGuardReentrantCall" },
        { inputs: [], type: "error", name: "SGMNotFullfilled" },
        { inputs: [], type: "error", name: "SamePeriod" },
        {
          inputs: [{ internalType: "address", name: "owner", type: "address" }],
          type: "error",
          name: "SecretaryInvalidOwner",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
          ],
          type: "error",
          name: "SecretaryUnauthorizedSecretary",
        },
        { inputs: [], type: "error", name: "TimeNotPassed" },
        { inputs: [], type: "error", name: "TurningTimePassed" },
        { inputs: [], type: "error", name: "WLCAvailable" },
        {
          inputs: [
            {
              internalType: "address",
              name: "member",
              type: "address",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "AddedToCommunity",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "pEndTime",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "AdditionalDayAdded",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "member",
              type: "address",
              indexed: false,
            },
            {
              internalType: "address",
              name: "approver",
              type: "address",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "groupId",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "bool",
              name: "approved",
              type: "bool",
              indexed: false,
            },
          ],
          type: "event",
          name: "ApproveNewGroupMember",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "member",
              type: "address",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "groupId",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "bool",
              name: "joined",
              type: "bool",
              indexed: false,
            },
          ],
          type: "event",
          name: "ApprovedGroupAssignment",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "member",
              type: "address",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "groupId",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "bool",
              name: "isReOrging",
              type: "bool",
              indexed: false,
            },
          ],
          type: "event",
          name: "AssignedToSubGroup",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "member",
              type: "address",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "claimId",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "ClaimSubmitted",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "cId",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "ClaimWhiteListed",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "collapsedAt",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "CommunityCollapsed",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "coverage",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "basePremium",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "CoverageUpdated",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "coverage",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "DefaultStateInitiatedAndCoverageSet",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "emergencyStartedAt",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "EmergencyBegan",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "EmergencyPayment",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "secretary",
              type: "address",
              indexed: false,
            },
          ],
          type: "event",
          name: "EmergencyhandOverSecretary",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "member",
              type: "address",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "groupId",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "ExitedFromSubGroup",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "claimant",
              type: "address",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "claimId",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "ForfeitClaim",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "totalClaimableAmount",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "cAmount",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "vmCount",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "pmAmount",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "pmShortAmount",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "FundClaimFailed",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "claimant",
              type: "address",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "cId",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "FundClaimed",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "FundInjected",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "member",
              type: "address",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "paidAmount",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "JoinedToCommunity",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "member",
              type: "address",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "gId",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "mId",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "LeavedFromGroup",
          anonymous: false,
        },
        {
          inputs: [],
          type: "event",
          name: "ManualCollapseCancelled",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "timee",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "ManualCollapsedCancelled",
          anonymous: false,
        },
        {
          inputs: [],
          type: "event",
          name: "ManualCollapsedHappenend",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "member",
              type: "address",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "periodId",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "MemberDefected",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "member",
              type: "address",
              indexed: false,
            },
            {
              internalType: "enum TandaPayEvents.MemberStatus",
              name: "newStatus",
              type: "uint8",
              indexed: false,
            },
          ],
          type: "event",
          name: "MemberStatusUpdated",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "periodId",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "coverage",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "baseAmount",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "NextPeriodInitiated",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "member",
              type: "address",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "periodId",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "bool",
              name: "usingATW",
              type: "bool",
              indexed: false,
            },
          ],
          type: "event",
          name: "PremiumPaid",
          anonymous: false,
        },
        { inputs: [], type: "event", name: "RefundIssued", anonymous: false },
        {
          inputs: [
            {
              internalType: "address",
              name: "member",
              type: "address",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "RefundWithdrawn",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "nSecretary",
              type: "address",
              indexed: false,
            },
          ],
          type: "event",
          name: "SecretaryAccepted",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "prefferedSuccessr",
              type: "address",
              indexed: false,
            },
          ],
          type: "event",
          name: "SecretaryHandOverEnabled",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "address[]",
              name: "successors",
              type: "address[]",
              indexed: false,
            },
          ],
          type: "event",
          name: "SecretarySuccessorsDefined",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "previousOwner",
              type: "address",
              indexed: true,
            },
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
              indexed: true,
            },
          ],
          type: "event",
          name: "SecretaryTransferred",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "totalAmount",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "pmAmount",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "fromSecrretary",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "ShortFallDivided",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "SubGroupCreated",
          anonymous: false,
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "EmergencyStartTime",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        },
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "function",
          name: "acceptSecretaryRole",
        },
        {
          inputs: [
            { internalType: "address", name: "_member", type: "address" },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "addMemberToCommunity",
        },
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "function",
          name: "advancePeriod",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_sId", type: "uint256" },
            { internalType: "uint256", name: "_nMemberId", type: "uint256" },
            { internalType: "bool", name: "_accepted", type: "bool" },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "approveNewSubgroupMember",
        },
        {
          inputs: [{ internalType: "bool", name: "_shouldJoin", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
          name: "approveSubgroupAssignment",
        },
        {
          inputs: [
            { internalType: "address", name: "_member", type: "address" },
            { internalType: "uint256", name: "_sId", type: "uint256" },
            { internalType: "bool", name: "_isReorging", type: "bool" },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "assignMemberToSubgroup",
        },
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "function",
          name: "beginEmergency",
        },
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "function",
          name: "createSubgroup",
        },
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "function",
          name: "defectFromCommunity",
        },
        {
          inputs: [
            {
              internalType: "address[]",
              name: "_successors",
              type: "address[]",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "defineSecretarySuccessorList",
        },
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "function",
          name: "divideShortfall",
        },
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "function",
          name: "emergencyRefund",
        },
        {
          inputs: [
            { internalType: "address", name: "_eSecretary", type: "address" },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "emergencySecretaryHandoff",
        },
        {
          inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "emergencyWithdraw",
        },
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "function",
          name: "endEmergency",
        },
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "function",
          name: "extendPeriodByOneDay",
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "getBasePremium",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "getCommunityState",
          outputs: [
            {
              internalType: "enum TandaPay.CommunityStates",
              name: "",
              type: "uint8",
            },
          ],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "getCurrentClaimId",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "getCurrentMemberId",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "getCurrentSubGroupId",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "getEmergencyHandOverStartedPeriod",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "getEmergencyHandoverStartedAt",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "getEmergencySecretaries",
          outputs: [
            { internalType: "address[2]", name: "", type: "address[2]" },
          ],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "getHandoverStartedAt",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        },
        {
          inputs: [{ internalType: "uint256", name: "_pId", type: "uint256" }],
          stateMutability: "view",
          type: "function",
          name: "getIsAMemberDefectedInPeriod",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
        },
        {
          inputs: [{ internalType: "uint256", name: "_pId", type: "uint256" }],
          stateMutability: "view",
          type: "function",
          name: "getIsAllMemberNotPaidInPeriod",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "getIsHandingOver",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
        },
        {
          inputs: [
            { internalType: "uint256", name: "_memberId", type: "uint256" },
            { internalType: "uint256", name: "_pId", type: "uint256" },
          ],
          stateMutability: "view",
          type: "function",
          name: "getMemberInfoFromId",
          outputs: [
            {
              internalType: "struct TandaPay.DemoMemberInfo",
              name: "",
              type: "tuple",
              components: [
                { internalType: "uint256", name: "memberId", type: "uint256" },
                {
                  internalType: "uint256",
                  name: "associatedGroupId",
                  type: "uint256",
                },
                { internalType: "address", name: "member", type: "address" },
                {
                  internalType: "uint256",
                  name: "cEscrowAmount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "ISEscorwAmount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "pendingRefundAmount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "availableToWithdraw",
                  type: "uint256",
                },
                {
                  internalType: "bool",
                  name: "eligibleForCoverageInPeriod",
                  type: "bool",
                },
                { internalType: "bool", name: "isPremiumPaid", type: "bool" },
                {
                  internalType: "uint256",
                  name: "idToQuedRefundAmount",
                  type: "uint256",
                },
                {
                  internalType: "enum TandaPayEvents.MemberStatus",
                  name: "status",
                  type: "uint8",
                },
                {
                  internalType: "enum TandaPay.AssignmentStatus",
                  name: "assignment",
                  type: "uint8",
                },
              ],
            },
          ],
        },
        {
          inputs: [
            { internalType: "address", name: "_member", type: "address" },
          ],
          stateMutability: "view",
          type: "function",
          name: "getMemberToMemberId",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        },
        {
          inputs: [
            { internalType: "address", name: "_member", type: "address" },
            { internalType: "uint256", name: "_pId", type: "uint256" },
          ],
          stateMutability: "view",
          type: "function",
          name: "getMemberToMemberInfo",
          outputs: [
            {
              internalType: "struct TandaPay.DemoMemberInfo",
              name: "",
              type: "tuple",
              components: [
                { internalType: "uint256", name: "memberId", type: "uint256" },
                {
                  internalType: "uint256",
                  name: "associatedGroupId",
                  type: "uint256",
                },
                { internalType: "address", name: "member", type: "address" },
                {
                  internalType: "uint256",
                  name: "cEscrowAmount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "ISEscorwAmount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "pendingRefundAmount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "availableToWithdraw",
                  type: "uint256",
                },
                {
                  internalType: "bool",
                  name: "eligibleForCoverageInPeriod",
                  type: "bool",
                },
                { internalType: "bool", name: "isPremiumPaid", type: "bool" },
                {
                  internalType: "uint256",
                  name: "idToQuedRefundAmount",
                  type: "uint256",
                },
                {
                  internalType: "enum TandaPayEvents.MemberStatus",
                  name: "status",
                  type: "uint8",
                },
                {
                  internalType: "enum TandaPay.AssignmentStatus",
                  name: "assignment",
                  type: "uint8",
                },
              ],
            },
          ],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "getPaymentToken",
          outputs: [{ internalType: "address", name: "", type: "address" }],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "getPeriodId",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        },
        {
          inputs: [
            { internalType: "uint256", name: "_pId", type: "uint256" },
            { internalType: "uint256", name: "_cId", type: "uint256" },
          ],
          stateMutability: "view",
          type: "function",
          name: "getPeriodIdToClaimIdToClaimInfo",
          outputs: [
            {
              internalType: "struct TandaPay.ClaimInfo",
              name: "",
              type: "tuple",
              components: [
                { internalType: "uint256", name: "id", type: "uint256" },
                { internalType: "address", name: "claimant", type: "address" },
                {
                  internalType: "uint256",
                  name: "claimAmount",
                  type: "uint256",
                },
                { internalType: "uint256", name: "SGId", type: "uint256" },
                { internalType: "bool", name: "isWhitelistd", type: "bool" },
                { internalType: "bool", name: "isClaimed", type: "bool" },
              ],
            },
          ],
        },
        {
          inputs: [{ internalType: "uint256", name: "_pId", type: "uint256" }],
          stateMutability: "view",
          type: "function",
          name: "getPeriodIdToClaimIds",
          outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
        },
        {
          inputs: [{ internalType: "uint256", name: "_pId", type: "uint256" }],
          stateMutability: "view",
          type: "function",
          name: "getPeriodIdToDefectorsId",
          outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
        },
        {
          inputs: [{ internalType: "uint256", name: "_pId", type: "uint256" }],
          stateMutability: "view",
          type: "function",
          name: "getPeriodIdToPeriodInfo",
          outputs: [
            {
              internalType: "struct TandaPay.PeriodInfo",
              name: "",
              type: "tuple",
              components: [
                { internalType: "uint256", name: "startedAt", type: "uint256" },
                { internalType: "uint256", name: "willEndAt", type: "uint256" },
                {
                  internalType: "uint256[]",
                  name: "claimIds",
                  type: "uint256[]",
                },
                { internalType: "uint256", name: "coverage", type: "uint256" },
                { internalType: "uint256", name: "totalPaid", type: "uint256" },
              ],
            },
          ],
        },
        {
          inputs: [{ internalType: "uint256", name: "_pId", type: "uint256" }],
          stateMutability: "view",
          type: "function",
          name: "getPeriodIdWhiteListedClaims",
          outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "getSecretarySuccessors",
          outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
        },
        {
          inputs: [{ internalType: "uint256", name: "_sId", type: "uint256" }],
          stateMutability: "view",
          type: "function",
          name: "getSubGroupIdToSubGroupInfo",
          outputs: [
            {
              internalType: "struct TandaPay.SubGroupInfo",
              name: "",
              type: "tuple",
              components: [
                { internalType: "uint256", name: "id", type: "uint256" },
                {
                  internalType: "address[]",
                  name: "members",
                  type: "address[]",
                },
                { internalType: "bool", name: "isValid", type: "bool" },
              ],
            },
          ],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "getTotalCoverage",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "getUpcomingSecretary",
          outputs: [{ internalType: "address", name: "", type: "address" }],
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_prefferedSuccessor",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "handoverSecretaryRoleToSuccessor",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_coverage", type: "uint256" },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "initiateDefaultState",
        },
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "function",
          name: "injectFunds",
        },
        {
          inputs: [
            { internalType: "bool", name: "_shouldTransfer", type: "bool" },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "issueRefund",
        },
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "function",
          name: "joinCommunity",
        },
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "function",
          name: "leaveSubgroup",
        },
        {
          inputs: [{ internalType: "bool", name: "_useFromATW", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
          name: "payPremium",
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "secretary",
          outputs: [{ internalType: "address", name: "", type: "address" }],
        },
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "function",
          name: "submitClaim",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_coverage", type: "uint256" },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "updateCoverageAmount",
        },
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "function",
          name: "updateMemberStatus",
        },
        {
          inputs: [{ internalType: "uint256", name: "_cId", type: "uint256" }],
          stateMutability: "nonpayable",
          type: "function",
          name: "whitelistClaim",
        },
        {
          inputs: [{ internalType: "bool", name: "isForfeit", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
          name: "withdrawClaimFund",
        },
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "function",
          name: "withdrawRefund",
        },
      ],
      devdoc: {
        kind: "dev",
        methods: {
          "acceptSecretaryRole()": {
            details:
              "Allows a designated successor to accept the Secretary role, completing the handover process.",
          },
          "addMemberToCommunity(address)": {
            details: "Adds a new member to the community",
            params: { _member: "address of new member to add" },
          },
          "advancePeriod()": {
            details:
              "Advances the community to the next period, resetting the state and recalculating premiums if necessary.",
          },
          "approveNewSubgroupMember(uint256,uint256,bool)": {
            details:
              "Allows existing subgroup members to approve or reject a new member's assignment to their subgroup.",
            params: {
              _accepted: "true if accepted, false if rejecet",
              _nMemberId: "new member id",
              _sId: "subgroup id",
            },
          },
          "approveSubgroupAssignment(bool)": {
            details:
              "Allows a member to approve or reject their assignment to a subgroup.",
            params: {
              _shouldJoin: "true to approve assignment, false to reject",
            },
          },
          "assignMemberToSubgroup(address,uint256,bool)": {
            details: "assign a member to a subgroup, with reorg option",
            params: {
              _isReorging:
                "flag that decides if this operation is part of a reorganization process",
              _member: "address of new member to add",
              _sId: "subgroup Id",
            },
          },
          "beginEmergency()": { details: "Secretary enters emergency state" },
          "createSubgroup()": { details: "creates new subgroup" },
          "defectFromCommunity()": {
            details:
              "Allows a member to defect from the community during the defect window, altering their status and potentially affecting the community's state.",
          },
          "defineSecretarySuccessorList(address[])": {
            details:
              "Defines a list of successor candidates for the Secretary role based on the community's size.only callable by secretary",
            params: { _successors: "list of successors to the secretary" },
          },
          "divideShortfall()": {
            details:
              "Divides any shortfall in coverage among the valid members during the injection window.",
          },
          "emergencyRefund()": {
            details: "emergency refund. Makes all funds refundable to members.",
          },
          "emergencySecretaryHandoff(address)": {
            details:
              "Facilitates an emergency handover of the Secretary role when two designated successors agree.",
            params: { _eSecretary: "emergency successor address" },
          },
          "emergencyWithdraw(address,uint256)": {
            details: "Secretary sends out emergency funding",
            params: {
              amount: "amount of tokens to send",
              to: "the address to send emergency fund",
            },
          },
          "endEmergency()": {
            details: "Secretary Ends Emergency, collapses community",
          },
          "extendPeriodByOneDay()": {
            details: "Extends the current period by adding an extra day.",
          },
          "getBasePremium()": { details: "returns the base premium" },
          "getCommunityState()": { details: "returns community states" },
          "getCurrentClaimId()": {
            details: "returns the most recent claim Id",
          },
          "getCurrentMemberId()": {
            details: "returns the most recent memberId",
          },
          "getCurrentSubGroupId()": {
            details: "returns the most recent subGroupId",
          },
          "getIsAMemberDefectedInPeriod(uint256)": {
            details: "returns flag if member has defected at a give period",
            params: { _pId: "period Id" },
          },
          "getIsAllMemberNotPaidInPeriod(uint256)": {
            details: "returns flag whether all members in a period have paid",
            params: { _pId: "period Id" },
          },
          "getMemberToMemberId(address)": {
            details: "returns the member Id",
            params: { _member: "user address" },
          },
          "getMemberToMemberInfo(address,uint256)": {
            details: "returns member info from address and member Id",
            params: { _member: "user address", _pId: "member Id" },
          },
          "getPaymentToken()": {
            details: "returns the address of the payment token",
          },
          "getPeriodId()": { details: "returns the most recent period Id" },
          "getPeriodIdToClaimIdToClaimInfo(uint256,uint256)": {
            details: "returns claim info based on period and claim Id",
            params: {
              _cId: "claim Id (specific to period)",
              _pId: "period Id",
            },
          },
          "getPeriodIdToClaimIds(uint256)": {
            details: "returns array of claim Ids per period",
            params: { _pId: "period Id" },
          },
          "getPeriodIdToDefectorsId(uint256)": {
            details: "returns array of defectors IDs per period",
            params: { _pId: "period Id" },
          },
          "getPeriodIdToPeriodInfo(uint256)": {
            details: "returns period information",
            params: { _pId: "period Id" },
          },
          "getPeriodIdWhiteListedClaims(uint256)": {
            details: "returns array of whitelisted claimIds per period",
            params: { _pId: "period Id" },
          },
          "getSubGroupIdToSubGroupInfo(uint256)": {
            details: "returns subgroup information",
            params: { _sId: "id of the subgroup" },
          },
          "getTotalCoverage()": { details: "returns the total coverage" },
          "handoverSecretaryRoleToSuccessor(address)": {
            details:
              "Initiates the handover process for the Secretary role to a preferred successor.only callable by secretary",
            params: { _prefferedSuccessor: "address to be the new secretary" },
          },
          "initiateDefaultState(uint256)": {
            details:
              "Transitions the community from INITIALIZATION to DEFAULT state and sets the total coverage amount.",
            params: { _coverage: "amount of coverage" },
          },
          "injectFunds()": {
            details:
              "Allows the Secretary to inject additional funds into the contract during the injection window to cover a shortfall.",
          },
          "issueRefund(bool)": {
            details:
              "Issues refunds to members during the refund window, optionally transferring the funds directly to the members.",
            params: {
              _shouldTransfer:
                "whether refunds should be transferred to users or not",
            },
          },
          "joinCommunity()": {
            details: "allows members (msg.sender) to join the community",
          },
          "leaveSubgroup()": {
            details:
              "Allows a member to leave their subgroup, resetting their status and adjusting the subgroup's validity.",
          },
          "payPremium(bool)": {
            details:
              "Allows a member to pay their premium for the upcoming period, either from their available withdrawal balance or directly via transfer.",
            params: {
              _useFromATW:
                "if true, pay from available balance, if false, must pay with token.",
            },
          },
          "submitClaim()": {
            details:
              "Allows a member to submit a claim during the claim submission window.",
          },
          "updateCoverageAmount(uint256)": {
            details:
              "Updates the total coverage amount for the community and recalculates the base premium accordingly.only callable by secretary",
            params: { _coverage: "amount of coverage to assign" },
          },
          "updateMemberStatus()": {
            details:
              "Updates the status of all members based on their premium payment status and the current community state.",
          },
          "whitelistClaim(uint256)": {
            details:
              "Whitelists a claim during the designated whitelist window, making it eligible for further processing.",
            params: { _cId: "the claim id" },
          },
          "withdrawClaimFund(bool)": {
            details:
              "Allows a member to withdraw their claim fund, either fully or forfeiting it, depending on the provided flag.",
            params: {
              isForfeit: "allows member to choose to leave their claim instead",
            },
          },
          "withdrawRefund()": {
            details:
              "Allows a member to withdraw their available refund amount.",
          },
        },
        version: 1,
      },
      userdoc: {
        kind: "user",
        methods: {
          "addMemberToCommunity(address)": {
            notice: "only secretary can call",
          },
          "advancePeriod()": { notice: "only secretary can call" },
          "approveNewSubgroupMember(uint256,uint256,bool)": {
            notice: 'new member must have "REORGED" status',
          },
          "assignMemberToSubgroup(address,uint256,bool)": {
            notice: "only secretary can call",
          },
          "beginEmergency()": { notice: "only secretary can call" },
          "createSubgroup()": { notice: "only secretary can call" },
          "defectFromCommunity()": {
            notice:
              "defecting can only happen if a claim occured in the previous period",
          },
          "divideShortfall()": { notice: "only secretary can call" },
          "emergencyWithdraw(address,uint256)": {
            notice:
              "only secretary can callcan only be called if 24 hours elapses post-emergency declaration",
          },
          "endEmergency()": {
            notice:
              "only secretary can callcan only be called if 24 hours elapses post-emergency declaration",
          },
          "extendPeriodByOneDay()": { notice: "only secretary can call" },
          "initiateDefaultState(uint256)": {
            notice: "Can only be called by secretary",
          },
          "injectFunds()": { notice: "only secretary can call" },
          "joinCommunity()": {
            notice: 'Can only join if community status is "DEFAULT"',
          },
          "leaveSubgroup()": {
            notice:
              "Removes the member from the subgroup, updates their eligibility and escrow amounts, and potentially invalidates the subgroup.",
          },
          "payPremium(bool)": {
            notice:
              "Validates the payment window, calculates the required payment, and updates the member's escrow amounts and eligibility for coverage in the next period.",
          },
          "updateCoverageAmount(uint256)": {
            notice:
              "can only update if community is not default or initializing",
          },
          "whitelistClaim(uint256)": { notice: "only callable by secretary" },
        },
        version: 1,
      },
    },
    settings: {
      remappings: [
        "@openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/",
        "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
        "aave-v3-core/=lib/aave-v3-core/",
        "ds-test/=lib/solmate/lib/ds-test/src/",
        "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
        "forge-std/=lib/forge-std/src/",
        "halmos-cheatcodes/=lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/",
        "openzeppelin-contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/",
        "openzeppelin-contracts/=lib/openzeppelin-contracts/",
        "solmate/=lib/solmate/src/",
      ],
      optimizer: { enabled: true, runs: 200 },
      metadata: { bytecodeHash: "ipfs" },
      compilationTarget: { "src/TandaPay.sol": "TandaPay" },
      evmVersion: "shanghai",
      libraries: {},
      viaIR: true,
    },
    sources: {
      "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
        keccak256:
          "0xe06a3f08a987af6ad2e1c1e774405d4fe08f1694b67517438b467cecf0da0ef7",
        urls: [
          "bzz-raw://df6f0c459663c9858b6cba2cda1d14a7d05a985bed6d2de72bd8e78c25ee79db",
          "dweb:/ipfs/QmeTTxZ7qVk9rjEv2R4CpCwdf8UMCcRqDNMvzNxHc3Fnn9",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
        keccak256:
          "0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2",
        urls: [
          "bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12",
          "dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol": {
        keccak256:
          "0x11a5a79827df29e915a12740caf62fe21ebe27c08c9ae3e09abe9ee3ba3866d3",
        urls: [
          "bzz-raw://3cf0c69ab827e3251db9ee6a50647d62c90ba580a4d7bbff21f2bea39e7b2f4a",
          "dweb:/ipfs/QmZiKwtKU1SBX4RGfQtY7PZfiapbbu6SZ9vizGQD9UHjRA",
        ],
        license: "MIT",
      },
      "src/TandaPay.sol": {
        keccak256:
          "0x2f3ad68fe71894809a4ebbda64d647ee0d639ce94739ce1daa9d0b7991bcc4be",
        urls: [
          "bzz-raw://70cf0e32e82b06046f621e52085c56af19825c79a885595acc395ca419db7b2f",
          "dweb:/ipfs/QmZ5MCZW4VNbYNMqGNPaxUJAS5p8gNr9tPCGxbFBaHPFRs",
        ],
        license: "MIT",
      },
      "src/secretary.sol": {
        keccak256:
          "0x2ac557d1de7cdc2a09329fa9db6669f2a968fa5ff0302adab6d015ede832d995",
        urls: [
          "bzz-raw://7c596bcf17ba59430f594f69059666db9da5ced373f7bcadf3f1e8fc2718f706",
          "dweb:/ipfs/QmR3fNu1X8oJ2dVPE41Pq8ZrUNZ9mSesGSoMUSsRZyq4HT",
        ],
        license: "MIT",
      },
      "src/util/TandaPayErrors.sol": {
        keccak256:
          "0x5185d070d308719c6f50db5cb43e8426720acedb0eb94c0c8a9fb953e914de64",
        urls: [
          "bzz-raw://cf510382857b2574e70f4a83137ed6640ee1f94177407186ad2500d3c4ff0400",
          "dweb:/ipfs/QmbZmNrrmm2cDvAaLk18oQfYhkhZ3sTcV4SXZdeiheHY1G",
        ],
        license: "MIT",
      },
      "src/util/TandaPayEvents.sol": {
        keccak256:
          "0x9701311d9ca3c3fd051db8bca5e79093960d1963029ea14e07f82deaee6bda4d",
        urls: [
          "bzz-raw://127d95bdc72329a725af2262983e0bbca58963fa62b2956c990c686df10bc7fe",
          "dweb:/ipfs/QmPSCXCAYcMREiqhApmm5eJK1QKrTGu53Y7cUdtaUW3yio",
        ],
        license: "MIT",
      },
    },
    version: 1,
  },
  id: 3,
} as const;
