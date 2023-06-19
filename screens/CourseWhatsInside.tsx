import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import Day1Container from "../components/Day1Container";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const CourseWhatsInside = () => {
  return (
    <View style={styles.courseWhatsInside}>
      <Image
        style={styles.backgroundIcon}
        resizeMode="cover"
        source={require("../assets/background3.png")}
      />
      <View style={[styles.text, styles.textPosition]} />
      <Image
        style={styles.videoIcon}
        resizeMode="cover"
        source={require("../assets/video.png")}
      />
      <Image
        style={styles.icons}
        resizeMode="cover"
        source={require("../assets/icons1.png")}
      />
      <View style={[styles.text1, styles.textPosition]}>
        <Text style={styles.newHabit}>30 Day Journal Challenge...</Text>
      </View>
      <Day1Container />
      <Image
        style={styles.menuIcon}
        resizeMode="cover"
        source={require("../assets/menu3.png")}
      />
      <Image
        style={styles.iconUser}
        resizeMode="cover"
        source={require("../assets/vector3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textPosition: {
    height: 32,
    top: 45,
    position: "absolute",
  },
  backgroundIcon: {
    top: 331,
    left: -70,
    width: 555,
    height: 543,
    display: "none",
    position: "absolute",
  },
  text: {
    left: 162,
    width: 91,
  },
  videoIcon: {
    top: 121,
    left: 20,
    width: 374,
    height: 200,
    position: "absolute",
  },
  icons: {
    top: 28,
    left: 10,
    width: 64,
    height: 65,
    position: "absolute",
    overflow: "hidden",
  },
  newHabit: {
    top: "0%",
    left: "0%",
    fontSize: FontSize.size_lg,
    letterSpacing: -0.5,
    lineHeight: 25,
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    color: Color.darkslateblue,
    textAlign: "center",
    position: "absolute",
  },
  text1: {
    left: 96,
    width: 222,
  },
  menuIcon: {
    top: 738,
    left: 0,
    width: 414,
    height: 158,
    position: "absolute",
  },
  iconUser: {
    height: "3.57%",
    width: "6.76%",
    top: "95.31%",
    right: "46.62%",
    bottom: "1.12%",
    left: "46.62%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  courseWhatsInside: {
    backgroundColor: Color.linen,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default CourseWhatsInside;
