import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { Layout } from "../../components/Layout";
import client from "../../utils/client";
import { userIdState } from "../recoil/user";

export const Diary = () => {
  const userId = useRecoilValue(userIdState);
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [worked, setWorked] = useState();

  const getRecords = async () => {
    const res = await client.get(`getRecords?user_id=${userId}&month=${month}`);
    res.data.forEach((data) => {
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
  };

  const recordQuery = useQuery(["record"], getRecords);

  useEffect(() => {
    getRecords();
  }, [month]);

  return (
    <Layout>
      {recordQuery.isSuccess ? (
        <Calendar
          theme={{
            selectedDayBackgroundColor: "white",
            todayDotColor: "#FFEE52",
            arrowColor: "black",
          }}
          markedDates={worked}
          monthFormat={"yyyy년 MM월"}
          onMonthChange={(mo) => setMonth(mo["month"])}
        />
      ) : null}
    </Layout>
  );
};
const styles = StyleSheet.create({
  calendar: {
    width: "100%",
    height: "100%",
  },
});
