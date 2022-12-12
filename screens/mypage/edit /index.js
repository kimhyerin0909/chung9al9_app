import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import client from "../../../utils/client";

export const EditWork = ({ userId, setIsChange }) => {
  const [salary, setSalary] = useState("");
  const [hour, setHour] = useState("");

  const updateWork = async () => {
    if (salary === "" || hour === "") {
      alert("정보를 설정해주세요.");
    } else {
      await client.patch(
        `/updateWorkInfo?salary=${salary}&hour=${hour}&user_id=${userId}`
      );
      alert("시급과 기본 근무 시간이 설정되었습니다!");
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
      <Pressable onPress={updateWork}>
        <Text>설정하기</Text>
      </Pressable>
    </View>
  );
};
