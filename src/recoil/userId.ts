import { atom } from "recoil";
import { UserId } from "@/@type/user/interface";

export const user_id = atom<UserId>({
  key: "userId",
  default: undefined,
});
