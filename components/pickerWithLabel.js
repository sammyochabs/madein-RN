import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";

const PickerWithLabel = ({ placeholder }) => {
  const [selectedValue, setSelectedValue] = useState("서울특별시");
  const processingPlace = [
    "서울특별시",
    "부산광역시",
    "대구광역시",
    "인천광역시",
    "청주광역시",
    "대전광역시",
    "경기도",
    "강원도",
    "충청도",
    "전라도",
    "경상도",
    "제주도",
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
          성함
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
        >
          {processingPlace.map((place, index) => {
            return <Picker.Item label={place} value={place} key={index} />;
          })}
        </Picker>
      </View>
    </View>
  );
};

export default PickerWithLabel;

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
