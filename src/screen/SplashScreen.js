import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import CustButton from "../components/CustButton";
import color from "../config/color";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={require("../../assets/icon.png")}
      />
      <Text style={styles.textStyle}>
        For all your banking and Financial Needs
      </Text>
      <View style={styles.btnContainer}>
        <CustButton
          title="Login"
          type="login"
          onPress={() => console.log("log in")}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
          }}
        >
          <View style={styles.line} />
          <Text style={{ paddingHorizontal: 15, color: "rgba(0,0,0,0.35)" }}>
            Not yet a member? Join Now!
          </Text>
          <View style={styles.line} />
        </View>
        <CustButton
          title="Get Started"
          type="register"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    width: "100%",
    position: "absolute",
    alignItems: "center",
    bottom: 70,
  },
  container: {
    backgroundColor: "#EAEAEA",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: color.text,
    fontSize: 15,
  },
  imageStyle: {
    height: 150,
    width: 150,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(0,0,0,0.15)",
  },
});
