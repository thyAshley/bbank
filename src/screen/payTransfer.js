import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

import color from "../config/color";
import { getAccountDetailsById } from "../../mockdata";
import { AuthContext } from "../context/AuthContext";
import InfoCard from "../components/InfoCard";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withSafeAreaInsets } from "react-native-safe-area-context";

export default function payTransfer({ to = "" }) {
  const { uid, logout } = useContext(AuthContext);
  const [bank, setBank] = useState([]);
  const [creditCard, setCreditCard] = useState([]);
  const [selectedBank, setSelectedBank] = useState("");
  const [displayFund, setDisplayFund] = useState(true);
  const [transferType, setTransferType] = useState(null);

  useEffect(() => {
    const { bank, creditCard } = getAccountDetailsById(uid);
    setBank(bank);
    setCreditCard(creditCard);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.topContainerText}>Pay / Transfer</Text>
      </View>
      <View style={styles.imgContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/transferMoney.png")}
        />
      </View>

      <View style={styles.header}>
        <Text
          style={{
            marginLeft: 20,
            fontSize: 16,
            fontWeight: "500",
            marginVertical: 10,
          }}
        >
          Funds
        </Text>
        <View
          style={{
            flexGrow: 1,
            alignItems: "flex-end",
            marginRight: 20,
          }}
        >
          <Text onPress={() => setDisplayFund(true)} style={styles.btn}>
            Select Fund
          </Text>
        </View>
      </View>

      <View style={styles.fundContainer}>
        {!displayFund && selectedBank && (
          <InfoCard
            key={selectedBank.accountNumber}
            title={selectedBank.bankName}
            accNumber={selectedBank.accountNumber}
            amount={selectedBank.amount}
            text="Available Balance"
          />
        )}

        {displayFund &&
          bank?.map((b) => (
            <InfoCard
              key={b.accountNumber}
              title={b.bankName}
              accNumber={b.accountNumber}
              amount={b.amount}
              text="Available Balance"
              callToAction="SELECT"
              ctAction={() => {
                setDisplayFund(false);
                setSelectedBank(b);
              }}
            />
          ))}
      </View>
      <View style={styles.paymentContainer}>
        <View
          style={[
            styles.paymentOptionContainer,
            { backgroundColor: color.primary },
          ]}
        >
          <Text>Pay Card</Text>
        </View>
        <View
          style={[
            styles.paymentOptionContainer,
            { backgroundColor: color.secondary },
          ]}
        >
          <Text>Transfer</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  paymentContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  paymentOptionContainer: {
    flexGrow: 1,
    alignItems: "center",
    padding: 10,
  },
  btn: {
    backgroundColor: color.primary,
    borderColor: color.primary,
    borderWidth: 1,
    borderRadius: 5,
    color: "white",
    padding: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
  fundContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  topContainer: {
    height: 100,
    width: "100%",
    backgroundColor: color.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  topContainerText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  imgContainer: {
    backgroundColor: "#B7E0E6",
    alignItems: "center",
    justifyContent: "center",
    height: 200,
  },
  image: {
    width: 250,
    height: 150,
    resizeMode: "stretch",
  },
});
