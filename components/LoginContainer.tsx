import React, { memo } from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, Border, FontFamily, Padding } from "../GlobalStyles";

const LoginContainer = memo(() => {
  const navigation = useNavigation();

  return (
    <View style={[styles.loginSection, styles.loginPosition]}>
      <Image
        style={[styles.loginSectionChild, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-23771.png")}
      />
      <Image
        style={[styles.loginSectionItem, styles.loginLayout]}
        resizeMode="cover"
        source={require("../assets/vector-138.png")}
      />
      <Pressable
        style={styles.dontHaveAnContainer}
        onPress={() => navigation.navigate("SignUpPage")}
      >
        <Text style={[styles.text, styles.textLayout]}>
          <Text style={styles.emailTypo1}>Don’t have an account?</Text>
          <Text style={styles.text1Typo}> Sign up</Text>
        </Text>
      </Pressable>
      <Text style={[styles.logInWith, styles.emailTypo]}>
        Log in with email
      </Text>
      <Image
        style={[styles.loginSectionInner, styles.loginLayout]}
        resizeMode="cover"
        source={require("../assets/vector-138.png")}
      />
      <Pressable
        style={styles.forgotPassword}
        onPress={() => navigation.navigate("ResetPassword")}
      >
        <Text style={[styles.forgotPassword1, styles.showTypo1]}>
          Forgot Password?
        </Text>
      </Pressable>
      <View style={styles.inputPassword}>
        <View style={styles.inputPasswordChild} />
        <Image
          style={[styles.inputPasswordItem, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector-143.png")}
        />
        <Text style={[styles.password, styles.vectorIconPosition]}>
          Password
        </Text>
        <Text style={[styles.show, styles.showLayout]}>Show</Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
      </View>
      <View style={styles.inputProfile}>
        <View style={[styles.rectangleParent, styles.rectangleParentPosition]}>
          <View style={[styles.frameChild, styles.buttonLayout]} />
          <View style={styles.contentfulContentType} />
        </View>
        <Text style={[styles.email, styles.vectorIconPosition]}>Email</Text>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector2.png")}
        />
        <Image
          style={[styles.inputProfileChild, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector-143.png")}
        />
      </View>
      <View style={[styles.button374xvariant4, styles.buttonFlexBox]}>
        <Pressable
          style={[styles.button, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("HomepageTrackingHabits")}
        >
          <Text style={[styles.text1, styles.showLayout]}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  loginPosition: {
    left: "0%",
    right: "0%",
    width: "100%",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  loginLayout: {
    height: "0.28%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  textLayout: {
    lineHeight: 22,
    color: Color.darkslateblue,
  },
  emailTypo: {
    letterSpacing: -0.5,
    fontSize: FontSize.size_base,
  },
  showTypo1: {
    textDecoration: "underline",
    letterSpacing: -0.4,
    fontSize: FontSize.size_sm,
  },
  vectorIconPosition: {
    opacity: 0.5,
    position: "absolute",
  },
  showLayout: {
    lineHeight: 16,
    color: Color.darkslateblue,
  },
  rectangleParentPosition: {
    left: 0,
    position: "absolute",
  },
  buttonLayout: {
    width: 374,
    borderRadius: Border.br_xs,
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  loginSectionChild: {
    borderRadius: Border.br_xl,
    top: "0%",
    height: "100%",
    maxWidth: "100%",
    bottom: "0%",
    position: "absolute",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  loginSectionItem: {
    top: "38.34%",
    bottom: "61.38%",
  },
  emailTypo1: {
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
  },
  text1Typo: {
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
  },
  text: {
    textAlign: "center",
    color: Color.darkslateblue,
    letterSpacing: -0.4,
    fontSize: FontSize.size_sm,
    lineHeight: 22,
  },
  dontHaveAnContainer: {
    left: "26.57%",
    top: "85.96%",
    position: "absolute",
  },
  logInWith: {
    top: "3.37%",
    left: "35.99%",
    lineHeight: 24,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    textAlign: "center",
    color: Color.darkslateblue,
    position: "absolute",
  },
  loginSectionInner: {
    top: "13.34%",
    bottom: "86.38%",
  },
  forgotPassword1: {
    textAlign: "left",
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    color: Color.darkslateblue,
    lineHeight: 22,
  },
  forgotPassword: {
    left: 151,
    top: 278,
    position: "absolute",
  },
  inputPasswordChild: {
    backgroundColor: Color.seashell,
    borderRadius: Border.br_xs,
    top: "0%",
    height: "100%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  inputPasswordItem: {
    width: "0.27%",
    right: "86.76%",
    left: "12.97%",
    top: "0%",
    height: "100%",
    maxWidth: "100%",
    bottom: "0%",
    position: "absolute",
  },
  password: {
    left: "17.38%",
    lineHeight: 16,
    color: Color.darkslateblue,
    top: "35.71%",
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    textAlign: "left",
    letterSpacing: -0.5,
    fontSize: FontSize.size_base,
  },
  show: {
    left: "85.03%",
    textAlign: "right",
    top: "35.71%",
    lineHeight: 16,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    textDecoration: "underline",
    letterSpacing: -0.4,
    fontSize: FontSize.size_sm,
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
    maxWidth: "100%",
    overflow: "hidden",
  },
  inputPassword: {
    height: "15.73%",
    width: "90.34%",
    top: "35.96%",
    right: "4.83%",
    bottom: "48.31%",
    left: "4.83%",
    position: "absolute",
  },
  frameChild: {
    height: 56,
    backgroundColor: Color.seashell,
  },
  contentfulContentType: {
    width: 400,
    height: 174,
    display: "none",
    marginTop: 10,
  },
  rectangleParent: {
    top: 0,
    padding: Padding.p_3xs,
  },
  email: {
    top: "39.47%",
    left: "19.04%",
    lineHeight: 16,
    color: Color.darkslateblue,
    textAlign: "left",
    letterSpacing: -0.5,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
  },
  vectorIcon1: {
    height: "16.32%",
    width: "3.91%",
    top: "41.84%",
    right: "88.78%",
    bottom: "41.84%",
    left: "7.31%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  inputProfileChild: {
    height: "73.68%",
    width: "0.25%",
    top: "13.16%",
    right: "84.9%",
    bottom: "13.16%",
    left: "14.85%",
    position: "absolute",
  },
  inputProfile: {
    top: 54,
    left: 10,
    width: 394,
    height: 76,
    position: "absolute",
  },
  text1: {
    letterSpacing: -0.5,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    textAlign: "center",
  },
  button: {
    backgroundColor: Color.sandybrown_100,
    height: 60,
    paddingHorizontal: Padding.p_113xl,
    paddingVertical: Padding.p_3xl,
    width: 374,
    borderRadius: Border.br_xs,
  },
  button374xvariant4: {
    top: 185,
    flexDirection: "row",
    padding: Padding.p_xl,
    left: 0,
    position: "absolute",
    overflow: "hidden",
    alignItems: "center",
  },
  loginSection: {
    height: "39.73%",
    top: "60.27%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
});

export default LoginContainer;
