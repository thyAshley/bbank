import Axios from "axios";
import React, { useContext, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";

import CustButton from "../components/CustButton";
import CustText from "../components/CustText";
import Spinner from "../components/Spinner";
import color from "../config/color";
import { AuthContext } from "../context/AuthContext";

const LoginScreen = ({ navigation }) => {
  const { login, uid } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    setLoading(true);
    setTimeout(() => {
      login(email, password);
      setLoading(false);
    }, 1500);
  };
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.header]}>Welcome Back!</Text>
      <Image style={styles.img} source={require("../../assets/signin.png")} />
      <TextInput
        style={styles.inputText}
        placeholder="Enter your email address"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.inputText}
        placeholder="Enter your password"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setPassword}
        secureTextEntry
      />
      {loading && <Spinner />}
      <CustButton type="login" title="Login" onPress={loginHandler} />
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.text}>
          Not yet a member? <Text style={{ color: "dodgerblue" }}>Sign up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    margin: 20,
  },
  img: {
    height: 200,
    width: 200,
    margin: 25,
  },
  text: {
    color: color.text,
  },
  inputText: {
    backgroundColor: "white",
    borderRadius: 40,
    color: "rgba(0,0,0,0.75)",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    width: "80%",
  },
});
