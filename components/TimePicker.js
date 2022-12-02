import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SimpleLineIcons } from "react-native-vector-icons";

export const TimePicker = ({
  startTime,
  setStartTime,
  endTime,
  setEndTime,
}) => {
  const handleStartTime = (type) => {
    if (type) {
      if (startTime !== 1440) {
        setStartTime((prev) => prev + 30);
        endTime <= startTime && setEndTime((prev) => prev + 30);
      }
    } else {
      if (startTime !== 0) setStartTime((prev) => prev - 30);
    }
  };

  const handleEndTime = (type) => {
    if (type) {
      if (endTime !== 1440) setEndTime((prev) => prev + 30);
    } else {
      if (endTime !== 0) setEndTime((prev) => prev - 30);
      endTime <= startTime && setStartTime((prev) => prev - 30);
    }
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View style={styles.selector}>
        <Text style={styles.time}>
          {Math.floor(startTime / 60) < 10
            ? "0" + Math.floor(startTime / 60)
            : Math.floor(startTime / 60)}
          {" : "}
          {startTime % 60 < 10 ? (startTime % 60) + "0" : startTime % 60}
        </Text>
        <View>
          <Pressable onPress={() => handleStartTime(true)}>
            <SimpleLineIcons name="arrow-up" />
          </Pressable>
          <Pressable onPress={() => handleStartTime(false)}>
            <SimpleLineIcons name="arrow-down" />
          </Pressable>
        </View>
      </View>
      <Text style={{ color: "#A6A6A6" }}>~</Text>
      <View style={styles.selector}>
        <Text style={styles.time}>
          {Math.floor(endTime / 60) < 10
            ? "0" + Math.floor(endTime / 60)
            : Math.floor(endTime / 60)}
          {" : "}
          {endTime % 60 < 10 ? (endTime % 60) + "0" : endTime % 60}
        </Text>
        <View>
          <Pressable onPress={() => handleEndTime(true)}>
            <SimpleLineIcons name="arrow-up" />
          </Pressable>
          <Pressable onPress={() => handleEndTime(false)}>
            <SimpleLineIcons name="arrow-down" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  selector: {
    flexDirection: "row",
    borderColor: "#A6A6A6",
    borderWidth: 1,
    width: "43%",
    padding: 6,
    justifyContent: "space-between",
    alignContent: "center",
  },
  time: {
    fontSize: 20,
    color: "#505050",
  },
});
