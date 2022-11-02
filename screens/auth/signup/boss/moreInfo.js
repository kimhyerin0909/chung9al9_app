import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

export const BossMoreInfo = ({ changeForm }) => {
  const signUp = () => {};
  const searchAdd = () => {};

  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="사업자번호를 입력해주세요."
      />
      <TextInput
        style={styles.input}
        placeholder="회사 혹은 점포명을 입력해주세요."
      />
      <TextInput
        style={styles.input}
        placeholder="대표자 성함을 입력해주세요."
      />
      <View style={styles.verBox}>
        <TextInput style={styles.address} placeholder="회사/점포주소" />
        <TouchableOpacity style={styles.searchBtn}>
          <Text style={styles.signUp} onPress={signUp}>
            검색
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnBox}>
        <TouchableOpacity style={styles.button} onPress={() => changeForm()}>
          <Text style={styles.signUp} onPress={searchAdd}>
            뒤로가기
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.signUp} onPress={searchAdd}>
            회원가입
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "70%",
    height: "60%",
  },
  verBox: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  bossNum: {
    width: "32%",
    height: 60,
    padding: 20,
    backgroundColor: "#F5F5F5",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#7C81FF",
  },
  address: {
    width: "70%",
    height: 60,
    padding: 20,
    backgroundColor: "#F5F5F5",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#7C81FF",
  },
  signUpText: {
    fontSize: 30,
    fontWeight: "200",
  },
  logo: {
    resizeMode: "contain",
    marginLeft: "-20%",
    height: 60,
  },
  input: {
    width: "100%",
    height: 60,
    padding: 20,
    backgroundColor: "#F5F5F5",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#7C81FF",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "48%",
    height: 40,
    backgroundColor: "#7C81FF",
    borderRadius: 10,
  },
  btnBox: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  signUp: { color: "white" },
  searchBtn: {
    width: "25%",
    height: 60,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B3B6FF",
  },
});
