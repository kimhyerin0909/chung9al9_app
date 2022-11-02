import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, Image, ActivityIndicator, StyleSheet } from "react-native";

export const Splash = ({ navigation }) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      AsyncStorage.getItem("token").then((value) => {
        navigation.replace(value === null ? "Login" : "Home");
      });
    }, 1000);
  }, []);

  return (
    <View style={styles.frame}>
      <Image
        style={styles.logo}
        source={require("ch9al9-app/assets/logobgx.png")}
      />
      <ActivityIndicator animating={animating} color="#6990F7" size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  frame: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: "30%",
    resizeMode: "contain",
  },
});
