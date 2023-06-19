import React, { memo } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const WakeUpContainer = memo(() => {
  return (
    <View style={styles.wakeUpEarly}>
      <View style={styles.rectangle} />
      <View style={[styles.component, styles.componentLayout]}>
        <View style={styles.shape}>
          <View style={[styles.squareOuter, styles.squareBg]} />
          <View style={[styles.square, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.component1, styles.componentLayout]}>
        <View style={styles.shape}>
          <View style={[styles.squareOuter, styles.squareBg]} />
          <View style={[styles.square, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.component2, styles.componentLayout]}>
        <View style={styles.shape}>
          <View style={[styles.squareOuter, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half1.png")}
          />
        </View>
      </View>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector-106.png")}
      />
      <Text style={styles.wakeUpEarly1}>Wake Up Early</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  componentLayout: {
    width: 74,
    top: 0,
    overflow: "hidden",
    height: 74,
    position: "absolute",
  },
  squareBg: {
    backgroundColor: Color.midnightblue,
    borderRadius: Border.br_xs,
  },
  squarePosition: {
    left: "3.7%",
    right: "3.7%",
    width: "92.59%",
    height: "92.59%",
    position: "absolute",
  },
  rectangle: {
    height: "94.59%",
    top: "2.7%",
    bottom: "2.7%",
    backgroundColor: Color.white,
    borderRadius: Border.br_xs,
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  squareOuter: {
    height: "100%",
    top: "0%",
    bottom: "0%",
    opacity: 0.1,
    left: "0%",
    right: "0%",
    width: "100%",
    backgroundColor: Color.midnightblue,
    position: "absolute",
  },
  square: {
    top: "3.7%",
    bottom: "3.7%",
    backgroundColor: Color.midnightblue,
    borderRadius: Border.br_xs,
  },
  shape: {
    top: 10,
    left: 10,
    width: 54,
    height: 54,
    position: "absolute",
  },
  component: {
    left: 123,
    overflow: "hidden",
  },
  component1: {
    left: 235,
    overflow: "hidden",
  },
  squareHalfIcon: {
    top: "13.2%",
    bottom: "-5.79%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  component2: {
    left: 179,
    overflow: "hidden",
  },
  vectorIcon: {
    top: 2,
    left: 117,
    width: 1,
    height: 70,
    position: "absolute",
  },
  wakeUpEarly1: {
    top: "36.49%",
    left: "4.25%",
    fontSize: FontSize.size_sm,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    color: Color.darkslateblue,
    textAlign: "left",
    position: "absolute",
  },
  wakeUpEarly: {
    top: 382,
    left: 0,
    width: 424,
    height: 74,
    position: "absolute",
  },
});

export default WakeUpContainer;
