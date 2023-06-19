import React, { useMemo, memo } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

type MessageContainerType = {
  /** Style props */
  propTop?: number | string;
  propLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const MessageContainer = memo(({ propTop, propLeft }: MessageContainerType) => {
  const messagePopupStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <View style={[styles.messagePopup, messagePopupStyle]}>
      <View style={[styles.rectangle, styles.rectanglePosition]} />
      <Image
        style={styles.imageIcon}
        resizeMode="cover"
        source={require("../assets/image1.png")}
      />
      <View style={styles.texts}>
        <Text style={[styles.startThisHabit, styles.startThisHabitFlexBox]}>
          Start this habit
        </Text>
        <Text
          style={[styles.ullamcoLaborisNisi, styles.startThisHabitFlexBox]}
        >{`ullamco laboris nisi ut aliquip ex ea commodo consequat dolore. `}</Text>
        <Image
          style={[styles.vectorIcon, styles.rectanglePosition1]}
          resizeMode="cover"
          source={require("../assets/vector5.png")}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  rectanglePosition: {
    left: "0%",
    width: "100%",
  },
  startThisHabitFlexBox: {
    textAlign: "center",
    color: Color.darkslateblue,
    position: "absolute",
  },
  rectanglePosition1: {
    bottom: "0%",
    position: "absolute",
  },
  rectangle: {
    height: "83.87%",
    top: "16.13%",
    right: "0%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.white,
    bottom: "0%",
    position: "absolute",
  },
  imageIcon: {
    top: 0,
    left: 152,
    width: 70,
    height: 70,
    position: "absolute",
  },
  startThisHabit: {
    top: "0%",
    fontSize: FontSize.size_5xl,
    letterSpacing: -0.7,
    lineHeight: 32,
    textTransform: "uppercase",
    fontFamily: FontFamily.klasikRegular,
    left: "0%",
    width: "100%",
  },
  ullamcoLaborisNisi: {
    width: "82.57%",
    top: "28.98%",
    left: "8.86%",
    fontSize: FontSize.size_sm,
    letterSpacing: -0.4,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: FontFamily.manropeMedium,
    opacity: 0.5,
  },
  vectorIcon: {
    height: "23.4%",
    width: "5.43%",
    top: "76.6%",
    right: "47.14%",
    left: "47.42%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  texts: {
    top: 86,
    left: 12,
    width: 350,
    height: 110,
    position: "absolute",
  },
  messagePopup: {
    top: 437,
    left: 21,
    width: 374,
    height: 217,
    position: "absolute",
  },
});

export default MessageContainer;
