import AsyncStorage from "@react-native-async-storage/async-storage";
import { atom } from "recoil";

const asyncStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    const savedValue = AsyncStorage.getItem(key);
    if (savedValue != null) {
      setSelf(savedValue);
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? AsyncStorage.removeItem(key)
        : AsyncStorage.setItem(key, newValue);
    });
  };

export const userIdState = atom({
  key: "UserIdState",
  default: null,
  effects: [asyncStorageEffect("user")],
});

export const salaryState = atom({
  key: "SalaryState",
  default: null,
  effects: [asyncStorageEffect("salary")],
});

export const hourState = atom({
  key: "HourState",
  default: null,
  effects: [asyncStorageEffect("hour")],
});

export const aWeekState = atom({
  key: "AWeekState",
  default: null,
  effects: [asyncStorageEffect("a_week")],
});
