import { ChildProcess } from "child_process";
import { TandaPayTestSuite } from "../helpers/tandapay_test_suite";
import {
  deployFaucetToken,
  deployTandaPay,
  spawnAnvil,
} from "../helpers/tandapay_test_helpers";
import { getAvailableMethods } from "tandapay_macros/tandapay_available_methods";
import { memberInfoJsonReplacer } from "types";

let suite: TandaPayTestSuite;
let anvil: ChildProcess;

beforeAll(async () => {
  anvil = await spawnAnvil();
  const ftk = await deployFaucetToken();
  const tp = await deployTandaPay(ftk);
  suite = new TandaPayTestSuite(ftk, tp);
});

describe.skip("filters basic test", () => {
  it("basic secretary scenario", async () => {
    const res1 = await getAvailableMethods(suite.secretary);
    const res2 = await getAvailableMethods(suite.managers[1]);
    console.log(res1);
    console.log(res2);

    const info = await suite.secretary.read.getMemberInfoFromAddress({
      walletAddress: suite.accounts[14].address,
    });
    console.log(JSON.stringify(info, memberInfoJsonReplacer, 2));
  });
});

afterAll(() => anvil.kill());
