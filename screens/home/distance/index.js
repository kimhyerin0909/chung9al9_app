import Slider from "@react-native-community/slider";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useRecoilState } from "recoil";
import { postDistance } from "../../recoil/distance";

export const Distance = () => {
  const [distance, setDistance] = useRecoilState(postDistance);
  return (
    <View style={styles.layout}>
      <Text style={styles.locationText}>
        {distance <= 2000
          ? "우리 동네"
          : distance > 2000 && distance <= 3000
          ? "옆 동네"
          : "옆옆 동네"}
      </Text>
      <Slider
        style={{ width: "80%" }}
        maximumValue={4000}
        minimumValue={1000}
        value={distance}
        step={1000}
        onValueChange={(value) => setDistance(value)}
        minimumTrackTintColor={"#8E92FF"}
        tapToSeek
      />
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  locationText: {
    width: "20%",
  },
});
