//import TandaPayReadMethods from "contract_managers/tandapay_read_methods";
//import {
//  memberWriteMethodNames,
//  MemberWriteMethodNames,
//  PeriodInfo,
//  publicWriteMethodNames,
//  PublicWriteMethodNames,
//  secretaryWriteMethodNames,
//  SecretaryWriteMethodNames,
//  TandaPayState,
//  WriteableClient,
//} from "types";
//import { Address, publicActions } from "viem";

//export interface AvailableMethods {
//  public: PublicWriteMethodNames[];
//  member: MemberWriteMethodNames[];
//  secretary: SecretaryWriteMethodNames[];
//}
//
//export interface GetAvailableMethodsParameters {
//  client: WriteableClient;
//  address: Address;
//}
//
//interface TandaPayInfo {
//  blockTimestamp: bigint;
//  periodInfo: PeriodInfo;
//  state: TandaPayState;
//}
//
//async function getTandaPayInfo(
//  params: GetAvailableMethodsParameters,
//): Promise<TandaPayInfo> {
//  const read = new TandaPayReadMethods(params);
//  const block = await params.client.extend(publicActions).getBlock();
//  const blockTimestamp = block.timestamp;
//  const curPeriod = await read.getCurrentPeriodId();
//  const periodInfo = await read.getPeriodInfo(curPeriod);
//
//  const state = await read.getCommunityState();
//
//  return {
//    blockTimestamp,
//    periodInfo,
//    state,
//  };
//}
//
//function secondsToDays(secs: number | bigint) {
//  if (typeof secs === "number") {
//    return BigInt(secs * 60 * 60 * 24);
//  }
//
//  return secs * 60n * 60n * 24n;
//}
//
//function getAvailablePublicMethods(
//  info: TandaPayInfo,
//): PublicWriteMethodNames[] {
//  const { blockTimestamp, periodInfo, state } = info;
//
//  const res: PublicWriteMethodNames[] = [];
//
//  for (const methodName of publicWriteMethodNames) {
//    switch (methodName) {
//      case "issueRefund": {
//        const day3 = periodInfo.startTimestamp + secondsToDays(3) + 60n;
//        const day4 = periodInfo.startTimestamp + secondsToDays(4) - 60n;
//        if (day3 < blockTimestamp && blockTimestamp < day4)
//          res.push("issueRefund");
//        break;
//      }
//      default:
//        throw new Error(
//          "encountered methodName not on PublicWriteMethodNames?",
//        );
//    }
//  }
//
//  return res;
//}
//
//async function getAvailableMemberMethods(
//  info: TandaPayInfo,
//): Promise<MemberWriteMethodNames[]> {
//  return ["acceptSecretaryRole"];
//}
//
//async function getAvailableSecretaryMethods(
//  info: TandaPayInfo,
//): Promise<SecretaryWriteMethodNames[]> {
//  return ["addMemberToCommunity"];
//}
//
//export async function getAvailableMethods(
//  params: GetAvailableMethodsParameters,
//): Promise<AvailableMethods> {
//  const info = await getTandaPayInfo(params);
//
//  try {
//    const publicMethods = await getAvailablePublicMethods(info);
//    const memberMethods = await getAvailableMemberMethods(info);
//    const secretaryMethods = await getAvailableSecretaryMethods(info);
//
//    return {
//      public: [...publicMethods],
//      member: [...memberMethods],
//      secretary: [...secretaryMethods],
//    };
//  } catch (error) {
//    console.error(
//      "failed to get method availability. returning all methods",
//      error,
//    );
//    return {
//      public: publicWriteMethodNames,
//      member: memberWriteMethodNames,
//      secretary: secretaryWriteMethodNames,
//    };
//  }
//}
//
