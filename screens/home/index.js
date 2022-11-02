import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { Button, Text, View } from "react-native";

export const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button title="restart" onPress={() => AsyncStorage.removeItem("token")}>
        다시
      </Button>
      <Text>HomeScreen</Text>
    </View>
  );
};
