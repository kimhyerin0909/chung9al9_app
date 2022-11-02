import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export const YouthSignUp = ({ navigation }) => {
  const [userId, setUserId] = useState();
  const [password, setPassword] = useState();

  const signUp = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <MaterialIcons
          onPress={() => navigation.pop()}
          name="arrow-back-ios"
          size={30}
          color="black"
        />
        <Image
          source={require("ch9al9-app/assets/logobgx.png")}
          style={styles.logo}
        />
        <Text style={styles.signUpText}>SIGNUP</Text>
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
          onChangeText={(pw) => setPassword(pw)}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.signUp} onPress={signUp}>
            회원가입
          </Text>
        </TouchableOpacity>
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
  signUpText: {
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
  signUp: { color: "white" },
});
