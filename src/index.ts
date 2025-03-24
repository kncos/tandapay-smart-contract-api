import { TandaPayInfo } from "_contracts/TandaPay";

const readMethodNames = TandaPayInfo.abi.filter(entry => entry.type === "function" && entry.stateMutability === "view").map(func => func.name);
console.log(readMethodNames.join('\n'));