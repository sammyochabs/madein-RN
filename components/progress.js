import React from "react";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";

const ProgressBar = () => {
  return (
    <View style={styles.outerDiv}>
      <View style={styles.innerDiv}>
        <View style={styles.imageDiv}>
          <Image source={require("../assets/madein-logo.png")} />
        </View>
      </View>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  outerDiv: {
    width: 261,
    height: 24,
    backgroundColor: "rgb(239,239,239)",
    borderRadius: 12,
    marginTop: 20,
  },
  innerDiv: {
    width: 142,
    height: 24,
    backgroundColor: "rgb(5,61,107)",
    borderRadius: 12,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 2,
  },
  imageDiv: {
    backgroundColor: "white",
    height: 21,
    width: 21,
    borderRadius: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});
