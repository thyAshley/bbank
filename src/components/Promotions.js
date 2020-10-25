import React from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";

export default function Promotions() {
  return (
    <ScrollView horizontal style={styles.container}>
      <View style={styles.promoContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/Promo1.jpg")}
        />
        <Image
          style={styles.image}
          source={require("../../assets/Promo3.jpg")}
        />
        <Image
          style={styles.image}
          source={require("../../assets/Promo4.jpg")}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginBottom: 30,
  },
  promoContainer: {
    flexDirection: "row",
  },
  image: {
    marginRight: 5,
    resizeMode: "cover",
    width: 400,
    height: 300,
  },
});
