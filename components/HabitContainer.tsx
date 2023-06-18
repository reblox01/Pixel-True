import React, { memo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const HabitContainer = memo(() => {
  return (
    <View style={styles.habitName}>
      <View style={styles.habitName1}>
        <Image
          style={styles.habitNameChild}
          resizeMode="cover"
          source={require("../assets/vector-117.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>Habit Name</Text>
        <Text style={[styles.information, styles.textTypo]}>Read a book</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  textTypo: {
    marginTop: 17,
    color: Color.darkslateblue,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    letterSpacing: -0.5,
    fontSize: FontSize.size_base,
  },
  habitNameChild: {
    width: 334,
    height: 1,
  },
  text: {
    lineHeight: 14,
    textAlign: "left",
  },
  information: {
    lineHeight: 16,
    textAlign: "center",
    opacity: 0.3,
  },
  habitName1: {
    top: 20,
    left: 20,
    borderRadius: Border.br_xs,
    backgroundColor: Color.white,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_mid,
    position: "absolute",
  },
  habitName: {
    top: 77,
    left: 0,
    width: 414,
    height: 138,
    overflow: "hidden",
    position: "absolute",
  },
});

export default HabitContainer;
