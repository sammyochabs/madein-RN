import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

const AddressInput = () => {
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
          주소
        </Text>
      </View>
      <View>
        <TextInput
          placeholder="주소지를 입력 해 주세요"
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

export default AddressInput;

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
