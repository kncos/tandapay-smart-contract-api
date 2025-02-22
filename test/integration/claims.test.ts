import { TandaPayRole, WriteableClient } from "types";
import {
  advanceTime,
  makeManagers,
  makeTestClient,
  makeWriteableClients,
  spawnAnvil,
} from "../test_helpers";
import { getAnyCachedDefaultStateOrDeploy } from "./setupDefaultState";
import { WriteableTandaPayManager } from "contract_managers/tandapay_manager";
import { publicActions } from "viem";
import { TandaPayInfo } from "_contracts/TandaPay";

let anvil: Awaited<ReturnType<typeof spawnAnvil>>;
let defaultStateInfo: Awaited<
  ReturnType<typeof getAnyCachedDefaultStateOrDeploy>
>;

let writeableClients: WriteableClient[];
let managers: WriteableTandaPayManager<TandaPayRole.Secretary>[];

const tc = makeTestClient().extend(publicActions);

async function toDaySeven() {
  // have everyone pay their premiums
  for (const m of managers) {
    await m.write.member.payPremium();
  }

  // advance the period
  await advanceTime(5 * 24 * 60 * 60);
  await managers[0].write.secretary.advancePeriod();
  await advanceTime(3.5 * 24 * 60 * 60);
  await managers[0].write.public.issueRefund();
  await advanceTime(3.5 * 24 * 60 * 60);
}

beforeEach(async () => {
  anvil = await spawnAnvil();
  defaultStateInfo = await getAnyCachedDefaultStateOrDeploy();
  writeableClients = makeWriteableClients(15);
  managers = makeManagers(writeableClients, defaultStateInfo.tpAddress);

  await toDaySeven();
}, 30000);

describe("toDaySeven helper works", () => {
  it("advances the period and issues refunds successfully", async () => {
    const curPeriod = await managers[0].read.getCurrentPeriodId();
    expect(curPeriod).toBe(1n);
  }, 30000);

//  it("event filter works?", async () => {
//    const filter = await tc.createEventFilter({
//      address: defaultStateInfo.tpAddress,
//      events: TandaPayInfo.abi.filter((input) => input.type === "event"),
//      fromBlock: 0n,
//    });
//
//    const hashes = await tc.getFilterChanges({ filter });
//    //console.log(hashes);
//  });
});

afterEach(() => {
  anvil.kill();
});
