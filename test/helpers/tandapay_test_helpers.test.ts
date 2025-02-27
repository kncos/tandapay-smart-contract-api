import { Address } from "viem";
import {
  advanceTime,
  deployFaucetToken,
  deployTandaPay,
  makeAccounts,
  makePublicClients,
  makeTestClient,
  makeWriteableClients,
  spawnAnvil
} from "./tandapay_test_helpers";

describe("makeAccounts test", () => {
  test("produces accounts that match anvil testnet", () => {
    const accs = makeAccounts(3);
    // these addresses are hard coded because i just copied them from anvil
    // directly. We just want to make sure that makeAccounts, which uses the default
    // mnemonic that anvil uses, matches up with the addresses that anvil generates.
    // This could be done in a more robust way, but it's good enough for now
    expect(accs[0].address).toBe("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
    expect(accs[1].address).toBe("0x70997970C51812dc3A010C7d01b50e0d17dc79C8");
    expect(accs[2].address).toBe("0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC");
  });
});

describe("anvil and client connections", () => {
  test("anvil instance can be spawned & killed", async () => {
    const anvil = await spawnAnvil();
    expect(anvil.kill()).toBe(true);
  });

  test("can create test & public clients which connect to anvil", async () => {
    const anvil = await spawnAnvil();
    // make a test client that connects to anvil
    const tc = makeTestClient();
    // mine some blocks
    await tc.mine({ blocks: 10 });

    // make a public client to query the block number
    const [pc] = makePublicClients(1);
    const blockNumber = await pc.getBlockNumber();
    // just ensure that since we mined blocks, the block number actually advanced
    expect(blockNumber).toBeGreaterThan(5);

    anvil.kill();
  });

  test("can create wallet clients that connect to anvil", async () => {
    const anvil = await spawnAnvil();

    // make wallet clients, ensure they have accounts and chains
    // (although i believe this check is redundant, since they def do)
    const [wc1, wc2] = makeWriteableClients(2);
    if (!wc1.account || !wc2.account) fail("wallet client has no account!");

    if (!wc1.chain || !wc2.chain) fail("wallet client has no chain!");

    // send a transaction. This requires us to define the account and chain manually
    // just because the return type of getWalletClients doesn't specify that it will
    // always have one
    const hash = await wc1.sendTransaction({
      account: wc1.account,
      chain: wc1.chain,
      to: wc2.account.address,
      value: 1n * 10n ** 18n,
    });

    // make a public client again and wait for the tx receipt
    const [pc] = makePublicClients(1);
    const receipt = await pc.waitForTransactionReceipt({ hash });

    // expect that the tx succeeded
    expect(receipt.status).toBe("success");

    anvil.kill();
  });

  test("can advance time", async () => {
    const anvil = await spawnAnvil();

    const [pc] = makePublicClients();
    // get the timestamp before and after advancing the time by 10000 seconds
    const t1 = (await pc.getBlock()).timestamp;
    await advanceTime(10000);
    const t2 = (await pc.getBlock()).timestamp;

    // ensure that the difference between the timestamps is greater than 9000
    // (which, 10000 > 9000 so this should be true).
    expect(t2 - t1).toBeGreaterThan(9000);

    anvil.kill();
  });

  test("can deploy faucet token & tandapay contracts", async () => {
    const anvil = await spawnAnvil();

    let ftkAddress: Address = "0x0";
    // first deploy ftk contract and ensure it works
    try {
      ftkAddress = await deployFaucetToken();
    } catch {
      fail("failed to deploy faucet token");
    }

    // then try to deploy TandaPay
    try {
      await deployTandaPay(ftkAddress);
    } catch {
      fail("failed to deploy TandaPay");
    }

    anvil.kill();
  });
});
