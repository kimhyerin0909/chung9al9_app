import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Calendar } from "react-native-calendars";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { Layout } from "../../components/Layout";
import client from "../../utils/client";
import { salaryState } from "../recoil/user/salary";
import { userIdState } from "../recoil/user/userId";
import { DiaryAdd } from "./add";
import { WorkInfo } from "./workInfo";

export const Diary = ({ navigation }) => {
  const userId = useRecoilValue(userIdState);
  const salary = useRecoilValue(salaryState);
  const day = new Date();
  const today = `${day.getFullYear()}-${day.getMonth() + 1}-${day.getDate()}`;
  const [month, setMonth] = useState(day.getMonth() + 1);
  const [worked, setWorked] = useState({
    [today]: { marked: true, dotColor: "#DCDCDC" },
  });
  const [curDate, setCurDate] = useState({
    year: day.getFullYear(),
    month: day.getMonth() + 1,
  });
  const [clickedDate, setClickedDate] = useState();
  const [isDayClicked, setIsDayClicked] = useState(false);
  const [isChange, setIsChange] = useState(false);
  const [sumHour, setSumHour] = useState(0);

  const getRecords = async () => {
    const res = await client.get(`getRecords?user_id=${userId}&month=${month}`);
    let sum = 0;
    res.data.forEach((data) => {
      sum += Number(data["hour"]);
      let date = data["date"];
      let h = data["hour"];
      setWorked((prev) => ({
        ...prev,
        [date]: {
          selected: true,
          selectedColor:
            h > 7
              ? "#A1A5FF"
              : h > 5
              ? "#C9CBFF"
              : h > 3
              ? "#E1E2FF"
              : "#EEEFFF",
        },
      }));
    });
    setSumHour(sum);
  };

  const handleRecord = (data) => {
    setClickedDate({
      date: data["dateString"],
      isRecorded: data["dateString"] in worked,
    });
    setIsDayClicked((prev) => !prev);
  };

  const recordQuery = useQuery(["record"], getRecords);

  useEffect(() => {
    if (salary === null) {
      alert("마이페이지에서 시급과 근무 시간을 설정해주세요.");
      navigation.goBack();
    }
  }, []);

  useEffect(() => {
    setWorked({ [today]: { marked: true, dotColor: "#DCDCDC" } });
    getRecords();
  }, [month, isChange]);

  return (
    <Layout>
      {isDayClicked && (
        <DiaryAdd
          setIsChange={setIsChange}
          date={clickedDate}
          closePopUp={() => setIsDayClicked(false)}
        />
      )}
      <View style={{ width: "100%", marginTop: "5%" }}>
        {recordQuery.isSuccess ? (
          <Calendar
            theme={{
              monthTextColor: "#363CCE",
              textMonthFontWeight: "500",
              selectedDayBackgroundColor: "white",
              selectedDayTextColor: "#4148FF",
              todayTextColor: "#515151",
              dayTextColor: "#515151",
              textDayFontWeight: "400",
              arrowColor: "#363CCE",
              todayDotColor: "yellow",
              textSectionTitleColor: "#7C81FF",
            }}
            markedDates={worked}
            monthFormat={"yyyy년 MM월"}
            onMonthChange={(mo) => {
              setCurDate(mo);
              setMonth(mo["month"]);
            }}
            onDayPress={handleRecord}
          />
        ) : null}
      </View>
      <WorkInfo curDate={curDate} sumHour={sumHour} />
    </Layout>
  );
};
