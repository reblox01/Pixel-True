import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import CalendarContainer from "../components/CalendarContainer";
import DataContainer from "../components/DataContainer";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Analytics = () => {
  return (
    <View style={styles.analytics}>
      <CalendarContainer />
      <Image
        style={styles.menuIcon}
        resizeMode="cover"
        source={require("../assets/menu1.png")}
      />
      <Image
        style={[styles.iconUser, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={styles.menuButtonIcon}
        resizeMode="cover"
        source={require("../assets/menu-button1.png")}
      />
      <DataContainer />
      <View style={styles.text}>
        <Text style={[styles.newHabit, styles.newTypo]}>Read A Book</Text>
      </View>
      <View style={[styles.icons, styles.iconsLayout]}>
        <View style={styles.ellipse} />
        <Image
          style={[styles.editIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/edit.png")}
        />
      </View>
      <Image
        style={[styles.icons1, styles.iconsLayout]}
        resizeMode="cover"
        source={require("../assets/icons1.png")}
      />
      <View style={[styles.rectangle, styles.rectangleLayout]} />
      <View style={styles.repeatEverydayParent}>
        <Text style={[styles.repeatEveryday, styles.repeatEverydayTypo]}>
          Repeat everyday
        </Text>
        <Text style={[styles.reminders500Am, styles.repeatEverydayTypo]}>
          Reminders: 5:00 am
        </Text>
        <View style={[styles.text1, styles.iconPosition]}>
          <Text style={[styles.newHabit1, styles.newTypo]}>Read a Book</Text>
        </View>
        <Image
          style={[styles.notificationIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/notification.png")}
        />
        <Image
          style={[styles.repeatButton1Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/repeatbutton-1.png")}
        />
      </View>
      <View style={[styles.analyticsChild, styles.rectangleLayout]} />
      <Image
        style={[styles.teepeeSwirlyIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/teepeeswirly1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  newTypo: {
    textAlign: "center",
    color: Color.darkslateblue,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    lineHeight: 32,
    letterSpacing: -0.5,
    top: "0%",
    position: "absolute",
  },
  iconsLayout: {
    height: 65,
    width: 64,
    top: 28,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleLayout: {
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  repeatEverydayTypo: {
    opacity: 0.5,
    textAlign: "left",
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    lineHeight: 14,
    letterSpacing: -0.4,
    fontSize: FontSize.size_xs,
    left: 29,
    color: Color.darkslateblue,
    position: "absolute",
  },
  iconPosition: {
    left: 5,
    position: "absolute",
  },
  menuIcon: {
    top: 1208,
    left: 0,
    width: 414,
    height: 124,
    position: "absolute",
  },
  iconUser: {
    height: "2.4%",
    width: "6.76%",
    top: "96.85%",
    right: "46.62%",
    bottom: "0.75%",
    left: "46.62%",
  },
  menuButtonIcon: {
    top: 1155,
    left: 125,
    width: 164,
    height: 194,
    position: "absolute",
    overflow: "hidden",
  },
  newHabit: {
    left: "-6.59%",
    fontSize: FontSize.size_lg,
  },
  text: {
    top: 45,
    left: 162,
    width: 91,
    height: 32,
    position: "absolute",
  },
  ellipse: {
    height: "67.69%",
    width: "68.75%",
    top: "16.92%",
    right: "15.63%",
    bottom: "15.38%",
    left: "15.63%",
    borderRadius: Border.br_6xl,
    backgroundColor: Color.darkslateblue,
    opacity: 0.1,
    position: "absolute",
  },
  editIcon: {
    height: "26.77%",
    width: "27.19%",
    top: "38.15%",
    right: "35.62%",
    bottom: "35.08%",
    left: "37.19%",
  },
  icons: {
    left: 333,
  },
  icons1: {
    left: 10,
  },
  rectangle: {
    height: "7.51%",
    width: "90.34%",
    top: "8.11%",
    right: "4.83%",
    bottom: "84.38%",
    left: "4.83%",
    backgroundColor: Color.white,
  },
  repeatEveryday: {
    top: 31,
  },
  reminders500Am: {
    top: 51,
  },
  newHabit1: {
    left: "0%",
    fontSize: FontSize.size_base,
  },
  text1: {
    top: -2,
    width: 88,
    height: 32,
  },
  notificationIcon: {
    width: 15,
    height: 15,
    top: 31,
    overflow: "hidden",
  },
  repeatButton1Icon: {
    top: 52,
    width: 14,
    height: 13,
    overflow: "hidden",
  },
  repeatEverydayParent: {
    top: 123,
    left: 122,
    width: 144,
    height: 69,
    position: "absolute",
  },
  analyticsChild: {
    height: "5.63%",
    width: "18.12%",
    top: "9.01%",
    right: "74.15%",
    bottom: "85.36%",
    left: "7.73%",
    backgroundColor: Color.sandybrown_100,
    opacity: 0.1,
  },
  teepeeSwirlyIcon: {
    height: "4.73%",
    width: "14.49%",
    top: "9.46%",
    right: "75.85%",
    bottom: "85.81%",
    left: "9.66%",
  },
  analytics: {
    backgroundColor: Color.linen,
    flex: 1,
    width: "100%",
    height: 1332,
    overflow: "hidden",
  },
});

export default Analytics;
