import React, { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { useRecoilValue } from "recoil";
import { TimePicker } from "../../../components/TimePicker";
import client from "../../../utils/client";
import { salaryState, userIdState } from "../../recoil/user";
import { Feather } from "@expo/vector-icons";

export const DiaryAdd = ({ date, closePopUp, setIsChange }) => {
  const userId = useRecoilValue(userIdState);
  const salary = useRecoilValue(salaryState);
  const [record, setRecord] = useState();
  const [startTime, setStartTime] = useState(720);
  const [endTime, setEndTime] = useState(720);
  const getRecord = async () => {
    const res = await client.get(
      `/getDateRecord?user_id=${userId}&date=${date["date"]}`
    );
    if (res.data !== "") {
      setRecord(res.data);
      setStartTime(
        Number(res.data["start_time"].substr(0, 2)) * 60 +
          Number(res.data["start_time"].substr(3, 2))
      );
      setEndTime(
        Number(res.data["end_time"].substr(0, 2)) * 60 +
          Number(res.data["end_time"].substr(3, 2))
      );
    }
  };

  const recordWork = async () => {
    const st = `${Math.floor(startTime / 60)}:${startTime % 60}`;
    const et = `${Math.floor(endTime / 60)}:${endTime % 60}`;
    if (date["isRecorded"]) {
      await client.patch(
        `/fixRecord?cal_id=${record["cal_id"]}&start_time=${st}&end_time=${et}`
      );
    } else {
      await client.post("/record", {
        cal_id: 0,
        user_id: userId,
        date: date["date"],
        start_time: st,
        end_time: et,
        hour: (endTime - startTime) / 60,
        salary: salary,
      });
    }
    setIsChange((prev) => !prev);
  };

  const deleteRecord = async () => {
    await client.delete(`/deleteRecord?cal_id=${record["cal_id"]}`);
    setIsChange((prev) => !prev);
    closePopUp();
  };

  return (
    <Modal
      onShow={getRecord}
      animationType="fade"
      transparent={true}
      visible={true}
    >
      <View style={styles.layout} onPress={closePopUp}>
        <View
          style={{
            backgroundColor: "white",
            width: "70%",
            borderRadius: 7,
            padding: 20,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "#989898" }}>{date["date"]}</Text>
            {date["isRecorded"] && (
              <Feather
                onPress={deleteRecord}
                name="trash-2"
                size={18}
                color="black"
              />
            )}
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text
              style={{
                marginBottom: 7,
                marginTop: 7,
                color: "#7A7A7A",
                fontWeight: "600",
              }}
            >
              근무한 시간
            </Text>
            <TimePicker
              startTime={startTime}
              setStartTime={setStartTime}
              endTime={endTime}
              setEndTime={setEndTime}
            />
          </View>
          <View style={styles.btnBox}>
            <Pressable style={styles.btn} onPress={closePopUp}>
              <Text style={{ color: "white", fontWeight: "700" }}>취소</Text>
            </Pressable>
            <Pressable
              style={styles.btn}
              onPress={() => {
                recordWork();
                closePopUp();
              }}
            >
              <Text style={{ color: "white", fontWeight: "700" }}>
                {date["isRecorded"] ? "수정하기" : "기록하기"}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  layout: {
    width: "100%",
    height: "100%",
    position: "absolute",
    flex: 1,
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    alignItems: "center",
    justifyContent: "center",
  },
  btnBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    width: "48%",
    backgroundColor: "#7C81FF",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
  deleteBtn: {
    backgroundColor: "#ABABAB",
    alignItems: "center",
    padding: 5,
    borderRadius: 10,
  },
});
