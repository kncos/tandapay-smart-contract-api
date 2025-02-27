import {
  TandaPayWriteMethodReturnType,
  TandaPayWriteMethods,
} from "./tandapay_write_methods";

export default class PublicWriteMethods extends TandaPayWriteMethods {
  /**
   * Issues any due refunds within the TandaPay community. Must be called between 72 and 96 hours
   * of the beginning of a TandaPay period, and only when no claim was whitelisted in the previous period.
   * @todo This may be marked as secretary only in the smart contract code? Fix if true
   * @returns A transaction receipt or transaction hash
   */
  async issueRefund(): TandaPayWriteMethodReturnType<"issueRefund"> {
    const simulate = async () => await this.simulate.issueRefund([true]);
    const write = async () => await this.write.issueRefund([true]);
    return this.performOperation({ simulate, write });
  }
}
