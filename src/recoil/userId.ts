import { atom } from "recoil";

export const user_id = atom<number>({
  key: "userId",
  default: 0,
});
