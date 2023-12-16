import { atom } from "recoil";
import { CodeFile } from "@/@type/file/interface";

export const fileInfo = atom<CodeFile|undefined>({
  key: "fileInfo",
  default: undefined,
});
