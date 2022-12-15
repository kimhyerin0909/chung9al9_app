import { atom } from "recoil";
import { asyncStorageEffect } from "../../../utils/asyncStorageEffect";

export const aWeekState = atom({
  key: "AWeekState",
  default: null,
  effects: [asyncStorageEffect("a_week")],
});
