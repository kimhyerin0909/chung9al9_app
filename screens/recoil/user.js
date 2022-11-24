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
