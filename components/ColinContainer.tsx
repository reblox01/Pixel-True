import React, { memo } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const ColinContainer = memo(() => {
  return (
    <View style={[styles.post4, styles.post4Position]}>
      <View style={styles.backgroundChildPosition}>
        <View
          style={[styles.backgroundChild, styles.backgroundChildPosition]}
        />
        <Image
          style={[styles.backgroundItem, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector-119.png")}
        />
      </View>
      <Text style={styles.jamesClearsHabits}>
        James Clear's Habit's Academy course has tremendously changed my life
        for the better! Having been a self improvement aficionado for decades...
      </Text>
      <View style={styles.sharePost}>
        <View style={[styles.sharePostChild, styles.backgroundChildPosition]} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector10.png")}
        />
      </View>
      <View style={[styles.profile, styles.profileLayout]}>
        <Image
          style={[styles.profileChild, styles.profileLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-838.png")}
        />
        <Text style={[styles.colin, styles.mAgoPosition]}>Colin</Text>
        <Text style={[styles.mAgo, styles.mAgoPosition]}>41m ago</Text>
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
  post4Position: {
    bottom: "0%",
    left: "0%",
  },
  backgroundChildPosition: {
    top: "0%",
    height: "100%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  profileLayout: {
    height: 28,
    position: "absolute",
  },
  mAgoPosition: {
    lineHeight: 14,
    left: "46.34%",
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
  jamesClearsHabits: {
    width: "91.71%",
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
  profileChild: {
    top: 0,
    left: 0,
    width: 28,
  },
  colin: {
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    left: "46.34%",
    fontSize: FontSize.size_sm,
    top: "0%",
  },
  mAgo: {
    top: "50%",
    fontSize: FontSize.size_xs,
    opacity: 0.5,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    left: "46.34%",
  },
  profile: {
    top: 12,
    left: 16,
    width: 82,
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
    left: "0%",
    bottom: "0%",
  },
  reactionsAndComments: {
    height: "6.71%",
    top: "83.54%",
    right: "4.28%",
    bottom: "9.76%",
    left: "77.81%",
  },
  post4: {
    height: "24.12%",
    top: "75.88%",
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
});

export default ColinContainer;
