import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

const PriceInput = () => {
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
          소비자 희망 가격
        </Text>
      </View>
      <View>
        <TextInput
          placeholder="원"
          style={{
            width: 340,
            borderBottomWidth: 1,
            borderBottomColor: "rgba(0,0,0,0.4)",
          }}
        />
      </View>
      <Text
        style={{
          color: "rgba(250,0,0,0.3)",
        }}
      >
        최소 희망가격은 10,000원입니다.
      </Text>
    </View>
  );
};

export default PriceInput;

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
