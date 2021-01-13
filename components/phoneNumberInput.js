import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function PhoneNumberInput() {
  const [selectedValue, setSelectedValue] = useState("010");
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: 34,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Text style={{ color: "red" }}>*</Text>
        <Text>휴대폰 번호</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "rgba(0,0,0,0.4)",
          }}
        >
          <Picker
            selectedValue={selectedValue}
            style={{ width: 250, padding: 0, marginTop: 0 }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
            style={{ width: 93, padding: 0, marginTop: 0 }}
          >
            <Picker.Item label="010" value="010" />
            <Picker.Item label="011" value="011" />
            <Picker.Item label="02" value="02" />
            <Picker.Item label="070" value="070" />
          </Picker>
        </View>
        <Text>-</Text>
        <View>
          <TextInput placeholder="12345678" style={styles.textInputStyles} />
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <TextInput
          style={{
            width: 190,
            borderBottomWidth: 1,
            borderBottomColor: "rgba(0,0,0,0.4)",
            padding: 0,
          }}
          placeholder="인증번호를 입력해주세요"
        />
        <View
          style={{
            backgroundColor: "rgb(159,206,236)",
            borderRadius: 6,
            width: 130,
            height: 24,
          }}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
            }}
          >
            인증번호 발송
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
  },
  textInputStyles: {
    width: 220,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.4)",
  },
});
