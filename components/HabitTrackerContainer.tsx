import React, { memo } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const HabitTrackerContainer = memo(() => {
  return (
    <View style={styles.trackingHabit}>
      <View style={[styles.date7, styles.datePosition1]}>
        <Text style={[styles.today, styles.todayTypo]}>Today</Text>
        <Image
          style={[styles.date7Child, styles.childLayout1]}
          resizeMode="cover"
          source={require("../assets/group-10052.png")}
        />
        <Text style={[styles.text, styles.textTypo1]}>10</Text>
      </View>
      <View style={[styles.date6, styles.datePosition]}>
        <Image
          style={styles.date6Child}
          resizeMode="cover"
          source={require("../assets/group-10051.png")}
        />
        <Text style={[styles.text1, styles.textTypo]}>9</Text>
      </View>
      <View style={[styles.date5, styles.datePosition1]}>
        <Text style={[styles.text2, styles.todayTypo]}>06/16</Text>
        <Image
          style={[styles.date5Child, styles.datePosition]}
          resizeMode="cover"
          source={require("../assets/group-10049.png")}
        />
        <Text style={[styles.text3, styles.textTypo]}>4</Text>
      </View>
      <View style={[styles.date4, styles.datePosition]}>
        <Image
          style={[styles.date4Child, styles.childPosition]}
          resizeMode="cover"
          source={require("../assets/group-10048.png")}
        />
        <Text style={[styles.text1, styles.textTypo]}>5</Text>
      </View>
      <View style={[styles.date3, styles.datePosition1]}>
        <Text style={[styles.text2, styles.todayTypo]}>06/15</Text>
        <Image
          style={[styles.date7Child, styles.childLayout1]}
          resizeMode="cover"
          source={require("../assets/group-10047.png")}
        />
        <Text style={[styles.text3, styles.textTypo]}>6</Text>
      </View>
      <View style={[styles.date2, styles.datePosition]}>
        <Text style={[styles.text7, styles.textTypo]}>0</Text>
        <Image
          style={[styles.date2Child, styles.childLayout]}
          resizeMode="cover"
          source={require("../assets/group-10046.png")}
        />
      </View>
      <View style={styles.date1}>
        <Text style={[styles.text8, styles.textTypo1]}>7</Text>
        <Text style={[styles.text2, styles.todayTypo]}>06/14</Text>
        <Image
          style={[styles.date1Child, styles.childLayout]}
          resizeMode="cover"
          source={require("../assets/group-10050.png")}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  datePosition1: {
    bottom: "0%",
    top: "0%",
    width: "12.32%",
    height: "100%",
    position: "absolute",
  },
  todayTypo: {
    opacity: 0.5,
    textAlign: "center",
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    lineHeight: 13,
    letterSpacing: -0.3,
    fontSize: FontSize.size_3xs,
    top: "80.88%",
    color: Color.darkslateblue,
    position: "absolute",
  },
  childLayout1: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    right: "-0.82%",
    width: "100.82%",
    left: "0%",
  },
  textTypo1: {
    lineHeight: 16,
    letterSpacing: -0.7,
    fontSize: FontSize.size_sm,
    top: "19.12%",
    textAlign: "center",
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    position: "absolute",
  },
  datePosition: {
    bottom: "38.01%",
    position: "absolute",
  },
  textTypo: {
    left: "37.96%",
    lineHeight: 16,
    letterSpacing: -0.7,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    position: "absolute",
  },
  childPosition: {
    height: "101.19%",
    top: "-1.19%",
    bottom: "0%",
  },
  childLayout: {
    width: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
  },
  today: {
    left: "16.61%",
  },
  date7Child: {
    bottom: "37.5%",
    height: "63.24%",
    top: "-0.74%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    right: "-0.82%",
    width: "100.82%",
    position: "absolute",
  },
  text: {
    width: "37.96%",
    left: "30.84%",
    color: Color.sandybrown_100,
  },
  date7: {
    left: "87.68%",
    right: "0%",
    bottom: "0%",
    top: "0%",
    width: "12.32%",
    height: "100%",
  },
  date6Child: {
    height: "102.01%",
    width: "102.01%",
    bottom: "-0.82%",
    left: "-1.19%",
    top: "-1.19%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    right: "-0.82%",
    position: "absolute",
  },
  text1: {
    top: "30.84%",
    left: "37.96%",
    width: "23.72%",
    color: Color.darkslateblue,
  },
  date6: {
    right: "14.61%",
    left: "73.07%",
    height: "61.99%",
    bottom: "38.01%",
    top: "0%",
    width: "12.32%",
  },
  text2: {
    left: "18.98%",
  },
  date5Child: {
    height: "62.73%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    right: "-0.82%",
    width: "100.82%",
    left: "0%",
    bottom: "38.01%",
    top: "-0.74%",
  },
  text3: {
    width: "23.72%",
    color: Color.darkslateblue,
    left: "37.96%",
    top: "19.12%",
  },
  date5: {
    right: "29.23%",
    left: "58.45%",
    bottom: "0%",
    top: "0%",
    width: "12.32%",
    height: "100%",
  },
  date4Child: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    right: "-0.82%",
    width: "100.82%",
    left: "0%",
    position: "absolute",
  },
  date4: {
    right: "43.84%",
    left: "43.84%",
    height: "61.99%",
    bottom: "38.01%",
    top: "0%",
    width: "12.32%",
  },
  date3: {
    right: "58.45%",
    left: "29.23%",
    bottom: "0%",
    top: "0%",
    width: "12.32%",
    height: "100%",
  },
  text7: {
    width: "26.1%",
    color: Color.tomato,
    top: "30.84%",
    left: "37.96%",
  },
  date2Child: {
    height: "101.19%",
    top: "-1.19%",
    bottom: "0%",
  },
  date2: {
    right: "73.07%",
    left: "14.61%",
    height: "61.99%",
    bottom: "38.01%",
    top: "0%",
    width: "12.32%",
  },
  text8: {
    width: "21.35%",
    left: "40.33%",
    color: Color.darkslateblue,
    lineHeight: 16,
    letterSpacing: -0.7,
    fontSize: FontSize.size_sm,
  },
  date1Child: {
    bottom: "37.5%",
    height: "63.24%",
    top: "-0.74%",
  },
  date1: {
    right: "87.68%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    width: "12.32%",
    height: "100%",
    position: "absolute",
  },
  trackingHabit: {
    height: "7.59%",
    width: "82.65%",
    top: "33.48%",
    right: "8.66%",
    bottom: "58.93%",
    left: "8.7%",
    position: "absolute",
  },
});

export default HabitTrackerContainer;
