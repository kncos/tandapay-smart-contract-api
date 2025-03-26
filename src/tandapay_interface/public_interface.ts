import { TandaPayWriteMethodReturnType } from "tandapay_manager/write/tandapay_write_methods";

export interface TandaPayPublicWriter {
  issueRefund(): TandaPayWriteMethodReturnType<"issueRefund">;
}
