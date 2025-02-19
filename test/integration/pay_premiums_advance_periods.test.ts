import { publicActions } from "viem";
import {
  advanceTime,
  deployFaucetToken,
  deployTandaPay,
  ftkApprove,
  makeManagers,
  makeTestClient,
  makeWriteableClients,
  spawnAnvil,
} from "../test_helpers";
import {
  CachedDefaultStateInfo,
  getAnyCachedDefaultState,
  setupDefaultState,
} from "./setupDefaultState";

let anvil: Awaited<ReturnType<typeof spawnAnvil>>;

beforeEach(async () => {
  anvil = await spawnAnvil();
});

test("can advance through periods and pay premiums", async () => {
  // address of the TandaPay smart contract, faucet token smart contract,
  // and a dump of the blockchain after getting to the default state
  let defaultStateInfo: CachedDefaultStateInfo;
  const tc = makeTestClient().extend(publicActions);

  // if we already have any cached test network with a default state, retrieve that
  const anyCache = getAnyCachedDefaultState();
  if (anyCache) {
    defaultStateInfo = anyCache;
    await tc.loadState({ state: defaultStateInfo.dump });
    // if we don't have a cached default state, just make one
  } else {
    const ftkAddress = await deployFaucetToken();
    const tpAddress = await deployTandaPay(ftkAddress);
    defaultStateInfo = await setupDefaultState(tpAddress, ftkAddress);
  }

  const writeableClients = makeWriteableClients(15);
  // we can just always do this, it may not be necessary since we used setupDefaultState somewhere.
  // doesn't hurt though
  await ftkApprove({
    writeableClients: writeableClients,
    ftkAddress: defaultStateInfo.ftkAddress,
    spender: defaultStateInfo.tpAddress,
    amount: 10n ** 7n * 10n ** 18n,
    amountToDistribute: 10n ** 7n * 10n ** 18n,
  });

  // we need managers here
  const managers = makeManagers(writeableClients, defaultStateInfo.tpAddress);

  // at this point, everyone (should?) owe premiums
  for (const m of managers) {
    await m.write.member.payPremium();
  }

  // so, even though they did pay premiums, that's for *next* period therefore this
  // value should still be false for all of them
  for (const wc of writeableClients) {
    const memberInfo = await managers[0].read.getMemberInfoFromAddress(
      wc.account.address,
    );
    expect(memberInfo.isPremiumPaidThisPeriod).toBe(false);
  }

  // we'll do this multiple times
  //! This is basically the procedure for going through periods in TandaPay.
  //! I tested this with (i < 16) and even that works, but leave it at 3 for now... to speed up tests
  for (let i = 0; i < 3; i++) {
    // advance the period; ensuring that the value actually gets incremented
    const periodId = await managers[0].read.getCurrentPeriodId();
    await managers[0].write.secretary.advancePeriod();
    const periodId2 = await managers[0].read.getCurrentPeriodId();
    // periodId2 > periodId
    expect(periodId2).toBeGreaterThan(periodId);

    // now, we're in the period they paid premiums for. Therefore, it should evaluate to true
    for (const wc of writeableClients) {
      const memberInfo = await managers[0].read.getMemberInfoFromAddress(
        wc.account.address,
      );
      expect(memberInfo.isPremiumPaidThisPeriod).toBe(true);
    }

    // advance by 3.5 days because that's when they can get refunds
    await advanceTime(3.5 * 24 * 60 * 60);
    // here, they don't actually get anything, but we always issue refunds in this window
    await managers[1].write.public.issueRefund();

    // advance by another 25 days, should have us in day 28.5, ripe for premium payments
    await advanceTime(25 * 24 * 60 * 60);

    // now they can pay their premiums again
    for (const m of managers) await m.write.member.payPremium();

    // adavnce time again so we're good to advance the period
    await advanceTime(5 * 24 * 60 * 60);
  }
}, 30000);

afterEach(() => {
  anvil.kill();
});
