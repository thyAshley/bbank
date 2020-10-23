import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function InProgress() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Image
        style={styles.image}
        source={require("../../assets/notReady.png")}
      />
      <Text>Page under construction! Please try again later</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 400,
  },
});
