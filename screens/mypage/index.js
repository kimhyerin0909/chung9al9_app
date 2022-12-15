import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useRecoilState, useRecoilValue } from "recoil";
import { Layout } from "../../components/Layout";
import client from "../../utils/client";
import { aWeekState } from "../recoil/user/aWeek";
import { hourState } from "../recoil/user/hour";
import { salaryState } from "../recoil/user/salary";
import { userIdState } from "../recoil/user/userId";
import { AddWork } from "./add";
import { EditInfo } from "./edit";

export const MyPage = () => {
  const userId = useRecoilValue(userIdState);
  const [salary, setSalary] = useRecoilState(salaryState);
  const [hour, setHour] = useRecoilState(hourState);
  const [aWeek, setAWeek] = useRecoilState(aWeekState);
  const [userInfo, setUserInfo] = useState();
  const [isChange, setIsChange] = useState(false);
  const [isClick, setIsClick] = useState(false);

  const getUserinfo = async () => {
    const res = await client.get(`/getUserInfo?user_id=${userId}`);
    setUserInfo(res.data);
    setSalary(String(res.data["salary"]));
    setHour(String(res.data["hour"]));
    setAWeek(String(res.data["a_week"]));
  };

  useEffect(() => {
    getUserinfo();
  }, [isChange, isClick]);

  return (
    <Layout just={"center"}>
      {isClick && (
        <EditInfo
          close={() => setIsClick(!isClick)}
          hour={hour}
          salary={salary}
          aWeek={aWeek}
        />
      )}
      {userInfo && (
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text style={{ fontSize: 20 }}>안녕하세요! </Text>
          <Text style={{ fontWeight: "700", fontSize: 20 }}>
            {userInfo["nickname"]}
          </Text>
          <Text style={{ fontSize: 20 }}> 님</Text>
        </View>
      )}
      {userInfo &&
        (userInfo["salary"] === 0 ? (
          <AddWork userId={userId} setIsChange={setIsChange} />
        ) : (
          <>
            <Text style={styles.subtitle}>
              {userInfo["nickname"]}님의 하루 근무 시간은
            </Text>
            <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
              <Text style={styles.highlight}>{userInfo["hour"]}시간</Text>
              <Text style={styles.subtitle}> 입니다.</Text>
            </View>
            <Text style={styles.subtitle}>
              {userInfo["nickname"]}님의 일주일 근무일 수는
            </Text>
            <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
              <Text style={styles.highlight}>{userInfo["a_week"]}일</Text>
              <Text style={styles.subtitle}> 입니다.</Text>
            </View>
            <Text style={styles.subtitle}>
              {userInfo["nickname"]}님의 시급은
            </Text>
            <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
              <Text style={styles.highlight}>{userInfo["salary"]}원</Text>
              <Text style={styles.subtitle}> 입니다.</Text>
            </View>
          </>
        ))}
      <View style={styles.box}>
        <Pressable onPress={() => setIsClick(!isClick)} style={styles.btn}>
          <Text style={styles.editText}>수정하기</Text>
        </Pressable>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: "#343434",
    fontWeight: "200",
    marginTop: 10,
  },
  lineBox: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  highlight: {
    color: "#2F5DFF",
    fontSize: 18,
    fontWeight: "800",
  },
  btn: {
    backgroundColor: "#7C81FF",
    width: "25%",
    padding: 10,
    borderRadius: 30,
  },
  editText: { textAlign: "center", color: "white", fontWeight: "800" },
  box: {
    width: "100%",
    alignItems: "flex-end",
  },
});
