import { Chain, defineChain } from "viem";
import { deployMulticall } from "./tandapay_test_helpers";



export class ChainHelper {
  chain: Chain;

  constructor(chain: Chain) {
    this.chain = chain;
  }

  async deployMulticall() {
    let {contracts} = this.chain;
    if (contracts && contracts.multicall3)
      return;

    contracts = {
      ...contracts,
      multicall3: await deployMulticall(),
    }
    this.chain.contracts = contracts;
  }
}