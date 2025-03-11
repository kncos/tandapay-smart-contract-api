import { Address, publicActions } from "viem";
import {
  TandaPayRole,
  WriteableClient,
  ReadableClient,
  hasWalletActions,
} from "types";
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

export interface BaseTandaPayManager {
  kind: TandaPayManagerKind;
  read: TandaPayReadMethods<ReadableClient>;
  events: TandaPayEvents<ReadableClient>;
  client: ReadableClient | WriteableClient;
  tpAddress: Address;
}

/** Interface that simply defines the type of a TandaPay manager with only read operations */
export interface ReadOnlyTandaPayManager extends BaseTandaPayManager {
  kind: "readonly";
}

/**
 * Interface that defines the type of a TandaPay manager with both read and write operations.
 * Further narrows this down based on what role the client plays in the TandaPay community
 * (e.g. `Member`, `Secretary`). If no role is provided, only public write methods will be available
 */
export interface WriteableTandaPayManager<role_ extends TandaPayRole>
  extends BaseTandaPayManager {
  kind: role_ extends TandaPayRole.Secretary
    ? "secretary"
    : role_ extends TandaPayRole.Member
      ? "member"
      : "public";
  write: (role_ extends TandaPayRole.Secretary
    ? { member: MemberWriteMethods; secretary: SecretaryWriteMethods }
    : role_ extends TandaPayRole.Member
      ? { member: MemberWriteMethods }
      : unknown) & { public: PublicWriteMethods };
}

/**
 * Creates a writeable TandaPay manager, which includes Member and Secretary write methods. `Member and `Secretary` refer to roles
 * within the TandaPay smart contract instance which are allowed to perform a set of operations
 * @param client A viem client that contains all of the functionality needed to perform write operations. See: `ReadWriteClient`.
 * IT IS ASSUMED that this client's account actually does have the secretary permissions within the TandaPay smart contract
 * @param address The address of the TandaPay smart contract instance
 * @param role Specifies that this client has the Secretary permissions within the smart contract.
 */
export function createTandaPayManager(
  client: WriteableClient,
  address: Address,
  role: TandaPayRole.Secretary,
): WriteableTandaPayManager<TandaPayRole.Secretary>;

/**
 * Creates a writeable TandaPay manager, which includes Member write methods. `Member` refers to a specific role
 * within the TandaPay smart contract instance which is allowed to perform a set of member-only write operations.
 * @param client A viem client that contains all of the functionality needed to perform write operations. See: `ReadWriteClient`.
 * IT IS ASSUMED that this client's account actually does have the member permissions within the TandaPay smart contract
 * @param address The address of the TandaPay smart contract instance
 * @param role Specifies that this client has the Member permissions within the smart contract.
 */
export function createTandaPayManager(
  client: WriteableClient,
  address: Address,
  role: TandaPayRole.Member,
): WriteableTandaPayManager<TandaPayRole.Member>;

/**
 * Creates a writeable TandaPay manager, which only includes public write methods.
 * @param client A viem client that contains all of the functionality needed to perform write operations. See: `ReadWriteClient`.
 * @param address The address of the TandaPay smart contract instance
 * @param role Can be omitted, or can be `None`
 */
export function createTandaPayManager(
  client: WriteableClient,
  address: Address,
  role?: TandaPayRole.None,
): WriteableTandaPayManager<TandaPayRole.None>;

/**
 * Creates a read-only TandaPay manager
 * @param client A viem client that contains all functionality needed to perform readonly operations. See: `ReadableClient`
 * @param address The address of the TandaPay smart contract instance
 * @param role Does nothing when creating a read-only TandaPay manager. Can be omitted
 */
export function createTandaPayManager(
  client: ReadableClient,
  address: Address,
  role?: TandaPayRole,
): ReadOnlyTandaPayManager;

/** Implementation signature for createTandaPayManager */
export function createTandaPayManager(
  client: ReadableClient | WriteableClient,
  address: Address,
  role?: TandaPayRole,
): WriteableTandaPayManager<TandaPayRole> | ReadOnlyTandaPayManager {
  // create read methods because a ReadableClient or WriteableClient will always have read functionality
  const readMethods = new TandaPayReadMethods({ client, address });
  // will also need event methods, all clients will always have that
  const eventMethods = new TandaPayEvents({ client, address });

  // the base object we'll return is just a ReadOnlyTandaPayManager. This will be expanded if we can
  // also include write functionality, based on the client that was passed
  const base = {
    read: readMethods,
    events: eventMethods,
    client,
    tpAddress: address,
  };

  // To perform write operations, the client needs to have wallet actions and a valid account.
  if (hasWalletActions(client) && client.account) {
    // TODO: should this be done? is this necessary? it might not be good to modify the client like this
    //! meh shoudl be fine
    client.extend(publicActions);
    // If the role of Secretary was passed, then the writeable TandaPay manager will include
    // secretary write methods, member write methods, and public write methods
    if (role === TandaPayRole.Secretary) {
      return {
        ...base,
        kind: "secretary",
        write: {
          public: new PublicWriteMethods({ client, address }),
          member: new MemberWriteMethods({ client, address }),
          secretary: new SecretaryWriteMethods({ client, address }),
        },
      } as WriteableTandaPayManager<TandaPayRole.Secretary>;
      // if the role of Member was passed, the writeable TandaPay manager will include
      // member and public write methods
    } else if (role === TandaPayRole.Member) {
      return {
        ...base,
        kind: "member",
        write: {
          public: new PublicWriteMethods({ client, address }),
          member: new MemberWriteMethods({ client, address }),
        },
      } as WriteableTandaPayManager<TandaPayRole.Member>;
    }
    // finally, if the role was omitted, or `None` was passed, then the writeable
    // TandaPay manager will include only public write methods
    return {
      ...base,
      kind: "public",
      write: {
        public: new PublicWriteMethods({ client, address }),
      },
    } as WriteableTandaPayManager<TandaPayRole.None>;
  }

  // lastly, if the client passed does not meet the criteria for performing write
  // operations, we will simply return a read-only TandaPay manager
  return {
    ...base,
    kind: "readonly",
  } as ReadOnlyTandaPayManager;
}
