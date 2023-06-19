import React, { useMemo, memo } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { FontSize, Border, Color, FontFamily } from "../GlobalStyles";

type ReminderContainerType = {
  /** Style props */
  propTop?: number | string;
  propLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ReminderContainer = memo(
  ({ propTop, propLeft }: ReminderContainerType) => {
    const reminderStyle = useMemo(() => {
      return {
        ...getStyleValue("top", propTop),
        ...getStyleValue("left", propLeft),
      };
    }, [propTop, propLeft]);

    return (
      <View style={[styles.reminder, reminderStyle]}>
        <View style={styles.rectangle} />
        <Text style={[styles.text, styles.textPosition]}>Reminder</Text>
        <Text style={[styles.time, styles.textPosition]}>10:00AM</Text>
        <Image
          style={styles.reminderChild}
          resizeMode="cover"
          source={require("../assets/vector-136.png")}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  textPosition: {
    lineHeight: 16,
    letterSpacing: -0.5,
    fontSize: FontSize.size_base,
    top: "34%",
    position: "absolute",
  },
  rectangle: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.white,
    position: "absolute",
  },
  text: {
    left: "5.35%",
    fontWeight: "500",
    fontFamily: FontFamily.manropeMedium,
    color: Color.darkslateblue,
    textAlign: "left",
  },
  time: {
    left: "73.26%",
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    color: Color.sandybrown_100,
    textAlign: "right",
  },
  reminderChild: {
    height: "49%",
    width: "4.95%",
    top: "29.5%",
    right: "3.41%",
    bottom: "21.5%",
    left: "91.64%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  reminder: {
    top: 203,
    left: 21,
    width: 374,
    height: 50,
    position: "absolute",
  },
});

export default ReminderContainer;
