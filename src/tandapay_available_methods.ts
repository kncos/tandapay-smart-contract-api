import MemberWriteMethods from "contract_managers/member_write_methods";
import SecretaryWriteMethods from "contract_managers/secretary_write_methods";
import TandaPayReadMethods from "contract_managers/tandapay_read_methods";
import { WriteableClient } from "types";
import { Address, isAddressEqual } from "viem";

type MethodNames<T> = {
  [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T] & string;

type SecretaryWriteMethodNames = MethodNames<SecretaryWriteMethods>
type MemberWriteMethodNames = MethodNames<MemberWriteMethods>

export type AvailableMethods = Record<SecretaryWriteMethodNames | MemberWriteMethodNames, boolean>;

async function getAvailableSecretaryMethods<
  TClient extends WriteableClient
>(client: TClient, address: Address): Promise<Partial<AvailableMethods>> {
  let available: Partial<AvailableMethods> = {};
  const readMethods = new TandaPayReadMethods({client, address});
  const secretary = await readMethods.getSecretaryAddress();

  if (!isAddressEqual(secretary, client.account.address)) {
    
  }

  return available;
}

export default async function getAvailableMethods<
  TClient extends WriteableClient
>(client: TClient, tpAddress: Address): Promise<AvailableMethods> {
  // we'll build up a record as we go along
  let availableMethods: Partial<AvailableMethods> = {};


  return availableMethods as AvailableMethods;
}

