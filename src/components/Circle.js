import React from "react";
import { StyleSheet, Text } from "react-native";

const Circle = ({ otherStyle }) => {
  return <Text style={[styles.circle, otherStyle]}></Text>;
};

export default Circle;

const styles = StyleSheet.create({
  circle: {
    width: 144,
    height: 144,
    borderRadius: 144 / 2,
    position: "absolute",
    backgroundColor: "rgba(85, 178, 187, 0.7)",
    top: -55,
    zIndex: 10,
  },
});
