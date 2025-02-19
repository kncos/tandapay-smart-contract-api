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
      "0x608034620000ea57601f6200591c38819003918201601f19168301916001600160401b03831184841017620000ee578084926040948552833981010312620000ea5760206200004e8262000102565b916001600160a01b0391829162000066910162000102565b16908115620000d2575f549260018060a01b03199280848616175f558260405195167f688b8f34d886f8a2414b39aa6cef1ec6198215ba9b47fe8ac4260b44139bd5b65f80a360016009551690600a541617600a5560ff19601454166014556158049081620001188239f35b6040516351f49ec560e01b81525f6004820152602490fd5b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b51906001600160a01b0382168203620000ea5756fe60806040526004361015610011575f80fd5b5f3560e01c80630899fe4114614a735780630a5b34f214614a44578063110f88741461493b57806316bfe25c146147b45780631afbd128146145ca5780631c35f9521461440157806323d6711a14614274578063263d083e1461425757806327bd3ef0146141c957806339786a9614613da55780633a85bded14613d7b5780633e95f40214613cc85780633f1b3f8f14613b5b57806341bb0d1a14613abc5780634ee9c6f714613a2d5780634fcd291a1461384257806350c8e1fd146137225780635228e916146135365780635495d2aa1461350f5780635c3ebd37146134595780635d86b8e11461343c5780636564f43e146133bd578063661998081461338e5780636d4da76d1461336657806372547ec914612fdf57806372f833a814612fc2578063745092dd14612e2157806374add0f314612d18578063756b01b614612b2a5780637985940d14612b015780637b47d7e814612ae45780637b55476d14612a0457806393f881d9146127dc5780639c6d2491146126a35780639d39089c146123af5780639f2592b314612392578063a0b34a3014612375578063a3d033e51461226b578063a482b102146121a1578063a8fdb78814612096578063ac0fda8314612074578063ac115bbe14612057578063b0fdc3e414611f66578063b174a68d14611c33578063c2a41da014611c11578063c4afc37a146118ed578063c66460e114611893578063cb26c5f5146115d4578063cba47c26146113dc578063cc10a3aa146113bf578063d41c3a6514611397578063d6a5658f146110ff578063d8a77c6214610abf578063d98b250314610a70578063dbcd14f01461090f578063e15d69f3146108f2578063e319ace9146108ba578063e329972d146107cc578063ea398bc114610792578063ec15a890146105d4578063f34cf775146105b7578063f3f02d03146102ef5763fef4c550146102ce575f80fd5b346102eb575f3660031901126102eb576020600854604051908152f35b5f80fd5b346102eb575f3660031901126102eb5760ff601490806014541660059060058110156104b357600481146105a5576003146105935760015b600b546001810180911161053f5781101561059157805f526020906016825260405f2091600a83019085825416600c948582101591826104b35780151580610583575b8381610572575b50610386575b50505050506001915001610327565b60089081830193600e91825491825f528688528c60405f2054165f14610501575050865460ff19166004178755505b898b5416898110156104b357600114806104ec575b6104c7575b898b541697898910156104b3578a946002809a14918261048a575b5098604096937f732dc60c5d1b1df84f06b7e689c1024b7164003eeeded6276c17827b428734c89896938360019c610446989591610475575b50610451575b5050898060a01b0391015416935416908451938452830190614b66565ba18580808080610377565b60ff199182895416178855545f52600783018552875f209081541690558d80610429565b905081545f52865284895f205416155f610423565b929693978096919592505416918210156104b357939591948a94939091600914159060406103ea565b634e487b7160e01b5f52602160045260245ffd5b60ff1960068188541617875581545f5260078401865260405f209081541690556103cf565b5080545f528385528960405f205416156103ca565b6104b35760041480610553575b610519575b506103b5565b5f19810190811161053f575f52601e855260405f20600160ff198254161790558b610513565b634e487b7160e01b5f52601160045260245ffd5b505f19810181811161053f575f52601e86528a60405f2054161561050e565b90506104b357600181141583610371565b505f9250600281141561036a565b005b60405163f856e0a560e01b8152600490fd5b6040516338f25eb760e21b8152600490fd5b346102eb575f3660031901126102eb576020600d54604051908152f35b346102eb576020806003193601126102eb57600435906105f2615639565b60ff6014541660058110156104b357600481146105a557600381146105935760018114159081610786575b5061077457600e5491825f52601b825260405f20546213c680810180821161053f57421190811561076a575b5061075857825f526018825260405f20815f52825260405f208054938285036107465760018201546001600160a01b03165f818152601a86526040808220548252601687529020600a015490919060ff16600c8110156104b35760041491821592610716575b5050610704577f3d37a493337dd24e7cb7bec23d4bde6447e3a1d6e75803de86dbf9f9b5732b849360046106fb9201600160ff19825416179055600e545f526015845260405f20614ddf565b604051908152a1005b6040516329ceba1160e11b8152600490fd5b9091505f52601a845260405f20545f5260168452600760405f2001905f52835260ff60405f2054161585806106af565b60405163e22b971160e01b8152600490fd5b604051633341b44560e11b8152600490fd5b9050421084610649565b604051637bf65ebd60e11b8152600490fd5b6002915014158361061d565b346102eb5760203660031901126102eb576004355f5260196020526107c86107bc60405f20614cbf565b60405191829182614a9d565b0390f35b346102eb576020806003193601126102eb575f60806040516107ed81614c81565b82815282848201526060604082015282606082015201526004355f52601b815260405f2060405161081d81614c81565b8154815260019260018301549281830193845261083c60028201614cbf565b9160408401928352600460038301549260608601938452015492608085019384526040519582875260c08701955183880152516040870152519360a0606087015284518091528160e087019501915f5b8281106108a75784516080890152855160a089015287870388f35b835187529581019592810192880161088c565b346102eb5760203660031901126102eb576001600160a01b036108db614af6565b165f52601a602052602060405f2054604051908152f35b346102eb575f3660031901126102eb576020600754604051908152f35b346102eb5760603660031901126102eb5760043561092b614ae7565b60ff601454169160058310156104b357600483146105a557600380931461059357805f52601760205260405f20916024355f52601660205260405f20600a81019485549460ff8616600c8110156104b357600703610a5f575f915f9060018093018054925b838110610a29575b505050505015610a17577f5cf6fd140141a8a14aca1d538d93e40de68c6a776df311ae862a898ea2a660ef946080948315610a075750805461ffff19166105041790555b60020154604080516001600160a01b03909216825233602083015281019290925215156060820152a1005b61ff0019166107001790556109dc565b604051633d76489160e01b8152600490fd5b610a338183614dca565b90543391851b1c6001600160a01b031614610a4f578401610990565b5050505090508680808080610998565b60405162789f4360e21b8152600490fd5b346102eb5760203660031901126102eb57610a89614ad8565b610a91615616565b60ff6014541660058110156104b357600481146105a55760031461059357610ab890614f81565b6001600955005b346102eb575f3660031901126102eb57610ad7615639565b60145460ff81169060058210156104b357600482146105a55760038214610593575f916001811415806110f1575b61077457600e54801515806110d9575b6110c757610b2290614d34565b9283600e556104b357600214610fcf575b505f52601b60205260405f20428155600f54610bb4575b62278d00420180421161053f578160039160017f08a7ba25f6100ab18c633572926abf5bd6a45439a9322adee245bc3a9685efda940155600f549182910155600e54610baf601054604051938493846040919493926060820195825260208201520152565b0390a1005b60ff6014541660058110156104b357600481146105a5576003146105935760015b600b546001810180911161053f57811015610e1e57805f52601660205260405f209060ff600a83015416600c81101590816104b35780151580610e10575b8281610dff575b50610c2c575b50506001915001610bd5565b600e5491825f526008850160205260ff60405f2054165f14610d9c57505050600a8201805460ff191660041790555b60ff6014541660058110156104b35760011480610d81575b610d54575b60ff6014541660058110156104b35760021480610d37575b6040600193827f732dc60c5d1b1df84f06b7e689c1024b7164003eeeded6276c17827b428734c89390610d1d575b610cf1575b610ce960ff600a878060a01b036002850154169301541683519283526020830190614b66565ba18380610c20565b60ff19600881600a8401541617600a830155600e545f5260078201602052825f20908154169055610cc3565b50600e545f526008810160205260ff825f20541615610cbe565b5060ff600a8301541691600c8310156104b3579160091415610c90565b60ff19600681600a8501541617600a840155600e545f526007830160205260405f20908154169055610c78565b50600e545f526008820160205260ff60405f20541615610c73565b6104b35760041480610ddb575b610db4575b50610c5b565b5f19810190811161053f575f52601e60205260405f20600160ff1982541617905583610dae565b50805f1981011161053f575f1981015f52601e60205260ff60405f20541615610da9565b90506104b357600181141582610c1a565b505f91506002811415610c13565b5060015b600c80546001810180911161053f57821015610f1357815f526017602052600160405f20018054600481109081610f09575b50610e64575b5050600101610e22565b90925f5b8254811015610efd57610e7b8184614dca565b60018060a01b0391549060031b1c165f52601a60205260405f20545f52601660205260405f2090600a82019182549260ff841693888510156104b357600460019514610ecb575b50505001610e68565b60089060ff1916179055600660038201915f835481610ef06004850192835490614d27565b9555550155868080610ec2565b50925050600183610e5a565b9050151585610e54565b50505f90600190600b546001810180911192835b61053f5781811015610f7457805f52601660205260ff600a60405f20015416600c8110156104b357600414610f60575b60010183610f27565b93610f6c600191614d34565b949050610f57565b50509190506001600e5411610f8a575b50610b4a565b80610fbb5750600360ff1960145416176014555f805160206157af8339815191526020604051428152a15b81610f84565b610fc790600f54614edf565b601055610fb5565b5f19820182811161053f57805f526020601c815260ff60405f2054161591826110a4575b82611081575b82611068575b5081611045575b81611022575b5015610b335760ff191660011760145581610b33565b6002198401915083821161053f57601e915f525260ff60405f205416158361100c565b9050600119830183811161053f575f52601e815260ff60405f2054161590611006565b9091505f52601e815260ff60405f205416159084610fff565b9150600219840184811161053f575f52601c815260ff60405f2054161591610ff9565b9150600119840184811161053f575f52601c815260ff60405f2054161591610ff3565b6040516307318e9360e31b8152600490fd5b50805f52601b602052600160405f2001544210610b15565b505f92506002811415610b05565b346102eb576020806003193601126102eb576004359067ffffffffffffffff8083116102eb57366023840112156102eb578260040135926024918411611383578360051b6040519461115385830187614c9d565b85528284860191830101913683116102eb578301905b8282106113645750505061117b615639565b60ff6014541660058110156113505760031461059357600b5490600c82101580611345575b1561131757600284511061130557929190925b5f936001928184809301809111925b6111f7575b6040517f37624b43bc21d01bec4f033a1fb10552d28b406b1a68210476d53af5a7d4e68e9080610baf8982614b0c565b8551871015611300575f85805b611281575b5015610a17576001600160a01b036112218888614f6d565b5116968554600160401b81101561126e5790611266879899611248848a8096018655614d4f565b90919060018060a01b038084549260031b9316831b921b1916179055565b0196956111c2565b85634e487b7160e01b5f5260416004525ffd5b84919498979596986112ed57828110156112e0576001600160a01b03806112a88a89614f6d565b511690825f5260168652600260405f20015416146112d25796979496949594909390860186611204565b509250869493959688611209565b9795949697939093611209565b86634e487b7160e01b5f5260116004525ffd5b6111c7565b6040516350a01e1d60e11b8152600490fd5b60238211611329575b929190926111b3565b600684511015611320576040516350a01e1d60e11b8152600490fd5b5060238211156111a0565b50634e487b7160e01b5f9081526021600452fd5b81356001600160a01b03811681036102eb578152908401908401611169565b50634e487b7160e01b5f9081526041600452fd5b346102eb575f3660031901126102eb57600a546040516001600160a01b039091168152602090f35b346102eb575f3660031901126102eb576020600f54604051908152f35b346102eb575f3660031901126102eb5760ff6014541660058110156104b357600481146105a55760031461059357335f52601a60205260405f20545f52601660205260405f20600181019081545f52601760205260405f209160018060a01b03600283015416156115c2575f9055600a8101805460ff1916600517905561146560018301615719565b600e545f526007810160205260405f2060ff198154169055600381015f8154816114956004860192835490614d27565b9355556006906114aa60068401918254614d27565b9055600460018401541061150c575b50600281015491549054604080516001600160a01b0390941684526020840192909252908201527fed11cf2f685bc5fb16110aa145d0b495f9cfdc2ed33e03b9362d4bdc3fba262d908060608101610baf565b60028301805460ff191690555f5b600184015481101561159a5780611535600192838701614dca565b838060a01b0391549060031b1c165f52601a60205260405f20545f52601660205260405f20600a8101600560ff198254161790556115928460038301925f8454816115866004850192835490614d27565b96555501918254614d27565b90550161151a565b50507fed11cf2f685bc5fb16110aa145d0b495f9cfdc2ed33e03b9362d4bdc3fba262d6114b9565b60405163092ebc6d60e31b8152600490fd5b346102eb575f3660031901126102eb5760ff806014541660058110156104b357600481146105a55760031461059357335f52602090601a825260405f20545f52601680835260405f209060019283830180545f526017865260405f2093600281019460018060a01b039283875416156115c257600e5496875f52601b8a5260405f20546203f480810180911161053f574211801561187f575b61186d575f19880188811161053f575f5260198a5260405f20541561185b575f94899360078601998752898c5260ff604088205416158714611812575050505050600a8101600a60ff198254161790555b816003820180549260056116d86004830195865490614d27565b91015555556014549160ff831660058110156104b3578514611772575b505050600e545f528252601c60405f209260ff1993848154169055600e545f525260405f2091825460ff811615611765575b600e546040805133815260208101929092527f188272a28ee264707f833eac91033ac3a9a04f67845e5a9034afc774a4a9603c919081908101610baf565b1617905580808080611727565b5f918590600b549287840188818611905b6117c1575b5050505050600c810290808204600c149015171561053f5760649004106117b1575b80806116f5565b60ff1916600217601455836117aa565b8061053f578185101561180d57845f52828b5283600a60405f2001541694600c8610156104b35760098b96146117fa575b850194611783565b966118058691614d34565b9790506117f2565b611788565b600a8601805460ff19166009179055869461182d9101615719565b82549154168352601d8a52604083205555600e548252601f875261185660408320825490614ddf565b6116be565b604051631f86a3f560e21b8152600490fd5b6040516379055d9d60e01b8152600490fd5b50875f52601b8a5260405f2054421061166d565b346102eb576020806003193601126102eb57805f60409283516118b581614c65565b82815201526004355f52808052815f209082516118d181614c65565b8160018454948584520154910190815283519283525190820152f35b346102eb5760203660031901126102eb57611906614ad8565b61190e615616565b60ff6014541660058110156104b357600481146105a55760031461059357600e54805f52601b60205260405f205462054600810180911161053f5742118015611bef575b611bdd575f19810190811161053f575f52601560205260405f2054611bcb57600b5460015b60018201821161053f5760018201811015611ba057805f52601660205260405f20906005820180549081611b91575b5050600e546001811180611b70575b80611b63575b611ae4575b50600e5460038111611a89575b508380611a7c575b6119e4575b6001915001611977565b6006820180545f91829055600a5460029094015460405163a9059cbb60e01b81526001600160a01b039182166004820152602481019290925290936020928592604492849291165af1918215611a7157600192611a42575b506119da565b611a639060203d602011611a6a575b611a5b8183614c9d565b810190614d0f565b5084611a3c565b503d611a51565b6040513d5f823e3d90fd5b50600682015415156119d5565b8060021981011161053f57600219015f526009820160205260405f205480156119cd57611abb60068401918254614d27565b9055600e548060021981011161053f57600219015f52600982016020525f6040812055846119cd565b60ff6014541660058110156104b3576002149081611b44575b5015611b3157600382015f81549155600e54805f1981011161053f575f19015f526009830160205260405f20555b846119c0565b600382015f815491556006830155611b2b565b5f1981019150811161053f575f52601560205260405f20541585611afd565b50600383015415156119bb565b50805f1981011161053f575f1981015f52601560205260405f2054156119b5565b5f9055600683015584806119a6565b7f01c9e927536754e1d95ea7a9eda17265ab11a240401b5926f33c0eb76c9d7f335f80a16001600955005b60405163fcb6f0ab60e01b8152600490fd5b60405163d53184ed60e01b8152600490fd5b50805f52601b60205260405f20546203f480810180911161053f574210611952565b346102eb575f3660031901126102eb57602060ff600554166040519015158152f35b346102eb5760203660031901126102eb57611c4c614af6565b6001600160a01b0381811691908215611f545760ff6014541660058110156104b3576003809114610593575f335f52601a60205260405f20548015159081611f2e575b50611f26575b15610a17575f925f93600194858054915b828110611efd5750505015611eeb5781548316158080611edf575b80611ed2575b611ea55715611e3357600380546001600160a01b0319166001600160a01b0390921691909117905542600855600e546006555b818154169283151580611e26575b611d3a575b7f882febe0458c27b4ed12caa22ad034f24f206e2da9aa922015eff66e45f2006b602086604051908152a1005b5f9492938460045416145f14611e0557611d5684835416615664565b8054825485165f5b828110611dde575050505b6001600160601b0360a01b8083541683556004541660045554935f19850194851161053f57611248602094611dce93611dc27f882febe0458c27b4ed12caa22ad034f24f206e2da9aa922015eff66e45f2006b98614d4f565b9054911b1c1691614d4f565b611dd6614e13565b918380611d0d565b8187611de983614d4f565b905490881b1c1614611dfd575b8301611d5e565b965086611df6565b9350611e1f83611e13614d98565b905490841b1c16615664565b5f93611d69565b5082600454161515611d08565b60085462015180810180911161053f5780421080611ec5575b15611e6a575050600480546001600160a01b03191685179055611cfa565b421180611eb7575b15611ea557600380546001600160a01b0319166001600160a01b0390921691909117905542600855600e54600655611cfa565b604051637787a74d60e01b8152600490fd5b50600654600e541415611e72565b50600654600e5414611e4c565b50600654600e5414611cc7565b50836004541615611cc1565b6040516362c9b45b60e01b8152600490fd5b86611f0782614d4f565b905490881b1c168914611f1d575b018690611ca6565b92508092611f15565b506001611c95565b90505f52601660205260ff600a60405f20015416600c8110156104b35760041486611c8f565b604051631e7d738760e21b8152600490fd5b346102eb5760203660031901126102eb57611f7f614af6565b611f87615639565b60ff601454169060058210156104b3576003809214610593576001600160a01b039081169182612004575b7f9d35d6f02c23b682244e3ab27b9be76fa329228dd25ecfa1b9b9974d77c22a14602084806001600160601b0360a01b600254161760025542600755600160ff196005541617600555604051908152a1005b5f915f90600192600154925b838110612029575b505050505015610a17578180611fb2565b8261203382614d4f565b905490841b1c168714612047578401612010565b5050505090508280808080612018565b346102eb575f3660031901126102eb576020600654604051908152f35b346102eb575f3660031901126102eb57602060ff601254166040519015158152f35b346102eb576107c861213c61218f60ff6120af36614b50565b906120b8614efd565b505f52601660205260405f209080155f1461219b5750600e54905b80549160018201549060018060a01b0360028401541690600384015460048501546005860154916006870154935f52600787016020528860405f20541694600888016020528960405f2054169660098901602052600a60405f2054990154996040519d8e614c2c565b8d5260208d015260408c015260608b015260808a015260a089015260c0880152151560e087015215156101008601526101208501526121818282166101408601614f55565b60081c166101608301614f61565b60405191829182614b73565b906120d3565b346102eb576020806003193601126102eb575f604080516121c181614c49565b82815260608482015201526004355f526017815260405f206040516121e581614c49565b8154815260019260ff60026121fc60018601614e75565b9483850195865201541690604083019115158252604051938185526080850193518286015251926060604086015283518091528160a086019401915f5b82811061224f5784511515606088015286860387f35b83516001600160a01b0316865294810194928101928701612239565b346102eb5760403660031901126102eb576107c8612287614af6565b61218f60ff602435612297614efd565b506001600160a01b039384165f908152601a602090815260408083205483526016825290912090918061236f5750600e54945b81549560018301549160028401541690600384015460048501546005860154916006870154935f526007870188528860405f205416946008880189528960405f20541696600989018a52600a60405f2054990154996040519d8e61232d81614c2c565b528d015260408c015260608b015260808a015260a089015260c0880152151560e087015215156101008601526101208501526121818282166101408601614f55565b946122ca565b346102eb575f3660031901126102eb576020600e54604051908152f35b346102eb575f3660031901126102eb576020600c54604051908152f35b346102eb575f3660031901126102eb576123c7615616565b6123cf615639565b60ff806014541660058110156104b357600481146105a55760031461059357600e546123fa816156aa565b612403816156f1565b5f526020601b815260405f206003600482015491015490818110156126915761242b91614d42565b5f905f600b5493600180860180961195865b61053f57808210156124d157815f526016835260405f209188600a8401541692600c8410156104b357600489941461247a575b506001019161243d565b94612486600491614d34565b950154801561247057909680158015806124c8575b156124ad575050600190965b90612470565b909791506124be575b6001906124a7565b94955085946124b6565b5081831061249b565b905085938795806124e28684614edf565b101561268b57506124f38482614edf565b935b5f926001875b61053f578181101561256057805f526016865260405f209089600a8301541691600c8310156104b357600460019314612537575b5001876124fb565b6004018054898082101561254d575b505061252f565b61255691614d42565b90558a8089612546565b8487858886600e545f52601b8252600460405f2001612580848254614d27565b90558261258d8286614ecc565b106125e1575b50506125d77f39657cef6eb725e291a5e37fe8032a18477b98dd7abc4a03d93428153eff3d0393604051938493846040919493926060820195825260208201520152565b0390a16001600955005b6125f79194506125f19084614ecc565b82614d42565b600a546040516323b872dd60e01b8152336004820152306024820152604481018390529491908290869060649082905f906001600160a01b03165af1918215611a71577f39657cef6eb725e291a5e37fe8032a18477b98dd7abc4a03d93428153eff3d03956125d79361266d575b505093612593565b8161268392903d10611a6a57611a5b8183614c9d565b508580612665565b936124f5565b604051633958314d60e01b8152600490fd5b346102eb5760203660031901126102eb576126bc614af6565b60ff6014541660058110156104b35760038114610593576126db615639565b600481146105a55780151590816127d0575b506127be576001600160a01b0381165f818152601a60205260409020549091906127ac57600a7f6041a3b674b81a0fecc93042cf89f30bf96db96073f1312e253264f8a5cceba392612740600b54614d34565b600b8181555f828152601660209081526040808320858155868452601a835292819020949094556002820180546001600160a01b03191690951790945593909301805461ffff1916610101179055915482516001600160a01b0390941684529083015281908101610baf565b60405163f411c32760e01b8152600490fd5b60405163897c9a9360e01b8152600490fd5b600191501415826126ed565b346102eb5760603660031901126102eb576127f5614af6565b602435612800614ae7565b9160ff6014541660058110156104b3576003811461059357600490612823615639565b146105a557815f52601760205260405f209260018060a01b03908183165f52601a60205260405f20545f52601660205260405f20918554156129f2576002830154169182156129e0576001860192835490600160401b8210156129cc576112488260016128939401875586614dca565b811561298a57600a81019586549360ff8516600c8110156104b357600503612978578660016002947fd23000da82104e78ccbf3c41c153eca50a357a80f2ae156096b8b1b43f36f2e19a6007610baf9960ff19161790555b0155546004811015908161296c575b501561294c5701805460ff81161561293c575b50505b604080516001600160a01b03909416845260208401949094521515928201929092529081906060820190565b60ff19166001179055858061290d565b01805460ff811661295f575b5050612910565b60ff191690558580612958565b600791501115886128fa565b6040516333ddf1dd60e01b8152600490fd5b7fd23000da82104e78ccbf3c41c153eca50a357a80f2ae156096b8b1b43f36f2e195610baf9386600184600a6002960161020061ff00198254161790556128eb565b634e487b7160e01b5f52604160045260245ffd5b6040516339ec64c160e11b8152600490fd5b604051635ad439e560e11b8152600490fd5b346102eb57612a1236614b50565b905f60a0604051612a2281614c10565b82815282602082015282604082015282606082015282608082015201525f52601860205260405f20905f5260205260c060405f2060405190612a6382614c10565b80549182815260018060a01b03918260018201541692602083019384526002820154906040840191825260046003840154936060860194855201549460ff60a0608087019682891615158852019660081c161515865260405196875251166020860152516040850152516060840152511515608083015251151560a0820152f35b346102eb575f3660031901126102eb576020601154604051908152f35b346102eb575f3660031901126102eb5760ff6014541660405160058210156104b3576020918152f35b346102eb575f3660031901126102eb57612b42615639565b60145460ff811660058110156104b357600481146105a5576003146105935760ff191660041760145542601155612b77615616565b60ff6014541660058110156104b35760038114159081612d0c575b50612cfa57600b546001905b60018101811161053f5760018101821015612cc957815f52601660205260405f2091612bef612be4612bd96003860154600487015490614d27565b600586015490614d27565b600685015490614d27565b906003600e54115f14612c7557600e546009850193925b600e54600219810190811161053f578211612c4e57612c3190825f528560205260405f205490614d27565b90805f52846020525f6040812055801561053f575f190190612c06565b91929460019450600691505b5f60038201555f60048201555f600582015501550190612b9e565b91905f905b600e548211612cbb57612c9f612cb591835f526009870160205260405f205490614d27565b91805f52600986016020525f6040812055614d34565b90612c7a565b905060066001939294612c5a565b60016009557fac72b0b13eb85909e8e5deeb2bb65c912e147d60cfd7284a17b85e0fe88fdae66020604051428152a1005b60405163a7c1043560e01b8152600490fd5b60049150141581612b92565b346102eb576020806003193601126102eb5760043590612d36615639565b60145460ff811660058110156104b357600481146105a5576003811461059357612e0f57600b5491600c83108015612e03575b612df15760015b60048110612dc1577fe891dc01ac1296966aff69221063a5796adb4993741b159b043f7066e2923939602086612db58760018860ff19161760145582600f5582614edf565b601055604051908152a1005b805f52601782526004600160405f20015410612ddf57600101612d70565b6040516305a2d66760e11b8152600490fd5b60405163dd5d9ea160e01b8152600490fd5b506003600c5410612d69565b6040516305c3c4b960e41b8152600490fd5b346102eb575f3660031901126102eb57612e39615616565b60ff6014541660058110156104b3576003811461059357600481146105a557600103612fb057335f52601a60205260405f20545f52601660205260405f20600a810180549060ff8216600c8110156104b357600103612f9e5760105460148102908082046014148115171561053f576064612eb5920490614d27565b600b810290808204600b149015171561053f57600c61030291049260048501612edf858254614d27565b905561ffff1916179055600a546040516323b872dd60e01b815233600482015230602482015260448101839052926001600160a01b0391602090859060649082905f9087165af1908115611a71577fa1036ac26bc1acfe7c0581273bb656a2426fb6f32067116729c8fad15a58bfc794600292612f7f575b50015460408051929091166001600160a01b03168252602082019290925290819081016125d7565b612f979060203d602011611a6a57611a5b8183614c9d565b5085612f57565b60405163991c8dc760e01b8152600490fd5b604051637250f10560e01b8152600490fd5b346102eb575f3660031901126102eb576020600b54604051908152f35b346102eb576020806003193601126102eb57600435612ffc615639565b60ff6014816014541660059060058110156104b357600481146105a55760038114610593575f908015159081613357575b506127be57600f54613103575b50505081600f555f9060018091600b548260018201809211905b6130ab575b7fd4116e5003fcbb3a549e4e271b1d73063c38f23828139309c6ac1ef0700a4a506040888a6130888a83614edf565b601055600e545f52601b8152816003845f200155601054908351928352820152a1005b8095949561053f57818610156130fb57855f526016885282600a60405f20015416600c8110156104b3576004146130e8575b838095960194613054565b836130f38196614d34565b9550506130dd565b849550613059565b9491949290926104b35760015b600b546001810180911161053f5781101561334a57805f526016835260405f2090600a820183815416600c938482101591826104b3578015158061333c575b838161332b575b5061316a575b505050506001915001613110565b60089081830193600e91825491825f52868c528a60405f2054165f146132ce575050855460ff19166004178655505b878c54168a8110156104b357600114806132b9575b613294575b878c5416968a8810156104b35788946002809914918261326c575b509761322993604096938360019b7f732dc60c5d1b1df84f06b7e689c1024b7164003eeeded6276c17827b428734c89a989591613257575b50613233575b5050888060a01b0391015416925416835192835288830190614b66565ba18780808061315c565b60ff199182885416178755545f52600783018c52865f209081541690558e8061320c565b905081545f528d5284885f205416155f613206565b9295909396809592505416918210156104b357929488949092909160091415906132296131ce565b60ff1960068187541617865581545f52600784018a5260405f209081541690556131b3565b5080545f528389528760405f205416156131ae565b6104b3576004148061330c575b6132e6575b50613199565b5f19810190811161053f575f52601e895260405f20600160ff198254161790558c6132e0565b505f19810181811161053f575f52601e8a528860405f205416156132db565b90506104b357600181141583613156565b505f9250600281141561314f565b509150925083808061303a565b91505060015f9114158761302d565b346102eb575f3660031901126102eb576002546040516001600160a01b039091168152602090f35b346102eb5760203660031901126102eb576004355f52601e602052602060ff60405f2054166040519015158152f35b346102eb575f3660031901126102eb5760ff6014541660058110156104b35760038114610593576004906133ef615639565b146105a5577f3b88d52dc51aa53d344c3581f44ecf26dd6a764b15cd0e86e576d816c28361636020613422600c54614d34565b80600c55805f52601782528060405f2055604051908152a1005b346102eb575f3660031901126102eb576020601054604051908152f35b346102eb575f3660031901126102eb57613471615639565b60145460ff811660058110156104b35760038114610593576004146105a55760039060ff199060018260125416176012551617601455600e54806013555f52602080524260405f2055600e54805f52601b602052600160405f2001549062054600820180921161053f575f5260208052600160405f2001557f94cdef44deba8207a5c8b2a712e9b86ffc190fb1451b76b0821312442b782d1e5f80a1005b346102eb575f3660031901126102eb575f546040516001600160a01b039091168152602090f35b346102eb575f3660031901126102eb5760ff601454166005808210156104b357600482146105a557600380921461059357335f52601a906020601a815260405f20545f526016906016815260405f20926001928385019283548015613710575f526017815260405f20965f945f95878a0196888854915b8281106136d8575b50505015610a17575f906135c887615719565b600e54825260088901845260ff60408320541682146136c457600a8901805460ff191660051790555b556004855410613648575b60028701548854604080516001600160a01b03909316835260208301919091527fb5340229b24b97c5261c0a8c19b3b71277ae4f607c30af5108e9008aad56d84d919081908101610baf565b8598600289019560ff19968781541690555f9a5b613668575b50506135fc565b8099989799548b10156136bb57898b613686829d849d9b9c9d614dca565b905490851b1c6001600160a01b03165f90815285875260408082205482528888529020600a0180548a1689179055019a61365c565b87989950613661565b600a8901805460ff191660061790556135f1565b8d6136e3828c614dca565b9054339190921b9190911c6001600160a01b031614613704570189906135ad565b509150508b88816135b5565b60405163b4479a6360e01b8152600490fd5b346102eb575f3660031901126102eb5761373a615616565b613742615639565b60ff6014541660058110156104b357600481146105a55760031461059357600e5461376c816156aa565b613775816156f1565b5f52601b60205260405f20600481016003815492015480831015612691576137a0836137a792614d42565b8093614d27565b9055600a546040516323b872dd60e01b8152336004820152306024820152604481018390529190602090839060649082905f906001600160a01b03165af1908115611a71577f11f018c083eb908425163290b18ec4bff42c1ba4edf4020de879c7ae1b7ce0f392602092613825575b50604051908152a16001600955005b61383b90833d8511611a6a57611a5b8183614c9d565b5083613816565b346102eb575f3660031901126102eb5760ff6014541660058110156104b35760038091146105935760055460ff811615613a1b575f905f91600192838054915b8281106139eb5750505015610a175760ff19166005556002546001600160a01b039190821633810361393f57506138b833615664565b5f915f918054925b8381106139185750505f19820191821161053f576138e493611dc261124893614d4f565b6138ec614e13565b7f6a36d5245b4e10f0299e42d1766cde6e266f8168b22e7cb0f8ab6e71021a54e56020604051338152a1005b8261392282614d4f565b905490881b1c163314613937575b81016138c0565b935083613930565b1515806139d3575b6139c15781613954614d98565b905490851b1c1633145f146139af5761397b8261396f614d98565b905490861b1c16615664565b545f1981019290831161053f576139946139a293614d4f565b9054911b1c16611248614d98565b6139aa614e13565b6138ec565b6040516301bb5b1f60e51b8152600490fd5b604051631a0a745560e11b8152600490fd5b5060075462015180810180911161053f574210613947565b6139f481614d4f565b90543391891b1c6001600160a01b031614613a12575b018490613882565b92508092613a0a565b604051631e72ba9760e01b8152600490fd5b346102eb575f3660031901126102eb5760408051613a4a81614c65565b36903760405160035f825b60028210613a9c5783613a6781614c65565b604051905f90825b60028310613a7c57604084f35b81516001600160a01b031681526001929092019160209182019101613a6f565b82546001600160a01b031681526001928301929190910190602001613a55565b346102eb575f3660031901126102eb57613ad4615639565b60ff6014541660058110156104b357600481146105a55760031461059357600e54805f52601b602052600160405f2001549062015180820180921161053f575f52601b602052600160405f200155600e545f527f1053ff2559207f3358e287928bbde971ad88f7b99c0335368afe0c5baf1ef55f6020600160405f200154604051908152a1005b346102eb575f3660031901126102eb57613b73615616565b613b7b615639565b60145460ff811660058110156104b357600403613cb65760115462015180810180911161053f574210613ca45760ff1916600317601455600a546040516370a0823160e01b81523060048201526001600160a01b0391909116906020908181602481865afa908115611a71575f91613c77575b506010548110613c16575b5f805160206157af83398151915282604051428152a16001600955005b60405163a9059cbb60e01b81523360048201526024810191909152918190839060449082905f905af1918215611a71575f805160206157af8339815191529215613bf957613c7090823d8411611a6a57611a5b8183614c9d565b5082613bf9565b90508181813d8311613c9d575b613c8e8183614c9d565b810103126102eb575183613bee565b503d613c84565b6040516302e9939360e41b8152600490fd5b604051633b1cf39760e21b8152600490fd5b346102eb575f3660031901126102eb57613ce0615639565b60145460ff811660058110156104b3576004146105a55760125460ff811615613d69576013545f5260208052600160405f2001544211613d575760019160ff1980921660125516176014557f494f9e0263f7798e6fc702c0f9e260e4742108cbc0ce66eae93025756d6418246020604051428152a1005b604051630187744d60e71b8152600490fd5b604051632155c37160e11b8152600490fd5b346102eb5760203660031901126102eb576004355f52601f6020526107c86107bc60405f20614cbf565b346102eb576020806003193601126102eb57613dbf614ad8565b613dc7615616565b60ff601454169160058310156104b357600483146105a55760038314610593576001928381141590816141bd575b5061077457600e548061416e575b83810180911161053f575f908152601b82526040808220338352601a845281832054835260168452912060028101546001600160a01b0391908216156115c257600a8101805460ff8160081c1660088110156104b35760050361415d5760ff16600c81101590816104b35760098114918215614150575b821561413f575b505061412d5760105493601485028581046014148615171561053f576064613eaa910486614d27565b8760048501928354838110614115575b50600401613ec9888254614d27565b90556140d1575b60105491613ee360038601938454614d27565b80935580548281106140b5575b5083549260ff841692600c84101592836104b357600285149283156140a7575b848415614095575b5083614088575b508261407c575b505061400c575b505050505081613f7e575b50907fed66735ec09b73f80882349a417c96f1ac5bb6bf493441951d147d84c5ed5d8c92608092600e5460405193338552840152604083015215156060820152a1600955005b600a546040516323b872dd60e01b81523360048201523060248201526044810184905294929392918391869160649183915f91165af1928315611a71577fed66735ec09b73f80882349a417c96f1ac5bb6bf493441951d147d84c5ed5d8c94608094613fef575b5091925092613f38565b61400590843d8611611a6a57611a5b8183614c9d565b5086613fe5565b6104b35760040361406c575b5050600e5486810180911161053f575f5260078101845260405f209060ff19918783825416179055600e549087820180921161053f576008915f520184528560405f20918254161790558580808080613f2d565b60ff191660041790558680614018565b54101590508b80613f26565b601054111592508d613f1f565b9093506104b357600685149284613f18565b5f9450600486149350613f10565b806140c36140c99285614d42565b90614d27565b81558a613ef0565b946006840180549082821190815f1461410e576140ee8484614d42565b905b55156141005750505f5b94613ed0565b61410991614d42565b6140fa565b5f906140f0565b600491986140c36141269286614d42565b9790613eba565b60405163fdc7b1fb60e01b8152600490fd5b9091506104b3576008148880613e81565b50600a811491505f613e7a565b604051627c247360e31b8152600490fd5b805f52601b825260405f205462239880810180911161053f57421080156141a7575b15613e03576040516337888d6760e01b8152600490fd5b50805f52601b82528360405f2001544211614190565b60029150141584613df5565b346102eb575f3660031901126102eb57604051806001916001549283825260208092019360015f527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6925f905b828210614239576107c88661422d818a0382614c9d565b60405191829182614b0c565b84546001600160a01b03168752958601959383019390830190614216565b346102eb575f3660031901126102eb576020601354604051908152f35b346102eb5760403660031901126102eb5761428d614af6565b602435614298615616565b6142a0615639565b60ff6014541660058110156104b35760048103613cb65760115462015180810180911161053f574210613ca457600314610593576001600160a01b0382811615611f5457600a5416916040516370a0823160e01b81523060048201526020908181602481885afa8015611a715784915f916143d0575b50106143be5760405163a9059cbb60e01b81526001600160a01b038316600482015260248101849052938190859060449082905f905af1938415611a71577f20a3ee7ebf8af442c82daa0e821d3c5a43acc00c80968747a24d6e7f3663d354946143a0575b5050604080516001600160a01b039092168252602082019290925290819081016125d7565b816143b692903d10611a6a57611a5b8183614c9d565b50838061437b565b60405163356680b760e01b8152600490fd5b809250838092503d83116143fa575b6143e98183614c9d565b810103126102eb5783905186614316565b503d6143df565b346102eb576020806003193601126102eb5761441b614ad8565b60ff6014541660058110156104b357600481146105a557600380911461059357335f52601a835260405f20545f526016835260405f2090600190600183019485548015613710575f526017815260405f2092855f146144f95750505050600a019182549260ff841693600c8510156104b3577f4506ecebb8afddc27b5896d964fe56a6aa511603ed4fac7fb871650473f2175d946007036144e95750805461ff0019166103001790555b54604080513381526020810192909252911515918101919091528060608101610baf565b61ff0019166105001790556144c5565b90919593505f9060015f9401968754945b85811061459b575050505f19830192831161053f5785614570614575926112486145576016977f4506ecebb8afddc27b5896d964fe56a6aa511603ed4fac7fb871650473f2175d9b614dca565b905460039190911b1c6001600160a01b03169184614dca565b614e59565b335f52601a815260405f20545f5252600a60405f2001600a60ff198254161790556144c5565b6145a5818a614dca565b905490831b1c6001600160a01b031633146145c2575b820161450a565b9250826145bb565b346102eb575f3660031901126102eb5760ff6014541660058110156104b357600481146105a55760031461059357600e54805f52602090601b825260405f205462127500810180911161053f57421180156147a0575b61478e576001811180614761575b61474f57600d61463e8154614d34565b92838255335f526021815260405f20835f52815260405f2054155f1461473d577fedb73a28656fc54b5b54d180d469da306262375b8fab1d30e7bfdfe6fa4d71a893610baf93335f526021835260405f20905f52825260405f20556016600e5491825f52601881526146c960405f20855490815f52835260405f20945f526019835260405f20614ddf565b600e545f52601b81526146e4600260405f2001855490614ddf565b8354835560018301336001600160601b0360a01b825416179055335f52601a815260405f20545f52526003600160405f20015491015554604051918291338360209093929193604081019460018060a01b031681520152565b604051639fbfc58960e01b8152600490fd5b6040516303a5a26f60e11b8152600490fd5b50335f52601a825260405f20545f5260168252600760405f2001815f52825260ff60405f2054161561462e565b60405163709758ab60e11b8152600490fd5b50805f52601b825260405f20544210614620565b346102eb575f3660031901126102eb576147cc615616565b60ff6014541660058110156104b3576003906003811415908161492f575b50612cfa57600b546001808201809211805b61053f5782821015610ab857815f526020916016835260405f2091858301805461482c6004860191825490614d27565b9161483d6005870193845490614d27565b9361484e6006880195865490614d27565b90600e9a808c54115f146148d05760098c9b99939b5493019a5b8c54600219810190811161053f5784116148ad5761489190845f528c8c5260405f205490614d27565b92805f528b8b525f6040812055801561053f575f190192614868565b9695935f95929c5085935083919b506001999a505b5555555501909192806147fc565b60095f9c9b9c9a99939a9301995b8b548411614916576148fe61491091855f528c8c5260405f205490614d27565b93805f528b8b525f6040812055614d34565b926148de565b9695935f95929c9a5085935083919b50600199506148c2565b600491501415826147ea565b346102eb575f3660031901126102eb57614953615616565b335f52601a60205260405f20545f52601660205260405f2060068101908154908115614a32575f92839055600a54600291909101805460405163a9059cbb60e01b81526001600160a01b039182166004820152602481018590529490926020918691604491839187165af1938415611a71577f3d97f39b86d061200a7834082f5926e58ec10fd85a9d6930f497729d5e6cc35c94614a13575b505460408051929091166001600160a01b03168252602082019290925290819081016125d7565b614a2b9060203d602011611a6a57611a5b8183614c9d565b50846149ec565b6040516365e52d5160e11b8152600490fd5b346102eb5760203660031901126102eb576004355f52601c602052602060ff60405f2054166040519015158152f35b346102eb5760203660031901126102eb576004355f5260156020526107c86107bc60405f20614cbf565b60209060206040818301928281528551809452019301915f5b828110614ac4575050505090565b835185529381019392810192600101614ab6565b6004359081151582036102eb57565b6044359081151582036102eb57565b600435906001600160a01b03821682036102eb57565b60209060206040818301928281528551809452019301915f5b828110614b33575050505090565b83516001600160a01b031685529381019392810192600101614b25565b60409060031901126102eb576004359060243590565b90600c8210156104b35752565b919091610180810192805182526020810151602083015260018060a01b036040820151166040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e0810151151560e0830152610100808201511515908301526101208082015190830152614bfb6101408083015190840190614b66565b610160809101519160088310156104b3570152565b60c0810190811067ffffffffffffffff8211176129cc57604052565b610180810190811067ffffffffffffffff8211176129cc57604052565b6060810190811067ffffffffffffffff8211176129cc57604052565b6040810190811067ffffffffffffffff8211176129cc57604052565b60a0810190811067ffffffffffffffff8211176129cc57604052565b90601f8019910116810190811067ffffffffffffffff8211176129cc57604052565b90604051918281549182825260209260208301915f5260205f20935f905b828210614cf557505050614cf392500383614c9d565b565b855484526001958601958895509381019390910190614cdd565b908160209103126102eb575180151581036102eb5790565b9190820180921161053f57565b5f19811461053f5760010190565b9190820391821161053f57565b600154811015614d845760015f527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf601905f90565b634e487b7160e01b5f52603260045260245ffd5b60015415614d845760015f527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6905f90565b8054821015614d84575f5260205f2001905f90565b8054600160401b8110156129cc57614dfc91600182018155614dca565b819291549060031b91821b915f19901b1916179055565b6001548015614e45575f1901614e40614e2b82614d4f565b81549060018060a01b039060031b1b19169055565b600155565b634e487b7160e01b5f52603160045260245ffd5b80548015614e45575f190190614e72614e2b8383614dca565b55565b90604051918281549182825260209260208301915f5260205f20935f905b828210614ea957505050614cf392500383614c9d565b85546001600160a01b031684526001958601958895509381019390910190614e93565b8181029291811591840414171561053f57565b8115614ee9570490565b634e487b7160e01b5f52601260045260245ffd5b60405190614f0a82614c2c565b5f610160838281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201520152565b600c8210156104b35752565b60088210156104b35752565b8051821015614d845760209160051b010190565b600e5490815f52601b60205260405f205462151800810180911161053f57421080156155f3575b6155e157815f1981011161053f575f1982015f52601860205260405f20335f52602160205260405f205f1984015f5260205260405f20545f5260205260405f2091600183019160018060a01b03835416908133036155cf5760048501805460ff8116156155bd5760ff8160081c166155ab57835f52601a60205260405f20545f52601660205260ff600a60405f20015416600c8110156104b3576004036107045761ff00191661010017905561555c57505f1981015f52601960205261507060405f20614cbf565b905f925f5b83518110156150c9575f1983015f52601860205260405f206150978286614f6d565b515f5260205260ff600460405f200154166150b5575b600101615075565b936150c1600191614d34565b9490506150ad565b509392906150e992505f19015f52601b602052600360405f200154614edf565b5f905f94600194600b54955b60018701871161053f576001870181101561514a57805f52601660205260ff600a60405f20015416600c8110156104b357600414615136575b6001016150f5565b96615142600191614d34565b97905061512e565b5090919293959450606094600e545f52601c60205260ff60405f205416615533575b6151769084614edf565b925f9660015b600b5460018101811161053f5760010181101561521657805f52601660205260405f2060ff600a82015416600c8110156104b3576004146151c1575b5060010161517c565b60030180549197918781106151f1575b6001926151ea926151e38a8094614d42565b9055614d27565b96906151b8565b6001926152096151ea939c6140c3846151e39c614d42565b9b829950925092506151d1565b50939094929695919582519081615322575b50505090831190506152f95760028101829055600a54835460405163a9059cbb60e01b81526001600160a01b039182166004820152602481018590529491602091869160449183915f91165af1908115611a71577f1d3e1b711499f6260ce9c1c1eeabe0f46dfc60b81542d0021ecef0716d0ed1cb946152d5926152da575b50549154604080516001600160a01b0390941684526020840194909452928201929092529081906060820190565b0390a1565b6152f29060203d602011611a6a57611a5b8183614c9d565b505f6152a7565b505050600360ff1960145416176014555f805160206157af8339815191526020604051428152a1565b959794969395929493928061551b57505095929493915b5f915b86518310156155095761534f8388614f6d565b515f52601660205260018060a01b03600260405f200154165f52601d60205260405f20545f526017602052615389600160405f2001614e75565b945f965f985f5b8851811015615454576001600160a01b036153ab828b614f6d565b51165f52601a60205260405f20545f52601660205260405f2060ff600a82015416600c8110156104b3576004146153e6575b50600101615390565b90999a6153f290614d34565b9a8015801580615447575b1561541357505060046001910154995b906153dd565b9a91909a615425575b5060019061540d565b6004919a5001548060011b908082046002149015171561053f5798600161541c565b50600483015482116153fd565b509297909391959994986154689086614edf565b90808210156155015750965b5f5b87518110156154ea576001600160a01b03615491828a614f6d565b51165f52601a60205260405f20545f52601660205260405f2060ff600a82015416600c8110156104b3576004146154cc575b50600101615476565b896001929c60046154e393016151e3838254614d42565b9a906154c3565b50939891979296509394509260019091019161533c565b905096615474565b955095505090809291905f8080615228565b61552992916140c391614edf565b9592949391615339565b9450601f60205261517661555561554c60405f20614cbf565b96875190614d27565b905061516c565b5f60028501559254604080516001600160a01b03909516855260208501919091527f2f6a2242608827783b40fb797960e2d61ea6e692e9c61049f223ec66f18bbc4293925082915081016152d5565b604051630c8d9eab60e31b8152600490fd5b604051636a9a57a560e01b8152600490fd5b604051634a7777b360e11b8152600490fd5b60405163215eb65f60e21b8152600490fd5b50815f52601b60205260405f205462224700810180911161053f57421015614fa8565b600260095414615627576002600955565b604051633ee5aeb560e01b8152600490fd5b5f546001600160a01b0316330361564c57565b6040516306b66d0160e01b8152336004820152602490fd5b5f80546001600160a01b039283166001600160a01b03198216811783559216907f688b8f34d886f8a2414b39aa6cef1ec6198215ba9b47fe8ac4260b44139bd5b69080a3565b5f52601b60205260405f20548042109081156156da575b506156c857565b6040516307f1ee4960e31b8152600490fd5b90506203f480810180911161053f5742115f6156c1565b5f52601b602052600260405f2001541561570757565b60405163a8de391160e01b8152600490fd5b905f905f5b835481101561575a576157318185614dca565b90543360039290921b1c6001600160a01b031614615752575b60010161571e565b91508161574a565b509180545f19810190811161053f57614cf39261578761577d6145709385614dca565b9190549285614dca565b81546001600160a01b03600392831b81811b199092169490921b9490941c1690921b17905556fe7a406291d7dedc33dcf93635d6443b37b6f30b4d33a6b86f5e2427e9d96f7c22a264697066735822122075751bb94dd9b694f568c58ccb20c23c35422b70d8d09d23067bf4c0fcd1313a64736f6c63430008170033",
    sourceMap:
      "274:67877:26:-:0;;;;;;;;;;;;;-1:-1:-1;;274:67877:26;;;;-1:-1:-1;;;;;274:67877:26;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;-1:-1:-1;;;;;274:67877:26;;;;;;;:::i;:::-;;766:30:28;;;762:101;;-1:-1:-1;274:67877:26;;;;;;;;;;;;;;-1:-1:-1;274:67877:26;;;;;;2256:44:28;-1:-1:-1;2256:44:28;;1857:1:25;2061:21;1857:1;274:67877:26;;5339:36;274:67877;;;5339:36;274:67877;;;5385:48;274:67877;;5385:48;274:67877;;;;;;;;762:101:28;274:67877:26;;-1:-1:-1;;;819:33:28;;-1:-1:-1;819:33:28;;;274:67877:26;;;819:33:28;274:67877:26;-1:-1:-1;274:67877:26;;;;;;-1:-1:-1;274:67877:26;;;;;-1:-1:-1;274:67877:26;;;;-1:-1:-1;;;;;274:67877:26;;;;;;:::o",
    linkReferences: {},
  },
  deployedBytecode: {
    object:
      "0x60806040526004361015610011575f80fd5b5f3560e01c80630899fe4114614a735780630a5b34f214614a44578063110f88741461493b57806316bfe25c146147b45780631afbd128146145ca5780631c35f9521461440157806323d6711a14614274578063263d083e1461425757806327bd3ef0146141c957806339786a9614613da55780633a85bded14613d7b5780633e95f40214613cc85780633f1b3f8f14613b5b57806341bb0d1a14613abc5780634ee9c6f714613a2d5780634fcd291a1461384257806350c8e1fd146137225780635228e916146135365780635495d2aa1461350f5780635c3ebd37146134595780635d86b8e11461343c5780636564f43e146133bd578063661998081461338e5780636d4da76d1461336657806372547ec914612fdf57806372f833a814612fc2578063745092dd14612e2157806374add0f314612d18578063756b01b614612b2a5780637985940d14612b015780637b47d7e814612ae45780637b55476d14612a0457806393f881d9146127dc5780639c6d2491146126a35780639d39089c146123af5780639f2592b314612392578063a0b34a3014612375578063a3d033e51461226b578063a482b102146121a1578063a8fdb78814612096578063ac0fda8314612074578063ac115bbe14612057578063b0fdc3e414611f66578063b174a68d14611c33578063c2a41da014611c11578063c4afc37a146118ed578063c66460e114611893578063cb26c5f5146115d4578063cba47c26146113dc578063cc10a3aa146113bf578063d41c3a6514611397578063d6a5658f146110ff578063d8a77c6214610abf578063d98b250314610a70578063dbcd14f01461090f578063e15d69f3146108f2578063e319ace9146108ba578063e329972d146107cc578063ea398bc114610792578063ec15a890146105d4578063f34cf775146105b7578063f3f02d03146102ef5763fef4c550146102ce575f80fd5b346102eb575f3660031901126102eb576020600854604051908152f35b5f80fd5b346102eb575f3660031901126102eb5760ff601490806014541660059060058110156104b357600481146105a5576003146105935760015b600b546001810180911161053f5781101561059157805f526020906016825260405f2091600a83019085825416600c948582101591826104b35780151580610583575b8381610572575b50610386575b50505050506001915001610327565b60089081830193600e91825491825f528688528c60405f2054165f14610501575050865460ff19166004178755505b898b5416898110156104b357600114806104ec575b6104c7575b898b541697898910156104b3578a946002809a14918261048a575b5098604096937f732dc60c5d1b1df84f06b7e689c1024b7164003eeeded6276c17827b428734c89896938360019c610446989591610475575b50610451575b5050898060a01b0391015416935416908451938452830190614b66565ba18580808080610377565b60ff199182895416178855545f52600783018552875f209081541690558d80610429565b905081545f52865284895f205416155f610423565b929693978096919592505416918210156104b357939591948a94939091600914159060406103ea565b634e487b7160e01b5f52602160045260245ffd5b60ff1960068188541617875581545f5260078401865260405f209081541690556103cf565b5080545f528385528960405f205416156103ca565b6104b35760041480610553575b610519575b506103b5565b5f19810190811161053f575f52601e855260405f20600160ff198254161790558b610513565b634e487b7160e01b5f52601160045260245ffd5b505f19810181811161053f575f52601e86528a60405f2054161561050e565b90506104b357600181141583610371565b505f9250600281141561036a565b005b60405163f856e0a560e01b8152600490fd5b6040516338f25eb760e21b8152600490fd5b346102eb575f3660031901126102eb576020600d54604051908152f35b346102eb576020806003193601126102eb57600435906105f2615639565b60ff6014541660058110156104b357600481146105a557600381146105935760018114159081610786575b5061077457600e5491825f52601b825260405f20546213c680810180821161053f57421190811561076a575b5061075857825f526018825260405f20815f52825260405f208054938285036107465760018201546001600160a01b03165f818152601a86526040808220548252601687529020600a015490919060ff16600c8110156104b35760041491821592610716575b5050610704577f3d37a493337dd24e7cb7bec23d4bde6447e3a1d6e75803de86dbf9f9b5732b849360046106fb9201600160ff19825416179055600e545f526015845260405f20614ddf565b604051908152a1005b6040516329ceba1160e11b8152600490fd5b9091505f52601a845260405f20545f5260168452600760405f2001905f52835260ff60405f2054161585806106af565b60405163e22b971160e01b8152600490fd5b604051633341b44560e11b8152600490fd5b9050421084610649565b604051637bf65ebd60e11b8152600490fd5b6002915014158361061d565b346102eb5760203660031901126102eb576004355f5260196020526107c86107bc60405f20614cbf565b60405191829182614a9d565b0390f35b346102eb576020806003193601126102eb575f60806040516107ed81614c81565b82815282848201526060604082015282606082015201526004355f52601b815260405f2060405161081d81614c81565b8154815260019260018301549281830193845261083c60028201614cbf565b9160408401928352600460038301549260608601938452015492608085019384526040519582875260c08701955183880152516040870152519360a0606087015284518091528160e087019501915f5b8281106108a75784516080890152855160a089015287870388f35b835187529581019592810192880161088c565b346102eb5760203660031901126102eb576001600160a01b036108db614af6565b165f52601a602052602060405f2054604051908152f35b346102eb575f3660031901126102eb576020600754604051908152f35b346102eb5760603660031901126102eb5760043561092b614ae7565b60ff601454169160058310156104b357600483146105a557600380931461059357805f52601760205260405f20916024355f52601660205260405f20600a81019485549460ff8616600c8110156104b357600703610a5f575f915f9060018093018054925b838110610a29575b505050505015610a17577f5cf6fd140141a8a14aca1d538d93e40de68c6a776df311ae862a898ea2a660ef946080948315610a075750805461ffff19166105041790555b60020154604080516001600160a01b03909216825233602083015281019290925215156060820152a1005b61ff0019166107001790556109dc565b604051633d76489160e01b8152600490fd5b610a338183614dca565b90543391851b1c6001600160a01b031614610a4f578401610990565b5050505090508680808080610998565b60405162789f4360e21b8152600490fd5b346102eb5760203660031901126102eb57610a89614ad8565b610a91615616565b60ff6014541660058110156104b357600481146105a55760031461059357610ab890614f81565b6001600955005b346102eb575f3660031901126102eb57610ad7615639565b60145460ff81169060058210156104b357600482146105a55760038214610593575f916001811415806110f1575b61077457600e54801515806110d9575b6110c757610b2290614d34565b9283600e556104b357600214610fcf575b505f52601b60205260405f20428155600f54610bb4575b62278d00420180421161053f578160039160017f08a7ba25f6100ab18c633572926abf5bd6a45439a9322adee245bc3a9685efda940155600f549182910155600e54610baf601054604051938493846040919493926060820195825260208201520152565b0390a1005b60ff6014541660058110156104b357600481146105a5576003146105935760015b600b546001810180911161053f57811015610e1e57805f52601660205260405f209060ff600a83015416600c81101590816104b35780151580610e10575b8281610dff575b50610c2c575b50506001915001610bd5565b600e5491825f526008850160205260ff60405f2054165f14610d9c57505050600a8201805460ff191660041790555b60ff6014541660058110156104b35760011480610d81575b610d54575b60ff6014541660058110156104b35760021480610d37575b6040600193827f732dc60c5d1b1df84f06b7e689c1024b7164003eeeded6276c17827b428734c89390610d1d575b610cf1575b610ce960ff600a878060a01b036002850154169301541683519283526020830190614b66565ba18380610c20565b60ff19600881600a8401541617600a830155600e545f5260078201602052825f20908154169055610cc3565b50600e545f526008810160205260ff825f20541615610cbe565b5060ff600a8301541691600c8310156104b3579160091415610c90565b60ff19600681600a8501541617600a840155600e545f526007830160205260405f20908154169055610c78565b50600e545f526008820160205260ff60405f20541615610c73565b6104b35760041480610ddb575b610db4575b50610c5b565b5f19810190811161053f575f52601e60205260405f20600160ff1982541617905583610dae565b50805f1981011161053f575f1981015f52601e60205260ff60405f20541615610da9565b90506104b357600181141582610c1a565b505f91506002811415610c13565b5060015b600c80546001810180911161053f57821015610f1357815f526017602052600160405f20018054600481109081610f09575b50610e64575b5050600101610e22565b90925f5b8254811015610efd57610e7b8184614dca565b60018060a01b0391549060031b1c165f52601a60205260405f20545f52601660205260405f2090600a82019182549260ff841693888510156104b357600460019514610ecb575b50505001610e68565b60089060ff1916179055600660038201915f835481610ef06004850192835490614d27565b9555550155868080610ec2565b50925050600183610e5a565b9050151585610e54565b50505f90600190600b546001810180911192835b61053f5781811015610f7457805f52601660205260ff600a60405f20015416600c8110156104b357600414610f60575b60010183610f27565b93610f6c600191614d34565b949050610f57565b50509190506001600e5411610f8a575b50610b4a565b80610fbb5750600360ff1960145416176014555f805160206157af8339815191526020604051428152a15b81610f84565b610fc790600f54614edf565b601055610fb5565b5f19820182811161053f57805f526020601c815260ff60405f2054161591826110a4575b82611081575b82611068575b5081611045575b81611022575b5015610b335760ff191660011760145581610b33565b6002198401915083821161053f57601e915f525260ff60405f205416158361100c565b9050600119830183811161053f575f52601e815260ff60405f2054161590611006565b9091505f52601e815260ff60405f205416159084610fff565b9150600219840184811161053f575f52601c815260ff60405f2054161591610ff9565b9150600119840184811161053f575f52601c815260ff60405f2054161591610ff3565b6040516307318e9360e31b8152600490fd5b50805f52601b602052600160405f2001544210610b15565b505f92506002811415610b05565b346102eb576020806003193601126102eb576004359067ffffffffffffffff8083116102eb57366023840112156102eb578260040135926024918411611383578360051b6040519461115385830187614c9d565b85528284860191830101913683116102eb578301905b8282106113645750505061117b615639565b60ff6014541660058110156113505760031461059357600b5490600c82101580611345575b1561131757600284511061130557929190925b5f936001928184809301809111925b6111f7575b6040517f37624b43bc21d01bec4f033a1fb10552d28b406b1a68210476d53af5a7d4e68e9080610baf8982614b0c565b8551871015611300575f85805b611281575b5015610a17576001600160a01b036112218888614f6d565b5116968554600160401b81101561126e5790611266879899611248848a8096018655614d4f565b90919060018060a01b038084549260031b9316831b921b1916179055565b0196956111c2565b85634e487b7160e01b5f5260416004525ffd5b84919498979596986112ed57828110156112e0576001600160a01b03806112a88a89614f6d565b511690825f5260168652600260405f20015416146112d25796979496949594909390860186611204565b509250869493959688611209565b9795949697939093611209565b86634e487b7160e01b5f5260116004525ffd5b6111c7565b6040516350a01e1d60e11b8152600490fd5b60238211611329575b929190926111b3565b600684511015611320576040516350a01e1d60e11b8152600490fd5b5060238211156111a0565b50634e487b7160e01b5f9081526021600452fd5b81356001600160a01b03811681036102eb578152908401908401611169565b50634e487b7160e01b5f9081526041600452fd5b346102eb575f3660031901126102eb57600a546040516001600160a01b039091168152602090f35b346102eb575f3660031901126102eb576020600f54604051908152f35b346102eb575f3660031901126102eb5760ff6014541660058110156104b357600481146105a55760031461059357335f52601a60205260405f20545f52601660205260405f20600181019081545f52601760205260405f209160018060a01b03600283015416156115c2575f9055600a8101805460ff1916600517905561146560018301615719565b600e545f526007810160205260405f2060ff198154169055600381015f8154816114956004860192835490614d27565b9355556006906114aa60068401918254614d27565b9055600460018401541061150c575b50600281015491549054604080516001600160a01b0390941684526020840192909252908201527fed11cf2f685bc5fb16110aa145d0b495f9cfdc2ed33e03b9362d4bdc3fba262d908060608101610baf565b60028301805460ff191690555f5b600184015481101561159a5780611535600192838701614dca565b838060a01b0391549060031b1c165f52601a60205260405f20545f52601660205260405f20600a8101600560ff198254161790556115928460038301925f8454816115866004850192835490614d27565b96555501918254614d27565b90550161151a565b50507fed11cf2f685bc5fb16110aa145d0b495f9cfdc2ed33e03b9362d4bdc3fba262d6114b9565b60405163092ebc6d60e31b8152600490fd5b346102eb575f3660031901126102eb5760ff806014541660058110156104b357600481146105a55760031461059357335f52602090601a825260405f20545f52601680835260405f209060019283830180545f526017865260405f2093600281019460018060a01b039283875416156115c257600e5496875f52601b8a5260405f20546203f480810180911161053f574211801561187f575b61186d575f19880188811161053f575f5260198a5260405f20541561185b575f94899360078601998752898c5260ff604088205416158714611812575050505050600a8101600a60ff198254161790555b816003820180549260056116d86004830195865490614d27565b91015555556014549160ff831660058110156104b3578514611772575b505050600e545f528252601c60405f209260ff1993848154169055600e545f525260405f2091825460ff811615611765575b600e546040805133815260208101929092527f188272a28ee264707f833eac91033ac3a9a04f67845e5a9034afc774a4a9603c919081908101610baf565b1617905580808080611727565b5f918590600b549287840188818611905b6117c1575b5050505050600c810290808204600c149015171561053f5760649004106117b1575b80806116f5565b60ff1916600217601455836117aa565b8061053f578185101561180d57845f52828b5283600a60405f2001541694600c8610156104b35760098b96146117fa575b850194611783565b966118058691614d34565b9790506117f2565b611788565b600a8601805460ff19166009179055869461182d9101615719565b82549154168352601d8a52604083205555600e548252601f875261185660408320825490614ddf565b6116be565b604051631f86a3f560e21b8152600490fd5b6040516379055d9d60e01b8152600490fd5b50875f52601b8a5260405f2054421061166d565b346102eb576020806003193601126102eb57805f60409283516118b581614c65565b82815201526004355f52808052815f209082516118d181614c65565b8160018454948584520154910190815283519283525190820152f35b346102eb5760203660031901126102eb57611906614ad8565b61190e615616565b60ff6014541660058110156104b357600481146105a55760031461059357600e54805f52601b60205260405f205462054600810180911161053f5742118015611bef575b611bdd575f19810190811161053f575f52601560205260405f2054611bcb57600b5460015b60018201821161053f5760018201811015611ba057805f52601660205260405f20906005820180549081611b91575b5050600e546001811180611b70575b80611b63575b611ae4575b50600e5460038111611a89575b508380611a7c575b6119e4575b6001915001611977565b6006820180545f91829055600a5460029094015460405163a9059cbb60e01b81526001600160a01b039182166004820152602481019290925290936020928592604492849291165af1918215611a7157600192611a42575b506119da565b611a639060203d602011611a6a575b611a5b8183614c9d565b810190614d0f565b5084611a3c565b503d611a51565b6040513d5f823e3d90fd5b50600682015415156119d5565b8060021981011161053f57600219015f526009820160205260405f205480156119cd57611abb60068401918254614d27565b9055600e548060021981011161053f57600219015f52600982016020525f6040812055846119cd565b60ff6014541660058110156104b3576002149081611b44575b5015611b3157600382015f81549155600e54805f1981011161053f575f19015f526009830160205260405f20555b846119c0565b600382015f815491556006830155611b2b565b5f1981019150811161053f575f52601560205260405f20541585611afd565b50600383015415156119bb565b50805f1981011161053f575f1981015f52601560205260405f2054156119b5565b5f9055600683015584806119a6565b7f01c9e927536754e1d95ea7a9eda17265ab11a240401b5926f33c0eb76c9d7f335f80a16001600955005b60405163fcb6f0ab60e01b8152600490fd5b60405163d53184ed60e01b8152600490fd5b50805f52601b60205260405f20546203f480810180911161053f574210611952565b346102eb575f3660031901126102eb57602060ff600554166040519015158152f35b346102eb5760203660031901126102eb57611c4c614af6565b6001600160a01b0381811691908215611f545760ff6014541660058110156104b3576003809114610593575f335f52601a60205260405f20548015159081611f2e575b50611f26575b15610a17575f925f93600194858054915b828110611efd5750505015611eeb5781548316158080611edf575b80611ed2575b611ea55715611e3357600380546001600160a01b0319166001600160a01b0390921691909117905542600855600e546006555b818154169283151580611e26575b611d3a575b7f882febe0458c27b4ed12caa22ad034f24f206e2da9aa922015eff66e45f2006b602086604051908152a1005b5f9492938460045416145f14611e0557611d5684835416615664565b8054825485165f5b828110611dde575050505b6001600160601b0360a01b8083541683556004541660045554935f19850194851161053f57611248602094611dce93611dc27f882febe0458c27b4ed12caa22ad034f24f206e2da9aa922015eff66e45f2006b98614d4f565b9054911b1c1691614d4f565b611dd6614e13565b918380611d0d565b8187611de983614d4f565b905490881b1c1614611dfd575b8301611d5e565b965086611df6565b9350611e1f83611e13614d98565b905490841b1c16615664565b5f93611d69565b5082600454161515611d08565b60085462015180810180911161053f5780421080611ec5575b15611e6a575050600480546001600160a01b03191685179055611cfa565b421180611eb7575b15611ea557600380546001600160a01b0319166001600160a01b0390921691909117905542600855600e54600655611cfa565b604051637787a74d60e01b8152600490fd5b50600654600e541415611e72565b50600654600e5414611e4c565b50600654600e5414611cc7565b50836004541615611cc1565b6040516362c9b45b60e01b8152600490fd5b86611f0782614d4f565b905490881b1c168914611f1d575b018690611ca6565b92508092611f15565b506001611c95565b90505f52601660205260ff600a60405f20015416600c8110156104b35760041486611c8f565b604051631e7d738760e21b8152600490fd5b346102eb5760203660031901126102eb57611f7f614af6565b611f87615639565b60ff601454169060058210156104b3576003809214610593576001600160a01b039081169182612004575b7f9d35d6f02c23b682244e3ab27b9be76fa329228dd25ecfa1b9b9974d77c22a14602084806001600160601b0360a01b600254161760025542600755600160ff196005541617600555604051908152a1005b5f915f90600192600154925b838110612029575b505050505015610a17578180611fb2565b8261203382614d4f565b905490841b1c168714612047578401612010565b5050505090508280808080612018565b346102eb575f3660031901126102eb576020600654604051908152f35b346102eb575f3660031901126102eb57602060ff601254166040519015158152f35b346102eb576107c861213c61218f60ff6120af36614b50565b906120b8614efd565b505f52601660205260405f209080155f1461219b5750600e54905b80549160018201549060018060a01b0360028401541690600384015460048501546005860154916006870154935f52600787016020528860405f20541694600888016020528960405f2054169660098901602052600a60405f2054990154996040519d8e614c2c565b8d5260208d015260408c015260608b015260808a015260a089015260c0880152151560e087015215156101008601526101208501526121818282166101408601614f55565b60081c166101608301614f61565b60405191829182614b73565b906120d3565b346102eb576020806003193601126102eb575f604080516121c181614c49565b82815260608482015201526004355f526017815260405f206040516121e581614c49565b8154815260019260ff60026121fc60018601614e75565b9483850195865201541690604083019115158252604051938185526080850193518286015251926060604086015283518091528160a086019401915f5b82811061224f5784511515606088015286860387f35b83516001600160a01b0316865294810194928101928701612239565b346102eb5760403660031901126102eb576107c8612287614af6565b61218f60ff602435612297614efd565b506001600160a01b039384165f908152601a602090815260408083205483526016825290912090918061236f5750600e54945b81549560018301549160028401541690600384015460048501546005860154916006870154935f526007870188528860405f205416946008880189528960405f20541696600989018a52600a60405f2054990154996040519d8e61232d81614c2c565b528d015260408c015260608b015260808a015260a089015260c0880152151560e087015215156101008601526101208501526121818282166101408601614f55565b946122ca565b346102eb575f3660031901126102eb576020600e54604051908152f35b346102eb575f3660031901126102eb576020600c54604051908152f35b346102eb575f3660031901126102eb576123c7615616565b6123cf615639565b60ff806014541660058110156104b357600481146105a55760031461059357600e546123fa816156aa565b612403816156f1565b5f526020601b815260405f206003600482015491015490818110156126915761242b91614d42565b5f905f600b5493600180860180961195865b61053f57808210156124d157815f526016835260405f209188600a8401541692600c8410156104b357600489941461247a575b506001019161243d565b94612486600491614d34565b950154801561247057909680158015806124c8575b156124ad575050600190965b90612470565b909791506124be575b6001906124a7565b94955085946124b6565b5081831061249b565b905085938795806124e28684614edf565b101561268b57506124f38482614edf565b935b5f926001875b61053f578181101561256057805f526016865260405f209089600a8301541691600c8310156104b357600460019314612537575b5001876124fb565b6004018054898082101561254d575b505061252f565b61255691614d42565b90558a8089612546565b8487858886600e545f52601b8252600460405f2001612580848254614d27565b90558261258d8286614ecc565b106125e1575b50506125d77f39657cef6eb725e291a5e37fe8032a18477b98dd7abc4a03d93428153eff3d0393604051938493846040919493926060820195825260208201520152565b0390a16001600955005b6125f79194506125f19084614ecc565b82614d42565b600a546040516323b872dd60e01b8152336004820152306024820152604481018390529491908290869060649082905f906001600160a01b03165af1918215611a71577f39657cef6eb725e291a5e37fe8032a18477b98dd7abc4a03d93428153eff3d03956125d79361266d575b505093612593565b8161268392903d10611a6a57611a5b8183614c9d565b508580612665565b936124f5565b604051633958314d60e01b8152600490fd5b346102eb5760203660031901126102eb576126bc614af6565b60ff6014541660058110156104b35760038114610593576126db615639565b600481146105a55780151590816127d0575b506127be576001600160a01b0381165f818152601a60205260409020549091906127ac57600a7f6041a3b674b81a0fecc93042cf89f30bf96db96073f1312e253264f8a5cceba392612740600b54614d34565b600b8181555f828152601660209081526040808320858155868452601a835292819020949094556002820180546001600160a01b03191690951790945593909301805461ffff1916610101179055915482516001600160a01b0390941684529083015281908101610baf565b60405163f411c32760e01b8152600490fd5b60405163897c9a9360e01b8152600490fd5b600191501415826126ed565b346102eb5760603660031901126102eb576127f5614af6565b602435612800614ae7565b9160ff6014541660058110156104b3576003811461059357600490612823615639565b146105a557815f52601760205260405f209260018060a01b03908183165f52601a60205260405f20545f52601660205260405f20918554156129f2576002830154169182156129e0576001860192835490600160401b8210156129cc576112488260016128939401875586614dca565b811561298a57600a81019586549360ff8516600c8110156104b357600503612978578660016002947fd23000da82104e78ccbf3c41c153eca50a357a80f2ae156096b8b1b43f36f2e19a6007610baf9960ff19161790555b0155546004811015908161296c575b501561294c5701805460ff81161561293c575b50505b604080516001600160a01b03909416845260208401949094521515928201929092529081906060820190565b60ff19166001179055858061290d565b01805460ff811661295f575b5050612910565b60ff191690558580612958565b600791501115886128fa565b6040516333ddf1dd60e01b8152600490fd5b7fd23000da82104e78ccbf3c41c153eca50a357a80f2ae156096b8b1b43f36f2e195610baf9386600184600a6002960161020061ff00198254161790556128eb565b634e487b7160e01b5f52604160045260245ffd5b6040516339ec64c160e11b8152600490fd5b604051635ad439e560e11b8152600490fd5b346102eb57612a1236614b50565b905f60a0604051612a2281614c10565b82815282602082015282604082015282606082015282608082015201525f52601860205260405f20905f5260205260c060405f2060405190612a6382614c10565b80549182815260018060a01b03918260018201541692602083019384526002820154906040840191825260046003840154936060860194855201549460ff60a0608087019682891615158852019660081c161515865260405196875251166020860152516040850152516060840152511515608083015251151560a0820152f35b346102eb575f3660031901126102eb576020601154604051908152f35b346102eb575f3660031901126102eb5760ff6014541660405160058210156104b3576020918152f35b346102eb575f3660031901126102eb57612b42615639565b60145460ff811660058110156104b357600481146105a5576003146105935760ff191660041760145542601155612b77615616565b60ff6014541660058110156104b35760038114159081612d0c575b50612cfa57600b546001905b60018101811161053f5760018101821015612cc957815f52601660205260405f2091612bef612be4612bd96003860154600487015490614d27565b600586015490614d27565b600685015490614d27565b906003600e54115f14612c7557600e546009850193925b600e54600219810190811161053f578211612c4e57612c3190825f528560205260405f205490614d27565b90805f52846020525f6040812055801561053f575f190190612c06565b91929460019450600691505b5f60038201555f60048201555f600582015501550190612b9e565b91905f905b600e548211612cbb57612c9f612cb591835f526009870160205260405f205490614d27565b91805f52600986016020525f6040812055614d34565b90612c7a565b905060066001939294612c5a565b60016009557fac72b0b13eb85909e8e5deeb2bb65c912e147d60cfd7284a17b85e0fe88fdae66020604051428152a1005b60405163a7c1043560e01b8152600490fd5b60049150141581612b92565b346102eb576020806003193601126102eb5760043590612d36615639565b60145460ff811660058110156104b357600481146105a5576003811461059357612e0f57600b5491600c83108015612e03575b612df15760015b60048110612dc1577fe891dc01ac1296966aff69221063a5796adb4993741b159b043f7066e2923939602086612db58760018860ff19161760145582600f5582614edf565b601055604051908152a1005b805f52601782526004600160405f20015410612ddf57600101612d70565b6040516305a2d66760e11b8152600490fd5b60405163dd5d9ea160e01b8152600490fd5b506003600c5410612d69565b6040516305c3c4b960e41b8152600490fd5b346102eb575f3660031901126102eb57612e39615616565b60ff6014541660058110156104b3576003811461059357600481146105a557600103612fb057335f52601a60205260405f20545f52601660205260405f20600a810180549060ff8216600c8110156104b357600103612f9e5760105460148102908082046014148115171561053f576064612eb5920490614d27565b600b810290808204600b149015171561053f57600c61030291049260048501612edf858254614d27565b905561ffff1916179055600a546040516323b872dd60e01b815233600482015230602482015260448101839052926001600160a01b0391602090859060649082905f9087165af1908115611a71577fa1036ac26bc1acfe7c0581273bb656a2426fb6f32067116729c8fad15a58bfc794600292612f7f575b50015460408051929091166001600160a01b03168252602082019290925290819081016125d7565b612f979060203d602011611a6a57611a5b8183614c9d565b5085612f57565b60405163991c8dc760e01b8152600490fd5b604051637250f10560e01b8152600490fd5b346102eb575f3660031901126102eb576020600b54604051908152f35b346102eb576020806003193601126102eb57600435612ffc615639565b60ff6014816014541660059060058110156104b357600481146105a55760038114610593575f908015159081613357575b506127be57600f54613103575b50505081600f555f9060018091600b548260018201809211905b6130ab575b7fd4116e5003fcbb3a549e4e271b1d73063c38f23828139309c6ac1ef0700a4a506040888a6130888a83614edf565b601055600e545f52601b8152816003845f200155601054908351928352820152a1005b8095949561053f57818610156130fb57855f526016885282600a60405f20015416600c8110156104b3576004146130e8575b838095960194613054565b836130f38196614d34565b9550506130dd565b849550613059565b9491949290926104b35760015b600b546001810180911161053f5781101561334a57805f526016835260405f2090600a820183815416600c938482101591826104b3578015158061333c575b838161332b575b5061316a575b505050506001915001613110565b60089081830193600e91825491825f52868c528a60405f2054165f146132ce575050855460ff19166004178655505b878c54168a8110156104b357600114806132b9575b613294575b878c5416968a8810156104b35788946002809914918261326c575b509761322993604096938360019b7f732dc60c5d1b1df84f06b7e689c1024b7164003eeeded6276c17827b428734c89a989591613257575b50613233575b5050888060a01b0391015416925416835192835288830190614b66565ba18780808061315c565b60ff199182885416178755545f52600783018c52865f209081541690558e8061320c565b905081545f528d5284885f205416155f613206565b9295909396809592505416918210156104b357929488949092909160091415906132296131ce565b60ff1960068187541617865581545f52600784018a5260405f209081541690556131b3565b5080545f528389528760405f205416156131ae565b6104b3576004148061330c575b6132e6575b50613199565b5f19810190811161053f575f52601e895260405f20600160ff198254161790558c6132e0565b505f19810181811161053f575f52601e8a528860405f205416156132db565b90506104b357600181141583613156565b505f9250600281141561314f565b509150925083808061303a565b91505060015f9114158761302d565b346102eb575f3660031901126102eb576002546040516001600160a01b039091168152602090f35b346102eb5760203660031901126102eb576004355f52601e602052602060ff60405f2054166040519015158152f35b346102eb575f3660031901126102eb5760ff6014541660058110156104b35760038114610593576004906133ef615639565b146105a5577f3b88d52dc51aa53d344c3581f44ecf26dd6a764b15cd0e86e576d816c28361636020613422600c54614d34565b80600c55805f52601782528060405f2055604051908152a1005b346102eb575f3660031901126102eb576020601054604051908152f35b346102eb575f3660031901126102eb57613471615639565b60145460ff811660058110156104b35760038114610593576004146105a55760039060ff199060018260125416176012551617601455600e54806013555f52602080524260405f2055600e54805f52601b602052600160405f2001549062054600820180921161053f575f5260208052600160405f2001557f94cdef44deba8207a5c8b2a712e9b86ffc190fb1451b76b0821312442b782d1e5f80a1005b346102eb575f3660031901126102eb575f546040516001600160a01b039091168152602090f35b346102eb575f3660031901126102eb5760ff601454166005808210156104b357600482146105a557600380921461059357335f52601a906020601a815260405f20545f526016906016815260405f20926001928385019283548015613710575f526017815260405f20965f945f95878a0196888854915b8281106136d8575b50505015610a17575f906135c887615719565b600e54825260088901845260ff60408320541682146136c457600a8901805460ff191660051790555b556004855410613648575b60028701548854604080516001600160a01b03909316835260208301919091527fb5340229b24b97c5261c0a8c19b3b71277ae4f607c30af5108e9008aad56d84d919081908101610baf565b8598600289019560ff19968781541690555f9a5b613668575b50506135fc565b8099989799548b10156136bb57898b613686829d849d9b9c9d614dca565b905490851b1c6001600160a01b03165f90815285875260408082205482528888529020600a0180548a1689179055019a61365c565b87989950613661565b600a8901805460ff191660061790556135f1565b8d6136e3828c614dca565b9054339190921b9190911c6001600160a01b031614613704570189906135ad565b509150508b88816135b5565b60405163b4479a6360e01b8152600490fd5b346102eb575f3660031901126102eb5761373a615616565b613742615639565b60ff6014541660058110156104b357600481146105a55760031461059357600e5461376c816156aa565b613775816156f1565b5f52601b60205260405f20600481016003815492015480831015612691576137a0836137a792614d42565b8093614d27565b9055600a546040516323b872dd60e01b8152336004820152306024820152604481018390529190602090839060649082905f906001600160a01b03165af1908115611a71577f11f018c083eb908425163290b18ec4bff42c1ba4edf4020de879c7ae1b7ce0f392602092613825575b50604051908152a16001600955005b61383b90833d8511611a6a57611a5b8183614c9d565b5083613816565b346102eb575f3660031901126102eb5760ff6014541660058110156104b35760038091146105935760055460ff811615613a1b575f905f91600192838054915b8281106139eb5750505015610a175760ff19166005556002546001600160a01b039190821633810361393f57506138b833615664565b5f915f918054925b8381106139185750505f19820191821161053f576138e493611dc261124893614d4f565b6138ec614e13565b7f6a36d5245b4e10f0299e42d1766cde6e266f8168b22e7cb0f8ab6e71021a54e56020604051338152a1005b8261392282614d4f565b905490881b1c163314613937575b81016138c0565b935083613930565b1515806139d3575b6139c15781613954614d98565b905490851b1c1633145f146139af5761397b8261396f614d98565b905490861b1c16615664565b545f1981019290831161053f576139946139a293614d4f565b9054911b1c16611248614d98565b6139aa614e13565b6138ec565b6040516301bb5b1f60e51b8152600490fd5b604051631a0a745560e11b8152600490fd5b5060075462015180810180911161053f574210613947565b6139f481614d4f565b90543391891b1c6001600160a01b031614613a12575b018490613882565b92508092613a0a565b604051631e72ba9760e01b8152600490fd5b346102eb575f3660031901126102eb5760408051613a4a81614c65565b36903760405160035f825b60028210613a9c5783613a6781614c65565b604051905f90825b60028310613a7c57604084f35b81516001600160a01b031681526001929092019160209182019101613a6f565b82546001600160a01b031681526001928301929190910190602001613a55565b346102eb575f3660031901126102eb57613ad4615639565b60ff6014541660058110156104b357600481146105a55760031461059357600e54805f52601b602052600160405f2001549062015180820180921161053f575f52601b602052600160405f200155600e545f527f1053ff2559207f3358e287928bbde971ad88f7b99c0335368afe0c5baf1ef55f6020600160405f200154604051908152a1005b346102eb575f3660031901126102eb57613b73615616565b613b7b615639565b60145460ff811660058110156104b357600403613cb65760115462015180810180911161053f574210613ca45760ff1916600317601455600a546040516370a0823160e01b81523060048201526001600160a01b0391909116906020908181602481865afa908115611a71575f91613c77575b506010548110613c16575b5f805160206157af83398151915282604051428152a16001600955005b60405163a9059cbb60e01b81523360048201526024810191909152918190839060449082905f905af1918215611a71575f805160206157af8339815191529215613bf957613c7090823d8411611a6a57611a5b8183614c9d565b5082613bf9565b90508181813d8311613c9d575b613c8e8183614c9d565b810103126102eb575183613bee565b503d613c84565b6040516302e9939360e41b8152600490fd5b604051633b1cf39760e21b8152600490fd5b346102eb575f3660031901126102eb57613ce0615639565b60145460ff811660058110156104b3576004146105a55760125460ff811615613d69576013545f5260208052600160405f2001544211613d575760019160ff1980921660125516176014557f494f9e0263f7798e6fc702c0f9e260e4742108cbc0ce66eae93025756d6418246020604051428152a1005b604051630187744d60e71b8152600490fd5b604051632155c37160e11b8152600490fd5b346102eb5760203660031901126102eb576004355f52601f6020526107c86107bc60405f20614cbf565b346102eb576020806003193601126102eb57613dbf614ad8565b613dc7615616565b60ff601454169160058310156104b357600483146105a55760038314610593576001928381141590816141bd575b5061077457600e548061416e575b83810180911161053f575f908152601b82526040808220338352601a845281832054835260168452912060028101546001600160a01b0391908216156115c257600a8101805460ff8160081c1660088110156104b35760050361415d5760ff16600c81101590816104b35760098114918215614150575b821561413f575b505061412d5760105493601485028581046014148615171561053f576064613eaa910486614d27565b8760048501928354838110614115575b50600401613ec9888254614d27565b90556140d1575b60105491613ee360038601938454614d27565b80935580548281106140b5575b5083549260ff841692600c84101592836104b357600285149283156140a7575b848415614095575b5083614088575b508261407c575b505061400c575b505050505081613f7e575b50907fed66735ec09b73f80882349a417c96f1ac5bb6bf493441951d147d84c5ed5d8c92608092600e5460405193338552840152604083015215156060820152a1600955005b600a546040516323b872dd60e01b81523360048201523060248201526044810184905294929392918391869160649183915f91165af1928315611a71577fed66735ec09b73f80882349a417c96f1ac5bb6bf493441951d147d84c5ed5d8c94608094613fef575b5091925092613f38565b61400590843d8611611a6a57611a5b8183614c9d565b5086613fe5565b6104b35760040361406c575b5050600e5486810180911161053f575f5260078101845260405f209060ff19918783825416179055600e549087820180921161053f576008915f520184528560405f20918254161790558580808080613f2d565b60ff191660041790558680614018565b54101590508b80613f26565b601054111592508d613f1f565b9093506104b357600685149284613f18565b5f9450600486149350613f10565b806140c36140c99285614d42565b90614d27565b81558a613ef0565b946006840180549082821190815f1461410e576140ee8484614d42565b905b55156141005750505f5b94613ed0565b61410991614d42565b6140fa565b5f906140f0565b600491986140c36141269286614d42565b9790613eba565b60405163fdc7b1fb60e01b8152600490fd5b9091506104b3576008148880613e81565b50600a811491505f613e7a565b604051627c247360e31b8152600490fd5b805f52601b825260405f205462239880810180911161053f57421080156141a7575b15613e03576040516337888d6760e01b8152600490fd5b50805f52601b82528360405f2001544211614190565b60029150141584613df5565b346102eb575f3660031901126102eb57604051806001916001549283825260208092019360015f527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6925f905b828210614239576107c88661422d818a0382614c9d565b60405191829182614b0c565b84546001600160a01b03168752958601959383019390830190614216565b346102eb575f3660031901126102eb576020601354604051908152f35b346102eb5760403660031901126102eb5761428d614af6565b602435614298615616565b6142a0615639565b60ff6014541660058110156104b35760048103613cb65760115462015180810180911161053f574210613ca457600314610593576001600160a01b0382811615611f5457600a5416916040516370a0823160e01b81523060048201526020908181602481885afa8015611a715784915f916143d0575b50106143be5760405163a9059cbb60e01b81526001600160a01b038316600482015260248101849052938190859060449082905f905af1938415611a71577f20a3ee7ebf8af442c82daa0e821d3c5a43acc00c80968747a24d6e7f3663d354946143a0575b5050604080516001600160a01b039092168252602082019290925290819081016125d7565b816143b692903d10611a6a57611a5b8183614c9d565b50838061437b565b60405163356680b760e01b8152600490fd5b809250838092503d83116143fa575b6143e98183614c9d565b810103126102eb5783905186614316565b503d6143df565b346102eb576020806003193601126102eb5761441b614ad8565b60ff6014541660058110156104b357600481146105a557600380911461059357335f52601a835260405f20545f526016835260405f2090600190600183019485548015613710575f526017815260405f2092855f146144f95750505050600a019182549260ff841693600c8510156104b3577f4506ecebb8afddc27b5896d964fe56a6aa511603ed4fac7fb871650473f2175d946007036144e95750805461ff0019166103001790555b54604080513381526020810192909252911515918101919091528060608101610baf565b61ff0019166105001790556144c5565b90919593505f9060015f9401968754945b85811061459b575050505f19830192831161053f5785614570614575926112486145576016977f4506ecebb8afddc27b5896d964fe56a6aa511603ed4fac7fb871650473f2175d9b614dca565b905460039190911b1c6001600160a01b03169184614dca565b614e59565b335f52601a815260405f20545f5252600a60405f2001600a60ff198254161790556144c5565b6145a5818a614dca565b905490831b1c6001600160a01b031633146145c2575b820161450a565b9250826145bb565b346102eb575f3660031901126102eb5760ff6014541660058110156104b357600481146105a55760031461059357600e54805f52602090601b825260405f205462127500810180911161053f57421180156147a0575b61478e576001811180614761575b61474f57600d61463e8154614d34565b92838255335f526021815260405f20835f52815260405f2054155f1461473d577fedb73a28656fc54b5b54d180d469da306262375b8fab1d30e7bfdfe6fa4d71a893610baf93335f526021835260405f20905f52825260405f20556016600e5491825f52601881526146c960405f20855490815f52835260405f20945f526019835260405f20614ddf565b600e545f52601b81526146e4600260405f2001855490614ddf565b8354835560018301336001600160601b0360a01b825416179055335f52601a815260405f20545f52526003600160405f20015491015554604051918291338360209093929193604081019460018060a01b031681520152565b604051639fbfc58960e01b8152600490fd5b6040516303a5a26f60e11b8152600490fd5b50335f52601a825260405f20545f5260168252600760405f2001815f52825260ff60405f2054161561462e565b60405163709758ab60e11b8152600490fd5b50805f52601b825260405f20544210614620565b346102eb575f3660031901126102eb576147cc615616565b60ff6014541660058110156104b3576003906003811415908161492f575b50612cfa57600b546001808201809211805b61053f5782821015610ab857815f526020916016835260405f2091858301805461482c6004860191825490614d27565b9161483d6005870193845490614d27565b9361484e6006880195865490614d27565b90600e9a808c54115f146148d05760098c9b99939b5493019a5b8c54600219810190811161053f5784116148ad5761489190845f528c8c5260405f205490614d27565b92805f528b8b525f6040812055801561053f575f190192614868565b9695935f95929c5085935083919b506001999a505b5555555501909192806147fc565b60095f9c9b9c9a99939a9301995b8b548411614916576148fe61491091855f528c8c5260405f205490614d27565b93805f528b8b525f6040812055614d34565b926148de565b9695935f95929c9a5085935083919b50600199506148c2565b600491501415826147ea565b346102eb575f3660031901126102eb57614953615616565b335f52601a60205260405f20545f52601660205260405f2060068101908154908115614a32575f92839055600a54600291909101805460405163a9059cbb60e01b81526001600160a01b039182166004820152602481018590529490926020918691604491839187165af1938415611a71577f3d97f39b86d061200a7834082f5926e58ec10fd85a9d6930f497729d5e6cc35c94614a13575b505460408051929091166001600160a01b03168252602082019290925290819081016125d7565b614a2b9060203d602011611a6a57611a5b8183614c9d565b50846149ec565b6040516365e52d5160e11b8152600490fd5b346102eb5760203660031901126102eb576004355f52601c602052602060ff60405f2054166040519015158152f35b346102eb5760203660031901126102eb576004355f5260156020526107c86107bc60405f20614cbf565b60209060206040818301928281528551809452019301915f5b828110614ac4575050505090565b835185529381019392810192600101614ab6565b6004359081151582036102eb57565b6044359081151582036102eb57565b600435906001600160a01b03821682036102eb57565b60209060206040818301928281528551809452019301915f5b828110614b33575050505090565b83516001600160a01b031685529381019392810192600101614b25565b60409060031901126102eb576004359060243590565b90600c8210156104b35752565b919091610180810192805182526020810151602083015260018060a01b036040820151166040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e0810151151560e0830152610100808201511515908301526101208082015190830152614bfb6101408083015190840190614b66565b610160809101519160088310156104b3570152565b60c0810190811067ffffffffffffffff8211176129cc57604052565b610180810190811067ffffffffffffffff8211176129cc57604052565b6060810190811067ffffffffffffffff8211176129cc57604052565b6040810190811067ffffffffffffffff8211176129cc57604052565b60a0810190811067ffffffffffffffff8211176129cc57604052565b90601f8019910116810190811067ffffffffffffffff8211176129cc57604052565b90604051918281549182825260209260208301915f5260205f20935f905b828210614cf557505050614cf392500383614c9d565b565b855484526001958601958895509381019390910190614cdd565b908160209103126102eb575180151581036102eb5790565b9190820180921161053f57565b5f19811461053f5760010190565b9190820391821161053f57565b600154811015614d845760015f527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf601905f90565b634e487b7160e01b5f52603260045260245ffd5b60015415614d845760015f527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6905f90565b8054821015614d84575f5260205f2001905f90565b8054600160401b8110156129cc57614dfc91600182018155614dca565b819291549060031b91821b915f19901b1916179055565b6001548015614e45575f1901614e40614e2b82614d4f565b81549060018060a01b039060031b1b19169055565b600155565b634e487b7160e01b5f52603160045260245ffd5b80548015614e45575f190190614e72614e2b8383614dca565b55565b90604051918281549182825260209260208301915f5260205f20935f905b828210614ea957505050614cf392500383614c9d565b85546001600160a01b031684526001958601958895509381019390910190614e93565b8181029291811591840414171561053f57565b8115614ee9570490565b634e487b7160e01b5f52601260045260245ffd5b60405190614f0a82614c2c565b5f610160838281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201520152565b600c8210156104b35752565b60088210156104b35752565b8051821015614d845760209160051b010190565b600e5490815f52601b60205260405f205462151800810180911161053f57421080156155f3575b6155e157815f1981011161053f575f1982015f52601860205260405f20335f52602160205260405f205f1984015f5260205260405f20545f5260205260405f2091600183019160018060a01b03835416908133036155cf5760048501805460ff8116156155bd5760ff8160081c166155ab57835f52601a60205260405f20545f52601660205260ff600a60405f20015416600c8110156104b3576004036107045761ff00191661010017905561555c57505f1981015f52601960205261507060405f20614cbf565b905f925f5b83518110156150c9575f1983015f52601860205260405f206150978286614f6d565b515f5260205260ff600460405f200154166150b5575b600101615075565b936150c1600191614d34565b9490506150ad565b509392906150e992505f19015f52601b602052600360405f200154614edf565b5f905f94600194600b54955b60018701871161053f576001870181101561514a57805f52601660205260ff600a60405f20015416600c8110156104b357600414615136575b6001016150f5565b96615142600191614d34565b97905061512e565b5090919293959450606094600e545f52601c60205260ff60405f205416615533575b6151769084614edf565b925f9660015b600b5460018101811161053f5760010181101561521657805f52601660205260405f2060ff600a82015416600c8110156104b3576004146151c1575b5060010161517c565b60030180549197918781106151f1575b6001926151ea926151e38a8094614d42565b9055614d27565b96906151b8565b6001926152096151ea939c6140c3846151e39c614d42565b9b829950925092506151d1565b50939094929695919582519081615322575b50505090831190506152f95760028101829055600a54835460405163a9059cbb60e01b81526001600160a01b039182166004820152602481018590529491602091869160449183915f91165af1908115611a71577f1d3e1b711499f6260ce9c1c1eeabe0f46dfc60b81542d0021ecef0716d0ed1cb946152d5926152da575b50549154604080516001600160a01b0390941684526020840194909452928201929092529081906060820190565b0390a1565b6152f29060203d602011611a6a57611a5b8183614c9d565b505f6152a7565b505050600360ff1960145416176014555f805160206157af8339815191526020604051428152a1565b959794969395929493928061551b57505095929493915b5f915b86518310156155095761534f8388614f6d565b515f52601660205260018060a01b03600260405f200154165f52601d60205260405f20545f526017602052615389600160405f2001614e75565b945f965f985f5b8851811015615454576001600160a01b036153ab828b614f6d565b51165f52601a60205260405f20545f52601660205260405f2060ff600a82015416600c8110156104b3576004146153e6575b50600101615390565b90999a6153f290614d34565b9a8015801580615447575b1561541357505060046001910154995b906153dd565b9a91909a615425575b5060019061540d565b6004919a5001548060011b908082046002149015171561053f5798600161541c565b50600483015482116153fd565b509297909391959994986154689086614edf565b90808210156155015750965b5f5b87518110156154ea576001600160a01b03615491828a614f6d565b51165f52601a60205260405f20545f52601660205260405f2060ff600a82015416600c8110156104b3576004146154cc575b50600101615476565b896001929c60046154e393016151e3838254614d42565b9a906154c3565b50939891979296509394509260019091019161533c565b905096615474565b955095505090809291905f8080615228565b61552992916140c391614edf565b9592949391615339565b9450601f60205261517661555561554c60405f20614cbf565b96875190614d27565b905061516c565b5f60028501559254604080516001600160a01b03909516855260208501919091527f2f6a2242608827783b40fb797960e2d61ea6e692e9c61049f223ec66f18bbc4293925082915081016152d5565b604051630c8d9eab60e31b8152600490fd5b604051636a9a57a560e01b8152600490fd5b604051634a7777b360e11b8152600490fd5b60405163215eb65f60e21b8152600490fd5b50815f52601b60205260405f205462224700810180911161053f57421015614fa8565b600260095414615627576002600955565b604051633ee5aeb560e01b8152600490fd5b5f546001600160a01b0316330361564c57565b6040516306b66d0160e01b8152336004820152602490fd5b5f80546001600160a01b039283166001600160a01b03198216811783559216907f688b8f34d886f8a2414b39aa6cef1ec6198215ba9b47fe8ac4260b44139bd5b69080a3565b5f52601b60205260405f20548042109081156156da575b506156c857565b6040516307f1ee4960e31b8152600490fd5b90506203f480810180911161053f5742115f6156c1565b5f52601b602052600260405f2001541561570757565b60405163a8de391160e01b8152600490fd5b905f905f5b835481101561575a576157318185614dca565b90543360039290921b1c6001600160a01b031614615752575b60010161571e565b91508161574a565b509180545f19810190811161053f57614cf39261578761577d6145709385614dca565b9190549285614dca565b81546001600160a01b03600392831b81811b199092169490921b9490941c1690921b17905556fe7a406291d7dedc33dcf93635d6443b37b6f30b4d33a6b86f5e2427e9d96f7c22a264697066735822122075751bb94dd9b694f568c58ccb20c23c35422b70d8d09d23067bf4c0fcd1313a64736f6c63430008170033",
    sourceMap:
      "274:67877:26:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;274:67877:26;;;;;1882:26:28;274:67877:26;;;;;;;;;;;;;;;;;-1:-1:-1;;274:67877:26;;;;;4624:15;274:67877;;4624:15;274:67877;;;;;;;;;;;4624:44;;4620:95;;5069:25;5050:44;5046:104;;274:67877;47090:3;47076:8;274:67877;;;;;;;;;47072:16;;;;;274:67877;;;;;47136:20;274:67877;;;;;47194:12;;;;274:67877;;;;;;;;;;;;;;;47194:39;;;:91;;;47090:3;47194:148;;;;47090:3;47173:1482;;;47090:3;;;;;;274:67877;47090:3;;274:67877;47057:13;;47173:1482;47379:19;;;;;47399:8;;274:67877;;;;;;;;;;;;;;;;47375:406;274:67877;;;-1:-1:-1;;274:67877:26;;-1:-1:-1;;274:67877:26;;;;;-1:-1:-1;47375:406:26;274:67877;;;;;;;;;;;47927:42;:96;;;47375:406;47902:296;;47375:406;274:67877;;;;;;;;;;;48260:25;;;48241:44;;;:105;;;;47375:406;48241:159;;274:67877;48241:159;;48593:47;48241:159;;;;274:67877;48241:159;274:67877;48241:159;;;;;47375:406;48216:354;;;47375:406;274:67877;;;;;;;48613:12;;274:67877;;;;;;;;;;;;;;;:::i;:::-;48593:47;47173:1482;;;;;;;48216:354;274:67877;;;;;;;;;;;;;48500:33;;;274:67877;;;;;;;;;;;48216:354;;;;48241:159;274:67877;;;;;;;;;;;;;;48370:30;48241:159;;;:105;274:67877;;;;;;;;;;;;;;;;;;48241:105;;;;48309:37;;48241:105;48309:37;;48325:21;48309:37;;;274:67877;48241:105;;274:67877;;;;;;;;;;;;47902:296;274:67877;;15112:27;274:67877;;;;;;;;;;;48128:33;;;274:67877;;;;;;;;;;;47902:296;;47927:96;274:67877;;;;;;;;;;;;;;47993:30;47927:96;;47375:406;274:67877;;;47541:34;:103;;;47375:406;47512:251;;47375:406;;;;47512:251;-1:-1:-1;;274:67877:26;;;;;;;;;47693:26;274:67877;;;;;;;;;;;;;;47512:251;;;274:67877;;;;;;;;;;;;47541:103;-1:-1:-1;;;274:67877:26;;;;;;;;;47604:26;274:67877;;;;;;;;47603:41;47541:103;;47194:148;274:67877;;;;;47305:37;;;47194:148;;;:91;-1:-1:-1;274:67877:26;;-1:-1:-1;47269:16:26;47253:32;;;47194:91;;47072:16;274:67877;5046:104;274:67877;;-1:-1:-1;;;5117:22:26;;274:67877;;5117:22;4620:95;274:67877;;-1:-1:-1;;;4691:13:26;;274:67877;;4691:13;274:67877;;;;;;-1:-1:-1;;274:67877:26;;;;;62619:7;274:67877;;;;;;;;;;;;;;;;;;;;;;920:70:28;;;:::i;:::-;274:67877:26;4624:15;274:67877;;;;;;;;;4624:44;;4620:95;;5069:25;5050:44;;5046:104;;274:67877;16168:42;;;:102;;;;274:67877;16151:177;;;16385:8;274:67877;;;;;16364:20;274:67877;;;;;;16567:7;274:67877;;;;;;;16526:15;:49;:90;;;;;274:67877;16509:170;;;274:67877;;;16860:28;274:67877;;;;;;;;;;;;;;;16918:16;;;;16914:68;;274:67877;17087:14;;274:67877;-1:-1:-1;;;;;274:67877:26;;;;;17070:16;274:67877;;;;;;;;;17049:20;274:67877;;;;17049:61;;274:67877;;;;;;;;;;;;;17049:95;;;;:221;;;274:67877;17032:305;;;;17479:22;17378:18;274:67877;17413:50;17378:18;;274:67877;;;;;;;;;16385:8;274:67877;;;17413:25;274:67877;;;;;17413:50;:::i;:::-;274:67877;;;;;17479:22;274:67877;17032:305;274:67877;;-1:-1:-1;;;17302:24:26;;274:67877;;17302:24;17049:221;274:67877;;;;;17070:16;274:67877;;;;;;;;17049:20;274:67877;;17161:99;274:67877;;;17161:99;274:67877;;;;;;;;;;;17160:110;17049:221;;;;16914:68;274:67877;;-1:-1:-1;;;16957:14:26;;274:67877;;16957:14;16509:170;274:67877;;-1:-1:-1;;;16648:20:26;;274:67877;;16648:20;16526:90;:15;;;16591:25;16526:90;;;16151:177;274:67877;;-1:-1:-1;;;16302:15:26;;274:67877;;16302:15;16168:102;16245:25;16226:44;;;;16168:102;;;274:67877;;;;;;-1:-1:-1;;274:67877:26;;;;;;;;64554:18;274:67877;;;;;;;;:::i;:::-;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;67846:20;274:67877;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;274:67877:26;;;;-1:-1:-1;;;;;274:67877:26;;:::i;:::-;;;;65315:16;274:67877;;;;;;;;;;;;;;;;;;;-1:-1:-1;;274:67877:26;;;;;1764:17:28;274:67877:26;;;;;;;;;;;;;-1:-1:-1;;274:67877:26;;;;;;;;:::i;:::-;;4624:15;274:67877;;;;;;;;;;4624:44;;4620:95;;5069:25;;5050:44;;5046:104;;274:67877;;;13069:24;274:67877;;;;;;;;;;13136:20;274:67877;;;;;13216:12;;;274:67877;;;;;;;;;;;;;13232:20;13216:36;13212:86;;274:67877;13385:13;274:67877;;;;13404:13;;274:67877;;13380:178;13400:24;;;;;;13380:178;13571:5;;;;;;13567:56;;13940:64;;274:67877;;13698:227;;;;-1:-1:-1;274:67877:26;;-1:-1:-1;;274:67877:26;;;;;13698:227;13962:12;;274:67877;;;;-1:-1:-1;;;;;274:67877:26;;;;;13449:10;274:67877;;;;;;;;;;;;;;;;13940:64;274:67877;13698:227;-1:-1:-1;;274:67877:26;;;;;13698:227;;13567:56;274:67877;;-1:-1:-1;;;13599:13:26;;274:67877;;13599:13;13426:3;13463:16;;;;:::i;:::-;274:67877;;13449:10;274:67877;;;;-1:-1:-1;;;;;274:67877:26;13449:30;13445:103;;13426:3;274:67877;13385:13;;13445:103;13499:11;;;;;;13528:5;;;;;;;13212:86;274:67877;;-1:-1:-1;;;13275:12:26;;274:67877;;13275:12;274:67877;;;;;;-1:-1:-1;;274:67877:26;;;;;;:::i;:::-;2466:103:25;;:::i;:::-;274:67877:26;4624:15;274:67877;;;;;;;;;4624:44;;4620:95;;5069:25;5050:44;5046:104;;5159:1;;;:::i;:::-;274:67877;3068:21:25;274:67877:26;;;;;;;;-1:-1:-1;;274:67877:26;;;;920:70:28;;:::i;:::-;4624:15:26;274:67877;;;;;;;;;;;;4624:44;;4620:95;;5069:25;5050:44;;5046:104;;274:67877;43486:42;274:67877;43486:42;;;:102;;;274:67877;43469:177;;43672:8;274:67877;43672:12;;;:86;;;274:67877;43655:166;;43831:10;;;:::i;:::-;274:67877;;43672:8;274:67877;;;43933:25;43914:44;43910:527;;274:67877;;;;44537:20;274:67877;;;;;44595:15;274:67877;;44625:13;274:67877;44621:1980;;274:67877;46648:7;44595:15;274:67877;44595:15;;274:67877;;;46611:15;5069:25;46611:15;274:67877;46712:57;46611:15;;274:67877;44625:13;274:67877;46666:14;;;;274:67877;43672:8;274:67877;46712:57;46757:11;274:67877;;;46712:57;;;;274:67877;;;;;;;;;;;;;;;;;;46712:57;;;;274:67877;44621:1980;274:67877;4624:15;274:67877;;;;;;;;;4624:44;;4620:95;;5069:25;5050:44;5046:104;;274:67877;47090:3;47076:8;274:67877;;;;;;;;;47072:16;;;;;274:67877;;;47136:20;274:67877;;;;;47194:12;274:67877;47194:12;;;274:67877;;;;;;;;;;47194:39;;;:91;;;47090:3;47194:148;;;;47090:3;47173:1482;;;47090:3;;;274:67877;47090:3;;274:67877;47057:13;;47173:1482;43672:8;274:67877;;;;;47379:19;;;274:67877;;;;;;;;47375:406;274:67877;;;-1:-1:-1;;;47194:12:26;;;274:67877;;-1:-1:-1;;274:67877:26;;;;;47375:406;274:67877;4624:15;274:67877;;;;;;;;;47927:42;:96;;;47375:406;47902:296;;47375:406;274:67877;4624:15;274:67877;;;;;;;;43933:25;48241:44;:105;;;47375:406;274:67877;;48241:159;;48593:47;48241:159;;;;47375:406;48216:354;;47375:406;274:67877;;47194:12;274:67877;;;;;43933:25;48613:12;;274:67877;;47194:12;;274:67877;;;;;;;;;;;;:::i;:::-;48593:47;47173:1482;;;;48216:354;274:67877;;47379:19;47194:12;;;;274:67877;;;47194:12;;;274:67877;43672:8;274:67877;;;48500:33;;;274:67877;;;;;;;;;;;48216:354;;48241:159;274:67877;43672:8;274:67877;;;47379:19;;;274:67877;;;;;;;;48370:30;48241:159;;:105;47194:12;274:67877;47194:12;;;274:67877;;;;;;;;;48309:37;48325:21;48309:37;;48241:105;;47902:296;274:67877;;15112:27;47194:12;;;;274:67877;;;47194:12;;;274:67877;43672:8;274:67877;;;48128:33;;;274:67877;;;;;;;;;;;47902:296;;47927:96;274:67877;43672:8;274:67877;;;47379:19;;;274:67877;;;;;;;;47993:30;47927:96;;47375:406;274:67877;;;47541:34;:103;;;47375:406;47512:251;;47375:406;;;;47512:251;-1:-1:-1;;274:67877:26;;;;;;;;;47693:26;274:67877;;;;;;;;;;;;;;47512:251;;;47541:103;274:67877;;;;;;;;;;;;;;;47604:26;274:67877;;;;;;;;47603:41;47541:103;;47194:148;274:67877;;;;;47305:37;;;47194:148;;;:91;-1:-1:-1;274:67877:26;;-1:-1:-1;43933:25:26;47253:32;;;47194:91;;47072:16;;274:67877;44733:3;274:67877;;;;;;;;;;;44713:18;;;;;274:67877;;;44785:24;274:67877;;;;;;44927:13;274:67877;;;44927:24;;:52;;;;44733:3;44923:894;;;44733:3;;;274:67877;;44698:13;;44923:894;45008:13;;274:67877;45049:3;274:67877;;45023:24;;;;;45174:16;;;;:::i;:::-;274:67877;;;;;;;;5069:25;274:67877;;;;;45157:16;274:67877;;;;;;;;47136:20;274:67877;;;;;45353:12;47194;45353;;274:67877;;;;;;;;;;;;;;;;45353:34;;45349:428;;45049:3;;;;274:67877;45008:13;;45349:428;47379:19;274:67877;;;;;;;45715:25;5069;45504:19;;274:67877;;;;45558:20;45504:74;274:67877;45558:20;;274:67877;;;45504:74;;:::i;:::-;274:67877;;;45715:25;274:67877;45349:428;;;;;45023:24;;;;;274:67877;44923:894;;;44927:52;44955:24;;;;44927:52;;;44713:18;;;274:67877;46063:13;274:67877;;47076:8;274:67877;;;;;;;46058:183;;46096:3;274:67877;;46078:16;;;;;;274:67877;;;47136:20;274:67877;;;47194:12;274:67877;;;46123:30;274:67877;;;;;;;;;46123:52;46119:108;;46096:3;274:67877;;46063:13;;;46119:108;46199:9;;274:67877;46199:9;;:::i;:::-;46119:108;;;;;46078:16;;;;;;274:67877;43672:8;274:67877;46259:12;46255:336;;46058:183;44621:1980;;;46255:336;46295:12;;;274:67877;5069:25;274:67877;;4624:15;274:67877;;;4624:15;274:67877;-1:-1:-1;;;;;;;;;;;274:67877:26;;;44595:15;274:67877;;46401:35;46291:269;46255:336;;;46291:269;46518:23;274:67877;44625:13;274:67877;46518:23;:::i;:::-;46504:37;274:67877;46291:269;;43910:527;-1:-1:-1;;274:67877:26;;;;;;;;;;;43996:25;274:67877;;;;;;;;43995:40;:100;;;;43910:527;43995:160;;;43910:527;43995:221;;;43910:527;43995:282;;;;43910:527;43995:343;;;43910:527;43974:453;;43910:527;43974:453;-1:-1:-1;;274:67877:26;;;4624:15;274:67877;43974:453;43910:527;;43995:343;-1:-1:-1;;274:67877:26;;;-1:-1:-1;274:67877:26;;;;;44298:26;274:67877;;;;;;;;;;44297:41;43995:343;;;:282;274:67877;-1:-1:-1;;;274:67877:26;;;;;;;;;44237:26;274:67877;;;;;;;;44236:41;43995:282;;;:221;274:67877;;;;;44176:26;274:67877;;;;;;;;44175:41;43995:221;;;;:160;274:67877;-1:-1:-1;;;274:67877:26;;;;;;;;;43996:25;274:67877;;;;;;;;44115:40;43995:160;;;:100;274:67877;-1:-1:-1;;;274:67877:26;;;;;;;;;43996:25;274:67877;;;;;;;;44055:40;43995:100;;;43655:166;274:67877;;-1:-1:-1;;;43790:20:26;;274:67877;;43790:20;43672:86;274:67877;;;;43718:20;274:67877;;;;;;43718:40;274:67877;43700:15;:58;43672:86;;43486:102;-1:-1:-1;274:67877:26;;-1:-1:-1;43563:25:26;43544:44;;;43486:102;;274:67877;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;920:70:28;;;;;:::i;:::-;274:67877:26;5050:15;274:67877;;;;;;;;5069:25;5050:44;5046:104;;26217:8;274:67877;26240:11;26249:2;26240:11;;;:26;;;274:67877;26236:276;;;26307:1;274:67877;;26286:22;26282:87;;26236:276;;;;;274:67877;;;;;;;;;;;;26573:433;274:67877;;;26573:433;274:67877;;27021:39;;274:67877;27021:39;274:67877;;27021:39;:::i;26617:3::-;274:67877;;26593:22;;;;;274:67877;26664:13;;274:67877;;;26659:205;26881:5;;26877:64;;-1:-1:-1;;;;;26980:14:26;;;;:::i;:::-;274:67877;;;;;-1:-1:-1;;;274:67877:26;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;26578:13;;;;274:67877;;;;;;;;;;;;26694:3;274:67877;;;;;;;;;;26679:13;;;;;;-1:-1:-1;;;;;274:67877:26;26721:14;;;;:::i;:::-;274:67877;;;;;;26739:20;274:67877;;26739:30;274:67877;;;26739:30;274:67877;;26721:48;26717:133;;26664:13;;;;26694:3;;26664:13;26694:3;;26664:13;274:67877;;26694:3;26664:13;;26717:133;26793:11;;;;;;;;26826:5;;;26679:13;;;;;;;;;;;274:67877;;;;;;;;;;;;26593:22;;;26282:87;274:67877;;-1:-1:-1;;;26335:19:26;;274:67877;;26335:19;26236:276;274:67877;26389:10;;26385:127;;26236:276;;;;;;;26385:127;26440:1;274:67877;;26419:22;26415:87;26385:127;26415:87;274:67877;;-1:-1:-1;;;26468:19:26;;274:67877;;26468:19;26240:26;26255:11;274:67877;26255:11;;;26240:26;;274:67877;-1:-1:-1;;;;274:67877:26;;;;;;;;;;;-1:-1:-1;;;;;274:67877:26;;;;;;;;;;;;;;;;;-1:-1:-1;;;;274:67877:26;;;;;;;;;;;;;;-1:-1:-1;;274:67877:26;;;;62126:12;274:67877;;;-1:-1:-1;;;;;274:67877:26;;;;;;;;;;;;;;-1:-1:-1;;274:67877:26;;;;;62926:13;274:67877;;;;;;;;;;;;;-1:-1:-1;;274:67877:26;;;;;4624:15;274:67877;;;;;;;;;4624:44;;4620:95;;5069:25;5050:44;5046:104;;40058:10;274:67877;;40041:16;274:67877;;;;;;;;40007:20;274:67877;;;;;;40156:23;;274:67877;;;;;40118:24;274:67877;;;;;;;;;;;40241:12;;;274:67877;;40241:26;40237:80;;274:67877;;;40421:12;;;274:67877;;-1:-1:-1;;274:67877:26;;;;;40471:36;-1:-1:-1;40493:13:26;;40471:36;:::i;:::-;40625:8;274:67877;;;40591:33;;;274:67877;;;;;;;;;;;;5069:25;40670:19;;274:67877;;;40692:20;40670:42;274:67877;40692:20;;274:67877;;;40670:42;;:::i;:::-;274:67877;;;40789:25;;:36;:25;;;274:67877;;;40789:36;:::i;:::-;274:67877;;;;40493:13;;274:67877;40901:24;40897:576;;274:67877;-1:-1:-1;40241:12:26;;;274:67877;;;;;;;;-1:-1:-1;;;;;274:67877:26;;;;;;;;;;;;;;;;41488:55;;274:67877;;;;41488:55;274:67877;40897:576;40241:12;40941:13;;274:67877;;-1:-1:-1;;274:67877:26;;;-1:-1:-1;41022:3:26;274:67877;40493:13;;274:67877;40996:24;;;;;40493:13;41132:16;274:67877;40493:13;;;;41132:16;:::i;:::-;274:67877;;;;;;;;5069:25;274:67877;;;;;40041:16;274:67877;;;;;;;;40007:20;274:67877;;;;;40421:12;41185:13;;274:67877;;;;;;;;;41410:38;41263:20;5069:25;41263:20;;274:67877;;;;41286:21;41263:44;274:67877;41286:21;;274:67877;;;41263:44;;:::i;:::-;274:67877;;;41410:26;274:67877;;;41410:38;:::i;:::-;274:67877;;;40981:13;;40996:24;;;41488:55;40897:576;;40237:80;274:67877;;-1:-1:-1;;;40290:16:26;;274:67877;;40290:16;274:67877;;;;;;-1:-1:-1;;274:67877:26;;;;;;4624:15;274:67877;;;;;;;;;4624:44;;4620:95;;5069:25;5050:44;5046:104;;17926:10;274:67877;;;;17909:16;274:67877;;;;;;;;17875:20;;274:67877;;;;;;;18024:23;;;;274:67877;;;;17986:24;274:67877;;;;;18109:12;;;;274:67877;;;;;;;;;;;18109:26;18105:80;;18350:8;274:67877;;;;;18329:20;274:67877;;;;;;18373:6;274:67877;;;;;;;18299:15;:81;:155;;;;274:67877;18282:232;;-1:-1:-1;;274:67877:26;;;;;;;;;18591:18;274:67877;;;;;;18591:44;18587:98;;274:67877;18766:33;;;;;;274:67877;;;;;;;;;;;;18765:44;274:67877;;;;18912:12;;;;;18927:22;18912:12;;18927:22;274:67877;;;;;;;;18761:607;19470:19;5069:25;19470:19;;274:67877;;19492:20;274:67877;19470:42;274:67877;19492:20;;274:67877;;;19470:42;;:::i;:::-;19442:25;;274:67877;;;4624:15;274:67877;;;;;;;;;;;19663:42;;19659:531;;18761:607;274:67877;;;18350:8;274:67877;;;;;20393:25;274:67877;;;;;;;;;;;;;18350:8;274:67877;;;;;;;;;;;;;20392:36;20388:109;;18761:607;18350:8;274:67877;;;;17926:10;274:67877;;;;;;;;;20512:36;;274:67877;;;;;20512:36;274:67877;20388:109;274:67877;;;;20388:109;;;;;;19659:531;274:67877;19755:13;;274:67877;19774:8;274:67877;;;;;;;;;19750:238;274:67877;;;19750:238;274:67877;;;;;;;;;;;;;;;;;;;;20098:3;274:67877;;-1:-1:-1;20065:115:26;;19750:238;19659:531;;;;20065:115;-1:-1:-1;;274:67877:26;18109:12;274:67877;4624:15;274:67877;20065:115;;;19788:3;274:67877;;;19770:16;;;;;;274:67877;;;;;;;19884:13;274:67877;;;19884:13;274:67877;;;;;;;;;19901:21;19884:38;;;19880:94;;19788:3;;274:67877;19755:13;;;19880:94;19946:9;;;;;:::i;:::-;19880:94;;;;;19770:16;;;18761:607;19063:12;;;274:67877;;-1:-1:-1;;274:67877:26;19078:21;274:67877;;;19063:12;;19113:36;;19135:13;19113:36;:::i;:::-;274:67877;;;;;;;19164:29;274:67877;;;;;;;18350:8;274:67877;;;19305:21;274:67877;;19305:52;274:67877;;;;;19305:52;;:::i;:::-;18761:607;;18587:98;274:67877;;-1:-1:-1;;;18658:16:26;;274:67877;;18658:16;18282:232;274:67877;;-1:-1:-1;;;18486:17:26;;274:67877;;18486:17;18299:155;274:67877;;;;18329:20;274:67877;;;;;;18299:15;18396:58;18299:155;;274:67877;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;274:67877:26;;;;;;:::i;:::-;2466:103:25;;:::i;:::-;274:67877:26;4624:15;274:67877;;;;;;;;;4624:44;;4620:95;;5069:25;5050:44;5046:104;;57335:8;274:67877;;;;57314:20;274:67877;;;;;;57358:6;274:67877;;;;;;;57284:15;:81;:178;;;;274:67877;57267:255;;-1:-1:-1;;274:67877:26;;;;;;;;;57535:25;274:67877;;;;;;57531:102;;59358:8;274:67877;;59411:3;274:67877;;;;;;;;;;59396:13;;;;;274:67877;;;59457:20;274:67877;;;;;59498:25;274:67877;59498:25;;274:67877;;59498:29;;59494:250;;59411:3;274:67877;;57335:8;274:67877;;59868:12;;:83;;;59411:3;59868:126;;;59411:3;59847:741;;59411:3;274:67877;57335:8;274:67877;5069:25;60655:12;;60651:322;;59411:3;61042:48;;;;;59411:3;61038:239;;59411:3;274:67877;59411:3;;274:67877;59381:13;;61038:239;61128:25;;;274:67877;;;;;;;61218:12;274:67877;61240:12;;;;274:67877;;;-1:-1:-1;;;61218:44:26;;-1:-1:-1;;;;;274:67877:26;;;;61218:44;;274:67877;;;;;;;;;;;;;;;;;;;;61218:44;;;;;;;274:67877;61218:44;;;61038:239;;;;61218:44;;;274:67877;61218:44;274:67877;61218:44;;;;;;;;:::i;:::-;;;;;:::i;:::-;;;;;;;;;;;274:67877;;;;;;;;;61042:48;61061:25;;;;274:67877;61061:29;;61042:48;;60651:322;274:67877;;;;;;;;;;;;;60691:26;;;274:67877;;;;;;60691:44;60687:272;60651:322;60687:272;60759:115;:25;;;274:67877;;;60759:115;:::i;:::-;274:67877;;57335:8;274:67877;;;;;;;;;;;;;;60691:26;;;274:67877;;;;;;;60687:272;60651:322;;59847:741;274:67877;4624:15;274:67877;;;;;;;;60071:25;60052:44;:119;;;;59847:741;-1:-1:-1;60027:547:26;;;5069:25;60232:19;;274:67877;;;;;57335:8;274:67877;;;;;;;;;;;;;;60318:26;;;274:67877;;;;;;60027:547;59847:741;;;60027:547;5069:25;60434:19;;274:67877;;;;;60520:25;;;274:67877;60027:547;;60052:119;-1:-1:-1;;274:67877:26;;;-1:-1:-1;274:67877:26;;;;;;57535:25;274:67877;;;;;;60120:51;60052:119;;;59868:126;59971:19;5069:25;59971:19;;274:67877;59971:23;;59868:126;;:83;274:67877;;;;;;;;;;;;;;;57535:25;274:67877;;;;;;59900:51;59868:83;;59494:250;274:67877;;;59694:25;;;274:67877;59494:250;;;;59396:13;61302:14;274:67877;61302:14;;274:67877;3068:21:25;274:67877:26;;57531:102;274:67877;;-1:-1:-1;;;57608:14:26;;274:67877;;57608:14;57267:255;274:67877;;-1:-1:-1;;;57494:17:26;;274:67877;;57494:17;57284:178;274:67877;;;;57314:20;274:67877;;;;;;57455:6;274:67877;;;;;;;57284:15;57381:81;57284:178;;274:67877;;;;;;-1:-1:-1;;274:67877:26;;;;;;1524:13:28;274:67877:26;;;;;;;;;;;;;;;;-1:-1:-1;;274:67877:26;;;;;;:::i;:::-;-1:-1:-1;;;;;274:67877:26;;;;;4487:18;;4483:77;;274:67877;5050:15;274:67877;;;;;;;;5069:25;5050:44;;;5046:104;;274:67877;30383:10;274:67877;;30366:16;274:67877;;;;;;30421:10;;;:94;;;;274:67877;30404:158;;;274:67877;30575:5;30571:56;;274:67877;30730:13;274:67877;;;;;;;30725:170;30745:30;;;;;;30908:7;;;;30904:65;;274:67877;;;;31043:38;;;:92;;30725:170;31043:150;;;30725:170;31026:222;;31261:38;;;274:67877;;;-1:-1:-1;;;;;;274:67877:26;-1:-1:-1;;;;;274:67877:26;;;;;;;;;31396:15;31367:44;274:67877;31458:8;274:67877;31425:41;274:67877;31257:987;274:67877;;;;32350:38;;;;:92;;;31257:987;32333:908;;31257:987;33256:39;274:67877;;;;;;;33256:39;274:67877;32333:908;274:67877;32467:13;;;274:67877;;;;32498:52;32494:472;274:67877;;;32589:24;274:67877;;;;32589:24;:::i;:::-;274:67877;;;;;;;32653:30;;;;;;32494:472;;;;-1:-1:-1;;;;;274:67877:26;;;;;;;;;;;;;;;;;;;;;;;;33081:26;274:67877;33110:81;33081:110;33110:81;;33256:39;33110:81;;:::i;:::-;274:67877;;;;;;33081:26;;:::i;:110::-;33205:23;;:::i;:::-;32333:908;;;;;32685:3;32716:22;;;;;:::i;:::-;274:67877;;;;;;;32716:50;32712:114;;32685:3;;274:67877;32638:13;;32712:114;32794:9;-1:-1:-1;32794:9:26;32712:114;;32494:472;32901:22;;;;;;:::i;:::-;274:67877;;;;;;;32901:22;:::i;:::-;274:67877;32494:472;;;32350:92;274:67877;;;;;32404:38;;32350:92;;31257:987;31552:26;274:67877;31582:6;274:67877;;;;;;;31518:15;;:71;:133;;;31257:987;31497:737;;;-1:-1:-1;;274:67877:26;;;-1:-1:-1;;;;;;274:67877:26;;;;;31257:987;;31497:737;31518:15;31786:75;:141;;;31497:737;31761:459;;;274:67877;;;-1:-1:-1;;;;;;274:67877:26;-1:-1:-1;;;;;274:67877:26;;;;;;;;;31518:15;31552:26;274:67877;32127:8;274:67877;32094:41;274:67877;31257:987;;31761:459;274:67877;;-1:-1:-1;;;32189:12:26;;274:67877;;32189:12;31786:141;274:67877;31885:30;274:67877;31919:8;274:67877;31885:42;;31786:141;;31518:133;274:67877;31609:30;274:67877;31643:8;274:67877;31609:42;31518:133;;31043:150;274:67877;31151:30;274:67877;31185:8;274:67877;31151:42;31043:150;;:92;274:67877;;;;;31097:38;31043:92;;30904:65;274:67877;;-1:-1:-1;;;30938:20:26;;274:67877;;30938:20;30777:3;30815:22;;;;:::i;:::-;274:67877;;;;;;;30800:37;;30796:89;;30777:3;274:67877;30730:13;;;;30796:89;30857:13;;;30796:89;;;30404:158;30540:11;274:67877;30404:158;;30421:94;274:67877;;;;30447:20;274:67877;;;30447:34;274:67877;;;30447:34;274:67877;;;;;;;;;30447:68;30421:94;;;4483:77;274:67877;;-1:-1:-1;;;4528:21:26;;274:67877;;4528:21;274:67877;;;;;;-1:-1:-1;;274:67877:26;;;;;;:::i;:::-;920:70:28;;:::i;:::-;274:67877:26;5050:15;274:67877;;;;;;;;;5069:25;;5050:44;;5046:104;;-1:-1:-1;;;;;274:67877:26;;;;;27514:382;;274:67877;28036:45;274:67877;;;-1:-1:-1;;;;;274:67877:26;;27906:39;274:67877;;;27906:39;274:67877;27975:15;27955:35;274:67877;;;;;;;;;;;;;;;28036:45;274:67877;27514:382;274:67877;27595:13;274:67877;;;;;;27590:219;27610:30;;;;;;27590:219;27826:5;;;;;;27822:64;;27514:382;;;;27642:3;27692:22;;;;:::i;:::-;274:67877;;;;;;;27669:45;;27665:130;;27642:3;274:67877;27595:13;;27665:130;27738:11;;;;;;27771:5;;;;;;;274:67877;;;;;;-1:-1:-1;;274:67877:26;;;;;1642:30:28;274:67877:26;;;;;;;;;;;;;-1:-1:-1;;274:67877:26;;;;;;63523:19;274:67877;;;;;;;;;;;;;;;;66890:451;274:67877;;;;:::i;:::-;;;;:::i;:::-;;;;66746:20;274:67877;;;;;66823:27;:9;;:27;:9;;;274:67877;66835:8;274:67877;66823:27;;274:67877;;66946:23;;;;274:67877;;;;;;;66983:12;;;274:67877;;67009:19;;;;274:67877;;67042:20;;274:67877;67076:25;;;274:67877;67115:25;;;;274:67877;;;;67154:33;;;274:67877;;;;;;;;67206:19;;;;274:67877;;;;;;;;67244:26;;;;274:67877;;67289:12;274:67877;;;;67289:12;;274:67877;;;;;;;:::i;:::-;;;;66890:451;;274:67877;;66890:451;;274:67877;66890:451;;;274:67877;66890:451;;;274:67877;66890:451;;;274:67877;66890:451;;;274:67877;;;;66890:451;;274:67877;;;66890:451;;;274:67877;66890:451;;;274:67877;66890:451;274:67877;;;66890:451;;;;:::i;:::-;67206:19;274:67877;;66890:451;;;;:::i;:::-;274:67877;;;;;;;:::i;66823:27::-;;;;274:67877;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;63943:24;274:67877;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;274:67877:26;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;274:67877:26;;;;;;;:::i;:::-;66093:451;274:67877;;;;;:::i;:::-;-1:-1:-1;;;;;;274:67877:26;;;;;;;65967:16;274:67877;;;;;;;;;;;65933:20;274:67877;;;;;;;66026:9;;;274:67877;66038:8;274:67877;66026:27;;274:67877;;66149:23;274:67877;66149:23;;274:67877;66186:12;;;;274:67877;;66212:19;;;;274:67877;;66245:20;;274:67877;66279:25;;;274:67877;66318:25;;;;274:67877;;;;66357:33;;;274:67877;;;;;;;;66409:19;;;;274:67877;;;;;;;;66447:26;;;;274:67877;;66492:12;274:67877;;;;66492:12;;274:67877;;;;;;;;;:::i;:::-;;66093:451;;274:67877;;66093:451;;274:67877;66093:451;;;274:67877;66093:451;;;274:67877;66093:451;;;274:67877;66093:451;;;274:67877;;;;66093:451;;274:67877;;;66093:451;;;274:67877;66093:451;;;274:67877;66093:451;274:67877;;;66093:451;;;;:::i;66026:27::-;;;;274:67877;;;;;;-1:-1:-1;;274:67877:26;;;;;62773:8;274:67877;;;;;;;;;;;;;-1:-1:-1;;274:67877:26;;;;;62457:10;274:67877;;;;;;;;;;;;;-1:-1:-1;;274:67877:26;;;;2466:103:25;;:::i;:::-;920:70:28;;:::i;:::-;274:67877:26;;4624:15;274:67877;;;;;;;;;4624:44;;4620:95;;5069:25;5050:44;5046:104;;35341:8;274:67877;35381:3;;;:::i;:::-;35416;;;:::i;:::-;274:67877;;;35458:20;274:67877;;;;;5069:25;274:67877;35502:15;;274:67877;35521:14;;274:67877;35502:33;;;;;35498:91;;35676:32;;;:::i;:::-;274:67877;35718:19;274:67877;35790:8;274:67877;35813:13;274:67877;;;;;;;35808:528;;35844:3;274:67877;;35828:14;;;;;;274:67877;;;35890:20;274:67877;;;;;35931:12;;;;;274:67877;;;;;;;;;;35931:34;;;35927:399;;35844:3;;274:67877;;35813:13;;;35927:399;35985:13;;274:67877;35985:13;;:::i;:::-;36020:20;;274:67877;36020:24;36016:296;35927:399;36016:296;36072:13;;;;;;:48;;;36016:296;36068:226;;;36148:31;;274:67877;36148:31;36068:226;;36016:296;35927:399;;36068:226;36208:86;;;;;;36068:226;274:67877;36068:226;;;36208:86;36253:18;;-1:-1:-1;36253:18:26;;36208:86;;36072:48;36089:31;;;;36072:48;;35828:14;;;;;;;36421:21;;;;;:::i;:::-;:32;:91;;;36468:21;;;;;:::i;:::-;36421:91;;274:67877;;;36561:13;36592:3;274:67877;;36576:14;;;;;;274:67877;;;35890:20;274:67877;;;;;36679:12;;35931;36679;;274:67877;;;;;;;;;;;36679:34;;36675:183;;36592:3;;274:67877;36561:13;;;36675:183;274:67877;36737:20;274:67877;;36737:32;;;;;36733:111;;36675:183;;;;;36733:111;36793:32;;;:::i;:::-;274:67877;;36733:111;;;;;36576:14;;;;;;35341:8;274:67877;;;35458:20;274:67877;;;;;;36878:40;:51;274:67877;;;36878:51;:::i;:::-;274:67877;;36943:22;;;;;:::i;:::-;:32;36939:273;;36556:312;274:67877;;37227:52;;274:67877;;;37227:52;;;;274:67877;;;;;;;;;;;;;;;;;;37227:52;;;;274:67877;3068:21:25;274:67877:26;;36939:273;37022:34;37033:22;;;;;;;:::i;:::-;37022:34;;:::i;:::-;35931:12;274:67877;;;-1:-1:-1;;;37070:131:26;;37113:10;274:67877;37070:131;;274:67877;37149:4;274:67877;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;;274:67877:26;37070:131;;;;;;;37227:52;37070:131;37227:52;37070:131;;;36939:273;;;;;;37070:131;;;;;;-1:-1:-1;37070:131:26;;;;;;:::i;:::-;;;;;;36421:91;;;;35498;274:67877;;-1:-1:-1;;;35558:20:26;;274:67877;;35558:20;274:67877;;;;;;-1:-1:-1;;274:67877:26;;;;;;:::i;:::-;;5050:15;274:67877;;;;;;;;5069:25;5050:44;;5046:104;;920:70:28;;:::i;:::-;274:67877:26;4624:44;;4620:95;;5791:49;;;:107;;;;274:67877;5774:182;;;-1:-1:-1;;;;;274:67877:26;;;;;;6019:16;274:67877;;;;;;;;;6015:82;;6313:12;6426:35;274:67877;6107:10;;274:67877;6107:10;:::i;:::-;;274:67877;;;;;;;6154:20;274:67877;;;;;;;;;;;;;;6019:16;274:67877;;;;;;;;;;6281:12;;;274:67877;;-1:-1:-1;;;;;;274:67877:26;;;;;;;6313:12;;;;274:67877;;-1:-1:-1;;274:67877:26;;;;;;;;;-1:-1:-1;;;;;274:67877:26;;;;;;;;;;;;;6426:35;274:67877;6015:82;274:67877;;-1:-1:-1;;;6072:14:26;;274:67877;;6072:14;5774:182;274:67877;;-1:-1:-1;;;5930:15:26;;274:67877;;5930:15;5791:107;274:67877;5856:42;;;;5791:107;;;274:67877;;;;;;-1:-1:-1;;274:67877:26;;;;;;:::i;:::-;;;;;:::i;:::-;;;5050:15;274:67877;;;;;;;;5069:25;5050:44;;5046:104;;274:67877;920:70:28;;;:::i;:::-;4624:44:26;4620:95;;274:67877;;;7317:24;274:67877;;;;;;;;;;;;;;;;;7418:16;274:67877;;;;;;;;7384:20;274:67877;;;;;;;;7508:13;7504:68;;7586:12;;;274:67877;;7586:26;;;7582:79;;274:67877;7705:13;;274:67877;;;;-1:-1:-1;;;274:67877:26;;;;;;;;;;;;;;;:::i;:::-;7818:452;;;;7891:12;;;274:67877;;;;;;;;;;;;;;7891:41;7887:103;;274:67877;;7586:12;274:67877;8752:46;274:67877;8098:20;8752:46;274:67877;;;;;;;7818:452;8437:23;274:67877;;;8481:25;;;:54;;;;7818:452;-1:-1:-1;8477:260:26;;;8556:13;274:67877;;;;;8555:14;8551:73;;8477:260;;;;274:67877;;;-1:-1:-1;;;;;274:67877:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8551:73;-1:-1:-1;;274:67877:26;;;;;8551:73;;;;8477:260;8658:13;274:67877;;;;;8654:73;;8477:260;;;;;8654:73;-1:-1:-1;;274:67877:26;;;8654:73;;;;8481:54;8534:1;8510:25;;;;8481:54;;;7887:103;274:67877;;-1:-1:-1;;;7959:16:26;;274:67877;;7959:16;7818:452;8752:46;8208:16;8752:46;8208:16;;274:67877;8208:16;;7586:12;8208:16;;274:67877;;;;;;;;;7818:452;;274:67877;;;;;;;;;;;;7582:79;274:67877;;-1:-1:-1;;;7635:15:26;;274:67877;;7635:15;7504:68;274:67877;;-1:-1:-1;;;7544:17:26;;274:67877;;7544:17;274:67877;;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;64289:28;274:67877;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;274:67877:26;;;;;825:33;274:67877;;;;;;;;;;;;;-1:-1:-1;;274:67877:26;;;;;63694:15;274:67877;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;274:67877:26;;;;920:70:28;;:::i;:::-;4624:15:26;274:67877;;;;;;;;;;;4624:44;;4620:95;;5069:25;5050:44;5046:104;;-1:-1:-1;;274:67877:26;;;4624:15;274:67877;41852:15;41831:36;274:67877;2466:103:25;;:::i;:::-;274:67877:26;4624:15;274:67877;;;;;;;;5069:25;57831:44;;;:92;;;;274:67877;57827:153;;;58005:8;274:67877;;58023:959;58058:3;274:67877;;;;;;;;;;58043:13;;;;;274:67877;;;58104:20;274:67877;;;;;58141:19;58189:98;:70;:42;5069:25;58189:19;;274:67877;;58211:20;;274:67877;58189:42;;:::i;:::-;274:67877;58234:25;;274:67877;58189:70;;:::i;:::-;58262:25;;;274:67877;58189:98;;:::i;:::-;274:67877;5069:25;58305:8;274:67877;58305:12;58301:487;5069:25;;;58305:8;274:67877;58441:26;;;;274:67877;58382:3;58305:8;274:67877;-1:-1:-1;;274:67877:26;;;;;;;58363:17;;;;58426:44;274:67877;;;;;;;;;;;58426:44;;:::i;:::-;274:67877;;;;;;;;;;;;;;;;-1:-1:-1;;274:67877:26;;58341:20;;58363:17;;;;274:67877;58363:17;;58262:25;58363:17;;58301:487;274:67877;5069:25;58189:19;;274:67877;;;58211:20;;274:67877;;;58234:25;;274:67877;58262:25;274:67877;;58028:13;;;58301:487;58586:9;;274:67877;58582:192;58612:3;58305:8;274:67877;58597:13;;;;58656:44;58612:3;274:67877;;;;58671:26;;;274:67877;;;;;;58656:44;;:::i;:::-;274:67877;;;;58671:26;;;274:67877;;;;;;;58612:3;:::i;:::-;58586:9;;;58597:13;;;58262:25;274:67877;58597:13;;;58301:487;;58043:13;274:67877;3068:21:25;274:67877:26;41909:31;274:67877;;;41852:15;274:67877;;41909:31;274:67877;57827:153;274:67877;;-1:-1:-1;;;57946:23:26;;274:67877;;57946:23;57831:92;274:67877;57879:44;;;;57831:92;;;274:67877;;;;;;;;;;;;;;;920:70:28;;;:::i;:::-;4624:15:26;274:67877;;;;;;;;;;;4624:44;;4620:95;;5069:25;5050:44;;5046:104;;10268:107;;10469:8;274:67877;10469:13;10480:2;10469:13;;:31;;;;274:67877;10465:79;;274:67877;10574:5;274:67877;10574:5;;;;11005:46;274:67877;;10969:20;274:67877;;;;;;;4624:15;274:67877;;10911:25;274:67877;10969:20;;:::i;:::-;10955:34;274:67877;;;;;;11005:46;274:67877;10581:3;274:67877;;;10661:24;274:67877;;;;;;;10661:35;274:67877;10661:46;10657:110;;274:67877;;10559:13;;10657:110;274:67877;;-1:-1:-1;;;10734:18:26;;274:67877;;10734:18;10465:79;274:67877;;-1:-1:-1;;;10523:10:26;;274:67877;;10523:10;10469:31;274:67877;5069:25;10480:2;274:67877;10486:14;10469:31;;10268:107;274:67877;;-1:-1:-1;;;10344:20:26;;274:67877;;10344:20;274:67877;;;;;;-1:-1:-1;;274:67877:26;;;;2466:103:25;;:::i;:::-;274:67877:26;5050:15;274:67877;;;;;;;;5069:25;5050:44;;5046:104;;274:67877;4624:44;;4620:95;;274:67877;9089:42;9085:96;;9269:10;274:67877;;9252:16;274:67877;;;;;;;;9218:20;274:67877;;;;;9359:12;;;274:67877;;;;;;;;;;;;;9359:37;9355:90;;9527:11;274:67877;5050:15;274:67877;;;;;;5050:15;274:67877;;;;;;;9563:3;9527:40;274:67877;;9527:40;;:::i;:::-;9607:2;274:67877;;;;;;9607:2;274:67877;;;;;;;;;;;9626:20;274:67877;9626:20;;:31;274:67877;;;9626:31;:::i;:::-;274:67877;;-1:-1:-1;;274:67877:26;;;;9359:12;274:67877;;;-1:-1:-1;;;9770:61:26;;9269:10;274:67877;9770:61;;274:67877;9816:4;274:67877;;;;;;;;;;;-1:-1:-1;;;;;274:67877:26;;;;;;;;;-1:-1:-1;;274:67877:26;;9770:61;;;;;;;9846:53;9770:61;9682:16;9770:61;;;274:67877;-1:-1:-1;9864:12:26;274:67877;;;;;;;;-1:-1:-1;;;;;274:67877:26;;;;;;;;;;;;;;;9846:53;274:67877;9770:61;;;274:67877;9770:61;274:67877;9770:61;;;;;;;:::i;:::-;;;;;9355:90;274:67877;;-1:-1:-1;;;9419:15:26;;274:67877;;9419:15;9085:96;274:67877;;-1:-1:-1;;;9154:16:26;;274:67877;;9154:16;274:67877;;;;;;-1:-1:-1;;274:67877:26;;;;;62292:8;274:67877;;;;;;;;;;;;;;;;;;;;;;920:70:28;;:::i;:::-;274:67877:26;4624:15;274:67877;4624:15;274:67877;;;;;;;;;;;4624:44;;4620:95;;5069:25;5050:44;;5046:104;;274:67877;24795:49;;;;:107;;;;274:67877;24778:182;;;25033:13;274:67877;25029:69;;274:67877;;;;;25033:13;274:67877;;25227:13;274:67877;;;25246:8;274:67877;;;;;;;;25222:175;274:67877;;;25222:175;25602:39;274:67877;25492:27;;;;;;:::i;:::-;25478:41;274:67877;25552:8;274:67877;;;25531:20;274:67877;;;5069:25;274:67877;;;25531:39;274:67877;25478:41;274:67877;;;;;;;;;;25602:39;274:67877;25260:3;274:67877;;;;;;25242:16;;;;;;274:67877;;;25283:20;274:67877;;;25283:30;274:67877;;;25283:30;274:67877;;;;;;;;;25283:52;25279:108;;25260:3;;;;;274:67877;25227:13;;;25279:108;25355:17;;;;;:::i;:::-;25279:108;;;;;25242:16;;;;;;25029:69;274:67877;;;;;;;;;47090:3;47076:8;274:67877;;;;;;;;;47072:16;;;;;274:67877;;;47136:20;274:67877;;;;;47194:12;;;;274:67877;;;;;;;;;;;;;;47194:39;;;:91;;;47090:3;47194:148;;;;47090:3;47173:1482;;;47090:3;;;;;274:67877;47090:3;;274:67877;47057:13;;47173:1482;47379:19;;;;;47399:8;;274:67877;;;;;;;;;;;;;;;;47375:406;274:67877;;;-1:-1:-1;;274:67877:26;;-1:-1:-1;;274:67877:26;;;;;-1:-1:-1;47375:406:26;274:67877;;;;;;;;;;;47927:42;:96;;;47375:406;47902:296;;47375:406;274:67877;;;;;;;;;;;48260:25;;;48241:44;;;:105;;;;47375:406;48241:159;;274:67877;48241:159;274:67877;48241:159;;;274:67877;48241:159;48593:47;48241:159;;;;;;47375:406;48216:354;;;47375:406;274:67877;;;;;;;48613:12;;274:67877;;;;;;;;;;;;;;;:::i;:::-;48593:47;47173:1482;;;;;;48216:354;274:67877;;;;;;;;;;;;;48500:33;;;274:67877;;;;;;;;;;;48216:354;;;;48241:159;274:67877;;;;;;;;;;;;;;48370:30;48241:159;;;:105;274:67877;;;;;;;;;;;;;;;;;48241:105;;48309:37;;;;;;48325:21;48309:37;;;274:67877;48241:105;;47902:296;274:67877;;15112:27;274:67877;;;;;;;;;;;48128:33;;;274:67877;;;;;;;;;;;47902:296;;47927:96;274:67877;;;;;;;;;;;;;;47993:30;47927:96;;47375:406;274:67877;;;47541:34;:103;;;47375:406;47512:251;;47375:406;;;;47512:251;-1:-1:-1;;274:67877:26;;;;;;;;;47693:26;274:67877;;;;;;;;;;;;;;47512:251;;;47541:103;-1:-1:-1;;;274:67877:26;;;;;;;;;47604:26;274:67877;;;;;;;;47603:41;47541:103;;47194:148;274:67877;;;;;47305:37;;;47194:148;;;:91;-1:-1:-1;274:67877:26;;-1:-1:-1;47269:16:26;47253:32;;;47194:91;;47072:16;;;;;;25029:69;;;;;24795:107;274:67877;;;;;24860:42;;;24795:107;;;274:67877;;;;;;-1:-1:-1;;274:67877:26;;;;1296:17:28;274:67877:26;;;-1:-1:-1;;;;;274:67877:26;;;;;;;;;;;;;;-1:-1:-1;;274:67877:26;;;;;;;;68110:26;274:67877;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;274:67877:26;;;;;5050:15;274:67877;;;;;;;;5069:25;5050:44;;5046:104;;274:67877;920:70:28;;;:::i;:::-;4624:44:26;4620:95;;6784:27;274:67877;6651:12;;274:67877;6651:12;:::i;:::-;274:67877;6651:12;274:67877;;;;6702:24;274:67877;;;;;;;;;;;;6784:27;274:67877;;;;;;;-1:-1:-1;;274:67877:26;;;;;63080:11;274:67877;;;;;;;;;;;;;-1:-1:-1;;274:67877:26;;;;920:70:28;;:::i;:::-;5050:15:26;274:67877;;;;;;;;;;5069:25;5050:44;;5046:104;;274:67877;4624:44;4620:95;;5069:25;274:67877;;;;;;37972:26;274:67877;;;37972:26;274:67877;;;5050:15;274:67877;38087:8;274:67877;;38061:34;274:67877;;;38105:24;274:67877;;38152:15;274:67877;;;;38087:8;274:67877;;;;38246:20;38105:24;274:67877;;;;;38246:40;274:67877;;38302:6;274:67877;;;;;;;;;38105:24;274:67877;;;;;;38177:54;274:67877;38325:26;274:67877;38325:26;;274:67877;;;;;;;-1:-1:-1;;274:67877:26;;;;;;;;-1:-1:-1;;;;;274:67877:26;;;;;;;;;;;;;;-1:-1:-1;;274:67877:26;;;;;4624:15;274:67877;;;;;;;;;;4624:44;;4620:95;;5069:25;;5050:44;;5046:104;;14245:10;274:67877;;14228:16;274:67877;;14228:16;274:67877;;;;;;;;14194:20;274:67877;14194:20;274:67877;;;;;;;14343:23;;;;274:67877;;;14343:28;;14339:82;;274:67877;;14460:24;274:67877;;;;;14595:9;274:67877;14619:13;274:67877;14638:13;;;;274:67877;;;;14614:178;14634:24;;;;;;14614:178;14805:5;;;;14801:56;;274:67877;14930:36;;;;:::i;:::-;15001:8;274:67877;;;14981:19;;;274:67877;;;;;;;;;;;;15026:12;;;274:67877;;-1:-1:-1;;274:67877:26;;;;;14977:173;274:67877;;;;15263:24;15259:388;;14977:173;15681:12;;;274:67877;;;;;;-1:-1:-1;;;;;274:67877:26;;;;;;;;;;;;15662:42;;274:67877;;;;;15662:42;274:67877;15259:388;15303:13;;;;;274:67877;;;;;;;;;;;15441:196;274:67877;;;15441:196;15259:388;;;;15487:3;274:67877;;;;;;15461:24;;;;;15548:16;;;;;;;;;;;:::i;:::-;274:67877;;;;;;-1:-1:-1;;;;;274:67877:26;;;;;;;;;;;;;;;;;;;;15510:84;;274:67877;;;;;;;;;;15446:13;;15461:24;;;;;;;14977:173;15097:12;;;274:67877;;-1:-1:-1;;274:67877:26;15112:27;274:67877;;;14977:173;;14660:3;14697:16;;;;;:::i;:::-;274:67877;;14245:10;274:67877;;;;;;;;-1:-1:-1;;;;;274:67877:26;14683:30;14679:103;;274:67877;14619:13;;;;14679:103;14733:11;;;;14762:5;;;;;14339:82;274:67877;;-1:-1:-1;;;14394:16:26;;274:67877;;14394:16;274:67877;;;;;;-1:-1:-1;;274:67877:26;;;;2466:103:25;;:::i;:::-;920:70:28;;:::i;:::-;274:67877:26;4624:15;274:67877;;;;;;;;;4624:44;;4620:95;;5069:25;5050:44;5046:104;;33728:8;274:67877;33768:3;;;:::i;:::-;33802;;;:::i;:::-;274:67877;;33845:20;274:67877;;;;;;33889:15;;5069:25;274:67877;;33908:14;;274:67877;33889:33;;;;33885:91;;34079:32;;34130:26;34079:32;;:::i;:::-;34130:26;;;:::i;:::-;274:67877;;34166:12;274:67877;;;-1:-1:-1;;;34166:61:26;;34192:10;274:67877;34166:61;;274:67877;34212:4;274:67877;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;;274:67877:26;34166:61;;;;;;;34242:21;34166:61;274:67877;34166:61;;;274:67877;;;;;;;34242:21;274:67877;3068:21:25;274:67877:26;;34166:61;;;;;;;;;;;;;:::i;:::-;;;;;274:67877;;;;;;-1:-1:-1;;274:67877:26;;;;;5050:15;274:67877;;;;;;;;5069:25;5050:44;;;5046:104;;274:67877;;;;;28340:14;28336:68;;274:67877;28492:13;274:67877;;;;;;;28487:167;28507:30;;;;;;28667:5;;;;28663:56;;-1:-1:-1;;274:67877:26;;;28879:17;274:67877;-1:-1:-1;;;;;274:67877:26;;;;28562:10;28865:31;;;;28562:10;28931;28562;28931;:::i;:::-;274:67877;28988:13;274:67877;;;;28983:181;29003:30;;;;;;-1:-1:-1;;;;274:67877:26;;;;;;;29177:110;29206:81;;29177:26;29206:81;;:::i;29177:110::-;29301:23;;:::i;:::-;29941:29;274:67877;;;28562:10;274:67877;;29941:29;274:67877;29035:3;29076:22;;;;:::i;:::-;274:67877;;;;;;;28562:10;29062:36;29058:92;;29035:3;;274:67877;28988:13;;29058:92;29122:9;-1:-1:-1;29122:9:26;29058:92;;28861:1065;29378:31;;:97;;;28861:1065;29357:188;;29577:22;;;:::i;:::-;274:67877;;;;;;;28562:10;29563:36;29559:357;274:67877;;;29638:22;;;;:::i;:::-;274:67877;;;;;;;29638:22;:::i;:::-;274:67877;-1:-1:-1;;274:67877:26;;;;;;;;29704:89;29679:114;29704:89;;:::i;:::-;274:67877;;;;;;29679:22;;:::i;:114::-;29811:23;;:::i;:::-;28861:1065;;29559:357;274:67877;;-1:-1:-1;;;29882:19:26;;274:67877;;29882:19;29357:188;274:67877;;-1:-1:-1;;;29515:15:26;;274:67877;;29515:15;29378:97;274:67877;29447:17;274:67877;29467:8;274:67877;;;;;;;29429:15;:46;29378:97;;28539:3;28576:22;;;:::i;:::-;274:67877;;28562:10;274:67877;;;;-1:-1:-1;;;;;274:67877:26;28562:36;28558:86;;28539:3;274:67877;28492:13;;;;28558:86;28618:11;;;28558:86;;;28336:68;274:67877;;-1:-1:-1;;;28377:16:26;;274:67877;;28377:16;274:67877;;;;;;-1:-1:-1;;274:67877:26;;;;;;;;;;:::i;:::-;;;;;;1418:21:28;274:67877:26;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;274:67877:26;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;274:67877:26;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;274:67877:26;;;;920:70:28;;:::i;:::-;274:67877:26;4624:15;274:67877;;;;;;;;;4624:44;;4620:95;;5069:25;5050:44;5046:104;;37577:8;274:67877;;;;37556:20;274:67877;;;;;;37556:40;274:67877;;37612:6;274:67877;;;;;;;;;37556:20;274:67877;;;;;;37501:40;274:67877;37577:8;274:67877;;;37634:60;274:67877;;;;;37653:40;274:67877;;;;;;37634:60;274:67877;;;;;;;-1:-1:-1;;274:67877:26;;;;2466:103:25;;:::i;:::-;920:70:28;;:::i;:::-;4776:15:26;274:67877;;;;;;;;;;;4776:44;4772:98;;4901:18;274:67877;4922:8;274:67877;;;;;;;4883:15;:47;4879:107;;-1:-1:-1;;274:67877:26;42880:25;274:67877;4776:15;274:67877;42929:12;274:67877;;;-1:-1:-1;;;42929:37:26;;42960:4;274:67877;42929:37;;274:67877;-1:-1:-1;;;;;274:67877:26;;;;;42929:37;;;274:67877;;;;42929:37;;;;;;;274:67877;42929:37;;;274:67877;;42986:11;274:67877;42980:17;;42976:86;;274:67877;-1:-1:-1;;;;;;;;;;;274:67877:26;;;4883:15;274:67877;;43076:35;274:67877;3068:21:25;274:67877:26;;42976:86;274:67877;;-1:-1:-1;;;43013:38:26;;43035:10;274:67877;43013:38;;274:67877;;;;;;;;;;;;;;;;;-1:-1:-1;;43013:38:26;;;;;;;-1:-1:-1;;;;;;;;;;;43013:38:26;;42976:86;43013:38;;;;;;;;;;;;;:::i;:::-;;;42976:86;;42929:37;;;;;;;;;;;;;;;;:::i;:::-;;;274:67877;;;;;42929:37;;;;;;;;4879:107;274:67877;;-1:-1:-1;;;4953:22:26;;274:67877;;4953:22;4772:98;274:67877;;-1:-1:-1;;;4843:16:26;;274:67877;;4843:16;274:67877;;;;;;-1:-1:-1;;274:67877:26;;;;920:70:28;;:::i;:::-;4624:15:26;274:67877;;;;;;;;;;;4624:44;4620:95;;38723:19;274:67877;;;;38722:20;38718:78;;38877:23;274:67877;;;38852:24;274:67877;;;;;;38852:86;274:67877;38822:15;:116;38805:195;;274:67877;;;;;;;38723:19;274:67877;;;4624:15;274:67877;39104:41;38852:24;274:67877;;38822:15;274:67877;;39104:41;274:67877;38805:195;274:67877;;-1:-1:-1;;;38970:19:26;;274:67877;;38970:19;38718:78;274:67877;;-1:-1:-1;;;38765:20:26;;274:67877;;38765:20;274:67877;;;;;;-1:-1:-1;;274:67877:26;;;;;;;;64810:21;274:67877;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;:::i;:::-;2466:103:25;;:::i;:::-;274:67877:26;4624:15;274:67877;;;;;;;;;;4624:44;;4620:95;;5069:25;5050:44;;5046:104;;274:67877;21186:42;;;;;:102;;;;274:67877;21169:177;;;21360:8;274:67877;21360:12;21356:299;;274:67877;;;;;;;;;;;;;21700:20;274:67877;;;;;;21822:10;274:67877;;21805:16;274:67877;;;;;;;;21771:20;274:67877;;;;21895:12;;;274:67877;-1:-1:-1;;;;;274:67877:26;;;;21895:26;21891:80;;22036:16;;;274:67877;;;;;;;;;;;;;;22036:67;22019:155;;274:67877;;;;;;;;;;22251:21;22235:37;;:91;;;;;274:67877;22235:145;;;;274:67877;22218:224;;;;22474:11;274:67877;;4624:15;274:67877;;;;;4624:15;274:67877;;;;;;;22550:3;22514:40;274:67877;;22514:40;;:::i;:::-;22634:20;274:67877;22634:20;;274:67877;;;22634:31;;;22630:108;;274:67877;22810:15;274:67877;22810:15;:30;274:67877;;;22810:30;:::i;:::-;274:67877;;22922:295;;274:67877;22474:11;274:67877;23227:19;:34;5069:25;23227:19;;274:67877;;;23227:34;:::i;:::-;274:67877;;;;;23334:31;;;23330:117;;274:67877;;;;;;;;;;;;;;;;;21895:12;23543:32;;:86;;;;;274:67877;23543:149;;;;;274:67877;23542:201;;;;274:67877;23542:249;;;;274:67877;23525:529;;;;274:67877;24116:15;;;;;;24112:137;;274:67877;;;24264:59;274:67877;;;21360:8;274:67877;;;21822:10;;274:67877;;;;;;;;;;;;;;;24264:59;22251:21;274:67877;;24112:137;22036:16;274:67877;;;-1:-1:-1;;;24147:65:26;;21822:10;274:67877;24147:65;;274:67877;24193:4;274:67877;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;274:67877:26;24147:65;;;;;;;24264:59;24147:65;274:67877;24147:65;;;24112:137;;;;;;;;24147:65;;;;;;;;;;;;;:::i;:::-;;;;;23525:529;274:67877;;;23820:34;23816:106;;23525:529;274:67877;;21360:8;274:67877;;;;;;;;;;;23935:33;;;274:67877;;;;;;;;;;;;;;;;;21360:8;274:67877;;;;;;;;;;;;;;24003:19;274:67877;;;;;;;;;;;;;23525:529;;;;;;;23816:106;-1:-1:-1;;274:67877:26;;;;;23816:106;;;;23542:249;274:67877;23759:32;;;-1:-1:-1;23542:249:26;;;;:201;22474:11;274:67877;-1:-1:-1;23709:34:26;;-1:-1:-1;23542:201:26;;;23543:149;274:67877;;;;;23665:27;23649:43;;23543:149;;;;:86;274:67877;;-1:-1:-1;274:67877:26;23595:34;;;-1:-1:-1;23543:86:26;;23330:117;23405:31;;23381:55;23405:31;;;:::i;:::-;23381:55;;:::i;:::-;274:67877;;23330:117;;;22922:295;22973:25;;;;274:67877;;23040:23;;;;:85;;;;;;23082:23;;;;:::i;:::-;23040:85;;274:67877;23153:53;;;;;274:67877;23153:53;22922:295;;;23153:53;23183:23;;;:::i;:::-;23153:53;;23040:85;274:67877;23040:85;;;22630:108;274:67877;22696:31;;;22681:46;22696:31;;;:::i;22681:46::-;22630:108;;;;22218:224;274:67877;;-1:-1:-1;;;22412:19:26;;274:67877;;22412:19;22235:145;274:67877;;;;;;22342:38;22235:145;;;;:91;-1:-1:-1;22036:16:26;22288:38;;;-1:-1:-1;274:67877:26;22235:91;;22019:155;274:67877;;-1:-1:-1;;;22135:28:26;;274:67877;;22135:28;21356:299;274:67877;;;21426:20;274:67877;;;;;;21490:7;274:67877;;;;;;;21392:15;:106;:184;;;;21356:299;21388:257;21356:299;21388:257;274:67877;;-1:-1:-1;;;21616:14:26;;274:67877;;21616:14;21392:184;274:67877;;;;21426:20;274:67877;;;;;;21536:40;274:67877;21392:15;21518:58;21392:184;;21186:102;21263:25;21244:44;;;;21186:102;;;274:67877;;;;;;-1:-1:-1;;274:67877:26;;;;;;;1185:19:28;274:67877:26;1185:19:28;274:67877:26;;;;;;;;;;1185:19:28;274:67877:26;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;:::i;:::-;;;-1:-1:-1;;;;;274:67877:26;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;274:67877:26;;;;;63330:23;274:67877;;;;;;;;;;;;;-1:-1:-1;;274:67877:26;;;;;;:::i;:::-;;;2466:103:25;;:::i;:::-;920:70:28;;:::i;:::-;274:67877:26;4776:15;274:67877;;;;;;;;;4776:44;;4772:98;;4901:18;274:67877;4922:8;274:67877;;;;;;;4883:15;:47;4879:107;;5069:25;5050:44;5046:104;;-1:-1:-1;;;;;274:67877:26;;;4487:18;4483:77;;42389:12;274:67877;;;;;;;;42389:37;;42420:4;274:67877;42389:37;;274:67877;;42389:37;;;274:67877;42389:37;;;;;;;;;;274:67877;42389:37;;;274:67877;42389:46;;42385:103;;274:67877;;-1:-1:-1;;;42497:33:26;;-1:-1:-1;;;;;274:67877:26;;;42497:33;;274:67877;;;;;;;;;;;;;;;;-1:-1:-1;;42497:33:26;;;;;;;42545:28;42497:33;;;274:67877;-1:-1:-1;;274:67877:26;;;-1:-1:-1;;;;;274:67877:26;;;;;;;;;;;;;;;;;42545:28;274:67877;42497:33;;;;;;-1:-1:-1;42497:33:26;;;;;;:::i;:::-;;;;;;42385:103;274:67877;;-1:-1:-1;;;42458:19:26;;274:67877;;42458:19;42389:37;;;;;;;;;;;;;;;;;;:::i;:::-;;;274:67877;;;;;;;42389:37;;;;;;;;274:67877;;;;;;;;;;;;;;;:::i;:::-;;4624:15;274:67877;;;;;;;;;4624:44;;4620:95;;5069:25;;5050:44;;5046:104;;11411:10;274:67877;;11394:16;274:67877;;;;;;;;11360:20;274:67877;;;;;;;11446:23;274:67877;11446:23;;274:67877;;;11446:28;;11442:82;;274:67877;;11563:24;274:67877;;;;;11708:712;;;;;;11743:12;;;;;;274:67877;;;;;;;;;;;;;;12435:119;;11759:20;11743:36;11759:20;;-1:-1:-1;274:67877:26;;-1:-1:-1;;274:67877:26;;;;;11739:223;274:67877;;;;11411:10;274:67877;;;;;;;;;;;;;;;;;;;;;;;12435:119;274:67877;11739:223;-1:-1:-1;;274:67877:26;;;;;11739:223;;11708:712;11992:13;;;;;274:67877;12024:13;274:67877;;12043:13;;274:67877;;;12019:169;12039:24;;;;;;-1:-1:-1;;;;;274:67877:26;;;;;;;12224:39;12201:62;12277:17;12224:39;12201:20;12224:39;11360:20;12224:39;12435:119;12224:39;;:::i;:::-;274:67877;;5069:25;274:67877;;;;;-1:-1:-1;;;;;274:67877:26;;12201:20;;:::i;:62::-;12277:17;:::i;:::-;11411:10;274:67877;;11394:16;274:67877;;;;;;;;;12387:22;274:67877;;;12310:74;12387:22;274:67877;;;;;;;;11708:712;;12065:3;12092:16;;;;:::i;:::-;274:67877;;;;;;-1:-1:-1;;;;;274:67877:26;11411:10;12092:30;12088:86;;12065:3;;274:67877;12024:13;;12088:86;12146:9;-1:-1:-1;12146:9:26;12088:86;;274:67877;;;;;;-1:-1:-1;;274:67877:26;;;;;4624:15;274:67877;;;;;;;;;4624:44;;4620:95;;5069:25;5050:44;5046:104;;55550:8;274:67877;;;;;;55529:20;274:67877;;;;;;55573:7;274:67877;;;;;;;55499:15;:82;:156;;;;274:67877;55482:242;;274:67877;55803:12;;:134;;;274:67877;55786:210;;56006:9;;274:67877;;56006:9;:::i;:::-;274:67877;;;;56120:10;274:67877;;56093:26;274:67877;;;;;;;;;;;;;;56093:53;56089:198;274:67877;;;56814:39;56120:10;56814:39;56120:10;;274:67877;;56093:26;274:67877;;;;;;;;;;;;;;56717:20;55550:8;274:67877;;;;;56467:28;274:67877;;56524:42;274:67877;;;;;;;;;;;;;;;;;56524:18;274:67877;;;;;56524:42;:::i;:::-;55550:8;274:67877;;;55529:20;274:67877;;56576:53;:39;274:67877;;;56576:39;274:67877;;56576:53;;:::i;:::-;274:67877;;;;;56667:14;;56120:10;-1:-1:-1;;;;;274:67877:26;;;;;;;;56120:10;274:67877;;56738:16;274:67877;;;;;;;;;5069:25;274:67877;;;;56717:81;274:67877;56704:10;;274:67877;;;;56120:10;;;;56814:39;274:67877;;;;;;;;;;;;;;;;;;;;;56089:198;274:67877;;-1:-1:-1;;;56258:18:26;;274:67877;;56258:18;55786:210;274:67877;;-1:-1:-1;;;55969:16:26;;274:67877;;55969:16;55803:134;55870:10;;274:67877;;55853:16;274:67877;;;;;;;;55832:20;274:67877;;55832:95;274:67877;;;55832:95;274:67877;;;;;;;;;;;55831:106;55803:134;;55482:242;274:67877;;-1:-1:-1;;;55687:26:26;;274:67877;;55687:26;55499:156;274:67877;;;;55529:20;274:67877;;;;;;55499:15;55597:58;55499:156;;274:67877;;;;;;-1:-1:-1;;274:67877:26;;;;2466:103:25;;:::i;:::-;274:67877:26;57831:15;274:67877;;;;;;;;57850:25;57831:44;57850:25;57831:44;;;:92;;;;274:67877;57827:153;;;58005:8;274:67877;;;;;;;;58023:959;58058:3;274:67877;;58043:13;;;;;;274:67877;;;;;58104:20;274:67877;;;;;58141:19;58189;;;274:67877;;58189:42;274:67877;58211:20;;274:67877;;;58189:42;;:::i;:::-;58234:25;58189:70;274:67877;58234:25;;274:67877;;;58189:70;;:::i;:::-;58262:25;58189:98;58262:25;;;274:67877;;;58189:98;;:::i;:::-;58305:8;;274:67877;;;;58305:12;58301:487;57850:25;;;58441:26;274:67877;;;;;;58441:26;;58337:207;58382:3;274:67877;;-1:-1:-1;;274:67877:26;;;;;;;58363:17;;;;58426:44;274:67877;;;;;;;;;;;58426:44;;:::i;:::-;274:67877;;;;;;;;;;;;;;;;-1:-1:-1;;274:67877:26;;58341:20;;58363:17;;;;274:67877;58363:17;;;;;;;;;;;274:67877;58363:17;;;58301:487;274:67877;;;;;58028:13;;;;;;58301:487;58671:26;274:67877;58586:9;;;;;;;58671:26;;58582:192;58612:3;274:67877;;58597:13;;;;58656:44;58612:3;274:67877;;;;;;;;;;;58656:44;;:::i;:::-;274:67877;;;;;;;;;;;;58612:3;:::i;:::-;58586:9;;;58597:13;;;;274:67877;58597:13;;;;;;;;;;;;274:67877;58597:13;;58301:487;;57831:92;274:67877;57879:44;;;;57831:92;;;274:67877;;;;;;-1:-1:-1;;274:67877:26;;;;2466:103:25;;:::i;:::-;61552:10:26;274:67877;;61535:16;274:67877;;;;;;;;61501:20;274:67877;;;;;61602:25;;;274:67877;;;61696:12;;;61692:62;;274:67877;;;;;61803:12;274:67877;61825:12;;;;;274:67877;;;;-1:-1:-1;;;61803:44:26;;-1:-1:-1;;;;;274:67877:26;;;;61803:44;;274:67877;;;;;;;;;;;;;;;;;;;;61803:44;;;;;;;61862:38;61803:44;;;274:67877;-1:-1:-1;274:67877:26;;;;;;;;-1:-1:-1;;;;;274:67877:26;;;;;;;;;;;;;;;61862:38;274:67877;61803:44;;;274:67877;61803:44;274:67877;61803:44;;;;;;;:::i;:::-;;;;;61692:62;274:67877;;-1:-1:-1;;;61731:12:26;;274:67877;;61731:12;274:67877;;;;;;-1:-1:-1;;274:67877:26;;;;;;;;67598:25;274:67877;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;274:67877:26;;;;;;;;65583:25;274:67877;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;:::o;:::-;;;;-1:-1:-1;;;;;274:67877:26;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;-1:-1:-1;;;;;274:67877:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;-1:-1:-1;274:67877:26;;-1:-1:-1;274:67877:26;;-1:-1:-1;274:67877:26;;;;;;;;;;;;;;;;:::i;:::-;:::o;:::-;;;;;;;;;;;;-1:-1:-1;274:67877:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;:::o;:::-;-1:-1:-1;;274:67877:26;;;;;;;:::o;:::-;;;;;;;;;;:::o;:::-;28511:19;274:67877;;;;;;28511:19;-1:-1:-1;274:67877:26;;;;-1:-1:-1;274:67877:26;:::o;:::-;;;;;;;;;;;;;28511:19;274:67877;;;;28511:19;274:67877;;;;;;:::o;:::-;;;;;;;;-1:-1:-1;274:67877:26;;-1:-1:-1;274:67877:26;;;-1:-1:-1;274:67877:26;:::o;:::-;;;-1:-1:-1;;;274:67877:26;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::o;:::-;28511:19;274:67877;;;;;-1:-1:-1;;274:67877:26;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;28511:19;274:67877;:::o;:::-;;;;;;;;;;;;;;;;;;;-1:-1:-1;;274:67877:26;;;;;;;:::i;:::-;;:::o;:::-;;;;;;;;;;;;;;;;;;-1:-1:-1;274:67877:26;;-1:-1:-1;274:67877:26;;-1:-1:-1;274:67877:26;;;;;;;;;;;;;;;;:::i;:::-;;;-1:-1:-1;;;;;274:67877:26;;;;;;;;;;-1:-1:-1;274:67877:26;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;274:67877:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;:::o;:::-;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::o;48891:6311::-;49138:8;274:67877;;;-1:-1:-1;274:67877:26;49117:20;274:67877;;;-1:-1:-1;274:67877:26;;49161:7;274:67877;;;;;;;49087:15;:82;:181;;;;48891:6311;49070:257;;274:67877;;;;;;;;;;;;-1:-1:-1;274:67877:26;49511:28;274:67877;;;-1:-1:-1;274:67877:26;49592:10;-1:-1:-1;274:67877:26;49565:26;274:67877;;;-1:-1:-1;274:67877:26;;;;;-1:-1:-1;274:67877:26;;;;-1:-1:-1;274:67877:26;;-1:-1:-1;274:67877:26;;;;-1:-1:-1;274:67877:26;49653:14;49474:1;49653:14;;274:67877;;;;;;;;;49592:10;;;49639:28;49635:79;;49728:18;;;274:67877;;;;;49727:19;49723:73;;274:67877;;;;;49805:69;;274:67877;-1:-1:-1;274:67877:26;49921:16;274:67877;;;-1:-1:-1;274:67877:26;;-1:-1:-1;274:67877:26;49900:20;274:67877;;;49900:61;274:67877;-1:-1:-1;274:67877:26;49900:61;274:67877;;;;;;;;49728:18;49900:95;49883:179;;-1:-1:-1;;274:67877:26;;;;;50103:138;;274:67877;;;;;-1:-1:-1;274:67877:26;50413:18;274:67877;;;;-1:-1:-1;274:67877:26;;:::i;:::-;50453:15;-1:-1:-1;50483:13:26;-1:-1:-1;50516:3:26;274:67877;;50498:16;;;;;274:67877;;;;-1:-1:-1;274:67877:26;49511:28;274:67877;;;-1:-1:-1;274:67877:26;50597:8;;;;:::i;:::-;274:67877;-1:-1:-1;274:67877:26;;;;49728:18;274:67877;-1:-1:-1;274:67877:26;50556:63;274:67877;;50535:141;;50516:3;49474:1;274:67877;50483:13;;50535:141;50652:9;;49474:1;50652:9;;:::i;:::-;50535:141;;;;;50498:16;;;;;50851:51;50498:16;;274:67877;;;-1:-1:-1;274:67877:26;49117:20;274:67877;;50851:41;274:67877;-1:-1:-1;274:67877:26;50851:41;274:67877;50851:51;:::i;:::-;-1:-1:-1;50950:15:26;-1:-1:-1;51022:13:26;49474:1;274:67877;51041:8;274:67877;51017:167;51055:3;49474:1;274:67877;;;;;;49474:1;274:67877;;51037:16;;;;;274:67877;-1:-1:-1;274:67877:26;49900:20;274:67877;;;49900:61;274:67877;-1:-1:-1;274:67877:26;51078:30;274:67877;;;;;;;;49728:18;51078:52;51074:100;;51055:3;49474:1;274:67877;51022:13;;51074:100;51150:9;;49474:1;51150:9;;:::i;:::-;51074:100;;;;;51037:16;;;;;;;;;274:67877;;49138:8;274:67877;-1:-1:-1;274:67877:26;51397:25;274:67877;;;;-1:-1:-1;274:67877:26;;;51393:142;;51017:167;51573:17;;;;:::i;:::-;51600:21;-1:-1:-1;51645:13:26;49474:1;51678:3;51041:8;274:67877;49474:1;274:67877;;;;;;49474:1;274:67877;51660:16;;;;;274:67877;-1:-1:-1;274:67877:26;49900:20;274:67877;;;-1:-1:-1;274:67877:26;;49900:61;51765:12;;274:67877;;;;;;;;49728:18;51765:34;51761:349;;51678:3;;49474:1;274:67877;51645:13;;51761:349;50851:41;51823:19;274:67877;;51823:19;;;:30;;;51819:178;;51761:349;49474:1;52014:31;52063:32;52014:31;;;;;;:::i;:::-;274:67877;;52063:32;:::i;:::-;51761:349;;;;51819:178;49474:1;51895:30;51877:49;52063:32;51895:30;;;;52014:31;51895:30;;:::i;51877:49::-;51948:30;;51819:178;;;;;;;;51660:16;;;;;;;;;;274:67877;;52197:16;;52193:2603;;51640:480;-1:-1:-1;;;;;;;;54810:31:26;;54857:17;;;274:67877;;;49900:61;274:67877;;;;;-1:-1:-1;;;54898:46:26;;-1:-1:-1;;;;;274:67877:26;;;49728:18;54898:46;;274:67877;;;;;;;;;;;;;;;;;-1:-1:-1;;274:67877:26;54898:46;;;;;;;55011;54898;55011;54898;;;54806:390;-1:-1:-1;274:67877:26;;;;;;-1:-1:-1;;;;;274:67877:26;;;;;;;;;;;;;;;;;;;;;;;;;;;55011:46;;;;48891:6311::o;54898:46::-;;;274:67877;54898:46;274:67877;54898:46;;;;;;;:::i;:::-;;;;;54806:390;274:67877;;;50851:41;274:67877;;4776:15;274:67877;;;4776:15;274:67877;-1:-1:-1;;;;;;;;;;;274:67877:26;;;49087:15;274:67877;;55150:35;48891:6311::o;52193:2603::-;52352:105;;;;;;;;;;:18;;;:105;;;;;;;;-1:-1:-1;52516:2270:26;52554:3;274:67877;;52536:16;;;;;52861:8;;;;:::i;:::-;274:67877;-1:-1:-1;274:67877:26;49900:20;274:67877;;;;;;;52840:37;274:67877;-1:-1:-1;274:67877:26;52840:37;274:67877;;-1:-1:-1;274:67877:26;52785:29;274:67877;;;-1:-1:-1;274:67877:26;;-1:-1:-1;274:67877:26;52739:24;274:67877;;;49474:1;274:67877;-1:-1:-1;274:67877:26;52964:13;274:67877;:::i;:::-;53027:23;-1:-1:-1;52996:13:26;-1:-1:-1;53123:13:26;-1:-1:-1;53160:3:26;274:67877;;53138:20;;;;;-1:-1:-1;;;;;53278:12:26;;;;:::i;:::-;274:67877;;-1:-1:-1;274:67877:26;49921:16;274:67877;;;-1:-1:-1;274:67877:26;;-1:-1:-1;274:67877:26;49900:20;274:67877;;;-1:-1:-1;274:67877:26;;49900:61;53339:13;;274:67877;;;;;;;;49728:18;53339:35;53335:501;;53160:3;;49474:1;274:67877;53123:13;;53335:501;53402:7;;;;;;:::i;:::-;53468:20;;;;;:91;;;53335:501;53435:379;;;53634:21;;49728:18;49474:1;53634:21;;274:67877;53435:379;;53335:501;;;53435:379;53688:126;;;;;;53435:379;;49474:1;53435:379;;;53688:126;49728:18;53762:21;;;;274:67877;;49474:1;274:67877;;;;;52840:37;274:67877;;;;;;;53744:43;49474:1;53688:126;;53468:91;53538:21;49728:18;53538:21;;274:67877;53520:39;;53468:91;;53138:20;;;;;;;;;;;54055:16;53138:20;54055:16;;:::i;:::-;54100:95;:26;;;;;;:95;;;-1:-1:-1;54395:3:26;274:67877;;54373:20;;;;;-1:-1:-1;;;;;54514:12:26;;;;:::i;:::-;274:67877;;-1:-1:-1;274:67877:26;49921:16;274:67877;;;-1:-1:-1;274:67877:26;;-1:-1:-1;274:67877:26;49900:20;274:67877;;;-1:-1:-1;274:67877:26;;49900:61;54575:14;;274:67877;;;;;;;;49728:18;54575:36;54571:183;;54395:3;;49474:1;274:67877;54358:13;;54571:183;54639:22;49474:1;54639:22;;49728:18;54699:32;54639:22;;:34;274:67877;;;54639:34;:::i;54699:32::-;54571:183;;;;54373:20;-1:-1:-1;54373:20:26;;;;;;-1:-1:-1;54373:20:26;;-1:-1:-1;54373:20:26;49474:1;274:67877;;;;52521:13;;54100:95;;;;;;52536:16;;;;;;;;;;52193:2603;;;;;;52352:105;52416:41;52428:28;;;;;:::i;52416:41::-;52352:105;;;;;;;51393:142;274:67877;;51456:21;274:67877;;51573:17;51501:23;274:67877;;-1:-1:-1;274:67877:26;;:::i;:::-;;;;51501:23;;:::i;:::-;51393:142;;;;50103:138;-1:-1:-1;50132:17:26;;;274:67877;;;;;;-1:-1:-1;;;;;274:67877:26;;;;;;;;;;;;50172:38;;274:67877;-1:-1:-1;274:67877:26;;-1:-1:-1;274:67877:26;;50172:38;274:67877;49805:69;274:67877;;-1:-1:-1;;;49847:16:26;;49728:18;;49847:16;49723:73;274:67877;;-1:-1:-1;;;49769:16:26;;49728:18;;49769:16;49635:79;274:67877;;-1:-1:-1;;;49690:13:26;;;;;49070:257;274:67877;;-1:-1:-1;;;49300:16:26;;;;;49087:181;274:67877;;-1:-1:-1;274:67877:26;49117:20;274:67877;;;-1:-1:-1;274:67877:26;;49260:7;274:67877;;;;;;;49087:15;49185:83;;49087:181;;2575:307:25;1899:1;2702:7;274:67877:26;2702:18:25;2698:86;;1899:1;2702:7;274:67877:26;2575:307:25:o;2698:86::-;274:67877:26;;-1:-1:-1;;;2743:30:25;;;;;1920:174:28;1072:10;274:67877:26;-1:-1:-1;;;;;274:67877:26;735:10:24;1983:27:28;1979:109;;1920:174::o;1979:109::-;274:67877:26;;-1:-1:-1;;;2033:44:28;;735:10:24;2033:44:28;;;274:67877:26;;;2033:44:28;2100:207;2196:10;274:67877:26;;-1:-1:-1;;;;;274:67877:26;;;-1:-1:-1;;;;;;274:67877:26;;;;;;;;;2256:44:28;;2196:10;2256:44;2100:207::o;34390:310:26:-;-1:-1:-1;274:67877:26;34496:20;274:67877;;;-1:-1:-1;274:67877:26;;34478:15;;:56;:151;;;;;34390:310;34461:233;;;34390:310::o;34461:233::-;274:67877;;-1:-1:-1;;;34661:22:26;;;;;34478:151;274:67877;;34622:6;274:67877;;;;;;;34478:15;34550:79;34478:151;;;34817:178;-1:-1:-1;274:67877:26;34890:20;274:67877;;34890:37;274:67877;-1:-1:-1;274:67877:26;34890:37;274:67877;34890:49;34886:103;;34817:178::o;34886:103::-;274:67877;;-1:-1:-1;;;34962:16:26;;;;;39283:324;;-1:-1:-1;39388:13:26;-1:-1:-1;39423:3:26;274:67877;;39403:18;;;;;39460:10;;;;:::i;:::-;274:67877;;39446:10;274:67877;;;;;;-1:-1:-1;;;;;274:67877:26;39446:24;39442:72;;39423:3;274:67877;;39388:13;;39442:72;39490:9;-1:-1:-1;39490:9:26;39442:72;;39403:18;;;274:67877;;;;;;;;;;;39587:11;39550:27;39533:14;39550:27;39533:44;39550:27;;;:::i;:::-;274:67877;;;39533:14;;;:::i;:::-;274:67877;;-1:-1:-1;;;;;274:67877:26;;;;;;;;;;;;;;;;;;;;;;;;;;",
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
    '{"compiler":{"version":"0.8.23+commit.f704f362"},"language":"Solidity","output":{"abi":[{"inputs":[{"internalType":"address","name":"_paymentToken","type":"address"},{"internalType":"address","name":"owner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"AlreadyAdded","type":"error"},{"inputs":[],"name":"AlreadyClaimed","type":"error"},{"inputs":[],"name":"AlreadySet","type":"error"},{"inputs":[],"name":"AlreadySubmitted","type":"error"},{"inputs":[],"name":"AmountZero","type":"error"},{"inputs":[],"name":"CannotBeZeroAddress","type":"error"},{"inputs":[],"name":"CannotEmergencyRefund","type":"error"},{"inputs":[],"name":"ClaimNoOccured","type":"error"},{"inputs":[],"name":"ClaimantNotValidMember","type":"error"},{"inputs":[],"name":"CommunityIsCollapsed","type":"error"},{"inputs":[],"name":"CoverageFullfilled","type":"error"},{"inputs":[],"name":"DFNotMet","type":"error"},{"inputs":[],"name":"DelayInitiated","type":"error"},{"inputs":[],"name":"EmergencyGracePeriod","type":"error"},{"inputs":[],"name":"InEmergency","type":"error"},{"inputs":[],"name":"InValidClaim","type":"error"},{"inputs":[],"name":"InsufficientFunds","type":"error"},{"inputs":[],"name":"InvalidMember","type":"error"},{"inputs":[],"name":"InvalidSubGroup","type":"error"},{"inputs":[],"name":"ManuallyCollapsed","type":"error"},{"inputs":[],"name":"NeedMoreSuccessor","type":"error"},{"inputs":[],"name":"NoClaimOccured","type":"error"},{"inputs":[],"name":"NoValiddMember","type":"error"},{"inputs":[],"name":"NotAssignedYet","type":"error"},{"inputs":[],"name":"NotClaimSubmittionWindow","type":"error"},{"inputs":[],"name":"NotClaimWindow","type":"error"},{"inputs":[],"name":"NotClaimant","type":"error"},{"inputs":[],"name":"NotDefectWindow","type":"error"},{"inputs":[],"name":"NotFirstSuccessor","type":"error"},{"inputs":[],"name":"NotHandingOver","type":"error"},{"inputs":[],"name":"NotInAssigned","type":"error"},{"inputs":[],"name":"NotInAssignmentSuccessfull","type":"error"},{"inputs":[],"name":"NotInCovereged","type":"error"},{"inputs":[],"name":"NotInDefOrFra","type":"error"},{"inputs":[],"name":"NotInEmergency","type":"error"},{"inputs":[],"name":"NotInInDefault","type":"error"},{"inputs":[],"name":"NotInIniOrDef","type":"error"},{"inputs":[],"name":"NotInInitilization","type":"error"},{"inputs":[],"name":"NotInInjectionWindow","type":"error"},{"inputs":[],"name":"NotInManualCollaps","type":"error"},{"inputs":[],"name":"NotInSuccessorList","type":"error"},{"inputs":[],"name":"NotIncluded","type":"error"},{"inputs":[],"name":"NotPaidInvalid","type":"error"},{"inputs":[],"name":"NotPayWindow","type":"error"},{"inputs":[],"name":"NotRefundWindow","type":"error"},{"inputs":[],"name":"NotReorged","type":"error"},{"inputs":[],"name":"NotValidMember","type":"error"},{"inputs":[],"name":"NotWhiteListed","type":"error"},{"inputs":[],"name":"NotWhitelistWindow","type":"error"},{"inputs":[],"name":"OutOfTheCommunity","type":"error"},{"inputs":[],"name":"PrevPeriodNotEnded","type":"error"},{"inputs":[],"name":"ReentrancyGuardReentrantCall","type":"error"},{"inputs":[],"name":"SGMNotFullfilled","type":"error"},{"inputs":[],"name":"SamePeriod","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"SecretaryInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"SecretaryUnauthorizedSecretary","type":"error"},{"inputs":[],"name":"TimeNotPassed","type":"error"},{"inputs":[],"name":"TurningTimePassed","type":"error"},{"inputs":[],"name":"WLCAvailable","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"member","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"}],"name":"AddedToCommunity","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"pEndTime","type":"uint256"}],"name":"AdditionalDayAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"member","type":"address"},{"indexed":false,"internalType":"address","name":"approver","type":"address"},{"indexed":false,"internalType":"uint256","name":"groupId","type":"uint256"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApproveNewGroupMember","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"member","type":"address"},{"indexed":false,"internalType":"uint256","name":"groupId","type":"uint256"},{"indexed":false,"internalType":"bool","name":"joined","type":"bool"}],"name":"ApprovedGroupAssignment","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"member","type":"address"},{"indexed":false,"internalType":"uint256","name":"groupId","type":"uint256"},{"indexed":false,"internalType":"bool","name":"isReOrging","type":"bool"}],"name":"AssignedToSubGroup","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"member","type":"address"},{"indexed":false,"internalType":"uint256","name":"claimId","type":"uint256"}],"name":"ClaimSubmitted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"cId","type":"uint256"}],"name":"ClaimWhiteListed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"collapsedAt","type":"uint256"}],"name":"CommunityCollapsed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"coverage","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"basePremium","type":"uint256"}],"name":"CoverageUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"coverage","type":"uint256"}],"name":"DefaultStateInitiatedAndCoverageSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"emergencyStartedAt","type":"uint256"}],"name":"EmergencyBegan","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyPayment","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"secretary","type":"address"}],"name":"EmergencyhandOverSecretary","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"member","type":"address"},{"indexed":false,"internalType":"uint256","name":"groupId","type":"uint256"}],"name":"ExitedFromSubGroup","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"claimant","type":"address"},{"indexed":false,"internalType":"uint256","name":"claimId","type":"uint256"}],"name":"ForfeitClaim","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"claimant","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"cId","type":"uint256"}],"name":"FundClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"FundInjected","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"member","type":"address"},{"indexed":false,"internalType":"uint256","name":"paidAmount","type":"uint256"}],"name":"JoinedToCommunity","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"member","type":"address"},{"indexed":false,"internalType":"uint256","name":"gId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"mId","type":"uint256"}],"name":"LeavedFromGroup","type":"event"},{"anonymous":false,"inputs":[],"name":"ManualCollapseCancelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"timee","type":"uint256"}],"name":"ManualCollapsedCancelled","type":"event"},{"anonymous":false,"inputs":[],"name":"ManualCollapsedHappenend","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"member","type":"address"},{"indexed":false,"internalType":"uint256","name":"periodId","type":"uint256"}],"name":"MemberDefected","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"member","type":"address"},{"indexed":false,"internalType":"enum TandaPayEvents.MemberStatus","name":"newStatus","type":"uint8"}],"name":"MemberStatusUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"periodId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"coverage","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"baseAmount","type":"uint256"}],"name":"NextPeriodInitiated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"member","type":"address"},{"indexed":false,"internalType":"uint256","name":"periodId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"bool","name":"usingATW","type":"bool"}],"name":"PremiumPaid","type":"event"},{"anonymous":false,"inputs":[],"name":"RefundIssued","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"member","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RefundWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"nSecretary","type":"address"}],"name":"SecretaryAccepted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"prefferedSuccessr","type":"address"}],"name":"SecretaryHandOverEnabled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address[]","name":"successors","type":"address[]"}],"name":"SecretarySuccessorsDefined","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"SecretaryTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"totalAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"pmAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"fromSecrretary","type":"uint256"}],"name":"ShortFallDivided","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"}],"name":"SubGroupCreated","type":"event"},{"inputs":[],"name":"AdvanceToTheNextPeriod","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"EmergencyStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdrawal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"addAdditionalDay","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_member","type":"address"}],"name":"addToCommunity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_sId","type":"uint256"},{"internalType":"uint256","name":"_nMemberId","type":"uint256"},{"internalType":"bool","name":"_accepted","type":"bool"}],"name":"approveNewSubgroupMember","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_shouldJoin","type":"bool"}],"name":"approveSubGroupAssignment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_member","type":"address"},{"internalType":"uint256","name":"_sId","type":"uint256"},{"internalType":"bool","name":"_isReorging","type":"bool"}],"name":"assignToSubGroup","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"beginEmergency","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cancelManualCollapsBySecretary","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"createSubGroup","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"defects","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_successors","type":"address[]"}],"name":"defineSecretarySuccessor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"divideShortFall","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_eSecretary","type":"address"}],"name":"emergencyHandOverSecretary","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyRefund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endEmergency","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"exitSubGroup","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getBasePremium","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCommunityState","outputs":[{"internalType":"enum TandaPay.CommunityStates","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentClaimId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentMemberId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentSubGroupId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getEmergencyHandOverStartedPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getEmergencyHandoverStartedAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getEmergencySecretaries","outputs":[{"internalType":"address[2]","name":"","type":"address[2]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getHandoverStartedAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pId","type":"uint256"}],"name":"getIsAMemberDefectedInPeriod","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pId","type":"uint256"}],"name":"getIsAllMemberNotPaidInPeriod","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getIsHandingOver","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getIsManuallyCollapsed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getManuallyCollapsedPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_memberId","type":"uint256"},{"internalType":"uint256","name":"_pId","type":"uint256"}],"name":"getMemberInfoFromId","outputs":[{"components":[{"internalType":"uint256","name":"memberId","type":"uint256"},{"internalType":"uint256","name":"associatedGroupId","type":"uint256"},{"internalType":"address","name":"member","type":"address"},{"internalType":"uint256","name":"cEscrowAmount","type":"uint256"},{"internalType":"uint256","name":"ISEscorwAmount","type":"uint256"},{"internalType":"uint256","name":"pendingRefundAmount","type":"uint256"},{"internalType":"uint256","name":"availableToWithdraw","type":"uint256"},{"internalType":"bool","name":"eligibleForCoverageInPeriod","type":"bool"},{"internalType":"bool","name":"isPremiumPaid","type":"bool"},{"internalType":"uint256","name":"idToQuedRefundAmount","type":"uint256"},{"internalType":"enum TandaPayEvents.MemberStatus","name":"status","type":"uint8"},{"internalType":"enum TandaPay.AssignmentStatus","name":"assignment","type":"uint8"}],"internalType":"struct TandaPay.DemoMemberInfo","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_member","type":"address"}],"name":"getMemberToMemberId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_member","type":"address"},{"internalType":"uint256","name":"_pId","type":"uint256"}],"name":"getMemberToMemberInfo","outputs":[{"components":[{"internalType":"uint256","name":"memberId","type":"uint256"},{"internalType":"uint256","name":"associatedGroupId","type":"uint256"},{"internalType":"address","name":"member","type":"address"},{"internalType":"uint256","name":"cEscrowAmount","type":"uint256"},{"internalType":"uint256","name":"ISEscorwAmount","type":"uint256"},{"internalType":"uint256","name":"pendingRefundAmount","type":"uint256"},{"internalType":"uint256","name":"availableToWithdraw","type":"uint256"},{"internalType":"bool","name":"eligibleForCoverageInPeriod","type":"bool"},{"internalType":"bool","name":"isPremiumPaid","type":"bool"},{"internalType":"uint256","name":"idToQuedRefundAmount","type":"uint256"},{"internalType":"enum TandaPayEvents.MemberStatus","name":"status","type":"uint8"},{"internalType":"enum TandaPay.AssignmentStatus","name":"assignment","type":"uint8"}],"internalType":"struct TandaPay.DemoMemberInfo","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPaymentToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPeriodId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pId","type":"uint256"},{"internalType":"uint256","name":"_cId","type":"uint256"}],"name":"getPeriodIdToClaimIdToClaimInfo","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"claimant","type":"address"},{"internalType":"uint256","name":"claimAmount","type":"uint256"},{"internalType":"uint256","name":"SGId","type":"uint256"},{"internalType":"bool","name":"isWhitelistd","type":"bool"},{"internalType":"bool","name":"isClaimed","type":"bool"}],"internalType":"struct TandaPay.ClaimInfo","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pId","type":"uint256"}],"name":"getPeriodIdToClaimIds","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pId","type":"uint256"}],"name":"getPeriodIdToDefectorsId","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pId","type":"uint256"}],"name":"getPeriodIdToManualCollapse","outputs":[{"components":[{"internalType":"uint256","name":"startedAT","type":"uint256"},{"internalType":"uint256","name":"availableToTurnTill","type":"uint256"}],"internalType":"struct TandaPay.ManualCollapse","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pId","type":"uint256"}],"name":"getPeriodIdToPeriodInfo","outputs":[{"components":[{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"willEndAt","type":"uint256"},{"internalType":"uint256[]","name":"claimIds","type":"uint256[]"},{"internalType":"uint256","name":"coverage","type":"uint256"},{"internalType":"uint256","name":"totalPaid","type":"uint256"}],"internalType":"struct TandaPay.PeriodInfo","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pId","type":"uint256"}],"name":"getPeriodIdWhiteListedClaims","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSecretarySuccessors","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_sId","type":"uint256"}],"name":"getSubGroupIdToSubGroupInfo","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address[]","name":"members","type":"address[]"},{"internalType":"bool","name":"isValid","type":"bool"}],"internalType":"struct TandaPay.SubGroupInfo","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalCoverage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getUpcomingSecretary","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_prefferedSuccessor","type":"address"}],"name":"handoverSecretary","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_coverage","type":"uint256"}],"name":"initiatDefaultStateAndSetCoverage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"injectFunds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_shouldTransfer","type":"bool"}],"name":"issueRefund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"joinToCommunity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"leaveFromASubGroup","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"manualCollapsBySecretary","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_useFromATW","type":"bool"}],"name":"payPremium","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"secretary","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"secretaryAcceptance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"submitClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_coverage","type":"uint256"}],"name":"updateCoverageAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"updateMemberStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cId","type":"uint256"}],"name":"whitelistClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"isForfeit","type":"bool"}],"name":"withdrawClaimFund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawRefund","outputs":[],"stateMutability":"nonpayable","type":"function"}],"devdoc":{"errors":{"ReentrancyGuardReentrantCall()":[{"details":"Unauthorized reentrant call."}]},"kind":"dev","methods":{"AdvanceToTheNextPeriod()":{"details":"Advances the community to the next period, resetting the state and recalculating premiums if necessary."},"EmergencyWithdrawal(address,uint256)":{"details":"Secretary sends out emergency funding","params":{"amount":"amount of tokens to send","to":"the address to send emergency fund"}},"addAdditionalDay()":{"details":"Extends the current period by adding an extra day."},"addToCommunity(address)":{"details":"Adds a new member to the community","params":{"_member":"address of new member to add"}},"approveNewSubgroupMember(uint256,uint256,bool)":{"details":"Allows existing subgroup members to approve or reject a new member\'s assignment to their subgroup.","params":{"_accepted":"true if accepted, false if rejecet","_nMemberId":"new member id","_sId":"subgroup id"}},"approveSubGroupAssignment(bool)":{"details":"Allows a member to approve or reject their assignment to a subgroup.","params":{"_shouldJoin":"true to approve assignment, false to reject"}},"assignToSubGroup(address,uint256,bool)":{"details":"assign a member to a subgroup, with reorg option","params":{"_isReorging":"flag that decides if this operation is part of a reorganization process","_member":"address of new member to add","_sId":"subgroup Id"}},"beginEmergency()":{"details":"Secretary enters emergency state"},"cancelManualCollapsBySecretary()":{"details":"Cancels an ongoing manual collapse if the conditions allow, returning the community to the DEFAULT state."},"createSubGroup()":{"details":"creates new subgroup"},"defects()":{"details":"Allows a member to defect from the community during the defect window, altering their status and potentially affecting the community\'s state."},"defineSecretarySuccessor(address[])":{"details":"Defines a list of successor candidates for the Secretary role based on the community\'s size.only callable by secretary","params":{"_successors":"list of successors to the secretary"}},"divideShortFall()":{"details":"Divides any shortfall in coverage among the valid members during the injection window."},"emergencyHandOverSecretary(address)":{"details":"Facilitates an emergency handover of the Secretary role when two designated successors agree.","params":{"_eSecretary":"emergency successor address"}},"emergencyRefund()":{"details":"emergency refund. Makes all funds refundable to members."},"endEmergency()":{"details":"Secretary Ends Emergency, collapses community"},"exitSubGroup()":{"details":"Allows a member to exit their assigned subgroup."},"getBasePremium()":{"details":"returns the base premium"},"getCommunityState()":{"details":"returns community states"},"getCurrentClaimId()":{"details":"returns the most recent claim Id"},"getCurrentMemberId()":{"details":"returns the most recent memberId"},"getCurrentSubGroupId()":{"details":"returns the most recent subGroupId"},"getIsAMemberDefectedInPeriod(uint256)":{"details":"returns flag if member has defected at a give period","params":{"_pId":"period Id"}},"getIsAllMemberNotPaidInPeriod(uint256)":{"details":"returns flag whether all members in a period have paid","params":{"_pId":"period Id"}},"getIsManuallyCollapsed()":{"details":"returns flag if community was manually collapsed"},"getManuallyCollapsedPeriod()":{"details":"returns the manually collapsed Period"},"getMemberToMemberId(address)":{"details":"returns the member Id","params":{"_member":"user address"}},"getMemberToMemberInfo(address,uint256)":{"details":"returns member info from address and member Id","params":{"_member":"user address","_pId":"member Id"}},"getPaymentToken()":{"details":"returns the address of the payment token"},"getPeriodId()":{"details":"returns the most recent period Id"},"getPeriodIdToClaimIdToClaimInfo(uint256,uint256)":{"details":"returns claim info based on period and claim Id","params":{"_cId":"claim Id (specific to period)","_pId":"period Id"}},"getPeriodIdToClaimIds(uint256)":{"details":"returns array of claim Ids per period","params":{"_pId":"period Id"}},"getPeriodIdToDefectorsId(uint256)":{"details":"returns array of defectors IDs per period","params":{"_pId":"period Id"}},"getPeriodIdToManualCollapse(uint256)":{"details":"returns Manual Collapse info per period ID","params":{"_pId":"period Id"}},"getPeriodIdToPeriodInfo(uint256)":{"details":"returns period information","params":{"_pId":"period Id"}},"getPeriodIdWhiteListedClaims(uint256)":{"details":"returns array of whitelisted claimIds per period","params":{"_pId":"period Id"}},"getSubGroupIdToSubGroupInfo(uint256)":{"details":"returns subgroup information","params":{"_sId":"id of the subgroup"}},"getTotalCoverage()":{"details":"returns the total coverage"},"handoverSecretary(address)":{"details":"Initiates the handover process for the Secretary role to a preferred successor.only callable by secretary","params":{"_prefferedSuccessor":"address to be the new secretary"}},"initiatDefaultStateAndSetCoverage(uint256)":{"details":"Transitions the community from INITIALIZATION to DEFAULT state and sets the total coverage amount.","params":{"_coverage":"amount of coverage"}},"injectFunds()":{"details":"Allows the Secretary to inject additional funds into the contract during the injection window to cover a shortfall."},"issueRefund(bool)":{"details":"Issues refunds to members during the refund window, optionally transferring the funds directly to the members.","params":{"_shouldTransfer":"whether refunds should be transferred to users or not"}},"joinToCommunity()":{"details":"allows members (msg.sender) to join the community"},"leaveFromASubGroup()":{"details":"Allows a member to leave their subgroup, resetting their status and adjusting the subgroup\'s validity."},"manualCollapsBySecretary()":{"details":"Allows the Secretary to manually collapse the community, transitioning it to the COLLAPSED state."},"payPremium(bool)":{"details":"Allows a member to pay their premium for the upcoming period, either from their available withdrawal balance or directly via transfer.","params":{"_useFromATW":"if true, pay from available balance, if false, must pay with token."}},"secretaryAcceptance()":{"details":"Allows a designated successor to accept the Secretary role, completing the handover process."},"submitClaim()":{"details":"Allows a member to submit a claim during the claim submission window."},"updateCoverageAmount(uint256)":{"details":"Updates the total coverage amount for the community and recalculates the base premium accordingly.only callable by secretary","params":{"_coverage":"amount of coverage to assign"}},"updateMemberStatus()":{"details":"Updates the status of all members based on their premium payment status and the current community state."},"whitelistClaim(uint256)":{"details":"Whitelists a claim during the designated whitelist window, making it eligible for further processing.","params":{"_cId":"the claim id"}},"withdrawClaimFund(bool)":{"details":"Allows a member to withdraw their claim fund, either fully or forfeiting it, depending on the provided flag.","params":{"isForfeit":"allows member to choose to leave their claim instead"}},"withdrawRefund()":{"details":"Allows a member to withdraw their available refund amount."}},"version":1},"userdoc":{"kind":"user","methods":{"AdvanceToTheNextPeriod()":{"notice":"only secretary can call"},"EmergencyWithdrawal(address,uint256)":{"notice":"only secretary can callcan only be called if 24 hours elapses post-emergency declaration"},"addAdditionalDay()":{"notice":"only secretary can call"},"addToCommunity(address)":{"notice":"only secretary can call"},"approveNewSubgroupMember(uint256,uint256,bool)":{"notice":"new member must have \\"REORGED\\" status"},"assignToSubGroup(address,uint256,bool)":{"notice":"only secretary can call"},"beginEmergency()":{"notice":"only secretary can call"},"cancelManualCollapsBySecretary()":{"notice":"only secretary can call"},"createSubGroup()":{"notice":"only secretary can call"},"defects()":{"notice":"defecting can only happen if a claim occured in the previous period"},"divideShortFall()":{"notice":"only secretary can call"},"endEmergency()":{"notice":"only secretary can callcan only be called if 24 hours elapses post-emergency declaration"},"getManuallyCollapsedPeriod()":{"notice":"the id of the period at which the community was collapsed"},"initiatDefaultStateAndSetCoverage(uint256)":{"notice":"Can only be called by secretary"},"injectFunds()":{"notice":"only secretary can call"},"joinToCommunity()":{"notice":"Can only join if community status is \\"DEFAULT\\""},"leaveFromASubGroup()":{"notice":"Removes the member from the subgroup, updates their eligibility and escrow amounts, and potentially invalidates the subgroup."},"manualCollapsBySecretary()":{"notice":"only secretary can call"},"payPremium(bool)":{"notice":"Validates the payment window, calculates the required payment, and updates the member\'s escrow amounts and eligibility for coverage in the next period."},"updateCoverageAmount(uint256)":{"notice":"can only update if community is not default or initializing"},"whitelistClaim(uint256)":{"notice":"only callable by secretary"}},"version":1}},"settings":{"compilationTarget":{"src/TandaPay.sol":"TandaPay"},"evmVersion":"shanghai","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":true,"runs":200},"remappings":[":@openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/",":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",":aave-v3-core/=lib/aave-v3-core/",":ds-test/=lib/solmate/lib/ds-test/src/",":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",":forge-std/=lib/forge-std/src/",":halmos-cheatcodes/=lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/",":openzeppelin-contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/",":openzeppelin-contracts/=lib/openzeppelin-contracts/",":solmate/=lib/solmate/src/"],"viaIR":true},"sources":{"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol":{"keccak256":"0xe06a3f08a987af6ad2e1c1e774405d4fe08f1694b67517438b467cecf0da0ef7","license":"MIT","urls":["bzz-raw://df6f0c459663c9858b6cba2cda1d14a7d05a985bed6d2de72bd8e78c25ee79db","dweb:/ipfs/QmeTTxZ7qVk9rjEv2R4CpCwdf8UMCcRqDNMvzNxHc3Fnn9"]},"lib/openzeppelin-contracts/contracts/utils/Context.sol":{"keccak256":"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2","license":"MIT","urls":["bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12","dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF"]},"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol":{"keccak256":"0x11a5a79827df29e915a12740caf62fe21ebe27c08c9ae3e09abe9ee3ba3866d3","license":"MIT","urls":["bzz-raw://3cf0c69ab827e3251db9ee6a50647d62c90ba580a4d7bbff21f2bea39e7b2f4a","dweb:/ipfs/QmZiKwtKU1SBX4RGfQtY7PZfiapbbu6SZ9vizGQD9UHjRA"]},"src/TandaPay.sol":{"keccak256":"0x5374a6df991edd05d5f2e8dc6236b455d42bbbe98d076dcb43bfebe62e5925cb","license":"MIT","urls":["bzz-raw://d4f6b2d43b9496c570314c6684bf5b41655b27675d7f32f5b2bfff8590bebf06","dweb:/ipfs/QmUNJSUKgSXbFLdxiKZ4znHfZWrnMnFuZ1TeE43v1pWqHK"]},"src/secretary.sol":{"keccak256":"0x2ac557d1de7cdc2a09329fa9db6669f2a968fa5ff0302adab6d015ede832d995","license":"MIT","urls":["bzz-raw://7c596bcf17ba59430f594f69059666db9da5ced373f7bcadf3f1e8fc2718f706","dweb:/ipfs/QmR3fNu1X8oJ2dVPE41Pq8ZrUNZ9mSesGSoMUSsRZyq4HT"]},"src/util/TandaPayErrors.sol":{"keccak256":"0x5185d070d308719c6f50db5cb43e8426720acedb0eb94c0c8a9fb953e914de64","license":"MIT","urls":["bzz-raw://cf510382857b2574e70f4a83137ed6640ee1f94177407186ad2500d3c4ff0400","dweb:/ipfs/QmbZmNrrmm2cDvAaLk18oQfYhkhZ3sTcV4SXZdeiheHY1G"]},"src/util/TandaPayEvents.sol":{"keccak256":"0xedd770ce9eeef0b0d30d3173acffd665f52275fb5a957ecb1b2eca9ea4f68f40","license":"MIT","urls":["bzz-raw://8166b02beac97bba80ef97dbb8d62e88f1999436675991aa607abed2eb75b61e","dweb:/ipfs/QmZqLzKseiZL3FmQGywNEZhJy757eNUNNaZkdyivoSyDxg"]}},"version":1}',
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
          "0x5374a6df991edd05d5f2e8dc6236b455d42bbbe98d076dcb43bfebe62e5925cb",
        urls: [
          "bzz-raw://d4f6b2d43b9496c570314c6684bf5b41655b27675d7f32f5b2bfff8590bebf06",
          "dweb:/ipfs/QmUNJSUKgSXbFLdxiKZ4znHfZWrnMnFuZ1TeE43v1pWqHK",
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
          "0xedd770ce9eeef0b0d30d3173acffd665f52275fb5a957ecb1b2eca9ea4f68f40",
        urls: [
          "bzz-raw://8166b02beac97bba80ef97dbb8d62e88f1999436675991aa607abed2eb75b61e",
          "dweb:/ipfs/QmZqLzKseiZL3FmQGywNEZhJy757eNUNNaZkdyivoSyDxg",
        ],
        license: "MIT",
      },
    },
    version: 1,
  },
  id: 26,
} as const;
