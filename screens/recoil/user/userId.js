import { atom } from "recoil";
import { asyncStorageEffect } from "../../../utils/asyncStorageEffect";

export const userIdState = atom({
  key: "UserIdState",
  default: null,
  effects: [asyncStorageEffect("user")],
});
