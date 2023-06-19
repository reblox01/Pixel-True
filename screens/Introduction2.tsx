import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Introduction2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.introduction2}>
      <View style={[styles.content, styles.contentLayout]}>
        <View style={styles.textSize40}>
          <Text style={styles.text}>CREATE NEW HABIT EASILY</Text>
        </View>
        <Text style={[styles.weCanHelpContainer, styles.next1Typo]}>
          <Text style={styles.weCan}>{`We can `}</Text>
          <Text style={styles.helpYou}>help you</Text>
          <Text style={styles.weCan}>{` to be a better version of `}</Text>
          <Text style={styles.helpYou}>yourself.</Text>
        </Text>
        <Image
          style={[styles.habitsIcon, styles.contentLayout]}
          resizeMode="cover"
          source={require("../assets/habits.png")}
        />
      </View>
      <View style={styles.onboarding}>
        <Pressable
          style={[styles.next, styles.nextPosition]}
          onPress={() => navigation.navigate("Introduction3")}
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
          style={styles.onboardingChild}
          resizeMode="cover"
          source={require("../assets/group-101481.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentLayout: {
    width: 399,
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
  text: {
    left: "0%",
    fontSize: FontSize.size_13xl,
    letterSpacing: -1,
    lineHeight: 32,
    fontFamily: FontFamily.klasikRegular,
    textAlign: "center",
    color: Color.darkslateblue,
    textTransform: "uppercase",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  textSize40: {
    top: 0,
    left: 76,
    width: 246,
    height: 64,
    position: "absolute",
  },
  weCan: {
    color: Color.darkslateblue,
  },
  helpYou: {
    color: Color.sandybrown_200,
  },
  weCanHelpContainer: {
    width: "87.72%",
    top: "92.25%",
    left: "6.02%",
    textTransform: "uppercase",
    fontWeight: "700",
    lineHeight: 24,
    fontSize: FontSize.size_mid,
    position: "absolute",
  },
  habitsIcon: {
    top: 106,
    left: 0,
    height: 399,
    overflow: "hidden",
  },
  content: {
    top: 80,
    left: 8,
    height: 619,
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
    width: "54.57%",
    top: "-137.5%",
    right: "23.14%",
    bottom: "-316.67%",
    left: "22.29%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  onboarding: {
    top: 764,
    left: 32,
    width: 350,
    height: 24,
    position: "absolute",
  },
  introduction2: {
    backgroundColor: Color.white,
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default Introduction2;
