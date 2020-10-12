import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustButton from "../components/CustButton";
import CustText from "../components/CustText";
import color from "../config/color";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.header]}>Welcome Back!</Text>
      <Image style={styles.img} source={require("../../assets/signin.png")} />
      <CustText placeholder="Enter your email address" />
      <CustText placeholder="Enter Password" />
      <CustButton
        type="login"
        title="Login"
        onPress={() => navigation.navigate("Dashboard")}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.text}>
          Not yet a member? <Text style={{ color: "dodgerblue" }}>Sign up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    margin: 20,
  },
  img: {
    height: 200,
    width: 200,
    margin: 25,
  },
  text: {
    color: color.text,
  },
});
