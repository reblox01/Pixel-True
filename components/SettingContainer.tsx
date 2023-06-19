import React, { memo } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const SettingContainer = memo(() => {
  return (
    <View style={styles.setting8}>
      <View style={[styles.setting8Child, styles.childPosition]} />
      <View style={styles.rectangleParent}>
        <View style={[styles.frameChild, styles.childPosition]} />
        <Image
          style={[
            styles.ionnotificationsCircleIcon,
            styles.setting8ItemPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/ionnotificationscircle.png")}
        />
      </View>
      <Image
        style={[styles.setting8Item, styles.setting8ItemPosition]}
        resizeMode="cover"
        source={require("../assets/vector7.png")}
      />
      <Text style={[styles.notifications, styles.notificationsTypo]}>
        Notifications
      </Text>
      <Text style={[styles.customizeNotifications, styles.notificationsTypo]}>
        Customize notifications
      </Text>
    </View>
  );
});

const styles = StyleSheet.create({
  childPosition: {
    borderRadius: Border.br_xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  setting8ItemPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  notificationsTypo: {
    textAlign: "left",
    color: Color.darkslateblue,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    lineHeight: 16,
    position: "absolute",
  },
  setting8Child: {
    backgroundColor: Color.white,
  },
  frameChild: {
    backgroundColor: Color.sandybrown_100,
    opacity: 0.1,
  },
  ionnotificationsCircleIcon: {
    top: 10,
    left: 10,
    width: 18,
    height: 18,
  },
  rectangleParent: {
    height: "51.35%",
    width: "10.16%",
    top: "24.32%",
    right: "87.7%",
    bottom: "24.32%",
    left: "2.14%",
    position: "absolute",
  },
  setting8Item: {
    height: "33.11%",
    width: "4.95%",
    top: "36.15%",
    right: "3.41%",
    bottom: "30.74%",
    left: "91.64%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  notifications: {
    top: "22.97%",
    left: "15.51%",
    fontSize: FontSize.size_base,
    letterSpacing: -0.5,
  },
  customizeNotifications: {
    top: "55.41%",
    left: "15.78%",
    fontSize: FontSize.size_sm,
    letterSpacing: -0.4,
    opacity: 0.5,
  },
  setting8: {
    top: 324,
    left: 20,
    width: 374,
    height: 74,
    position: "absolute",
  },
});

export default SettingContainer;
