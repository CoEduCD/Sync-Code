import { atom } from "recoil";
import { UserId } from "@/@type/user/interface";
import { CodeFile } from "@/@type/file/interface";

export const fileInfo = atom<CodeFile|undefined>({
  key: "fileInfo",
  default: undefined,
});
