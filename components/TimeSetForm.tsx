import React, { useMemo, memo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

type TimeSetFormType = {
  timeSlot?: string;

  /** Style props */
  propTop?: number | string;
  propLeft?: number | string;
  propLeft1?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TimeSetForm = memo(
  ({ timeSlot, propTop, propLeft, propLeft1 }: TimeSetFormType) => {
    const timeSetStyle = useMemo(() => {
      return {
        ...getStyleValue("top", propTop),
        ...getStyleValue("left", propLeft),
      };
    }, [propTop, propLeft]);

    const timeStyle = useMemo(() => {
      return {
        ...getStyleValue("left", propLeft1),
      };
    }, [propLeft1]);

    return (
      <View style={[styles.timeSet, timeSetStyle]}>
        <View style={styles.timeOn}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <View style={styles.toggleButton}>
            <View style={[styles.rectangle1, styles.rectanglePosition]} />
            <View style={styles.ellipse} />
            <Text style={[styles.on, styles.onTypo]}>On</Text>
          </View>
          <Text style={[styles.time, styles.onTypo, timeStyle]}>
            {timeSlot}
          </Text>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  rectanglePosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  onTypo: {
    textAlign: "center",
    color: Color.sandybrown_100,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    position: "absolute",
  },
  rectangle: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.linen,
  },
  rectangle1: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.sandybrown_300,
  },
  ellipse: {
    height: "73.33%",
    width: "40.74%",
    top: "13.33%",
    right: "7.41%",
    bottom: "13.33%",
    left: "51.85%",
    borderRadius: Border.br_2xs,
    backgroundColor: Color.sandybrown_100,
    shadowColor: "rgba(253, 167, 88, 0.5)",
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    position: "absolute",
  },
  on: {
    top: "23.33%",
    left: "14.81%",
    fontSize: FontSize.size_3xs,
    letterSpacing: -0.3,
    lineHeight: 14,
  },
  toggleButton: {
    height: "32.61%",
    width: "45%",
    top: "51.09%",
    right: "29.17%",
    bottom: "16.3%",
    left: "25.83%",
    position: "absolute",
  },
  time: {
    top: "16.3%",
    left: "13.33%",
    fontSize: FontSize.size_xl,
    letterSpacing: -0.6,
    lineHeight: 16,
  },
  timeOn: {
    top: 10,
    left: 10,
    width: 120,
    height: 92,
    position: "absolute",
  },
  timeSet: {
    top: 0,
    left: 127,
    width: 140,
    height: 112,
    overflow: "hidden",
    position: "absolute",
  },
});

export default TimeSetForm;
