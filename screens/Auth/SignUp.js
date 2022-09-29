import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const SignUp = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity style={styles.back} onPress={() => navigation.pop()}>
        <Text>뒤로가기</Text>
      </TouchableOpacity>
      <Text>회원가입</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  back: {
    marginTop: 200,
  },
});
