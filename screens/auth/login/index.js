import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import { useSetRecoilState } from "recoil";
import client from "../../../utils/client";
import { userIdState } from "../../recoil/user/userId";

export const Login = ({ navigation }) => {
  const setUser = useSetRecoilState(userIdState);
  const [userId, setUserId] = useState();
  const [password, setPassword] = useState();

  const youthLogin = async () => {
    if (userId && password) {
      await client
        .post("/login", {
          user_id: 0,
          id: userId,
          pw: password,
          nickname: "",
        })
        .then((res) => {
          if (res.data.success) {
            AsyncStorage.setItem("token", res.data.token);
            setUser(res.data.info["user_id"].toString());
            navigation.navigate("Home");
          } else {
            alert(res.data.message);
          }
        });
    } else {
      alert("정보가 다 입력되지 않았습니다.");
    }
  };

  const bossLogin = async () => {
    if (userId && password) {
      await client
        .post("/enter/login", {
          en_id: 0,
          id: userId,
          pw: password,
          en_num: "",
          comp_name: "",
          captain: "",
          address: "",
          phone: "",
        })
        .then((res) => {
          console.log(res);
        });
    } else {
      alert("정보가 다 입력되지 않았습니다.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image
          source={require("ch9al9-app/assets/logobgx.png")}
          style={styles.logo}
        />
        <Text style={styles.loginText}>LOGIN</Text>
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
        <View style={styles.btnBox}>
          <TouchableOpacity
            style={styles.button}
            onPress={bossLogin}
            value={"boss"}
          >
            <Text style={styles.login}>사업자 로그인</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={youthLogin}
            value={"youth"}
          >
            <Text style={styles.login}>청소년 로그인</Text>
          </TouchableOpacity>
        </View>
        <Button
          onPress={() => navigation.navigate("SignUp")}
          title="아직 회원이 아니신가요?"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "70%",
    height: "45%",
  },
  loginText: {
    fontSize: 30,
    fontWeight: "200",
  },
  logo: {
    resizeMode: "contain",
    marginLeft: "-20%",
    height: 60,
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
    width: "49%",
    height: 40,
    backgroundColor: "#7C81FF",
    borderRadius: 10,
  },
  login: { color: "white" },
  btnBox: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
});
