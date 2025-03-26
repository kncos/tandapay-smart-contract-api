import { TandaPayInfo } from "_contracts/TandaPay";

const readMethodNames = TandaPayInfo.abi
  .filter(
    (entry) => entry.type === "function" && entry.stateMutability === "view",
  )
  .map((func) => func.name);
console.log(readMethodNames.join("\n"));

//const client = {
//  public: createPublicClient({transport: http(), chain: anvil }),
//  wallet: createWalletClient({transport: http(), chain: anvil, account: mnemonicToAccount("j")})
//}
//
//const tpm = createTandaPayManager({
//  tpAddress: '0x0',
//  client,
//  kind: 'secretary',
//});
