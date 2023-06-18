import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Introduction1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.introduction1}>
      <View style={styles.content}>
        <Image
          style={[styles.illustrationIcon, styles.onboardingChildLayout]}
          resizeMode="cover"
          source={require("../assets/illustration.png")}
        />
        <View style={[styles.textSize40, styles.textSize40Layout]}>
          <Text style={styles.text}>WELCOME TO Monumental habits</Text>
        </View>
        <Text style={[styles.weCanHelpContainer, styles.next1Typo]}>
          <Text style={styles.weCan}>{`We can `}</Text>
          <Text style={styles.helpYou}>help you</Text>
          <Text style={styles.weCan}>{` to be a better version of `}</Text>
          <Text style={styles.helpYou}>yourself.</Text>
        </Text>
      </View>
      <View style={[styles.onboarding, styles.textSize40Layout]}>
        <Pressable
          style={[styles.next, styles.nextPosition]}
          onPress={() => navigation.navigate("Introduction2")}
        >
          <Text style={[styles.next1, styles.next1Typo]}>Next</Text>
        </Pressable>
        <Pressable
          style={[styles.skip, styles.nextPosition]}
          onPress={() => navigation.navigate("Introduction4")}
        >
          <Text style={[styles.next1, styles.next1Typo]}>Skip</Text>
        </Pressable>
        <Image
          style={[styles.onboardingChild, styles.onboardingChildLayout]}
          resizeMode="cover"
          source={require("../assets/group-10148.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  onboardingChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textSize40Layout: {
    width: 350,
    position: "absolute",
  },
  next1Typo: {
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    lineHeight: 24,
    fontSize: FontSize.size_mid,
    textAlign: "center",
  },
  nextPosition: {
    top: "0%",
    position: "absolute",
  },
  illustrationIcon: {
    height: "78.68%",
    top: "10.34%",
    right: "0%",
    bottom: "10.99%",
    left: "2.78%",
    width: "97.22%",
    maxWidth: "100%",
  },
  text: {
    fontSize: FontSize.size_13xl,
    letterSpacing: -1,
    lineHeight: 32,
    fontFamily: FontFamily.klasikRegular,
    textAlign: "center",
    color: Color.darkslateblue,
    textTransform: "uppercase",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  textSize40: {
    top: 0,
    left: 0,
    height: 64,
  },
  weCan: {
    color: Color.darkslateblue,
  },
  helpYou: {
    color: Color.sandybrown_200,
  },
  weCanHelpContainer: {
    top: "92.25%",
    textTransform: "uppercase",
    left: "0%",
    fontWeight: "700",
    lineHeight: 24,
    fontSize: FontSize.size_mid,
    width: "97.22%",
    position: "absolute",
  },
  content: {
    height: "69.08%",
    width: "86.96%",
    top: "8.93%",
    right: "5.31%",
    bottom: "21.99%",
    left: "7.73%",
    position: "absolute",
  },
  next1: {
    color: Color.darkslateblue,
  },
  next: {
    left: "88%",
  },
  skip: {
    left: "0.29%",
  },
  onboardingChild: {
    height: "554.17%",
    width: "54%",
    top: "-137.5%",
    right: "23.14%",
    bottom: "-316.67%",
    left: "22.86%",
  },
  onboarding: {
    top: 764,
    left: 32,
    height: 24,
  },
  introduction1: {
    backgroundColor: Color.white,
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default Introduction1;
