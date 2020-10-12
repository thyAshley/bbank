import React from "react";
import { StyleSheet, TextInput } from "react-native";

export default function CustText({ placeholder, children, keyboard, hidden }) {
  return (
    <TextInput
      style={styles.inputText}
      placeholder={placeholder}
      keyboardType={keyboard}
      autoCapitalize="none"
      autoCorrect={false}
      secureTextEntry={hidden}
    >
      {children}
    </TextInput>
  );
}

const styles = StyleSheet.create({
  inputText: {
    backgroundColor: "white",
    borderRadius: 40,
    color: "rgba(0,0,0,0.75)",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    width: "80%",
  },
});
