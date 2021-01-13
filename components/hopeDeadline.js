import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

const HopeDeadline = ({ placeholder }) => {
  const [selectedValue, setSelectedValue] = useState("+1일");
  const hopeDeadline = [
    "+1일",
    "+2일",
    "+3일",
    "+4일",
    "+5일",
    "+6일",
    "+6일",
    "+7일",
    "+8일",
    "+9일",
    "+10일",
    "+11일",
    "+12일",
    "+13일",
    "+14일",
    "+15일",
    "+16일",
    "+17일",
    "+18일",
    "+19일",
    "+20일",
    "+21일",
    "+22일",
    "+23일",
    "+24일",
    "+25일",
    "+30일 이상",
    "상관없어요!",
  ];
  return (
    <View style={styles.nameInputContainer}>
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
          희망 기간
        </Text>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          padding: 0,
          borderBottomColor: "rgba(0,0,0,0.4)",
        }}
      >
        <Picker
          selectedValue={selectedValue}
          style={{ width: 250, padding: 0, marginTop: 0 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          style={{ width: 350, padding: 0, marginTop: 0 }}
        >
          {hopeDeadline.map((deadline, index) => {
            return (
              <Picker.Item label={deadline} value={deadline} key={index} />
            );
          })}
        </Picker>
      </View>
    </View>
  );
};

export default HopeDeadline;

const styles = StyleSheet.create({
  nameTextDiv: {
    display: "flex",
    flexDirection: "row",
  },
  textInputStyles: {
    width: 250,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.4)",
  },
  nameInputContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginTop: 35,
  },
});
