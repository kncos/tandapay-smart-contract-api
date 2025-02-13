# TandaPay Smart Contract API

![Language: TypeScript](https://img.shields.io/github/languages/top/kncos/tandapay-smart-contract-api) ![CI Tests](https://github.com/kncos/tandapay-smart-contract-api/actions/workflows/ci.yml/badge.svg) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

This library serves as an abstraction layer on top of the TandaPay smart contract. The TandaPay smart contract implements a peer-to-peer crowdfunding protocol. The goals of this library are:

1. Expose an API for interacting with the TandaPay smart contract
2. Serve as a layer to build business logic and applications on top of
3. Serve as a single chokepoint where if the smart contract is later refactored and improved (likely), this library can be updated without necessarily impacting layers built on top of it

# Features

Here is a brief summary of the major features this library includes

- A TandaPay Manager concept, which is essentially the object that encapsulates the smart contract wrapper functionality. It is constructed with a viem client and smart contract address, and depending
  on what functionality the client has available (e.g., whether it's a wallet client with a valid account, or just a public client), it exposes a different set of methods. This adds a separation of concerns
  between read/write methods
- A roles concept, since within the TandaPay protocol implemented by the smart contract, different ethereum accounts may have different roles, and thus permission to perform different write actions. The
  TandaPay Manager can be configured with a role, which provides even more of a separation of concerns with write methods. Write methods are further divided based on which role(s) may perform them.
- Custom types that interface with the smart contract. The smart contract has various read methods, a.k.a. getters, which return objects that have strange key identifiers and raw data values. The custom
  types serve as an abstraction with better names, stuff like enum types, etc. which the raw data returned from the smart contract can be mapped onto.
- Wrappers for every (necessary) read method, write method, and smart contract events. This improves the naming scheme, adds documentation, allows custom types to be passed in as parameters that are
  nicer to work with, and encapsulates procedures for sending the transactions properly, e.g. simulating write transactions before actually sending them and waiting for transaction receipts.
- A test suite which not only validates the functionality of this library itself, but by extension helps validate the functionality of the smart contract, since the test suite here runs many scenarios
  through the smart contract deployed on a test network, and we can compare the state of the smart contract to the expected outcomes.

# Tight Coupling with Smart Contract Build Artifact

When looking at the source, you may notice that the smart contract abi/bytecode has been included here as a hardcoded object. The reasoning for this is that the version of the smart contract
that this library works with is included in the library's source, without necessarily needing to include the solidity code or a build system for solidity, as the smart contract is a different
project written by another developer.

# Smart Contract Code Quality Issues

The smart contract was developed as a rush order by a contractor whose first language was not english. This has resulted in smart contract code that:

- Is somewhat hard to decipher and make sense of as a developer with familiarity with what it _should_ be doing (me), let alone someone new to the project
- Uses inconsistent code styles and naming conventions throughout
- Lacks documentation and comments explaining code
- Contains many spelling errors and capitalization errors throughout
- Has dead code, duplicated code, and seemingly unused variables / features

This API aims to mitigate these issues for the time being, while also allowing for improvements to be made to the smart contract later without disrupting business logic that is built on top.
Basically, it's a way to interact with the smart contract without using the smart contract directly.
