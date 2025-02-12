import { hasWalletActions } from "../../src/contract_managers/types";
import { makeAccounts, makeWalletClients } from "../test_helpers"

test("hasWalletActions works", () => {
    const accs = makeAccounts();
    const wallets = makeWalletClients(accs);
    for (const w of wallets) {
        expect(hasWalletActions(w)).toBe(true);
    }
})