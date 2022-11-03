import React from "react";
import { View } from "react-native";

export const Layout = ({ children }) => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      {children}
    </View>
  );
};
