import React, { memo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Day1Container = memo(() => {
  return (
    <View style={[styles.content, styles.contentLayout]}>
      <Image
        style={[styles.backgroundIcon, styles.contentLayout]}
        resizeMode="cover"
        source={require("../assets/background4.png")}
      />
      <View style={[styles.lesson5, styles.lessonPosition]}>
        <Text style={[styles.day1, styles.day1Typo]}>5. Day 1</Text>
        <View style={[styles.locked, styles.lockedPosition]}>
          <View style={[styles.lockedChild, styles.lockedPosition]} />
          <Image
            style={[styles.bxbxsLockIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/bxbxslock.png")}
          />
        </View>
        <Text style={[styles.text, styles.textTypo]}>3:38</Text>
      </View>
      <View style={[styles.lesson4, styles.lessonPosition]}>
        <View style={[styles.locked, styles.lockedPosition]}>
          <View style={[styles.lockedChild, styles.lockedPosition]} />
          <Image
            style={[styles.bxbxsLockIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/bxbxslock.png")}
          />
        </View>
        <Text style={[styles.text1, styles.textTypo]}>2:04</Text>
        <Text style={[styles.day1, styles.day1Typo]}>4. Optional Supplies</Text>
      </View>
      <View style={[styles.lesson3, styles.lessonPosition]}>
        <View style={[styles.locked, styles.lockedPosition]}>
          <View style={[styles.lockedChild, styles.lockedPosition]} />
          <Image
            style={[styles.bxbxsLockIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/bxbxslock.png")}
          />
        </View>
        <Text style={[styles.text1, styles.textTypo]}>3:08</Text>
        <Text style={[styles.day1, styles.day1Typo]}>
          2. Adopting Prompts to Covid-19...
        </Text>
      </View>
      <View style={[styles.lesson2, styles.lessonPosition]}>
        <View style={[styles.locked, styles.lockedPosition]}>
          <View style={[styles.lockedChild, styles.lockedPosition]} />
          <Image
            style={[styles.bxbxsLockIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/bxbxslock.png")}
          />
        </View>
        <Text style={[styles.text3, styles.textTypo]}>6:06</Text>
        <Text style={[styles.day1, styles.day1Typo]}>
          3. Choosing a Notebook
        </Text>
      </View>
      <View style={[styles.lesson1, styles.lessonPosition]}>
        <View style={[styles.locked, styles.lockedPosition]}>
          <View style={[styles.lockedChild, styles.lockedPosition]} />
          <Image
            style={[styles.fluentplay28FilledIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/fluentplay28filled.png")}
          />
        </View>
        <Text style={[styles.introduction, styles.day1Typo]}>Introduction</Text>
        <Text style={[styles.text4, styles.textTypo]}>2:16</Text>
      </View>
      <Text style={[styles.lessons2h41m, styles.lessons2h41mTypo]}>
        37 Lessons (2h 41m)
      </Text>
      <Text style={[styles.dayJournalChallenge, styles.lessons2h41mTypo]}>
        30 Day Journal Challenge - Establish a Habit of Daily Journaling
      </Text>
    </View>
  );
});

const styles = StyleSheet.create({
  contentLayout: {
    height: 393,
    width: 374,
    position: "absolute",
  },
  lessonPosition: {
    left: "1.6%",
    right: "4.28%",
    width: "94.12%",
    height: "9.67%",
    position: "absolute",
  },
  day1Typo: {
    textAlign: "left",
    color: Color.darkslateblue,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: -0.5,
    top: "28.95%",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  lockedPosition: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  iconPosition: {
    overflow: "hidden",
    width: 16,
    left: 11,
    position: "absolute",
  },
  textTypo: {
    opacity: 0.5,
    textAlign: "left",
    color: Color.darkslateblue,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: -0.5,
    fontSize: FontSize.size_base,
    top: "28.95%",
    position: "absolute",
  },
  lessons2h41mTypo: {
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.darkslateblue,
    letterSpacing: -0.5,
    position: "absolute",
  },
  backgroundIcon: {
    top: 0,
    left: 0,
  },
  day1: {
    left: "14.77%",
  },
  lockedChild: {
    width: "100%",
    right: "0%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.sandybrown_100,
    opacity: 0.1,
  },
  bxbxsLockIcon: {
    top: 9,
    height: 20,
  },
  locked: {
    width: "10.8%",
    right: "89.2%",
  },
  text: {
    left: "90.91%",
  },
  lesson5: {
    top: "88.8%",
    bottom: "1.53%",
  },
  text1: {
    left: "90.63%",
  },
  lesson4: {
    top: "76.08%",
    bottom: "14.25%",
  },
  lesson3: {
    top: "50.64%",
    bottom: "39.69%",
  },
  text3: {
    left: "90.34%",
  },
  lesson2: {
    top: "63.36%",
    bottom: "26.97%",
  },
  fluentplay28FilledIcon: {
    top: 10,
    height: 18,
  },
  introduction: {
    left: "13.64%",
  },
  text4: {
    left: "91.48%",
  },
  lesson1: {
    top: "37.91%",
    bottom: "52.42%",
  },
  lessons2h41m: {
    width: "43.32%",
    top: "28.5%",
    left: "4.55%",
    lineHeight: 14,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
  },
  dayJournalChallenge: {
    top: 25,
    left: 17,
    fontSize: FontSize.size_lg,
    lineHeight: 25,
    width: 324,
  },
  content: {
    top: 332,
    left: 20,
  },
});

export default Day1Container;
