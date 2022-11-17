import React, { useEffect, useMemo, useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { Layout } from "../../components/Layout";
import client from "../../utils/client";
import { postDistance } from "../recoil/distance";
import { Distance } from "./distance";
import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import Geolocation from "react-native-geolocation-service";
import { locationState } from "../recoil/location";
import moment from "moment";

export const HomeScreen = () => {
  const distance = useRecoilValue(postDistance);
  const [location, setLocation] = useRecoilState(locationState);
  const [posts, setPosts] = useState();

  const allowGetLocation = async () => {
    try {
      if (Platform.OS === "ios") {
        return await Geolocation.requestAuthorization("whenInUse");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getPosts = async () => {
    if (location !== null) {
      const response = await client.get(
        `getPost?lat=${location.lat}&lon=${location.lon}&distance=${distance}`
      );
      console.log(response.data);
      setPosts(response.data);
    } else {
      console.log("location is null");
    }
  };

  useMemo(() => getPosts(), [location]);

  useEffect(() => {
    allowGetLocation().then((result) => {
      if (result === "granted") {
        Geolocation.getCurrentPosition(
          (pos) => {
            const { latitude, longitude } = pos.coords;
            setLocation({
              lat: latitude,
              lon: longitude,
            });
          },
          (err) => console.log(err),
          {
            enableHighAccuracy: true,
            timeout: 3600,
            maximumAge: 3600,
          }
        );
      }
    });
  }, []);

  return (
    <>
      <Layout height={"6%"}>
        <Distance />
      </Layout>
      <ScrollView>
        <View style={styles.postLayout}>
          {posts && (
            <View style={pstyles(posts).postBox}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.subTitle}>내 주변 공고</Text>
                <Text
                  style={{ color: "gray", marginLeft: 8, fontSize: 12 }}
                  title="새로고침"
                  onPress={getPosts}
                >
                  새로고침
                </Text>
              </View>
              {posts.map((p) => {
                const card = (
                  <View style={styles.card} key={p.post_id}>
                    <Text style={[styles.title, styles.info]}>{p.title}</Text>
                    <Text style={[styles.compName, styles.info]}>
                      {p.comp_name}
                    </Text>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text style={[styles.compAdd, styles.info]}>
                        {p.address} |
                      </Text>
                      <Text style={[styles.writeTime, styles.info]}>
                        {moment(p.write_time).format("MM월 DD일 hh시 mm분")}
                      </Text>
                    </View>
                    <View style={[styles.addInfoBox, styles.info]}>
                      <Text style={[styles.addContent, styles.info]}>
                        {p.period}
                      </Text>
                      <Text style={[styles.addContent, styles.info]}>
                        {p.time}
                      </Text>
                      <Text style={[styles.addContent, styles.info]}>
                        {p.day}
                      </Text>
                      <Text style={[styles.addContent, styles.info]}>
                        {p.salary}원
                      </Text>
                    </View>
                  </View>
                );
                return card;
              })}
            </View>
          )}
        </View>
      </ScrollView>
    </>
  );
};

const pstyles = (props) =>
  StyleSheet.create({
    postBox: {
      width: "80%",
      justifyContent: "space-between",
    },
  });

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 18,
    fontWeight: "800",
    marginTop: 13,
    marginBottom: 13,
  },
  postLayout: {
    width: "100%",
    backgroundColor: "#F4F4F4",
    alignItems: "center",
  },
  card: {
    maxWidth: "100%",
    marginBottom: 10,
    borderRadius: 8,
    padding: 10,
    backgroundColor: "white",
  },
  info: {
    paddingTop: 3,
    paddingBottom: 3,
  },
  title: {
    fontWeight: "600",
    fontSize: 16,
  },
  compName: {
    fontWeight: "400",
    fontSize: 13,
  },
  compAdd: {
    color: "#939393",
    fontSize: 12,
  },
  writeTime: {
    color: "#939393",
    fontSize: 12,
    marginLeft: 4,
  },
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
});
