import Axios from "axios";
import React, { useState, useEffect } from "react";

import { StyleSheet, View, Text as IText } from "react-native";
import color from "../config/color";
import { ProgressBar, Colors } from "react-native-paper";

export default function Insights() {
  const [category, setCategory] = useState(null);
  const colors = {
    Bill: "salmon",
    Food: "coral",
    Medical: "tomato",
    Shopping: "tomato",
    Transport: "orange",
    Uncategorised: "darkorange",
  };
  useEffect(() => {
    const getInsights = async () => {
      const result = await Axios.post(
        "http://is5009bbank.herokuapp.com/get_insights",
        {
          CustomerID: 1,
          Month: "Oct",
        }
      );

      let chartData = [];
      if (result.data) {
        for (let key in result.data) {
          if (
            key === "Bill" ||
            key === "Food" ||
            key === "Medical" ||
            key === "Shopping" ||
            key === "Transport" ||
            key === "Uncategorised"
          ) {
            chartData.push({
              key: key,
              amount: result.data[key],
              svg: { fill: colors[key] },
              target: result.data[`${key}_B`],
            });
          }
        }
        setCategory(chartData);
      }
    };
    getInsights();
  }, []);
  console.log(category);
  return (
    category && (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <IText
            style={{
              textAlign: "center",
              fontSize: 18,
              color: color.textLight,
              marginBottom: 10,
              fontWeight: "700",
              textDecorationLine: "underline",
            }}
          >
            October Expenses
          </IText>
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.detailContainer}>
            {category.map((cat, idx) => (
              <View key={idx} style={{ flexDirection: "column" }}>
                <View style={{ flexDirection: "row" }}>
                  <IText style={styles.text}>{cat.key}</IText>
                  <IText
                    style={{
                      fontSize: 20,
                      justifyContent: "flex-end",
                      color: color.textLight,
                      position: "absolute",
                      right: 10,
                    }}
                  >
                    ${cat.amount}
                    {cat.key !== "Uncategorised" ? `/ $${cat.target}` : null}
                  </IText>
                </View>
                <ProgressBar
                  color={colors[cat.key]}
                  progress={
                    cat.amount / (cat.key !== "Uncategorised" ? cat.target : 1)
                  }
                  style={[styles.progress]}
                />
              </View>
            ))}
          </View>
        </View>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    padding: 10,
  },
  headerContainer: {
    marginHorizontal: 20,
    marginTop: 10,
    flexDirection: "row",
  },
  detailContainer: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  progress: {
    height: 20,
    width: "95%",
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "rgba(0,0,0,0.25)",
  },
  text: {
    fontSize: 20,
    marginRight: 20,
    color: color.textLight,
  },
});
