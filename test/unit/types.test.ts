import { isWriteableClient } from "types";
import { makeWriteableClients } from "../helpers/tandapay_test_helpers";

test("hasWalletActions works", () => {
  const wallets = makeWriteableClients(5);
  for (const w of wallets) {
    expect(isWriteableClient(w)).toBe(true);
  }
});
