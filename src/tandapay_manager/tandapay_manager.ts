import { Address } from "viem";
import { WriteableClient, ReadableClient } from "types";
import { TandaPayReadMethods } from "./read/tandapay_read_methods";
import { MemberWriteMethods } from "./write/member_write_methods";
import { SecretaryWriteMethods } from "./write/secretary_write_methods";
import { PublicWriteMethods } from "./write/public_write_methods";
import { TandaPayEvents } from "./read/tandapay_events";

/** Possible types of TandaPayManager */
export type TandaPayManagerKind =
  | "readonly"
  | "public"
  | "member"
  | "secretary";

type KeyedClient = {
  public: ReadableClient;
  wallet?: WriteableClient;
};

/** Parameters for creating a TandaPay manager */
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

/** Interface that simply defines the type of a TandaPay manager with only read operations */
export type ReadOnlyTandaPayManager = TandaPayManager<"readonly">;

/**
 * Interface that defines the type of a TandaPay manager with both read and write operations.
 * Further narrows this down based on what role the client plays in the TandaPay community
 * (e.g. `Member`, `Secretary`). If no role is provided, only public write methods will be available
 */
export type WriteableTandaPayManager<
  kind_ extends Exclude<TandaPayManagerKind, "readonly"> = "secretary",
> = TandaPayManager<kind_>;

/** TandaPay manager type. could be readable or writeable. */
export type TandaPayManager<
  kind_ extends TandaPayManagerKind = TandaPayManagerKind,
> = {
  kind: kind_;
  read: TandaPayReadMethods;
  events: TandaPayEvents;
  client: KeyedClient;
  tpAddress: Address;
} & (kind_ extends "readonly"
  ? unknown
  : {
      write: kind_ extends "secretary"
        ? {
            public: PublicWriteMethods;
            member: MemberWriteMethods;
            secretary: SecretaryWriteMethods;
          }
        : kind_ extends "member"
          ? { public: PublicWriteMethods; member: MemberWriteMethods }
          : kind_ extends "public"
            ? { public: PublicWriteMethods }
            : never;
    });

/**
 * Creates a new TandaPay manager of a specified `kind`. With `"readonly"` it will only have
 * read operations, and may be constructed with just a single client that serves as the public
 * client. With `"public"`, `"member"`, or `"secretary"`, it requires a keyedclient (both a
 * public and wallet client) to be specified and will have write operations
 * @param params CreateTandaPayManagerParameters
 * @returns A new tandapay managers with capabilities dependent on the parameters passed
 */
export function createTandaPayManager<kind_ extends TandaPayManagerKind>(
  params: CreateTandaPayManagerParameters<kind_>,
): TandaPayManager<kind_> {
  const { kind, client, tpAddress } = params;

  const publicClient = "public" in client ? client.public : client;
  const walletClient = "wallet" in client ? client.wallet : undefined;

  // every tandapay manager will have these properties
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

  // if we are constructing a readonly manager
  if (kind === "readonly") {
    return baseManager as kind_ extends "readonly"
      ? TandaPayManager<kind_>
      : never;
  // otherwise, we are making a writeable manager
  } else {
    // for a writeable manager, this should always be defined, as enforced by the
    // `CreateTandaPayManagerParameters` type
    if (!walletClient)
      throw new TypeError(
        "trying to create writeable tandapay manager but walletClient is undefined!",
      );

    // make the appropriate type of client (public, member, or secretary) and
    // populate the corresponding write methods
    if (kind === "public") {
      return {
        ...baseManager,
        write: {
          public: new PublicWriteMethods({
            client: walletClient,
            address: tpAddress,
          }),
        },
      } as kind_ extends "public" ? TandaPayManager<kind_> : never;
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
      } as kind_ extends "member" ? TandaPayManager<kind_> : never;
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
      } as kind_ extends "secretary" ? TandaPayManager<kind_> : never;
    }
  }
}
