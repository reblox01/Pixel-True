import React, { memo } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const HabitContainer1 = memo(() => {
  return (
    <View style={styles.frequency}>
      <Text style={[styles.habitFrequency, styles.timeLayout]}>
        Habit Frequency
      </Text>
      <Image
        style={styles.lineIcon}
        resizeMode="cover"
        source={require("../assets/line.png")}
      />
      <View style={styles.week}>
        <View style={[styles.sun, styles.sunFlexBox]}>
          <Text style={[styles.sun1, styles.sun1Typo]}>SUN</Text>
          <View style={styles.component}>
            <View style={styles.shape}>
              <View style={[styles.squareOuter, styles.squareBg]} />
              <View style={[styles.square, styles.squarePosition]} />
            </View>
          </View>
        </View>
        <View style={[styles.mon, styles.sunFlexBox]}>
          <Text style={[styles.sun1, styles.sun1Typo]}>MON</Text>
          <View style={styles.component}>
            <View style={styles.shape}>
              <View style={[styles.squareOuter, styles.squareBg]} />
              <Image
                style={[styles.squareHalfIcon, styles.squarePosition]}
                resizeMode="cover"
                source={require("../assets/square-half4.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.tue, styles.sunFlexBox]}>
          <Text style={[styles.sun1, styles.sun1Typo]}>TUE</Text>
          <View style={styles.component}>
            <View style={styles.shape}>
              <View style={[styles.squareOuter, styles.squareBg]} />
              <Image
                style={[styles.squareHalfIcon, styles.squarePosition]}
                resizeMode="cover"
                source={require("../assets/square-half4.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.wed, styles.sunFlexBox]}>
          <Text style={[styles.sun1, styles.sun1Typo]}>WED</Text>
          <View style={styles.component}>
            <View style={styles.shape}>
              <View style={[styles.squareOuter, styles.squareBg]} />
              <View style={[styles.square, styles.squarePosition]} />
            </View>
          </View>
        </View>
        <View style={[styles.thu, styles.sunFlexBox]}>
          <Text style={[styles.sun1, styles.sun1Typo]}>THU</Text>
          <View style={styles.component}>
            <View style={styles.shape}>
              <View style={[styles.squareOuter, styles.squareBg]} />
              <Image
                style={[styles.squareHalfIcon, styles.squarePosition]}
                resizeMode="cover"
                source={require("../assets/square-half4.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.fri, styles.sunFlexBox]}>
          <Text style={[styles.sun1, styles.sun1Typo]}>FRI</Text>
          <View style={styles.component}>
            <View style={styles.shape}>
              <View style={[styles.squareOuter, styles.squareBg]} />
              <View style={[styles.square, styles.squarePosition]} />
            </View>
          </View>
        </View>
        <View style={[styles.sat, styles.sunFlexBox]}>
          <Text style={[styles.sun1, styles.sun1Typo]}>SAT</Text>
          <View style={styles.component}>
            <View style={styles.shape}>
              <View style={[styles.squareOuter, styles.squareBg]} />
              <View style={[styles.square, styles.squarePosition]} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.timeParent}>
        <Text style={[styles.time, styles.sun1Typo]}>Custom</Text>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/vector-136.png")}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  timeLayout: {
    lineHeight: 16,
    letterSpacing: -0.5,
    fontSize: FontSize.size_base,
  },
  sunFlexBox: {
    justifyContent: "center",
    top: 0,
    alignItems: "center",
    width: 55,
    position: "absolute",
  },
  sun1Typo: {
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
  },
  squareBg: {
    backgroundColor: Color.sandybrown_200,
    borderRadius: Border.br_xs,
  },
  squarePosition: {
    left: "5.13%",
    right: "5.13%",
    width: "89.74%",
    height: "89.74%",
    position: "absolute",
  },
  habitFrequency: {
    width: "30.93%",
    top: "12.78%",
    left: "5.33%",
    fontWeight: "500",
    fontFamily: FontFamily.manropeMedium,
    textAlign: "left",
    color: Color.darkslateblue,
    position: "absolute",
  },
  lineIcon: {
    top: 50,
    width: 374,
    height: 84,
    left: 0,
    position: "absolute",
  },
  sun1: {
    fontSize: FontSize.size_3xs,
    letterSpacing: -0.3,
    lineHeight: 13,
    textAlign: "center",
    width: 25,
    height: 11,
    opacity: 0.5,
    color: Color.darkslateblue,
  },
  squareOuter: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    opacity: 0.1,
    position: "absolute",
  },
  square: {
    top: "5.13%",
    bottom: "5.13%",
    backgroundColor: Color.sandybrown_200,
    borderRadius: Border.br_xs,
  },
  shape: {
    top: 8,
    left: 8,
    width: 38,
    height: 38,
    position: "absolute",
  },
  component: {
    height: 55,
    overflow: "hidden",
    width: 55,
  },
  sun: {
    left: 0,
  },
  squareHalfIcon: {
    top: "17.39%",
    bottom: "-7.14%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  mon: {
    left: 53,
  },
  tue: {
    left: 106,
  },
  wed: {
    left: 159,
  },
  thu: {
    left: 212,
  },
  fri: {
    left: 265,
  },
  sat: {
    left: 320,
  },
  week: {
    top: 60,
    width: 375,
    height: 66,
    left: 0,
    position: "absolute",
  },
  time: {
    color: Color.sandybrown_100,
    textAlign: "right",
    lineHeight: 16,
    letterSpacing: -0.5,
    fontSize: FontSize.size_base,
  },
  frameChild: {
    width: 19,
    height: 25,
    marginLeft: 10,
  },
  timeParent: {
    top: 17,
    left: 274,
    width: 90,
    height: 16,
    flexDirection: "row",
    paddingLeft: Padding.p_sm,
    alignItems: "center",
    position: "absolute",
  },
  frequency: {
    height: "20.34%",
    width: "90.34%",
    top: "9.48%",
    right: "4.59%",
    bottom: "70.18%",
    left: "5.07%",
    backgroundColor: Color.white,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
});

export default HabitContainer1;
