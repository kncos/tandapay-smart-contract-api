import { ChildProcess } from "child_process";
import { TandaPayTestSuite } from "../helpers/tandapay_test_suite";
import { deployFaucetToken, deployTandaPay, spawnAnvil } from "../helpers/tandapay_test_helpers";
import { TandaPayState } from "types";
import { Address } from "viem";

let anvil: ChildProcess;
let suite: TandaPayTestSuite;

beforeAll(async () => {
  anvil = await spawnAnvil();
  let fa = await deployFaucetToken();
  let ta = await deployTandaPay(fa);
  suite = new TandaPayTestSuite(fa,ta);
});

describe('default state tests', () => {
  it('can enter the default state', async () => {
    await suite.toDefaultState(true);
    const state = await suite.secretary.read.getCommunityState();
    expect(state).toBe(TandaPayState.Default);
  });


});

afterAll(() => {
  anvil.kill();
})