import { createPublicClient, createTestClient, createWalletClient, formatEther, formatUnits, getContract, Hex, http, publicActions } from "viem";
import { anvil, foundry, mainnet } from "viem/chains";
import { mnemonicToAccount } from "viem/accounts";

const mnemonic_str: string = 'test test test test test test test test test test test junk';
let accounts = Array.from({length: 3}, (_, index) => {
    return mnemonicToAccount(mnemonic_str, {accountIndex:0, addressIndex:index});
});

const client = createWalletClient({
    account: accounts[0],
    chain: anvil,
    transport: http(),
}).extend(publicActions);

console.log("done...");

// https://viem.sh/docs/contract/getContract#calling-methods

// steps to deploy a TandaPay smart contract:
// 1. select an ERC-20 token or deploy one, the address of the SC is needed in the constructor
// 2. need an account & client to deploy it.
// 3. after we've got an account and client, we can deploy the contract, get the address, and use that to make a ContractInstance
// 4. methods on the contract can then be done using .read and .write and should auto populate methods

// This is what a secretary will do in a new TandaPay community. but if someone is joining a community
// for the first time, then they will actually just need to connect to the smart contract, and they won't
// necessarily be deploying it themselves.

// So, we need to:
// 1.) include methods for connecting to an existing smart contract
// 2.) methods for deploying a new smart contract and connecting to that one

// therefore, our separation of concerns should be that we have a module responsible
// for the management of a TandaPay contract instance. Perhaps using DI?
// and we have a whole separate module responsible for deploying it


// So, right now the questions to answer are:
// 1. "What information needs to be kept from a newly deployed smart contract?"
// ---> this will help us decide whether we need an object/class that maintains state, or
// ---> instead just a stateless method that deploys it and returns the hash
//
// 2. "How do we determine if we're the secretary deploying a smart contract or if we're a user joining an existing community?"
// ---> (a) there will need to be validation that any smart contract we connect to is actually a valid TandaPay smart contract
// ---> (b) the actual question can probably be resolved in the app, rather than at the library level where we are now
//
// 3. "What functionality should a TandaPay SC manager have?"
// ---> (a) Ideally, the list of methods that are exposed should depend on the client that is connecting to the SC manager.
//          for instance, a ContractInstance already kind of does this. Depending on if a publicClient or Wallet connects,
//          it determines whether or not read/write functionality are included, respectively.
// ---> (b) Certain methods can only be called at certain times too. Many method calls might be valid on the surface or can't
//          be checked syntactically because they depend on the SC state and might be reverted. So, we should simulate calls
//          and test if transactions will actually work or be reverted
// ---> (c) TandaPay requires some level of collaboration, so there should be an event queue that constantly polls the state of
//          the smart contract and determines if any actions need to be taken by the client that's connected to it. For publicClient,
//          of course there won't be any. If it's a regular user, there will be some. For secretaries, there will be some special ones
//
// 4. "What info does a TandaPay SC manager need?"
// ---> (a) It needs a ContractInstance 
// ---> (b) ContractInstance needs an abi, contract address, and client.
// ---> (c) We already have the ABI, but we're missing contract address and client. These should be configurable.
//
// 5. "How can we structure layers of abstraction for SC manager?"
// ---> (a) One idea would be to have a base SC manager class that just accepts the address and client,
// --->     and just has read-only methods.
// ---> (b) Then there could be a sub-class for members, (subgroup leaders?), and secretaries.
// ---> *** with this idea, the base class could be used for just basic monitoring of the state of a
// --->     TandaPay smart contract, on the chain, and the sub-classes can provide more fine grained control.
// ---> ??? could i extend the regular ContractInstance class that already exists?

