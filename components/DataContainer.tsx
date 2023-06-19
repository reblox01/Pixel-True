import React, { memo } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import AnalyticsContainer from "./AnalyticsContainer";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, Padding, Border, FontFamily } from "../GlobalStyles";

const DataContainer = memo(() => {
  const navigation = useNavigation();

  return (
    <View style={[styles.analytics, styles.analyticsLayout]}>
      <AnalyticsContainer />
      <Text style={[styles.analytics1, styles.textTypo]}>Analytics</Text>
      <View style={styles.button374xvariant4}>
        <Pressable
          style={[styles.button, styles.buttonLayout]}
          onPress={() => navigation.navigate("CongratulationPopup")}
        >
          <Text style={[styles.text, styles.textTypo]}>
            Mark Habit as Complete
          </Text>
        </Pressable>
      </View>
      <View style={styles.button374xvariant2}>
        <View style={[styles.button1, styles.buttonLayout]}>
          <Text style={[styles.text, styles.textTypo]}>
            Mark Habit as Missed
          </Text>
        </View>
      </View>
      <LinearGradient
        style={[styles.rectangle, styles.analyticsLayout]}
        locations={[0, 1]}
        colors={["#fbeadb", "#fff3e9"]}
        useAngle={true}
        angle={180}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  analyticsLayout: {
    width: 414,
    position: "absolute",
  },
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
    borderRadius: Border.br_xs,
    justifyContent: "center",
    alignItems: "center",
  },
  analytics1: {
    height: "6.93%",
    width: "16.18%",
    top: "10.82%",
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
    top: 292,
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
    borderRadius: Border.br_xs,
  },
  button374xvariant2: {
    top: 362,
    padding: Padding.p_xl,
    overflow: "hidden",
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  rectangle: {
    top: 30,
    left: 414,
    height: 30,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    backgroundColor: "transparent",
  },
  analytics: {
    top: 726,
    height: 462,
    left: 0,
    width: 414,
  },
});

export default DataContainer;
