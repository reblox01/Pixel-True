import React, { memo } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const PostAlContainer = memo(() => {
  return (
    <View style={[styles.post3, styles.post3Position]}>
      <View style={[styles.background, styles.backgroundChildPosition]}>
        <View
          style={[styles.backgroundChild, styles.backgroundChildPosition]}
        />
        <Image
          style={[styles.backgroundItem, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector-119.png")}
        />
      </View>
      <Text style={styles.thisCourseContains}>
        This course contains the most complete material on habit formation that
        I've seen. There is just enough theory to explain the principles, and
        not so much...
      </Text>
      <View style={[styles.sharePost, styles.profilePosition]}>
        <View style={[styles.sharePostChild, styles.backgroundChildPosition]} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector10.png")}
        />
      </View>
      <View style={[styles.profile, styles.profilePosition]}>
        <Text style={[styles.al, styles.alPosition]}>Al</Text>
        <Text style={[styles.mAgo, styles.alPosition]}>41m ago</Text>
        <Image
          style={styles.profileChild}
          resizeMode="cover"
          source={require("../assets/ellipse-841.png")}
        />
      </View>
      <View style={[styles.reactionsAndComments, styles.vectorIcon1Layout]}>
        <Text style={[styles.k, styles.kTypo]}>3.1k</Text>
        <Text style={[styles.text, styles.kTypo]}>22</Text>
        <Image
          style={styles.speechBubble1Icon}
          resizeMode="cover"
          source={require("../assets/speechbubble-1.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIcon1Layout]}
          resizeMode="cover"
          source={require("../assets/vector11.png")}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  post3Position: {
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  backgroundChildPosition: {
    bottom: "0%",
    left: "0%",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  profilePosition: {
    top: "6.1%",
    position: "absolute",
  },
  alPosition: {
    lineHeight: 14,
    left: "43.59%",
    textAlign: "left",
    color: Color.darkslateblue,
    letterSpacing: -0.4,
    position: "absolute",
  },
  vectorIcon1Layout: {
    width: "17.91%",
    position: "absolute",
  },
  kTypo: {
    textAlign: "center",
    letterSpacing: -0.2,
    fontSize: FontSize.size_5xs,
    color: Color.darkslateblue,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    top: "0%",
    position: "absolute",
  },
  backgroundChild: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.white,
    top: "0%",
    bottom: "0%",
    height: "100%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  backgroundItem: {
    height: "0.61%",
    top: "31.4%",
    bottom: "67.99%",
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  background: {
    top: "0%",
    bottom: "0%",
    height: "100%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  thisCourseContains: {
    width: "93.05%",
    top: "39.02%",
    left: "4.28%",
    lineHeight: 20,
    textAlign: "left",
    color: Color.darkslateblue,
    letterSpacing: -0.4,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  sharePostChild: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.darkslateblue,
    opacity: 0.1,
    top: "0%",
    bottom: "0%",
    height: "100%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  vectorIcon: {
    height: "31.25%",
    width: "34.38%",
    top: "34.38%",
    right: "34.38%",
    bottom: "34.38%",
    left: "31.25%",
    position: "absolute",
  },
  sharePost: {
    height: "19.51%",
    width: "8.56%",
    right: "2.67%",
    bottom: "74.39%",
    left: "88.77%",
  },
  al: {
    top: "6.67%",
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    lineHeight: 14,
    left: "43.59%",
    fontSize: FontSize.size_sm,
  },
  mAgo: {
    top: "53.33%",
    fontSize: FontSize.size_xs,
    opacity: 0.5,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    lineHeight: 14,
    left: "43.59%",
  },
  profileChild: {
    top: 0,
    left: 0,
    width: 28,
    height: 28,
    position: "absolute",
  },
  profile: {
    height: "18.29%",
    width: "20.86%",
    right: "73.8%",
    bottom: "75.61%",
    left: "5.35%",
  },
  k: {
    width: "19.4%",
    left: "22.39%",
    height: "100%",
    textAlign: "center",
    letterSpacing: -0.2,
    fontSize: FontSize.size_5xs,
  },
  text: {
    left: "85.07%",
    opacity: 0.5,
  },
  speechBubble1Icon: {
    top: 1,
    left: 44,
    width: 10,
    height: 10,
    overflow: "hidden",
    position: "absolute",
  },
  vectorIcon1: {
    height: "90.91%",
    top: "9.09%",
    right: "82.09%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    bottom: "0%",
    left: "0%",
  },
  reactionsAndComments: {
    height: "6.71%",
    top: "83.54%",
    right: "4.28%",
    bottom: "9.76%",
    left: "77.81%",
  },
  post3: {
    height: "24.12%",
    top: "50.59%",
    bottom: "25.29%",
  },
});

export default PostAlContainer;
