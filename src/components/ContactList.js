import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import color from "../config/color";

export default function ContactList({ navigate }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Quickpay</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.imgContainer}>
          <View style={styles.new}>
            <Entypo
              name="squared-plus"
              size={30}
              color={color.primary}
              onPress={() =>
                navigate("Pay/Transfer", {
                  params: { type: "account", name: "" },
                })
              }
            />
          </View>
          <Text style={styles.text}>New</Text>
        </View>

        <View style={styles.imgContainer}>
          <View style={styles.portrait}>
            <TouchableOpacity
              onPress={() =>
                navigate("Pay/Transfer", {
                  params: {
                    account: "123244500",
                    type: "account",
                    name: "Jane",
                  },
                })
              }
            >
              <Image
                style={styles.image}
                source={require("../../assets/2.jpg")}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>Jane</Text>
        </View>

        <View style={styles.imgContainer}>
          <View style={styles.portrait}>
            <TouchableOpacity
              onPress={() =>
                navigate("Pay/Transfer", {
                  params: {
                    account: "123244500",
                    type: "account",
                    name: "Jammy",
                  },
                })
              }
            >
              <Image
                style={styles.image}
                source={require("../../assets/3.jpg")}
                onPress={() => navigate("Pay/Transfer")}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>Jammy</Text>
        </View>

        <View style={styles.imgContainer}>
          <View style={styles.portrait}>
            <TouchableOpacity
              onPress={() =>
                navigate("Pay/Transfer", {
                  params: {
                    account: "123244500",
                    type: "account",
                    name: "John",
                  },
                })
              }
            >
              <Image
                style={styles.image}
                source={require("../../assets/4.jpg")}
                onPress={() => navigate("Pay/Transfer")}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>John</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    width: 90,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    marginHorizontal: 25,
    marginTop: 15,
  },
  image: {
    height: 60,
    width: 60,
  },
  text: {
    color: "black",
    fontSize: 14,
    marginBottom: 10,
  },
  portrait: {
    flexDirection: "row",
    height: 60,
    width: 60,
    borderRadius: 40,
    backgroundColor: "white",
    overflow: "hidden",
  },
  new: {
    backgroundColor: "white",
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    borderWidth: 1,
    borderColor: color.primary,
  },
});
