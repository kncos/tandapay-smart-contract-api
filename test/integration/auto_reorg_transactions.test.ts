import { ChildProcess } from "child_process";
import { spawnAnvil, deployFaucetToken, deployTandaPay } from "../helpers/tandapay_test_helpers";
import { TandaPayTestSuite } from "../helpers/tandapay_test_suite";
import { getAutoReorgTransactions } from "tandapay_macros/auto_reorg/auto_reorg_transactions";

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

describe('auto reorg transactions macro', () => {
  it('adding members to a fresh community, then using auto reorg', async () => {
    for (const acc of suite.accounts) {
      await suite.secretary.write.secretary.addMemberToCommunity({
        memberWalletAddress: acc.address
      });
    }

    const autoReorgResult = await getAutoReorgTransactions({
      reader: suite.secretary.read,
      batchReader: suite.secretary.batchRead,
    });

    console.log(autoReorgResult);
  });

  it('telling auto reorg what members we want to add, but not adding them', async () => {
    const autoReorgResult = await getAutoReorgTransactions({
      reader: suite.secretary.read,
      batchReader: suite.secretary.batchRead,
      newMembersToAdd: suite.accounts.map(acc => acc.address),
    });

    console.log(autoReorgResult);
  });

  it('adding a few members, and specifying a few to be added', async () => {
    for (const acc of suite.accounts.slice(0,5)) {
      await suite.secretary.write.secretary.addMemberToCommunity({
        memberWalletAddress: acc.address
      });
      //console.log(`ADDED: ${acc.address.slice(0,8)}`);
    }

    const newMembersToAdd = suite.accounts.slice(5).map(acc => acc.address);

    const autoReorgResult = await getAutoReorgTransactions({
      reader: suite.secretary.read,
      batchReader: suite.secretary.batchRead,
      newMembersToAdd,
    });

    console.log(autoReorgResult);
  });

  it('adding a few members, creating some subgroups, specifying a few to be added', async () => {
    for (const acc of suite.accounts.slice(0,5)) {
      await suite.secretary.write.secretary.addMemberToCommunity({
        memberWalletAddress: acc.address
      });
      //console.log(`ADDED: ${acc.address.slice(0,8)}`);
    }

    // create 1 subgroup. we should only witness auto-reorg making 2
    await suite.secretary.write.secretary.createSubgroup();

    const newMembersToAdd = suite.accounts.slice(5).map(acc => acc.address);

    const autoReorgResult = await getAutoReorgTransactions({
      reader: suite.secretary.read,
      batchReader: suite.secretary.batchRead,
      newMembersToAdd,
    });

    console.log(autoReorgResult);
  });

  it('adding a few members, creating too many subgroups, specifying a few to be added', async () => {
    for (const acc of suite.accounts.slice(0,5)) {
      await suite.secretary.write.secretary.addMemberToCommunity({
        memberWalletAddress: acc.address
      });
      //console.log(`ADDED: ${acc.address.slice(0,8)}`);
    }

    for (let i = 0; i < 5; i++)
      await suite.secretary.write.secretary.createSubgroup();

    const newMembersToAdd = suite.accounts.slice(5).map(acc => acc.address);

    const autoReorgResult = await getAutoReorgTransactions({
      reader: suite.secretary.read,
      batchReader: suite.secretary.batchRead,
      newMembersToAdd,
    });

    console.log(autoReorgResult);
  });

  it('specifying members who are already in the community as needsAdded', async () => {
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
      newMembersToAdd: suite.accounts.map(acc => acc.address),
    });

    console.log(autoReorgResult);
  });
});