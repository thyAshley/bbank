import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

import color from "../config/color";

const InfoCard = ({
  title,
  accNumber,
  amount,
  backgroundColor = "rgb(126,219,233)",
  text,
  callToAction,
}) => {
  return (
    <View style={[styles.container]}>
      <View style={styles.flexrow}>
        <Image
          style={styles.banklogo}
          source={require("../../assets/dbs.png")}
        />
        <View style={styles.flexrow}>
          <View style={styles.flexcol}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.accNumber}>{accNumber}</Text>
          </View>
          <TouchableOpacity style={{ position: "absolute", left: 180 }}>
            <Text
              style={[
                styles.callAction,
                { color: backgroundColor, borderColor: backgroundColor },
              ]}
            >
              {callToAction}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.amount}>
        $ {amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default InfoCard;

const styles = StyleSheet.create({
  flexrow: {
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    width: "90%",
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  title: {
    letterSpacing: 1.2,
    fontSize: 14,
    color: color.textLight,
    marginLeft: 15,
  },
  accNumber: {
    color: color.textLight,
    marginLeft: 15,
  },
  amount: {
    alignSelf: "flex-end",
    fontSize: 24,
    letterSpacing: 1.5,
    color: color.textLight,
  },
  text: {
    alignSelf: "flex-end",
    fontSize: 12,
    color: color.textLight,
  },
  banklogo: {
    height: 50,
    width: 50,
    borderRadius: 40,
    top: 5,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.25)",
  },
  callAction: {
    fontSize: 12,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    alignSelf: "flex-end",
    width: 120,
    textAlign: "center",
  },
});
