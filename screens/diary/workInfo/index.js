import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useRecoilValue } from "recoil";
import { salaryState } from "../../recoil/user/salary";
export const WorkInfo = ({ curDate, sumHour }) => {
  const salary = useRecoilValue(salaryState);
  return (
    <View style={styles.box}>
      <View>
        <Text style={styles.subtitle}>
          {curDate["year"]}년 {curDate["month"]}월에는
        </Text>
        {sumHour > 0 ? (
          <>
            <View style={styles.lineBox}>
              <Text style={styles.highlight}>{sumHour}시간 </Text>
              <Text>근무했어요!</Text>
            </View>
          </>
        ) : (
          <Text>근무하지 않았어요 ㅠ</Text>
        )}
      </View>
      <View>
        <Text style={styles.subtitle}>이 달의 최소 급여는</Text>
        {sumHour > 0 ? (
          <View style={styles.lineBox}>
            <Text style={styles.highlight}>{sumHour * salary}원 </Text>
            <Text>입니다.</Text>
          </View>
        ) : (
          <Text>없어요 ㅠ</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    marginTop: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subtitle: {
    color: "#9A9A9A",
    fontWeight: "200",
    marginBottom: 5,
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
});
