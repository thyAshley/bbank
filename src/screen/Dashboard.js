import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import Circle from "../components/Circle";

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
const Dashboard = () => {
  const [account, setAccount] = useState({ totalBalance: "0" });
  useEffect(() => {
    setAccount(dummyAccount);
  }, []);

  return (
    <View style={styles.container}>
      <Circle />
      <Circle otherStyle={styles.circle2} />
      <View style={styles.top}>
        <Image
          style={styles.image}
          source={{ uri: "https://picsum.photos/id/1/200/300" }}
        />
        <Text style={styles.text}>Welcome Oliver!</Text>
      </View>
      <Text>Summary</Text>
      <View style={styles.summaryContainer}>
        <Card
          title="Bank Accounts"
          text="Balance"
          amount={account.totalBalance}
        />
        <Card
          title="Credit Cards"
          text="Outstanding Amount"
          amount="3,210.12"
          backgroundColor="rgb(90,234,196)"
        />
      </View>
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
    height: "30%",
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
