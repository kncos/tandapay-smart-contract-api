import { ChildProcess } from "child_process";
import { TandaPayTestSuite } from "../helpers/tandapay_test_suite";
import {
  deployFaucetToken,
  deployTandaPay,
  spawnAnvil,
} from "../helpers/tandapay_test_helpers";
import { ReadableClient, TandaPayState } from "types";
import { TandaPayEvents } from "contract_managers/tandapay_events";
import { publicActions } from "viem";

let anvil: ChildProcess;
let suite: TandaPayTestSuite;

beforeAll(async () => {
  anvil = await spawnAnvil();
  const fa = await deployFaucetToken();
  const ta = await deployTandaPay(fa);
  suite = new TandaPayTestSuite(fa, ta);
});

describe("default state tests", () => {
  it("can enter the default state", async () => {
    await suite.toDefaultState(true);
    const state = await suite.secretary.read.getCommunityState();
    expect(state).toBe(TandaPayState.Default);

    let events = new TandaPayEvents({client: suite.secretaryClient.extend(publicActions) as ReadableClient, address: suite.tpAddress});
    let logs = await events.getLogs({
      events: ["enteredDefaultState", "addedToCommunity"],
      fromBlock: 0n,
    });
    console.log(logs);
  });
});

afterAll(() => {
  anvil.kill();
});
