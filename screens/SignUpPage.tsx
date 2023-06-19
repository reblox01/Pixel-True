import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import SignInWithFacebookContainer from "../components/SignInWithFacebookContainer";
import { useNavigation } from "@react-navigation/native";
import PasswordContainer from "../components/PasswordContainer";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const SignUpPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signUpPage}>
      <SignInWithFacebookContainer />
      <View style={styles.button374xvariant4}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("HomepageTrackingHabits")}
        >
          <Text style={[styles.text, styles.textFlexBox]}>Create Account</Text>
        </Pressable>
      </View>
      <View style={[styles.textAndCheckbox, styles.textPosition1]}>
        <Text style={[styles.keepMeSigned, styles.keepMeSignedTypo]}>
          Keep me signed in
        </Text>
        <View style={[styles.textAndCheckboxChild, styles.textPosition]} />
        <Image
          style={styles.textAndCheckboxItem}
          resizeMode="cover"
          source={require("../assets/vector-131.png")}
        />
      </View>
      <View style={[styles.textAndCheckbox1, styles.textPosition1]}>
        <Text style={[styles.emailMeAbout, styles.keepMeSignedTypo]}>
          Email me about special pricing and more
        </Text>
        <View style={[styles.textAndCheckboxInner, styles.textPosition]} />
        <Image
          style={styles.textAndCheckboxItem}
          resizeMode="cover"
          source={require("../assets/vector-131.png")}
        />
      </View>
      <PasswordContainer />
      <Text style={[styles.createYourAccount, styles.textFlexBox]}>
        Create your account
      </Text>
      <Image
        style={styles.createYourAccount21}
        resizeMode="cover"
        source={require("../assets/create-your-account-2-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "center",
    color: Color.darkslateblue,
  },
  textPosition1: {
    left: "8.94%",
    height: "2.46%",
    position: "absolute",
  },
  keepMeSignedTypo: {
    textAlign: "left",
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    lineHeight: 22,
    top: "0%",
    color: Color.darkslateblue,
    letterSpacing: -0.5,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  textPosition: {
    borderRadius: Border.br_7xs,
    left: "0%",
    bottom: "4.55%",
    top: "4.55%",
    height: "90.91%",
    backgroundColor: Color.sandybrown_100,
    position: "absolute",
  },
  text: {
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    letterSpacing: -0.5,
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.darkslateblue,
  },
  button: {
    borderRadius: Border.br_xs,
    width: 374,
    height: 60,
    paddingHorizontal: Padding.p_113xl,
    paddingVertical: Padding.p_3xl,
    backgroundColor: Color.sandybrown_100,
    justifyContent: "center",
    alignItems: "center",
  },
  button374xvariant4: {
    top: 616,
    left: 0,
    flexDirection: "row",
    padding: Padding.p_xl,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  keepMeSigned: {
    left: "19.62%",
  },
  textAndCheckboxChild: {
    width: "12.66%",
    right: "87.34%",
  },
  textAndCheckboxItem: {
    top: 8,
    left: 5,
    width: 11,
    height: 8,
    position: "absolute",
  },
  textAndCheckbox: {
    width: "38.16%",
    top: "60.83%",
    right: "52.9%",
    bottom: "36.72%",
  },
  emailMeAbout: {
    left: "9.94%",
  },
  textAndCheckboxInner: {
    width: "6.41%",
    right: "93.59%",
  },
  textAndCheckbox1: {
    width: "75.36%",
    top: "65.4%",
    right: "15.7%",
    bottom: "32.14%",
  },
  createYourAccount: {
    width: "84.54%",
    top: "30.02%",
    left: "7.25%",
    fontSize: FontSize.size_5xl,
    letterSpacing: -0.7,
    lineHeight: 32,
    textTransform: "uppercase",
    fontFamily: FontFamily.klasikRegular,
    position: "absolute",
  },
  createYourAccount21: {
    top: 48,
    left: 113,
    width: 188,
    height: 200,
    position: "absolute",
    overflow: "hidden",
  },
  signUpPage: {
    backgroundColor: Color.linen,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default SignUpPage;
