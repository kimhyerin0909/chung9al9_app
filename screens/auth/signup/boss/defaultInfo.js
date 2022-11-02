import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

export const DefaultInfo = ({ navigation, changeForm }) => {
  const [userId, setUserId] = useState();
  const [password, setPassword] = useState();
  const [rePassword, setRePassword] = useState();
  const [isClicked, setIsClicked] = useState(false);

  const signUp = () => {};

  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="아이디를 입력해주세요."
        onChangeText={(id) => setUserId(id)}
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호를 입력해주세요."
        secureTextEntry
        onChangeText={(pw) => setPassword(pw)}
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호를 다시 입력해주세요."
        secureTextEntry
        onChangeText={(pw) => setRePassword(pw)}
      />
      <TouchableOpacity style={styles.button} onPress={() => changeForm()}>
        <Text style={styles.signUp}>다음</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  verBox: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  bossNum: {
    width: "32%",
    height: 60,
    padding: 20,
    backgroundColor: "#F5F5F5",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#7C81FF",
  },
  address: {
    width: "70%",
    height: 60,
    padding: 20,
    backgroundColor: "#F5F5F5",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#7C81FF",
  },
  input: {
    width: "100%",
    height: 60,
    padding: 20,
    backgroundColor: "#F5F5F5",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#7C81FF",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 40,
    backgroundColor: "#7C81FF",
    borderRadius: 10,
  },
  signUp: { color: "white" },
  searchBtn: {
    width: "25%",
    height: 60,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B3B6FF",
  },
});
