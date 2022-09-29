import React from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";

export const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image
          source={require("ch9al9-app/assets/logobgx.png")}
          style={styles.logo}
        />
        <Text style={styles.loginText}>LOGIN</Text>
        <TextInput style={styles.input} placeholder="아이디를 입력해주세요." />
        <TextInput
          style={styles.input}
          placeholder="비밀번호를 입력해주세요."
          secureTextEntry
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.login}>로그인</Text>
        </TouchableOpacity>
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
    width: "100%",
    height: 40,
    backgroundColor: "#7C81FF",
    borderRadius: 10,
  },
  login: { color: "white" },
});
