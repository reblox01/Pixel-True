import React, { memo } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const GretchenContainer = memo(() => {
  return (
    <View style={styles.post2}>
      <Text
        style={styles.iLovedThe}
      >{`I loved the course! I've been trying to break all this great stuff down into manageable chunks to help my clients develop healthy habits and achieve their personal... `}</Text>
      <View style={[styles.sharePost, styles.sharePosition]}>
        <View style={[styles.sharePostChild, styles.sharePosition]} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector10.png")}
        />
      </View>
      <View style={[styles.profile, styles.profilePosition]}>
        <Image
          style={[styles.profileChild, styles.profilePosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-8411.png")}
        />
        <Text style={[styles.gretchen, styles.mAgoPosition]}>Gretchen</Text>
        <Text style={[styles.mAgo, styles.mAgoPosition]}>41m ago</Text>
      </View>
      <View style={styles.reactionsAndComments}>
        <Text style={[styles.k, styles.kTypo]}>3.1k</Text>
        <Text style={[styles.text, styles.kTypo]}>22</Text>
        <Image
          style={styles.speechBubble1Icon}
          resizeMode="cover"
          source={require("../assets/speechbubble-1.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector11.png")}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  sharePosition: {
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  profilePosition: {
    height: 28,
    left: 0,
    position: "absolute",
  },
  mAgoPosition: {
    lineHeight: 14,
    left: "38.38%",
    textAlign: "left",
    color: Color.darkslateblue,
    letterSpacing: -0.4,
    position: "absolute",
  },
  kTypo: {
    textAlign: "center",
    letterSpacing: -0.2,
    fontSize: FontSize.size_5xs,
    top: "0%",
    color: Color.darkslateblue,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    position: "absolute",
  },
  iLovedThe: {
    width: "96.84%",
    top: "39.13%",
    lineHeight: 20,
    textAlign: "left",
    color: Color.darkslateblue,
    letterSpacing: -0.4,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    left: "0%",
    position: "absolute",
  },
  sharePostChild: {
    width: "100%",
    borderRadius: Border.br_6xl,
    backgroundColor: Color.darkslateblue,
    opacity: 0.1,
    bottom: "0%",
    height: "100%",
    left: "0%",
  },
  vectorIcon: {
    height: "31.25%",
    width: "34.38%",
    top: "34.38%",
    right: "34.38%",
    bottom: "34.38%",
    left: "31.25%",
  },
  sharePost: {
    height: "23.19%",
    width: "9.2%",
    bottom: "76.81%",
    left: "90.8%",
  },
  profileChild: {
    top: 0,
    width: 28,
  },
  gretchen: {
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    top: "0%",
    left: "38.38%",
    fontSize: FontSize.size_sm,
  },
  mAgo: {
    top: "50%",
    fontSize: FontSize.size_xs,
    opacity: 0.5,
    left: "38.38%",
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
  },
  profile: {
    top: 2,
    width: 99,
  },
  k: {
    width: "19.4%",
    left: "22.39%",
    height: "100%",
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
    width: "17.91%",
    top: "9.09%",
    right: "82.09%",
    bottom: "0%",
    left: "0%",
  },
  reactionsAndComments: {
    height: "7.97%",
    width: "19.25%",
    top: "92.03%",
    right: "1.72%",
    left: "79.02%",
    bottom: "0%",
    position: "absolute",
  },
  post2: {
    height: "20.29%",
    width: "93.05%",
    top: "26.76%",
    right: "2.67%",
    bottom: "52.94%",
    left: "4.28%",
    position: "absolute",
  },
});

export default GretchenContainer;
