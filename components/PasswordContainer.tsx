import React, { memo } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const PasswordContainer = memo(() => {
  return (
    <View style={styles.inputFields}>
      <View style={[styles.inputPassword, styles.inputPosition2]}>
        <View style={[styles.inputPasswordChild, styles.inputPosition]} />
        <Image
          style={[styles.inputPasswordItem, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector-143.png")}
        />
        <Text style={[styles.password, styles.iconPosition]}>Password</Text>
        <Text style={styles.show}>Show</Text>
        <Image
          style={[styles.vectorIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
      </View>
      <View style={[styles.inputEmail, styles.inputPosition2]}>
        <View style={[styles.inputPasswordChild, styles.inputPosition]} />
        <Image
          style={[styles.inputPasswordItem, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector-143.png")}
        />
        <Text style={[styles.password, styles.iconPosition]}>Email</Text>
        <Image
          style={[styles.vectorIcon1, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/vector2.png")}
        />
      </View>
      <View style={[styles.inputProfile, styles.inputPosition]}>
        <View style={[styles.inputPasswordChild, styles.inputPosition]} />
        <Text style={[styles.name, styles.iconPosition]}>Name</Text>
        <Image
          style={[styles.inputPasswordItem, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector-143.png")}
        />
        <Image
          style={[styles.userIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/user.png")}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  inputPosition2: {
    left: "0%",
    right: "0%",
    width: "100%",
  },
  inputPosition: {
    top: "0%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  iconPosition: {
    opacity: 0.5,
    position: "absolute",
  },
  inputPasswordChild: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.white,
    height: "100%",
    top: "0%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  inputPasswordItem: {
    width: "0.27%",
    right: "86.76%",
    left: "12.97%",
    top: "0%",
    position: "absolute",
    height: "100%",
    bottom: "0%",
  },
  password: {
    left: "17.38%",
    textAlign: "left",
    letterSpacing: -0.5,
    fontSize: FontSize.size_base,
    opacity: 0.5,
    color: Color.darkslateblue,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    lineHeight: 16,
    top: "35.71%",
  },
  show: {
    left: "85.03%",
    fontSize: FontSize.size_sm,
    textDecoration: "underline",
    letterSpacing: -0.4,
    textAlign: "right",
    color: Color.darkslateblue,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    lineHeight: 16,
    top: "35.71%",
    position: "absolute",
  },
  vectorIcon: {
    height: "29.29%",
    width: "3.32%",
    top: "35.36%",
    right: "91.66%",
    bottom: "35.36%",
    left: "5.03%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  inputPassword: {
    top: "69.57%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
    height: "30.43%",
    position: "absolute",
  },
  vectorIcon1: {
    height: "22.14%",
    width: "4.12%",
    top: "38.93%",
    right: "91.39%",
    bottom: "38.93%",
    left: "4.49%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  inputEmail: {
    top: "34.78%",
    bottom: "34.78%",
    right: "0%",
    width: "100%",
    left: "0%",
    height: "30.43%",
    position: "absolute",
  },
  name: {
    left: "17.91%",
    textAlign: "left",
    letterSpacing: -0.5,
    fontSize: FontSize.size_base,
    opacity: 0.5,
    color: Color.darkslateblue,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    lineHeight: 16,
    top: "35.71%",
  },
  userIcon: {
    height: "31.61%",
    width: "4.26%",
    top: "34.2%",
    right: "91.42%",
    bottom: "34.2%",
    left: "4.32%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  inputProfile: {
    bottom: "69.57%",
    left: "0%",
    right: "0%",
    width: "100%",
    height: "30.43%",
  },
  inputFields: {
    height: "20.54%",
    width: "90.34%",
    top: "37.17%",
    right: "4.83%",
    bottom: "42.3%",
    left: "4.83%",
    position: "absolute",
  },
});

export default PasswordContainer;
