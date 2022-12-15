import { atom } from "recoil";
import { asyncStorageEffect } from "../../../utils/asyncStorageEffect";

export const hourState = atom({
  key: "HourState",
  default: null,
  effects: [asyncStorageEffect("hour")],
});
