import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

const Description = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "space-between",
        marginTop: 30,
      }}
    >
      <View style={styles.nameTextDiv}>
        <Text
          style={{
            fontSize: 16,
          }}
        >
          상세내용
        </Text>
      </View>
      <View>
        <TextInput
          placeholder="아이디어 개요, 및 요구사항, 개발 내용"
          style={{
            width: 340,
            borderBottomWidth: 1,
            borderBottomColor: "rgba(0,0,0,0.4)",
          }}
        />
      </View>
    </View>
  );
};

export default Description;

const styles = StyleSheet.create({
  nameTextDiv: {
    display: "flex",
    flexDirection: "row",
  },
  nameInputContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginTop: 30,
  },
});
