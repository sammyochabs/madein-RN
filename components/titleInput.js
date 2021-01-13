import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

const TitleInput = () => {
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
            color: "red",
          }}
        >
          *
        </Text>
        <Text
          style={{
            fontSize: 16,
          }}
        >
          무엇을 만들고 싶나요?
        </Text>
      </View>
      <View>
        <TextInput
          placeholder="마스터들에게 보여지는 제목이 됩니다!"
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

export default TitleInput;

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
