import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const NavBar = () => {
  return (
    <View style={styles.containerDiv}>
      <AntDesign name="arrowleft" size={24} color="black" />
      <Text style={styles.title}>견적내기</Text>
      <SimpleLineIcons name="menu" size={24} color="black" />
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  containerDiv: {
    width: "100%",
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    height: 70,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  title: {
    fontSize: 21,
  },
});
