import React, { memo } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { FontSize, Color, Border, FontFamily } from "../GlobalStyles";

const LifetimeContainer = memo(() => {
  return (
    <View style={styles.lifetime}>
      <View style={styles.lifetimeChild} />
      <Image
        style={styles.lifetimeItem}
        resizeMode="cover"
        source={require("../assets/vector-142.png")}
      />
      <Text style={styles.lifetime1}>Lifetime</Text>
      <View style={styles.maskGroup}>
        <View style={[styles.maskGroupChild, styles.wrapperTransform]} />
      </View>
      <Text style={styles.text}>$49.00</Text>
      <Text style={[styles.monthPlanFor, styles.text1Typo]}>{`6-month plan for
39.99 usd`}</Text>
      <View style={[styles.wrapper, styles.wrapperTransform]}>
        <Text style={[styles.text1, styles.text1Typo]}>-75%</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapperTransform: {
    transform: [
      {
        rotate: "45deg",
      },
    ],
    position: "absolute",
  },
  text1Typo: {
    letterSpacing: -0.3,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    color: Color.darkslateblue,
    position: "absolute",
  },
  lifetimeChild: {
    width: "98.35%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.white,
    left: "0.83%",
    bottom: "0.64%",
    right: "0.83%",
    height: "99.36%",
    top: "0%",
    position: "absolute",
  },
  lifetimeItem: {
    height: "0.74%",
    top: "77.65%",
    bottom: "21.62%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    width: "99.17%",
    left: "0.83%",
    right: "0%",
    position: "absolute",
  },
  lifetime1: {
    top: "83.9%",
    left: "14.05%",
    fontSize: FontSize.size_xs,
    letterSpacing: -0.4,
    textAlign: "left",
    color: Color.darkslateblue,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    lineHeight: 13,
    position: "absolute",
  },
  maskGroupChild: {
    height: "57.92%",
    width: "22.5%",
    top: "69.63%",
    right: "-24.41%",
    bottom: "-27.55%",
    left: "101.91%",
    backgroundColor: Color.sandybrown_100,
  },
  maskGroup: {
    left: "0%",
    width: "99.17%",
    bottom: "0.64%",
    right: "0.83%",
    height: "99.36%",
    top: "0%",
    position: "absolute",
  },
  text: {
    top: "24.29%",
    left: "16.53%",
    fontSize: FontSize.size_5xl,
    letterSpacing: -0.7,
    color: Color.sandybrown_100,
    textAlign: "center",
    lineHeight: 14,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    position: "absolute",
  },
  monthPlanFor: {
    top: "43.42%",
    left: "19.01%",
    fontWeight: "500",
    fontFamily: FontFamily.manropeMedium,
    opacity: 0.5,
    fontSize: FontSize.size_3xs,
    lineHeight: 13,
  },
  text1: {
    lineHeight: 14,
    fontSize: FontSize.size_3xs,
    transform: [
      {
        rotate: "45deg",
      },
    ],
    left: "0%",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    top: "0%",
  },
  wrapper: {
    height: "10.3%",
    width: "19.83%",
    top: "92.71%",
    right: "3.31%",
    bottom: "-3.02%",
    left: "76.86%",
  },
  lifetime: {
    height: "88.23%",
    width: "32.27%",
    bottom: "11.77%",
    left: "67.73%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
});

export default LifetimeContainer;
