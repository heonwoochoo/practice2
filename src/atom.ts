import { atom } from "recoil";
export const treeLevelState = atom<number>({
  key: "treeLevel",
  default: 5,
});
