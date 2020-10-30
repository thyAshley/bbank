import React, { useContext } from "react";
import { StyleSheet, Button, View, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AuthContext } from "../context/AuthContext";
import { AntDesign } from "@expo/vector-icons";
import colors from "../config/color";

export default function Account() {
  const { uid, logout } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.text}>Account Management</Text>
      </View>
      <View style={styles.body}>
        <View
          style={{
            flexDirection: "row",
            borderWidth: 1,
            borderColor: colors.textLight,
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <Text style={styles.options}>Account Details</Text>
          <AntDesign
            style={{ position: "absolute", right: 20 }}
            name="closecircleo"
            size={24}
            color="black"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            borderWidth: 1,
            borderColor: colors.textLight,
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <Text style={styles.options}>Preference</Text>
          <AntDesign
            style={{ position: "absolute", right: 20 }}
            name="closecircleo"
            size={24}
            color="black"
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            borderWidth: 1,
            borderColor: colors.textLight,
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <Text style={styles.options}>Notification and Settings</Text>
          <AntDesign
            style={{ position: "absolute", right: 20 }}
            name="closecircleo"
            size={24}
            color="black"
          />
        </View>
        <TouchableOpacity onPress={logout}>
          <View
            style={{
              flexDirection: "row",
              borderWidth: 1,
              borderColor: colors.textLight,
              alignItems: "center",
              marginVertical: 10,
            }}
          >
            <Text style={styles.options}>Sign Out</Text>

            <AntDesign
              style={{ position: "absolute", right: 20 }}
              name="closecircleo"
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    margin: 15,
  },
  container: {
    flex: 1,
  },
  top: {
    backgroundColor: "#20c6dd",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  options: {
    marginVertical: 15,
    color: colors.textLight,
    fontSize: 16,
    fontWeight: "500",
    flexDirection: "row",
    marginHorizontal: 10,
  },
  image: {
    borderRadius: 75,
    height: 125,
    width: 125,
    zIndex: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1.5,
    marginTop: 20,
  },
});
