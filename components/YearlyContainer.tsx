import React, { memo } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const YearlyContainer = memo(() => {
  return (
    <View style={[styles.yearly, styles.yearlyPosition1]}>
      <View style={[styles.yearlyChild, styles.yearlyPosition]} />
      <Image
        style={[styles.yearlyItem, styles.yearlyItemLayout]}
        resizeMode="cover"
        source={require("../assets/vector-142.png")}
      />
      <Text style={styles.text}>$29.00</Text>
      <View style={[styles.yearlyInner, styles.yearlyPosition]} />
      <Image
        style={[styles.vectorIcon, styles.yearlyItemLayout]}
        resizeMode="cover"
        source={require("../assets/vector-142.png")}
      />
      <Text style={[styles.mostPopular, styles.yearly1Clr]}>Most Popular</Text>
      <Text style={[styles.yearly1, styles.yearly1Clr]}>Yearly</Text>
      <Text style={[styles.monthPlanFor, styles.yearly1Clr]}>{`6-month plan for
39.99 usd`}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  yearlyPosition1: {
    bottom: "0%",
    height: "100%",
  },
  yearlyPosition: {
    left: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    position: "absolute",
  },
  yearlyItemLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    height: "0.65%",
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  yearly1Clr: {
    color: Color.darkslateblue,
    lineHeight: 13,
    position: "absolute",
  },
  yearlyChild: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.white,
    shadowColor: "#fbeadb",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  yearlyItem: {
    top: "80.84%",
    bottom: "18.51%",
  },
  text: {
    top: "34.42%",
    left: "16.67%",
    fontSize: FontSize.size_5xl,
    letterSpacing: -0.7,
    lineHeight: 14,
    color: Color.sandybrown_100,
    textAlign: "center",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    position: "absolute",
  },
  yearlyInner: {
    height: "21.43%",
    bottom: "78.57%",
    borderTopLeftRadius: Border.br_xs,
    borderTopRightRadius: Border.br_xs,
    backgroundColor: Color.sandybrown_100,
  },
  vectorIcon: {
    top: "21.1%",
    bottom: "78.25%",
  },
  mostPopular: {
    top: "6.49%",
    left: "20%",
    letterSpacing: -0.4,
    fontSize: FontSize.size_xs,
    lineHeight: 13,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    textAlign: "center",
  },
  yearly1: {
    top: "86.36%",
    left: "35.83%",
    textAlign: "left",
    letterSpacing: -0.4,
    fontSize: FontSize.size_xs,
    lineHeight: 13,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
  },
  monthPlanFor: {
    top: "51.3%",
    left: "19.17%",
    fontSize: FontSize.size_3xs,
    letterSpacing: -0.3,
    fontWeight: "500",
    fontFamily: FontFamily.manropeMedium,
    opacity: 0.5,
    textAlign: "center",
  },
  yearly: {
    width: "32%",
    right: "34.13%",
    left: "33.87%",
    top: "0%",
    position: "absolute",
    bottom: "0%",
    height: "100%",
  },
});

export default YearlyContainer;
