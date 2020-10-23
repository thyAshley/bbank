import React, { useContext } from "react";
import { StyleSheet, Button, View } from "react-native";
import { AuthContext } from "../context/AuthContext";

export default function Account() {
  const { uid, logout } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Button onPress={logout} title="Log out" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
