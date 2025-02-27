import {
  deployFaucetToken,
  deployTandaPay, makeTestClient, spawnAnvil
} from "../helpers/tandapay_test_helpers";
import { publicActions } from "viem";
import { TandaPayInfo } from "_contracts/TandaPay";
import { TandaPayTestSuite } from "../helpers/tandapay_test_suite";

let anvil: Awaited<ReturnType<typeof spawnAnvil>>;
let suite: TandaPayTestSuite;

const tc = makeTestClient().extend(publicActions);

async function toDaySeven() {
  const timestamp = (await tc.getBlock()).timestamp;
  const curPeriod = await suite.secretary.read.getCurrentPeriodId();
  if (curPeriod != 0n) {
    const periodInfo = await suite.secretary.read.getPeriodInfo(curPeriod);
    if (timestamp < (periodInfo.startTimestamp + 27n * 24n * 60n * 60n))
      console.error(`too early to pay premiums! timestamp ${timestamp}, period start: ${periodInfo.startTimestamp}`);
    if (timestamp > periodInfo.endTimestamp)
      console.error(`too late to pay premiums! timestamp ${timestamp}, period end: ${periodInfo.endTimestamp}`);
  }

  // have everyone pay their premiums
  for (const m of suite.managers) {
    await m.write.member.payPremium();
  }

  // advance the period
  await advanceTime(5 * 24 * 60 * 60);
  await suite.secretary.write.secretary.advancePeriod();
  await advanceTime(3.5 * 24 * 60 * 60);
  try {
    await suite.secretary.write.public.issueRefund();
  } catch (error) {
    console.log(`error issung refunds: ${error}`);
  }
  await advanceTime(3.5 * 24 * 60 * 60);
}

//! just extracted the logic here for submitting and whitelisting a claim
//! so we can get back to this state again easily
async function toDaySixteen_makeAndWhitelistClaim() {
  await toDaySeven();
  // at day 7, someone can submit a claim. This is available until day 14
  await suite.managers[5].write.member.submitClaim();
  // next, let's go to day 15. At this point, the claim should be able to be whitelisted
  await advanceTime(8 * 24 * 60 * 60);
  // get the period ID, we'll need that to get claim info
  const periodId = await suite.secretary.read.getCurrentPeriodId();
  // get the claim ID, there should only be one
  const claimIds = await suite.secretary.read.getClaimIdsInPeriod(periodId);
  // whitelist the claim
  await suite.secretary.write.secretary.whitelistClaim(claimIds[0]);
}

beforeAll(async () => {
  const fa = await deployFaucetToken();
  const tp = await deployTandaPay(fa);
  suite = new TandaPayTestSuite(fa, tp);
})

beforeEach(async () => {
  anvil = await spawnAnvil();
}, 30000);

describe("toDaySeven helper works", () => {
  it("advances the period and issues refunds successfully", async () => {
    const blockNumber = await tc.getBlockNumber();
    await toDaySeven();
    // here, we make sure the period wad advanced
    const curPeriod = await suite.secretary.read.getCurrentPeriodId();
    expect(curPeriod).toBe(1n);

    // here, we want to make sure refunds were issued
    const events = await tc.getContractEvents({
      abi: TandaPayInfo.abi,
      address: suite.tpAddress,
      fromBlock: blockNumber,
      eventName: 'RefundIssued',
    });
    expect(events.length).toBe(1);
  }, 30000);

  it("a claim can be submitted and whitelisted", async () => {
    const blockNumber = await tc.getBlockNumber();
    await toDaySeven();

    // at day 7, someone can submit a claim. This is available until day 14
    await suite.managers[5].write.member.submitClaim();
    // next, let's go to day 15. At this point, the claim should be able to be whitelisted
    await advanceTime(8 * 24 * 60 * 60);

    // get the period ID, we'll need that to get claim info
    const periodId = await suite.secretary.read.getCurrentPeriodId();
    // get the claim ID, there should only be one
    const claimIds = await suite.secretary.read.getClaimIdsInPeriod(periodId);
    // there shouldn't be *any* whitelisted claims yet since we haven't whitelisted it
    let whitelistedClaimIds = await suite.secretary.read.getWhitelistedClaimIdsInPeriod(periodId);

    // perform those checks
    expect(claimIds.length).toBe(1);
    expect(whitelistedClaimIds.length).toBe(0);

    // whitelist the claim
    await suite.secretary.write.secretary.whitelistClaim(claimIds[0]);

    // update whitelistedClaimIds array
    whitelistedClaimIds = await suite.secretary.read.getWhitelistedClaimIdsInPeriod(periodId);

    // check that the numbers are the same
    expect(claimIds.length).toBe(1);
    expect(whitelistedClaimIds.length).toBe(1);
    // the claim we got should be the one that's whitelisted
    expect(claimIds[0]).toBe(whitelistedClaimIds[0]);
  });

  it("examine what happens when the period goes forward", async () => {
    const blockNumber = await tc.getBlockNumber();
    // go to day 16 of this period, having someone submit a claim
    // and the secretary whitelist it 
    await toDaySixteen_makeAndWhitelistClaim();
    // advance to day 27 so individuals may pay premiums
    await advanceTime(12 * 24 * 60 * 60);
    // this will have them pay their premiums, then advance to the next
    // period, issue refunds, and go to day 7
    await toDaySeven();

    // get all of the events that occurred
    //let events = tc.getLogs({
    //  address: defaultStateInfo.tpAddress,
    //  events: TandaPayInfo.abi.filter((event) => event.type === "event"),
    //  fromBlock: blockNumber,
    //});
    //console.log(events);
  })
});

afterEach(() => {
  anvil.kill();
});
