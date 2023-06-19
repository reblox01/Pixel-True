import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

const SplashScreen = () => {
  return (
    <View style={styles.splashScreen}>
      <Image
        style={styles.backgroundIcon}
        resizeMode="cover"
        source={require("../assets/background.png")}
      />
      <View style={styles.textSize40}>
        <Text style={styles.text}>{`WELCOME TO
Monumental habits`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundIcon: {
    top: 0,
    left: 0,
    width: 518,
    height: 1016,
    position: "absolute",
  },
  text: {
    top: "0%",
    left: "0%",
    fontSize: 40,
    letterSpacing: -1.2,
    lineHeight: 40,
    textTransform: "uppercase",
    fontFamily: FontFamily.klasikRegular,
    color: Color.darkslateblue,
    textAlign: "center",
    position: "absolute",
    width: "100%",
  },
  textSize40: {
    top: 96,
    left: 75,
    width: 264,
    height: 120,
    position: "absolute",
  },
  splashScreen: {
    backgroundColor: Color.white,
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default SplashScreen;
