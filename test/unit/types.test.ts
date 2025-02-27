import { hasWalletActions } from "types";
import { makeWriteableClients } from "../helpers/tandapay_test_suite";

test("hasWalletActions works", () => {
  const wallets = makeWriteableClients(5);
  for (const w of wallets) {
    expect(hasWalletActions(w)).toBe(true);
  }
});
