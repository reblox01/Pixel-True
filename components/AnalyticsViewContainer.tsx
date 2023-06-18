import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import AnalyticsContainer from "./AnalyticsContainer";
import { Color, FontSize, Padding, Border, FontFamily } from "../GlobalStyles";

const AnalyticsViewContainer = memo(() => {
  return (
    <View style={styles.analytics}>
      <AnalyticsContainer propTop={54} />
      <Text style={[styles.analytics1, styles.textTypo]}>Analytics</Text>
      <View style={styles.button374xvariant4}>
        <View style={[styles.button, styles.buttonLayout]}>
          <Text style={[styles.text, styles.textTypo]}>
            Mark Habit as Complete
          </Text>
        </View>
      </View>
      <View style={styles.button374xvariant2}>
        <View style={[styles.button1, styles.buttonLayout]}>
          <Text style={[styles.text, styles.textTypo]}>
            Mark Habit as Missed
          </Text>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "center",
    color: Color.darkslateblue,
    letterSpacing: -0.5,
    fontSize: FontSize.size_base,
  },
  buttonLayout: {
    paddingVertical: Padding.p_3xl,
    paddingHorizontal: Padding.p_113xl,
    height: 60,
    width: 374,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    alignItems: "center",
  },
  analytics1: {
    top: "0%",
    left: "42.03%",
    lineHeight: 32,
    fontWeight: "500",
    fontFamily: FontFamily.manropeMedium,
    opacity: 0.5,
    position: "absolute",
    color: Color.darkslateblue,
    letterSpacing: -0.5,
    fontSize: FontSize.size_base,
  },
  text: {
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
  },
  button: {
    backgroundColor: Color.sandybrown_100,
  },
  button374xvariant4: {
    top: 242,
    justifyContent: "center",
    alignItems: "center",
    padding: Padding.p_xl,
    flexDirection: "row",
    overflow: "hidden",
    left: 0,
    position: "absolute",
  },
  button1: {
    backgroundColor: Color.white,
    flexDirection: "row",
    paddingVertical: Padding.p_3xl,
    paddingHorizontal: Padding.p_113xl,
    height: 60,
    width: 374,
    borderRadius: Border.br_5xs,
  },
  button374xvariant2: {
    top: 312,
    padding: Padding.p_xl,
    overflow: "hidden",
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  analytics: {
    top: 650,
    width: 414,
    height: 412,
    left: 0,
    position: "absolute",
  },
});

export default AnalyticsViewContainer;
