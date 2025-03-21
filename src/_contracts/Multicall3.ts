export const MultiCallInfo = {
  abi: [
    {
      type: "function",
      name: "aggregate",
      inputs: [
        {
          name: "calls",
          type: "tuple[]",
          internalType: "struct Multicall3.Call[]",
          components: [
            { name: "target", type: "address", internalType: "address" },
            { name: "callData", type: "bytes", internalType: "bytes" },
          ],
        },
      ],
      outputs: [
        { name: "blockNumber", type: "uint256", internalType: "uint256" },
        { name: "returnData", type: "bytes[]", internalType: "bytes[]" },
      ],
      stateMutability: "payable",
    },
    {
      type: "function",
      name: "aggregate3",
      inputs: [
        {
          name: "calls",
          type: "tuple[]",
          internalType: "struct Multicall3.Call3[]",
          components: [
            { name: "target", type: "address", internalType: "address" },
            { name: "allowFailure", type: "bool", internalType: "bool" },
            { name: "callData", type: "bytes", internalType: "bytes" },
          ],
        },
      ],
      outputs: [
        {
          name: "returnData",
          type: "tuple[]",
          internalType: "struct Multicall3.Result[]",
          components: [
            { name: "success", type: "bool", internalType: "bool" },
            { name: "returnData", type: "bytes", internalType: "bytes" },
          ],
        },
      ],
      stateMutability: "payable",
    },
    {
      type: "function",
      name: "aggregate3Value",
      inputs: [
        {
          name: "calls",
          type: "tuple[]",
          internalType: "struct Multicall3.Call3Value[]",
          components: [
            { name: "target", type: "address", internalType: "address" },
            { name: "allowFailure", type: "bool", internalType: "bool" },
            { name: "value", type: "uint256", internalType: "uint256" },
            { name: "callData", type: "bytes", internalType: "bytes" },
          ],
        },
      ],
      outputs: [
        {
          name: "returnData",
          type: "tuple[]",
          internalType: "struct Multicall3.Result[]",
          components: [
            { name: "success", type: "bool", internalType: "bool" },
            { name: "returnData", type: "bytes", internalType: "bytes" },
          ],
        },
      ],
      stateMutability: "payable",
    },
    {
      type: "function",
      name: "blockAndAggregate",
      inputs: [
        {
          name: "calls",
          type: "tuple[]",
          internalType: "struct Multicall3.Call[]",
          components: [
            { name: "target", type: "address", internalType: "address" },
            { name: "callData", type: "bytes", internalType: "bytes" },
          ],
        },
      ],
      outputs: [
        { name: "blockNumber", type: "uint256", internalType: "uint256" },
        { name: "blockHash", type: "bytes32", internalType: "bytes32" },
        {
          name: "returnData",
          type: "tuple[]",
          internalType: "struct Multicall3.Result[]",
          components: [
            { name: "success", type: "bool", internalType: "bool" },
            { name: "returnData", type: "bytes", internalType: "bytes" },
          ],
        },
      ],
      stateMutability: "payable",
    },
    {
      type: "function",
      name: "getBasefee",
      inputs: [],
      outputs: [{ name: "basefee", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getBlockHash",
      inputs: [
        { name: "blockNumber", type: "uint256", internalType: "uint256" },
      ],
      outputs: [
        { name: "blockHash", type: "bytes32", internalType: "bytes32" },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getBlockNumber",
      inputs: [],
      outputs: [
        { name: "blockNumber", type: "uint256", internalType: "uint256" },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getChainId",
      inputs: [],
      outputs: [{ name: "chainid", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getCurrentBlockCoinbase",
      inputs: [],
      outputs: [{ name: "coinbase", type: "address", internalType: "address" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getCurrentBlockDifficulty",
      inputs: [],
      outputs: [
        { name: "difficulty", type: "uint256", internalType: "uint256" },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getCurrentBlockGasLimit",
      inputs: [],
      outputs: [{ name: "gaslimit", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getCurrentBlockTimestamp",
      inputs: [],
      outputs: [
        { name: "timestamp", type: "uint256", internalType: "uint256" },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getEthBalance",
      inputs: [{ name: "addr", type: "address", internalType: "address" }],
      outputs: [{ name: "balance", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getLastBlockHash",
      inputs: [],
      outputs: [
        { name: "blockHash", type: "bytes32", internalType: "bytes32" },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "tryAggregate",
      inputs: [
        { name: "requireSuccess", type: "bool", internalType: "bool" },
        {
          name: "calls",
          type: "tuple[]",
          internalType: "struct Multicall3.Call[]",
          components: [
            { name: "target", type: "address", internalType: "address" },
            { name: "callData", type: "bytes", internalType: "bytes" },
          ],
        },
      ],
      outputs: [
        {
          name: "returnData",
          type: "tuple[]",
          internalType: "struct Multicall3.Result[]",
          components: [
            { name: "success", type: "bool", internalType: "bool" },
            { name: "returnData", type: "bytes", internalType: "bytes" },
          ],
        },
      ],
      stateMutability: "payable",
    },
    {
      type: "function",
      name: "tryBlockAndAggregate",
      inputs: [
        { name: "requireSuccess", type: "bool", internalType: "bool" },
        {
          name: "calls",
          type: "tuple[]",
          internalType: "struct Multicall3.Call[]",
          components: [
            { name: "target", type: "address", internalType: "address" },
            { name: "callData", type: "bytes", internalType: "bytes" },
          ],
        },
      ],
      outputs: [
        { name: "blockNumber", type: "uint256", internalType: "uint256" },
        { name: "blockHash", type: "bytes32", internalType: "bytes32" },
        {
          name: "returnData",
          type: "tuple[]",
          internalType: "struct Multicall3.Result[]",
          components: [
            { name: "success", type: "bool", internalType: "bool" },
            { name: "returnData", type: "bytes", internalType: "bytes" },
          ],
        },
      ],
      stateMutability: "payable",
    },
  ],
  bytecode: {
    object:
      "0x608060405234801561001057600080fd5b50610ee0806100206000396000f3fe6080604052600436106100f35760003560e01c80634d2301cc1161008a578063a8b0574e11610059578063a8b0574e1461025a578063bce38bd714610275578063c3077fa914610288578063ee82ac5e1461029b57600080fd5b80634d2301cc146101ec57806372425d9d1461022157806382ad56cb1461023457806386d516e81461024757600080fd5b80633408e470116100c65780633408e47014610191578063399542e9146101a45780633e64a696146101c657806342cbb15c146101d957600080fd5b80630f28c97d146100f8578063174dea711461011a578063252dba421461013a57806327e86d6e1461015b575b600080fd5b34801561010457600080fd5b50425b6040519081526020015b60405180910390f35b61012d610128366004610a85565b6102ba565b6040516101119190610bbe565b61014d610148366004610a85565b6104ef565b604051610111929190610bd8565b34801561016757600080fd5b50437fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0140610107565b34801561019d57600080fd5b5046610107565b6101b76101b2366004610c60565b610690565b60405161011193929190610cba565b3480156101d257600080fd5b5048610107565b3480156101e557600080fd5b5043610107565b3480156101f857600080fd5b50610107610207366004610ce2565b73ffffffffffffffffffffffffffffffffffffffff163190565b34801561022d57600080fd5b5044610107565b61012d610242366004610a85565b6106ab565b34801561025357600080fd5b5045610107565b34801561026657600080fd5b50604051418152602001610111565b61012d610283366004610c60565b61085a565b6101b7610296366004610a85565b610a1a565b3480156102a757600080fd5b506101076102b6366004610d18565b4090565b60606000828067ffffffffffffffff8111156102d8576102d8610d31565b60405190808252806020026020018201604052801561031e57816020015b6040805180820190915260008152606060208201528152602001906001900390816102f65790505b5092503660005b8281101561047757600085828151811061034157610341610d60565b6020026020010151905087878381811061035d5761035d610d60565b905060200281019061036f9190610d8f565b6040810135958601959093506103886020850185610ce2565b73ffffffffffffffffffffffffffffffffffffffff16816103ac6060870187610dcd565b6040516103ba929190610e32565b60006040518083038185875af1925050503d80600081146103f7576040519150601f19603f3d011682016040523d82523d6000602084013e6103fc565b606091505b50602080850191909152901515808452908501351761046d577f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260176024527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060445260846000fd5b5050600101610325565b508234146104e6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f4d756c746963616c6c333a2076616c7565206d69736d6174636800000000000060448201526064015b60405180910390fd5b50505092915050565b436060828067ffffffffffffffff81111561050c5761050c610d31565b60405190808252806020026020018201604052801561053f57816020015b606081526020019060019003908161052a5790505b5091503660005b8281101561068657600087878381811061056257610562610d60565b90506020028101906105749190610e42565b92506105836020840184610ce2565b73ffffffffffffffffffffffffffffffffffffffff166105a66020850185610dcd565b6040516105b4929190610e32565b6000604051808303816000865af19150503d80600081146105f1576040519150601f19603f3d011682016040523d82523d6000602084013e6105f6565b606091505b5086848151811061060957610609610d60565b602090810291909101015290508061067d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060448201526064016104dd565b50600101610546565b5050509250929050565b43804060606106a086868661085a565b905093509350939050565b6060818067ffffffffffffffff8111156106c7576106c7610d31565b60405190808252806020026020018201604052801561070d57816020015b6040805180820190915260008152606060208201528152602001906001900390816106e55790505b5091503660005b828110156104e657600084828151811061073057610730610d60565b6020026020010151905086868381811061074c5761074c610d60565b905060200281019061075e9190610e76565b925061076d6020840184610ce2565b73ffffffffffffffffffffffffffffffffffffffff166107906040850185610dcd565b60405161079e929190610e32565b6000604051808303816000865af19150503d80600081146107db576040519150601f19603f3d011682016040523d82523d6000602084013e6107e0565b606091505b506020808401919091529015158083529084013517610851577f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260176024527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060445260646000fd5b50600101610714565b6060818067ffffffffffffffff81111561087657610876610d31565b6040519080825280602002602001820160405280156108bc57816020015b6040805180820190915260008152606060208201528152602001906001900390816108945790505b5091503660005b82811015610a105760008482815181106108df576108df610d60565b602002602001015190508686838181106108fb576108fb610d60565b905060200281019061090d9190610e42565b925061091c6020840184610ce2565b73ffffffffffffffffffffffffffffffffffffffff1661093f6020850185610dcd565b60405161094d929190610e32565b6000604051808303816000865af19150503d806000811461098a576040519150601f19603f3d011682016040523d82523d6000602084013e61098f565b606091505b506020830152151581528715610a07578051610a07576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060448201526064016104dd565b506001016108c3565b5050509392505050565b6000806060610a2b60018686610690565b919790965090945092505050565b60008083601f840112610a4b57600080fd5b50813567ffffffffffffffff811115610a6357600080fd5b6020830191508360208260051b8501011115610a7e57600080fd5b9250929050565b60008060208385031215610a9857600080fd5b823567ffffffffffffffff811115610aaf57600080fd5b610abb85828601610a39565b90969095509350505050565b6000815180845260005b81811015610aed57602081850181015186830182015201610ad1565b81811115610aff576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600082825180855260208086019550808260051b84010181860160005b84811015610bb1578583037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe001895281518051151584528401516040858501819052610b9d81860183610ac7565b9a86019a9450505090830190600101610b4f565b5090979650505050505050565b602081526000610bd16020830184610b32565b9392505050565b600060408201848352602060408185015281855180845260608601915060608160051b870101935082870160005b82811015610c52577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa0888703018452610c40868351610ac7565b95509284019290840190600101610c06565b509398975050505050505050565b600080600060408486031215610c7557600080fd5b83358015158114610c8557600080fd5b9250602084013567ffffffffffffffff811115610ca157600080fd5b610cad86828701610a39565b9497909650939450505050565b838152826020820152606060408201526000610cd96060830184610b32565b95945050505050565b600060208284031215610cf457600080fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610bd157600080fd5b600060208284031215610d2a57600080fd5b5035919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81833603018112610dc357600080fd5b9190910192915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112610e0257600080fd5b83018035915067ffffffffffffffff821115610e1d57600080fd5b602001915036819003821315610a7e57600080fd5b8183823760009101908152919050565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc1833603018112610dc357600080fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa1833603018112610dc357600080fdfea2646970667358221220449a18ce35be1adaedc9fa8ac86170e8c0f9b35e4a63d7b367123a4743501ae564736f6c634300080c0033",
    sourceMap: "502:9107:19:-:0;;;;;;;;;;;;;;;;;;;",
    linkReferences: {},
  },
  deployedBytecode: {
    object:
      "0x6080604052600436106100f35760003560e01c80634d2301cc1161008a578063a8b0574e11610059578063a8b0574e1461025a578063bce38bd714610275578063c3077fa914610288578063ee82ac5e1461029b57600080fd5b80634d2301cc146101ec57806372425d9d1461022157806382ad56cb1461023457806386d516e81461024757600080fd5b80633408e470116100c65780633408e47014610191578063399542e9146101a45780633e64a696146101c657806342cbb15c146101d957600080fd5b80630f28c97d146100f8578063174dea711461011a578063252dba421461013a57806327e86d6e1461015b575b600080fd5b34801561010457600080fd5b50425b6040519081526020015b60405180910390f35b61012d610128366004610a85565b6102ba565b6040516101119190610bbe565b61014d610148366004610a85565b6104ef565b604051610111929190610bd8565b34801561016757600080fd5b50437fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0140610107565b34801561019d57600080fd5b5046610107565b6101b76101b2366004610c60565b610690565b60405161011193929190610cba565b3480156101d257600080fd5b5048610107565b3480156101e557600080fd5b5043610107565b3480156101f857600080fd5b50610107610207366004610ce2565b73ffffffffffffffffffffffffffffffffffffffff163190565b34801561022d57600080fd5b5044610107565b61012d610242366004610a85565b6106ab565b34801561025357600080fd5b5045610107565b34801561026657600080fd5b50604051418152602001610111565b61012d610283366004610c60565b61085a565b6101b7610296366004610a85565b610a1a565b3480156102a757600080fd5b506101076102b6366004610d18565b4090565b60606000828067ffffffffffffffff8111156102d8576102d8610d31565b60405190808252806020026020018201604052801561031e57816020015b6040805180820190915260008152606060208201528152602001906001900390816102f65790505b5092503660005b8281101561047757600085828151811061034157610341610d60565b6020026020010151905087878381811061035d5761035d610d60565b905060200281019061036f9190610d8f565b6040810135958601959093506103886020850185610ce2565b73ffffffffffffffffffffffffffffffffffffffff16816103ac6060870187610dcd565b6040516103ba929190610e32565b60006040518083038185875af1925050503d80600081146103f7576040519150601f19603f3d011682016040523d82523d6000602084013e6103fc565b606091505b50602080850191909152901515808452908501351761046d577f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260176024527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060445260846000fd5b5050600101610325565b508234146104e6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f4d756c746963616c6c333a2076616c7565206d69736d6174636800000000000060448201526064015b60405180910390fd5b50505092915050565b436060828067ffffffffffffffff81111561050c5761050c610d31565b60405190808252806020026020018201604052801561053f57816020015b606081526020019060019003908161052a5790505b5091503660005b8281101561068657600087878381811061056257610562610d60565b90506020028101906105749190610e42565b92506105836020840184610ce2565b73ffffffffffffffffffffffffffffffffffffffff166105a66020850185610dcd565b6040516105b4929190610e32565b6000604051808303816000865af19150503d80600081146105f1576040519150601f19603f3d011682016040523d82523d6000602084013e6105f6565b606091505b5086848151811061060957610609610d60565b602090810291909101015290508061067d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060448201526064016104dd565b50600101610546565b5050509250929050565b43804060606106a086868661085a565b905093509350939050565b6060818067ffffffffffffffff8111156106c7576106c7610d31565b60405190808252806020026020018201604052801561070d57816020015b6040805180820190915260008152606060208201528152602001906001900390816106e55790505b5091503660005b828110156104e657600084828151811061073057610730610d60565b6020026020010151905086868381811061074c5761074c610d60565b905060200281019061075e9190610e76565b925061076d6020840184610ce2565b73ffffffffffffffffffffffffffffffffffffffff166107906040850185610dcd565b60405161079e929190610e32565b6000604051808303816000865af19150503d80600081146107db576040519150601f19603f3d011682016040523d82523d6000602084013e6107e0565b606091505b506020808401919091529015158083529084013517610851577f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260176024527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060445260646000fd5b50600101610714565b6060818067ffffffffffffffff81111561087657610876610d31565b6040519080825280602002602001820160405280156108bc57816020015b6040805180820190915260008152606060208201528152602001906001900390816108945790505b5091503660005b82811015610a105760008482815181106108df576108df610d60565b602002602001015190508686838181106108fb576108fb610d60565b905060200281019061090d9190610e42565b925061091c6020840184610ce2565b73ffffffffffffffffffffffffffffffffffffffff1661093f6020850185610dcd565b60405161094d929190610e32565b6000604051808303816000865af19150503d806000811461098a576040519150601f19603f3d011682016040523d82523d6000602084013e61098f565b606091505b506020830152151581528715610a07578051610a07576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060448201526064016104dd565b506001016108c3565b5050509392505050565b6000806060610a2b60018686610690565b919790965090945092505050565b60008083601f840112610a4b57600080fd5b50813567ffffffffffffffff811115610a6357600080fd5b6020830191508360208260051b8501011115610a7e57600080fd5b9250929050565b60008060208385031215610a9857600080fd5b823567ffffffffffffffff811115610aaf57600080fd5b610abb85828601610a39565b90969095509350505050565b6000815180845260005b81811015610aed57602081850181015186830182015201610ad1565b81811115610aff576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600082825180855260208086019550808260051b84010181860160005b84811015610bb1578583037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe001895281518051151584528401516040858501819052610b9d81860183610ac7565b9a86019a9450505090830190600101610b4f565b5090979650505050505050565b602081526000610bd16020830184610b32565b9392505050565b600060408201848352602060408185015281855180845260608601915060608160051b870101935082870160005b82811015610c52577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa0888703018452610c40868351610ac7565b95509284019290840190600101610c06565b509398975050505050505050565b600080600060408486031215610c7557600080fd5b83358015158114610c8557600080fd5b9250602084013567ffffffffffffffff811115610ca157600080fd5b610cad86828701610a39565b9497909650939450505050565b838152826020820152606060408201526000610cd96060830184610b32565b95945050505050565b600060208284031215610cf457600080fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610bd157600080fd5b600060208284031215610d2a57600080fd5b5035919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81833603018112610dc357600080fd5b9190910192915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112610e0257600080fd5b83018035915067ffffffffffffffff821115610e1d57600080fd5b602001915036819003821315610a7e57600080fd5b8183823760009101908152919050565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc1833603018112610dc357600080fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa1833603018112610dc357600080fdfea2646970667358221220449a18ce35be1adaedc9fa8ac86170e8c0f9b35e4a63d7b367123a4743501ae564736f6c634300080c0033",
    sourceMap:
      "502:9107:19:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8696:120;;;;;;;;;;-1:-1:-1;8794:15:19;8696:120;;;160:25:28;;;148:2;133:18;8696:120:19;;;;;;;;5771:1961;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;1166:534::-;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;:::i;9060:158::-;;;;;;;;;;-1:-1:-1;9184:12:19;:16;;9174:27;9060:158;;9507:100;;;;;;;;;;-1:-1:-1;9587:13:19;9507:100;;2932:312;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;:::i;9364:100::-;;;;;;;;;;-1:-1:-1;9444:13:19;9364:100;;8029:111;;;;;;;;;;-1:-1:-1;8121:12:19;8029:111;;8883:114;;;;;;;;;;-1:-1:-1;8883:114:19;;;;;:::i;:::-;8978:12;;;;8883:114;8356:124;;;;;;;;;;-1:-1:-1;8457:16:19;8356:124;;4039:1494;;;;;;:::i;:::-;;:::i;8530:116::-;;;;;;;;;;-1:-1:-1;8625:14:19;8530:116;;8189;;;;;;;;;;-1:-1:-1;8189:116:19;;8284:14;6471:74:28;;6459:2;6444:18;8189:116:19;6325:226:28;1985:565:19;;;;;;:::i;:::-;;:::i;3626:231::-;;;;;;:::i;:::-;;:::i;7848:134::-;;;;;;;;;;-1:-1:-1;7848:134:19;;;;;:::i;:::-;7953:22;;7848:134;5771:1961;5849:26;5887:22;5936:5;;5971:20;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;;;;;;;5971:20:19;;;;;;;;;;;;;;;;5958:33;;6001:25;6041:9;6036:1545;6060:6;6056:1;:10;6036:1545;;;6083:20;6106:10;6117:1;6106:13;;;;;;;;:::i;:::-;;;;;;;6083:36;;6141:5;;6147:1;6141:8;;;;;;;:::i;:::-;;;;;;;;;;;;:::i;:::-;6177:11;;;;6389:21;;;;6133:16;;-1:-1:-1;6464:12:19;;;;6133:16;6464:12;:::i;:::-;:17;;6489:3;6494:14;;;;:5;:14;:::i;:::-;6464:45;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;6443:17:19;;;;6426:83;;;;;;;;;;6746:16;;;6733:30;6730:49;6720:806;;6914:66;6908:4;6901:80;7054:66;7048:4;7041:80;7206:66;7200:4;7193:80;7402:66;7396:4;7389:80;7503:4;7497;7490:18;6720:806;-1:-1:-1;;7565:3:19;;6036:1545;;;;7680:14;7667:9;:27;7659:66;;;;;;;8574:2:28;7659:66:19;;;8556:21:28;8613:2;8593:18;;;8586:30;8652:28;8632:18;;;8625:56;8698:18;;7659:66:19;;;;;;;;;5877:1855;;;5771:1961;;;;:::o;1166:534::-;1304:12;1253:25;1343:5;;1378:19;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1365:32;;1407:18;1440:9;1435:259;1459:6;1455:1;:10;1435:259;;;1482:12;1515:5;;1521:1;1515:8;;;;;;;:::i;:::-;;;;;;;;;;;;:::i;:::-;1508:15;-1:-1:-1;1564:11:19;;;;1508:15;1564:11;:::i;:::-;:16;;1581:13;;;;:4;:13;:::i;:::-;1564:31;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1547:10;1558:1;1547:13;;;;;;;;:::i;:::-;;;;;;;;;;1537:58;;-1:-1:-1;1537:58:19;1609:43;;;;;;;9315:2:28;1609:43:19;;;9297:21:28;9354:2;9334:18;;;9327:30;9393:25;9373:18;;;9366:53;9436:18;;1609:43:19;9113:347:28;1609:43:19;-1:-1:-1;1678:3:19;;1435:259;;;;1280:420;;1166:534;;;;;:::o;2932:312::-;3122:12;3156:23;;3070:26;3202:35;3215:14;3231:5;;3202:12;:35::i;:::-;3189:48;;2932:312;;;;;;;:::o;4039:1494::-;4107:26;4162:5;;4197:20;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;;;;;;;4197:20:19;;;;;;;;;;;;;;;;4184:33;;4227:20;4262:9;4257:1270;4281:6;4277:1;:10;4257:1270;;;4304:20;4327:10;4338:1;4327:13;;;;;;;;:::i;:::-;;;;;;;4304:36;;4362:5;;4368:1;4362:8;;;;;;;:::i;:::-;;;;;;;;;;;;:::i;:::-;4354:16;-1:-1:-1;4422:12:19;;;;4354:16;4422:12;:::i;:::-;:17;;4440:14;;;;:5;:14;:::i;:::-;4422:33;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;4401:17:19;;;;4384:71;;;;;;;;;;4692:16;;;4679:30;4676:49;4666:806;;4860:66;4854:4;4847:80;5000:66;4994:4;4987:80;5152:66;5146:4;5139:80;5348:66;5342:4;5335:80;5449:4;5443;5436:18;4666:806;-1:-1:-1;5511:3:19;;4257:1270;;1985:565;2075:26;2130:5;;2165:20;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;;;;;;;2165:20:19;;;;;;;;;;;;;;;;2152:33;;2195:18;2228:9;2223:321;2247:6;2243:1;:10;2223:321;;;2270:20;2293:10;2304:1;2293:13;;;;;;;;:::i;:::-;;;;;;;2270:36;;2327:5;;2333:1;2327:8;;;;;;;:::i;:::-;;;;;;;;;;;;:::i;:::-;2320:15;-1:-1:-1;2387:11:19;;;;2320:15;2387:11;:::i;:::-;:16;;2404:13;;;;:4;:13;:::i;:::-;2387:31;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;2366:17:19;;;2349:69;;;;;2432:70;;;;2460:14;;2452:50;;;;;;;9315:2:28;2452:50:19;;;9297:21:28;9354:2;9334:18;;;9327:30;9393:25;9373:18;;;9366:53;9436:18;;2452:50:19;9113:347:28;2452:50:19;-1:-1:-1;2528:3:19;;2223:321;;;;2103:447;;1985:565;;;;;:::o;3626:231::-;3700:19;3721:17;3740:26;3817:33;3838:4;3844:5;;3817:20;:33::i;:::-;3778:72;;;;-1:-1:-1;3778:72:19;;-1:-1:-1;3626:231:19;-1:-1:-1;;;3626:231:19:o;196:386:28:-;278:8;288:6;342:3;335:4;327:6;323:17;319:27;309:55;;360:1;357;350:12;309:55;-1:-1:-1;383:20:28;;426:18;415:30;;412:50;;;458:1;455;448:12;412:50;495:4;487:6;483:17;471:29;;555:3;548:4;538:6;535:1;531:14;523:6;519:27;515:38;512:47;509:67;;;572:1;569;562:12;509:67;196:386;;;;;:::o;587:487::-;704:6;712;765:2;753:9;744:7;740:23;736:32;733:52;;;781:1;778;771:12;733:52;821:9;808:23;854:18;846:6;843:30;840:50;;;886:1;883;876:12;840:50;925:89;1006:7;997:6;986:9;982:22;925:89;:::i;:::-;1033:8;;899:115;;-1:-1:-1;587:487:28;-1:-1:-1;;;;587:487:28:o;1079:530::-;1120:3;1158:5;1152:12;1185:6;1180:3;1173:19;1210:1;1220:162;1234:6;1231:1;1228:13;1220:162;;;1296:4;1352:13;;;1348:22;;1342:29;1324:11;;;1320:20;;1313:59;1249:12;1220:162;;;1400:6;1397:1;1394:13;1391:87;;;1466:1;1459:4;1450:6;1445:3;1441:16;1437:27;1430:38;1391:87;-1:-1:-1;1523:2:28;1511:15;1528:66;1507:88;1498:98;;;;1598:4;1494:109;;1079:530;-1:-1:-1;;1079:530:28:o;1614:869::-;1673:3;1704;1736:5;1730:12;1763:6;1758:3;1751:19;1789:4;1818:2;1813:3;1809:12;1802:19;;1874:2;1864:6;1861:1;1857:14;1850:5;1846:26;1842:35;1911:2;1904:5;1900:14;1932:1;1942:515;1956:6;1953:1;1950:13;1942:515;;;2021:16;;;2039:66;2017:89;2005:102;;2130:13;;2210:9;;2203:17;2196:25;2183:39;;2261:11;;2255:18;2166:4;2293:13;;;2286:25;;;2332:45;2363:13;;;2255:18;2332:45;:::i;:::-;2435:12;;;;2324:53;-1:-1:-1;;;2400:15:28;;;;1978:1;1971:9;1942:515;;;-1:-1:-1;2473:4:28;;1614:869;-1:-1:-1;;;;;;;1614:869:28:o;2488:317::-;2717:2;2706:9;2699:21;2680:4;2737:62;2795:2;2784:9;2780:18;2772:6;2737:62;:::i;:::-;2729:70;2488:317;-1:-1:-1;;;2488:317:28:o;3296:930::-;3484:4;3532:2;3521:9;3517:18;3562:6;3551:9;3544:25;3588:2;3626;3621;3610:9;3606:18;3599:30;3649:6;3684;3678:13;3715:6;3707;3700:22;3753:2;3742:9;3738:18;3731:25;;3815:2;3805:6;3802:1;3798:14;3787:9;3783:30;3779:39;3765:53;;3853:2;3845:6;3841:15;3874:1;3884:313;3898:6;3895:1;3892:13;3884:313;;;3987:66;3975:9;3967:6;3963:22;3959:95;3954:3;3947:108;4078:39;4110:6;4101;4095:13;4078:39;:::i;:::-;4068:49;-1:-1:-1;4175:12:28;;;;4140:15;;;;3920:1;3913:9;3884:313;;;-1:-1:-1;4214:6:28;;3296:930;-1:-1:-1;;;;;;;;3296:930:28:o;4413:642::-;4530:6;4538;4546;4599:2;4587:9;4578:7;4574:23;4570:32;4567:52;;;4615:1;4612;4605:12;4567:52;4654:9;4641:23;4707:5;4700:13;4693:21;4686:5;4683:32;4673:60;;4729:1;4726;4719:12;4673:60;4752:5;-1:-1:-1;4808:2:28;4793:18;;4780:32;4835:18;4824:30;;4821:50;;;4867:1;4864;4857:12;4821:50;4906:89;4987:7;4978:6;4967:9;4963:22;4906:89;:::i;:::-;4413:642;;5014:8;;-1:-1:-1;4880:115:28;;-1:-1:-1;;;;4413:642:28:o;5060:459::-;5345:6;5334:9;5327:25;5388:6;5383:2;5372:9;5368:18;5361:34;5431:2;5426;5415:9;5411:18;5404:30;5308:4;5451:62;5509:2;5498:9;5494:18;5486:6;5451:62;:::i;:::-;5443:70;5060:459;-1:-1:-1;;;;;5060:459:28:o;5524:309::-;5583:6;5636:2;5624:9;5615:7;5611:23;5607:32;5604:52;;;5652:1;5649;5642:12;5604:52;5691:9;5678:23;5741:42;5734:5;5730:54;5723:5;5720:65;5710:93;;5799:1;5796;5789:12;6556:180;6615:6;6668:2;6656:9;6647:7;6643:23;6639:32;6636:52;;;6684:1;6681;6674:12;6636:52;-1:-1:-1;6707:23:28;;6556:180;-1:-1:-1;6556:180:28:o;6741:184::-;6793:77;6790:1;6783:88;6890:4;6887:1;6880:15;6914:4;6911:1;6904:15;6930:184;6982:77;6979:1;6972:88;7079:4;7076:1;7069:15;7103:4;7100:1;7093:15;7119:387;7216:4;7274:11;7261:25;7364:66;7353:8;7337:14;7333:29;7329:102;7309:18;7305:127;7295:155;;7446:1;7443;7436:12;7295:155;7467:33;;;;;7119:387;-1:-1:-1;;7119:387:28:o;7511:580::-;7588:4;7594:6;7654:11;7641:25;7744:66;7733:8;7717:14;7713:29;7709:102;7689:18;7685:127;7675:155;;7826:1;7823;7816:12;7675:155;7853:33;;7905:20;;;-1:-1:-1;7948:18:28;7937:30;;7934:50;;;7980:1;7977;7970:12;7934:50;8013:4;8001:17;;-1:-1:-1;8044:14:28;8040:27;;;8030:38;;8027:58;;;8081:1;8078;8071:12;8096:271;8279:6;8271;8266:3;8253:33;8235:3;8305:16;;8330:13;;;8305:16;8096:271;-1:-1:-1;8096:271:28:o;8727:381::-;8818:4;8876:11;8863:25;8966:66;8955:8;8939:14;8935:29;8931:102;8911:18;8907:127;8897:155;;9048:1;9045;9038:12;9465:382;9557:4;9615:11;9602:25;9705:66;9694:8;9678:14;9674:29;9670:102;9650:18;9646:127;9636:155;;9787:1;9784;9777:12",
    linkReferences: {},
  },
  methodIdentifiers: {
    "aggregate((address,bytes)[])": "252dba42",
    "aggregate3((address,bool,bytes)[])": "82ad56cb",
    "aggregate3Value((address,bool,uint256,bytes)[])": "174dea71",
    "blockAndAggregate((address,bytes)[])": "c3077fa9",
    "getBasefee()": "3e64a696",
    "getBlockHash(uint256)": "ee82ac5e",
    "getBlockNumber()": "42cbb15c",
    "getChainId()": "3408e470",
    "getCurrentBlockCoinbase()": "a8b0574e",
    "getCurrentBlockDifficulty()": "72425d9d",
    "getCurrentBlockGasLimit()": "86d516e8",
    "getCurrentBlockTimestamp()": "0f28c97d",
    "getEthBalance(address)": "4d2301cc",
    "getLastBlockHash()": "27e86d6e",
    "tryAggregate(bool,(address,bytes)[])": "bce38bd7",
    "tryBlockAndAggregate(bool,(address,bytes)[])": "399542e9",
  },
  rawMetadata:
    '{"compiler":{"version":"0.8.12+commit.f00d7308"},"language":"Solidity","output":{"abi":[{"inputs":[{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bytes","name":"callData","type":"bytes"}],"internalType":"struct Multicall3.Call[]","name":"calls","type":"tuple[]"}],"name":"aggregate","outputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"internalType":"bytes[]","name":"returnData","type":"bytes[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bool","name":"allowFailure","type":"bool"},{"internalType":"bytes","name":"callData","type":"bytes"}],"internalType":"struct Multicall3.Call3[]","name":"calls","type":"tuple[]"}],"name":"aggregate3","outputs":[{"components":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bytes","name":"returnData","type":"bytes"}],"internalType":"struct Multicall3.Result[]","name":"returnData","type":"tuple[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bool","name":"allowFailure","type":"bool"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"callData","type":"bytes"}],"internalType":"struct Multicall3.Call3Value[]","name":"calls","type":"tuple[]"}],"name":"aggregate3Value","outputs":[{"components":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bytes","name":"returnData","type":"bytes"}],"internalType":"struct Multicall3.Result[]","name":"returnData","type":"tuple[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bytes","name":"callData","type":"bytes"}],"internalType":"struct Multicall3.Call[]","name":"calls","type":"tuple[]"}],"name":"blockAndAggregate","outputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"internalType":"bytes32","name":"blockHash","type":"bytes32"},{"components":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bytes","name":"returnData","type":"bytes"}],"internalType":"struct Multicall3.Result[]","name":"returnData","type":"tuple[]"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getBasefee","outputs":[{"internalType":"uint256","name":"basefee","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getBlockHash","outputs":[{"internalType":"bytes32","name":"blockHash","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBlockNumber","outputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getChainId","outputs":[{"internalType":"uint256","name":"chainid","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentBlockCoinbase","outputs":[{"internalType":"address","name":"coinbase","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentBlockDifficulty","outputs":[{"internalType":"uint256","name":"difficulty","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentBlockGasLimit","outputs":[{"internalType":"uint256","name":"gaslimit","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentBlockTimestamp","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLastBlockHash","outputs":[{"internalType":"bytes32","name":"blockHash","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"requireSuccess","type":"bool"},{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bytes","name":"callData","type":"bytes"}],"internalType":"struct Multicall3.Call[]","name":"calls","type":"tuple[]"}],"name":"tryAggregate","outputs":[{"components":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bytes","name":"returnData","type":"bytes"}],"internalType":"struct Multicall3.Result[]","name":"returnData","type":"tuple[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bool","name":"requireSuccess","type":"bool"},{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bytes","name":"callData","type":"bytes"}],"internalType":"struct Multicall3.Call[]","name":"calls","type":"tuple[]"}],"name":"tryBlockAndAggregate","outputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"internalType":"bytes32","name":"blockHash","type":"bytes32"},{"components":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bytes","name":"returnData","type":"bytes"}],"internalType":"struct Multicall3.Result[]","name":"returnData","type":"tuple[]"}],"stateMutability":"payable","type":"function"}],"devdoc":{"author":"Michael Elliot <mike@makerdao.com>Joshua Levine <joshua@makerdao.com>Nick Johnson <arachnid@notdot.net>Andreas Bigger <andreas@nascent.xyz>Matt Solomon <matt@mattsolomon.dev>","details":"Multicall & Multicall2 backwards-compatibleAggregate methods are marked `payable` to save 24 gas per call","kind":"dev","methods":{"aggregate((address,bytes)[])":{"params":{"calls":"An array of Call structs"},"returns":{"blockNumber":"The block number where the calls were executed","returnData":"An array of bytes containing the responses"}},"aggregate3((address,bool,bytes)[])":{"params":{"calls":"An array of Call3 structs"},"returns":{"returnData":"An array of Result structs"}},"aggregate3Value((address,bool,uint256,bytes)[])":{"params":{"calls":"An array of Call3Value structs"},"returns":{"returnData":"An array of Result structs"}},"blockAndAggregate((address,bytes)[])":{"params":{"calls":"An array of Call structs"},"returns":{"blockHash":"The hash of the block where the calls were executed","blockNumber":"The block number where the calls were executed","returnData":"An array of Result structs"}},"getBlockHash(uint256)":{"params":{"blockNumber":"The block number"}},"tryAggregate(bool,(address,bytes)[])":{"params":{"calls":"An array of Call structs","requireSuccess":"If true, require all calls to succeed"},"returns":{"returnData":"An array of Result structs"}},"tryBlockAndAggregate(bool,(address,bytes)[])":{"params":{"calls":"An array of Call structs"},"returns":{"blockHash":"The hash of the block where the calls were executed","blockNumber":"The block number where the calls were executed","returnData":"An array of Result structs"}}},"title":"Multicall3","version":1},"userdoc":{"kind":"user","methods":{"aggregate((address,bytes)[])":{"notice":"Backwards-compatible call aggregation with Multicall"},"aggregate3((address,bool,bytes)[])":{"notice":"Aggregate calls, ensuring each returns success if required"},"aggregate3Value((address,bool,uint256,bytes)[])":{"notice":"Aggregate calls with a msg valueReverts if msg.value is less than the sum of the call values"},"blockAndAggregate((address,bytes)[])":{"notice":"Backwards-compatible with Multicall2Aggregate calls and allow failures using tryAggregate"},"getBasefee()":{"notice":"Gets the base fee of the given blockCan revert if the BASEFEE opcode is not implemented by the given chain"},"getBlockHash(uint256)":{"notice":"Returns the block hash for the given block number"},"getBlockNumber()":{"notice":"Returns the block number"},"getChainId()":{"notice":"Returns the chain id"},"getCurrentBlockCoinbase()":{"notice":"Returns the block coinbase"},"getCurrentBlockDifficulty()":{"notice":"Returns the block difficulty"},"getCurrentBlockGasLimit()":{"notice":"Returns the block gas limit"},"getCurrentBlockTimestamp()":{"notice":"Returns the block timestamp"},"getEthBalance(address)":{"notice":"Returns the (ETH) balance of a given address"},"getLastBlockHash()":{"notice":"Returns the block hash of the last block"},"tryAggregate(bool,(address,bytes)[])":{"notice":"Backwards-compatible with Multicall2Aggregate calls without requiring success"},"tryBlockAndAggregate(bool,(address,bytes)[])":{"notice":"Backwards-compatible with Multicall2Aggregate calls and allow failures using tryAggregate"}},"notice":"Aggregate results from multiple function calls","version":1}},"settings":{"compilationTarget":{"src/Multicall3.sol":"Multicall3"},"evmVersion":"london","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":true,"runs":10000000},"remappings":[":ds-test/=lib/forge-std/lib/ds-test/src/",":forge-std/=lib/forge-std/src/"]},"sources":{"src/Multicall3.sol":{"keccak256":"0x95dfd0a2dd6626c7119ff7c3f214d56b289145f81a0521cd93a6252a326966f6","license":"MIT","urls":["bzz-raw://ead513cb13fe5373523cb3e1f3f1a1052791503269f4cc22e5e6177ed57d03ae","dweb:/ipfs/Qmd5sRoq3rxHpBkcHr4baM2zP6Sud6eAL7AFoBbizFnWji"]}},"version":1}',
  metadata: {
    compiler: { version: "0.8.12+commit.f00d7308" },
    language: "Solidity",
    output: {
      abi: [
        {
          inputs: [
            {
              internalType: "struct Multicall3.Call[]",
              name: "calls",
              type: "tuple[]",
              components: [
                { internalType: "address", name: "target", type: "address" },
                { internalType: "bytes", name: "callData", type: "bytes" },
              ],
            },
          ],
          stateMutability: "payable",
          type: "function",
          name: "aggregate",
          outputs: [
            { internalType: "uint256", name: "blockNumber", type: "uint256" },
            { internalType: "bytes[]", name: "returnData", type: "bytes[]" },
          ],
        },
        {
          inputs: [
            {
              internalType: "struct Multicall3.Call3[]",
              name: "calls",
              type: "tuple[]",
              components: [
                { internalType: "address", name: "target", type: "address" },
                { internalType: "bool", name: "allowFailure", type: "bool" },
                { internalType: "bytes", name: "callData", type: "bytes" },
              ],
            },
          ],
          stateMutability: "payable",
          type: "function",
          name: "aggregate3",
          outputs: [
            {
              internalType: "struct Multicall3.Result[]",
              name: "returnData",
              type: "tuple[]",
              components: [
                { internalType: "bool", name: "success", type: "bool" },
                { internalType: "bytes", name: "returnData", type: "bytes" },
              ],
            },
          ],
        },
        {
          inputs: [
            {
              internalType: "struct Multicall3.Call3Value[]",
              name: "calls",
              type: "tuple[]",
              components: [
                { internalType: "address", name: "target", type: "address" },
                { internalType: "bool", name: "allowFailure", type: "bool" },
                { internalType: "uint256", name: "value", type: "uint256" },
                { internalType: "bytes", name: "callData", type: "bytes" },
              ],
            },
          ],
          stateMutability: "payable",
          type: "function",
          name: "aggregate3Value",
          outputs: [
            {
              internalType: "struct Multicall3.Result[]",
              name: "returnData",
              type: "tuple[]",
              components: [
                { internalType: "bool", name: "success", type: "bool" },
                { internalType: "bytes", name: "returnData", type: "bytes" },
              ],
            },
          ],
        },
        {
          inputs: [
            {
              internalType: "struct Multicall3.Call[]",
              name: "calls",
              type: "tuple[]",
              components: [
                { internalType: "address", name: "target", type: "address" },
                { internalType: "bytes", name: "callData", type: "bytes" },
              ],
            },
          ],
          stateMutability: "payable",
          type: "function",
          name: "blockAndAggregate",
          outputs: [
            { internalType: "uint256", name: "blockNumber", type: "uint256" },
            { internalType: "bytes32", name: "blockHash", type: "bytes32" },
            {
              internalType: "struct Multicall3.Result[]",
              name: "returnData",
              type: "tuple[]",
              components: [
                { internalType: "bool", name: "success", type: "bool" },
                { internalType: "bytes", name: "returnData", type: "bytes" },
              ],
            },
          ],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "getBasefee",
          outputs: [
            { internalType: "uint256", name: "basefee", type: "uint256" },
          ],
        },
        {
          inputs: [
            { internalType: "uint256", name: "blockNumber", type: "uint256" },
          ],
          stateMutability: "view",
          type: "function",
          name: "getBlockHash",
          outputs: [
            { internalType: "bytes32", name: "blockHash", type: "bytes32" },
          ],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "getBlockNumber",
          outputs: [
            { internalType: "uint256", name: "blockNumber", type: "uint256" },
          ],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "getChainId",
          outputs: [
            { internalType: "uint256", name: "chainid", type: "uint256" },
          ],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "getCurrentBlockCoinbase",
          outputs: [
            { internalType: "address", name: "coinbase", type: "address" },
          ],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "getCurrentBlockDifficulty",
          outputs: [
            { internalType: "uint256", name: "difficulty", type: "uint256" },
          ],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "getCurrentBlockGasLimit",
          outputs: [
            { internalType: "uint256", name: "gaslimit", type: "uint256" },
          ],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "getCurrentBlockTimestamp",
          outputs: [
            { internalType: "uint256", name: "timestamp", type: "uint256" },
          ],
        },
        {
          inputs: [{ internalType: "address", name: "addr", type: "address" }],
          stateMutability: "view",
          type: "function",
          name: "getEthBalance",
          outputs: [
            { internalType: "uint256", name: "balance", type: "uint256" },
          ],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "getLastBlockHash",
          outputs: [
            { internalType: "bytes32", name: "blockHash", type: "bytes32" },
          ],
        },
        {
          inputs: [
            { internalType: "bool", name: "requireSuccess", type: "bool" },
            {
              internalType: "struct Multicall3.Call[]",
              name: "calls",
              type: "tuple[]",
              components: [
                { internalType: "address", name: "target", type: "address" },
                { internalType: "bytes", name: "callData", type: "bytes" },
              ],
            },
          ],
          stateMutability: "payable",
          type: "function",
          name: "tryAggregate",
          outputs: [
            {
              internalType: "struct Multicall3.Result[]",
              name: "returnData",
              type: "tuple[]",
              components: [
                { internalType: "bool", name: "success", type: "bool" },
                { internalType: "bytes", name: "returnData", type: "bytes" },
              ],
            },
          ],
        },
        {
          inputs: [
            { internalType: "bool", name: "requireSuccess", type: "bool" },
            {
              internalType: "struct Multicall3.Call[]",
              name: "calls",
              type: "tuple[]",
              components: [
                { internalType: "address", name: "target", type: "address" },
                { internalType: "bytes", name: "callData", type: "bytes" },
              ],
            },
          ],
          stateMutability: "payable",
          type: "function",
          name: "tryBlockAndAggregate",
          outputs: [
            { internalType: "uint256", name: "blockNumber", type: "uint256" },
            { internalType: "bytes32", name: "blockHash", type: "bytes32" },
            {
              internalType: "struct Multicall3.Result[]",
              name: "returnData",
              type: "tuple[]",
              components: [
                { internalType: "bool", name: "success", type: "bool" },
                { internalType: "bytes", name: "returnData", type: "bytes" },
              ],
            },
          ],
        },
      ],
      devdoc: {
        kind: "dev",
        methods: {
          "aggregate((address,bytes)[])": {
            params: { calls: "An array of Call structs" },
            returns: {
              blockNumber: "The block number where the calls were executed",
              returnData: "An array of bytes containing the responses",
            },
          },
          "aggregate3((address,bool,bytes)[])": {
            params: { calls: "An array of Call3 structs" },
            returns: { returnData: "An array of Result structs" },
          },
          "aggregate3Value((address,bool,uint256,bytes)[])": {
            params: { calls: "An array of Call3Value structs" },
            returns: { returnData: "An array of Result structs" },
          },
          "blockAndAggregate((address,bytes)[])": {
            params: { calls: "An array of Call structs" },
            returns: {
              blockHash: "The hash of the block where the calls were executed",
              blockNumber: "The block number where the calls were executed",
              returnData: "An array of Result structs",
            },
          },
          "getBlockHash(uint256)": {
            params: { blockNumber: "The block number" },
          },
          "tryAggregate(bool,(address,bytes)[])": {
            params: {
              calls: "An array of Call structs",
              requireSuccess: "If true, require all calls to succeed",
            },
            returns: { returnData: "An array of Result structs" },
          },
          "tryBlockAndAggregate(bool,(address,bytes)[])": {
            params: { calls: "An array of Call structs" },
            returns: {
              blockHash: "The hash of the block where the calls were executed",
              blockNumber: "The block number where the calls were executed",
              returnData: "An array of Result structs",
            },
          },
        },
        version: 1,
      },
      userdoc: {
        kind: "user",
        methods: {
          "aggregate((address,bytes)[])": {
            notice: "Backwards-compatible call aggregation with Multicall",
          },
          "aggregate3((address,bool,bytes)[])": {
            notice:
              "Aggregate calls, ensuring each returns success if required",
          },
          "aggregate3Value((address,bool,uint256,bytes)[])": {
            notice:
              "Aggregate calls with a msg valueReverts if msg.value is less than the sum of the call values",
          },
          "blockAndAggregate((address,bytes)[])": {
            notice:
              "Backwards-compatible with Multicall2Aggregate calls and allow failures using tryAggregate",
          },
          "getBasefee()": {
            notice:
              "Gets the base fee of the given blockCan revert if the BASEFEE opcode is not implemented by the given chain",
          },
          "getBlockHash(uint256)": {
            notice: "Returns the block hash for the given block number",
          },
          "getBlockNumber()": { notice: "Returns the block number" },
          "getChainId()": { notice: "Returns the chain id" },
          "getCurrentBlockCoinbase()": { notice: "Returns the block coinbase" },
          "getCurrentBlockDifficulty()": {
            notice: "Returns the block difficulty",
          },
          "getCurrentBlockGasLimit()": {
            notice: "Returns the block gas limit",
          },
          "getCurrentBlockTimestamp()": {
            notice: "Returns the block timestamp",
          },
          "getEthBalance(address)": {
            notice: "Returns the (ETH) balance of a given address",
          },
          "getLastBlockHash()": {
            notice: "Returns the block hash of the last block",
          },
          "tryAggregate(bool,(address,bytes)[])": {
            notice:
              "Backwards-compatible with Multicall2Aggregate calls without requiring success",
          },
          "tryBlockAndAggregate(bool,(address,bytes)[])": {
            notice:
              "Backwards-compatible with Multicall2Aggregate calls and allow failures using tryAggregate",
          },
        },
        version: 1,
      },
    },
    settings: {
      remappings: [
        "ds-test/=lib/forge-std/lib/ds-test/src/",
        "forge-std/=lib/forge-std/src/",
      ],
      optimizer: { enabled: true, runs: 10000000 },
      metadata: { bytecodeHash: "ipfs" },
      compilationTarget: { "src/Multicall3.sol": "Multicall3" },
      evmVersion: "london",
      libraries: {},
    },
    sources: {
      "src/Multicall3.sol": {
        keccak256:
          "0x95dfd0a2dd6626c7119ff7c3f214d56b289145f81a0521cd93a6252a326966f6",
        urls: [
          "bzz-raw://ead513cb13fe5373523cb3e1f3f1a1052791503269f4cc22e5e6177ed57d03ae",
          "dweb:/ipfs/Qmd5sRoq3rxHpBkcHr4baM2zP6Sud6eAL7AFoBbizFnWji",
        ],
        license: "MIT",
      },
    },
    version: 1,
  },
  id: 19,
} as const;
