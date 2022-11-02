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
import { DefaultInfo } from "./defaultInfo";
import { BossMoreInfo } from "./moreInfo";

export const BossSignUp = ({ navigation }) => {
  const [userId, setUserId] = useState();
  const [password, setPassword] = useState();
  const [isClicked, setIsClicked] = useState(false);

  const signUp = () => {};
  const searchAdd = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View>
          <MaterialIcons
            onPress={() => navigation.pop()}
            style={{ marginBottom: 10 }}
            name="arrow-back-ios"
            size={30}
            color="black"
          />
          <Image
            source={require("ch9al9-app/assets/logobgx.png")}
            style={styles.logo}
          />
          <Text style={styles.signUpText}>SIGNUP</Text>
        </View>
        {isClicked ? (
          <BossMoreInfo changeForm={() => setIsClicked(false)} />
        ) : (
          <DefaultInfo changeForm={() => setIsClicked(true)} />
        )}
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
    height: "50%",
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
});
