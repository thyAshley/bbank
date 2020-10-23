import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import color from "../config/color";

const Card = ({
  title,
  text,
  amount,
  backgroundColor = "rgb(126,219,233)",
  display,
  direction,
}) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.title}>{title}</Text>
      <View style={{ alignItems: "flex-end" }}>
        {!direction ? (
          <TouchableWithoutFeedback onPress={display}>
            <AntDesign name="caretdown" size={24} color="black" />
          </TouchableWithoutFeedback>
        ) : (
          <TouchableWithoutFeedback onPress={display}>
            <AntDesign name="caretup" size={24} color="black" />
          </TouchableWithoutFeedback>
        )}
      </View>
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
    marginTop: 20,
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
