import React, { memo } from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, Padding, Border, FontFamily } from "../GlobalStyles";

const CongratsContainer = memo(() => {
  const navigation = useNavigation();

  return (
    <View style={styles.setting7congratulationPopup}>
      <View style={styles.rectangle} />
      <View style={styles.content}>
        <Image
          style={[styles.teepeeSwirlyIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/teepeeswirly2.png")}
        />
        <Text style={styles.text}>Congratulations!</Text>
        <Text style={[styles.text1, styles.textTypo]}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        </Text>
      </View>
      <Image
        style={[styles.closeIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/close.png")}
      />
      <View
        style={[styles.button334xvariant4, styles.button334xvariantPosition]}
      >
        <Pressable
          style={[styles.button, styles.buttonSpaceBlock]}
          onPress={() => navigation.navigate("HomepageNewHabit")}
        >
          <Text style={[styles.text2, styles.textTypo]}>Create New Habit</Text>
        </Pressable>
      </View>
      <View
        style={[styles.button334xvariant3, styles.button334xvariantPosition]}
      >
        <Pressable
          style={[styles.button1, styles.buttonSpaceBlock]}
          onPress={() => navigation.navigate("Analytics")}
        >
          <Text style={[styles.text2, styles.textTypo]}>Continue</Text>
        </Pressable>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  textTypo: {
    letterSpacing: -0.5,
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.darkslateblue,
  },
  button334xvariantPosition: {
    padding: Padding.p_xl,
    left: 0,
    overflow: "hidden",
    position: "absolute",
  },
  buttonSpaceBlock: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: Padding.p_3xl,
    paddingTop: Padding.p_3xl,
    paddingLeft: Padding.p_94xl,
    height: 60,
    width: 334,
    borderRadius: Border.br_xs,
  },
  rectangle: {
    height: "100%",
    right: "0%",
    bottom: "0%",
    borderRadius: Border.br_xl,
    backgroundColor: Color.white,
    left: "0%",
    width: "100%",
    top: "0%",
    position: "absolute",
  },
  teepeeSwirlyIcon: {
    height: "85.25%",
    width: "89.14%",
    right: "5.43%",
    bottom: "14.75%",
    left: "5.43%",
    top: "0%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  text: {
    top: "78.14%",
    fontSize: FontSize.size_5xl,
    letterSpacing: -0.7,
    lineHeight: 32,
    textTransform: "uppercase",
    fontFamily: FontFamily.klasikRegular,
    textAlign: "center",
    color: Color.darkslateblue,
    left: "0%",
    width: "100%",
    position: "absolute",
  },
  text1: {
    width: "82.57%",
    top: "87.98%",
    left: "8.86%",
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: FontFamily.manropeMedium,
    opacity: 0.5,
    position: "absolute",
  },
  content: {
    top: 0,
    left: 12,
    width: 350,
    height: 366,
    position: "absolute",
  },
  closeIcon: {
    height: "5.86%",
    width: "8.56%",
    top: "2.2%",
    right: "3.21%",
    bottom: "91.94%",
    left: "88.24%",
  },
  text2: {
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
  },
  button: {
    backgroundColor: Color.sandybrown_100,
    paddingRight: Padding.p_91xl,
  },
  button334xvariant4: {
    top: 376,
  },
  button1: {
    backgroundColor: Color.linen,
    paddingRight: Padding.p_96xl,
  },
  button334xvariant3: {
    top: 446,
  },
  setting7congratulationPopup: {
    top: 330,
    left: 20,
    width: 374,
    height: 546,
    position: "absolute",
  },
});

export default CongratsContainer;
