import React from "react";
import { StyleSheet, Image, View } from "react-native";
import color from "../config/color";

export default function Spinner() {
  return (
    <View style={styles.container}>
      <Image style={styles.size} source={require("../../assets/loading.gif")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    justifyContent: "center",
    opacity: 0.5,
  },
  size: {
    width: 50,
    height: 50,
  },
});
