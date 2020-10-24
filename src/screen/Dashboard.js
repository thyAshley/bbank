import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
} from "react-native";

import Card from "../components/Card";
import Circle from "../components/Circle";
import { AuthContext } from "../context/AuthContext";
import { getAccountDetailsById } from "../../mockdata";
import InfoCard from "../components/InfoCard";
import ContactList from "../components/ContactList";

const dummyAccount = {
  totalBalance: 6234.01,
  accounts: [
    {
      bank: "dbs",
      name: "Savings Account",
      number: "123-567890-1",
      balance: 3034.56,
    },
    {
      bank: "uob",
      name: "Basic Savings Account",
      number: "123-567-789-0",
      balance: 3200.0,
    },
  ],
};

const Dashboard = ({ navigation }) => {
  const [showAccount, setShowAccount] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const { uid, logout } = useContext(AuthContext);
  const [bank, setBank] = useState([]);
  const [creditCard, setCreditCard] = useState([]);

  useEffect(() => {
    const { bank, creditCard } = getAccountDetailsById(uid);
    setBank(bank);
    setCreditCard(creditCard);
  }, []);

  const displayAccount = () => {
    setShowAccount(!showAccount);
  };

  const displayCard = () => {
    setShowCard(!showCard);
  };
  return (
    <View style={{ flex: 1 }}>
      <ScrollView overScrollMode="always" style={{ flex: 1 }}>
        <Circle />
        <Circle otherStyle={styles.circle2} />
        <View style={styles.top}>
          <Image
            style={styles.image}
            source={{ uri: "https://picsum.photos/id/1/200/300" }}
          />
          <Text style={styles.text}>Welcome Oliver!</Text>
        </View>
        <ContactList navigate={navigation.navigate} />
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginLeft: 25,
            marginTop: 10,
          }}
        >
          Summary
        </Text>
        <View style={styles.summaryContainer}>
          <Card
            title="Bank Accounts"
            text="Balance"
            amount={bank.reduce((acc, val) => acc + val.amount, 0)}
            display={displayAccount}
            direction={showAccount}
          />
          {showAccount &&
            bank?.map((b) => (
              <InfoCard
                key={b.accountNumber}
                title={b.bankName}
                accNumber={b.accountNumber}
                amount={b.amount}
                text="Available Balance"
                callToAction="View Transaction"
              />
            ))}
          <View style={{ height: 10 }} />
          <Card
            title="Credit Cards"
            text="Outstanding Amount"
            amount={creditCard.reduce((acc, val) => acc + val.amount, 0)}
            backgroundColor="rgb(90,234,196)"
            display={displayCard}
            direction={showCard}
          />
          {showCard &&
            creditCard?.map((b) => (
              <InfoCard
                backgroundColor="rgb(90,234,196)"
                key={b.cardId}
                title={b.accountType}
                accNumber={b.cardNumber}
                amount={b.amount}
                text="Outstanding Amount"
                callToAction="Pay Card"
                ctAction={() =>
                  navigation.navigate("Pay/Transfer", {
                    params: { card: b, type: "card" },
                  })
                }
              />
            ))}
        </View>
        <View style={{ height: 40 }}></View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  circle2: {
    backgroundColor: "rgba(101, 217, 229, 0.7)",
    left: -55,
    top: 15,
    zIndex: 7,
  },
  container: {
    flex: 1,
  },
  summaryContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  top: {
    backgroundColor: "#20c6dd",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    borderRadius: 75,
    height: 125,
    width: 125,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1.5,
    marginTop: 20,
  },
});
