import React, { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Layout } from "../../../components/Layout";
import { useRecoilValue } from "recoil";
import { postIdState } from "../../recoil/post/postId";
import client from "../../../utils/client";
import { Pressable, StyleSheet, Text, View, Linking } from "react-native";

export const Detail = ({ navigation }) => {
  const [info, setInfo] = useState();
  const postId = useRecoilValue(postIdState);
  const subInfo = ["우대사항", "성별", "나이"];

  const getDetail = async () => {
    const res = await client.get(`/getPostDetail?post_id=${postId}`);
    setInfo(res.data);
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <Layout>
      <MaterialIcons
        onPress={() => navigation.navigate("Home")}
        name="arrow-back-ios"
        size={24}
        color="black"
      />
      {info && (
        <View>
          <Text style={styles.subTitle}>{info["comp_name"]}</Text>
          <Text style={styles.title}>{info["title"]}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.compAdd, styles.info]}>
              {info["address"]} |
            </Text>
            <Text style={[styles.writeTime, styles.info]}>
              {info["write_time"]}
            </Text>
          </View>
          <View style={[styles.addInfoBox, styles.info]}>
            <Text style={[styles.addContent, styles.info]}>
              {info["period"]}
            </Text>
            <Text style={[styles.addContent, styles.info]}>{info["time"]}</Text>
            <Text style={[styles.addContent, styles.info]}>{info["day"]}</Text>
            <Text style={[styles.addContent, styles.info]}>
              {info["salary"]}원
            </Text>
          </View>
          <View style={styles.line} />
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginRight: 15 }}>
              {subInfo.map((data) => (
                <Text style={[styles.tableItem, { color: "#939393" }]}>
                  {data}
                </Text>
              ))}
            </View>
            <View>
              <Text style={styles.tableItem}>{info["priority"]}</Text>
              <Text style={styles.tableItem}>
                {info["gender"] === 3
                  ? "무관"
                  : info["gender"] === 2
                  ? "여자"
                  : "남자"}
              </Text>
              <Text style={styles.tableItem}>
                {info["age"] === 1 ? "무관" : info["age"]}
              </Text>
            </View>
          </View>

          <View style={styles.line} />
          <View style={styles.desc}>
            <Text>{info["description"]}</Text>
          </View>
          <Pressable
            style={styles.btn}
            onPress={() => Linking.openURL(`tel:${info["phone"]}`)}
          >
            <Text style={styles.btnText}>지원하기</Text>
          </Pressable>
        </View>
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  subTitle: { color: "gray", fontSize: 15, marginBottom: 6, marginTop: 10 },
  title: { fontWeight: "600", fontSize: 22, marginBottom: 8 },
  compAdd: { color: "#939393", fontSize: 12, marginBottom: 6 },
  writeTime: { color: "#939393", fontSize: 12, marginLeft: 4 },
  addInfoBox: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-between",
  },
  addContent: {
    borderRadius: 10,
    color: "#575EFF",
    fontSize: 11,
    backgroundColor: "#CED0FF",
    padding: 3,
  },
  btn: {
    width: "100%",
    backgroundColor: "#7C81FF",
    padding: 10,
    borderRadius: 50,
    marginTop: 18,
  },
  btnText: {
    color: "white",
    textAlign: "center",
    padding: 7,
    fontWeight: "700",
    fontSize: 17,
  },
  desc: {
    backgroundColor: "#f4f4f4",
    padding: 10,
    borderRadius: 5,
  },
  tableItem: {
    height: 20,
  },
  line: {
    width: "100%",
    backgroundColor: "#dcdcdc",
    height: 1,
    marginBottom: 20,
    marginTop: 20,
  },
});
