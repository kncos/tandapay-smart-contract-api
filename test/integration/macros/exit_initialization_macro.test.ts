import { ChildProcess } from "child_process";
import { exitInitializationState } from "tandapay_macros/initialization_state/exit_initialization_state";
import { spawnAnvil, deployFaucetToken, deployTandaPay } from "../../helpers/tandapay_test_helpers";
import { TandaPayTestSuite } from "../../helpers/tandapay_test_suite";
import { DEFAULT_COVERAGE_REQUIREMENT } from "../../test_config";
import { getInitializationStateInfo } from "tandapay_macros/initialization_state/get_initialization_state_info";

let anvil: ChildProcess;
let suite: TandaPayTestSuite;

beforeEach(async () => {
  anvil = await spawnAnvil();
  const fa = await deployFaucetToken();
  const ta = await deployTandaPay(fa);
  suite = new TandaPayTestSuite(fa, ta);
});

afterEach(() => {
  anvil.kill();
});

// did this so i could just do a quick find+replace on console.log cause i'm lazy
const shouldPrint = true;
function print(message: unknown) {
  if (shouldPrint) console.log(message);
}

describe.skip('exit initialization state macro tests', () => {
  it('basic case, fresh community with no members, assigning members and specifying successors', async () => {
    const exitInitializationStateResult = await exitInitializationState({
      reader: suite.secretary.read,
      batchReader: suite.secretary.batchRead,
      totalCoverageWei: DEFAULT_COVERAGE_REQUIREMENT,
      newMembers: suite.accounts.map(acc => acc.address),
      newSecretarySuccessors: suite.accounts.map(acc => acc.address).slice(0,2),
    });

    print(exitInitializationStateResult);
  });

  it('see what information we can get', async () => {
    const initializationStateInfo = await getInitializationStateInfo({
      reader: suite.secretary.read, 
      batchReader: suite.secretary.batchRead
    });
    print(initializationStateInfo);
  })
});