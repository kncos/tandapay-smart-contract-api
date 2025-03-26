import { TandaPayMemberWriter } from "./member_interface";
import { TandaPayPublicWriter } from "./public_interface";
import { TandaPaySecretaryWriter } from "./secretary_interface";

export type TandaPayWriter = TandaPayPublicWriter &
  TandaPayMemberWriter &
  TandaPaySecretaryWriter;
