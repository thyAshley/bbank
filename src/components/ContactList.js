import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function ContactList() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Quickpay</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.portrait}></View>
        <View style={styles.portrait}></View>
        <View style={styles.portrait}></View>
        <View style={styles.portrait}></View>
        <View style={styles.portrait}></View>
        <View style={styles.portrait}></View>
        <View style={styles.portrait}></View>
        <View style={styles.portrait}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginTop: 15,
  },
  portrait: {
    marginVertical: 15,
    marginRight: 15,
    height: 60,
    width: 60,
    borderRadius: 40,
    backgroundColor: "white",
  },
});
