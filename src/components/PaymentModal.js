import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function paymentModal({ navigation, hideModal }) {
  return (
    <View style={styles.container}>
      <AntDesign
        name="checkcircle"
        size={100}
        color="black"
        style={{ margin: 50 }}
      />
      <View>
        <Text style={styles.font}>Transfer Successful</Text>
        <Text style={styles.font}>Transactional ID: 1234-5678-90</Text>
      </View>
      <Text
        style={styles.btn}
        onPress={() => {
          navigation.navigate("Dashboard");
          hideModal(false);
        }}
      >
        Return
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B7E0E6",
    zIndex: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    textAlign: "center",
    borderColor: "rgba(0,0,0,0.15)",
    borderWidth: 1,
    backgroundColor: "#6FDAE8",
    color: "white",
    padding: 10,
    borderRadius: 20,
    marginVertical: 50,
    width: 100,
    fontSize: 17,
    fontWeight: "bold",
  },
  font: {
    textAlign: "center",
    fontSize: 23,
  },
});
