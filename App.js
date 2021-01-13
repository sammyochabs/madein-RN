import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
import CreateRequestButton from "./components/createRequestButton";
import Form from "./components/form";
import NavBar from "./components/navbar";
import ProgressBar from "./components/progress";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        marginVertical: 20,
      }}
    >
      <View>
        <NavBar />
      </View>
      <ScrollView>
        <View style={styles.container}>
          <ProgressBar />
          <View style={styles.formTitleDiv}>
            <Text style={styles.formTitle}>정보를 입력해주세요</Text>
          </View>
          <Form />
          <CreateRequestButton />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  formTitleDiv: {
    marginTop: 30,
  },
  formTitle: {
    fontSize: 18,
  },
});
