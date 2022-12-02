import React, { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { useRecoilValue } from "recoil";
import { TimePicker } from "../../../components/TimePicker";
import client from "../../../utils/client";
import { userIdState } from "../../recoil/user";

export const DiaryAdd = ({ date, closePopUp }) => {
  const userId = useRecoilValue(userIdState);
  const [record, setRecord] = useState();
  const [startTime, setStartTime] = useState(720);
  const [endTime, setEndTime] = useState(720);
  const getRecord = async () => {
    const res = await client.get(
      `/getDateRecord?user_id=${userId}&date=${date["date"]}`
    );
    setRecord(res.data);
  };

  //   const recordWork = async () => {

  //   }

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
          <Text style={{ color: "#989898" }}>{date["date"]}</Text>
          <View style={{ marginBottom: 10 }}>
            <Text
              style={{ marginBottom: 7, color: "#7A7A7A", fontWeight: "600" }}
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
            <Pressable style={styles.btn} onPress={closePopUp}>
              <Text style={{ color: "white", fontWeight: "700" }}>
                기록하기
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
});
