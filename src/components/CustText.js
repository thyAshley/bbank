import React from "react";
import { StyleSheet, TextInput } from "react-native";

export default function CustText({
  placeholder,
  children,
  keyboard,
  hidden,
  onChange,
  ...otherProps
}) {
  return (
    <TextInput
      style={styles.inputText}
      placeholder={placeholder}
      keyboardType={keyboard}
      autoCapitalize="none"
      autoCorrect={false}
      secureTextEntry={hidden}
      {...otherProps}
    >
      {children}
    </TextInput>
  );
}

const styles = StyleSheet.create({});
