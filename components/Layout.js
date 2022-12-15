import React from "react";
import { View } from "react-native";

export const Layout = ({ children, height, bg, just }) => {
  return (
    <View
      style={{
        width: "100%",
        height: height ? height : "100%",
        alignItems: "center",
        justifyContent: just ? just : "",
        backgroundColor: bg ? bg : "white",
      }}
    >
      <View style={{ width: "80%" }}>{children}</View>
    </View>
  );
};
