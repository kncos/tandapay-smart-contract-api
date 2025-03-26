import { TandaPayReader } from "tandapay_interface/read_interface";
import { Address } from "viem";

/**
 * Whether or not a secretary handover is in progress, whether it's a voluntary handover or
 * emergency handover, and the nominee.
 *
 * If voluntary, the nominee will be the one specified by the secretary, who needs to accept the role.
 * If emergency, the nominee will be the one specified by the first successor who initiated the emergency handover
 * (the reasoning is that once a second successor signs and specifies who they want to succeed, the smart contract
 * will determine whether the two successors who signed agree on who should take the secretary role. If they agree,
 * the nominee they agreed upon will become secretary. If not, the smart contract just chooses for them,
 * and it might not match up with either of the specified nominees)
 */
export type SecretaryHandoverInfo =
  | {
      status: "in-progress";
      reason: "voluntary" | "emergency";
      successorNominee: Address;
    }
  | {
      status: "not-in-progress";
    };

export type getHandoverInfoDeps = {
  reader: Pick<
    TandaPayReader,
    | "isVoluntaryHandoverInProgress"
    | "getVoluntaryHandoverNominee"
    | "getEmergencyHandoverNominees"
    | "getMemberInfoFromAddress"
  >;
};

/**
 * Gets information about an in-progress secretary handover. Secretary handovers are events
 * within TandaPay that result in the secretary role being transferred to a new member of the
 * TandaPay community. They can happen either by the secretary voluntarily nominating a new
 * secretary, or by two secretary successors (members defined by the secretary to serve as
 * potential successors) both signing an "emergency handover" transaction.
 */
export async function getHandoverInfo(
  params: getHandoverInfoDeps,
): Promise<SecretaryHandoverInfo> {
  const { reader } = params;
  // we can easily just check to see if a voluntary handover is in progress
  const isVoluntary = await reader.isVoluntaryHandoverInProgress();
  if (isVoluntary) {
    const nominee = await reader.getVoluntaryHandoverNominee();
    return {
      status: "in-progress",
      reason: "voluntary",
      successorNominee: nominee,
    };
  }

  // if voluntary isn't in progress, see if anyone has been nominated for an emergency hanooff
  const [n1, n2] = await reader.getEmergencyHandoverNominees();
  const [nominee1, nominee2] = await Promise.all([
    reader.getMemberInfoFromAddress({ walletAddress: n1 }),
    reader.getMemberInfoFromAddress({ walletAddress: n2 }),
  ]);

  // if nobody has been nominated for emergency handoff, then no successor has initated
  // the emergency handoff; therefore, it isn't in progress.
  if (nominee1.id === 0n && nominee2.id === 0n)
    return { status: "not-in-progress" };

  // if neither nominees has an address of 0, then the handoff already happened this period,
  // meaning it's nolonger in progress -- although i think the smart contract might actually
  // overwrite them with 0 once this happens. Either way, this check doesn't hurt.
  if (nominee1.id !== 0n && nominee2.id !== 0n)
    return { status: "not-in-progress" };

  return {
    status: "in-progress",
    reason: "emergency",
    successorNominee:
      nominee1.id !== 0n ? nominee1.walletAddress : nominee2.walletAddress,
  };
}
