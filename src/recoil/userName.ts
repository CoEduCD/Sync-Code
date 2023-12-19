import { atom } from "recoil";

export const user_name = atom<string>({
  key: "userName",
  default: "",
});
