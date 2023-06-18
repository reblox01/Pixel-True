import React, { memo } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { FontSize, Color, Border, FontFamily, Padding } from "../GlobalStyles";

const ContentContainer = memo(() => {
  return (
    <View style={styles.content}>
      <View style={styles.contentChild} />
      <Text style={styles.enterYourRegistered}>
        Enter your registered email below to receive password reset instruction
      </Text>
      <View style={[styles.contentItem, styles.contentPosition]} />
      <Image
        style={[styles.contentInner, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector-143.png")}
      />
      <Text style={[styles.email, styles.emailPosition]}>Email</Text>
      <Image
        style={[styles.vectorIcon, styles.emailPosition]}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={styles.button334xvariant4}>
        <View style={styles.button}>
          <Text style={[styles.text, styles.textLayout]}>Send Reset Link</Text>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  contentPosition: {
    bottom: "37.5%",
    top: "39.17%",
    height: "23.33%",
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  emailPosition: {
    opacity: 0.5,
    position: "absolute",
  },
  textLayout: {
    lineHeight: 16,
    letterSpacing: -0.5,
    fontSize: FontSize.size_base,
    color: Color.darkslateblue,
  },
  contentChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.white,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  enterYourRegistered: {
    width: "87.17%",
    top: "8.33%",
    fontSize: FontSize.size_sm,
    letterSpacing: -0.4,
    lineHeight: 22,
    textAlign: "center",
    color: Color.darkslateblue,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    left: "5.35%",
    position: "absolute",
  },
  contentItem: {
    width: "89.3%",
    right: "5.35%",
    backgroundColor: Color.sandybrown_200,
    opacity: 0.1,
    left: "5.35%",
    bottom: "37.5%",
    top: "39.17%",
    height: "23.33%",
    borderRadius: Border.br_xs,
  },
  contentInner: {
    width: "0.27%",
    right: "80.61%",
    left: "19.12%",
    bottom: "37.5%",
    top: "39.17%",
    height: "23.33%",
    position: "absolute",
  },
  email: {
    top: "47.5%",
    left: "23.53%",
    textAlign: "left",
    lineHeight: 16,
    letterSpacing: -0.5,
    fontSize: FontSize.size_base,
    color: Color.darkslateblue,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    opacity: 0.5,
  },
  vectorIcon: {
    height: "5.17%",
    width: "4.12%",
    top: "48.25%",
    right: "84.97%",
    bottom: "46.58%",
    left: "10.91%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  text: {
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    textAlign: "center",
  },
  button: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.sandybrown_100,
    width: 334,
    height: 60,
    paddingLeft: Padding.p_94xl,
    paddingTop: Padding.p_3xl,
    paddingRight: Padding.p_91xl,
    paddingBottom: Padding.p_3xl,
    alignItems: "center",
    justifyContent: "center",
  },
  button334xvariant4: {
    top: 140,
    left: 0,
    padding: Padding.p_xl,
    overflow: "hidden",
    position: "absolute",
  },
  content: {
    height: "26.79%",
    width: "90.34%",
    top: "55.8%",
    right: "4.83%",
    bottom: "17.41%",
    left: "4.83%",
    position: "absolute",
  },
});

export default ContentContainer;
