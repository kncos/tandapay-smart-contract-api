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
      name: "AdvanceToTheNextPeriod",
      inputs: [],
      outputs: [],
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
      name: "EmergencyWithdrawal",
      inputs: [
        { name: "to", type: "address", internalType: "address" },
        { name: "amount", type: "uint256", internalType: "uint256" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "addAdditionalDay",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "addToCommunity",
      inputs: [{ name: "_member", type: "address", internalType: "address" }],
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
      name: "approveSubGroupAssignment",
      inputs: [{ name: "_shouldJoin", type: "bool", internalType: "bool" }],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "assignToSubGroup",
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
      name: "cancelManualCollapsBySecretary",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "createSubGroup",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "defects",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "defineSecretarySuccessor",
      inputs: [
        { name: "_successors", type: "address[]", internalType: "address[]" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "divideShortFall",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "emergencyHandOverSecretary",
      inputs: [
        { name: "_eSecretary", type: "address", internalType: "address" },
      ],
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
      name: "endEmergency",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "exitSubGroup",
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
      name: "getIsManuallyCollapsed",
      inputs: [],
      outputs: [{ name: "", type: "bool", internalType: "bool" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getManuallyCollapsedPeriod",
      inputs: [],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
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
      name: "getPeriodIdToManualCollapse",
      inputs: [{ name: "_pId", type: "uint256", internalType: "uint256" }],
      outputs: [
        {
          name: "",
          type: "tuple",
          internalType: "struct TandaPay.ManualCollapse",
          components: [
            { name: "startedAT", type: "uint256", internalType: "uint256" },
            {
              name: "availableToTurnTill",
              type: "uint256",
              internalType: "uint256",
            },
          ],
        },
      ],
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
      name: "handoverSecretary",
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
      name: "initiatDefaultStateAndSetCoverage",
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
      name: "joinToCommunity",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "leaveFromASubGroup",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "manualCollapsBySecretary",
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
      name: "secretaryAcceptance",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
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
      "0x608034620000ea57601f6200594a38819003918201601f19168301916001600160401b03831184841017620000ee578084926040948552833981010312620000ea5760206200004e8262000102565b916001600160a01b0391829162000066910162000102565b16908115620000d2575f549260018060a01b03199280848616175f558260405195167f688b8f34d886f8a2414b39aa6cef1ec6198215ba9b47fe8ac4260b44139bd5b65f80a360016009551690600a541617600a5560ff19601454166014556158329081620001188239f35b6040516351f49ec560e01b81525f6004820152602490fd5b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b51906001600160a01b0382168203620000ea5756fe60806040526004361015610011575f80fd5b5f3560e01c80630899fe41146149fc5780630a5b34f2146149cd578063110f8874146148c457806316bfe25c1461473d5780631afbd128146145535780631c35f9521461438a57806323d6711a146141fd578063263d083e146141e057806327bd3ef01461415257806339786a9614613d2e5780633a85bded14613d045780633e95f40214613c515780633f1b3f8f14613ae457806341bb0d1a14613a455780634ee9c6f7146139b65780634fcd291a146137cb57806350c8e1fd146136ab5780635228e916146134bf5780635495d2aa146134985780635c3ebd37146133e25780635d86b8e1146133c55780636564f43e1461334657806366199808146133175780636d4da76d146132ef57806372547ec914612f8957806372f833a814612f6c578063745092dd14612dcb57806374add0f314612cc2578063756b01b614612ad45780637985940d14612aab5780637b47d7e814612a8e5780637b55476d146129ae57806393f881d9146127865780639c6d24911461264d5780639d39089c146123595780639f2592b31461233c578063a0b34a301461231f578063a3d033e514612215578063a482b1021461214b578063a8fdb78814612040578063ac0fda831461201e578063ac115bbe14612001578063b0fdc3e414611f10578063b174a68d14611bdd578063c2a41da014611bbb578063c4afc37a14611897578063c66460e11461183d578063cb26c5f5146115a1578063cba47c26146113a9578063cc10a3aa1461138c578063d41c3a6514611364578063d6a5658f146110cc578063d8a77c6214610a9b578063d98b250314610a4c578063dbcd14f0146108eb578063e15d69f3146108ce578063e319ace914610896578063e329972d146107a8578063ea398bc11461076e578063ec15a890146105b0578063f34cf77514610593578063f3f02d03146102ef5763fef4c550146102ce575f80fd5b346102eb575f3660031901126102eb576020600854604051908152f35b5f80fd5b346102eb575f3660031901126102eb576014805460059160ff9182168381101561047e57600481146105815760031461056f5760015b600b546001810180911161050a5781101561056d57805f526020906016825260405f2091600a8301908582541691600c831015928361047e578015158061055f575b848161054e575b8161053d575b50610388575b505050506001915001610325565b60089283870194600e92835491825f528784528b60405f2054165f146104cc575050835460ff19166004178455505b888854168a81101561047e57600114806104b7575b610492575b88885416948a86101561047e576001977f732dc60c5d1b1df84f06b7e689c1024b7164003eeeded6276c17827b428734c89660409661043b958d9460028094149081610469575b50610445575b5050898060a01b0391015416935416908451938452830190614aef565ba18580808061037a565b60ff199182895416178855545f52600783018552875f209081541690558d8061041e565b905081545f52865284895f205416155f610418565b634e487b7160e01b5f52602160045260245ffd5b60ff1960068185541617845582545f5260078801825260405f209081541690556103d1565b5081545f528481528860405f205416156103cc565b61047e576004148061051e575b6104e4575b506103b7565b5f19810190811161050a575f52601e815260405f20600160ff198254161790558a6104de565b634e487b7160e01b5f52601160045260245ffd5b505f19810181811161050a575f52601e82528960405f205416156104d9565b905061047e57600981141584610374565b905061047e5760018114158461036e565b505f93506002811415610367565b005b60405163f856e0a560e01b8152600490fd5b6040516338f25eb760e21b8152600490fd5b346102eb575f3660031901126102eb576020600d54604051908152f35b346102eb576020806003193601126102eb57600435906105ce615667565b60ff60145416600581101561047e5760048114610581576003811461056f5760018114159081610762575b5061075057600e5491825f52601b825260405f20546213c680810180821161050a574211908115610746575b5061073457825f526018825260405f20815f52825260405f208054938285036107225760018201546001600160a01b03165f818152601a86526040808220548252601687529020600a015490919060ff16600c81101561047e57600414918215926106f2575b50506106e0577f3d37a493337dd24e7cb7bec23d4bde6447e3a1d6e75803de86dbf9f9b5732b849360046106d79201600160ff19825416179055600e545f526015845260405f20614d68565b604051908152a1005b6040516329ceba1160e11b8152600490fd5b9091505f52601a845260405f20545f5260168452600760405f2001905f52835260ff60405f20541615858061068b565b60405163e22b971160e01b8152600490fd5b604051633341b44560e11b8152600490fd5b9050421084610625565b604051637bf65ebd60e11b8152600490fd5b600291501415836105f9565b346102eb5760203660031901126102eb576004355f5260196020526107a461079860405f20614c48565b60405191829182614a26565b0390f35b346102eb576020806003193601126102eb575f60806040516107c981614c0a565b82815282848201526060604082015282606082015201526004355f52601b815260405f206040516107f981614c0a565b8154815260019260018301549281830193845261081860028201614c48565b9160408401928352600460038301549260608601938452015492608085019384526040519582875260c08701955183880152516040870152519360a0606087015284518091528160e087019501915f5b8281106108835784516080890152855160a089015287870388f35b8351875295810195928101928801610868565b346102eb5760203660031901126102eb576001600160a01b036108b7614a7f565b165f52601a602052602060405f2054604051908152f35b346102eb575f3660031901126102eb576020600754604051908152f35b346102eb5760603660031901126102eb57600435610907614a70565b60ff6014541691600583101561047e576004831461058157600380931461056f57805f52601760205260405f20916024355f52601660205260405f20600a81019485549460ff8616600c81101561047e57600703610a3b575f915f9060018093018054925b838110610a05575b5050505050156109f3577f5cf6fd140141a8a14aca1d538d93e40de68c6a776df311ae862a898ea2a660ef9460809483156109e35750805461ffff19166105041790555b60020154604080516001600160a01b03909216825233602083015281019290925215156060820152a1005b61ff0019166107001790556109b8565b604051633d76489160e01b8152600490fd5b610a0f8183614d53565b90543391851b1c6001600160a01b031614610a2b57840161096c565b5050505090508680808080610974565b60405162789f4360e21b8152600490fd5b346102eb5760203660031901126102eb57610a65614a61565b610a6d615644565b60ff60145416600581101561047e57600481146105815760031461056f57610a9490614f0a565b6001600955005b346102eb575f3660031901126102eb57610ab3615667565b60145460ff811690600582101561047e5760048214610581576003821461056f575f916001811415806110be575b61075057600e54801515806110a6575b61109457610afe90614cbd565b9283600e5561047e57600214610f9c575b505f52601b60205260405f20428155600f54610b90575b62278d00420180421161050a578160039160017f08a7ba25f6100ab18c633572926abf5bd6a45439a9322adee245bc3a9685efda940155600f549182910155600e54610b8b601054604051938493846040919493926060820195825260208201520152565b0390a1005b60ff60145416600581101561047e57600481146105815760031461056f5760015b600b546001810180911161050a57811015610deb57805f52601660205260405f209060ff600a83015416600c811015908161047e5780151580610ddd575b8281610dcc575b81610dbb575b50610c0e575b50506001915001610bb1565b600e5491825f526008850160205260ff60405f2054165f14610d5b57505050600a8201805460ff191660041790555b60ff60145416600581101561047e5760011480610d40575b610d13575b60ff6014541691600583101561047e5760407f732dc60c5d1b1df84f06b7e689c1024b7164003eeeded6276c17827b428734c89160026001951480610cf9575b610ccd575b610cc560ff600a878060a01b036002850154169301541683519283526020830190614aef565ba18380610c02565b60ff19600881600a8401541617600a830155600e545f5260078201602052825f20908154169055610c9f565b50600e545f526008810160205260ff825f20541615610c9a565b60ff19600681600a8501541617600a840155600e545f526007830160205260405f20908154169055610c5a565b50600e545f526008820160205260ff60405f20541615610c55565b61047e5760041480610d9a575b610d73575b50610c3d565b5f19810190811161050a575f52601e60205260405f20600160ff1982541617905583610d6d565b505f19810181811161050a575f52601e60205260ff60405f20541615610d68565b905061047e57600981141582610bfc565b905061047e57600181141582610bf6565b505f91506002811415610bef565b5060015b600c80546001810180911161050a57821015610ee057815f526017602052600160405f20018054600481109081610ed6575b50610e31575b5050600101610def565b90925f5b8254811015610eca57610e488184614d53565b60018060a01b0391549060031b1c165f52601a60205260405f20545f52601660205260405f2090600a82019182549260ff8416938885101561047e57600460019514610e98575b50505001610e35565b60089060ff1916179055600660038201915f835481610ebd6004850192835490614cb0565b9555550155868080610e8f565b50925050600183610e27565b9050151585610e21565b50505f90600190600b546001810180911192835b61050a5781811015610f4157805f52601660205260ff600a60405f20015416600c81101561047e57600414610f2d575b60010183610ef4565b93610f39600191614cbd565b949050610f24565b50509190506001600e5411610f57575b50610b26565b80610f885750600360ff1960145416176014555f805160206157dd8339815191526020604051428152a15b81610f51565b610f9490600f54614e68565b601055610f82565b5f19820182811161050a57805f526020601c815260ff60405f205416159182611071575b8261104e575b82611035575b5081611012575b81610fef575b5015610b0f5760ff191660011760145581610b0f565b6002198401915083821161050a57601e915f525260ff60405f2054161583610fd9565b9050600119830183811161050a575f52601e815260ff60405f2054161590610fd3565b9091505f52601e815260ff60405f205416159084610fcc565b9150600219840184811161050a575f52601c815260ff60405f2054161591610fc6565b9150600119840184811161050a575f52601c815260ff60405f2054161591610fc0565b6040516307318e9360e31b8152600490fd5b50805f52601b602052600160405f2001544210610af1565b505f92506002811415610ae1565b346102eb576020806003193601126102eb576004359067ffffffffffffffff8083116102eb57366023840112156102eb578260040135926024918411611350578360051b6040519461112085830187614c26565b85528284860191830101913683116102eb578301905b82821061133157505050611148615667565b60ff60145416600581101561131d5760031461056f57600b5490600c82101580611312575b156112e45760028451106112d257929190925b5f936001928184809301809111925b6111c4575b6040517f37624b43bc21d01bec4f033a1fb10552d28b406b1a68210476d53af5a7d4e68e9080610b8b8982614a95565b85518710156112cd575f85805b61124e575b50156109f3576001600160a01b036111ee8888614ef6565b5116968554600160401b81101561123b5790611233879899611215848a8096018655614cd8565b90919060018060a01b038084549260031b9316831b921b1916179055565b01969561118f565b85634e487b7160e01b5f5260416004525ffd5b84919498979596986112ba57828110156112ad576001600160a01b03806112758a89614ef6565b511690825f5260168652600260405f200154161461129f57969794969495949093908601866111d1565b5092508694939596886111d6565b97959496979390936111d6565b86634e487b7160e01b5f5260116004525ffd5b611194565b6040516350a01e1d60e11b8152600490fd5b602382116112f6575b92919092611180565b6006845110156112ed576040516350a01e1d60e11b8152600490fd5b50602382111561116d565b50634e487b7160e01b5f9081526021600452fd5b81356001600160a01b03811681036102eb578152908401908401611136565b50634e487b7160e01b5f9081526041600452fd5b346102eb575f3660031901126102eb57600a546040516001600160a01b039091168152602090f35b346102eb575f3660031901126102eb576020600f54604051908152f35b346102eb575f3660031901126102eb5760ff60145416600581101561047e57600481146105815760031461056f57335f52601a60205260405f20545f52601660205260405f20600181019081545f52601760205260405f209160018060a01b036002830154161561158f575f9055600a8101805460ff1916600517905561143260018301615747565b600e545f526007810160205260405f2060ff198154169055600381015f8154816114626004860192835490614cb0565b93555560069061147760068401918254614cb0565b905560046001840154106114d9575b50600281015491549054604080516001600160a01b0390941684526020840192909252908201527fed11cf2f685bc5fb16110aa145d0b495f9cfdc2ed33e03b9362d4bdc3fba262d908060608101610b8b565b60028301805460ff191690555f5b60018401548110156115675780611502600192838701614d53565b838060a01b0391549060031b1c165f52601a60205260405f20545f52601660205260405f20600a8101600560ff1982541617905561155f8460038301925f8454816115536004850192835490614cb0565b96555501918254614cb0565b9055016114e7565b50507fed11cf2f685bc5fb16110aa145d0b495f9cfdc2ed33e03b9362d4bdc3fba262d611486565b60405163092ebc6d60e31b8152600490fd5b346102eb575f3660031901126102eb5760ff8060145416600581101561047e57600481146105815760031461056f57335f526020601a815260405f20545f526016906016815260405f20906001928383019485545f526017835260405f206002850160018060a01b0397888254161561158f57600e54805f52601b875260405f20546203f480810180911161050a5742118015611829575b611817575f19810190811161050a575f526019865260405f20541561180557600a91600a8801998960099560ff199c8d81541660091790550161167b90615747565b82549154165f52601d875260405f20555f9055600e545f52601f855260405f2086546116a691614d68565b60038601805490600488019182546116bd91614cb0565b60058901555f90555f90556014549160ff8316600581101561047e57881461175e575b50505050506007601c92600e545f5201815260405f20848154169055600e545f525260405f2091825460ff811615611751575b600e546040805133815260208101929092527f188272a28ee264707f833eac91033ac3a9a04f67845e5a9034afc774a4a9603c919081908101610b8b565b1617905580808080611713565b600b54965f95909489939091898501808b11865b6117b6575b50505050505050600c850294808604600c149015171561050a57866007936064601c9704106117a8575b82956116e0565b1660021760145586866117a1565b8061050a578187101561180057865f52828b52848460405f2001541696600c88101561047e57868e98146117ed575b870196611772565b996117f88891614cbd565b9a90506117e5565b611777565b604051631f86a3f560e21b8152600490fd5b6040516379055d9d60e01b8152600490fd5b50805f52601b875260405f20544210611639565b346102eb576020806003193601126102eb57805f604092835161185f81614bee565b82815201526004355f52808052815f2090825161187b81614bee565b8160018454948584520154910190815283519283525190820152f35b346102eb5760203660031901126102eb576118b0614a61565b6118b8615644565b60ff60145416600581101561047e57600481146105815760031461056f57600e54805f52601b60205260405f205462054600810180911161050a5742118015611b99575b611b87575f19810190811161050a575f52601560205260405f2054611b7557600b5460015b60018201821161050a5760018201811015611b4a57805f52601660205260405f20906005820180549081611b3b575b5050600e546001811180611b1a575b80611b0d575b611a8e575b50600e5460038111611a33575b508380611a26575b61198e575b6001915001611921565b6006820180545f91829055600a5460029094015460405163a9059cbb60e01b81526001600160a01b039182166004820152602481019290925290936020928592604492849291165af1918215611a1b576001926119ec575b50611984565b611a0d9060203d602011611a14575b611a058183614c26565b810190614c98565b50846119e6565b503d6119fb565b6040513d5f823e3d90fd5b506006820154151561197f565b8060021981011161050a57600219015f526009820160205260405f2054801561197757611a6560068401918254614cb0565b9055600e548060021981011161050a57600219015f52600982016020525f604081205584611977565b60ff60145416600581101561047e576002149081611aee575b5015611adb57600382015f81549155600e54805f1981011161050a575f19015f526009830160205260405f20555b8461196a565b600382015f815491556006830155611ad5565b5f1981019150811161050a575f52601560205260405f20541585611aa7565b5060038301541515611965565b50805f1981011161050a575f1981015f52601560205260405f20541561195f565b5f905560068301558480611950565b7f01c9e927536754e1d95ea7a9eda17265ab11a240401b5926f33c0eb76c9d7f335f80a16001600955005b60405163fcb6f0ab60e01b8152600490fd5b60405163d53184ed60e01b8152600490fd5b50805f52601b60205260405f20546203f480810180911161050a5742106118fc565b346102eb575f3660031901126102eb57602060ff600554166040519015158152f35b346102eb5760203660031901126102eb57611bf6614a7f565b6001600160a01b0381811691908215611efe5760ff60145416600581101561047e57600380911461056f575f335f52601a60205260405f20548015159081611ed8575b50611ed0575b156109f3575f925f93600194858054915b828110611ea75750505015611e955781548316158080611e89575b80611e7c575b611e4f5715611ddd57600380546001600160a01b0319166001600160a01b0390921691909117905542600855600e546006555b818154169283151580611dd0575b611ce4575b7f882febe0458c27b4ed12caa22ad034f24f206e2da9aa922015eff66e45f2006b602086604051908152a1005b5f9492938460045416145f14611daf57611d0084835416615692565b8054825485165f5b828110611d88575050505b6001600160601b0360a01b8083541683556004541660045554935f19850194851161050a57611215602094611d7893611d6c7f882febe0458c27b4ed12caa22ad034f24f206e2da9aa922015eff66e45f2006b98614cd8565b9054911b1c1691614cd8565b611d80614d9c565b918380611cb7565b8187611d9383614cd8565b905490881b1c1614611da7575b8301611d08565b965086611da0565b9350611dc983611dbd614d21565b905490841b1c16615692565b5f93611d13565b5082600454161515611cb2565b60085462015180810180911161050a5780421080611e6f575b15611e14575050600480546001600160a01b03191685179055611ca4565b421180611e61575b15611e4f57600380546001600160a01b0319166001600160a01b0390921691909117905542600855600e54600655611ca4565b604051637787a74d60e01b8152600490fd5b50600654600e541415611e1c565b50600654600e5414611df6565b50600654600e5414611c71565b50836004541615611c6b565b6040516362c9b45b60e01b8152600490fd5b86611eb182614cd8565b905490881b1c168914611ec7575b018690611c50565b92508092611ebf565b506001611c3f565b90505f52601660205260ff600a60405f20015416600c81101561047e5760041486611c39565b604051631e7d738760e21b8152600490fd5b346102eb5760203660031901126102eb57611f29614a7f565b611f31615667565b60ff6014541690600582101561047e57600380921461056f576001600160a01b039081169182611fae575b7f9d35d6f02c23b682244e3ab27b9be76fa329228dd25ecfa1b9b9974d77c22a14602084806001600160601b0360a01b600254161760025542600755600160ff196005541617600555604051908152a1005b5f915f90600192600154925b838110611fd3575b5050505050156109f3578180611f5c565b82611fdd82614cd8565b905490841b1c168714611ff1578401611fba565b5050505090508280808080611fc2565b346102eb575f3660031901126102eb576020600654604051908152f35b346102eb575f3660031901126102eb57602060ff601254166040519015158152f35b346102eb576107a46120e661213960ff61205936614ad9565b90612062614e86565b505f52601660205260405f209080155f146121455750600e54905b80549160018201549060018060a01b0360028401541690600384015460048501546005860154916006870154935f52600787016020528860405f20541694600888016020528960405f2054169660098901602052600a60405f2054990154996040519d8e614bb5565b8d5260208d015260408c015260608b015260808a015260a089015260c0880152151560e0870152151561010086015261012085015261212b8282166101408601614ede565b60081c166101608301614eea565b60405191829182614afc565b9061207d565b346102eb576020806003193601126102eb575f6040805161216b81614bd2565b82815260608482015201526004355f526017815260405f2060405161218f81614bd2565b8154815260019260ff60026121a660018601614dfe565b9483850195865201541690604083019115158252604051938185526080850193518286015251926060604086015283518091528160a086019401915f5b8281106121f95784511515606088015286860387f35b83516001600160a01b03168652948101949281019287016121e3565b346102eb5760403660031901126102eb576107a4612231614a7f565b61213960ff602435612241614e86565b506001600160a01b039384165f908152601a60209081526040808320548352601682529091209091806123195750600e54945b81549560018301549160028401541690600384015460048501546005860154916006870154935f526007870188528860405f205416946008880189528960405f20541696600989018a52600a60405f2054990154996040519d8e6122d781614bb5565b528d015260408c015260608b015260808a015260a089015260c0880152151560e0870152151561010086015261012085015261212b8282166101408601614ede565b94612274565b346102eb575f3660031901126102eb576020600e54604051908152f35b346102eb575f3660031901126102eb576020600c54604051908152f35b346102eb575f3660031901126102eb57612371615644565b612379615667565b60ff8060145416600581101561047e57600481146105815760031461056f57600e546123a4816156d8565b6123ad8161571f565b5f526020601b815260405f2060036004820154910154908181101561263b576123d591614ccb565b5f905f600b5493600180860180961195865b61050a578082101561247b57815f526016835260405f209188600a8401541692600c84101561047e576004899414612424575b50600101916123e7565b94612430600491614cbd565b950154801561241a5790968015801580612472575b15612457575050600190965b9061241a565b90979150612468575b600190612451565b9495508594612460565b50818310612445565b9050859387958061248c8684614e68565b1015612635575061249d8482614e68565b935b5f926001875b61050a578181101561250a57805f526016865260405f209089600a8301541691600c83101561047e576004600193146124e1575b5001876124a5565b600401805489808210156124f7575b50506124d9565b61250091614ccb565b90558a80896124f0565b8487858886600e545f52601b8252600460405f200161252a848254614cb0565b9055826125378286614e55565b1061258b575b50506125817f39657cef6eb725e291a5e37fe8032a18477b98dd7abc4a03d93428153eff3d0393604051938493846040919493926060820195825260208201520152565b0390a16001600955005b6125a191945061259b9084614e55565b82614ccb565b600a546040516323b872dd60e01b8152336004820152306024820152604481018390529491908290869060649082905f906001600160a01b03165af1918215611a1b577f39657cef6eb725e291a5e37fe8032a18477b98dd7abc4a03d93428153eff3d039561258193612617575b50509361253d565b8161262d92903d10611a1457611a058183614c26565b50858061260f565b9361249f565b604051633958314d60e01b8152600490fd5b346102eb5760203660031901126102eb57612666614a7f565b60ff60145416600581101561047e576003811461056f57612685615667565b6004811461058157801515908161277a575b50612768576001600160a01b0381165f818152601a602052604090205490919061275657600a7f6041a3b674b81a0fecc93042cf89f30bf96db96073f1312e253264f8a5cceba3926126ea600b54614cbd565b600b8181555f828152601660209081526040808320858155868452601a835292819020949094556002820180546001600160a01b03191690951790945593909301805461ffff1916610101179055915482516001600160a01b0390941684529083015281908101610b8b565b60405163f411c32760e01b8152600490fd5b60405163897c9a9360e01b8152600490fd5b60019150141582612697565b346102eb5760603660031901126102eb5761279f614a7f565b6024356127aa614a70565b9160ff60145416600581101561047e576003811461056f576004906127cd615667565b1461058157815f52601760205260405f209260018060a01b03908183165f52601a60205260405f20545f52601660205260405f209185541561299c5760028301541691821561298a576001860192835490600160401b8210156129765761121582600161283d9401875586614d53565b811561293457600a81019586549360ff8516600c81101561047e57600503612922578660016002947fd23000da82104e78ccbf3c41c153eca50a357a80f2ae156096b8b1b43f36f2e19a6007610b8b9960ff19161790555b01555460048110159081612916575b50156128f65701805460ff8116156128e6575b50505b604080516001600160a01b03909416845260208401949094521515928201929092529081906060820190565b60ff1916600117905585806128b7565b01805460ff8116612909575b50506128ba565b60ff191690558580612902565b600791501115886128a4565b6040516333ddf1dd60e01b8152600490fd5b7fd23000da82104e78ccbf3c41c153eca50a357a80f2ae156096b8b1b43f36f2e195610b8b9386600184600a6002960161020061ff0019825416179055612895565b634e487b7160e01b5f52604160045260245ffd5b6040516339ec64c160e11b8152600490fd5b604051635ad439e560e11b8152600490fd5b346102eb576129bc36614ad9565b905f60a06040516129cc81614b99565b82815282602082015282604082015282606082015282608082015201525f52601860205260405f20905f5260205260c060405f2060405190612a0d82614b99565b80549182815260018060a01b03918260018201541692602083019384526002820154906040840191825260046003840154936060860194855201549460ff60a0608087019682891615158852019660081c161515865260405196875251166020860152516040850152516060840152511515608083015251151560a0820152f35b346102eb575f3660031901126102eb576020601154604051908152f35b346102eb575f3660031901126102eb5760ff60145416604051600582101561047e576020918152f35b346102eb575f3660031901126102eb57612aec615667565b60145460ff8116600581101561047e57600481146105815760031461056f5760ff191660041760145542601155612b21615644565b60ff60145416600581101561047e5760038114159081612cb6575b50612ca457600b546001905b60018101811161050a5760018101821015612c7357815f52601660205260405f2091612b99612b8e612b836003860154600487015490614cb0565b600586015490614cb0565b600685015490614cb0565b906003600e54115f14612c1f57600e546009850193925b600e54600219810190811161050a578211612bf857612bdb90825f528560205260405f205490614cb0565b90805f52846020525f6040812055801561050a575f190190612bb0565b91929460019450600691505b5f60038201555f60048201555f600582015501550190612b48565b91905f905b600e548211612c6557612c49612c5f91835f526009870160205260405f205490614cb0565b91805f52600986016020525f6040812055614cbd565b90612c24565b905060066001939294612c04565b60016009557fac72b0b13eb85909e8e5deeb2bb65c912e147d60cfd7284a17b85e0fe88fdae66020604051428152a1005b60405163a7c1043560e01b8152600490fd5b60049150141581612b3c565b346102eb576020806003193601126102eb5760043590612ce0615667565b60145460ff8116600581101561047e5760048114610581576003811461056f57612db957600b5491600c83108015612dad575b612d9b5760015b60048110612d6b577fe891dc01ac1296966aff69221063a5796adb4993741b159b043f7066e2923939602086612d5f8760018860ff19161760145582600f5582614e68565b601055604051908152a1005b805f52601782526004600160405f20015410612d8957600101612d1a565b6040516305a2d66760e11b8152600490fd5b60405163dd5d9ea160e01b8152600490fd5b506003600c5410612d13565b6040516305c3c4b960e41b8152600490fd5b346102eb575f3660031901126102eb57612de3615644565b60ff60145416600581101561047e576003811461056f576004811461058157600103612f5a57335f52601a60205260405f20545f52601660205260405f20600a810180549060ff8216600c81101561047e57600103612f485760105460148102908082046014148115171561050a576064612e5f920490614cb0565b600b810290808204600b149015171561050a57600c61030291049260048501612e89858254614cb0565b905561ffff1916179055600a546040516323b872dd60e01b815233600482015230602482015260448101839052926001600160a01b0391602090859060649082905f9087165af1908115611a1b577fa1036ac26bc1acfe7c0581273bb656a2426fb6f32067116729c8fad15a58bfc794600292612f29575b50015460408051929091166001600160a01b0316825260208201929092529081908101612581565b612f419060203d602011611a1457611a058183614c26565b5085612f01565b60405163991c8dc760e01b8152600490fd5b604051637250f10560e01b8152600490fd5b346102eb575f3660031901126102eb576020600b54604051908152f35b346102eb576020806003193601126102eb57600435612fa6615667565b60ff6014816014541690600591600581101561047e5760048114610581576003811461056f575f9080151590816132e0575b5061276857600f546130ae575b50505081600f555f9060018091600b548260018201809211905b613056575b7fd4116e5003fcbb3a549e4e271b1d73063c38f23828139309c6ac1ef0700a4a506040888a6130338a83614e68565b601055600e545f52601b8152816003845f200155601054908351928352820152a1005b8095949561050a57818610156130a657855f526016885282600a60405f20015416600c81101561047e57600414613093575b838095960194612fff565b8361309e8196614cbd565b955050613088565b849550613004565b949092919461047e5760015b600b546001810180911161050a578110156132d357805f526016825260405f2090600a820184815416600c811015918261047e57811515806132c5575b83816132b4575b816132a3575b50613117575b50505060019150016130ba565b60089182860193600e91825491825f52868a528a60405f2054165f14613246575050825460ff19166004178355505b878954168b81101561047e5760011480613231575b61320c575b87895416938b85101561047e576001967f732dc60c5d1b1df84f06b7e689c1024b7164003eeeded6276c17827b428734c8956040956131ca948c94600280941490816131f7575b506131d3575b5050888060a01b0391015416925416835192835287830190614aef565ba187808061310a565b60ff199182885416178755545f52600783018b52865f209081541690558e806131ad565b905081545f528c5284885f205416155f6131a7565b60ff1960068184541617835581545f5260078701885260405f20908154169055613160565b5080545f528387528760405f2054161561315b565b61047e5760041480613284575b61325e575b50613146565b5f19810190811161050a575f52601e875260405f20600160ff198254161790558b613258565b505f19810181811161050a575f52601e88528860405f20541615613253565b905061047e57600982141583613104565b905061047e576001821415836130fe565b505f925060028214156130f7565b5093509050838080612fe5565b91505060015f91141587612fd8565b346102eb575f3660031901126102eb576002546040516001600160a01b039091168152602090f35b346102eb5760203660031901126102eb576004355f52601e602052602060ff60405f2054166040519015158152f35b346102eb575f3660031901126102eb5760ff60145416600581101561047e576003811461056f57600490613378615667565b14610581577f3b88d52dc51aa53d344c3581f44ecf26dd6a764b15cd0e86e576d816c283616360206133ab600c54614cbd565b80600c55805f52601782528060405f2055604051908152a1005b346102eb575f3660031901126102eb576020601054604051908152f35b346102eb575f3660031901126102eb576133fa615667565b60145460ff8116600581101561047e576003811461056f576004146105815760039060ff199060018260125416176012551617601455600e54806013555f52602080524260405f2055600e54805f52601b602052600160405f2001549062054600820180921161050a575f5260208052600160405f2001557f94cdef44deba8207a5c8b2a712e9b86ffc190fb1451b76b0821312442b782d1e5f80a1005b346102eb575f3660031901126102eb575f546040516001600160a01b039091168152602090f35b346102eb575f3660031901126102eb5760ff6014541660058082101561047e576004821461058157600380921461056f57335f52601a906020601a815260405f20545f526016906016815260405f20926001928385019283548015613699575f526017815260405f20965f945f95878a0196888854915b828110613661575b505050156109f3575f9061355187615747565b600e54825260088901845260ff604083205416821461364d57600a8901805460ff191660051790555b5560048554106135d1575b60028701548854604080516001600160a01b03909316835260208301919091527fb5340229b24b97c5261c0a8c19b3b71277ae4f607c30af5108e9008aad56d84d919081908101610b8b565b8598600289019560ff19968781541690555f9a5b6135f1575b5050613585565b8099989799548b101561364457898b61360f829d849d9b9c9d614d53565b905490851b1c6001600160a01b03165f90815285875260408082205482528888529020600a0180548a1689179055019a6135e5565b879899506135ea565b600a8901805460ff1916600617905561357a565b8d61366c828c614d53565b9054339190921b9190911c6001600160a01b03161461368d57018990613536565b509150508b888161353e565b60405163b4479a6360e01b8152600490fd5b346102eb575f3660031901126102eb576136c3615644565b6136cb615667565b60ff60145416600581101561047e57600481146105815760031461056f57600e546136f5816156d8565b6136fe8161571f565b5f52601b60205260405f2060048101600381549201548083101561263b576137298361373092614ccb565b8093614cb0565b9055600a546040516323b872dd60e01b8152336004820152306024820152604481018390529190602090839060649082905f906001600160a01b03165af1908115611a1b577f11f018c083eb908425163290b18ec4bff42c1ba4edf4020de879c7ae1b7ce0f3926020926137ae575b50604051908152a16001600955005b6137c490833d8511611a1457611a058183614c26565b508361379f565b346102eb575f3660031901126102eb5760ff60145416600581101561047e57600380911461056f5760055460ff8116156139a4575f905f91600192838054915b82811061397457505050156109f35760ff19166005556002546001600160a01b03919082163381036138c8575061384133615692565b5f915f918054925b8381106138a15750505f19820191821161050a5761386d93611d6c61121593614cd8565b613875614d9c565b7f6a36d5245b4e10f0299e42d1766cde6e266f8168b22e7cb0f8ab6e71021a54e56020604051338152a1005b826138ab82614cd8565b905490881b1c1633146138c0575b8101613849565b9350836138b9565b15158061395c575b61394a57816138dd614d21565b905490851b1c1633145f1461393857613904826138f8614d21565b905490861b1c16615692565b545f1981019290831161050a5761391d61392b93614cd8565b9054911b1c16611215614d21565b613933614d9c565b613875565b6040516301bb5b1f60e51b8152600490fd5b604051631a0a745560e11b8152600490fd5b5060075462015180810180911161050a5742106138d0565b61397d81614cd8565b90543391891b1c6001600160a01b03161461399b575b01849061380b565b92508092613993565b604051631e72ba9760e01b8152600490fd5b346102eb575f3660031901126102eb57604080516139d381614bee565b36903760405160035f825b60028210613a2557836139f081614bee565b604051905f90825b60028310613a0557604084f35b81516001600160a01b0316815260019290920191602091820191016139f8565b82546001600160a01b0316815260019283019291909101906020016139de565b346102eb575f3660031901126102eb57613a5d615667565b60ff60145416600581101561047e57600481146105815760031461056f57600e54805f52601b602052600160405f2001549062015180820180921161050a575f52601b602052600160405f200155600e545f527f1053ff2559207f3358e287928bbde971ad88f7b99c0335368afe0c5baf1ef55f6020600160405f200154604051908152a1005b346102eb575f3660031901126102eb57613afc615644565b613b04615667565b60145460ff8116600581101561047e57600403613c3f5760115462015180810180911161050a574210613c2d5760ff1916600317601455600a546040516370a0823160e01b81523060048201526001600160a01b0391909116906020908181602481865afa908115611a1b575f91613c00575b506010548110613b9f575b5f805160206157dd83398151915282604051428152a16001600955005b60405163a9059cbb60e01b81523360048201526024810191909152918190839060449082905f905af1918215611a1b575f805160206157dd8339815191529215613b8257613bf990823d8411611a1457611a058183614c26565b5082613b82565b90508181813d8311613c26575b613c178183614c26565b810103126102eb575183613b77565b503d613c0d565b6040516302e9939360e41b8152600490fd5b604051633b1cf39760e21b8152600490fd5b346102eb575f3660031901126102eb57613c69615667565b60145460ff8116600581101561047e576004146105815760125460ff811615613cf2576013545f5260208052600160405f2001544211613ce05760019160ff1980921660125516176014557f494f9e0263f7798e6fc702c0f9e260e4742108cbc0ce66eae93025756d6418246020604051428152a1005b604051630187744d60e71b8152600490fd5b604051632155c37160e11b8152600490fd5b346102eb5760203660031901126102eb576004355f52601f6020526107a461079860405f20614c48565b346102eb576020806003193601126102eb57613d48614a61565b613d50615644565b60ff6014541691600583101561047e5760048314610581576003831461056f57600192838114159081614146575b5061075057600e54806140f7575b83810180911161050a575f908152601b82526040808220338352601a845281832054835260168452912060028101546001600160a01b03919082161561158f57600a8101805460ff8160081c16600881101561047e576005036140e65760ff16600c811015908161047e57600981149182156140d9575b82156140c8575b50506140b65760105493601485028581046014148615171561050a576064613e33910486614cb0565b876004850192835483811061409e575b50600401613e52888254614cb0565b905561405a575b60105491613e6c60038601938454614cb0565b809355805482811061403e575b5083549260ff841692600c841015928361047e5760028514928315614030575b84841561401e575b5083614011575b5082614005575b5050613f95575b505050505081613f07575b50907fed66735ec09b73f80882349a417c96f1ac5bb6bf493441951d147d84c5ed5d8c92608092600e5460405193338552840152604083015215156060820152a1600955005b600a546040516323b872dd60e01b81523360048201523060248201526044810184905294929392918391869160649183915f91165af1928315611a1b577fed66735ec09b73f80882349a417c96f1ac5bb6bf493441951d147d84c5ed5d8c94608094613f78575b5091925092613ec1565b613f8e90843d8611611a1457611a058183614c26565b5086613f6e565b61047e57600403613ff5575b5050600e5486810180911161050a575f5260078101845260405f209060ff19918783825416179055600e549087820180921161050a576008915f520184528560405f20918254161790558580808080613eb6565b60ff191660041790558680613fa1565b54101590508b80613eaf565b601054111592508d613ea8565b90935061047e57600685149284613ea1565b5f9450600486149350613e99565b8061404c6140529285614ccb565b90614cb0565b81558a613e79565b946006840180549082821190815f14614097576140778484614ccb565b905b55156140895750505f5b94613e59565b61409291614ccb565b614083565b5f90614079565b6004919861404c6140af9286614ccb565b9790613e43565b60405163fdc7b1fb60e01b8152600490fd5b90915061047e576008148880613e0a565b50600a811491505f613e03565b604051627c247360e31b8152600490fd5b805f52601b825260405f205462239880810180911161050a5742108015614130575b15613d8c576040516337888d6760e01b8152600490fd5b50805f52601b82528360405f2001544211614119565b60029150141584613d7e565b346102eb575f3660031901126102eb57604051806001916001549283825260208092019360015f527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6925f905b8282106141c2576107a4866141b6818a0382614c26565b60405191829182614a95565b84546001600160a01b0316875295860195938301939083019061419f565b346102eb575f3660031901126102eb576020601354604051908152f35b346102eb5760403660031901126102eb57614216614a7f565b602435614221615644565b614229615667565b60ff60145416600581101561047e5760048103613c3f5760115462015180810180911161050a574210613c2d5760031461056f576001600160a01b0382811615611efe57600a5416916040516370a0823160e01b81523060048201526020908181602481885afa8015611a1b5784915f91614359575b50106143475760405163a9059cbb60e01b81526001600160a01b038316600482015260248101849052938190859060449082905f905af1938415611a1b577f20a3ee7ebf8af442c82daa0e821d3c5a43acc00c80968747a24d6e7f3663d35494614329575b5050604080516001600160a01b03909216825260208201929092529081908101612581565b8161433f92903d10611a1457611a058183614c26565b508380614304565b60405163356680b760e01b8152600490fd5b809250838092503d8311614383575b6143728183614c26565b810103126102eb578390518661429f565b503d614368565b346102eb576020806003193601126102eb576143a4614a61565b60ff60145416600581101561047e576004811461058157600380911461056f57335f52601a835260405f20545f526016835260405f2090600190600183019485548015613699575f526017815260405f2092855f146144825750505050600a019182549260ff841693600c85101561047e577f4506ecebb8afddc27b5896d964fe56a6aa511603ed4fac7fb871650473f2175d946007036144725750805461ff0019166103001790555b54604080513381526020810192909252911515918101919091528060608101610b8b565b61ff00191661050017905561444e565b90919593505f9060015f9401968754945b858110614524575050505f19830192831161050a57856144f96144fe926112156144e06016977f4506ecebb8afddc27b5896d964fe56a6aa511603ed4fac7fb871650473f2175d9b614d53565b905460039190911b1c6001600160a01b03169184614d53565b614de2565b335f52601a815260405f20545f5252600a60405f2001600a60ff1982541617905561444e565b61452e818a614d53565b905490831b1c6001600160a01b0316331461454b575b8201614493565b925082614544565b346102eb575f3660031901126102eb5760ff60145416600581101561047e57600481146105815760031461056f57600e54805f52602090601b825260405f205462127500810180911161050a5742118015614729575b6147175760018111806146ea575b6146d857600d6145c78154614cbd565b92838255335f526021815260405f20835f52815260405f2054155f146146c6577fedb73a28656fc54b5b54d180d469da306262375b8fab1d30e7bfdfe6fa4d71a893610b8b93335f526021835260405f20905f52825260405f20556016600e5491825f526018815261465260405f20855490815f52835260405f20945f526019835260405f20614d68565b600e545f52601b815261466d600260405f2001855490614d68565b8354835560018301336001600160601b0360a01b825416179055335f52601a815260405f20545f52526003600160405f20015491015554604051918291338360209093929193604081019460018060a01b031681520152565b604051639fbfc58960e01b8152600490fd5b6040516303a5a26f60e11b8152600490fd5b50335f52601a825260405f20545f5260168252600760405f2001815f52825260ff60405f205416156145b7565b60405163709758ab60e11b8152600490fd5b50805f52601b825260405f205442106145a9565b346102eb575f3660031901126102eb57614755615644565b60ff60145416600581101561047e57600390600381141590816148b8575b50612ca457600b546001808201809211805b61050a5782821015610a9457815f526020916016835260405f209185830180546147b56004860191825490614cb0565b916147c66005870193845490614cb0565b936147d76006880195865490614cb0565b90600e9a808c54115f146148595760098c9b99939b5493019a5b8c54600219810190811161050a5784116148365761481a90845f528c8c5260405f205490614cb0565b92805f528b8b525f6040812055801561050a575f1901926147f1565b9695935f95929c5085935083919b506001999a505b555555550190919280614785565b60095f9c9b9c9a99939a9301995b8b54841161489f5761488761489991855f528c8c5260405f205490614cb0565b93805f528b8b525f6040812055614cbd565b92614867565b9695935f95929c9a5085935083919b506001995061484b565b60049150141582614773565b346102eb575f3660031901126102eb576148dc615644565b335f52601a60205260405f20545f52601660205260405f20600681019081549081156149bb575f92839055600a54600291909101805460405163a9059cbb60e01b81526001600160a01b039182166004820152602481018590529490926020918691604491839187165af1938415611a1b577f3d97f39b86d061200a7834082f5926e58ec10fd85a9d6930f497729d5e6cc35c9461499c575b505460408051929091166001600160a01b0316825260208201929092529081908101612581565b6149b49060203d602011611a1457611a058183614c26565b5084614975565b6040516365e52d5160e11b8152600490fd5b346102eb5760203660031901126102eb576004355f52601c602052602060ff60405f2054166040519015158152f35b346102eb5760203660031901126102eb576004355f5260156020526107a461079860405f20614c48565b60209060206040818301928281528551809452019301915f5b828110614a4d575050505090565b835185529381019392810192600101614a3f565b6004359081151582036102eb57565b6044359081151582036102eb57565b600435906001600160a01b03821682036102eb57565b60209060206040818301928281528551809452019301915f5b828110614abc575050505090565b83516001600160a01b031685529381019392810192600101614aae565b60409060031901126102eb576004359060243590565b90600c82101561047e5752565b919091610180810192805182526020810151602083015260018060a01b036040820151166040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e0810151151560e0830152610100808201511515908301526101208082015190830152614b846101408083015190840190614aef565b6101608091015191600883101561047e570152565b60c0810190811067ffffffffffffffff82111761297657604052565b610180810190811067ffffffffffffffff82111761297657604052565b6060810190811067ffffffffffffffff82111761297657604052565b6040810190811067ffffffffffffffff82111761297657604052565b60a0810190811067ffffffffffffffff82111761297657604052565b90601f8019910116810190811067ffffffffffffffff82111761297657604052565b90604051918281549182825260209260208301915f5260205f20935f905b828210614c7e57505050614c7c92500383614c26565b565b855484526001958601958895509381019390910190614c66565b908160209103126102eb575180151581036102eb5790565b9190820180921161050a57565b5f19811461050a5760010190565b9190820391821161050a57565b600154811015614d0d5760015f527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf601905f90565b634e487b7160e01b5f52603260045260245ffd5b60015415614d0d5760015f527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6905f90565b8054821015614d0d575f5260205f2001905f90565b8054600160401b81101561297657614d8591600182018155614d53565b819291549060031b91821b915f19901b1916179055565b6001548015614dce575f1901614dc9614db482614cd8565b81549060018060a01b039060031b1b19169055565b600155565b634e487b7160e01b5f52603160045260245ffd5b80548015614dce575f190190614dfb614db48383614d53565b55565b90604051918281549182825260209260208301915f5260205f20935f905b828210614e3257505050614c7c92500383614c26565b85546001600160a01b031684526001958601958895509381019390910190614e1c565b8181029291811591840414171561050a57565b8115614e72570490565b634e487b7160e01b5f52601260045260245ffd5b60405190614e9382614bb5565b5f610160838281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201520152565b600c82101561047e5752565b600882101561047e5752565b8051821015614d0d5760209160051b010190565b90600e54805f52601b60205260405f205462151800810180911161050a5742108015615621575b61560f57805f1981011161050a575f1981015f52601860205260405f20335f52602160205260405f205f1983015f5260205260405f20545f5260205260405f209260018060a01b03600185015416908133036155fd5760048501805460ff8116156155eb5760ff8160081c166155d957835f52601a60205260405f20545f52601660205260ff600a60405f20015416600c81101561047e576004036106e05761ff00191661010017905561558857505f1981015f526019602052614ff760405f20614c48565b5f915f5b825181101561504f575f1982015f52601860205260405f2061501d8285614ef6565b515f5260205260ff600460405f2001541661503b575b600101614ffb565b92615047600191614cbd565b939050615033565b5061506d9291505f19015f52601b602052600360405f200154614e68565b915f8093600193600b54945b60018601861161050a57600186018110156150ce57805f52601660205260ff600a60405f20015416600c81101561047e576004146150ba575b600101615079565b956150c6600191614cbd565b9690506150b2565b509091929350606093600e545f52601c60205260ff60405f205416615562575b6150f88684614e68565b925f9660015b600b5460018101811161050a5760010181101561519857805f52601660205260405f2060ff600a82015416600c81101561047e57600414615143575b506001016150fe565b6003018054919791878110615173575b60019261516c926151658a8094614ccb565b9055614cb0565b969061513a565b60019261518b61516c939c61404c846151659c614ccb565b9b82995092509250615153565b509094939195969296805180615346575b505084841061527d575050505060028201819055600a54600183015460405163a9059cbb60e01b81526001600160a01b039182166004820152602481018490529391602091859116815f81604481015b03925af1928315611a1b577f1d3e1b711499f6260ce9c1c1eeabe0f46dfc60b81542d0021ecef0716d0ed1cb9361525e575b5060018101549054604080516001600160a01b03909316835260208301939093529181019190915280606081015b0390a1565b6152769060203d602011611a1457611a058183614c26565b505f61522b565b6402540be40061528d8587614ccb565b10156152df5750505060028301819055600a54600184015460405163a9059cbb60e01b81526001600160a01b0391821660048201526024810193909352919391602091859116815f81604481016151f9565b7fd2c92d0f1dd9e4ffc64744c794d5c6f0c58306865dcb816a20cf0db5c300d97e955060a094600360ff1960145416176014556040519485526020850152604084015260608301526080820152a15f805160206157dd8339815191526020604051428152a1565b5f989498979391959692975088155f146155485750969591959492945b875f935b86518510156155385761537a8588614ef6565b515f52601660205260018060a01b03600260405f200154165f52601d60205260405f20545f5260176020526153b4600160405f2001614dfe565b965f985f9a5f5b8a5181101561547f576001600160a01b036153d6828d614ef6565b51165f52601a60205260405f20545f52601660205260405f2060ff600a82015416600c81101561047e57600414615411575b506001016153bb565b909b9c61541d90614cbd565b9c8015801580615472575b1561543e575050600460019101549b5b90615408565b9c91909c615450575b50600190615438565b6004919c5001548060011b908082046002149015171561050a579a6001615447565b5060048301548211615428565b5092959194999093979b969a6154959088614e68565b90808210156155305750985b5f5b8951811015615517576001600160a01b036154be828c614ef6565b51165f52601a60205260405f20545f52601660205260405f2060ff600a82015416600c81101561047e576004146154f9575b506001016154a3565b8b6001929e60046155109301615165838254614ccb565b9c906154f0565b50959a9199929850929650946001909101939192615367565b9050986154a1565b9296985092509293505f806151a9565b9061404c615556928a614e68565b96959195949294615363565b949350601f60205261558261557960405f20614c48565b94855190614cb0565b946150ee565b5f60028501559254604080516001600160a01b039095168552602085019190915291927f2f6a2242608827783b40fb797960e2d61ea6e692e9c61049f223ec66f18bbc429290915081908101615259565b604051630c8d9eab60e31b8152600490fd5b604051636a9a57a560e01b8152600490fd5b604051634a7777b360e11b8152600490fd5b60405163215eb65f60e21b8152600490fd5b50805f52601b60205260405f205462224700810180911161050a57421015614f31565b600260095414615655576002600955565b604051633ee5aeb560e01b8152600490fd5b5f546001600160a01b0316330361567a57565b6040516306b66d0160e01b8152336004820152602490fd5b5f80546001600160a01b039283166001600160a01b03198216811783559216907f688b8f34d886f8a2414b39aa6cef1ec6198215ba9b47fe8ac4260b44139bd5b69080a3565b5f52601b60205260405f2054804210908115615708575b506156f657565b6040516307f1ee4960e31b8152600490fd5b90506203f480810180911161050a5742115f6156ef565b5f52601b602052600260405f2001541561573557565b60405163a8de391160e01b8152600490fd5b905f905f5b83548110156157885761575f8185614d53565b90543360039290921b1c6001600160a01b031614615780575b60010161574c565b915081615778565b509180545f19810190811161050a57614c7c926157b56157ab6144f99385614d53565b9190549285614d53565b81546001600160a01b03600392831b81811b199092169490921b9490941c1690921b17905556fe7a406291d7dedc33dcf93635d6443b37b6f30b4d33a6b86f5e2427e9d96f7c22a264697066735822122099aac4f7166212dbc55f55775fd48d1e1ea3373a5b0619be1b1584daf80bcfff64736f6c63430008170033",
    sourceMap:
      "274:69023:26:-:0;;;;;;;;;;;;;-1:-1:-1;;274:69023:26;;;;-1:-1:-1;;;;;274:69023:26;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;-1:-1:-1;;;;;274:69023:26;;;;;;;:::i;:::-;;766:30:28;;;762:101;;-1:-1:-1;274:69023:26;;;;;;;;;;;;;;-1:-1:-1;274:69023:26;;;;;;2256:44:28;-1:-1:-1;2256:44:28;;1857:1:25;2061:21;1857:1;274:69023:26;;5339:36;274:69023;;;5339:36;274:69023;;;5385:48;274:69023;;5385:48;274:69023;;;;;;;;762:101:28;274:69023:26;;-1:-1:-1;;;819:33:28;;-1:-1:-1;819:33:28;;;274:69023:26;;;819:33:28;274:69023:26;-1:-1:-1;274:69023:26;;;;;;-1:-1:-1;274:69023:26;;;;;-1:-1:-1;274:69023:26;;;;-1:-1:-1;;;;;274:69023:26;;;;;;:::o",
    linkReferences: {},
  },
  deployedBytecode: {
    object:
      "0x60806040526004361015610011575f80fd5b5f3560e01c80630899fe41146149fc5780630a5b34f2146149cd578063110f8874146148c457806316bfe25c1461473d5780631afbd128146145535780631c35f9521461438a57806323d6711a146141fd578063263d083e146141e057806327bd3ef01461415257806339786a9614613d2e5780633a85bded14613d045780633e95f40214613c515780633f1b3f8f14613ae457806341bb0d1a14613a455780634ee9c6f7146139b65780634fcd291a146137cb57806350c8e1fd146136ab5780635228e916146134bf5780635495d2aa146134985780635c3ebd37146133e25780635d86b8e1146133c55780636564f43e1461334657806366199808146133175780636d4da76d146132ef57806372547ec914612f8957806372f833a814612f6c578063745092dd14612dcb57806374add0f314612cc2578063756b01b614612ad45780637985940d14612aab5780637b47d7e814612a8e5780637b55476d146129ae57806393f881d9146127865780639c6d24911461264d5780639d39089c146123595780639f2592b31461233c578063a0b34a301461231f578063a3d033e514612215578063a482b1021461214b578063a8fdb78814612040578063ac0fda831461201e578063ac115bbe14612001578063b0fdc3e414611f10578063b174a68d14611bdd578063c2a41da014611bbb578063c4afc37a14611897578063c66460e11461183d578063cb26c5f5146115a1578063cba47c26146113a9578063cc10a3aa1461138c578063d41c3a6514611364578063d6a5658f146110cc578063d8a77c6214610a9b578063d98b250314610a4c578063dbcd14f0146108eb578063e15d69f3146108ce578063e319ace914610896578063e329972d146107a8578063ea398bc11461076e578063ec15a890146105b0578063f34cf77514610593578063f3f02d03146102ef5763fef4c550146102ce575f80fd5b346102eb575f3660031901126102eb576020600854604051908152f35b5f80fd5b346102eb575f3660031901126102eb576014805460059160ff9182168381101561047e57600481146105815760031461056f5760015b600b546001810180911161050a5781101561056d57805f526020906016825260405f2091600a8301908582541691600c831015928361047e578015158061055f575b848161054e575b8161053d575b50610388575b505050506001915001610325565b60089283870194600e92835491825f528784528b60405f2054165f146104cc575050835460ff19166004178455505b888854168a81101561047e57600114806104b7575b610492575b88885416948a86101561047e576001977f732dc60c5d1b1df84f06b7e689c1024b7164003eeeded6276c17827b428734c89660409661043b958d9460028094149081610469575b50610445575b5050898060a01b0391015416935416908451938452830190614aef565ba18580808061037a565b60ff199182895416178855545f52600783018552875f209081541690558d8061041e565b905081545f52865284895f205416155f610418565b634e487b7160e01b5f52602160045260245ffd5b60ff1960068185541617845582545f5260078801825260405f209081541690556103d1565b5081545f528481528860405f205416156103cc565b61047e576004148061051e575b6104e4575b506103b7565b5f19810190811161050a575f52601e815260405f20600160ff198254161790558a6104de565b634e487b7160e01b5f52601160045260245ffd5b505f19810181811161050a575f52601e82528960405f205416156104d9565b905061047e57600981141584610374565b905061047e5760018114158461036e565b505f93506002811415610367565b005b60405163f856e0a560e01b8152600490fd5b6040516338f25eb760e21b8152600490fd5b346102eb575f3660031901126102eb576020600d54604051908152f35b346102eb576020806003193601126102eb57600435906105ce615667565b60ff60145416600581101561047e5760048114610581576003811461056f5760018114159081610762575b5061075057600e5491825f52601b825260405f20546213c680810180821161050a574211908115610746575b5061073457825f526018825260405f20815f52825260405f208054938285036107225760018201546001600160a01b03165f818152601a86526040808220548252601687529020600a015490919060ff16600c81101561047e57600414918215926106f2575b50506106e0577f3d37a493337dd24e7cb7bec23d4bde6447e3a1d6e75803de86dbf9f9b5732b849360046106d79201600160ff19825416179055600e545f526015845260405f20614d68565b604051908152a1005b6040516329ceba1160e11b8152600490fd5b9091505f52601a845260405f20545f5260168452600760405f2001905f52835260ff60405f20541615858061068b565b60405163e22b971160e01b8152600490fd5b604051633341b44560e11b8152600490fd5b9050421084610625565b604051637bf65ebd60e11b8152600490fd5b600291501415836105f9565b346102eb5760203660031901126102eb576004355f5260196020526107a461079860405f20614c48565b60405191829182614a26565b0390f35b346102eb576020806003193601126102eb575f60806040516107c981614c0a565b82815282848201526060604082015282606082015201526004355f52601b815260405f206040516107f981614c0a565b8154815260019260018301549281830193845261081860028201614c48565b9160408401928352600460038301549260608601938452015492608085019384526040519582875260c08701955183880152516040870152519360a0606087015284518091528160e087019501915f5b8281106108835784516080890152855160a089015287870388f35b8351875295810195928101928801610868565b346102eb5760203660031901126102eb576001600160a01b036108b7614a7f565b165f52601a602052602060405f2054604051908152f35b346102eb575f3660031901126102eb576020600754604051908152f35b346102eb5760603660031901126102eb57600435610907614a70565b60ff6014541691600583101561047e576004831461058157600380931461056f57805f52601760205260405f20916024355f52601660205260405f20600a81019485549460ff8616600c81101561047e57600703610a3b575f915f9060018093018054925b838110610a05575b5050505050156109f3577f5cf6fd140141a8a14aca1d538d93e40de68c6a776df311ae862a898ea2a660ef9460809483156109e35750805461ffff19166105041790555b60020154604080516001600160a01b03909216825233602083015281019290925215156060820152a1005b61ff0019166107001790556109b8565b604051633d76489160e01b8152600490fd5b610a0f8183614d53565b90543391851b1c6001600160a01b031614610a2b57840161096c565b5050505090508680808080610974565b60405162789f4360e21b8152600490fd5b346102eb5760203660031901126102eb57610a65614a61565b610a6d615644565b60ff60145416600581101561047e57600481146105815760031461056f57610a9490614f0a565b6001600955005b346102eb575f3660031901126102eb57610ab3615667565b60145460ff811690600582101561047e5760048214610581576003821461056f575f916001811415806110be575b61075057600e54801515806110a6575b61109457610afe90614cbd565b9283600e5561047e57600214610f9c575b505f52601b60205260405f20428155600f54610b90575b62278d00420180421161050a578160039160017f08a7ba25f6100ab18c633572926abf5bd6a45439a9322adee245bc3a9685efda940155600f549182910155600e54610b8b601054604051938493846040919493926060820195825260208201520152565b0390a1005b60ff60145416600581101561047e57600481146105815760031461056f5760015b600b546001810180911161050a57811015610deb57805f52601660205260405f209060ff600a83015416600c811015908161047e5780151580610ddd575b8281610dcc575b81610dbb575b50610c0e575b50506001915001610bb1565b600e5491825f526008850160205260ff60405f2054165f14610d5b57505050600a8201805460ff191660041790555b60ff60145416600581101561047e5760011480610d40575b610d13575b60ff6014541691600583101561047e5760407f732dc60c5d1b1df84f06b7e689c1024b7164003eeeded6276c17827b428734c89160026001951480610cf9575b610ccd575b610cc560ff600a878060a01b036002850154169301541683519283526020830190614aef565ba18380610c02565b60ff19600881600a8401541617600a830155600e545f5260078201602052825f20908154169055610c9f565b50600e545f526008810160205260ff825f20541615610c9a565b60ff19600681600a8501541617600a840155600e545f526007830160205260405f20908154169055610c5a565b50600e545f526008820160205260ff60405f20541615610c55565b61047e5760041480610d9a575b610d73575b50610c3d565b5f19810190811161050a575f52601e60205260405f20600160ff1982541617905583610d6d565b505f19810181811161050a575f52601e60205260ff60405f20541615610d68565b905061047e57600981141582610bfc565b905061047e57600181141582610bf6565b505f91506002811415610bef565b5060015b600c80546001810180911161050a57821015610ee057815f526017602052600160405f20018054600481109081610ed6575b50610e31575b5050600101610def565b90925f5b8254811015610eca57610e488184614d53565b60018060a01b0391549060031b1c165f52601a60205260405f20545f52601660205260405f2090600a82019182549260ff8416938885101561047e57600460019514610e98575b50505001610e35565b60089060ff1916179055600660038201915f835481610ebd6004850192835490614cb0565b9555550155868080610e8f565b50925050600183610e27565b9050151585610e21565b50505f90600190600b546001810180911192835b61050a5781811015610f4157805f52601660205260ff600a60405f20015416600c81101561047e57600414610f2d575b60010183610ef4565b93610f39600191614cbd565b949050610f24565b50509190506001600e5411610f57575b50610b26565b80610f885750600360ff1960145416176014555f805160206157dd8339815191526020604051428152a15b81610f51565b610f9490600f54614e68565b601055610f82565b5f19820182811161050a57805f526020601c815260ff60405f205416159182611071575b8261104e575b82611035575b5081611012575b81610fef575b5015610b0f5760ff191660011760145581610b0f565b6002198401915083821161050a57601e915f525260ff60405f2054161583610fd9565b9050600119830183811161050a575f52601e815260ff60405f2054161590610fd3565b9091505f52601e815260ff60405f205416159084610fcc565b9150600219840184811161050a575f52601c815260ff60405f2054161591610fc6565b9150600119840184811161050a575f52601c815260ff60405f2054161591610fc0565b6040516307318e9360e31b8152600490fd5b50805f52601b602052600160405f2001544210610af1565b505f92506002811415610ae1565b346102eb576020806003193601126102eb576004359067ffffffffffffffff8083116102eb57366023840112156102eb578260040135926024918411611350578360051b6040519461112085830187614c26565b85528284860191830101913683116102eb578301905b82821061133157505050611148615667565b60ff60145416600581101561131d5760031461056f57600b5490600c82101580611312575b156112e45760028451106112d257929190925b5f936001928184809301809111925b6111c4575b6040517f37624b43bc21d01bec4f033a1fb10552d28b406b1a68210476d53af5a7d4e68e9080610b8b8982614a95565b85518710156112cd575f85805b61124e575b50156109f3576001600160a01b036111ee8888614ef6565b5116968554600160401b81101561123b5790611233879899611215848a8096018655614cd8565b90919060018060a01b038084549260031b9316831b921b1916179055565b01969561118f565b85634e487b7160e01b5f5260416004525ffd5b84919498979596986112ba57828110156112ad576001600160a01b03806112758a89614ef6565b511690825f5260168652600260405f200154161461129f57969794969495949093908601866111d1565b5092508694939596886111d6565b97959496979390936111d6565b86634e487b7160e01b5f5260116004525ffd5b611194565b6040516350a01e1d60e11b8152600490fd5b602382116112f6575b92919092611180565b6006845110156112ed576040516350a01e1d60e11b8152600490fd5b50602382111561116d565b50634e487b7160e01b5f9081526021600452fd5b81356001600160a01b03811681036102eb578152908401908401611136565b50634e487b7160e01b5f9081526041600452fd5b346102eb575f3660031901126102eb57600a546040516001600160a01b039091168152602090f35b346102eb575f3660031901126102eb576020600f54604051908152f35b346102eb575f3660031901126102eb5760ff60145416600581101561047e57600481146105815760031461056f57335f52601a60205260405f20545f52601660205260405f20600181019081545f52601760205260405f209160018060a01b036002830154161561158f575f9055600a8101805460ff1916600517905561143260018301615747565b600e545f526007810160205260405f2060ff198154169055600381015f8154816114626004860192835490614cb0565b93555560069061147760068401918254614cb0565b905560046001840154106114d9575b50600281015491549054604080516001600160a01b0390941684526020840192909252908201527fed11cf2f685bc5fb16110aa145d0b495f9cfdc2ed33e03b9362d4bdc3fba262d908060608101610b8b565b60028301805460ff191690555f5b60018401548110156115675780611502600192838701614d53565b838060a01b0391549060031b1c165f52601a60205260405f20545f52601660205260405f20600a8101600560ff1982541617905561155f8460038301925f8454816115536004850192835490614cb0565b96555501918254614cb0565b9055016114e7565b50507fed11cf2f685bc5fb16110aa145d0b495f9cfdc2ed33e03b9362d4bdc3fba262d611486565b60405163092ebc6d60e31b8152600490fd5b346102eb575f3660031901126102eb5760ff8060145416600581101561047e57600481146105815760031461056f57335f526020601a815260405f20545f526016906016815260405f20906001928383019485545f526017835260405f206002850160018060a01b0397888254161561158f57600e54805f52601b875260405f20546203f480810180911161050a5742118015611829575b611817575f19810190811161050a575f526019865260405f20541561180557600a91600a8801998960099560ff199c8d81541660091790550161167b90615747565b82549154165f52601d875260405f20555f9055600e545f52601f855260405f2086546116a691614d68565b60038601805490600488019182546116bd91614cb0565b60058901555f90555f90556014549160ff8316600581101561047e57881461175e575b50505050506007601c92600e545f5201815260405f20848154169055600e545f525260405f2091825460ff811615611751575b600e546040805133815260208101929092527f188272a28ee264707f833eac91033ac3a9a04f67845e5a9034afc774a4a9603c919081908101610b8b565b1617905580808080611713565b600b54965f95909489939091898501808b11865b6117b6575b50505050505050600c850294808604600c149015171561050a57866007936064601c9704106117a8575b82956116e0565b1660021760145586866117a1565b8061050a578187101561180057865f52828b52848460405f2001541696600c88101561047e57868e98146117ed575b870196611772565b996117f88891614cbd565b9a90506117e5565b611777565b604051631f86a3f560e21b8152600490fd5b6040516379055d9d60e01b8152600490fd5b50805f52601b875260405f20544210611639565b346102eb576020806003193601126102eb57805f604092835161185f81614bee565b82815201526004355f52808052815f2090825161187b81614bee565b8160018454948584520154910190815283519283525190820152f35b346102eb5760203660031901126102eb576118b0614a61565b6118b8615644565b60ff60145416600581101561047e57600481146105815760031461056f57600e54805f52601b60205260405f205462054600810180911161050a5742118015611b99575b611b87575f19810190811161050a575f52601560205260405f2054611b7557600b5460015b60018201821161050a5760018201811015611b4a57805f52601660205260405f20906005820180549081611b3b575b5050600e546001811180611b1a575b80611b0d575b611a8e575b50600e5460038111611a33575b508380611a26575b61198e575b6001915001611921565b6006820180545f91829055600a5460029094015460405163a9059cbb60e01b81526001600160a01b039182166004820152602481019290925290936020928592604492849291165af1918215611a1b576001926119ec575b50611984565b611a0d9060203d602011611a14575b611a058183614c26565b810190614c98565b50846119e6565b503d6119fb565b6040513d5f823e3d90fd5b506006820154151561197f565b8060021981011161050a57600219015f526009820160205260405f2054801561197757611a6560068401918254614cb0565b9055600e548060021981011161050a57600219015f52600982016020525f604081205584611977565b60ff60145416600581101561047e576002149081611aee575b5015611adb57600382015f81549155600e54805f1981011161050a575f19015f526009830160205260405f20555b8461196a565b600382015f815491556006830155611ad5565b5f1981019150811161050a575f52601560205260405f20541585611aa7565b5060038301541515611965565b50805f1981011161050a575f1981015f52601560205260405f20541561195f565b5f905560068301558480611950565b7f01c9e927536754e1d95ea7a9eda17265ab11a240401b5926f33c0eb76c9d7f335f80a16001600955005b60405163fcb6f0ab60e01b8152600490fd5b60405163d53184ed60e01b8152600490fd5b50805f52601b60205260405f20546203f480810180911161050a5742106118fc565b346102eb575f3660031901126102eb57602060ff600554166040519015158152f35b346102eb5760203660031901126102eb57611bf6614a7f565b6001600160a01b0381811691908215611efe5760ff60145416600581101561047e57600380911461056f575f335f52601a60205260405f20548015159081611ed8575b50611ed0575b156109f3575f925f93600194858054915b828110611ea75750505015611e955781548316158080611e89575b80611e7c575b611e4f5715611ddd57600380546001600160a01b0319166001600160a01b0390921691909117905542600855600e546006555b818154169283151580611dd0575b611ce4575b7f882febe0458c27b4ed12caa22ad034f24f206e2da9aa922015eff66e45f2006b602086604051908152a1005b5f9492938460045416145f14611daf57611d0084835416615692565b8054825485165f5b828110611d88575050505b6001600160601b0360a01b8083541683556004541660045554935f19850194851161050a57611215602094611d7893611d6c7f882febe0458c27b4ed12caa22ad034f24f206e2da9aa922015eff66e45f2006b98614cd8565b9054911b1c1691614cd8565b611d80614d9c565b918380611cb7565b8187611d9383614cd8565b905490881b1c1614611da7575b8301611d08565b965086611da0565b9350611dc983611dbd614d21565b905490841b1c16615692565b5f93611d13565b5082600454161515611cb2565b60085462015180810180911161050a5780421080611e6f575b15611e14575050600480546001600160a01b03191685179055611ca4565b421180611e61575b15611e4f57600380546001600160a01b0319166001600160a01b0390921691909117905542600855600e54600655611ca4565b604051637787a74d60e01b8152600490fd5b50600654600e541415611e1c565b50600654600e5414611df6565b50600654600e5414611c71565b50836004541615611c6b565b6040516362c9b45b60e01b8152600490fd5b86611eb182614cd8565b905490881b1c168914611ec7575b018690611c50565b92508092611ebf565b506001611c3f565b90505f52601660205260ff600a60405f20015416600c81101561047e5760041486611c39565b604051631e7d738760e21b8152600490fd5b346102eb5760203660031901126102eb57611f29614a7f565b611f31615667565b60ff6014541690600582101561047e57600380921461056f576001600160a01b039081169182611fae575b7f9d35d6f02c23b682244e3ab27b9be76fa329228dd25ecfa1b9b9974d77c22a14602084806001600160601b0360a01b600254161760025542600755600160ff196005541617600555604051908152a1005b5f915f90600192600154925b838110611fd3575b5050505050156109f3578180611f5c565b82611fdd82614cd8565b905490841b1c168714611ff1578401611fba565b5050505090508280808080611fc2565b346102eb575f3660031901126102eb576020600654604051908152f35b346102eb575f3660031901126102eb57602060ff601254166040519015158152f35b346102eb576107a46120e661213960ff61205936614ad9565b90612062614e86565b505f52601660205260405f209080155f146121455750600e54905b80549160018201549060018060a01b0360028401541690600384015460048501546005860154916006870154935f52600787016020528860405f20541694600888016020528960405f2054169660098901602052600a60405f2054990154996040519d8e614bb5565b8d5260208d015260408c015260608b015260808a015260a089015260c0880152151560e0870152151561010086015261012085015261212b8282166101408601614ede565b60081c166101608301614eea565b60405191829182614afc565b9061207d565b346102eb576020806003193601126102eb575f6040805161216b81614bd2565b82815260608482015201526004355f526017815260405f2060405161218f81614bd2565b8154815260019260ff60026121a660018601614dfe565b9483850195865201541690604083019115158252604051938185526080850193518286015251926060604086015283518091528160a086019401915f5b8281106121f95784511515606088015286860387f35b83516001600160a01b03168652948101949281019287016121e3565b346102eb5760403660031901126102eb576107a4612231614a7f565b61213960ff602435612241614e86565b506001600160a01b039384165f908152601a60209081526040808320548352601682529091209091806123195750600e54945b81549560018301549160028401541690600384015460048501546005860154916006870154935f526007870188528860405f205416946008880189528960405f20541696600989018a52600a60405f2054990154996040519d8e6122d781614bb5565b528d015260408c015260608b015260808a015260a089015260c0880152151560e0870152151561010086015261012085015261212b8282166101408601614ede565b94612274565b346102eb575f3660031901126102eb576020600e54604051908152f35b346102eb575f3660031901126102eb576020600c54604051908152f35b346102eb575f3660031901126102eb57612371615644565b612379615667565b60ff8060145416600581101561047e57600481146105815760031461056f57600e546123a4816156d8565b6123ad8161571f565b5f526020601b815260405f2060036004820154910154908181101561263b576123d591614ccb565b5f905f600b5493600180860180961195865b61050a578082101561247b57815f526016835260405f209188600a8401541692600c84101561047e576004899414612424575b50600101916123e7565b94612430600491614cbd565b950154801561241a5790968015801580612472575b15612457575050600190965b9061241a565b90979150612468575b600190612451565b9495508594612460565b50818310612445565b9050859387958061248c8684614e68565b1015612635575061249d8482614e68565b935b5f926001875b61050a578181101561250a57805f526016865260405f209089600a8301541691600c83101561047e576004600193146124e1575b5001876124a5565b600401805489808210156124f7575b50506124d9565b61250091614ccb565b90558a80896124f0565b8487858886600e545f52601b8252600460405f200161252a848254614cb0565b9055826125378286614e55565b1061258b575b50506125817f39657cef6eb725e291a5e37fe8032a18477b98dd7abc4a03d93428153eff3d0393604051938493846040919493926060820195825260208201520152565b0390a16001600955005b6125a191945061259b9084614e55565b82614ccb565b600a546040516323b872dd60e01b8152336004820152306024820152604481018390529491908290869060649082905f906001600160a01b03165af1918215611a1b577f39657cef6eb725e291a5e37fe8032a18477b98dd7abc4a03d93428153eff3d039561258193612617575b50509361253d565b8161262d92903d10611a1457611a058183614c26565b50858061260f565b9361249f565b604051633958314d60e01b8152600490fd5b346102eb5760203660031901126102eb57612666614a7f565b60ff60145416600581101561047e576003811461056f57612685615667565b6004811461058157801515908161277a575b50612768576001600160a01b0381165f818152601a602052604090205490919061275657600a7f6041a3b674b81a0fecc93042cf89f30bf96db96073f1312e253264f8a5cceba3926126ea600b54614cbd565b600b8181555f828152601660209081526040808320858155868452601a835292819020949094556002820180546001600160a01b03191690951790945593909301805461ffff1916610101179055915482516001600160a01b0390941684529083015281908101610b8b565b60405163f411c32760e01b8152600490fd5b60405163897c9a9360e01b8152600490fd5b60019150141582612697565b346102eb5760603660031901126102eb5761279f614a7f565b6024356127aa614a70565b9160ff60145416600581101561047e576003811461056f576004906127cd615667565b1461058157815f52601760205260405f209260018060a01b03908183165f52601a60205260405f20545f52601660205260405f209185541561299c5760028301541691821561298a576001860192835490600160401b8210156129765761121582600161283d9401875586614d53565b811561293457600a81019586549360ff8516600c81101561047e57600503612922578660016002947fd23000da82104e78ccbf3c41c153eca50a357a80f2ae156096b8b1b43f36f2e19a6007610b8b9960ff19161790555b01555460048110159081612916575b50156128f65701805460ff8116156128e6575b50505b604080516001600160a01b03909416845260208401949094521515928201929092529081906060820190565b60ff1916600117905585806128b7565b01805460ff8116612909575b50506128ba565b60ff191690558580612902565b600791501115886128a4565b6040516333ddf1dd60e01b8152600490fd5b7fd23000da82104e78ccbf3c41c153eca50a357a80f2ae156096b8b1b43f36f2e195610b8b9386600184600a6002960161020061ff0019825416179055612895565b634e487b7160e01b5f52604160045260245ffd5b6040516339ec64c160e11b8152600490fd5b604051635ad439e560e11b8152600490fd5b346102eb576129bc36614ad9565b905f60a06040516129cc81614b99565b82815282602082015282604082015282606082015282608082015201525f52601860205260405f20905f5260205260c060405f2060405190612a0d82614b99565b80549182815260018060a01b03918260018201541692602083019384526002820154906040840191825260046003840154936060860194855201549460ff60a0608087019682891615158852019660081c161515865260405196875251166020860152516040850152516060840152511515608083015251151560a0820152f35b346102eb575f3660031901126102eb576020601154604051908152f35b346102eb575f3660031901126102eb5760ff60145416604051600582101561047e576020918152f35b346102eb575f3660031901126102eb57612aec615667565b60145460ff8116600581101561047e57600481146105815760031461056f5760ff191660041760145542601155612b21615644565b60ff60145416600581101561047e5760038114159081612cb6575b50612ca457600b546001905b60018101811161050a5760018101821015612c7357815f52601660205260405f2091612b99612b8e612b836003860154600487015490614cb0565b600586015490614cb0565b600685015490614cb0565b906003600e54115f14612c1f57600e546009850193925b600e54600219810190811161050a578211612bf857612bdb90825f528560205260405f205490614cb0565b90805f52846020525f6040812055801561050a575f190190612bb0565b91929460019450600691505b5f60038201555f60048201555f600582015501550190612b48565b91905f905b600e548211612c6557612c49612c5f91835f526009870160205260405f205490614cb0565b91805f52600986016020525f6040812055614cbd565b90612c24565b905060066001939294612c04565b60016009557fac72b0b13eb85909e8e5deeb2bb65c912e147d60cfd7284a17b85e0fe88fdae66020604051428152a1005b60405163a7c1043560e01b8152600490fd5b60049150141581612b3c565b346102eb576020806003193601126102eb5760043590612ce0615667565b60145460ff8116600581101561047e5760048114610581576003811461056f57612db957600b5491600c83108015612dad575b612d9b5760015b60048110612d6b577fe891dc01ac1296966aff69221063a5796adb4993741b159b043f7066e2923939602086612d5f8760018860ff19161760145582600f5582614e68565b601055604051908152a1005b805f52601782526004600160405f20015410612d8957600101612d1a565b6040516305a2d66760e11b8152600490fd5b60405163dd5d9ea160e01b8152600490fd5b506003600c5410612d13565b6040516305c3c4b960e41b8152600490fd5b346102eb575f3660031901126102eb57612de3615644565b60ff60145416600581101561047e576003811461056f576004811461058157600103612f5a57335f52601a60205260405f20545f52601660205260405f20600a810180549060ff8216600c81101561047e57600103612f485760105460148102908082046014148115171561050a576064612e5f920490614cb0565b600b810290808204600b149015171561050a57600c61030291049260048501612e89858254614cb0565b905561ffff1916179055600a546040516323b872dd60e01b815233600482015230602482015260448101839052926001600160a01b0391602090859060649082905f9087165af1908115611a1b577fa1036ac26bc1acfe7c0581273bb656a2426fb6f32067116729c8fad15a58bfc794600292612f29575b50015460408051929091166001600160a01b0316825260208201929092529081908101612581565b612f419060203d602011611a1457611a058183614c26565b5085612f01565b60405163991c8dc760e01b8152600490fd5b604051637250f10560e01b8152600490fd5b346102eb575f3660031901126102eb576020600b54604051908152f35b346102eb576020806003193601126102eb57600435612fa6615667565b60ff6014816014541690600591600581101561047e5760048114610581576003811461056f575f9080151590816132e0575b5061276857600f546130ae575b50505081600f555f9060018091600b548260018201809211905b613056575b7fd4116e5003fcbb3a549e4e271b1d73063c38f23828139309c6ac1ef0700a4a506040888a6130338a83614e68565b601055600e545f52601b8152816003845f200155601054908351928352820152a1005b8095949561050a57818610156130a657855f526016885282600a60405f20015416600c81101561047e57600414613093575b838095960194612fff565b8361309e8196614cbd565b955050613088565b849550613004565b949092919461047e5760015b600b546001810180911161050a578110156132d357805f526016825260405f2090600a820184815416600c811015918261047e57811515806132c5575b83816132b4575b816132a3575b50613117575b50505060019150016130ba565b60089182860193600e91825491825f52868a528a60405f2054165f14613246575050825460ff19166004178355505b878954168b81101561047e5760011480613231575b61320c575b87895416938b85101561047e576001967f732dc60c5d1b1df84f06b7e689c1024b7164003eeeded6276c17827b428734c8956040956131ca948c94600280941490816131f7575b506131d3575b5050888060a01b0391015416925416835192835287830190614aef565ba187808061310a565b60ff199182885416178755545f52600783018b52865f209081541690558e806131ad565b905081545f528c5284885f205416155f6131a7565b60ff1960068184541617835581545f5260078701885260405f20908154169055613160565b5080545f528387528760405f2054161561315b565b61047e5760041480613284575b61325e575b50613146565b5f19810190811161050a575f52601e875260405f20600160ff198254161790558b613258565b505f19810181811161050a575f52601e88528860405f20541615613253565b905061047e57600982141583613104565b905061047e576001821415836130fe565b505f925060028214156130f7565b5093509050838080612fe5565b91505060015f91141587612fd8565b346102eb575f3660031901126102eb576002546040516001600160a01b039091168152602090f35b346102eb5760203660031901126102eb576004355f52601e602052602060ff60405f2054166040519015158152f35b346102eb575f3660031901126102eb5760ff60145416600581101561047e576003811461056f57600490613378615667565b14610581577f3b88d52dc51aa53d344c3581f44ecf26dd6a764b15cd0e86e576d816c283616360206133ab600c54614cbd565b80600c55805f52601782528060405f2055604051908152a1005b346102eb575f3660031901126102eb576020601054604051908152f35b346102eb575f3660031901126102eb576133fa615667565b60145460ff8116600581101561047e576003811461056f576004146105815760039060ff199060018260125416176012551617601455600e54806013555f52602080524260405f2055600e54805f52601b602052600160405f2001549062054600820180921161050a575f5260208052600160405f2001557f94cdef44deba8207a5c8b2a712e9b86ffc190fb1451b76b0821312442b782d1e5f80a1005b346102eb575f3660031901126102eb575f546040516001600160a01b039091168152602090f35b346102eb575f3660031901126102eb5760ff6014541660058082101561047e576004821461058157600380921461056f57335f52601a906020601a815260405f20545f526016906016815260405f20926001928385019283548015613699575f526017815260405f20965f945f95878a0196888854915b828110613661575b505050156109f3575f9061355187615747565b600e54825260088901845260ff604083205416821461364d57600a8901805460ff191660051790555b5560048554106135d1575b60028701548854604080516001600160a01b03909316835260208301919091527fb5340229b24b97c5261c0a8c19b3b71277ae4f607c30af5108e9008aad56d84d919081908101610b8b565b8598600289019560ff19968781541690555f9a5b6135f1575b5050613585565b8099989799548b101561364457898b61360f829d849d9b9c9d614d53565b905490851b1c6001600160a01b03165f90815285875260408082205482528888529020600a0180548a1689179055019a6135e5565b879899506135ea565b600a8901805460ff1916600617905561357a565b8d61366c828c614d53565b9054339190921b9190911c6001600160a01b03161461368d57018990613536565b509150508b888161353e565b60405163b4479a6360e01b8152600490fd5b346102eb575f3660031901126102eb576136c3615644565b6136cb615667565b60ff60145416600581101561047e57600481146105815760031461056f57600e546136f5816156d8565b6136fe8161571f565b5f52601b60205260405f2060048101600381549201548083101561263b576137298361373092614ccb565b8093614cb0565b9055600a546040516323b872dd60e01b8152336004820152306024820152604481018390529190602090839060649082905f906001600160a01b03165af1908115611a1b577f11f018c083eb908425163290b18ec4bff42c1ba4edf4020de879c7ae1b7ce0f3926020926137ae575b50604051908152a16001600955005b6137c490833d8511611a1457611a058183614c26565b508361379f565b346102eb575f3660031901126102eb5760ff60145416600581101561047e57600380911461056f5760055460ff8116156139a4575f905f91600192838054915b82811061397457505050156109f35760ff19166005556002546001600160a01b03919082163381036138c8575061384133615692565b5f915f918054925b8381106138a15750505f19820191821161050a5761386d93611d6c61121593614cd8565b613875614d9c565b7f6a36d5245b4e10f0299e42d1766cde6e266f8168b22e7cb0f8ab6e71021a54e56020604051338152a1005b826138ab82614cd8565b905490881b1c1633146138c0575b8101613849565b9350836138b9565b15158061395c575b61394a57816138dd614d21565b905490851b1c1633145f1461393857613904826138f8614d21565b905490861b1c16615692565b545f1981019290831161050a5761391d61392b93614cd8565b9054911b1c16611215614d21565b613933614d9c565b613875565b6040516301bb5b1f60e51b8152600490fd5b604051631a0a745560e11b8152600490fd5b5060075462015180810180911161050a5742106138d0565b61397d81614cd8565b90543391891b1c6001600160a01b03161461399b575b01849061380b565b92508092613993565b604051631e72ba9760e01b8152600490fd5b346102eb575f3660031901126102eb57604080516139d381614bee565b36903760405160035f825b60028210613a2557836139f081614bee565b604051905f90825b60028310613a0557604084f35b81516001600160a01b0316815260019290920191602091820191016139f8565b82546001600160a01b0316815260019283019291909101906020016139de565b346102eb575f3660031901126102eb57613a5d615667565b60ff60145416600581101561047e57600481146105815760031461056f57600e54805f52601b602052600160405f2001549062015180820180921161050a575f52601b602052600160405f200155600e545f527f1053ff2559207f3358e287928bbde971ad88f7b99c0335368afe0c5baf1ef55f6020600160405f200154604051908152a1005b346102eb575f3660031901126102eb57613afc615644565b613b04615667565b60145460ff8116600581101561047e57600403613c3f5760115462015180810180911161050a574210613c2d5760ff1916600317601455600a546040516370a0823160e01b81523060048201526001600160a01b0391909116906020908181602481865afa908115611a1b575f91613c00575b506010548110613b9f575b5f805160206157dd83398151915282604051428152a16001600955005b60405163a9059cbb60e01b81523360048201526024810191909152918190839060449082905f905af1918215611a1b575f805160206157dd8339815191529215613b8257613bf990823d8411611a1457611a058183614c26565b5082613b82565b90508181813d8311613c26575b613c178183614c26565b810103126102eb575183613b77565b503d613c0d565b6040516302e9939360e41b8152600490fd5b604051633b1cf39760e21b8152600490fd5b346102eb575f3660031901126102eb57613c69615667565b60145460ff8116600581101561047e576004146105815760125460ff811615613cf2576013545f5260208052600160405f2001544211613ce05760019160ff1980921660125516176014557f494f9e0263f7798e6fc702c0f9e260e4742108cbc0ce66eae93025756d6418246020604051428152a1005b604051630187744d60e71b8152600490fd5b604051632155c37160e11b8152600490fd5b346102eb5760203660031901126102eb576004355f52601f6020526107a461079860405f20614c48565b346102eb576020806003193601126102eb57613d48614a61565b613d50615644565b60ff6014541691600583101561047e5760048314610581576003831461056f57600192838114159081614146575b5061075057600e54806140f7575b83810180911161050a575f908152601b82526040808220338352601a845281832054835260168452912060028101546001600160a01b03919082161561158f57600a8101805460ff8160081c16600881101561047e576005036140e65760ff16600c811015908161047e57600981149182156140d9575b82156140c8575b50506140b65760105493601485028581046014148615171561050a576064613e33910486614cb0565b876004850192835483811061409e575b50600401613e52888254614cb0565b905561405a575b60105491613e6c60038601938454614cb0565b809355805482811061403e575b5083549260ff841692600c841015928361047e5760028514928315614030575b84841561401e575b5083614011575b5082614005575b5050613f95575b505050505081613f07575b50907fed66735ec09b73f80882349a417c96f1ac5bb6bf493441951d147d84c5ed5d8c92608092600e5460405193338552840152604083015215156060820152a1600955005b600a546040516323b872dd60e01b81523360048201523060248201526044810184905294929392918391869160649183915f91165af1928315611a1b577fed66735ec09b73f80882349a417c96f1ac5bb6bf493441951d147d84c5ed5d8c94608094613f78575b5091925092613ec1565b613f8e90843d8611611a1457611a058183614c26565b5086613f6e565b61047e57600403613ff5575b5050600e5486810180911161050a575f5260078101845260405f209060ff19918783825416179055600e549087820180921161050a576008915f520184528560405f20918254161790558580808080613eb6565b60ff191660041790558680613fa1565b54101590508b80613eaf565b601054111592508d613ea8565b90935061047e57600685149284613ea1565b5f9450600486149350613e99565b8061404c6140529285614ccb565b90614cb0565b81558a613e79565b946006840180549082821190815f14614097576140778484614ccb565b905b55156140895750505f5b94613e59565b61409291614ccb565b614083565b5f90614079565b6004919861404c6140af9286614ccb565b9790613e43565b60405163fdc7b1fb60e01b8152600490fd5b90915061047e576008148880613e0a565b50600a811491505f613e03565b604051627c247360e31b8152600490fd5b805f52601b825260405f205462239880810180911161050a5742108015614130575b15613d8c576040516337888d6760e01b8152600490fd5b50805f52601b82528360405f2001544211614119565b60029150141584613d7e565b346102eb575f3660031901126102eb57604051806001916001549283825260208092019360015f527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6925f905b8282106141c2576107a4866141b6818a0382614c26565b60405191829182614a95565b84546001600160a01b0316875295860195938301939083019061419f565b346102eb575f3660031901126102eb576020601354604051908152f35b346102eb5760403660031901126102eb57614216614a7f565b602435614221615644565b614229615667565b60ff60145416600581101561047e5760048103613c3f5760115462015180810180911161050a574210613c2d5760031461056f576001600160a01b0382811615611efe57600a5416916040516370a0823160e01b81523060048201526020908181602481885afa8015611a1b5784915f91614359575b50106143475760405163a9059cbb60e01b81526001600160a01b038316600482015260248101849052938190859060449082905f905af1938415611a1b577f20a3ee7ebf8af442c82daa0e821d3c5a43acc00c80968747a24d6e7f3663d35494614329575b5050604080516001600160a01b03909216825260208201929092529081908101612581565b8161433f92903d10611a1457611a058183614c26565b508380614304565b60405163356680b760e01b8152600490fd5b809250838092503d8311614383575b6143728183614c26565b810103126102eb578390518661429f565b503d614368565b346102eb576020806003193601126102eb576143a4614a61565b60ff60145416600581101561047e576004811461058157600380911461056f57335f52601a835260405f20545f526016835260405f2090600190600183019485548015613699575f526017815260405f2092855f146144825750505050600a019182549260ff841693600c85101561047e577f4506ecebb8afddc27b5896d964fe56a6aa511603ed4fac7fb871650473f2175d946007036144725750805461ff0019166103001790555b54604080513381526020810192909252911515918101919091528060608101610b8b565b61ff00191661050017905561444e565b90919593505f9060015f9401968754945b858110614524575050505f19830192831161050a57856144f96144fe926112156144e06016977f4506ecebb8afddc27b5896d964fe56a6aa511603ed4fac7fb871650473f2175d9b614d53565b905460039190911b1c6001600160a01b03169184614d53565b614de2565b335f52601a815260405f20545f5252600a60405f2001600a60ff1982541617905561444e565b61452e818a614d53565b905490831b1c6001600160a01b0316331461454b575b8201614493565b925082614544565b346102eb575f3660031901126102eb5760ff60145416600581101561047e57600481146105815760031461056f57600e54805f52602090601b825260405f205462127500810180911161050a5742118015614729575b6147175760018111806146ea575b6146d857600d6145c78154614cbd565b92838255335f526021815260405f20835f52815260405f2054155f146146c6577fedb73a28656fc54b5b54d180d469da306262375b8fab1d30e7bfdfe6fa4d71a893610b8b93335f526021835260405f20905f52825260405f20556016600e5491825f526018815261465260405f20855490815f52835260405f20945f526019835260405f20614d68565b600e545f52601b815261466d600260405f2001855490614d68565b8354835560018301336001600160601b0360a01b825416179055335f52601a815260405f20545f52526003600160405f20015491015554604051918291338360209093929193604081019460018060a01b031681520152565b604051639fbfc58960e01b8152600490fd5b6040516303a5a26f60e11b8152600490fd5b50335f52601a825260405f20545f5260168252600760405f2001815f52825260ff60405f205416156145b7565b60405163709758ab60e11b8152600490fd5b50805f52601b825260405f205442106145a9565b346102eb575f3660031901126102eb57614755615644565b60ff60145416600581101561047e57600390600381141590816148b8575b50612ca457600b546001808201809211805b61050a5782821015610a9457815f526020916016835260405f209185830180546147b56004860191825490614cb0565b916147c66005870193845490614cb0565b936147d76006880195865490614cb0565b90600e9a808c54115f146148595760098c9b99939b5493019a5b8c54600219810190811161050a5784116148365761481a90845f528c8c5260405f205490614cb0565b92805f528b8b525f6040812055801561050a575f1901926147f1565b9695935f95929c5085935083919b506001999a505b555555550190919280614785565b60095f9c9b9c9a99939a9301995b8b54841161489f5761488761489991855f528c8c5260405f205490614cb0565b93805f528b8b525f6040812055614cbd565b92614867565b9695935f95929c9a5085935083919b506001995061484b565b60049150141582614773565b346102eb575f3660031901126102eb576148dc615644565b335f52601a60205260405f20545f52601660205260405f20600681019081549081156149bb575f92839055600a54600291909101805460405163a9059cbb60e01b81526001600160a01b039182166004820152602481018590529490926020918691604491839187165af1938415611a1b577f3d97f39b86d061200a7834082f5926e58ec10fd85a9d6930f497729d5e6cc35c9461499c575b505460408051929091166001600160a01b0316825260208201929092529081908101612581565b6149b49060203d602011611a1457611a058183614c26565b5084614975565b6040516365e52d5160e11b8152600490fd5b346102eb5760203660031901126102eb576004355f52601c602052602060ff60405f2054166040519015158152f35b346102eb5760203660031901126102eb576004355f5260156020526107a461079860405f20614c48565b60209060206040818301928281528551809452019301915f5b828110614a4d575050505090565b835185529381019392810192600101614a3f565b6004359081151582036102eb57565b6044359081151582036102eb57565b600435906001600160a01b03821682036102eb57565b60209060206040818301928281528551809452019301915f5b828110614abc575050505090565b83516001600160a01b031685529381019392810192600101614aae565b60409060031901126102eb576004359060243590565b90600c82101561047e5752565b919091610180810192805182526020810151602083015260018060a01b036040820151166040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e0810151151560e0830152610100808201511515908301526101208082015190830152614b846101408083015190840190614aef565b6101608091015191600883101561047e570152565b60c0810190811067ffffffffffffffff82111761297657604052565b610180810190811067ffffffffffffffff82111761297657604052565b6060810190811067ffffffffffffffff82111761297657604052565b6040810190811067ffffffffffffffff82111761297657604052565b60a0810190811067ffffffffffffffff82111761297657604052565b90601f8019910116810190811067ffffffffffffffff82111761297657604052565b90604051918281549182825260209260208301915f5260205f20935f905b828210614c7e57505050614c7c92500383614c26565b565b855484526001958601958895509381019390910190614c66565b908160209103126102eb575180151581036102eb5790565b9190820180921161050a57565b5f19811461050a5760010190565b9190820391821161050a57565b600154811015614d0d5760015f527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf601905f90565b634e487b7160e01b5f52603260045260245ffd5b60015415614d0d5760015f527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6905f90565b8054821015614d0d575f5260205f2001905f90565b8054600160401b81101561297657614d8591600182018155614d53565b819291549060031b91821b915f19901b1916179055565b6001548015614dce575f1901614dc9614db482614cd8565b81549060018060a01b039060031b1b19169055565b600155565b634e487b7160e01b5f52603160045260245ffd5b80548015614dce575f190190614dfb614db48383614d53565b55565b90604051918281549182825260209260208301915f5260205f20935f905b828210614e3257505050614c7c92500383614c26565b85546001600160a01b031684526001958601958895509381019390910190614e1c565b8181029291811591840414171561050a57565b8115614e72570490565b634e487b7160e01b5f52601260045260245ffd5b60405190614e9382614bb5565b5f610160838281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201520152565b600c82101561047e5752565b600882101561047e5752565b8051821015614d0d5760209160051b010190565b90600e54805f52601b60205260405f205462151800810180911161050a5742108015615621575b61560f57805f1981011161050a575f1981015f52601860205260405f20335f52602160205260405f205f1983015f5260205260405f20545f5260205260405f209260018060a01b03600185015416908133036155fd5760048501805460ff8116156155eb5760ff8160081c166155d957835f52601a60205260405f20545f52601660205260ff600a60405f20015416600c81101561047e576004036106e05761ff00191661010017905561558857505f1981015f526019602052614ff760405f20614c48565b5f915f5b825181101561504f575f1982015f52601860205260405f2061501d8285614ef6565b515f5260205260ff600460405f2001541661503b575b600101614ffb565b92615047600191614cbd565b939050615033565b5061506d9291505f19015f52601b602052600360405f200154614e68565b915f8093600193600b54945b60018601861161050a57600186018110156150ce57805f52601660205260ff600a60405f20015416600c81101561047e576004146150ba575b600101615079565b956150c6600191614cbd565b9690506150b2565b509091929350606093600e545f52601c60205260ff60405f205416615562575b6150f88684614e68565b925f9660015b600b5460018101811161050a5760010181101561519857805f52601660205260405f2060ff600a82015416600c81101561047e57600414615143575b506001016150fe565b6003018054919791878110615173575b60019261516c926151658a8094614ccb565b9055614cb0565b969061513a565b60019261518b61516c939c61404c846151659c614ccb565b9b82995092509250615153565b509094939195969296805180615346575b505084841061527d575050505060028201819055600a54600183015460405163a9059cbb60e01b81526001600160a01b039182166004820152602481018490529391602091859116815f81604481015b03925af1928315611a1b577f1d3e1b711499f6260ce9c1c1eeabe0f46dfc60b81542d0021ecef0716d0ed1cb9361525e575b5060018101549054604080516001600160a01b03909316835260208301939093529181019190915280606081015b0390a1565b6152769060203d602011611a1457611a058183614c26565b505f61522b565b6402540be40061528d8587614ccb565b10156152df5750505060028301819055600a54600184015460405163a9059cbb60e01b81526001600160a01b0391821660048201526024810193909352919391602091859116815f81604481016151f9565b7fd2c92d0f1dd9e4ffc64744c794d5c6f0c58306865dcb816a20cf0db5c300d97e955060a094600360ff1960145416176014556040519485526020850152604084015260608301526080820152a15f805160206157dd8339815191526020604051428152a1565b5f989498979391959692975088155f146155485750969591959492945b875f935b86518510156155385761537a8588614ef6565b515f52601660205260018060a01b03600260405f200154165f52601d60205260405f20545f5260176020526153b4600160405f2001614dfe565b965f985f9a5f5b8a5181101561547f576001600160a01b036153d6828d614ef6565b51165f52601a60205260405f20545f52601660205260405f2060ff600a82015416600c81101561047e57600414615411575b506001016153bb565b909b9c61541d90614cbd565b9c8015801580615472575b1561543e575050600460019101549b5b90615408565b9c91909c615450575b50600190615438565b6004919c5001548060011b908082046002149015171561050a579a6001615447565b5060048301548211615428565b5092959194999093979b969a6154959088614e68565b90808210156155305750985b5f5b8951811015615517576001600160a01b036154be828c614ef6565b51165f52601a60205260405f20545f52601660205260405f2060ff600a82015416600c81101561047e576004146154f9575b506001016154a3565b8b6001929e60046155109301615165838254614ccb565b9c906154f0565b50959a9199929850929650946001909101939192615367565b9050986154a1565b9296985092509293505f806151a9565b9061404c615556928a614e68565b96959195949294615363565b949350601f60205261558261557960405f20614c48565b94855190614cb0565b946150ee565b5f60028501559254604080516001600160a01b039095168552602085019190915291927f2f6a2242608827783b40fb797960e2d61ea6e692e9c61049f223ec66f18bbc429290915081908101615259565b604051630c8d9eab60e31b8152600490fd5b604051636a9a57a560e01b8152600490fd5b604051634a7777b360e11b8152600490fd5b60405163215eb65f60e21b8152600490fd5b50805f52601b60205260405f205462224700810180911161050a57421015614f31565b600260095414615655576002600955565b604051633ee5aeb560e01b8152600490fd5b5f546001600160a01b0316330361567a57565b6040516306b66d0160e01b8152336004820152602490fd5b5f80546001600160a01b039283166001600160a01b03198216811783559216907f688b8f34d886f8a2414b39aa6cef1ec6198215ba9b47fe8ac4260b44139bd5b69080a3565b5f52601b60205260405f2054804210908115615708575b506156f657565b6040516307f1ee4960e31b8152600490fd5b90506203f480810180911161050a5742115f6156ef565b5f52601b602052600260405f2001541561573557565b60405163a8de391160e01b8152600490fd5b905f905f5b83548110156157885761575f8185614d53565b90543360039290921b1c6001600160a01b031614615780575b60010161574c565b915081615778565b509180545f19810190811161050a57614c7c926157b56157ab6144f99385614d53565b9190549285614d53565b81546001600160a01b03600392831b81811b199092169490921b9490941c1690921b17905556fe7a406291d7dedc33dcf93635d6443b37b6f30b4d33a6b86f5e2427e9d96f7c22a264697066735822122099aac4f7166212dbc55f55775fd48d1e1ea3373a5b0619be1b1584daf80bcfff64736f6c63430008170033",
    sourceMap:
      "274:69023:26:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;274:69023:26;;;;;1882:26:28;274:69023:26;;;;;;;;;;;;;;;;;-1:-1:-1;;274:69023:26;;;;4624:15;274:69023;;;;;;;;;;;;;;;4624:44;;4620:95;;5069:25;5050:44;5046:104;;274:69023;47284:3;47270:8;274:69023;;;;;;;;;47266:16;;;;;274:69023;;;;;47330:20;274:69023;;;;;47388:12;;;;274:69023;;;;;;;;;;;;;;47388:39;;;:91;;;47284:3;47388:148;;;;47284:3;47388:237;;;47284:3;47367:1617;;;47284:3;;;;;274:69023;47284:3;;274:69023;47251:13;;47367:1617;47662:19;;;;;47682:8;;274:69023;;;;;;;;;;;;;;;;47658:406;274:69023;;;-1:-1:-1;;274:69023:26;;-1:-1:-1;;274:69023:26;;;;;-1:-1:-1;47658:406:26;274:69023;;;;;;;;;;;48210:42;:96;;;47658:406;48185:296;;47658:406;274:69023;;;;;;;;;;;;48543:25;48922:47;48543:25;274:69023;48543:25;274:69023;48543:25;;;;48524:44;;;:205;;;;47658:406;48499:400;;;47658:406;274:69023;;;;;;;48942:12;;274:69023;;;;;;;;;;;;;;;:::i;:::-;48922:47;47367:1617;;;;;;48499:400;274:69023;;;;;;;;;;;;;48829:33;;;274:69023;;;;;;;;;;;48499:400;;;;48524:205;274:69023;;;;;;;;;;;;;;48699:30;48524:205;;;274:69023;;;;;;;;;;;;48185:296;274:69023;;15112:27;274:69023;;;;;;;;;;;48411:33;;;274:69023;;;;;;;;;;;48185:296;;48210:96;274:69023;;;;;;;;;;;;;;48276:30;48210:96;;47658:406;274:69023;;;47824:34;:103;;;47658:406;47795:251;;47658:406;;;;47795:251;-1:-1:-1;;274:69023:26;;;;;;;;;47976:26;274:69023;;;;;;;;;;;;;;47795:251;;;274:69023;;;;;;;;;;;;47824:103;-1:-1:-1;;;274:69023:26;;;;;;;;;47887:26;274:69023;;;;;;;;47886:41;47824:103;;47388:237;274:69023;;;;47604:21;47588:37;;;47388:237;;;:148;274:69023;;;;;47499:37;;;47388:148;;;:91;-1:-1:-1;274:69023:26;;-1:-1:-1;47463:16:26;47447:32;;;47388:91;;47266:16;274:69023;5046:104;274:69023;;-1:-1:-1;;;5117:22:26;;274:69023;;5117:22;4620:95;274:69023;;-1:-1:-1;;;4691:13:26;;274:69023;;4691:13;274:69023;;;;;;-1:-1:-1;;274:69023:26;;;;;63765:7;274:69023;;;;;;;;;;;;;;;;;;;;;;920:70:28;;;:::i;:::-;274:69023:26;4624:15;274:69023;;;;;;;;;4624:44;;4620:95;;5069:25;5050:44;;5046:104;;274:69023;16168:42;;;:102;;;;274:69023;16151:177;;;16385:8;274:69023;;;;;16364:20;274:69023;;;;;;16567:7;274:69023;;;;;;;16526:15;:49;:90;;;;;274:69023;16509:170;;;274:69023;;;16860:28;274:69023;;;;;;;;;;;;;;;16918:16;;;;16914:68;;274:69023;17087:14;;274:69023;-1:-1:-1;;;;;274:69023:26;;;;;17070:16;274:69023;;;;;;;;;17049:20;274:69023;;;;17049:61;;274:69023;;;;;;;;;;;;;17049:95;;;;:221;;;274:69023;17032:305;;;;17479:22;17378:18;274:69023;17413:50;17378:18;;274:69023;;;;;;;;;16385:8;274:69023;;;17413:25;274:69023;;;;;17413:50;:::i;:::-;274:69023;;;;;17479:22;274:69023;17032:305;274:69023;;-1:-1:-1;;;17302:24:26;;274:69023;;17302:24;17049:221;274:69023;;;;;17070:16;274:69023;;;;;;;;17049:20;274:69023;;17161:99;274:69023;;;17161:99;274:69023;;;;;;;;;;;17160:110;17049:221;;;;16914:68;274:69023;;-1:-1:-1;;;16957:14:26;;274:69023;;16957:14;16509:170;274:69023;;-1:-1:-1;;;16648:20:26;;274:69023;;16648:20;16526:90;:15;;;16591:25;16526:90;;;16151:177;274:69023;;-1:-1:-1;;;16302:15:26;;274:69023;;16302:15;16168:102;16245:25;16226:44;;;;16168:102;;;274:69023;;;;;;-1:-1:-1;;274:69023:26;;;;;;;;65700:18;274:69023;;;;;;;;:::i;:::-;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;68992:20;274:69023;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;274:69023:26;;;;-1:-1:-1;;;;;274:69023:26;;:::i;:::-;;;;66461:16;274:69023;;;;;;;;;;;;;;;;;;;-1:-1:-1;;274:69023:26;;;;;1764:17:28;274:69023:26;;;;;;;;;;;;;-1:-1:-1;;274:69023:26;;;;;;;;:::i;:::-;;4624:15;274:69023;;;;;;;;;;4624:44;;4620:95;;5069:25;;5050:44;;5046:104;;274:69023;;;13069:24;274:69023;;;;;;;;;;13136:20;274:69023;;;;;13216:12;;;274:69023;;;;;;;;;;;;;13232:20;13216:36;13212:86;;274:69023;13385:13;274:69023;;;;13404:13;;274:69023;;13380:178;13400:24;;;;;;13380:178;13571:5;;;;;;13567:56;;13940:64;;274:69023;;13698:227;;;;-1:-1:-1;274:69023:26;;-1:-1:-1;;274:69023:26;;;;;13698:227;13962:12;;274:69023;;;;-1:-1:-1;;;;;274:69023:26;;;;;13449:10;274:69023;;;;;;;;;;;;;;;;13940:64;274:69023;13698:227;-1:-1:-1;;274:69023:26;;;;;13698:227;;13567:56;274:69023;;-1:-1:-1;;;13599:13:26;;274:69023;;13599:13;13426:3;13463:16;;;;:::i;:::-;274:69023;;13449:10;274:69023;;;;-1:-1:-1;;;;;274:69023:26;13449:30;13445:103;;13426:3;274:69023;13385:13;;13445:103;13499:11;;;;;;13528:5;;;;;;;13212:86;274:69023;;-1:-1:-1;;;13275:12:26;;274:69023;;13275:12;274:69023;;;;;;-1:-1:-1;;274:69023:26;;;;;;:::i;:::-;2466:103:25;;:::i;:::-;274:69023:26;4624:15;274:69023;;;;;;;;;4624:44;;4620:95;;5069:25;5050:44;5046:104;;5159:1;;;:::i;:::-;274:69023;3068:21:25;274:69023:26;;;;;;;;-1:-1:-1;;274:69023:26;;;;920:70:28;;:::i;:::-;4624:15:26;274:69023;;;;;;;;;;;;4624:44;;4620:95;;5069:25;5050:44;;5046:104;;274:69023;43598:42;274:69023;43598:42;;;:102;;;274:69023;43581:177;;43784:8;274:69023;43784:12;;;:86;;;274:69023;43767:166;;43943:10;;;:::i;:::-;274:69023;;43784:8;274:69023;;;44045:25;44026:44;44022:527;;274:69023;;;;44649:20;274:69023;;;;;44707:15;274:69023;;44737:13;274:69023;44733:2062;;274:69023;46842:7;44707:15;274:69023;44707:15;;274:69023;;;46805:15;5069:25;46805:15;274:69023;46906:57;46805:15;;274:69023;44737:13;274:69023;46860:14;;;;274:69023;43784:8;274:69023;46906:57;46951:11;274:69023;;;46906:57;;;;274:69023;;;;;;;;;;;;;;;;;;46906:57;;;;274:69023;44733:2062;274:69023;4624:15;274:69023;;;;;;;;;4624:44;;4620:95;;5069:25;5050:44;5046:104;;274:69023;47284:3;47270:8;274:69023;;;;;;;;;47266:16;;;;;274:69023;;;47330:20;274:69023;;;;;47388:12;274:69023;47388:12;;;274:69023;;;;;;;;;;47388:39;;;:91;;;47284:3;47388:148;;;;47284:3;47388:237;;;47284:3;47367:1617;;;47284:3;;;274:69023;47284:3;;274:69023;47251:13;;47367:1617;43784:8;274:69023;;;;;47662:19;;;274:69023;;;;;;;;47658:406;274:69023;;;-1:-1:-1;;;47388:12:26;;;274:69023;;-1:-1:-1;;274:69023:26;;;;;47658:406;274:69023;4624:15;274:69023;;;;;;;;;48210:42;:96;;;47658:406;48185:296;;47658:406;274:69023;4624:15;274:69023;;;;;;;;;;48922:47;48524:44;44045:25;274:69023;48524:44;;:205;;;47658:406;48499:400;;47658:406;274:69023;;47388:12;274:69023;;;;;44045:25;48942:12;;274:69023;;47388:12;;274:69023;;;;;;;;;;;;:::i;:::-;48922:47;47367:1617;;;;48499:400;274:69023;;47662:19;47388:12;;;;274:69023;;;47388:12;;;274:69023;43784:8;274:69023;;;48829:33;;;274:69023;;;;;;;;;;;48499:400;;48524:205;274:69023;43784:8;274:69023;;;47662:19;;;274:69023;;;;;;;;48699:30;48524:205;;48185:296;274:69023;;15112:27;47388:12;;;;274:69023;;;47388:12;;;274:69023;43784:8;274:69023;;;48411:33;;;274:69023;;;;;;;;;;;48185:296;;48210:96;274:69023;43784:8;274:69023;;;47662:19;;;274:69023;;;;;;;;48276:30;48210:96;;47658:406;274:69023;;;47824:34;:103;;;47658:406;47795:251;;47658:406;;;;47795:251;-1:-1:-1;;274:69023:26;;;;;;;;;47976:26;274:69023;;;;;;;;;;;;;;47795:251;;;47824:103;-1:-1:-1;;;274:69023:26;;;;;;;;;47887:26;274:69023;;;;;;;;47886:41;47824:103;;47388:237;274:69023;;;;47604:21;47588:37;;;47388:237;;;:148;274:69023;;;;;47499:37;;;47388:148;;;:91;-1:-1:-1;274:69023:26;;-1:-1:-1;44045:25:26;47447:32;;;47388:91;;47266:16;;274:69023;44845:3;274:69023;;;;;;;;;;;44825:18;;;;;274:69023;;;44897:24;274:69023;;;;;;45039:13;274:69023;;;45039:24;;:52;;;;44845:3;45035:976;;;44845:3;;;274:69023;;44810:13;;45035:976;45202:13;;274:69023;45243:3;274:69023;;45217:24;;;;;45368:16;;;;:::i;:::-;274:69023;;;;;;;;5069:25;274:69023;;;;;45351:16;274:69023;;;;;;;;47330:20;274:69023;;;;;45547:12;47388;45547;;274:69023;;;;;;;;;;;;;;;;45547:34;;45543:428;;45243:3;;;;274:69023;45202:13;;45543:428;47662:19;274:69023;;;;;;;45909:25;5069;45698:19;;274:69023;;;;45752:20;45698:74;274:69023;45752:20;;274:69023;;;45698:74;;:::i;:::-;274:69023;;;45909:25;274:69023;45543:428;;;;;45217:24;;;;;274:69023;45035:976;;;45039:52;45067:24;;;;45039:52;;;44825:18;;;274:69023;46257:13;274:69023;;47270:8;274:69023;;;;;;;46252:183;;46290:3;274:69023;;46272:16;;;;;;274:69023;;;47330:20;274:69023;;;47388:12;274:69023;;;46317:30;274:69023;;;;;;;;;46317:52;46313:108;;46290:3;274:69023;;46257:13;;;46313:108;46393:9;;274:69023;46393:9;;:::i;:::-;46313:108;;;;;46272:16;;;;;;274:69023;43784:8;274:69023;46453:12;46449:336;;46252:183;44733:2062;;;46449:336;46489:12;;;274:69023;5069:25;274:69023;;4624:15;274:69023;;;4624:15;274:69023;-1:-1:-1;;;;;;;;;;;274:69023:26;;;44707:15;274:69023;;46595:35;46485:269;46449:336;;;46485:269;46712:23;274:69023;44737:13;274:69023;46712:23;:::i;:::-;46698:37;274:69023;46485:269;;44022:527;-1:-1:-1;;274:69023:26;;;;;;;;;;;44108:25;274:69023;;;;;;;;44107:40;:100;;;;44022:527;44107:160;;;44022:527;44107:221;;;44022:527;44107:282;;;;44022:527;44107:343;;;44022:527;44086:453;;44022:527;44086:453;-1:-1:-1;;274:69023:26;;;4624:15;274:69023;44086:453;44022:527;;44107:343;-1:-1:-1;;274:69023:26;;;-1:-1:-1;274:69023:26;;;;;44410:26;274:69023;;;;;;;;;;44409:41;44107:343;;;:282;274:69023;-1:-1:-1;;;274:69023:26;;;;;;;;;44349:26;274:69023;;;;;;;;44348:41;44107:282;;;:221;274:69023;;;;;44288:26;274:69023;;;;;;;;44287:41;44107:221;;;;:160;274:69023;-1:-1:-1;;;274:69023:26;;;;;;;;;44108:25;274:69023;;;;;;;;44227:40;44107:160;;;:100;274:69023;-1:-1:-1;;;274:69023:26;;;;;;;;;44108:25;274:69023;;;;;;;;44167:40;44107:100;;;43767:166;274:69023;;-1:-1:-1;;;43902:20:26;;274:69023;;43902:20;43784:86;274:69023;;;;43830:20;274:69023;;;;;;43830:40;274:69023;43812:15;:58;43784:86;;43598:102;-1:-1:-1;274:69023:26;;-1:-1:-1;43675:25:26;43656:44;;;43598:102;;274:69023;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;920:70:28;;;;;:::i;:::-;274:69023:26;5050:15;274:69023;;;;;;;;5069:25;5050:44;5046:104;;26329:8;274:69023;26352:11;26361:2;26352:11;;;:26;;;274:69023;26348:276;;;26419:1;274:69023;;26398:22;26394:87;;26348:276;;;;;274:69023;;;;;;;;;;;;26685:433;274:69023;;;26685:433;274:69023;;27133:39;;274:69023;27133:39;274:69023;;27133:39;:::i;26729:3::-;274:69023;;26705:22;;;;;274:69023;26776:13;;274:69023;;;26771:205;26993:5;;26989:64;;-1:-1:-1;;;;;27092:14:26;;;;:::i;:::-;274:69023;;;;;-1:-1:-1;;;274:69023:26;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;26690:13;;;;274:69023;;;;;;;;;;;;26806:3;274:69023;;;;;;;;;;26791:13;;;;;;-1:-1:-1;;;;;274:69023:26;26833:14;;;;:::i;:::-;274:69023;;;;;;26851:20;274:69023;;26851:30;274:69023;;;26851:30;274:69023;;26833:48;26829:133;;26776:13;;;;26806:3;;26776:13;26806:3;;26776:13;274:69023;;26806:3;26776:13;;26829:133;26905:11;;;;;;;;26938:5;;;26791:13;;;;;;;;;;;274:69023;;;;;;;;;;;;26705:22;;;26394:87;274:69023;;-1:-1:-1;;;26447:19:26;;274:69023;;26447:19;26348:276;274:69023;26501:10;;26497:127;;26348:276;;;;;;;26497:127;26552:1;274:69023;;26531:22;26527:87;26497:127;26527:87;274:69023;;-1:-1:-1;;;26580:19:26;;274:69023;;26580:19;26352:26;26367:11;274:69023;26367:11;;;26352:26;;274:69023;-1:-1:-1;;;;274:69023:26;;;;;;;;;;;-1:-1:-1;;;;;274:69023:26;;;;;;;;;;;;;;;;;-1:-1:-1;;;;274:69023:26;;;;;;;;;;;;;;-1:-1:-1;;274:69023:26;;;;63272:12;274:69023;;;-1:-1:-1;;;;;274:69023:26;;;;;;;;;;;;;;-1:-1:-1;;274:69023:26;;;;;64072:13;274:69023;;;;;;;;;;;;;-1:-1:-1;;274:69023:26;;;;;4624:15;274:69023;;;;;;;;;4624:44;;4620:95;;5069:25;5050:44;5046:104;;40170:10;274:69023;;40153:16;274:69023;;;;;;;;40119:20;274:69023;;;;;;40268:23;;274:69023;;;;;40230:24;274:69023;;;;;;;;;;;40353:12;;;274:69023;;40353:26;40349:80;;274:69023;;;40533:12;;;274:69023;;-1:-1:-1;;274:69023:26;;;;;40583:36;-1:-1:-1;40605:13:26;;40583:36;:::i;:::-;40737:8;274:69023;;;40703:33;;;274:69023;;;;;;;;;;;;5069:25;40782:19;;274:69023;;;40804:20;40782:42;274:69023;40804:20;;274:69023;;;40782:42;;:::i;:::-;274:69023;;;40901:25;;:36;:25;;;274:69023;;;40901:36;:::i;:::-;274:69023;;;;40605:13;;274:69023;41013:24;41009:576;;274:69023;-1:-1:-1;40353:12:26;;;274:69023;;;;;;;;-1:-1:-1;;;;;274:69023:26;;;;;;;;;;;;;;;;41600:55;;274:69023;;;;41600:55;274:69023;41009:576;40353:12;41053:13;;274:69023;;-1:-1:-1;;274:69023:26;;;-1:-1:-1;41134:3:26;274:69023;40605:13;;274:69023;41108:24;;;;;40605:13;41244:16;274:69023;40605:13;;;;41244:16;:::i;:::-;274:69023;;;;;;;;5069:25;274:69023;;;;;40153:16;274:69023;;;;;;;;40119:20;274:69023;;;;;40533:12;41297:13;;274:69023;;;;;;;;;41522:38;41375:20;5069:25;41375:20;;274:69023;;;;41398:21;41375:44;274:69023;41398:21;;274:69023;;;41375:44;;:::i;:::-;274:69023;;;41522:26;274:69023;;;41522:38;:::i;:::-;274:69023;;;41093:13;;41108:24;;;41600:55;41009:576;;40349:80;274:69023;;-1:-1:-1;;;40402:16:26;;274:69023;;40402:16;274:69023;;;;;;-1:-1:-1;;274:69023:26;;;;;;4624:15;274:69023;;;;;;;;;4624:44;;4620:95;;5069:25;5050:44;5046:104;;17926:10;274:69023;;;17909:16;274:69023;;;;;;;;17875:20;274:69023;17875:20;274:69023;;;;;;;18024:23;;;;274:69023;;;;;17986:24;274:69023;;;;;18109:12;;;274:69023;;;;;;;;;;18109:26;18105:80;;18350:8;274:69023;;;;18329:20;274:69023;;;;;;18373:6;274:69023;;;;;;;18299:15;:81;:155;;;;274:69023;18282:232;;-1:-1:-1;;274:69023:26;;;;;;;;;18591:18;274:69023;;;;;;18591:44;18587:98;;19154:12;;;;;19169:21;;;274:69023;;;;;;;;19169:21;274:69023;;;19226:13;19204:36;;;:::i;:::-;274:69023;;;;;;;19255:29;274:69023;;;;;;;;;18350:8;274:69023;;;19396:21;274:69023;;;;;;;19396:52;;;:::i;:::-;5069:25;19582:19;;274:69023;;19604:20;274:69023;19604:20;;274:69023;;;19582:42;;;:::i;:::-;274:69023;19554:25;;274:69023;;;;;;;4624:15;274:69023;;;;;;;;;;;19775:42;;19771:531;;274:69023;;;;;;20390:33;20505:25;274:69023;18350:8;274:69023;;;20390:33;274:69023;;;;;;;;;;;18350:8;274:69023;;;;;;;;;;;;;20504:36;20500:109;;274:69023;18350:8;274:69023;;;;17926:10;274:69023;;;;;;;;;20624:36;;274:69023;;;;;20624:36;274:69023;20500:109;274:69023;;;;20500:109;;;;;;19771:531;19886:8;274:69023;;;;19833:15;;19867:13;;19833:15;;274:69023;;;;;;19867:13;274:69023;;;19862:238;274:69023;;;;;;;;;;;;;;;;;;;;;;;20390:33;274:69023;20210:3;20505:25;274:69023;;-1:-1:-1;20177:115:26;;19862:238;19771:531;;;;20177:115;274:69023;18109:12;274:69023;4624:15;274:69023;20177:115;;;;19900:3;274:69023;;;19882:16;;;;;;274:69023;;;;;;;;;;;19996:13;274:69023;;;;;;;;;19996:38;;;;19992:94;;19900:3;;274:69023;19867:13;;;19992:94;20058:9;;;;;:::i;:::-;19992:94;;;;;19882:16;;;18587:98;274:69023;;-1:-1:-1;;;18658:16:26;;274:69023;;18658:16;18282:232;274:69023;;-1:-1:-1;;;18486:17:26;;274:69023;;18486:17;18299:155;274:69023;;;;18329:20;274:69023;;;;;;18299:15;18396:58;18299:155;;274:69023;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;274:69023:26;;;;;;:::i;:::-;2466:103:25;;:::i;:::-;274:69023:26;4624:15;274:69023;;;;;;;;;4624:44;;4620:95;;5069:25;5050:44;5046:104;;58481:8;274:69023;;;;58460:20;274:69023;;;;;;58504:6;274:69023;;;;;;;58430:15;:81;:178;;;;274:69023;58413:255;;-1:-1:-1;;274:69023:26;;;;;;;;;58681:25;274:69023;;;;;;58677:102;;60504:8;274:69023;;60557:3;274:69023;;;;;;;;;;60542:13;;;;;274:69023;;;60603:20;274:69023;;;;;60644:25;274:69023;60644:25;;274:69023;;60644:29;;60640:250;;60557:3;274:69023;;58481:8;274:69023;;61014:12;;:83;;;60557:3;61014:126;;;60557:3;60993:741;;60557:3;274:69023;58481:8;274:69023;5069:25;61801:12;;61797:322;;60557:3;62188:48;;;;;60557:3;62184:239;;60557:3;274:69023;60557:3;;274:69023;60527:13;;62184:239;62274:25;;;274:69023;;;;;;;62364:12;274:69023;62386:12;;;;274:69023;;;-1:-1:-1;;;62364:44:26;;-1:-1:-1;;;;;274:69023:26;;;;62364:44;;274:69023;;;;;;;;;;;;;;;;;;;;62364:44;;;;;;;274:69023;62364:44;;;62184:239;;;;62364:44;;;274:69023;62364:44;274:69023;62364:44;;;;;;;;:::i;:::-;;;;;:::i;:::-;;;;;;;;;;;274:69023;;;;;;;;;62188:48;62207:25;;;;274:69023;62207:29;;62188:48;;61797:322;274:69023;;;;;;;;;;;;;61837:26;;;274:69023;;;;;;61837:44;61833:272;61797:322;61833:272;61905:115;:25;;;274:69023;;;61905:115;:::i;:::-;274:69023;;58481:8;274:69023;;;;;;;;;;;;;;61837:26;;;274:69023;;;;;;;61833:272;61797:322;;60993:741;274:69023;4624:15;274:69023;;;;;;;;61217:25;61198:44;:119;;;;60993:741;-1:-1:-1;61173:547:26;;;5069:25;61378:19;;274:69023;;;;;58481:8;274:69023;;;;;;;;;;;;;;61464:26;;;274:69023;;;;;;61173:547;60993:741;;;61173:547;5069:25;61580:19;;274:69023;;;;;61666:25;;;274:69023;61173:547;;61198:119;-1:-1:-1;;274:69023:26;;;-1:-1:-1;274:69023:26;;;;;;58681:25;274:69023;;;;;;61266:51;61198:119;;;61014:126;61117:19;5069:25;61117:19;;274:69023;61117:23;;61014:126;;:83;274:69023;;;;;;;;;;;;;;;58681:25;274:69023;;;;;;61046:51;61014:83;;60640:250;274:69023;;;60840:25;;;274:69023;60640:250;;;;60542:13;62448:14;274:69023;62448:14;;274:69023;3068:21:25;274:69023:26;;58677:102;274:69023;;-1:-1:-1;;;58754:14:26;;274:69023;;58754:14;58413:255;274:69023;;-1:-1:-1;;;58640:17:26;;274:69023;;58640:17;58430:178;274:69023;;;;58460:20;274:69023;;;;;;58601:6;274:69023;;;;;;;58430:15;58527:81;58430:178;;274:69023;;;;;;-1:-1:-1;;274:69023:26;;;;;;1524:13:28;274:69023:26;;;;;;;;;;;;;;;;-1:-1:-1;;274:69023:26;;;;;;:::i;:::-;-1:-1:-1;;;;;274:69023:26;;;;;4487:18;;4483:77;;274:69023;5050:15;274:69023;;;;;;;;5069:25;5050:44;;;5046:104;;274:69023;30495:10;274:69023;;30478:16;274:69023;;;;;;30533:10;;;:94;;;;274:69023;30516:158;;;274:69023;30687:5;30683:56;;274:69023;30842:13;274:69023;;;;;;;30837:170;30857:30;;;;;;31020:7;;;;31016:65;;274:69023;;;;31155:38;;;:92;;30837:170;31155:150;;;30837:170;31138:222;;31373:38;;;274:69023;;;-1:-1:-1;;;;;;274:69023:26;-1:-1:-1;;;;;274:69023:26;;;;;;;;;31508:15;31479:44;274:69023;31570:8;274:69023;31537:41;274:69023;31369:987;274:69023;;;;32462:38;;;;:92;;;31369:987;32445:908;;31369:987;33368:39;274:69023;;;;;;;33368:39;274:69023;32445:908;274:69023;32579:13;;;274:69023;;;;32610:52;32606:472;274:69023;;;32701:24;274:69023;;;;32701:24;:::i;:::-;274:69023;;;;;;;32765:30;;;;;;32606:472;;;;-1:-1:-1;;;;;274:69023:26;;;;;;;;;;;;;;;;;;;;;;;;33193:26;274:69023;33222:81;33193:110;33222:81;;33368:39;33222:81;;:::i;:::-;274:69023;;;;;;33193:26;;:::i;:110::-;33317:23;;:::i;:::-;32445:908;;;;;32797:3;32828:22;;;;;:::i;:::-;274:69023;;;;;;;32828:50;32824:114;;32797:3;;274:69023;32750:13;;32824:114;32906:9;-1:-1:-1;32906:9:26;32824:114;;32606:472;33013:22;;;;;;:::i;:::-;274:69023;;;;;;;33013:22;:::i;:::-;274:69023;32606:472;;;32462:92;274:69023;;;;;32516:38;;32462:92;;31369:987;31664:26;274:69023;31694:6;274:69023;;;;;;;31630:15;;:71;:133;;;31369:987;31609:737;;;-1:-1:-1;;274:69023:26;;;-1:-1:-1;;;;;;274:69023:26;;;;;31369:987;;31609:737;31630:15;31898:75;:141;;;31609:737;31873:459;;;274:69023;;;-1:-1:-1;;;;;;274:69023:26;-1:-1:-1;;;;;274:69023:26;;;;;;;;;31630:15;31664:26;274:69023;32239:8;274:69023;32206:41;274:69023;31369:987;;31873:459;274:69023;;-1:-1:-1;;;32301:12:26;;274:69023;;32301:12;31898:141;274:69023;31997:30;274:69023;32031:8;274:69023;31997:42;;31898:141;;31630:133;274:69023;31721:30;274:69023;31755:8;274:69023;31721:42;31630:133;;31155:150;274:69023;31263:30;274:69023;31297:8;274:69023;31263:42;31155:150;;:92;274:69023;;;;;31209:38;31155:92;;31016:65;274:69023;;-1:-1:-1;;;31050:20:26;;274:69023;;31050:20;30889:3;30927:22;;;;:::i;:::-;274:69023;;;;;;;30912:37;;30908:89;;30889:3;274:69023;30842:13;;;;30908:89;30969:13;;;30908:89;;;30516:158;30652:11;274:69023;30516:158;;30533:94;274:69023;;;;30559:20;274:69023;;;30559:34;274:69023;;;30559:34;274:69023;;;;;;;;;30559:68;30533:94;;;4483:77;274:69023;;-1:-1:-1;;;4528:21:26;;274:69023;;4528:21;274:69023;;;;;;-1:-1:-1;;274:69023:26;;;;;;:::i;:::-;920:70:28;;:::i;:::-;274:69023:26;5050:15;274:69023;;;;;;;;;5069:25;;5050:44;;5046:104;;-1:-1:-1;;;;;274:69023:26;;;;;27626:382;;274:69023;28148:45;274:69023;;;-1:-1:-1;;;;;274:69023:26;;28018:39;274:69023;;;28018:39;274:69023;28087:15;28067:35;274:69023;;;;;;;;;;;;;;;28148:45;274:69023;27626:382;274:69023;27707:13;274:69023;;;;;;27702:219;27722:30;;;;;;27702:219;27938:5;;;;;;27934:64;;27626:382;;;;27754:3;27804:22;;;;:::i;:::-;274:69023;;;;;;;27781:45;;27777:130;;27754:3;274:69023;27707:13;;27777:130;27850:11;;;;;;27883:5;;;;;;;274:69023;;;;;;-1:-1:-1;;274:69023:26;;;;;1642:30:28;274:69023:26;;;;;;;;;;;;;-1:-1:-1;;274:69023:26;;;;;;64669:19;274:69023;;;;;;;;;;;;;;;;68036:451;274:69023;;;;:::i;:::-;;;;:::i;:::-;;;;67892:20;274:69023;;;;;67969:27;:9;;:27;:9;;;274:69023;67981:8;274:69023;67969:27;;274:69023;;68092:23;;;;274:69023;;;;;;;68129:12;;;274:69023;;68155:19;;;;274:69023;;68188:20;;274:69023;68222:25;;;274:69023;68261:25;;;;274:69023;;;;68300:33;;;274:69023;;;;;;;;68352:19;;;;274:69023;;;;;;;;68390:26;;;;274:69023;;68435:12;274:69023;;;;68435:12;;274:69023;;;;;;;:::i;:::-;;;;68036:451;;274:69023;;68036:451;;274:69023;68036:451;;;274:69023;68036:451;;;274:69023;68036:451;;;274:69023;68036:451;;;274:69023;;;;68036:451;;274:69023;;;68036:451;;;274:69023;68036:451;;;274:69023;68036:451;274:69023;;;68036:451;;;;:::i;:::-;68352:19;274:69023;;68036:451;;;;:::i;:::-;274:69023;;;;;;;:::i;67969:27::-;;;;274:69023;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;65089:24;274:69023;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;274:69023:26;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;274:69023:26;;;;;;;:::i;:::-;67239:451;274:69023;;;;;:::i;:::-;-1:-1:-1;;;;;;274:69023:26;;;;;;;67113:16;274:69023;;;;;;;;;;;67079:20;274:69023;;;;;;;67172:9;;;274:69023;67184:8;274:69023;67172:27;;274:69023;;67295:23;274:69023;67295:23;;274:69023;67332:12;;;;274:69023;;67358:19;;;;274:69023;;67391:20;;274:69023;67425:25;;;274:69023;67464:25;;;;274:69023;;;;67503:33;;;274:69023;;;;;;;;67555:19;;;;274:69023;;;;;;;;67593:26;;;;274:69023;;67638:12;274:69023;;;;67638:12;;274:69023;;;;;;;;;:::i;:::-;;67239:451;;274:69023;;67239:451;;274:69023;67239:451;;;274:69023;67239:451;;;274:69023;67239:451;;;274:69023;67239:451;;;274:69023;;;;67239:451;;274:69023;;;67239:451;;;274:69023;67239:451;;;274:69023;67239:451;274:69023;;;67239:451;;;;:::i;67172:27::-;;;;274:69023;;;;;;-1:-1:-1;;274:69023:26;;;;;63919:8;274:69023;;;;;;;;;;;;;-1:-1:-1;;274:69023:26;;;;;63603:10;274:69023;;;;;;;;;;;;;-1:-1:-1;;274:69023:26;;;;2466:103:25;;:::i;:::-;920:70:28;;:::i;:::-;274:69023:26;;4624:15;274:69023;;;;;;;;;4624:44;;4620:95;;5069:25;5050:44;5046:104;;35453:8;274:69023;35493:3;;;:::i;:::-;35528;;;:::i;:::-;274:69023;;;35570:20;274:69023;;;;;5069:25;274:69023;35614:15;;274:69023;35633:14;;274:69023;35614:33;;;;;35610:91;;35788:32;;;:::i;:::-;274:69023;35830:19;274:69023;35902:8;274:69023;35925:13;274:69023;;;;;;;35920:528;;35956:3;274:69023;;35940:14;;;;;;274:69023;;;36002:20;274:69023;;;;;36043:12;;;;;274:69023;;;;;;;;;;36043:34;;;36039:399;;35956:3;;274:69023;;35925:13;;;36039:399;36097:13;;274:69023;36097:13;;:::i;:::-;36132:20;;274:69023;36132:24;36128:296;36039:399;36128:296;36184:13;;;;;;:48;;;36128:296;36180:226;;;36260:31;;274:69023;36260:31;36180:226;;36128:296;36039:399;;36180:226;36320:86;;;;;;36180:226;274:69023;36180:226;;;36320:86;36365:18;;-1:-1:-1;36365:18:26;;36320:86;;36184:48;36201:31;;;;36184:48;;35940:14;;;;;;;36533:21;;;;;:::i;:::-;:32;:91;;;36580:21;;;;;:::i;:::-;36533:91;;274:69023;;;36673:13;36704:3;274:69023;;36688:14;;;;;;274:69023;;;36002:20;274:69023;;;;;36791:12;;36043;36791;;274:69023;;;;;;;;;;;36791:34;;36787:183;;36704:3;;274:69023;36673:13;;;36787:183;274:69023;36849:20;274:69023;;36849:32;;;;;36845:111;;36787:183;;;;;36845:111;36905:32;;;:::i;:::-;274:69023;;36845:111;;;;;36688:14;;;;;;35453:8;274:69023;;;35570:20;274:69023;;;;;;36990:40;:51;274:69023;;;36990:51;:::i;:::-;274:69023;;37055:22;;;;;:::i;:::-;:32;37051:273;;36668:312;274:69023;;37339:52;;274:69023;;;37339:52;;;;274:69023;;;;;;;;;;;;;;;;;;37339:52;;;;274:69023;3068:21:25;274:69023:26;;37051:273;37134:34;37145:22;;;;;;;:::i;:::-;37134:34;;:::i;:::-;36043:12;274:69023;;;-1:-1:-1;;;37182:131:26;;37225:10;274:69023;37182:131;;274:69023;37261:4;274:69023;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;;274:69023:26;37182:131;;;;;;;37339:52;37182:131;37339:52;37182:131;;;37051:273;;;;;;37182:131;;;;;;-1:-1:-1;37182:131:26;;;;;;:::i;:::-;;;;;;36533:91;;;;35610;274:69023;;-1:-1:-1;;;35670:20:26;;274:69023;;35670:20;274:69023;;;;;;-1:-1:-1;;274:69023:26;;;;;;:::i;:::-;;5050:15;274:69023;;;;;;;;5069:25;5050:44;;5046:104;;920:70:28;;:::i;:::-;274:69023:26;4624:44;;4620:95;;5791:49;;;:107;;;;274:69023;5774:182;;;-1:-1:-1;;;;;274:69023:26;;;;;;6019:16;274:69023;;;;;;;;;6015:82;;6313:12;6426:35;274:69023;6107:10;;274:69023;6107:10;:::i;:::-;;274:69023;;;;;;;6154:20;274:69023;;;;;;;;;;;;;;6019:16;274:69023;;;;;;;;;;6281:12;;;274:69023;;-1:-1:-1;;;;;;274:69023:26;;;;;;;6313:12;;;;274:69023;;-1:-1:-1;;274:69023:26;;;;;;;;;-1:-1:-1;;;;;274:69023:26;;;;;;;;;;;;;6426:35;274:69023;6015:82;274:69023;;-1:-1:-1;;;6072:14:26;;274:69023;;6072:14;5774:182;274:69023;;-1:-1:-1;;;5930:15:26;;274:69023;;5930:15;5791:107;274:69023;5856:42;;;;5791:107;;;274:69023;;;;;;-1:-1:-1;;274:69023:26;;;;;;:::i;:::-;;;;;:::i;:::-;;;5050:15;274:69023;;;;;;;;5069:25;5050:44;;5046:104;;274:69023;920:70:28;;;:::i;:::-;4624:44:26;4620:95;;274:69023;;;7317:24;274:69023;;;;;;;;;;;;;;;;;7418:16;274:69023;;;;;;;;7384:20;274:69023;;;;;;;;7508:13;7504:68;;7586:12;;;274:69023;;7586:26;;;7582:79;;274:69023;7705:13;;274:69023;;;;-1:-1:-1;;;274:69023:26;;;;;;;;;;;;;;;:::i;:::-;7818:452;;;;7891:12;;;274:69023;;;;;;;;;;;;;;7891:41;7887:103;;274:69023;;7586:12;274:69023;8752:46;274:69023;8098:20;8752:46;274:69023;;;;;;;7818:452;8437:23;274:69023;;;8481:25;;;:54;;;;7818:452;-1:-1:-1;8477:260:26;;;8556:13;274:69023;;;;;8555:14;8551:73;;8477:260;;;;274:69023;;;-1:-1:-1;;;;;274:69023:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8551:73;-1:-1:-1;;274:69023:26;;;;;8551:73;;;;8477:260;8658:13;274:69023;;;;;8654:73;;8477:260;;;;;8654:73;-1:-1:-1;;274:69023:26;;;8654:73;;;;8481:54;8534:1;8510:25;;;;8481:54;;;7887:103;274:69023;;-1:-1:-1;;;7959:16:26;;274:69023;;7959:16;7818:452;8752:46;8208:16;8752:46;8208:16;;274:69023;8208:16;;7586:12;8208:16;;274:69023;;;;;;;;;7818:452;;274:69023;;;;;;;;;;;;7582:79;274:69023;;-1:-1:-1;;;7635:15:26;;274:69023;;7635:15;7504:68;274:69023;;-1:-1:-1;;;7544:17:26;;274:69023;;7544:17;274:69023;;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;65435:28;274:69023;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;274:69023:26;;;;;825:33;274:69023;;;;;;;;;;;;;-1:-1:-1;;274:69023:26;;;;;64840:15;274:69023;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;274:69023:26;;;;920:70:28;;:::i;:::-;4624:15:26;274:69023;;;;;;;;;;;4624:44;;4620:95;;5069:25;5050:44;5046:104;;-1:-1:-1;;274:69023:26;;;4624:15;274:69023;41964:15;41943:36;274:69023;2466:103:25;;:::i;:::-;274:69023:26;4624:15;274:69023;;;;;;;;5069:25;58977:44;;;:92;;;;274:69023;58973:153;;;59151:8;274:69023;;59169:959;59204:3;274:69023;;;;;;;;;;59189:13;;;;;274:69023;;;59250:20;274:69023;;;;;59287:19;59335:98;:70;:42;5069:25;59335:19;;274:69023;;59357:20;;274:69023;59335:42;;:::i;:::-;274:69023;59380:25;;274:69023;59335:70;;:::i;:::-;59408:25;;;274:69023;59335:98;;:::i;:::-;274:69023;5069:25;59451:8;274:69023;59451:12;59447:487;5069:25;;;59451:8;274:69023;59587:26;;;;274:69023;59528:3;59451:8;274:69023;-1:-1:-1;;274:69023:26;;;;;;;59509:17;;;;59572:44;274:69023;;;;;;;;;;;59572:44;;:::i;:::-;274:69023;;;;;;;;;;;;;;;;-1:-1:-1;;274:69023:26;;59487:20;;59509:17;;;;274:69023;59509:17;;59408:25;59509:17;;59447:487;274:69023;5069:25;59335:19;;274:69023;;;59357:20;;274:69023;;;59380:25;;274:69023;59408:25;274:69023;;59174:13;;;59447:487;59732:9;;274:69023;59728:192;59758:3;59451:8;274:69023;59743:13;;;;59802:44;59758:3;274:69023;;;;59817:26;;;274:69023;;;;;;59802:44;;:::i;:::-;274:69023;;;;59817:26;;;274:69023;;;;;;;59758:3;:::i;:::-;59732:9;;;59743:13;;;59408:25;274:69023;59743:13;;;59447:487;;59189:13;274:69023;3068:21:25;274:69023:26;42021:31;274:69023;;;41964:15;274:69023;;42021:31;274:69023;58973:153;274:69023;;-1:-1:-1;;;59092:23:26;;274:69023;;59092:23;58977:92;274:69023;59025:44;;;;58977:92;;;274:69023;;;;;;;;;;;;;;;920:70:28;;;:::i;:::-;4624:15:26;274:69023;;;;;;;;;;;4624:44;;4620:95;;5069:25;5050:44;;5046:104;;10268:107;;10469:8;274:69023;10469:13;10480:2;10469:13;;:31;;;;274:69023;10465:79;;274:69023;10574:5;274:69023;10574:5;;;;11005:46;274:69023;;10969:20;274:69023;;;;;;;4624:15;274:69023;;10911:25;274:69023;10969:20;;:::i;:::-;10955:34;274:69023;;;;;;11005:46;274:69023;10581:3;274:69023;;;10661:24;274:69023;;;;;;;10661:35;274:69023;10661:46;10657:110;;274:69023;;10559:13;;10657:110;274:69023;;-1:-1:-1;;;10734:18:26;;274:69023;;10734:18;10465:79;274:69023;;-1:-1:-1;;;10523:10:26;;274:69023;;10523:10;10469:31;274:69023;5069:25;10480:2;274:69023;10486:14;10469:31;;10268:107;274:69023;;-1:-1:-1;;;10344:20:26;;274:69023;;10344:20;274:69023;;;;;;-1:-1:-1;;274:69023:26;;;;2466:103:25;;:::i;:::-;274:69023:26;5050:15;274:69023;;;;;;;;5069:25;5050:44;;5046:104;;274:69023;4624:44;;4620:95;;274:69023;9089:42;9085:96;;9269:10;274:69023;;9252:16;274:69023;;;;;;;;9218:20;274:69023;;;;;9359:12;;;274:69023;;;;;;;;;;;;;9359:37;9355:90;;9527:11;274:69023;5050:15;274:69023;;;;;;5050:15;274:69023;;;;;;;9563:3;9527:40;274:69023;;9527:40;;:::i;:::-;9607:2;274:69023;;;;;;9607:2;274:69023;;;;;;;;;;;9626:20;274:69023;9626:20;;:31;274:69023;;;9626:31;:::i;:::-;274:69023;;-1:-1:-1;;274:69023:26;;;;9359:12;274:69023;;;-1:-1:-1;;;9770:61:26;;9269:10;274:69023;9770:61;;274:69023;9816:4;274:69023;;;;;;;;;;;-1:-1:-1;;;;;274:69023:26;;;;;;;;;-1:-1:-1;;274:69023:26;;9770:61;;;;;;;9846:53;9770:61;9682:16;9770:61;;;274:69023;-1:-1:-1;9864:12:26;274:69023;;;;;;;;-1:-1:-1;;;;;274:69023:26;;;;;;;;;;;;;;;9846:53;274:69023;9770:61;;;274:69023;9770:61;274:69023;9770:61;;;;;;;:::i;:::-;;;;;9355:90;274:69023;;-1:-1:-1;;;9419:15:26;;274:69023;;9419:15;9085:96;274:69023;;-1:-1:-1;;;9154:16:26;;274:69023;;9154:16;274:69023;;;;;;-1:-1:-1;;274:69023:26;;;;;63438:8;274:69023;;;;;;;;;;;;;;;;;;;;;;920:70:28;;:::i;:::-;274:69023:26;4624:15;274:69023;4624:15;274:69023;;;;;;;;;;;;4624:44;;4620:95;;5069:25;5050:44;;5046:104;;274:69023;24907:49;;;;:107;;;;274:69023;24890:182;;;25145:13;274:69023;25141:69;;274:69023;;;;;25145:13;274:69023;;25339:13;274:69023;;;25358:8;274:69023;;;;;;;;25334:175;274:69023;;;25334:175;25714:39;274:69023;25604:27;;;;;;:::i;:::-;25590:41;274:69023;25664:8;274:69023;;;25643:20;274:69023;;;5069:25;274:69023;;;25643:39;274:69023;25590:41;274:69023;;;;;;;;;;25714:39;274:69023;25372:3;274:69023;;;;;;25354:16;;;;;;274:69023;;;25395:20;274:69023;;;25395:30;274:69023;;;25395:30;274:69023;;;;;;;;;25395:52;25391:108;;25372:3;;;;;274:69023;25339:13;;;25391:108;25467:17;;;;;:::i;:::-;25391:108;;;;;25354:16;;;;;;25141:69;274:69023;;;;;;;;47284:3;47270:8;274:69023;;;;;;;;;47266:16;;;;;274:69023;;;47330:20;274:69023;;;;;47388:12;;;;274:69023;;;;;;;;;;;;47388:39;;;:91;;;47284:3;47388:148;;;;47284:3;47388:237;;;47284:3;47367:1617;;;47284:3;;;;274:69023;47284:3;;274:69023;47251:13;;47367:1617;47662:19;;;;;47682:8;;274:69023;;;;;;;;;;;;;;;;47658:406;274:69023;;;-1:-1:-1;;274:69023:26;;-1:-1:-1;;274:69023:26;;;;;-1:-1:-1;47658:406:26;274:69023;;;;;;;;;;;48210:42;:96;;;47658:406;48185:296;;47658:406;274:69023;;;;;;;;;;;;48543:25;48922:47;48543:25;274:69023;48543:25;274:69023;48543:25;;;;48524:44;;;:205;;;;47658:406;48499:400;;;47658:406;274:69023;;;;;;;48942:12;;274:69023;;;;;;;;;;;;;;;:::i;:::-;48922:47;47367:1617;;;;;48499:400;274:69023;;;;;;;;;;;;;48829:33;;;274:69023;;;;;;;;;;;48499:400;;;;48524:205;274:69023;;;;;;;;;;;;;;48699:30;48524:205;;;48185:296;274:69023;;15112:27;274:69023;;;;;;;;;;;48411:33;;;274:69023;;;;;;;;;;;48185:296;;48210:96;274:69023;;;;;;;;;;;;;;48276:30;48210:96;;47658:406;274:69023;;;47824:34;:103;;;47658:406;47795:251;;47658:406;;;;47795:251;-1:-1:-1;;274:69023:26;;;;;;;;;47976:26;274:69023;;;;;;;;;;;;;;47795:251;;;47824:103;-1:-1:-1;;;274:69023:26;;;;;;;;;47887:26;274:69023;;;;;;;;47886:41;47824:103;;47388:237;274:69023;;;;47604:21;47588:37;;;47388:237;;;:148;274:69023;;;;;47499:37;;;47388:148;;;:91;-1:-1:-1;274:69023:26;;-1:-1:-1;47463:16:26;47447:32;;;47388:91;;47266:16;;;;;;25141:69;;;;;24907:107;274:69023;;;;;24972:42;;;24907:107;;;274:69023;;;;;;-1:-1:-1;;274:69023:26;;;;1296:17:28;274:69023:26;;;-1:-1:-1;;;;;274:69023:26;;;;;;;;;;;;;;-1:-1:-1;;274:69023:26;;;;;;;;69256:26;274:69023;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;274:69023:26;;;;;5050:15;274:69023;;;;;;;;5069:25;5050:44;;5046:104;;274:69023;920:70:28;;;:::i;:::-;4624:44:26;4620:95;;6784:27;274:69023;6651:12;;274:69023;6651:12;:::i;:::-;274:69023;6651:12;274:69023;;;;6702:24;274:69023;;;;;;;;;;;;6784:27;274:69023;;;;;;;-1:-1:-1;;274:69023:26;;;;;64226:11;274:69023;;;;;;;;;;;;;-1:-1:-1;;274:69023:26;;;;920:70:28;;:::i;:::-;5050:15:26;274:69023;;;;;;;;;;5069:25;5050:44;;5046:104;;274:69023;4624:44;4620:95;;5069:25;274:69023;;;;;;38084:26;274:69023;;;38084:26;274:69023;;;5050:15;274:69023;38199:8;274:69023;;38173:34;274:69023;;;38217:24;274:69023;;38264:15;274:69023;;;;38199:8;274:69023;;;;38358:20;38217:24;274:69023;;;;;38358:40;274:69023;;38414:6;274:69023;;;;;;;;;38217:24;274:69023;;;;;;38289:54;274:69023;38437:26;274:69023;38437:26;;274:69023;;;;;;;-1:-1:-1;;274:69023:26;;;;;;;;-1:-1:-1;;;;;274:69023:26;;;;;;;;;;;;;;-1:-1:-1;;274:69023:26;;;;;4624:15;274:69023;;;;;;;;;;4624:44;;4620:95;;5069:25;;5050:44;;5046:104;;14245:10;274:69023;;14228:16;274:69023;;14228:16;274:69023;;;;;;;;14194:20;274:69023;14194:20;274:69023;;;;;;;14343:23;;;;274:69023;;;14343:28;;14339:82;;274:69023;;14460:24;274:69023;;;;;14595:9;274:69023;14619:13;274:69023;14638:13;;;;274:69023;;;;14614:178;14634:24;;;;;;14614:178;14805:5;;;;14801:56;;274:69023;14930:36;;;;:::i;:::-;15001:8;274:69023;;;14981:19;;;274:69023;;;;;;;;;;;;15026:12;;;274:69023;;-1:-1:-1;;274:69023:26;;;;;14977:173;274:69023;;;;15263:24;15259:388;;14977:173;15681:12;;;274:69023;;;;;;-1:-1:-1;;;;;274:69023:26;;;;;;;;;;;;15662:42;;274:69023;;;;;15662:42;274:69023;15259:388;15303:13;;;;;274:69023;;;;;;;;;;;15441:196;274:69023;;;15441:196;15259:388;;;;15487:3;274:69023;;;;;;15461:24;;;;;15548:16;;;;;;;;;;;:::i;:::-;274:69023;;;;;;-1:-1:-1;;;;;274:69023:26;;;;;;;;;;;;;;;;;;;;15510:84;;274:69023;;;;;;;;;;15446:13;;15461:24;;;;;;;14977:173;15097:12;;;274:69023;;-1:-1:-1;;274:69023:26;15112:27;274:69023;;;14977:173;;14660:3;14697:16;;;;;:::i;:::-;274:69023;;14245:10;274:69023;;;;;;;;-1:-1:-1;;;;;274:69023:26;14683:30;14679:103;;274:69023;14619:13;;;;14679:103;14733:11;;;;14762:5;;;;;14339:82;274:69023;;-1:-1:-1;;;14394:16:26;;274:69023;;14394:16;274:69023;;;;;;-1:-1:-1;;274:69023:26;;;;2466:103:25;;:::i;:::-;920:70:28;;:::i;:::-;274:69023:26;4624:15;274:69023;;;;;;;;;4624:44;;4620:95;;5069:25;5050:44;5046:104;;33840:8;274:69023;33880:3;;;:::i;:::-;33914;;;:::i;:::-;274:69023;;33957:20;274:69023;;;;;;34001:15;;5069:25;274:69023;;34020:14;;274:69023;34001:33;;;;33997:91;;34191:32;;34242:26;34191:32;;:::i;:::-;34242:26;;;:::i;:::-;274:69023;;34278:12;274:69023;;;-1:-1:-1;;;34278:61:26;;34304:10;274:69023;34278:61;;274:69023;34324:4;274:69023;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;;274:69023:26;34278:61;;;;;;;34354:21;34278:61;274:69023;34278:61;;;274:69023;;;;;;;34354:21;274:69023;3068:21:25;274:69023:26;;34278:61;;;;;;;;;;;;;:::i;:::-;;;;;274:69023;;;;;;-1:-1:-1;;274:69023:26;;;;;5050:15;274:69023;;;;;;;;5069:25;5050:44;;;5046:104;;274:69023;;;;;28452:14;28448:68;;274:69023;28604:13;274:69023;;;;;;;28599:167;28619:30;;;;;;28779:5;;;;28775:56;;-1:-1:-1;;274:69023:26;;;28991:17;274:69023;-1:-1:-1;;;;;274:69023:26;;;;28674:10;28977:31;;;;28674:10;29043;28674;29043;:::i;:::-;274:69023;29100:13;274:69023;;;;29095:181;29115:30;;;;;;-1:-1:-1;;;;274:69023:26;;;;;;;29289:110;29318:81;;29289:26;29318:81;;:::i;29289:110::-;29413:23;;:::i;:::-;30053:29;274:69023;;;28674:10;274:69023;;30053:29;274:69023;29147:3;29188:22;;;;:::i;:::-;274:69023;;;;;;;28674:10;29174:36;29170:92;;29147:3;;274:69023;29100:13;;29170:92;29234:9;-1:-1:-1;29234:9:26;29170:92;;28973:1065;29490:31;;:97;;;28973:1065;29469:188;;29689:22;;;:::i;:::-;274:69023;;;;;;;28674:10;29675:36;29671:357;274:69023;;;29750:22;;;;:::i;:::-;274:69023;;;;;;;29750:22;:::i;:::-;274:69023;-1:-1:-1;;274:69023:26;;;;;;;;29816:89;29791:114;29816:89;;:::i;:::-;274:69023;;;;;;29791:22;;:::i;:114::-;29923:23;;:::i;:::-;28973:1065;;29671:357;274:69023;;-1:-1:-1;;;29994:19:26;;274:69023;;29994:19;29469:188;274:69023;;-1:-1:-1;;;29627:15:26;;274:69023;;29627:15;29490:97;274:69023;29559:17;274:69023;29579:8;274:69023;;;;;;;29541:15;:46;29490:97;;28651:3;28688:22;;;:::i;:::-;274:69023;;28674:10;274:69023;;;;-1:-1:-1;;;;;274:69023:26;28674:36;28670:86;;28651:3;274:69023;28604:13;;;;28670:86;28730:11;;;28670:86;;;28448:68;274:69023;;-1:-1:-1;;;28489:16:26;;274:69023;;28489:16;274:69023;;;;;;-1:-1:-1;;274:69023:26;;;;;;;;;;:::i;:::-;;;;;;1418:21:28;274:69023:26;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;274:69023:26;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;274:69023:26;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;274:69023:26;;;;920:70:28;;:::i;:::-;274:69023:26;4624:15;274:69023;;;;;;;;;4624:44;;4620:95;;5069:25;5050:44;5046:104;;37689:8;274:69023;;;;37668:20;274:69023;;;;;;37668:40;274:69023;;37724:6;274:69023;;;;;;;;;37668:20;274:69023;;;;;;37613:40;274:69023;37689:8;274:69023;;;37746:60;274:69023;;;;;37765:40;274:69023;;;;;;37746:60;274:69023;;;;;;;-1:-1:-1;;274:69023:26;;;;2466:103:25;;:::i;:::-;920:70:28;;:::i;:::-;4776:15:26;274:69023;;;;;;;;;;;4776:44;4772:98;;4901:18;274:69023;4922:8;274:69023;;;;;;;4883:15;:47;4879:107;;-1:-1:-1;;274:69023:26;42992:25;274:69023;4776:15;274:69023;43041:12;274:69023;;;-1:-1:-1;;;43041:37:26;;43072:4;274:69023;43041:37;;274:69023;-1:-1:-1;;;;;274:69023:26;;;;;43041:37;;;274:69023;;;;43041:37;;;;;;;274:69023;43041:37;;;274:69023;;43098:11;274:69023;43092:17;;43088:86;;274:69023;-1:-1:-1;;;;;;;;;;;274:69023:26;;;4883:15;274:69023;;43188:35;274:69023;3068:21:25;274:69023:26;;43088:86;274:69023;;-1:-1:-1;;;43125:38:26;;43147:10;274:69023;43125:38;;274:69023;;;;;;;;;;;;;;;;;-1:-1:-1;;43125:38:26;;;;;;;-1:-1:-1;;;;;;;;;;;43125:38:26;;43088:86;43125:38;;;;;;;;;;;;;:::i;:::-;;;43088:86;;43041:37;;;;;;;;;;;;;;;;:::i;:::-;;;274:69023;;;;;43041:37;;;;;;;;4879:107;274:69023;;-1:-1:-1;;;4953:22:26;;274:69023;;4953:22;4772:98;274:69023;;-1:-1:-1;;;4843:16:26;;274:69023;;4843:16;274:69023;;;;;;-1:-1:-1;;274:69023:26;;;;920:70:28;;:::i;:::-;4624:15:26;274:69023;;;;;;;;;;;4624:44;4620:95;;38835:19;274:69023;;;;38834:20;38830:78;;38989:23;274:69023;;;38964:24;274:69023;;;;;;38964:86;274:69023;38934:15;:116;38917:195;;274:69023;;;;;;;38835:19;274:69023;;;4624:15;274:69023;39216:41;38964:24;274:69023;;38934:15;274:69023;;39216:41;274:69023;38917:195;274:69023;;-1:-1:-1;;;39082:19:26;;274:69023;;39082:19;38830:78;274:69023;;-1:-1:-1;;;38877:20:26;;274:69023;;38877:20;274:69023;;;;;;-1:-1:-1;;274:69023:26;;;;;;;;65956:21;274:69023;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;:::i;:::-;2466:103:25;;:::i;:::-;274:69023:26;4624:15;274:69023;;;;;;;;;;4624:44;;4620:95;;5069:25;5050:44;;5046:104;;274:69023;21298:42;;;;;:102;;;;274:69023;21281:177;;;21472:8;274:69023;21472:12;21468:299;;274:69023;;;;;;;;;;;;;21812:20;274:69023;;;;;;21934:10;274:69023;;21917:16;274:69023;;;;;;;;21883:20;274:69023;;;;22007:12;;;274:69023;-1:-1:-1;;;;;274:69023:26;;;;22007:26;22003:80;;22148:16;;;274:69023;;;;;;;;;;;;;;22148:67;22131:155;;274:69023;;;;;;;;;;22363:21;22347:37;;:91;;;;;274:69023;22347:145;;;;274:69023;22330:224;;;;22586:11;274:69023;;4624:15;274:69023;;;;;4624:15;274:69023;;;;;;;22662:3;22626:40;274:69023;;22626:40;;:::i;:::-;22746:20;274:69023;22746:20;;274:69023;;;22746:31;;;22742:108;;274:69023;22922:15;274:69023;22922:15;:30;274:69023;;;22922:30;:::i;:::-;274:69023;;23034:295;;274:69023;22586:11;274:69023;23339:19;:34;5069:25;23339:19;;274:69023;;;23339:34;:::i;:::-;274:69023;;;;;23446:31;;;23442:117;;274:69023;;;;;;;;;;;;;;;;;22007:12;23655:32;;:86;;;;;274:69023;23655:149;;;;;274:69023;23654:201;;;;274:69023;23654:249;;;;274:69023;23637:529;;;;274:69023;24228:15;;;;;;24224:137;;274:69023;;;24376:59;274:69023;;;21472:8;274:69023;;;21934:10;;274:69023;;;;;;;;;;;;;;;24376:59;22363:21;274:69023;;24224:137;22148:16;274:69023;;;-1:-1:-1;;;24259:65:26;;21934:10;274:69023;24259:65;;274:69023;24305:4;274:69023;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;274:69023:26;24259:65;;;;;;;24376:59;24259:65;274:69023;24259:65;;;24224:137;;;;;;;;24259:65;;;;;;;;;;;;;:::i;:::-;;;;;23637:529;274:69023;;;23932:34;23928:106;;23637:529;274:69023;;21472:8;274:69023;;;;;;;;;;;24047:33;;;274:69023;;;;;;;;;;;;;;;;;21472:8;274:69023;;;;;;;;;;;;;;24115:19;274:69023;;;;;;;;;;;;;23637:529;;;;;;;23928:106;-1:-1:-1;;274:69023:26;;;;;23928:106;;;;23654:249;274:69023;23871:32;;;-1:-1:-1;23654:249:26;;;;:201;22586:11;274:69023;-1:-1:-1;23821:34:26;;-1:-1:-1;23654:201:26;;;23655:149;274:69023;;;;;23777:27;23761:43;;23655:149;;;;:86;274:69023;;-1:-1:-1;274:69023:26;23707:34;;;-1:-1:-1;23655:86:26;;23442:117;23517:31;;23493:55;23517:31;;;:::i;:::-;23493:55;;:::i;:::-;274:69023;;23442:117;;;23034:295;23085:25;;;;274:69023;;23152:23;;;;:85;;;;;;23194:23;;;;:::i;:::-;23152:85;;274:69023;23265:53;;;;;274:69023;23265:53;23034:295;;;23265:53;23295:23;;;:::i;:::-;23265:53;;23152:85;274:69023;23152:85;;;22742:108;274:69023;22808:31;;;22793:46;22808:31;;;:::i;22793:46::-;22742:108;;;;22330:224;274:69023;;-1:-1:-1;;;22524:19:26;;274:69023;;22524:19;22347:145;274:69023;;;;;;22454:38;22347:145;;;;:91;-1:-1:-1;22148:16:26;22400:38;;;-1:-1:-1;274:69023:26;22347:91;;22131:155;274:69023;;-1:-1:-1;;;22247:28:26;;274:69023;;22247:28;21468:299;274:69023;;;21538:20;274:69023;;;;;;21602:7;274:69023;;;;;;;21504:15;:106;:184;;;;21468:299;21500:257;21468:299;21500:257;274:69023;;-1:-1:-1;;;21728:14:26;;274:69023;;21728:14;21504:184;274:69023;;;;21538:20;274:69023;;;;;;21648:40;274:69023;21504:15;21630:58;21504:184;;21298:102;21375:25;21356:44;;;;21298:102;;;274:69023;;;;;;-1:-1:-1;;274:69023:26;;;;;;;1185:19:28;274:69023:26;1185:19:28;274:69023:26;;;;;;;;;;1185:19:28;274:69023:26;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;:::i;:::-;;;-1:-1:-1;;;;;274:69023:26;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;274:69023:26;;;;;64476:23;274:69023;;;;;;;;;;;;;-1:-1:-1;;274:69023:26;;;;;;:::i;:::-;;;2466:103:25;;:::i;:::-;920:70:28;;:::i;:::-;274:69023:26;4776:15;274:69023;;;;;;;;;4776:44;;4772:98;;4901:18;274:69023;4922:8;274:69023;;;;;;;4883:15;:47;4879:107;;5069:25;5050:44;5046:104;;-1:-1:-1;;;;;274:69023:26;;;4487:18;4483:77;;42501:12;274:69023;;;;;;;;42501:37;;42532:4;274:69023;42501:37;;274:69023;;42501:37;;;274:69023;42501:37;;;;;;;;;;274:69023;42501:37;;;274:69023;42501:46;;42497:103;;274:69023;;-1:-1:-1;;;42609:33:26;;-1:-1:-1;;;;;274:69023:26;;;42609:33;;274:69023;;;;;;;;;;;;;;;;-1:-1:-1;;42609:33:26;;;;;;;42657:28;42609:33;;;274:69023;-1:-1:-1;;274:69023:26;;;-1:-1:-1;;;;;274:69023:26;;;;;;;;;;;;;;;;;42657:28;274:69023;42609:33;;;;;;-1:-1:-1;42609:33:26;;;;;;:::i;:::-;;;;;;42497:103;274:69023;;-1:-1:-1;;;42570:19:26;;274:69023;;42570:19;42501:37;;;;;;;;;;;;;;;;;;:::i;:::-;;;274:69023;;;;;;;42501:37;;;;;;;;274:69023;;;;;;;;;;;;;;;:::i;:::-;;4624:15;274:69023;;;;;;;;;4624:44;;4620:95;;5069:25;;5050:44;;5046:104;;11411:10;274:69023;;11394:16;274:69023;;;;;;;;11360:20;274:69023;;;;;;;11446:23;274:69023;11446:23;;274:69023;;;11446:28;;11442:82;;274:69023;;11563:24;274:69023;;;;;11708:712;;;;;;11743:12;;;;;;274:69023;;;;;;;;;;;;;;12435:119;;11759:20;11743:36;11759:20;;-1:-1:-1;274:69023:26;;-1:-1:-1;;274:69023:26;;;;;11739:223;274:69023;;;;11411:10;274:69023;;;;;;;;;;;;;;;;;;;;;;;12435:119;274:69023;11739:223;-1:-1:-1;;274:69023:26;;;;;11739:223;;11708:712;11992:13;;;;;274:69023;12024:13;274:69023;;12043:13;;274:69023;;;12019:169;12039:24;;;;;;-1:-1:-1;;;;;274:69023:26;;;;;;;12224:39;12201:62;12277:17;12224:39;12201:20;12224:39;11360:20;12224:39;12435:119;12224:39;;:::i;:::-;274:69023;;5069:25;274:69023;;;;;-1:-1:-1;;;;;274:69023:26;;12201:20;;:::i;:62::-;12277:17;:::i;:::-;11411:10;274:69023;;11394:16;274:69023;;;;;;;;;12387:22;274:69023;;;12310:74;12387:22;274:69023;;;;;;;;11708:712;;12065:3;12092:16;;;;:::i;:::-;274:69023;;;;;;-1:-1:-1;;;;;274:69023:26;11411:10;12092:30;12088:86;;12065:3;;274:69023;12024:13;;12088:86;12146:9;-1:-1:-1;12146:9:26;12088:86;;274:69023;;;;;;-1:-1:-1;;274:69023:26;;;;;4624:15;274:69023;;;;;;;;;4624:44;;4620:95;;5069:25;5050:44;5046:104;;56696:8;274:69023;;;;;;56675:20;274:69023;;;;;;56719:7;274:69023;;;;;;;56645:15;:82;:156;;;;274:69023;56628:242;;274:69023;56949:12;;:134;;;274:69023;56932:210;;57152:9;;274:69023;;57152:9;:::i;:::-;274:69023;;;;57266:10;274:69023;;57239:26;274:69023;;;;;;;;;;;;;;57239:53;57235:198;274:69023;;;57960:39;57266:10;57960:39;57266:10;;274:69023;;57239:26;274:69023;;;;;;;;;;;;;;57863:20;56696:8;274:69023;;;;;57613:28;274:69023;;57670:42;274:69023;;;;;;;;;;;;;;;;;57670:18;274:69023;;;;;57670:42;:::i;:::-;56696:8;274:69023;;;56675:20;274:69023;;57722:53;:39;274:69023;;;57722:39;274:69023;;57722:53;;:::i;:::-;274:69023;;;;;57813:14;;57266:10;-1:-1:-1;;;;;274:69023:26;;;;;;;;57266:10;274:69023;;57884:16;274:69023;;;;;;;;;5069:25;274:69023;;;;57863:81;274:69023;57850:10;;274:69023;;;;57266:10;;;;57960:39;274:69023;;;;;;;;;;;;;;;;;;;;;57235:198;274:69023;;-1:-1:-1;;;57404:18:26;;274:69023;;57404:18;56932:210;274:69023;;-1:-1:-1;;;57115:16:26;;274:69023;;57115:16;56949:134;57016:10;;274:69023;;56999:16;274:69023;;;;;;;;56978:20;274:69023;;56978:95;274:69023;;;56978:95;274:69023;;;;;;;;;;;56977:106;56949:134;;56628:242;274:69023;;-1:-1:-1;;;56833:26:26;;274:69023;;56833:26;56645:156;274:69023;;;;56675:20;274:69023;;;;;;56645:15;56743:58;56645:156;;274:69023;;;;;;-1:-1:-1;;274:69023:26;;;;2466:103:25;;:::i;:::-;274:69023:26;58977:15;274:69023;;;;;;;;58996:25;58977:44;58996:25;58977:44;;;:92;;;;274:69023;58973:153;;;59151:8;274:69023;;;;;;;;59169:959;59204:3;274:69023;;59189:13;;;;;;274:69023;;;;;59250:20;274:69023;;;;;59287:19;59335;;;274:69023;;59335:42;274:69023;59357:20;;274:69023;;;59335:42;;:::i;:::-;59380:25;59335:70;274:69023;59380:25;;274:69023;;;59335:70;;:::i;:::-;59408:25;59335:98;59408:25;;;274:69023;;;59335:98;;:::i;:::-;59451:8;;274:69023;;;;59451:12;59447:487;58996:25;;;59587:26;274:69023;;;;;;59587:26;;59483:207;59528:3;274:69023;;-1:-1:-1;;274:69023:26;;;;;;;59509:17;;;;59572:44;274:69023;;;;;;;;;;;59572:44;;:::i;:::-;274:69023;;;;;;;;;;;;;;;;-1:-1:-1;;274:69023:26;;59487:20;;59509:17;;;;274:69023;59509:17;;;;;;;;;;;274:69023;59509:17;;;59447:487;274:69023;;;;;59174:13;;;;;;59447:487;59817:26;274:69023;59732:9;;;;;;;59817:26;;59728:192;59758:3;274:69023;;59743:13;;;;59802:44;59758:3;274:69023;;;;;;;;;;;59802:44;;:::i;:::-;274:69023;;;;;;;;;;;;59758:3;:::i;:::-;59732:9;;;59743:13;;;;274:69023;59743:13;;;;;;;;;;;;274:69023;59743:13;;59447:487;;58977:92;274:69023;59025:44;;;;58977:92;;;274:69023;;;;;;-1:-1:-1;;274:69023:26;;;;2466:103:25;;:::i;:::-;62698:10:26;274:69023;;62681:16;274:69023;;;;;;;;62647:20;274:69023;;;;;62748:25;;;274:69023;;;62842:12;;;62838:62;;274:69023;;;;;62949:12;274:69023;62971:12;;;;;274:69023;;;;-1:-1:-1;;;62949:44:26;;-1:-1:-1;;;;;274:69023:26;;;;62949:44;;274:69023;;;;;;;;;;;;;;;;;;;;62949:44;;;;;;;63008:38;62949:44;;;274:69023;-1:-1:-1;274:69023:26;;;;;;;;-1:-1:-1;;;;;274:69023:26;;;;;;;;;;;;;;;63008:38;274:69023;62949:44;;;274:69023;62949:44;274:69023;62949:44;;;;;;;:::i;:::-;;;;;62838:62;274:69023;;-1:-1:-1;;;62877:12:26;;274:69023;;62877:12;274:69023;;;;;;-1:-1:-1;;274:69023:26;;;;;;;;68744:25;274:69023;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;274:69023:26;;;;;;;;66729:25;274:69023;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;:::o;:::-;;;;-1:-1:-1;;;;;274:69023:26;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;-1:-1:-1;;;;;274:69023:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;-1:-1:-1;274:69023:26;;-1:-1:-1;274:69023:26;;-1:-1:-1;274:69023:26;;;;;;;;;;;;;;;;:::i;:::-;:::o;:::-;;;;;;;;;;;;-1:-1:-1;274:69023:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;:::o;:::-;-1:-1:-1;;274:69023:26;;;;;;;:::o;:::-;;;;;;;;;;:::o;:::-;28623:19;274:69023;;;;;;28623:19;-1:-1:-1;274:69023:26;;;;-1:-1:-1;274:69023:26;:::o;:::-;;;;;;;;;;;;;28623:19;274:69023;;;;28623:19;274:69023;;;;;;:::o;:::-;;;;;;;;-1:-1:-1;274:69023:26;;-1:-1:-1;274:69023:26;;;-1:-1:-1;274:69023:26;:::o;:::-;;;-1:-1:-1;;;274:69023:26;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::o;:::-;28623:19;274:69023;;;;;-1:-1:-1;;274:69023:26;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;28623:19;274:69023;:::o;:::-;;;;;;;;;;;;;;;;;;;-1:-1:-1;;274:69023:26;;;;;;;:::i;:::-;;:::o;:::-;;;;;;;;;;;;;;;;;;-1:-1:-1;274:69023:26;;-1:-1:-1;274:69023:26;;-1:-1:-1;274:69023:26;;;;;;;;;;;;;;;;:::i;:::-;;;-1:-1:-1;;;;;274:69023:26;;;;;;;;;;-1:-1:-1;274:69023:26;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;274:69023:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;:::o;:::-;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::o;49220:7128::-;;49467:8;274:69023;;-1:-1:-1;274:69023:26;49446:20;274:69023;;;-1:-1:-1;274:69023:26;;49490:7;274:69023;;;;;;;49416:15;:82;:181;;;;49220:7128;49399:257;;274:69023;;;;;;;;;;;;-1:-1:-1;274:69023:26;49840:28;274:69023;;;-1:-1:-1;274:69023:26;49921:10;-1:-1:-1;274:69023:26;49894:26;274:69023;;;-1:-1:-1;274:69023:26;;;;;-1:-1:-1;274:69023:26;;;;-1:-1:-1;274:69023:26;;-1:-1:-1;274:69023:26;;;;-1:-1:-1;274:69023:26;;;;;;;49803:1;49982:14;;274:69023;;49921:10;;;49968:28;49964:79;;50057:18;;;274:69023;;;;;50056:19;50052:73;;274:69023;;;;;50134:69;;274:69023;-1:-1:-1;274:69023:26;50250:16;274:69023;;;-1:-1:-1;274:69023:26;;-1:-1:-1;274:69023:26;50229:20;274:69023;;;50229:61;274:69023;-1:-1:-1;274:69023:26;50229:61;274:69023;;;;;;;;50057:18;50229:95;50212:179;;-1:-1:-1;;274:69023:26;;;;;50432:138;;274:69023;;;;;-1:-1:-1;274:69023:26;50742:18;274:69023;;;;-1:-1:-1;274:69023:26;;:::i;:::-;-1:-1:-1;50812:13:26;-1:-1:-1;50845:3:26;274:69023;;50827:16;;;;;274:69023;;;;-1:-1:-1;274:69023:26;49840:28;274:69023;;;-1:-1:-1;274:69023:26;50926:8;;;;:::i;:::-;274:69023;-1:-1:-1;274:69023:26;;;;50057:18;274:69023;-1:-1:-1;274:69023:26;50885:63;274:69023;;50864:141;;50845:3;49803:1;274:69023;50812:13;;50864:141;50981:9;;49803:1;50981:9;;:::i;:::-;50864:141;;;;;50827:16;;51180:51;50827:16;;;274:69023;;;-1:-1:-1;274:69023:26;49446:20;274:69023;;51180:41;274:69023;-1:-1:-1;274:69023:26;51180:41;274:69023;51180:51;:::i;:::-;51241:28;-1:-1:-1;;51351:13:26;49803:1;274:69023;51370:8;274:69023;51346:167;51384:3;49803:1;274:69023;;;;;;49803:1;274:69023;;51366:16;;;;;274:69023;-1:-1:-1;274:69023:26;50229:20;274:69023;;;50229:61;274:69023;-1:-1:-1;274:69023:26;51407:30;274:69023;;;;;;;;50057:18;51407:52;51403:100;;51384:3;49803:1;274:69023;51351:13;;51403:100;51479:9;;49803:1;51479:9;;:::i;:::-;51403:100;;;;;51366:16;;;;;;;274:69023;;49467:8;274:69023;-1:-1:-1;274:69023:26;51744:25;274:69023;;;;-1:-1:-1;274:69023:26;;;51740:142;;51346:167;51920:17;;;;:::i;:::-;51947:21;-1:-1:-1;51992:13:26;49803:1;52025:3;51370:8;274:69023;49803:1;274:69023;;;;;;49803:1;274:69023;52007:16;;;;;274:69023;-1:-1:-1;274:69023:26;50229:20;274:69023;;;-1:-1:-1;274:69023:26;;50229:61;52112:12;;274:69023;;;;;;;;50057:18;52112:34;52108:647;;52025:3;;49803:1;274:69023;51992:13;;52108:647;51180:41;52170:19;274:69023;;52170:19;;;:30;;;52166:476;;52108:647;49803:1;52659:31;52708:32;52659:31;;;;;;:::i;:::-;274:69023;;52708:32;:::i;:::-;52108:647;;;;52166:476;49803:1;52242:30;52224:49;52708:32;52242:30;;;;52659:31;52242:30;;:::i;52224:49::-;52593:30;;52166:476;;;;;;;;52007:16;;;;;;;;;;274:69023;;52842:16;52838:2603;;51987:778;-1:-1:-1;;55465:31:26;;;;;-1:-1:-1;;;;55512:17:26;;;274:69023;;;50229:61;274:69023;;49982:14;;274:69023;;;-1:-1:-1;;;55553:46:26;;-1:-1:-1;;;;;274:69023:26;;;50057:18;55553:46;;274:69023;;;;;;;;55512:17;274:69023;;;;;;-1:-1:-1;274:69023:26;;;;55553:46;;;;;;;;;;55666;55553;;;55461:881;-1:-1:-1;274:69023:26;49982:14;;274:69023;;;;;;-1:-1:-1;;;;;274:69023:26;;;;;;;;;;;;;;;;;;;;;;;55666:46;;;;49220:7128::o;55553:46::-;;;274:69023;55553:46;274:69023;55553:46;;;;;;;:::i;:::-;;;;;55461:881;55769:7;55735:30;;;;:::i;:::-;55734:42;55769:7;;;-1:-1:-1;;;55844:17:26;;;274:69023;;;50229:61;274:69023;;49982:14;;274:69023;;;-1:-1:-1;;;55896:59:26;;-1:-1:-1;;;;;274:69023:26;;;50057:18;55896:59;;274:69023;;;;;;;;;;55844:17;274:69023;;;;;;-1:-1:-1;274:69023:26;;;;55896:59;274:69023;55730:612;56112:165;274:69023;;;;51180:41;274:69023;;4776:15;274:69023;;;4776:15;274:69023;;;;;;;;;;;;;;;;;;;;;;56112:165;-1:-1:-1;;;;;;;;;;;274:69023:26;;;49416:15;274:69023;;56296:35;274:69023::o;52838:2603::-;-1:-1:-1;52997:105:26;;;;;;;;;;:18;;;:105;:18;;;:105;;;;;;;;;52986:116;-1:-1:-1;53161:2270:26;53199:3;274:69023;;53181:16;;;;;53506:8;;;;:::i;:::-;274:69023;-1:-1:-1;274:69023:26;50229:20;274:69023;;;;;;;53485:37;274:69023;-1:-1:-1;274:69023:26;53485:37;274:69023;;-1:-1:-1;274:69023:26;53430:29;274:69023;;;-1:-1:-1;274:69023:26;;-1:-1:-1;274:69023:26;53384:24;274:69023;;;49803:1;274:69023;-1:-1:-1;274:69023:26;53609:13;274:69023;:::i;:::-;53672:23;-1:-1:-1;53641:13:26;-1:-1:-1;53768:13:26;-1:-1:-1;53805:3:26;274:69023;;53783:20;;;;;-1:-1:-1;;;;;53923:12:26;;;;:::i;:::-;274:69023;;-1:-1:-1;274:69023:26;50250:16;274:69023;;;-1:-1:-1;274:69023:26;;-1:-1:-1;274:69023:26;50229:20;274:69023;;;-1:-1:-1;274:69023:26;;50229:61;53984:13;;274:69023;;;;;;;;50057:18;53984:35;53980:501;;53805:3;;49803:1;274:69023;53768:13;;53980:501;54047:7;;;;;;:::i;:::-;54113:20;;;;;:91;;;53980:501;54080:379;;;54279:21;;50057:18;49803:1;54279:21;;274:69023;54080:379;;53980:501;;;54080:379;54333:126;;;;;;54080:379;;49803:1;54080:379;;;54333:126;50057:18;54407:21;;;;274:69023;;49803:1;274:69023;;;;;53485:37;274:69023;;;;;;;54389:43;49803:1;54333:126;;54113:91;54183:21;50057:18;54183:21;;274:69023;54165:39;;54113:91;;53783:20;;;;;;;;;;;;;54700:16;53783:20;54700:16;;:::i;:::-;54745:95;:26;;;;;;:95;;;-1:-1:-1;55040:3:26;274:69023;;55018:20;;;;;-1:-1:-1;;;;;55159:12:26;;;;:::i;:::-;274:69023;;-1:-1:-1;274:69023:26;50250:16;274:69023;;;-1:-1:-1;274:69023:26;;-1:-1:-1;274:69023:26;50229:20;274:69023;;;-1:-1:-1;274:69023:26;;50229:61;55220:14;;274:69023;;;;;;;;50057:18;55220:36;55216:183;;55040:3;;49803:1;274:69023;55003:13;;55216:183;55284:22;49803:1;55284:22;;50057:18;55344:32;55284:22;;:34;274:69023;;;55284:34;:::i;55344:32::-;55216:183;;;;55018:20;-1:-1:-1;55018:20:26;;;;;;-1:-1:-1;55018:20:26;;-1:-1:-1;55018:20:26;49803:1;274:69023;;;;55018:20;;53166:13;;54745:95;;;;;;53181:16;;;;;;;;;;52838:2603;;;;52997:105;53073:28;;53061:41;53073:28;;;:::i;53061:41::-;52997:105;;;;;;;;;51740:142;274:69023;;;51803:21;274:69023;;51848:23;274:69023;;-1:-1:-1;274:69023:26;;:::i;:::-;;;;51848:23;;:::i;:::-;51740:142;;;50432:138;-1:-1:-1;50461:17:26;;;274:69023;;;;;;-1:-1:-1;;;;;274:69023:26;;;;;;;;;;;;50461:17;;50501:38;;274:69023;;-1:-1:-1;274:69023:26;;;;50501:38;274:69023;50134:69;274:69023;;-1:-1:-1;;;50176:16:26;;50057:18;;50176:16;50052:73;274:69023;;-1:-1:-1;;;50098:16:26;;50057:18;;50098:16;49964:79;274:69023;;-1:-1:-1;;;50019:13:26;;;;;49399:257;274:69023;;-1:-1:-1;;;49629:16:26;;;;;49416:181;274:69023;;-1:-1:-1;274:69023:26;49446:20;274:69023;;;-1:-1:-1;274:69023:26;;49589:7;274:69023;;;;;;;49416:15;49514:83;;49416:181;;2575:307:25;1899:1;2702:7;274:69023:26;2702:18:25;2698:86;;1899:1;2702:7;274:69023:26;2575:307:25:o;2698:86::-;274:69023:26;;-1:-1:-1;;;2743:30:25;;;;;1920:174:28;1072:10;274:69023:26;-1:-1:-1;;;;;274:69023:26;735:10:24;1983:27:28;1979:109;;1920:174::o;1979:109::-;274:69023:26;;-1:-1:-1;;;2033:44:28;;735:10:24;2033:44:28;;;274:69023:26;;;2033:44:28;2100:207;2196:10;274:69023:26;;-1:-1:-1;;;;;274:69023:26;;;-1:-1:-1;;;;;;274:69023:26;;;;;;;;;2256:44:28;;2196:10;2256:44;2100:207::o;34502:310:26:-;-1:-1:-1;274:69023:26;34608:20;274:69023;;;-1:-1:-1;274:69023:26;;34590:15;;:56;:151;;;;;34502:310;34573:233;;;34502:310::o;34573:233::-;274:69023;;-1:-1:-1;;;34773:22:26;;;;;34590:151;274:69023;;34734:6;274:69023;;;;;;;34590:15;34662:79;34590:151;;;34929:178;-1:-1:-1;274:69023:26;35002:20;274:69023;;35002:37;274:69023;-1:-1:-1;274:69023:26;35002:37;274:69023;35002:49;34998:103;;34929:178::o;34998:103::-;274:69023;;-1:-1:-1;;;35074:16:26;;;;;39395:324;;-1:-1:-1;39500:13:26;-1:-1:-1;39535:3:26;274:69023;;39515:18;;;;;39572:10;;;;:::i;:::-;274:69023;;39558:10;274:69023;;;;;;-1:-1:-1;;;;;274:69023:26;39558:24;39554:72;;39535:3;274:69023;;39500:13;;39554:72;39602:9;-1:-1:-1;39602:9:26;39554:72;;39515:18;;;274:69023;;;;;;;;;;;39699:11;39662:27;39645:14;39662:27;39645:44;39662:27;;;:::i;:::-;274:69023;;;39645:14;;;:::i;:::-;274:69023;;-1:-1:-1;;;;;274:69023:26;;;;;;;;;;;;;;;;;;;;;;;;;;",
    linkReferences: {},
  },
  methodIdentifiers: {
    "AdvanceToTheNextPeriod()": "d8a77c62",
    "EmergencyStartTime()": "7b47d7e8",
    "EmergencyWithdrawal(address,uint256)": "23d6711a",
    "addAdditionalDay()": "41bb0d1a",
    "addToCommunity(address)": "9c6d2491",
    "approveNewSubgroupMember(uint256,uint256,bool)": "dbcd14f0",
    "approveSubGroupAssignment(bool)": "1c35f952",
    "assignToSubGroup(address,uint256,bool)": "93f881d9",
    "beginEmergency()": "756b01b6",
    "cancelManualCollapsBySecretary()": "3e95f402",
    "createSubGroup()": "6564f43e",
    "defects()": "cb26c5f5",
    "defineSecretarySuccessor(address[])": "d6a5658f",
    "divideShortFall()": "9d39089c",
    "emergencyHandOverSecretary(address)": "b174a68d",
    "emergencyRefund()": "16bfe25c",
    "endEmergency()": "3f1b3f8f",
    "exitSubGroup()": "5228e916",
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
    "getIsManuallyCollapsed()": "ac0fda83",
    "getManuallyCollapsedPeriod()": "263d083e",
    "getMemberInfoFromId(uint256,uint256)": "a8fdb788",
    "getMemberToMemberId(address)": "e319ace9",
    "getMemberToMemberInfo(address,uint256)": "a3d033e5",
    "getPaymentToken()": "d41c3a65",
    "getPeriodId()": "a0b34a30",
    "getPeriodIdToClaimIdToClaimInfo(uint256,uint256)": "7b55476d",
    "getPeriodIdToClaimIds(uint256)": "ea398bc1",
    "getPeriodIdToDefectorsId(uint256)": "3a85bded",
    "getPeriodIdToManualCollapse(uint256)": "c66460e1",
    "getPeriodIdToPeriodInfo(uint256)": "e329972d",
    "getPeriodIdWhiteListedClaims(uint256)": "0899fe41",
    "getSecretarySuccessors()": "27bd3ef0",
    "getSubGroupIdToSubGroupInfo(uint256)": "a482b102",
    "getTotalCoverage()": "cc10a3aa",
    "getUpcomingSecretary()": "6d4da76d",
    "handoverSecretary(address)": "b0fdc3e4",
    "initiatDefaultStateAndSetCoverage(uint256)": "74add0f3",
    "injectFunds()": "50c8e1fd",
    "issueRefund(bool)": "c4afc37a",
    "joinToCommunity()": "745092dd",
    "leaveFromASubGroup()": "cba47c26",
    "manualCollapsBySecretary()": "5c3ebd37",
    "payPremium(bool)": "39786a96",
    "secretary()": "5495d2aa",
    "secretaryAcceptance()": "4fcd291a",
    "submitClaim()": "1afbd128",
    "updateCoverageAmount(uint256)": "72547ec9",
    "updateMemberStatus()": "f3f02d03",
    "whitelistClaim(uint256)": "ec15a890",
    "withdrawClaimFund(bool)": "d98b2503",
    "withdrawRefund()": "110f8874",
  },
  rawMetadata:
    '{"compiler":{"version":"0.8.23+commit.f704f362"},"language":"Solidity","output":{"abi":[{"inputs":[{"internalType":"address","name":"_paymentToken","type":"address"},{"internalType":"address","name":"owner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"AlreadyAdded","type":"error"},{"inputs":[],"name":"AlreadyClaimed","type":"error"},{"inputs":[],"name":"AlreadySet","type":"error"},{"inputs":[],"name":"AlreadySubmitted","type":"error"},{"inputs":[],"name":"AmountZero","type":"error"},{"inputs":[],"name":"CannotBeZeroAddress","type":"error"},{"inputs":[],"name":"CannotEmergencyRefund","type":"error"},{"inputs":[],"name":"ClaimNoOccured","type":"error"},{"inputs":[],"name":"ClaimantNotValidMember","type":"error"},{"inputs":[],"name":"CommunityIsCollapsed","type":"error"},{"inputs":[],"name":"CoverageFullfilled","type":"error"},{"inputs":[],"name":"DFNotMet","type":"error"},{"inputs":[],"name":"DelayInitiated","type":"error"},{"inputs":[],"name":"EmergencyGracePeriod","type":"error"},{"inputs":[],"name":"InEmergency","type":"error"},{"inputs":[],"name":"InValidClaim","type":"error"},{"inputs":[],"name":"InsufficientFunds","type":"error"},{"inputs":[],"name":"InvalidMember","type":"error"},{"inputs":[],"name":"InvalidSubGroup","type":"error"},{"inputs":[],"name":"ManuallyCollapsed","type":"error"},{"inputs":[],"name":"NeedMoreSuccessor","type":"error"},{"inputs":[],"name":"NoClaimOccured","type":"error"},{"inputs":[],"name":"NoValiddMember","type":"error"},{"inputs":[],"name":"NotAssignedYet","type":"error"},{"inputs":[],"name":"NotClaimSubmittionWindow","type":"error"},{"inputs":[],"name":"NotClaimWindow","type":"error"},{"inputs":[],"name":"NotClaimant","type":"error"},{"inputs":[],"name":"NotDefectWindow","type":"error"},{"inputs":[],"name":"NotFirstSuccessor","type":"error"},{"inputs":[],"name":"NotHandingOver","type":"error"},{"inputs":[],"name":"NotInAssigned","type":"error"},{"inputs":[],"name":"NotInAssignmentSuccessfull","type":"error"},{"inputs":[],"name":"NotInCovereged","type":"error"},{"inputs":[],"name":"NotInDefOrFra","type":"error"},{"inputs":[],"name":"NotInEmergency","type":"error"},{"inputs":[],"name":"NotInInDefault","type":"error"},{"inputs":[],"name":"NotInIniOrDef","type":"error"},{"inputs":[],"name":"NotInInitilization","type":"error"},{"inputs":[],"name":"NotInInjectionWindow","type":"error"},{"inputs":[],"name":"NotInManualCollaps","type":"error"},{"inputs":[],"name":"NotInSuccessorList","type":"error"},{"inputs":[],"name":"NotIncluded","type":"error"},{"inputs":[],"name":"NotPaidInvalid","type":"error"},{"inputs":[],"name":"NotPayWindow","type":"error"},{"inputs":[],"name":"NotRefundWindow","type":"error"},{"inputs":[],"name":"NotReorged","type":"error"},{"inputs":[],"name":"NotValidMember","type":"error"},{"inputs":[],"name":"NotWhiteListed","type":"error"},{"inputs":[],"name":"NotWhitelistWindow","type":"error"},{"inputs":[],"name":"OutOfTheCommunity","type":"error"},{"inputs":[],"name":"PrevPeriodNotEnded","type":"error"},{"inputs":[],"name":"ReentrancyGuardReentrantCall","type":"error"},{"inputs":[],"name":"SGMNotFullfilled","type":"error"},{"inputs":[],"name":"SamePeriod","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"SecretaryInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"SecretaryUnauthorizedSecretary","type":"error"},{"inputs":[],"name":"TimeNotPassed","type":"error"},{"inputs":[],"name":"TurningTimePassed","type":"error"},{"inputs":[],"name":"WLCAvailable","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"member","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"}],"name":"AddedToCommunity","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"pEndTime","type":"uint256"}],"name":"AdditionalDayAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"member","type":"address"},{"indexed":false,"internalType":"address","name":"approver","type":"address"},{"indexed":false,"internalType":"uint256","name":"groupId","type":"uint256"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApproveNewGroupMember","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"member","type":"address"},{"indexed":false,"internalType":"uint256","name":"groupId","type":"uint256"},{"indexed":false,"internalType":"bool","name":"joined","type":"bool"}],"name":"ApprovedGroupAssignment","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"member","type":"address"},{"indexed":false,"internalType":"uint256","name":"groupId","type":"uint256"},{"indexed":false,"internalType":"bool","name":"isReOrging","type":"bool"}],"name":"AssignedToSubGroup","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"member","type":"address"},{"indexed":false,"internalType":"uint256","name":"claimId","type":"uint256"}],"name":"ClaimSubmitted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"cId","type":"uint256"}],"name":"ClaimWhiteListed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"collapsedAt","type":"uint256"}],"name":"CommunityCollapsed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"coverage","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"basePremium","type":"uint256"}],"name":"CoverageUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"coverage","type":"uint256"}],"name":"DefaultStateInitiatedAndCoverageSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"emergencyStartedAt","type":"uint256"}],"name":"EmergencyBegan","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyPayment","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"secretary","type":"address"}],"name":"EmergencyhandOverSecretary","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"member","type":"address"},{"indexed":false,"internalType":"uint256","name":"groupId","type":"uint256"}],"name":"ExitedFromSubGroup","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"claimant","type":"address"},{"indexed":false,"internalType":"uint256","name":"claimId","type":"uint256"}],"name":"ForfeitClaim","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"totalClaimableAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"cAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"vmCount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"pmAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"pmShortAmount","type":"uint256"}],"name":"FundClaimFailed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"claimant","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"cId","type":"uint256"}],"name":"FundClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"FundInjected","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"member","type":"address"},{"indexed":false,"internalType":"uint256","name":"paidAmount","type":"uint256"}],"name":"JoinedToCommunity","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"member","type":"address"},{"indexed":false,"internalType":"uint256","name":"gId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"mId","type":"uint256"}],"name":"LeavedFromGroup","type":"event"},{"anonymous":false,"inputs":[],"name":"ManualCollapseCancelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"timee","type":"uint256"}],"name":"ManualCollapsedCancelled","type":"event"},{"anonymous":false,"inputs":[],"name":"ManualCollapsedHappenend","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"member","type":"address"},{"indexed":false,"internalType":"uint256","name":"periodId","type":"uint256"}],"name":"MemberDefected","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"member","type":"address"},{"indexed":false,"internalType":"enum TandaPayEvents.MemberStatus","name":"newStatus","type":"uint8"}],"name":"MemberStatusUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"periodId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"coverage","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"baseAmount","type":"uint256"}],"name":"NextPeriodInitiated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"member","type":"address"},{"indexed":false,"internalType":"uint256","name":"periodId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"bool","name":"usingATW","type":"bool"}],"name":"PremiumPaid","type":"event"},{"anonymous":false,"inputs":[],"name":"RefundIssued","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"member","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RefundWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"nSecretary","type":"address"}],"name":"SecretaryAccepted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"prefferedSuccessr","type":"address"}],"name":"SecretaryHandOverEnabled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address[]","name":"successors","type":"address[]"}],"name":"SecretarySuccessorsDefined","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"SecretaryTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"totalAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"pmAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"fromSecrretary","type":"uint256"}],"name":"ShortFallDivided","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"}],"name":"SubGroupCreated","type":"event"},{"inputs":[],"name":"AdvanceToTheNextPeriod","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"EmergencyStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdrawal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"addAdditionalDay","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_member","type":"address"}],"name":"addToCommunity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_sId","type":"uint256"},{"internalType":"uint256","name":"_nMemberId","type":"uint256"},{"internalType":"bool","name":"_accepted","type":"bool"}],"name":"approveNewSubgroupMember","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_shouldJoin","type":"bool"}],"name":"approveSubGroupAssignment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_member","type":"address"},{"internalType":"uint256","name":"_sId","type":"uint256"},{"internalType":"bool","name":"_isReorging","type":"bool"}],"name":"assignToSubGroup","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"beginEmergency","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cancelManualCollapsBySecretary","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"createSubGroup","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"defects","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_successors","type":"address[]"}],"name":"defineSecretarySuccessor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"divideShortFall","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_eSecretary","type":"address"}],"name":"emergencyHandOverSecretary","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyRefund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endEmergency","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"exitSubGroup","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getBasePremium","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCommunityState","outputs":[{"internalType":"enum TandaPay.CommunityStates","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentClaimId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentMemberId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentSubGroupId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getEmergencyHandOverStartedPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getEmergencyHandoverStartedAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getEmergencySecretaries","outputs":[{"internalType":"address[2]","name":"","type":"address[2]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getHandoverStartedAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pId","type":"uint256"}],"name":"getIsAMemberDefectedInPeriod","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pId","type":"uint256"}],"name":"getIsAllMemberNotPaidInPeriod","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getIsHandingOver","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getIsManuallyCollapsed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getManuallyCollapsedPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_memberId","type":"uint256"},{"internalType":"uint256","name":"_pId","type":"uint256"}],"name":"getMemberInfoFromId","outputs":[{"components":[{"internalType":"uint256","name":"memberId","type":"uint256"},{"internalType":"uint256","name":"associatedGroupId","type":"uint256"},{"internalType":"address","name":"member","type":"address"},{"internalType":"uint256","name":"cEscrowAmount","type":"uint256"},{"internalType":"uint256","name":"ISEscorwAmount","type":"uint256"},{"internalType":"uint256","name":"pendingRefundAmount","type":"uint256"},{"internalType":"uint256","name":"availableToWithdraw","type":"uint256"},{"internalType":"bool","name":"eligibleForCoverageInPeriod","type":"bool"},{"internalType":"bool","name":"isPremiumPaid","type":"bool"},{"internalType":"uint256","name":"idToQuedRefundAmount","type":"uint256"},{"internalType":"enum TandaPayEvents.MemberStatus","name":"status","type":"uint8"},{"internalType":"enum TandaPay.AssignmentStatus","name":"assignment","type":"uint8"}],"internalType":"struct TandaPay.DemoMemberInfo","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_member","type":"address"}],"name":"getMemberToMemberId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_member","type":"address"},{"internalType":"uint256","name":"_pId","type":"uint256"}],"name":"getMemberToMemberInfo","outputs":[{"components":[{"internalType":"uint256","name":"memberId","type":"uint256"},{"internalType":"uint256","name":"associatedGroupId","type":"uint256"},{"internalType":"address","name":"member","type":"address"},{"internalType":"uint256","name":"cEscrowAmount","type":"uint256"},{"internalType":"uint256","name":"ISEscorwAmount","type":"uint256"},{"internalType":"uint256","name":"pendingRefundAmount","type":"uint256"},{"internalType":"uint256","name":"availableToWithdraw","type":"uint256"},{"internalType":"bool","name":"eligibleForCoverageInPeriod","type":"bool"},{"internalType":"bool","name":"isPremiumPaid","type":"bool"},{"internalType":"uint256","name":"idToQuedRefundAmount","type":"uint256"},{"internalType":"enum TandaPayEvents.MemberStatus","name":"status","type":"uint8"},{"internalType":"enum TandaPay.AssignmentStatus","name":"assignment","type":"uint8"}],"internalType":"struct TandaPay.DemoMemberInfo","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPaymentToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPeriodId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pId","type":"uint256"},{"internalType":"uint256","name":"_cId","type":"uint256"}],"name":"getPeriodIdToClaimIdToClaimInfo","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"claimant","type":"address"},{"internalType":"uint256","name":"claimAmount","type":"uint256"},{"internalType":"uint256","name":"SGId","type":"uint256"},{"internalType":"bool","name":"isWhitelistd","type":"bool"},{"internalType":"bool","name":"isClaimed","type":"bool"}],"internalType":"struct TandaPay.ClaimInfo","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pId","type":"uint256"}],"name":"getPeriodIdToClaimIds","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pId","type":"uint256"}],"name":"getPeriodIdToDefectorsId","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pId","type":"uint256"}],"name":"getPeriodIdToManualCollapse","outputs":[{"components":[{"internalType":"uint256","name":"startedAT","type":"uint256"},{"internalType":"uint256","name":"availableToTurnTill","type":"uint256"}],"internalType":"struct TandaPay.ManualCollapse","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pId","type":"uint256"}],"name":"getPeriodIdToPeriodInfo","outputs":[{"components":[{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"willEndAt","type":"uint256"},{"internalType":"uint256[]","name":"claimIds","type":"uint256[]"},{"internalType":"uint256","name":"coverage","type":"uint256"},{"internalType":"uint256","name":"totalPaid","type":"uint256"}],"internalType":"struct TandaPay.PeriodInfo","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pId","type":"uint256"}],"name":"getPeriodIdWhiteListedClaims","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSecretarySuccessors","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_sId","type":"uint256"}],"name":"getSubGroupIdToSubGroupInfo","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address[]","name":"members","type":"address[]"},{"internalType":"bool","name":"isValid","type":"bool"}],"internalType":"struct TandaPay.SubGroupInfo","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalCoverage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getUpcomingSecretary","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_prefferedSuccessor","type":"address"}],"name":"handoverSecretary","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_coverage","type":"uint256"}],"name":"initiatDefaultStateAndSetCoverage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"injectFunds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_shouldTransfer","type":"bool"}],"name":"issueRefund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"joinToCommunity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"leaveFromASubGroup","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"manualCollapsBySecretary","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_useFromATW","type":"bool"}],"name":"payPremium","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"secretary","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"secretaryAcceptance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"submitClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_coverage","type":"uint256"}],"name":"updateCoverageAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"updateMemberStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cId","type":"uint256"}],"name":"whitelistClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"isForfeit","type":"bool"}],"name":"withdrawClaimFund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawRefund","outputs":[],"stateMutability":"nonpayable","type":"function"}],"devdoc":{"errors":{"ReentrancyGuardReentrantCall()":[{"details":"Unauthorized reentrant call."}]},"kind":"dev","methods":{"AdvanceToTheNextPeriod()":{"details":"Advances the community to the next period, resetting the state and recalculating premiums if necessary."},"EmergencyWithdrawal(address,uint256)":{"details":"Secretary sends out emergency funding","params":{"amount":"amount of tokens to send","to":"the address to send emergency fund"}},"addAdditionalDay()":{"details":"Extends the current period by adding an extra day."},"addToCommunity(address)":{"details":"Adds a new member to the community","params":{"_member":"address of new member to add"}},"approveNewSubgroupMember(uint256,uint256,bool)":{"details":"Allows existing subgroup members to approve or reject a new member\'s assignment to their subgroup.","params":{"_accepted":"true if accepted, false if rejecet","_nMemberId":"new member id","_sId":"subgroup id"}},"approveSubGroupAssignment(bool)":{"details":"Allows a member to approve or reject their assignment to a subgroup.","params":{"_shouldJoin":"true to approve assignment, false to reject"}},"assignToSubGroup(address,uint256,bool)":{"details":"assign a member to a subgroup, with reorg option","params":{"_isReorging":"flag that decides if this operation is part of a reorganization process","_member":"address of new member to add","_sId":"subgroup Id"}},"beginEmergency()":{"details":"Secretary enters emergency state"},"cancelManualCollapsBySecretary()":{"details":"Cancels an ongoing manual collapse if the conditions allow, returning the community to the DEFAULT state."},"createSubGroup()":{"details":"creates new subgroup"},"defects()":{"details":"Allows a member to defect from the community during the defect window, altering their status and potentially affecting the community\'s state."},"defineSecretarySuccessor(address[])":{"details":"Defines a list of successor candidates for the Secretary role based on the community\'s size.only callable by secretary","params":{"_successors":"list of successors to the secretary"}},"divideShortFall()":{"details":"Divides any shortfall in coverage among the valid members during the injection window."},"emergencyHandOverSecretary(address)":{"details":"Facilitates an emergency handover of the Secretary role when two designated successors agree.","params":{"_eSecretary":"emergency successor address"}},"emergencyRefund()":{"details":"emergency refund. Makes all funds refundable to members."},"endEmergency()":{"details":"Secretary Ends Emergency, collapses community"},"exitSubGroup()":{"details":"Allows a member to exit their assigned subgroup."},"getBasePremium()":{"details":"returns the base premium"},"getCommunityState()":{"details":"returns community states"},"getCurrentClaimId()":{"details":"returns the most recent claim Id"},"getCurrentMemberId()":{"details":"returns the most recent memberId"},"getCurrentSubGroupId()":{"details":"returns the most recent subGroupId"},"getIsAMemberDefectedInPeriod(uint256)":{"details":"returns flag if member has defected at a give period","params":{"_pId":"period Id"}},"getIsAllMemberNotPaidInPeriod(uint256)":{"details":"returns flag whether all members in a period have paid","params":{"_pId":"period Id"}},"getIsManuallyCollapsed()":{"details":"returns flag if community was manually collapsed"},"getManuallyCollapsedPeriod()":{"details":"returns the manually collapsed Period"},"getMemberToMemberId(address)":{"details":"returns the member Id","params":{"_member":"user address"}},"getMemberToMemberInfo(address,uint256)":{"details":"returns member info from address and member Id","params":{"_member":"user address","_pId":"member Id"}},"getPaymentToken()":{"details":"returns the address of the payment token"},"getPeriodId()":{"details":"returns the most recent period Id"},"getPeriodIdToClaimIdToClaimInfo(uint256,uint256)":{"details":"returns claim info based on period and claim Id","params":{"_cId":"claim Id (specific to period)","_pId":"period Id"}},"getPeriodIdToClaimIds(uint256)":{"details":"returns array of claim Ids per period","params":{"_pId":"period Id"}},"getPeriodIdToDefectorsId(uint256)":{"details":"returns array of defectors IDs per period","params":{"_pId":"period Id"}},"getPeriodIdToManualCollapse(uint256)":{"details":"returns Manual Collapse info per period ID","params":{"_pId":"period Id"}},"getPeriodIdToPeriodInfo(uint256)":{"details":"returns period information","params":{"_pId":"period Id"}},"getPeriodIdWhiteListedClaims(uint256)":{"details":"returns array of whitelisted claimIds per period","params":{"_pId":"period Id"}},"getSubGroupIdToSubGroupInfo(uint256)":{"details":"returns subgroup information","params":{"_sId":"id of the subgroup"}},"getTotalCoverage()":{"details":"returns the total coverage"},"handoverSecretary(address)":{"details":"Initiates the handover process for the Secretary role to a preferred successor.only callable by secretary","params":{"_prefferedSuccessor":"address to be the new secretary"}},"initiatDefaultStateAndSetCoverage(uint256)":{"details":"Transitions the community from INITIALIZATION to DEFAULT state and sets the total coverage amount.","params":{"_coverage":"amount of coverage"}},"injectFunds()":{"details":"Allows the Secretary to inject additional funds into the contract during the injection window to cover a shortfall."},"issueRefund(bool)":{"details":"Issues refunds to members during the refund window, optionally transferring the funds directly to the members.","params":{"_shouldTransfer":"whether refunds should be transferred to users or not"}},"joinToCommunity()":{"details":"allows members (msg.sender) to join the community"},"leaveFromASubGroup()":{"details":"Allows a member to leave their subgroup, resetting their status and adjusting the subgroup\'s validity."},"manualCollapsBySecretary()":{"details":"Allows the Secretary to manually collapse the community, transitioning it to the COLLAPSED state."},"payPremium(bool)":{"details":"Allows a member to pay their premium for the upcoming period, either from their available withdrawal balance or directly via transfer.","params":{"_useFromATW":"if true, pay from available balance, if false, must pay with token."}},"secretaryAcceptance()":{"details":"Allows a designated successor to accept the Secretary role, completing the handover process."},"submitClaim()":{"details":"Allows a member to submit a claim during the claim submission window."},"updateCoverageAmount(uint256)":{"details":"Updates the total coverage amount for the community and recalculates the base premium accordingly.only callable by secretary","params":{"_coverage":"amount of coverage to assign"}},"updateMemberStatus()":{"details":"Updates the status of all members based on their premium payment status and the current community state."},"whitelistClaim(uint256)":{"details":"Whitelists a claim during the designated whitelist window, making it eligible for further processing.","params":{"_cId":"the claim id"}},"withdrawClaimFund(bool)":{"details":"Allows a member to withdraw their claim fund, either fully or forfeiting it, depending on the provided flag.","params":{"isForfeit":"allows member to choose to leave their claim instead"}},"withdrawRefund()":{"details":"Allows a member to withdraw their available refund amount."}},"version":1},"userdoc":{"kind":"user","methods":{"AdvanceToTheNextPeriod()":{"notice":"only secretary can call"},"EmergencyWithdrawal(address,uint256)":{"notice":"only secretary can callcan only be called if 24 hours elapses post-emergency declaration"},"addAdditionalDay()":{"notice":"only secretary can call"},"addToCommunity(address)":{"notice":"only secretary can call"},"approveNewSubgroupMember(uint256,uint256,bool)":{"notice":"new member must have \\"REORGED\\" status"},"assignToSubGroup(address,uint256,bool)":{"notice":"only secretary can call"},"beginEmergency()":{"notice":"only secretary can call"},"cancelManualCollapsBySecretary()":{"notice":"only secretary can call"},"createSubGroup()":{"notice":"only secretary can call"},"defects()":{"notice":"defecting can only happen if a claim occured in the previous period"},"divideShortFall()":{"notice":"only secretary can call"},"endEmergency()":{"notice":"only secretary can callcan only be called if 24 hours elapses post-emergency declaration"},"getManuallyCollapsedPeriod()":{"notice":"the id of the period at which the community was collapsed"},"initiatDefaultStateAndSetCoverage(uint256)":{"notice":"Can only be called by secretary"},"injectFunds()":{"notice":"only secretary can call"},"joinToCommunity()":{"notice":"Can only join if community status is \\"DEFAULT\\""},"leaveFromASubGroup()":{"notice":"Removes the member from the subgroup, updates their eligibility and escrow amounts, and potentially invalidates the subgroup."},"manualCollapsBySecretary()":{"notice":"only secretary can call"},"payPremium(bool)":{"notice":"Validates the payment window, calculates the required payment, and updates the member\'s escrow amounts and eligibility for coverage in the next period."},"updateCoverageAmount(uint256)":{"notice":"can only update if community is not default or initializing"},"whitelistClaim(uint256)":{"notice":"only callable by secretary"}},"version":1}},"settings":{"compilationTarget":{"src/TandaPay.sol":"TandaPay"},"evmVersion":"shanghai","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":true,"runs":200},"remappings":[":@openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/",":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",":aave-v3-core/=lib/aave-v3-core/",":ds-test/=lib/solmate/lib/ds-test/src/",":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",":forge-std/=lib/forge-std/src/",":halmos-cheatcodes/=lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/",":openzeppelin-contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/",":openzeppelin-contracts/=lib/openzeppelin-contracts/",":solmate/=lib/solmate/src/"],"viaIR":true},"sources":{"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol":{"keccak256":"0xe06a3f08a987af6ad2e1c1e774405d4fe08f1694b67517438b467cecf0da0ef7","license":"MIT","urls":["bzz-raw://df6f0c459663c9858b6cba2cda1d14a7d05a985bed6d2de72bd8e78c25ee79db","dweb:/ipfs/QmeTTxZ7qVk9rjEv2R4CpCwdf8UMCcRqDNMvzNxHc3Fnn9"]},"lib/openzeppelin-contracts/contracts/utils/Context.sol":{"keccak256":"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2","license":"MIT","urls":["bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12","dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF"]},"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol":{"keccak256":"0x11a5a79827df29e915a12740caf62fe21ebe27c08c9ae3e09abe9ee3ba3866d3","license":"MIT","urls":["bzz-raw://3cf0c69ab827e3251db9ee6a50647d62c90ba580a4d7bbff21f2bea39e7b2f4a","dweb:/ipfs/QmZiKwtKU1SBX4RGfQtY7PZfiapbbu6SZ9vizGQD9UHjRA"]},"src/TandaPay.sol":{"keccak256":"0xf4df83d1d3bda93957f85f958c2ac17b461b5e17c258153f9258d055fae81834","license":"MIT","urls":["bzz-raw://05083e3116852684a75160560f073e3929363825e96eda65725d211f3ade887f","dweb:/ipfs/QmaXBF5g9tLNSzUbz2FXcpN3souWub2BTffksAyhjbqAWP"]},"src/secretary.sol":{"keccak256":"0x2ac557d1de7cdc2a09329fa9db6669f2a968fa5ff0302adab6d015ede832d995","license":"MIT","urls":["bzz-raw://7c596bcf17ba59430f594f69059666db9da5ced373f7bcadf3f1e8fc2718f706","dweb:/ipfs/QmR3fNu1X8oJ2dVPE41Pq8ZrUNZ9mSesGSoMUSsRZyq4HT"]},"src/util/TandaPayErrors.sol":{"keccak256":"0x5185d070d308719c6f50db5cb43e8426720acedb0eb94c0c8a9fb953e914de64","license":"MIT","urls":["bzz-raw://cf510382857b2574e70f4a83137ed6640ee1f94177407186ad2500d3c4ff0400","dweb:/ipfs/QmbZmNrrmm2cDvAaLk18oQfYhkhZ3sTcV4SXZdeiheHY1G"]},"src/util/TandaPayEvents.sol":{"keccak256":"0x9701311d9ca3c3fd051db8bca5e79093960d1963029ea14e07f82deaee6bda4d","license":"MIT","urls":["bzz-raw://127d95bdc72329a725af2262983e0bbca58963fa62b2956c990c686df10bc7fe","dweb:/ipfs/QmPSCXCAYcMREiqhApmm5eJK1QKrTGu53Y7cUdtaUW3yio"]}},"version":1}',
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
          stateMutability: "nonpayable",
          type: "function",
          name: "AdvanceToTheNextPeriod",
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "EmergencyStartTime",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        },
        {
          inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "EmergencyWithdrawal",
        },
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "function",
          name: "addAdditionalDay",
        },
        {
          inputs: [
            { internalType: "address", name: "_member", type: "address" },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "addToCommunity",
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
          name: "approveSubGroupAssignment",
        },
        {
          inputs: [
            { internalType: "address", name: "_member", type: "address" },
            { internalType: "uint256", name: "_sId", type: "uint256" },
            { internalType: "bool", name: "_isReorging", type: "bool" },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "assignToSubGroup",
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
          name: "cancelManualCollapsBySecretary",
        },
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "function",
          name: "createSubGroup",
        },
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "function",
          name: "defects",
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
          name: "defineSecretarySuccessor",
        },
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "function",
          name: "divideShortFall",
        },
        {
          inputs: [
            { internalType: "address", name: "_eSecretary", type: "address" },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "emergencyHandOverSecretary",
        },
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "function",
          name: "emergencyRefund",
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
          name: "exitSubGroup",
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
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "getIsManuallyCollapsed",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "getManuallyCollapsedPeriod",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
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
          name: "getPeriodIdToManualCollapse",
          outputs: [
            {
              internalType: "struct TandaPay.ManualCollapse",
              name: "",
              type: "tuple",
              components: [
                { internalType: "uint256", name: "startedAT", type: "uint256" },
                {
                  internalType: "uint256",
                  name: "availableToTurnTill",
                  type: "uint256",
                },
              ],
            },
          ],
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
          name: "handoverSecretary",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_coverage", type: "uint256" },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "initiatDefaultStateAndSetCoverage",
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
          name: "joinToCommunity",
        },
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "function",
          name: "leaveFromASubGroup",
        },
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "function",
          name: "manualCollapsBySecretary",
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
          name: "secretaryAcceptance",
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
          "AdvanceToTheNextPeriod()": {
            details:
              "Advances the community to the next period, resetting the state and recalculating premiums if necessary.",
          },
          "EmergencyWithdrawal(address,uint256)": {
            details: "Secretary sends out emergency funding",
            params: {
              amount: "amount of tokens to send",
              to: "the address to send emergency fund",
            },
          },
          "addAdditionalDay()": {
            details: "Extends the current period by adding an extra day.",
          },
          "addToCommunity(address)": {
            details: "Adds a new member to the community",
            params: { _member: "address of new member to add" },
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
          "approveSubGroupAssignment(bool)": {
            details:
              "Allows a member to approve or reject their assignment to a subgroup.",
            params: {
              _shouldJoin: "true to approve assignment, false to reject",
            },
          },
          "assignToSubGroup(address,uint256,bool)": {
            details: "assign a member to a subgroup, with reorg option",
            params: {
              _isReorging:
                "flag that decides if this operation is part of a reorganization process",
              _member: "address of new member to add",
              _sId: "subgroup Id",
            },
          },
          "beginEmergency()": { details: "Secretary enters emergency state" },
          "cancelManualCollapsBySecretary()": {
            details:
              "Cancels an ongoing manual collapse if the conditions allow, returning the community to the DEFAULT state.",
          },
          "createSubGroup()": { details: "creates new subgroup" },
          "defects()": {
            details:
              "Allows a member to defect from the community during the defect window, altering their status and potentially affecting the community's state.",
          },
          "defineSecretarySuccessor(address[])": {
            details:
              "Defines a list of successor candidates for the Secretary role based on the community's size.only callable by secretary",
            params: { _successors: "list of successors to the secretary" },
          },
          "divideShortFall()": {
            details:
              "Divides any shortfall in coverage among the valid members during the injection window.",
          },
          "emergencyHandOverSecretary(address)": {
            details:
              "Facilitates an emergency handover of the Secretary role when two designated successors agree.",
            params: { _eSecretary: "emergency successor address" },
          },
          "emergencyRefund()": {
            details: "emergency refund. Makes all funds refundable to members.",
          },
          "endEmergency()": {
            details: "Secretary Ends Emergency, collapses community",
          },
          "exitSubGroup()": {
            details: "Allows a member to exit their assigned subgroup.",
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
          "getIsManuallyCollapsed()": {
            details: "returns flag if community was manually collapsed",
          },
          "getManuallyCollapsedPeriod()": {
            details: "returns the manually collapsed Period",
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
          "getPeriodIdToManualCollapse(uint256)": {
            details: "returns Manual Collapse info per period ID",
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
          "handoverSecretary(address)": {
            details:
              "Initiates the handover process for the Secretary role to a preferred successor.only callable by secretary",
            params: { _prefferedSuccessor: "address to be the new secretary" },
          },
          "initiatDefaultStateAndSetCoverage(uint256)": {
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
          "joinToCommunity()": {
            details: "allows members (msg.sender) to join the community",
          },
          "leaveFromASubGroup()": {
            details:
              "Allows a member to leave their subgroup, resetting their status and adjusting the subgroup's validity.",
          },
          "manualCollapsBySecretary()": {
            details:
              "Allows the Secretary to manually collapse the community, transitioning it to the COLLAPSED state.",
          },
          "payPremium(bool)": {
            details:
              "Allows a member to pay their premium for the upcoming period, either from their available withdrawal balance or directly via transfer.",
            params: {
              _useFromATW:
                "if true, pay from available balance, if false, must pay with token.",
            },
          },
          "secretaryAcceptance()": {
            details:
              "Allows a designated successor to accept the Secretary role, completing the handover process.",
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
          "AdvanceToTheNextPeriod()": { notice: "only secretary can call" },
          "EmergencyWithdrawal(address,uint256)": {
            notice:
              "only secretary can callcan only be called if 24 hours elapses post-emergency declaration",
          },
          "addAdditionalDay()": { notice: "only secretary can call" },
          "addToCommunity(address)": { notice: "only secretary can call" },
          "approveNewSubgroupMember(uint256,uint256,bool)": {
            notice: 'new member must have "REORGED" status',
          },
          "assignToSubGroup(address,uint256,bool)": {
            notice: "only secretary can call",
          },
          "beginEmergency()": { notice: "only secretary can call" },
          "cancelManualCollapsBySecretary()": {
            notice: "only secretary can call",
          },
          "createSubGroup()": { notice: "only secretary can call" },
          "defects()": {
            notice:
              "defecting can only happen if a claim occured in the previous period",
          },
          "divideShortFall()": { notice: "only secretary can call" },
          "endEmergency()": {
            notice:
              "only secretary can callcan only be called if 24 hours elapses post-emergency declaration",
          },
          "getManuallyCollapsedPeriod()": {
            notice: "the id of the period at which the community was collapsed",
          },
          "initiatDefaultStateAndSetCoverage(uint256)": {
            notice: "Can only be called by secretary",
          },
          "injectFunds()": { notice: "only secretary can call" },
          "joinToCommunity()": {
            notice: 'Can only join if community status is "DEFAULT"',
          },
          "leaveFromASubGroup()": {
            notice:
              "Removes the member from the subgroup, updates their eligibility and escrow amounts, and potentially invalidates the subgroup.",
          },
          "manualCollapsBySecretary()": { notice: "only secretary can call" },
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
          "0xf4df83d1d3bda93957f85f958c2ac17b461b5e17c258153f9258d055fae81834",
        urls: [
          "bzz-raw://05083e3116852684a75160560f073e3929363825e96eda65725d211f3ade887f",
          "dweb:/ipfs/QmaXBF5g9tLNSzUbz2FXcpN3souWub2BTffksAyhjbqAWP",
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
  id: 26,
} as const;
