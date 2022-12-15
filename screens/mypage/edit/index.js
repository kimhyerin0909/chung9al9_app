import React, { useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  View,
  Text,
  TextInput,
} from "react-native";
import { useRecoilValue } from "recoil";
import client from "../../../utils/client";
import { userIdState } from "../../recoil/user/userId";

export const EditInfo = ({ close }) => {
  const userId = useRecoilValue(userIdState);
  const [newHour, setNewHour] = useState("");
  const [newAWeek, setNewAWeek] = useState("");
  const [newSalary, setNewSalary] = useState("");

  const updateWork = async () => {
    if (newSalary === "" || newHour === "" || newAWeek === "") {
      alert("정보를 설정해주세요.");
    } else {
      await client.patch(
        `/updateWorkInfo?salary=${newSalary}&hour=${newHour}&a_week=${newAWeek}&user_id=${userId}`
      );
      alert("근무 정보가 설정되었습니다!");
      close();
    }
  };

  return (
    <Modal animationType="fade" transparent={true} visible={true}>
      <View style={styles.layout}>
        <View style={styles.modal}>
          <TextInput
            onChangeText={(e) => setNewHour(e)}
            style={styles.input}
            placeholder="하루 근무 시간을 입력해주세요."
          />
          <TextInput
            onChangeText={(e) => setNewAWeek(e)}
            style={styles.input}
            placeholder="일주일 근무일 수을 입력해주세요."
          />
          <TextInput
            onChangeText={(e) => setNewSalary(e)}
            style={styles.input}
            placeholder="시급을 입력해주세요."
          />
          <View style={styles.btnBox}>
            <Pressable
              onPress={close}
              style={[styles.btn, { backgroundColor: "#BBBBBB" }]}
            >
              <Text style={styles.btnText}>취소</Text>
            </Pressable>
            <Pressable onPress={updateWork} style={styles.btn}>
              <Text style={styles.btnText}>수정</Text>
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
  modal: {
    backgroundColor: "white",
    width: "70%",
    borderRadius: 7,
    padding: 20,
  },
  btnBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  btn: {
    width: "48%",
    backgroundColor: "#7C81FF",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
  btnText: { color: "white", fontWeight: "700" },
  input: {
    padding: 7,
    backgroundColor: "#F4F4F4",
    marginBottom: 8,
    borderRadius: 5,
  },
});
