import Axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { StyleSheet, View, Text as IText } from "react-native";
import { PieChart } from "react-native-svg-charts";
import { Text } from "react-native-svg";
import color from "../config/color";
import { ProgressBar, Colors } from "react-native-paper";

export default function Insights() {
  const [category, setCategory] = useState(null);
  const colors = {
    Bill: "#FCEE7F",
    Food: "salmon",
    Medical: "#A13BE0",
    Shopping: "#28CBFF",
    Transport: "#FF2865",
    Uncategorised: "dodgerblue",
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
          if (key !== "CustomerID" && key !== "Month" && result.data[key] !== 0)
            chartData.push({
              key: key,
              amount: result.data[key],
              svg: { fill: colors[key] },
            });
        }
      }
      setCategory(chartData);
    };

    getInsights();
  }, []);
  console.log(category);
  const data = [
    {
      key: "test",
      amount: 50,
      svg: { fill: "#600080" },
    },
    {
      key: 2,
      amount: 50,
      svg: { fill: "#9900cc" },
    },
    {
      key: 3,
      amount: 40,
      svg: { fill: "#c61aff" },
    },
    {
      key: 4,
      amount: 95,
      svg: { fill: "#d966ff" },
    },
    {
      key: 5,
      amount: 35,
      svg: { fill: "#ecb3ff" },
    },
  ];
  const Labels = ({ slices, height, width }) => {
    return slices.map((slice, index) => {
      const { labelCentroid, pieCentroid, data } = slice;
      return (
        <Text
          key={index}
          x={pieCentroid[0]}
          y={pieCentroid[1]}
          fill={color.textDark}
          textAnchor={"middle"}
          alignmentBaseline={"middle"}
          fontSize={13}
          stroke={color.textDark}
          strokeWidth={0.4}
        >
          {`$ ${data.amount}`}
        </Text>
      );
    });
  };

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
          <PieChart
            style={{ height: 220 }}
            valueAccessor={({ item }) => item.amount}
            data={data}
            spacing={0}
            outerRadius={"95%"}
            data={category}
          >
            <Labels />
          </PieChart>
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.detailContainer}>
            {category.map((cat, idx) => (
              <View key={idx} style={{ flexDirection: "column" }}>
                <IText style={styles.text}>{cat.key}</IText>
                <ProgressBar
                  color={colors[cat.key]}
                  progress={cat.amount / 500}
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
    marginTop: 15,
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
    color: "black",
    marginRight: 20,
    color: color.textLight,
  },
});
