import { atom } from "recoil";
import { UserId } from "@/@type/user/interface";

export const fileMode= atom<string>({
  key: "fileMode",
  default: "create",
});
