import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import color from "../config/color";

const Card = ({
  title,
  text,
  amount,
  backgroundColor = "rgb(126,219,233)",
}) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.amount}>
        $ {amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    margin: 15,
  },
  title: {
    letterSpacing: 1.2,
    fontSize: 14,
    color: color.textDark,
  },
  text: {
    alignSelf: "flex-end",
    marginTop: 15,
    color: color.textDark,
  },
  amount: {
    alignSelf: "flex-end",
    fontSize: 24,
    letterSpacing: 1.5,
    color: color.textLight,
  },
});
