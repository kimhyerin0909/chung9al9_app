import React, { useEffect, useMemo } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { Layout } from "../../components/Layout";
import client from "../../utils/client";
import { postDistance } from "../recoil/distance";
import { Distance } from "./distance";
import { Button, Platform } from "react-native";
import Geolocation from "react-native-geolocation-service";
import { locationState } from "../recoil/location";

export const HomeScreen = () => {
  const distance = useRecoilValue(postDistance);
  const [location, setLocation] = useRecoilState(locationState);

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
      console.log(response);
    }
  };

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
        getPosts();
      } else {
        console.log(result);
      }
    });
  });
  return (
    <Layout>
      <Distance />
      {/* <Button title="geo" onPress={getPosts} /> */}
    </Layout>
  );
};
