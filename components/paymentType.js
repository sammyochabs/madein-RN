import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function PaymentType() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("CARD");
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
        display: "flex",
        flexDirection: "row",
        marginTop: 30,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View>
        <Text>결제방법</Text>
      </View>
      <View
        style={{
          width: 212,
          height: 41,
          backgroundColor: "rgb(159,206,236)",
          borderRadius: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "35%",
          }}
        >
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
                if (selectedPaymentMethod === "CASH") {
                  setSelectedPaymentMethod("CARD");
                }
              }}
            >
              <View
                style={
                  selectedPaymentMethod === "CARD" ? activeStyle : inActiveStyle
                }
              ></View>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: "rgb(5,61,107)",
              fontSize: 20,
              fontWeight: "700",
            }}
          >
            카드
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "35%",
          }}
        >
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
                if (selectedPaymentMethod === "CARD") {
                  setSelectedPaymentMethod("CASH");
                }
              }}
            >
              <View
                style={
                  selectedPaymentMethod === "CASH" ? activeStyle : inActiveStyle
                }
              ></View>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: "rgb(5,61,107)",
              fontSize: 20,
              fontWeight: "700",
            }}
          >
            현금
          </Text>
        </View>
      </View>
    </View>
  );
}
