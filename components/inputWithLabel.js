import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

const InputWithLabel = ({ placeholder, label, flexDirection, alignItems }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        alignItems: "flex-end",
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
          성함
        </Text>
      </View>
      <View>
        <TextInput
          placeholder="정확한 성명을 입력해주세요."
          style={{
            width: 250,
            borderBottomWidth: 1,
            borderBottomColor: "rgba(0,0,0,0.4)",
          }}
        />
      </View>
    </View>
  );
};

export default InputWithLabel;

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
