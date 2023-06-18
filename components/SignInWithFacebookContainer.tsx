import React, { memo } from "react";
import { Text, StyleSheet, Pressable, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const SignInWithFacebookContainer = memo(() => {
  const navigation = useNavigation();

  return (
    <View style={styles.signInWith}>
      <Pressable
        style={styles.alreadyHaveAnContainer}
        onPress={() => navigation.navigate("LoginPage")}
      >
        <Text style={styles.textTypo}>
          <Text style={styles.orSignInTypo}>{`Already have an account? `}</Text>
          <Text style={styles.signIn}>Sign In</Text>
        </Text>
      </Pressable>
      <View style={[styles.facebookButton, styles.buttonPosition]}>
        <View style={[styles.facebookButtonChild, styles.text1Position]} />
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={[styles.facebook, styles.googleTypo]}>Facebook</Text>
      </View>
      <View style={[styles.googleButton, styles.buttonPosition]}>
        <View style={[styles.facebookButtonChild, styles.text1Position]} />
        <Text style={[styles.google, styles.googleTypo]}>Google</Text>
        <Image
          style={[styles.googleIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/google-icon.png")}
        />
      </View>
      <View style={[styles.text1, styles.text1Position]}>
        <Text style={[styles.orSignIn, styles.text1Position]}>
          Or sign in with
        </Text>
        <Image
          style={[styles.textChild, styles.textLayout]}
          resizeMode="cover"
          source={require("../assets/vector-144.png")}
        />
        <Image
          style={[styles.textItem, styles.textLayout]}
          resizeMode="cover"
          source={require("../assets/vector-144.png")}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  buttonPosition: {
    bottom: "36.99%",
    top: "28.77%",
    width: "48.4%",
    height: "34.25%",
    position: "absolute",
  },
  text1Position: {
    top: "0%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    right: "58.56%",
    position: "absolute",
  },
  googleTypo: {
    lineHeight: 16,
    letterSpacing: -0.5,
    fontSize: FontSize.size_base,
    top: "34%",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.darkslateblue,
    position: "absolute",
  },
  textLayout: {
    opacity: 0.2,
    bottom: "47.73%",
    top: "47.73%",
    width: "35.83%",
    height: "4.55%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  orSignInTypo: {
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
  },
  signIn: {
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
  },
  textTypo: {
    textAlign: "center",
    color: Color.darkslateblue,
    lineHeight: 22,
    letterSpacing: -0.4,
    fontSize: FontSize.size_sm,
  },
  alreadyHaveAnContainer: {
    left: "22.73%",
    top: "84.93%",
    position: "absolute",
  },
  facebookButtonChild: {
    height: "100%",
    bottom: "0%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.white,
    left: "0%",
    width: "100%",
    top: "0%",
    right: "0%",
  },
  vectorIcon: {
    height: "110%",
    width: "30.39%",
    top: "12%",
    bottom: "-22%",
    left: "11.05%",
  },
  facebook: {
    left: "41.44%",
  },
  facebookButton: {
    left: "51.6%",
    right: "0%",
  },
  google: {
    left: "45.86%",
  },
  googleIcon: {
    height: "78%",
    width: "21.55%",
    top: "18%",
    bottom: "4%",
    left: "19.89%",
  },
  googleButton: {
    right: "51.6%",
    left: "0%",
  },
  orSignIn: {
    left: "38.5%",
    opacity: 0.5,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    textAlign: "center",
    color: Color.darkslateblue,
    lineHeight: 22,
    letterSpacing: -0.4,
    fontSize: FontSize.size_sm,
  },
  textChild: {
    right: "64.17%",
    left: "0%",
  },
  textItem: {
    left: "64.17%",
    right: "0%",
  },
  text1: {
    height: "15.07%",
    bottom: "84.93%",
    left: "0%",
    width: "100%",
    top: "0%",
    right: "0%",
  },
  signInWith: {
    height: "16.29%",
    width: "90.34%",
    top: "79.91%",
    right: "4.83%",
    bottom: "3.79%",
    left: "4.83%",
    position: "absolute",
  },
});

export default SignInWithFacebookContainer;
