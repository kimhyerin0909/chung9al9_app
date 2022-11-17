import React from "react";
import { View } from "react-native";

export const Layout = ({ children, height }) => {
  return (
    <View
      style={{
        width: "100%",
        height: height ? height : "100%",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <View style={{ width: "80%", alignItems: "center" }}>{children}</View>
    </View>
  );
};
