import React, { memo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const AvatarContainer = memo(() => {
  return (
    <View style={styles.benefits}>
      <Image
        style={styles.backgroundIcon}
        resizeMode="cover"
        source={require("../assets/background6.png")}
      />
      <View style={styles.texts}>
        <View style={[styles.list3, styles.listPosition]}>
          <Image
            style={[styles.list3Child, styles.list1Position]}
            resizeMode="cover"
            source={require("../assets/ellipse-859.png")}
          />
          <Image
            style={styles.list3Item}
            resizeMode="cover"
            source={require("../assets/vector-131.png")}
          />
          <Text style={[styles.accessToAll, styles.accessFlexBox]}>
            Access to all avatar illustrations
          </Text>
        </View>
        <View style={[styles.list2, styles.listPosition]}>
          <Image
            style={[styles.list3Child, styles.list1Position]}
            resizeMode="cover"
            source={require("../assets/ellipse-859.png")}
          />
          <Image
            style={styles.list3Item}
            resizeMode="cover"
            source={require("../assets/vector-131.png")}
          />
          <Text style={[styles.accessToAll1, styles.accessFlexBox]}>
            Access to all courses
          </Text>
        </View>
        <View style={[styles.list1, styles.list1Position]}>
          <Image
            style={[styles.list3Child, styles.list1Position]}
            resizeMode="cover"
            source={require("../assets/ellipse-859.png")}
          />
          <Image
            style={styles.list3Item}
            resizeMode="cover"
            source={require("../assets/vector-131.png")}
          />
          <Text style={[styles.unlimitedHabits, styles.accessFlexBox]}>
            Unlimited habits
          </Text>
        </View>
      </View>
      <Text style={[styles.unlockMonumentalHabits, styles.accessFlexBox]}>
        Unlock Monumental Habits
      </Text>
    </View>
  );
});

const styles = StyleSheet.create({
  listPosition: {
    height: 22,
    left: 0,
    position: "absolute",
  },
  list1Position: {
    top: 0,
    height: 22,
    left: 0,
    position: "absolute",
  },
  accessFlexBox: {
    textAlign: "left",
    color: Color.darkslateblue,
    position: "absolute",
  },
  backgroundIcon: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  list3Child: {
    width: 22,
  },
  list3Item: {
    top: 8,
    left: 6,
    width: 11,
    height: 8,
    position: "absolute",
  },
  accessToAll: {
    left: "15.97%",
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: -0.5,
    fontSize: FontSize.size_base,
    top: "13.64%",
    textAlign: "left",
    color: Color.darkslateblue,
  },
  list3: {
    top: 92,
    width: 263,
  },
  accessToAll1: {
    left: "22.11%",
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: -0.5,
    fontSize: FontSize.size_base,
    top: "13.64%",
    textAlign: "left",
    color: Color.darkslateblue,
  },
  list2: {
    top: 46,
    width: 190,
  },
  unlimitedHabits: {
    left: "26.58%",
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: -0.5,
    fontSize: FontSize.size_base,
    top: "13.64%",
    textAlign: "left",
    color: Color.darkslateblue,
  },
  list1: {
    width: 158,
  },
  texts: {
    top: 62,
    left: 20,
    height: 114,
    width: 263,
    position: "absolute",
  },
  unlockMonumentalHabits: {
    top: "9.57%",
    left: "16.84%",
    fontSize: FontSize.size_xl,
    letterSpacing: -0.6,
    lineHeight: 14,
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
  },
  benefits: {
    height: "20.98%",
    width: "90.34%",
    top: "31.14%",
    right: "4.83%",
    bottom: "47.88%",
    left: "4.83%",
    position: "absolute",
  },
});

export default AvatarContainer;
