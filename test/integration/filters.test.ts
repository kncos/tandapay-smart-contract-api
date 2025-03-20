import { ChildProcess } from "child_process";
import { TandaPayTestSuite } from "../helpers/tandapay_test_suite";
import { deployFaucetToken, deployTandaPay, spawnAnvil } from "../helpers/tandapay_test_helpers";
import { getAvailableMethods } from "method_filter/tandapay_available_methods";


let suite: TandaPayTestSuite;
let anvil: ChildProcess;

beforeAll(async () => {
  anvil = await spawnAnvil();
  const ftk = await deployFaucetToken();
  const tp = await deployTandaPay(ftk);
  suite = new TandaPayTestSuite(ftk, tp);
});

describe("filters basic test", () => {
  it("basic secretary scenario", async () => {
    const res1 = await getAvailableMethods(suite.secretary);
    const res2 = await getAvailableMethods(suite.managers[1]);
    console.log(res1);
    console.log(res2);
  });

})