import React, { useContext, useState, useEffect, Fragment } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import color from "../config/color";
import { getAccountDetailsById } from "../../mockdata";
import { AuthContext } from "../context/AuthContext";
import InfoCard from "../components/InfoCard";
import PaymentModal from "../components/PaymentModal";
import Axios from "axios";
import Spinner from "../components/Spinner";

export default function payTransfer({ route = null, navigation }) {
  const { bank, creditCard, setBank, setCreditCard, setTransfer } = useContext(
    AuthContext
  );

  const [selectedBank, setSelectedBank] = useState("");
  const [selectedCard, setSelectedCard] = useState("");
  const [targetBank, setTargetBank] = useState("");
  const [payAmount, setPayAmount] = useState(0);
  const [displayFund, setDisplayFund] = useState(true);
  const [displayCard, setDisplayCard] = useState(false);
  const [transferType, setTransferType] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let details = route.params.params;
    if (details && details.type === "card") {
      setTransferType(details.type);
      setSelectedCard(details.card);
    }
    if (details && details.type === "account") {
      setTransferType("account");
      setTargetBank(details.account);
    }
  }, [route]);

  const payCard = async () => {
    setLoading(true);
    setTransfer(false);
    if (transferType === "card") {
      const result = await Axios.post(
        "http://is5009bbank.herokuapp.com/pay_creditcard",
        {
          BankAccount: selectedBank.AccountNumber,
          CardNumber: selectedCard.CardNumber,
          PayAmount: +payAmount,
        }
      );
      if (result.data[0].status === "success") {
        setTimeout(() => {
          setLoading(false);
          setTransfer(true);
          setSelectedBank(null);
          setTargetBank(null);
          setShowModal(true);
        }, 2000);
      }
    }
    if (transferType === "account") {
      const result = await Axios.post(
        "http://is5009bbank.herokuapp.com/bank_transfer",
        {
          Sender: selectedBank.AccountNumber,
          Receiver: targetBank,
          Amount: +payAmount,
        }
      );
      console.log(result);
      if (result.data.status === "success") {
        setTimeout(() => {
          setLoading(false);
          setTransfer(true);
          setSelectedBank(null);
          setSelectedCard(null);
          setShowModal(true);
          setTransfer(false);
        }, 2000);
      }
    }
  };

  return (
    <View style={styles.container}>
      {showModal ? (
        <PaymentModal navigation={navigation} hideModal={setShowModal} />
      ) : (
        <Fragment>
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
                  key={selectedBank.AccountNumber}
                  title={selectedBank.BankName}
                  accNumber={selectedBank.AccountNumber}
                  amount={selectedBank.Balance}
                  text="Available Balance"
                  image={selectedBank.BankName}
                />
              )}

              {displayFund &&
                bank?.map((b) => (
                  <InfoCard
                    key={b.AccountNumber}
                    title={b.BankName}
                    accNumber={b.AccountNumber}
                    amount={b.Balance}
                    image={b.BankName}
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
                  onPress={() => setTransferType("others")}
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
                    <Text
                      onPress={() => setDisplayCard(true)}
                      style={styles.btn}
                    >
                      Select Card
                    </Text>
                  </View>
                </View>
                <View style={styles.fundContainer}>
                  {!displayCard && selectedCard ? (
                    <InfoCard
                      key={selectedCard.CardID}
                      title={selectedCard.CardName}
                      accNumber={selectedCard.CardNumber}
                      amount={selectedCard.AmountDue}
                      text="Outstanding Amount"
                      image={selectedCard.BankName}
                    />
                  ) : null}
                  {displayCard &&
                    creditCard?.map((c) => (
                      <InfoCard
                        key={c.CardID}
                        title={c.CardName}
                        accNumber={c.CardNumber}
                        amount={c.AmountDue}
                        image={c.BankName}
                        text="Outstanding Amount"
                        callToAction="PAY"
                        ctAction={() => {
                          setDisplayCard(false);
                          setSelectedCard(c);
                        }}
                      />
                    ))}
                  <TextInput
                    style={[
                      styles.input,
                      {
                        width: "90%",
                        marginHorizontal: 20,
                        marginVertical: 10,
                      },
                    ]}
                    placeholder="Amount"
                    keyboardType="number-pad"
                    onChangeText={setPayAmount}
                  />
                </View>
              </Fragment>
            ) : transferType === "account" ? (
              <View style={styles.methodContainer}>
                <View style={styles.payMethod}>
                  <Text style={{ flexGrow: 1 }}>
                    Unique Entity Number (UEN)
                  </Text>
                  <AntDesign name="closecircle" size={24} color="black" />
                </View>
                <View style={styles.payMethod}>
                  <Text style={{ flexGrow: 1 }}>Mobile Number</Text>
                  <AntDesign name="closecircle" size={24} color="black" />
                </View>
                <View style={styles.payMethod}>
                  <Text style={{ flexGrow: 1 }}>BBank Account ID</Text>
                  <AntDesign name="caretdown" size={24} color="black" />
                </View>
                <View style={styles.information}>
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{
                        alignSelf: "center",
                        marginRight: 5,
                        width: "20%",
                      }}
                    >
                      Account ID:
                    </Text>
                    <TextInput
                      style={[styles.input, { flexGrow: 10 }]}
                      placeholder="Account ID"
                      value={route.params.params.name}
                    />
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{
                        alignSelf: "center",
                        marginRight: 5,
                        width: "20%",
                      }}
                    >
                      Amount:
                    </Text>
                    <TextInput
                      style={[styles.input, { flexGrow: 10 }]}
                      placeholder="Amount"
                      keyboardType="number-pad"
                      onChangeText={setPayAmount}
                    />
                  </View>
                </View>
              </View>
            ) : null}
            {selectedBank && (selectedCard || targetBank) ? (
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
                {loading && <Spinner />}

                <Text
                  style={[
                    styles.btn,
                    {
                      padding: 5,
                      textAlign: "center",
                      backgroundColor: color.secondary,
                      color: "black",
                    },
                  ]}
                  onPress={payCard}
                >
                  Make Payment
                </Text>
              </View>
            ) : null}
            <View style={{ height: 20 }} />
          </ScrollView>
        </Fragment>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  information: {
    flexGrow: 1,
    marginHorizontal: 20,
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: "white",
    padding: 10,
  },
  payMethod: {
    backgroundColor: "white",
    marginHorizontal: 20,
    padding: 10,
    marginBottom: 5,
    flexDirection: "row",
  },
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
