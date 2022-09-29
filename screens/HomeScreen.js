import React from "react";
import { Button, View } from "react-native";

export const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
    </View>
  );
};
