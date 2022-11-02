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
import { MaterialIcons } from "@expo/vector-icons";

export const SignUp = ({ navigation }) => {
  const [userId, setUserId] = useState();
  const [password, setPassword] = useState();

  const signUp = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <MaterialIcons
          onPress={() => navigation.pop()}
          name="arrow-back-ios"
          style={styles.backBtn}
          size={30}
          color="black"
        />
        <Image
          source={require("ch9al9-app/assets/logobgx.png")}
          style={styles.logo}
        />
        <Text style={styles.signupText}>SIGNUP</Text>
        <View style={styles.btnBox}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("YouthSignUp")}
          >
            <Text style={styles.signup} onPress={signUp}>
              청소년 사용자
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("BossSignUp")}
          >
            <Text style={styles.signup} onPress={signUp}>
              사업자
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: "70%",
    height: "30%",
  },
  signupText: {
    fontSize: 30,
    fontWeight: "200",
    marginBottom: 20,
  },
  backBtn: {
    marginBottom: "4%",
  },
  logo: {
    resizeMode: "contain",
    marginLeft: "-20%",
    height: 60,
    marginBottom: 10,
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
    width: "48%",
    height: 50,
    backgroundColor: "#7C81FF",
    borderRadius: 10,
  },
  signup: { color: "white" },
  btnBox: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
});
