import { Address } from "viem";
import { WriteableClient, ReadableClient } from "types";
import TandaPayReadMethods from "./read/tandapay_read_methods";
import MemberWriteMethods from "./write/member_write_methods";
import SecretaryWriteMethods from "./write/secretary_write_methods";
import PublicWriteMethods from "./write/public_write_methods";
import { TandaPayEvents } from "./read/tandapay_events";

export type TandaPayManagerKind =
  | "readonly"
  | "public"
  | "member"
  | "secretary";

type KeyedClient = {
  public: ReadableClient;
  wallet?: WriteableClient;
};

export type CreateTandaPayManagerParameters<
  kind_ extends TandaPayManagerKind = TandaPayManagerKind,
> = (kind_ extends "readonly"
  ? {
      kind: kind_;
      client: ReadableClient | KeyedClient;
    }
  : {
      kind: kind_;
      // require wallet for non-readonly client
      client: KeyedClient & { wallet: WriteableClient };
    }) & {
  tpAddress: Address;
};

export interface BaseTandaPayManager<kind_ extends TandaPayManagerKind> {
  kind: kind_;
  read: TandaPayReadMethods;
  events: TandaPayEvents;
  client: ReadableClient | WriteableClient | KeyedClient;
  tpAddress: Address;
}

/** Interface that simply defines the type of a TandaPay manager with only read operations */
export type ReadOnlyTandaPayManager = BaseTandaPayManager<"readonly">;

/**
 * Interface that defines the type of a TandaPay manager with both read and write operations.
 * Further narrows this down based on what role the client plays in the TandaPay community
 * (e.g. `Member`, `Secretary`). If no role is provided, only public write methods will be available
 */
export type WriteableTandaPayManager<
  kind_ extends Exclude<TandaPayManagerKind, "readonly"> = "secretary",
> = BaseTandaPayManager<kind_> & {
  write: (kind_ extends "secretary"
    ? { member: MemberWriteMethods; secretary: SecretaryWriteMethods }
    : kind_ extends "member"
      ? { member: MemberWriteMethods }
      : unknown) & { public: PublicWriteMethods };
};

export type CreateTandaPayManagerReturnType<kind_ extends TandaPayManagerKind> =
  kind_ extends "readonly"
    ? ReadOnlyTandaPayManager
    : kind_ extends "public"
      ? WriteableTandaPayManager<"public">
      : kind_ extends "member"
        ? WriteableTandaPayManager<"member">
        : kind_ extends "secretary"
          ? WriteableTandaPayManager<"secretary">
          : never;

/** Implementation signature for createTandaPayManager */
export function createTandaPayManager<kind_ extends TandaPayManagerKind>(
  params: CreateTandaPayManagerParameters<kind_>,
): CreateTandaPayManagerReturnType<kind_> {
  const { kind, client, tpAddress } = params;

  const publicClient = "public" in client ? client.public : client;
  const walletClient = "wallet" in client ? client.wallet : undefined;

  const baseManager = {
    kind,
    client: {
      public: publicClient,
      wallet: walletClient,
    },
    tpAddress,
    read: new TandaPayReadMethods({ address: tpAddress, client: publicClient }),
    events: new TandaPayEvents({ address: tpAddress, client: publicClient }),
  };

  if (kind === "readonly") {
    return baseManager as kind_ extends "readonly"
      ? ReadOnlyTandaPayManager
      : never;
  } else {
    if (!walletClient)
      throw new TypeError(
        "trying to create writeable tandapay manager but walletClient is undefined!",
      );

    if (kind === "public") {
      return {
        ...baseManager,
        write: {
          public: new PublicWriteMethods({
            client: walletClient,
            address: tpAddress,
          }),
        },
      } as CreateTandaPayManagerReturnType<kind_>;
    } else if (kind === "member") {
      return {
        ...baseManager,
        write: {
          public: new PublicWriteMethods({
            client: walletClient,
            address: tpAddress,
          }),
          member: new MemberWriteMethods({
            client: walletClient,
            address: tpAddress,
          }),
        },
      } as CreateTandaPayManagerReturnType<kind_>;
    } else {
      return {
        ...baseManager,
        write: {
          public: new PublicWriteMethods({
            client: walletClient,
            address: tpAddress,
          }),
          member: new MemberWriteMethods({
            client: walletClient,
            address: tpAddress,
          }),
          secretary: new SecretaryWriteMethods({
            client: walletClient,
            address: tpAddress,
          }),
        },
      } as CreateTandaPayManagerReturnType<kind_>;
    }
  }
}