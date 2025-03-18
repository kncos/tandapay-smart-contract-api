import { http } from "viem";
import { anvil } from "viem/chains";

export const WEI_CONVERSION = 10n ** 18n;
/** a constant for easily converting days -> seconds and vice-versa */
export const DAYS_IN_SECONDS = 24 * 60 * 60;
/** The number of test accounts we're using for all of these tests */
export const NUM_TEST_ACCOUNTS = 15;
/** An arbitrarily high amount of FTK we'll distribute to every client */
export const DEFAULT_FTK_BALANCE = 10n ** 8n * WEI_CONVERSION;
/** Default coverage requirement we'll set in the smart contract */
export const DEFAULT_COVERAGE_REQUIREMENT = 1500n * WEI_CONVERSION;

/** viem transport we'll use for test networks */
export const TEST_TRANSPORT = http();
/** viem chain we will use for test networks */
export const TEST_CHAIN = anvil;
/** viem "mode" we will use for constructing test clients */
export const TEST_MODE = "anvil";
/** mnemonic used to generate accounts used in testing */
export const TEST_ACCOUNT_MNEMONIC =
  "test test test test test test test test test test test junk";

export const DEFAULT_CLAIMANT_INDEX = 1;
export const DEFAULT_DEFECTOR = 2;
