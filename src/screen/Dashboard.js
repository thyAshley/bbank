import React, { useContext, useEffect, useState } from "react";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";

import Card from "../components/Card";
import Circle from "../components/Circle";
import { AuthContext } from "../context/AuthContext";
import InfoCard from "../components/InfoCard";
import ContactList from "../components/ContactList";
import Axios from "axios";
import Promotions from "../components/Promotions";
import color from "../config/color";

const Dashboard = ({ navigation, route }) => {
  const [showAccount, setShowAccount] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [detail, setDetail] = useState("");
  const {
    uid,
    bank,
    setBank,
    creditCard,
    setCreditCard,
    transfer,
  } = useContext(AuthContext);

  useEffect(() => {
    const getInfo = async () => {
      const result = await Axios.get(
        `http://is5009bbank.herokuapp.com/customer_info/${uid}`
      );
      if (result) {
        setDetail(result.data);
        const { Bank, CreditCard } = result.data;
        setBank(Bank);
        setCreditCard(CreditCard);
      }
    };
    getInfo();
  }, [transfer, route]);

  const displayAccount = () => {
    setShowAccount(!showAccount);
  };

  const displayCard = () => {
    setShowCard(!showCard);
  };
  console.log(detail);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView overScrollMode="always" style={{ flex: 1 }}>
        <Circle />
        <Circle otherStyle={styles.circle2} />
        <View style={styles.top}>
          <Image style={styles.image} source={require("../../assets/6.jpg")} />
          <Text style={styles.text}>Welcome {detail.Name}</Text>
        </View>
        <ContactList navigate={navigation.navigate} />
        <View style={{ flexDirection: "row" }}>
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
          <Text
            onPress={() => navigation.navigate("Insight")}
            style={{
              position: "absolute",
              right: 30,
              fontSize: 13,
              marginTop: 10,
              borderColor: color.primary,
              borderWidth: 1,
              borderRadius: 20,
              padding: 10,
              color: color.primary,
            }}
          >
            View Insights
          </Text>
        </View>
        <View style={styles.summaryContainer}>
          <Card
            title="Bank Accounts"
            text="Balance"
            amount={bank.reduce((acc, val) => acc + val.Balance, 0)}
            display={displayAccount}
            direction={showAccount}
          />
          {showAccount &&
            bank?.map((b) => (
              <InfoCard
                key={b.AccountNumber}
                title={b.BankName}
                accNumber={b.AccountNumber}
                amount={b.Balance}
                text="Available Balance"
                callToAction="View Transaction"
                image={b.BankName}
                ctAction={() =>
                  navigation.navigate("Transaction", {
                    params: { account: b.AccountNumber },
                  })
                }
              />
            ))}
          <View style={{ height: 10 }} />
          <Card
            title="Credit Cards"
            text="Outstanding Amount"
            amount={creditCard.reduce((acc, val) => acc + val.AmountDue, 0)}
            backgroundColor="rgb(90,234,196)"
            display={displayCard}
            direction={showCard}
          />
          {showCard &&
            creditCard?.map((b) => (
              <InfoCard
                backgroundColor="rgb(90,234,196)"
                key={b.CardID}
                title={b.CardName}
                accNumber={b.CardNumber}
                amount={b.AmountDue}
                text="Outstanding Amount"
                callToAction="Pay Card"
                image={b.BankName}
                ctAction={() =>
                  navigation.navigate("Pay/Transfer", {
                    params: { card: b, type: "card" },
                  })
                }
              />
            ))}
        </View>
        <View style={{ height: 40 }}></View>
        <Promotions />
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
