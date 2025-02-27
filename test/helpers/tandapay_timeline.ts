import { advanceTime, makeManagers, makeTestClient, makeWriteableClients } from "./tandapay_test_helpers";
import { PeriodInfo } from "types";
import { TandaPayTestSuite, DAYS_IN_SECONDS, TestClientWithPublicActions } from "./tandapay_test_suite";
import { Address, publicActions } from "viem";
import TandaPayReadMethods from "contract_managers/tandapay_read_methods";

export default class TandaPayTimeline {
  read: TandaPayReadMethods;
  testClient: TestClientWithPublicActions;

  public readonly REFUNDS_DAY = 3.5;
  public readonly SUBMIT_CLAIMS_DAY = 7;
  public readonly WHITELIST_CLAIMS_DAY = 16;
  public readonly PAY_PREMIUMS_DAY = 28;
  
  // simple aliases to advance to the day constants specified above easily
  advanceToRefundsDay = async () => await this.advanceToDayInPeriod(this.REFUNDS_DAY);
  advanceToSubmitClaimsDay = async () => await this.advanceToDayInPeriod(this.SUBMIT_CLAIMS_DAY);
  advanceToWhitelistClaimsDay = async () => await this.advanceToDayInPeriod(this.WHITELIST_CLAIMS_DAY);
  advanceToPayPremiumsDay = async () => await this.advanceToDayInPeriod(this.PAY_PREMIUMS_DAY);

  constructor(address: Address) {
    let [m] = makeManagers(makeWriteableClients(1), address);
    this.read = m.read;
    this.testClient = makeTestClient().extend(publicActions);
  }

  /** Get info about the current period */
  async getCurrentPeriodInfo(): Promise<PeriodInfo> {
    const periodId = await this.read.getCurrentPeriodId();
    const periodInfo = await this.read.getPeriodInfo(periodId);
    return periodInfo;
  }

  /** Get the timestamp of the current block. Returns a bigint unix epoch seconds timestamp */
  async getCurrentBlockTimestamp(): Promise<bigint> {
    const block = await this.testClient.getBlock();
    return block.timestamp;
  }

  /**
   * Return the current day in the period, as a floating point value
   * @returns The current day in the period. NOTE: can contain a decimal
   */
  async getCurrentDayInPeriod(): Promise<number> {
    const periodInfo = await this.getCurrentPeriodInfo();
    const timestamp = await this.getCurrentBlockTimestamp();
    return (Number(timestamp) - Number(periodInfo.startTimestamp)) / (DAYS_IN_SECONDS);
  }

  /** Advances to a specific day in the period. Decimals supported (e.g., day 3.5) */
  async advanceToDayInPeriod(day: number) {
    const currentDay = Math.floor(await this.getCurrentDayInPeriod());
    const daysToAdvance = day - currentDay; 
    if (daysToAdvance <= 0) {
      return Promise.reject(`already at or past day ${day}! (current day: ${currentDay})`);
    }

    await advanceTime(daysToAdvance * DAYS_IN_SECONDS)
  }
  
  /** Advances time to the end of the current period */
  async advancePastEndOfPeriod() {
    const periodInfo = await this.getCurrentPeriodInfo();
    const timestamp = await this.getCurrentBlockTimestamp();
    if (periodInfo.endTimestamp < timestamp) {
      return Promise.reject(`already at the end of the period!`);
    }

    const offset = periodInfo.endTimestamp - timestamp;
    // add an extra day for good measure
    await advanceTime(Number(offset) + DAYS_IN_SECONDS);
  }
}