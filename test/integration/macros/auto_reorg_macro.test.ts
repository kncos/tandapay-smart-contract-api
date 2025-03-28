import { ChildProcess } from "child_process";
import {
  spawnAnvil,
  deployFaucetToken,
  deployTandaPay,
} from "../../helpers/tandapay_test_helpers";
import { TandaPayTestSuite } from "../../helpers/tandapay_test_suite";
import { getAutoReorgTransactions } from "tandapay_macros/auto_reorg/auto_reorg_transactions";
import { DEFAULT_CLAIMANT_INDEX, DEFAULT_DEFECTOR } from "../../test_config";
import { memberInfoJsonReplacer } from "types";

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

describe.skip("auto reorg transactions macro", () => {
  it("adding members to a fresh community, then using auto reorg", async () => {
    for (const acc of suite.accounts) {
      await suite.secretary.write.secretary.addMemberToCommunity({
        memberWalletAddress: acc.address,
      });
    }

    const autoReorgResult = await getAutoReorgTransactions({
      reader: suite.secretary.read,
      batchReader: suite.secretary.batchRead,
    });

    print(autoReorgResult);
  });

  it("telling auto reorg what members we want to add, but not adding them", async () => {
    const autoReorgResult = await getAutoReorgTransactions({
      reader: suite.secretary.read,
      batchReader: suite.secretary.batchRead,
      newMembers: suite.accounts.map((acc) => acc.address),
    });

    print(autoReorgResult);
  });

  it("adding a few members, and specifying a few to be added", async () => {
    for (const acc of suite.accounts.slice(0, 5)) {
      await suite.secretary.write.secretary.addMemberToCommunity({
        memberWalletAddress: acc.address,
      });
      //print(`ADDED: ${acc.address.slice(0,8)}`);
    }

    const newMembersToAdd = suite.accounts.slice(5).map((acc) => acc.address);

    const autoReorgResult = await getAutoReorgTransactions({
      reader: suite.secretary.read,
      batchReader: suite.secretary.batchRead,
      newMembers: newMembersToAdd,
    });

    print(autoReorgResult);
  });

  it("adding a few members, creating some subgroups, specifying a few to be added", async () => {
    for (const acc of suite.accounts.slice(0, 5)) {
      await suite.secretary.write.secretary.addMemberToCommunity({
        memberWalletAddress: acc.address,
      });
      //print(`ADDED: ${acc.address.slice(0,8)}`);
    }

    // create 1 subgroup. we should only witness auto-reorg making 2
    await suite.secretary.write.secretary.createSubgroup();

    const newMembersToAdd = suite.accounts.slice(5).map((acc) => acc.address);

    const autoReorgResult = await getAutoReorgTransactions({
      reader: suite.secretary.read,
      batchReader: suite.secretary.batchRead,
      newMembers: newMembersToAdd,
    });

    print(autoReorgResult);
  });

  it("adding a few members, creating too many subgroups, specifying a few to be added", async () => {
    for (const acc of suite.accounts.slice(0, 5)) {
      await suite.secretary.write.secretary.addMemberToCommunity({
        memberWalletAddress: acc.address,
      });
      //print(`ADDED: ${acc.address.slice(0,8)}`);
    }

    for (let i = 0; i < 5; i++)
      await suite.secretary.write.secretary.createSubgroup();

    const newMembersToAdd = suite.accounts.slice(5).map((acc) => acc.address);

    const autoReorgResult = await getAutoReorgTransactions({
      reader: suite.secretary.read,
      batchReader: suite.secretary.batchRead,
      newMembers: newMembersToAdd,
    });

    print(autoReorgResult);
  });

  it("specifying members who are already in the community as needsAdded", async () => {
    for (const acc of suite.accounts) {
      await suite.secretary.write.secretary.addMemberToCommunity({
        memberWalletAddress: acc.address,
      });
    }

    for (let i = 0; i < 3; i++)
      await suite.secretary.write.secretary.createSubgroup();

    const autoReorgResult = await getAutoReorgTransactions({
      reader: suite.secretary.read,
      batchReader: suite.secretary.batchRead,
      newMembers: suite.accounts.map((acc) => acc.address),
    });

    print(autoReorgResult);
  });

  it("should not try to reorg a defector", async () => {
    await suite.toPeriodAfterDefectors({
      alreadyInDefault: false,
      defectors: [DEFAULT_DEFECTOR],
      claimants: [DEFAULT_CLAIMANT_INDEX],
    });

    const startP = await suite.secretary.read.getCurrentPeriodId();
    await suite.advanceTimeAndIssueRefunds();
    await suite.advanceTimeAndPayPremiums();
    await suite.advanceTimeAndAdvancePeriod();
    await suite.advanceTimeAndIssueRefunds();
    await suite.advanceTimeAndPayPremiums();
    await suite.advanceTimeAndAdvancePeriod();
    await suite.advanceTimeAndIssueRefunds();
    await suite.advanceTimeAndPayPremiums();
    await suite.advanceTimeAndAdvancePeriod();
    const endP = await suite.secretary.read.getCurrentPeriodId();

    const defectorAddr = suite.accounts[DEFAULT_DEFECTOR].address;
    const defectorInfo = await suite.secretary.read.getMemberInfoFromAddress({
      walletAddress: defectorAddr,
    });
    print(
      `defector:\n${JSON.stringify(defectorInfo, memberInfoJsonReplacer, 2)}`,
    );

    const someOtherAddr = suite.accounts[0].address;
    const someOtherInfo = await suite.secretary.read.getMemberInfoFromAddress({
      walletAddress: someOtherAddr,
    });
    print(
      `someOther:\n${JSON.stringify(someOtherInfo, memberInfoJsonReplacer, 2)}`,
    );

    print(`startP: ${startP} endP: ${endP}`);

    const autoReorgResult = await getAutoReorgTransactions({
      reader: suite.secretary.read,
      batchReader: suite.secretary.batchRead,
    });

    print(autoReorgResult);
  });
});
