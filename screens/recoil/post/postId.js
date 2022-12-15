import { atom } from "recoil";
import { asyncStorageEffect } from "../../../utils/asyncStorageEffect";

export const postIdState = atom({
  key: "PostIdState",
  default: null,
  effects: [asyncStorageEffect("postId")],
});
