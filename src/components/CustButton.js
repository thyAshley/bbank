import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

const CustButton = ({ title, onPress, type }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={type === "login" ? styles.login : styles.register}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "85%",
  },
  login: {
    paddingVertical: 10,
    backgroundColor: "#50D6E9",
    alignItems: "center",
    marginVertical: 25,
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  register: {
    paddingVertical: 10,
    backgroundColor: "#50E9C1",
    alignItems: "center",
    marginVertical: 25,
    borderRadius: 20,
  },
});

export default CustButton;
