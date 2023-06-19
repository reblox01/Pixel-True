import React, { memo } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const PostContainer = memo(() => {
  return (
    <View style={[styles.post1, styles.post1Position]}>
      <View style={[styles.background, styles.backgroundPosition]}>
        <View style={[styles.backgroundChild, styles.backgroundPosition]} />
        <Image
          style={[styles.backgroundItem, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector-119.png")}
        />
      </View>
      <Text style={styles.manYoureMy}>
        Man, you're my new guru! Viewing the lessons for a second time.
        Thoroughly pleased. And impressed that you draw from scientific
        literature in telling memorable...
      </Text>
      <View style={styles.profile}>
        <Text style={[styles.jerome, styles.mAgoPosition]}>Jerome</Text>
        <Text style={[styles.mAgo, styles.mAgoPosition]}>41m ago</Text>
        <Image
          style={styles.imageIcon}
          resizeMode="cover"
          source={require("../assets/image2.png")}
        />
      </View>
      <View style={styles.sharePost}>
        <View style={[styles.ellipse, styles.backgroundPosition]} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector10.png")}
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
  post1Position: {
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  backgroundPosition: {
    bottom: "0%",
    left: "0%",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  mAgoPosition: {
    lineHeight: 14,
    left: "43.68%",
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
    height: "100%",
    right: "0%",
    width: "100%",
    bottom: "0%",
    top: "0%",
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
    height: "100%",
    right: "0%",
    width: "100%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  manYoureMy: {
    width: "91.71%",
    top: "39.02%",
    lineHeight: 20,
    textAlign: "left",
    color: Color.darkslateblue,
    letterSpacing: -0.4,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    left: "4.28%",
    position: "absolute",
  },
  jerome: {
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    left: "43.68%",
    fontSize: FontSize.size_sm,
    top: "0%",
  },
  mAgo: {
    top: "50%",
    fontSize: FontSize.size_xs,
    opacity: 0.5,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    left: "43.68%",
  },
  imageIcon: {
    top: 0,
    left: 0,
    width: 28,
    height: 28,
    position: "absolute",
  },
  profile: {
    height: "17.07%",
    width: "23.26%",
    top: "7.32%",
    right: "72.46%",
    bottom: "75.61%",
    left: "4.28%",
    position: "absolute",
  },
  ellipse: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.darkslateblue,
    opacity: 0.1,
    height: "100%",
    right: "0%",
    width: "100%",
    bottom: "0%",
    top: "0%",
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
    top: "6.1%",
    right: "2.67%",
    bottom: "74.39%",
    left: "88.77%",
    position: "absolute",
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
  post1: {
    height: "24.12%",
    bottom: "75.88%",
    top: "0%",
    left: "0%",
  },
});

export default PostContainer;
