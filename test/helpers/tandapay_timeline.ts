import {
  advanceTime,
  makeManagers,
  makeTestClient,
  makeWriteableClients,
} from "./tandapay_test_helpers";
import { PeriodInfo } from "types";
import { TestClientWithPublicActions } from "./tandapay_test_suite";
import { DAYS_IN_SECONDS } from "../test_config";
import { Address, publicActions } from "viem";
import { TandaPayReader } from "tandapay_interface/read_interface";

export class TandaPayTimeline {
  read: TandaPayReader;
  testClient: TestClientWithPublicActions;

  public readonly DEFECT_DAY = 1.5;
  public readonly REFUNDS_DAY = 3.5;
  public readonly SUBMIT_CLAIMS_DAY = 7;
  public readonly WHITELIST_CLAIMS_DAY = 14;
  public readonly WITHDRAW_CLAIM_FUND_DAY = 17;
  public readonly PAY_PREMIUMS_DAY = 28;

  // simple aliases to advance to the day constants specified above easily
  advanceToDefectDay = async () =>
    await this.advanceToDayInPeriod(this.DEFECT_DAY);
  advanceToRefundsDay = async () =>
    await this.advanceToDayInPeriod(this.REFUNDS_DAY);
  advanceToSubmitClaimsDay = async () =>
    await this.advanceToDayInPeriod(this.SUBMIT_CLAIMS_DAY);
  advanceToWhitelistClaimsDay = async () =>
    await this.advanceToDayInPeriod(this.WHITELIST_CLAIMS_DAY);
  advanceToWithdrawClaimFundDay = async () =>
    await this.advanceToDayInPeriod(this.WITHDRAW_CLAIM_FUND_DAY);
  advanceToPayPremiumsDay = async () =>
    await this.advanceToDayInPeriod(this.PAY_PREMIUMS_DAY);

  constructor(address: Address) {
    const [m] = makeManagers(makeWriteableClients(1), address);
    this.read = m.read;
    this.testClient = makeTestClient().extend(publicActions);
  }

  /** Get info about the current period */
  async getCurrentPeriodInfo(): Promise<PeriodInfo> {
    const periodInfo = await this.read.getPeriodInfo();
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
    return (
      (Number(timestamp) - Number(periodInfo.startTimestamp)) / DAYS_IN_SECONDS
    );
  }

  /** Advances to a specific day in the period. Decimals supported (e.g., day 3.5) */
  async advanceToDayInPeriod(day: number) {
    const currentDay = Math.floor(await this.getCurrentDayInPeriod());
    const daysToAdvance = day - currentDay;
    //console.log(`advancing to day ${day}, currentDay: ${currentDay}, days to advance: ${daysToAdvance}`);
    if (daysToAdvance <= 0) {
      return Promise.reject(
        new Error(
          `already at or past day ${day}! (current day: ${currentDay})`,
        ),
      );
    }

    await advanceTime(daysToAdvance * DAYS_IN_SECONDS);
  }

  /** Advances time to the end of the current period */
  async advancePastEndOfPeriod() {
    const periodInfo = await this.getCurrentPeriodInfo();
    const timestamp = await this.getCurrentBlockTimestamp();
    if (periodInfo.endTimestamp < timestamp) {
      return Promise.reject(
        new Error(
          `already at the end of the period! eop: ${periodInfo.endTimestamp}, cur timestamp: ${timestamp}`,
        ),
      );
    }

    const offset = periodInfo.endTimestamp - timestamp;
    //console.log(`advancing to EOP, currentDay: ${await this.getCurrentDayInPeriod()}, days to advance: ${Number(offset) / DAYS_IN_SECONDS}`);
    // add an extra day for good measure
    await advanceTime(Number(offset) + DAYS_IN_SECONDS);
  }
}
