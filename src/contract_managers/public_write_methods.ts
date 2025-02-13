import {
  TandaPayWriteMethodReturnType,
  TandaPayWriteMethods,
} from "./tandapay_write_methods";

export default class PublicWriteMethods extends TandaPayWriteMethods {
  // TODO: go through the smart contract and figure out if this is actually public? it *should be* but i think
  // TODO: it is marked as secretary only
  /**
   * Issues any due refunds within the TandaPay community. Must be called between 72 and 96 hours
   * of the beginning of a TandaPay period, and only when no claim was whitelisted in the previous period.
   * @todo This may be marked as secretary only in the smart contract code? Fix if true
   * @returns A transaction receipt or transaction hash
   */
  async issueRefund(): TandaPayWriteMethodReturnType {
    await this.simulate.issueRefund([true]);
    const hash = await this.write.issueRefund([true]);
    return this.handleHash(hash);
  }
}
