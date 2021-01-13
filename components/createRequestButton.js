import React from "react";
import { Text, View } from "react-native";

export default function CreateRequestButton() {
  return (
    <View
      style={{
        borderRadius: 14,
        width: 68,
        height: 31,
        backgroundColor: "rgb(5,61,107)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontSize: 17,
          fontWeight: "700",
        }}
      >
        다음
      </Text>
    </View>
  );
}
