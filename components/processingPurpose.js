import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";

const ProcessingPurpose = ({ placeholder }) => {
  const [selectedValue, setSelectedValue] = useState("설계");
  const processingPurpose = [
    "설계",
    "학생작품",
    "시제품제작",
    "양산",
    "취미",
    "투자컨설팅",
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
          가공목적
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
          style={{ width: 250, padding: 0, marginTop: 0 }}
        >
          {processingPurpose.map((purpose, index) => {
            return <Picker.Item label={purpose} value={purpose} key={index} />;
          })}
        </Picker>
      </View>
    </View>
  );
};

export default ProcessingPurpose;

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
    flexDirection: "row",
    width: "100%",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginTop: 30,
  },
});
