# TandaPay Smart Contract Wrapper, (typescript experiment 2)

This is the 2nd typescript experiment with creating a wrapper around the TandaPay smart contract. So far, the development of this is going well and it can evolve into being a complete layer 1 solution for the app. The current architecture idea is:
- **Layer 1**: A wrapper around the TP smart contract which exposes an API that enables programmatic interactions with instances of the smart contract that are deployed on the blockchain.
- **Layer 2**: Built on top of layer 1, will handle more state related variables regarding the smart contract and narrow down what ways it can be interacted with, automating many actions that would otherwise be tedious, and ensuring that the smart contract is used in the expected way
- **Layer 3**: Includes all of the logic that is necessary for the app to function, or really any interface for interacting with instances of the TandaPay smart contract, without having to know the implementation details. Will include stuff like a transactions queue, which provides a queue of transactions that need to be sent by any individual member and by when, as well as a community-wide queue for all transactions relating to updating the state
- **Layer 4**: The actual app itself. Almost all heavy lifting is done by this point, here we fork an existing messaging application (e.g. Zulip), add an additional UI component, which allows the users to interface with layer 3

The general idea for layer 1 is: It will provide wrappers around all of the raw smart contract method calls, provide basic types and abstractions that will allow the smart contract to be interfaced with, will simulate write calls and handle potential errors, and serve as a good foundation to build layer 2 on.
