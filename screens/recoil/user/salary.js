import { atom } from "recoil";
import { asyncStorageEffect } from "../../../utils/asyncStorageEffect";

export const salaryState = atom({
  key: "SalaryState",
  default: null,
  effects: [asyncStorageEffect("salary")],
});
