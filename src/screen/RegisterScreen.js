import React from "react";

import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import CustButton from "../components/CustButton";
import CustText from "../components/CustText";
import color from "../config/color";

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/regscreen.png")}
      />
      <View style={styles.textContainer}>
        <Text style={[styles.text, styles.header]}>Welcome Onboard!</Text>
        <Text style={styles.text}>Let's help you get started</Text>
      </View>
      <CustText placeholder="Enter your full name"></CustText>
      <CustText
        placeholder="Enter your email address"
        keyboard="email-address"
      ></CustText>
      <CustText placeholder="Enter Password" hidden></CustText>
      <CustText placeholder="Confirm Password" hidden></CustText>
      <CustButton type="register" title="Register" />
      <Text style={styles.text}>
        Already have an account?
        <Text style={{ color: "dodgerblue" }}>Sign in</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  image: {
    width: 250,
    height: 250,
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
  },
  textContainer: {
    margin: 20,
    alignItems: "center",
  },
  text: {
    color: color.text,
  },
});

export default RegisterScreen;
