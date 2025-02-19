import { TandaPayState } from "types";
import {
  deployFaucetToken,
  deployTandaPay,
  makeManagers,
  makeTestClient,
  makeWriteableClients,
  spawnAnvil,
} from "../test_helpers";
import { setupDefaultState } from "./setupDefaultState";

test("setupDefaultState works, dump/load state works", async () => {
  // spin up anvil instance
  let anvil = await spawnAnvil();
  // deploy ERC-20 faucet token and TandaPay contract
  const ftkAddress = await deployFaucetToken();
  const tpAddress = await deployTandaPay(ftkAddress);

  // setup the default state
  await setupDefaultState(tpAddress, ftkAddress);

  // make a TP manager and check that we're actually in the default state
  const [manager] = makeManagers(makeWriteableClients(1), tpAddress);
  let tandapayState = await manager.read.getCommunityState();
  expect(tandapayState).toBe(TandaPayState.Default);

  // kill anvil and spawn a new one
  anvil.kill();
  anvil = await spawnAnvil();

  // load from the dump we stored earlier
  const tc = makeTestClient();
  await tc.loadState({
    // so, since it uses caching, this should just work this way
    state: (await setupDefaultState(tpAddress, ftkAddress)).dump,
  });

  // if all goes well, we should still be in the default state
  tandapayState = await manager.read.getCommunityState();
  expect(tandapayState).toBe(TandaPayState.Default);

  anvil.kill();
});
