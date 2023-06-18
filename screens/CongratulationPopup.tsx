import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import AnalyticsViewContainer from "../components/AnalyticsViewContainer";
import MonthlyCalendar from "../components/MonthlyCalendar";
import CongratsContainer from "../components/CongratsContainer";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const CongratulationPopup = () => {
  return (
    <View style={styles.congratulationPopup}>
      <View style={[styles.content, styles.contentLayout]}>
        <Image
          style={[styles.menuIcon, styles.contentLayout]}
          resizeMode="cover"
          source={require("../assets/menu2.png")}
        />
        <Image
          style={styles.menuButtonIcon}
          resizeMode="cover"
          source={require("../assets/menu-button1.png")}
        />
        <AnalyticsViewContainer />
        <LinearGradient
          style={[styles.rectangle, styles.contentLayout]}
          locations={[0, 1]}
          colors={["#fbeadb", "#fff3e9"]}
          useAngle={true}
          angle={180}
        />
        <MonthlyCalendar />
        <View style={[styles.icons, styles.iconsLayout]}>
          <View style={styles.ellipse} />
          <Image
            style={styles.editIcon}
            resizeMode="cover"
            source={require("../assets/edit.png")}
          />
        </View>
        <Image
          style={[styles.icons1, styles.iconsLayout]}
          resizeMode="cover"
          source={require("../assets/icons1.png")}
        />
        <View style={styles.text}>
          <Text style={styles.newHabit}>Water Plants</Text>
        </View>
      </View>
      <View style={styles.dialogPosition}>
        <View style={[styles.rectangle1, styles.dialogPosition]} />
        <CongratsContainer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentLayout: {
    width: 414,
    position: "absolute",
  },
  iconsLayout: {
    height: 65,
    width: 64,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  dialogPosition: {
    top: 0,
    width: 414,
    left: 0,
    position: "absolute",
    height: 896,
  },
  menuIcon: {
    top: 1110,
    height: 124,
    left: 0,
    width: 414,
  },
  menuButtonIcon: {
    top: 1057,
    left: 125,
    width: 164,
    height: 194,
    position: "absolute",
    overflow: "hidden",
  },
  rectangle: {
    top: 630,
    left: 414,
    height: 30,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    backgroundColor: "transparent",
  },
  ellipse: {
    height: "67.69%",
    width: "68.75%",
    top: "16.92%",
    right: "15.63%",
    bottom: "15.38%",
    left: "15.63%",
    borderRadius: Border.br_6xl,
    backgroundColor: Color.darkslateblue,
    opacity: 0.1,
    position: "absolute",
  },
  editIcon: {
    height: "26.77%",
    width: "27.19%",
    top: "38.15%",
    right: "35.62%",
    bottom: "35.08%",
    left: "37.19%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  icons: {
    left: 333,
  },
  icons1: {
    left: 10,
  },
  newHabit: {
    top: "0%",
    left: "-8.79%",
    fontSize: FontSize.size_lg,
    letterSpacing: -0.5,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    color: Color.darkslateblue,
    textAlign: "center",
    position: "absolute",
  },
  text: {
    top: 17,
    left: 162,
    width: 91,
    height: 32,
    position: "absolute",
  },
  content: {
    top: 28,
    height: 1223,
    left: 0,
    width: 414,
  },
  rectangle1: {
    backgroundColor: Color.gray_100,
    opacity: 0.5,
  },
  congratulationPopup: {
    backgroundColor: Color.linen,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 896,
  },
});

export default CongratulationPopup;
