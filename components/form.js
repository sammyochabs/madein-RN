import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import AddressInput from "./addressInput";
import CheckBox from "@react-native-community/checkbox";
import InputWithLabel from "./inputWithLabel";
import PhoneNumberInput from "./phoneNumberInput";
import PickerWithLabel from "./pickerWithLabel";
import TitleInput from "./titleInput";
import ProcessingPurpose from "./processingPurpose";
import PriceInput from "./priceInput";
import PaymentType from "./paymentType";
import HopeDeadline from "./hopeDeadline";
import Description from "./description";
import Agreement from "./agreement";

const Form = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={styles.outerDiv}>
      <View style={styles.loadPreviousDataDv}>
        <Text
          style={{
            fontSize: 10,
          }}
        >
          기존 설정과 동일 하게 작성하기
        </Text>
        <CheckBox
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
      </View>
      <InputWithLabel />
      <PhoneNumberInput />
      <AddressInput />
      <PickerWithLabel />
      <TitleInput />
      <ProcessingPurpose />
      <PriceInput />
      <PaymentType />
      <HopeDeadline />
      <Description />
      <Agreement />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  loadPreviousDataDv: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  outerDiv: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 30,
  },
});
