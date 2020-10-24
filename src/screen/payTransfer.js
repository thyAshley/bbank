import React, { useContext, useState, useEffect, Fragment } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
} from "react-native";

import color from "../config/color";
import { getAccountDetailsById } from "../../mockdata";
import { AuthContext } from "../context/AuthContext";
import InfoCard from "../components/InfoCard";

export default function payTransfer({ to = "" }) {
  const { uid, logout } = useContext(AuthContext);
  const [bank, setBank] = useState([]);
  const [creditCard, setCreditCard] = useState([]);
  const [selectedBank, setSelectedBank] = useState("");
  const [selectedCard, setSelectedCard] = useState("");
  const [displayFund, setDisplayFund] = useState(true);
  const [displayCard, setDisplayCard] = useState(true);
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
      <ScrollView>
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
            <Text
              style={{ width: "100%", textAlign: "center" }}
              onPress={() => setTransferType("card")}
            >
              Pay Card
            </Text>
          </View>
          <View
            style={[
              styles.paymentOptionContainer,
              { backgroundColor: color.secondary },
            ]}
          >
            <Text
              style={{ width: "100%", textAlign: "center" }}
              onPress={() => setTransferType("nonCard")}
            >
              Transfer
            </Text>
          </View>
        </View>
        {transferType === "card" ? (
          <Fragment>
            <View style={styles.header}>
              <Text
                style={{
                  marginLeft: 20,
                  fontSize: 16,
                  fontWeight: "500",
                  marginVertical: 10,
                }}
              >
                Card
              </Text>
              <View
                style={{
                  flexGrow: 1,
                  alignItems: "flex-end",
                  marginRight: 20,
                }}
              >
                <Text onPress={() => setDisplayCard(true)} style={styles.btn}>
                  Select Card
                </Text>
              </View>
            </View>
            <View style={styles.fundContainer}>
              {!displayCard && selectedCard && (
                <InfoCard
                  key={selectedCard.accountNumber}
                  title={selectedCard.accountType}
                  accNumber={selectedCard.cardNumber}
                  amount={selectedCard.amount}
                  text="Outstanding Amount"
                />
              )}
              {displayCard &&
                creditCard?.map((c) => (
                  <InfoCard
                    key={c.cardId}
                    title={c.accountType}
                    accNumber={c.cardNumber}
                    amount={c.amount}
                    text="Outstanding Amount"
                    callToAction="PAY"
                    ctAction={() => {
                      setDisplayCard(false);
                      setSelectedCard(c);
                    }}
                  />
                ))}
            </View>
          </Fragment>
        ) : null}
        {selectedCard
          ? setSelectedBank && (
              <View
                style={{
                  width: "100%",
                  height: 40,
                  margin: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Text
                  style={[
                    styles.btn,
                    {
                      padding: 15,
                      textAlign: "center",
                      backgroundColor: color.secondary,
                      color: "black",
                    },
                  ]}
                >
                  Make Payment
                </Text>
              </View>
            )
          : null}
        <View style={{ height: 20 }} />
      </ScrollView>
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
