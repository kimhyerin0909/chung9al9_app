import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useRecoilState, useRecoilValue } from "recoil";
import client from "../../utils/client";
import { hourState, salaryState, userIdState } from "../recoil/user";
import { EditWork } from "./edit ";

export const MyPage = () => {
  const userId = useRecoilValue(userIdState);
  const [salary, setSalary] = useRecoilState(salaryState);
  const [hour, setHour] = useRecoilState(hourState);
  const [userInfo, setUserInfo] = useState();
  const [isChange, setIsChange] = useState(false);
  const getUserinfo = async () => {
    const res = await client.get(`/getUserInfo?user_id=${userId}`);
    setUserInfo(res.data);
    setSalary(String(res.data["salary"]));
    setHour(String(res.data["hour"]));
  };

  useEffect(() => {
    getUserinfo();
  }, [isChange]);

  return (
    <View>
      {userInfo &&
        (userInfo["salary"] === 0 ? (
          <EditWork userId={userId} setIsChange={setIsChange} />
        ) : (
          <>
            <Text>나의 하루 근무 시간은</Text>
            <Text>{userInfo["hour"]}시간입니다.</Text>
            <Text>나의 시급은</Text>
            <Text>{userInfo["salary"]}원입니다.</Text>
          </>
        ))}
    </View>
  );
};
