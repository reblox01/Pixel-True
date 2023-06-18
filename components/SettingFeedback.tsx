import React, { useMemo, memo } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageSourcePropType,
} from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

type SettingFeedbackType = {
  vector?: ImageSourcePropType;
  feedback?: string;

  /** Style props */
  propTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SettingFeedback = memo(
  ({ vector, feedback, propTop }: SettingFeedbackType) => {
    const setting10Style = useMemo(() => {
      return {
        ...getStyleValue("top", propTop),
      };
    }, [propTop]);

    return (
      <View style={[styles.setting10, setting10Style]}>
        <View style={[styles.setting10Child, styles.setting10Layout]} />
        <View style={[styles.setting10Item, styles.setting10Layout]} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          resizeMode="cover"
          source={vector}
        />
        <Image
          style={[styles.setting10Inner, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector7.png")}
        />
        <Text style={styles.feedback}>{feedback}</Text>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  setting10Layout: {
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  setting10Child: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.white,
  },
  setting10Item: {
    height: "76%",
    width: "10.16%",
    top: "12%",
    right: "88.24%",
    bottom: "12%",
    left: "1.6%",
    backgroundColor: Color.sandybrown_100,
    opacity: 0.1,
  },
  vectorIcon: {
    height: "36%",
    width: "4.81%",
    top: "32%",
    right: "90.91%",
    bottom: "32%",
    left: "4.28%",
  },
  setting10Inner: {
    height: "49%",
    width: "4.95%",
    top: "29.5%",
    right: "3.41%",
    bottom: "21.5%",
    left: "91.64%",
  },
  feedback: {
    top: "34%",
    left: "15.51%",
    fontSize: FontSize.size_base,
    letterSpacing: -0.5,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.manropeMedium,
    color: Color.darkslateblue,
    textAlign: "left",
    position: "absolute",
  },
  setting10: {
    top: 590,
    left: 20,
    width: 374,
    height: 50,
    position: "absolute",
  },
});

export default SettingFeedback;
