import { TandaPayRole, WriteableClient } from "types";
import { makeManagers, makeWriteableClients, spawnAnvil } from "../test_helpers";
import { getAnyCachedDefaultStateOrDeploy } from "./setupDefaultState";
import { WriteableTandaPayManager } from "contract_managers/tandapay_manager";

let anvil: Awaited<ReturnType<typeof spawnAnvil>>;
let defaultStateInfo: Awaited<ReturnType<typeof getAnyCachedDefaultStateOrDeploy>>;

let writeableClients: WriteableClient[];
let managers: WriteableTandaPayManager<TandaPayRole.Secretary>[];

beforeEach(async () => {
  anvil = await spawnAnvil();
  defaultStateInfo = await getAnyCachedDefaultStateOrDeploy();
  writeableClients = makeWriteableClients(15);
  managers = makeManagers(writeableClients, defaultStateInfo.tpAddress);
});

describe('claims, defectors, and other related functions', () => {
  it('placeholder', async () => {
    expect(2).toBe(1+1);
  })
})


afterEach(() => {
  anvil.kill();
})