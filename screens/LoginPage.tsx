import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import LoginContainer from "../components/LoginContainer";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const LoginPage = () => {
  return (
    <View style={styles.loginPage}>
      <View style={[styles.background, styles.backgroundLayout]}>
        <Image
          style={[
            styles.splashScreenIllustration1,
            styles.backgroundChildPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/splash-screen--illustration-1.png")}
        />
        <LinearGradient
          style={[styles.backgroundChild, styles.backgroundChildPosition]}
          locations={[0, 1]}
          colors={["rgba(255, 243, 233, 0)", "#fff3e9"]}
          useAngle={true}
          angle={180}
        />
      </View>
      <View style={[styles.button, styles.buttonPosition]}>
        <View style={[styles.buttonChild, styles.textPosition]} />
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={[styles.continueWithFacebook, styles.textFlexBox]}>
          Continue with Facebook
        </Text>
      </View>
      <View style={[styles.button1, styles.buttonPosition]}>
        <View style={[styles.buttonChild, styles.textPosition]} />
        <Text style={[styles.continueWithFacebook, styles.textFlexBox]}>
          Continue with Google
        </Text>
        <Image
          style={[styles.googleIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/google-icon.png")}
        />
      </View>
      <View style={styles.textSize40}>
        <Text style={[styles.text, styles.textFlexBox]}>
          WELCOME TO Monumental habits
        </Text>
      </View>
      <Image
        style={styles.icons}
        resizeMode="cover"
        source={require("../assets/icons.png")}
      />
      <LoginContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundLayout: {
    height: 940,
    width: 434,
  },
  backgroundChildPosition: {
    left: 10,
    top: 248,
    position: "absolute",
  },
  buttonPosition: {
    left: "4.83%",
    right: "4.83%",
    width: "90.34%",
    height: "5.58%",
    position: "absolute",
  },
  textPosition: {
    left: "0%",
    top: "0%",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textFlexBox: {
    textAlign: "center",
    color: Color.darkslateblue,
    position: "absolute",
  },
  splashScreenIllustration1: {
    height: 940,
    width: 434,
  },
  backgroundChild: {
    width: 414,
    height: 692,
    backgroundColor: "transparent",
  },
  background: {
    top: -248,
    left: -10,
    position: "absolute",
  },
  buttonChild: {
    height: "100%",
    right: "0%",
    bottom: "0%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.white,
    position: "absolute",
  },
  vectorIcon: {
    height: "110%",
    width: "14.71%",
    top: "12%",
    right: "72.73%",
    bottom: "-22%",
    left: "12.57%",
  },
  continueWithFacebook: {
    top: "34%",
    left: "30.75%",
    fontSize: FontSize.size_base,
    letterSpacing: -0.5,
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
  },
  button: {
    top: "51.9%",
    bottom: "42.52%",
  },
  googleIcon: {
    height: "78%",
    width: "10.43%",
    top: "18%",
    right: "74.87%",
    bottom: "4%",
    left: "14.71%",
  },
  button1: {
    top: "45.42%",
    bottom: "49%",
  },
  text: {
    fontSize: FontSize.size_13xl,
    letterSpacing: -1,
    lineHeight: 32,
    textTransform: "uppercase",
    fontFamily: FontFamily.klasikRegular,
    left: "0%",
    top: "0%",
    width: "100%",
  },
  textSize40: {
    top: 302,
    left: 32,
    width: 350,
    height: 64,
    position: "absolute",
  },
  icons: {
    top: 28,
    left: 340,
    width: 64,
    height: 65,
    position: "absolute",
    overflow: "hidden",
  },
  loginPage: {
    backgroundColor: Color.linen,
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default LoginPage;
