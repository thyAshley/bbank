import Axios from "axios";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Spinner from "../components/Spinner";
import color from "../config/color";

export default function Transaction({ route }) {
  const [account, setAccount] = useState();
  useEffect(() => {
    const fetchDetail = async () => {
      const result = await Axios.get(
        `http://is5009bbank.herokuapp.com/get_bankinfo/${route.params.params.account}`
      );
      setAccount(result.data);
    };
    fetchDetail();
  }, [route]);
  console.log(account);
  return account ? (
    <View style={styles.container}>
      <Text style={styles.header}>
        {account.BankName} {account.AccountType} {account.AccountNumber}
      </Text>
      <ScrollView>
        {account.Transactions.length ? (
          account.Transactions.map((trans) => (
            <View style={styles.card}>
              <Text style={styles.description}>{trans.Description}</Text>
              <View
                style={{
                  flexGrow: 1,
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                <Text style={styles.text}>Date: {trans.Date}</Text>
                <Text style={styles.text}>Amount: {trans.Amount}</Text>
              </View>
            </View>
          ))
        ) : (
          <View style={styles.card}>
            <Text
              style={{
                textAlign: "center",
                flex: 1,
                fontSize: 16,
                color: color.textLight,
              }}
            >
              No Transaction Found
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  ) : (
    <Spinner />
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "white",
    marginVertical: 2,
    color: color.textLight,
  },
  container: {
    margin: 15,
  },
  description: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: color.textLight,
  },
  header: {
    textAlign: "center",
    fontSize: 20,
    color: color.textDark,
    letterSpacing: 1.25,
    padding: 5,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    padding: 5,
    marginRight: 10,
    color: color.textLight,
  },
});
