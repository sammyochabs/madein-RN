import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Agreement() {
  const [agreed, setAgreed] = useState(false);
  const [activeStyle, setActiveStyle] = useState({
    width: 11,
    height: 11,
    borderWidth: 1,
    backgroundColor: "rgb(22,61,107)",
    borderColor: "rgb(22,61,107)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });
  const [inActiveStyle, setInActiveStyle] = useState({
    width: 11,
    height: 11,
    borderWidth: 1,
    backgroundColor: "#fff",
    borderColor: "rgb(22,61,107)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });
  return (
    <View
      style={{
        marginTop: 35,
        display: "flex",
        flexDirection: "row",
        width: "96%",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 10,
        }}
      >
        마데인 플랫폼을 이용할 때 선수금 40%를 내셔야 합니다.이점 유의해 주세요.
      </Text>
      <View
        style={{
          width: 17,
          height: 17,
          borderWidth: 1,
          backgroundColor: "#fff",
          borderColor: "rgb(22,61,107)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            if (agreed === true) {
              setAgreed(false);
            } else if (agreed === false) {
              setAgreed(true);
            }
          }}
        >
          <View style={agreed === true ? activeStyle : inActiveStyle}></View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
