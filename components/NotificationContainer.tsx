import React, { useMemo, memo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

type NotificationContainerType = {
  /** Style props */
  propTop?: number | string;
  propLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NotificationContainer = memo(
  ({ propTop, propLeft }: NotificationContainerType) => {
    const notificationStyle = useMemo(() => {
      return {
        ...getStyleValue("top", propTop),
        ...getStyleValue("left", propLeft),
      };
    }, [propTop, propLeft]);

    return (
      <View style={[styles.notification, notificationStyle]}>
        <View style={[styles.rectangle, styles.rectanglePosition]} />
        <Text style={[styles.text, styles.offClr]}>Notification</Text>
        <View style={styles.toggleOnoff}>
          <View style={styles.toggle}>
            <View style={[styles.rectangle1, styles.ellipseBg]} />
            <View style={[styles.ellipse, styles.ellipseBg]} />
            <Text style={[styles.off, styles.offClr]}>Off</Text>
          </View>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  rectanglePosition: {
    left: "0%",
    right: "0%",
    width: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  offClr: {
    color: Color.darkslateblue,
    position: "absolute",
  },
  ellipseBg: {
    backgroundColor: Color.darkslateblue,
    position: "absolute",
  },
  rectangle: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.white,
    position: "absolute",
  },
  text: {
    top: "34%",
    left: "5.35%",
    fontSize: FontSize.size_base,
    letterSpacing: -0.5,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.manropeMedium,
    textAlign: "left",
  },
  rectangle1: {
    borderRadius: Border.br_mini,
    opacity: 0.1,
    left: "0%",
    right: "0%",
    width: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  ellipse: {
    height: "73.33%",
    width: "40.74%",
    top: "13.33%",
    right: "51.85%",
    bottom: "13.33%",
    left: "7.41%",
    borderRadius: Border.br_2xs,
    shadowColor: "rgba(87, 51, 83, 0.5)",
    shadowOffset: {
      width: -2,
      height: 3,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
  },
  off: {
    top: "23.33%",
    left: "59.26%",
    fontSize: FontSize.size_3xs,
    letterSpacing: -0.3,
    lineHeight: 14,
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    textAlign: "center",
  },
  toggle: {
    top: 10,
    left: 10,
    width: 54,
    height: 30,
    position: "absolute",
  },
  toggleOnoff: {
    width: "19.79%",
    right: "2.67%",
    left: "77.54%",
    overflow: "hidden",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  notification: {
    top: 264,
    left: 21,
    width: 374,
    height: 50,
    position: "absolute",
  },
});

export default NotificationContainer;
