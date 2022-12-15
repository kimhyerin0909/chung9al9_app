import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import client from "../../../utils/client";

export const AddWork = ({ userId, setIsChange }) => {
  const [salary, setSalary] = useState("");
  const [hour, setHour] = useState("");
  const [aWeek, setAWeek] = useState("");

  const updateWork = async () => {
    if (salary === "" || hour === "" || aWeek === "") {
      alert("정보를 설정해주세요.");
    } else {
      await client.patch(
        `/updateWorkInfo?salary=${salary}&hour=${hour}&a_week=${aWeek}&user_id=${userId}`
      );
      alert("근무 정보가 설정되었습니다!");
      setIsChange(true);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="시급을 설정해주세요."
        onChangeText={(e) => setSalary(e)}
      />
      <TextInput
        placeholder="기본 근무 시간을 설정해주세요."
        onChangeText={(e) => setHour(e)}
      />
      <TextInput
        placeholder="일주일 근무일 수를 설정해주세요."
        onChangeText={(e) => setAWeek(e)}
      />
      <Pressable onPress={updateWork}>
        <Text>설정하기</Text>
      </Pressable>
    </View>
  );
};
