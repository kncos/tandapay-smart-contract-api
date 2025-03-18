/** ----- ABOUT THIS FILE -----
 * The tests here are disabled because with this file, I simply wanted to test a
 * simple scenario where 2 read calls are batched, then view the CLI output of
 * anvil to ensure that only one eth_call request was sent.
 */

import { createPublicClient, defineChain, http } from "viem";
import {
  deployFaucetToken,
  deployMulticall,
  deployTandaPay,
  makeWriteableClients,
} from "../helpers/tandapay_test_helpers";
import { TEST_TRANSPORT } from "../test_config";
import { createTandaPayManager } from "tandapay_manager/tandapay_manager";
import { anvil } from "viem/chains";
import { TandaPayState } from "types";
import { TandaPayTestSuite } from "../helpers/tandapay_test_suite";
import { getAllSubgroupInfo } from "tandapay_utils";

describe("batching read transactions using TandaPayManager", () => {
  it("works", async () => {
    //! anvil is expected to be running in CLI already

    // deploy multicall 3
    const mc3 = await deployMulticall();

    // create a public client and get the current block number.
    // this is needed to define a new chain, which will be anvil
    // but just with an MC3 address
    const pc_ = createPublicClient({
      transport: http(),
      chain: anvil,
    });
    const block = await pc_.getBlockNumber();

    // new chain we will use for clients going forward, since it
    // has mc3 defined batching should work
    const newChain = defineChain({
      ...anvil,
      contracts: {
        multicall3: {
          address: mc3,
          blockCreated: Number(block),
        },
      },
    });

    // new public client, we'll use this in the tandapay manager
    const pc = createPublicClient({
      batch: {
        multicall: true,
      },
      transport: TEST_TRANSPORT,
      chain: newChain,
    });

    // deploy tandapay smart contract
    const ftk = await deployFaucetToken();
    const tp = await deployTandaPay(ftk);

    // make a writeable client so that we have a valid
    // writeable TandaPay manager; before, the issue was
    // that writeable TandaPay managers did not support
    // batching, but now because of the keyed client they do
    const wc = makeWriteableClients(1)[0];

    const tpm = createTandaPayManager({
      client: {
        public: pc,
        wallet: wc,
      },
      tpAddress: tp,
      kind: "secretary",
    });

    // this will work, and we should witness only one `eth_call`
    // output in the terminal
    const [secretary, communityState] = await Promise.all([
      tpm.read.getSecretaryAddress(),
      tpm.read.getCommunityState(),
    ]);

    for (let i = 0; i < 16; i++) {
      await tpm.write.secretary.createSubgroup();
    }

    console.log(`${secretary}\n${TandaPayState[communityState]}`);

    const subgroupInfo = await getAllSubgroupInfo(tpm);
    console.log(subgroupInfo.size);
  });
});
