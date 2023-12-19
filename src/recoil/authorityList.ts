import { atom } from "recoil";
import { fileAuthority } from "@/@type/authority/interface";

export const fileList = atom<fileAuthority[]|undefined>({
  key: "fileList",
  default: undefined,
});
