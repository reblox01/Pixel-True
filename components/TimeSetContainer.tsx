import React, { useMemo, memo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

type TimeSetContainerType = {
  startTime?: string;

  /** Style props */
  propTop?: number | string;
  propLeft?: number | string;
  propLeft1?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TimeSetContainer = memo(
  ({ startTime, propTop, propLeft, propLeft1 }: TimeSetContainerType) => {
    const timeSet1Style = useMemo(() => {
      return {
        ...getStyleValue("top", propTop),
        ...getStyleValue("left", propLeft),
      };
    }, [propTop, propLeft]);

    const time1Style = useMemo(() => {
      return {
        ...getStyleValue("left", propLeft1),
      };
    }, [propLeft1]);

    return (
      <View style={[styles.timeSet, timeSet1Style]}>
        <View style={styles.timeOff}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <View style={styles.toggleButton}>
            <View style={[styles.rectangle1, styles.ellipseBg]} />
            <View style={[styles.ellipse, styles.ellipseBg]} />
            <Text style={[styles.off, styles.offTypo]}>Off</Text>
          </View>
          <Text style={[styles.time, styles.offTypo, time1Style]}>
            {startTime}
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
  },
  ellipseBg: {
    backgroundColor: Color.darkslateblue,
    position: "absolute",
  },
  offTypo: {
    textAlign: "center",
    color: Color.darkslateblue,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    position: "absolute",
  },
  rectangle: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.silver,
    position: "absolute",
  },
  rectangle1: {
    borderRadius: Border.br_mini,
    borderStyle: "solid",
    borderColor: "#573353",
    borderWidth: 1,
    opacity: 0.1,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
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
  },
  toggleButton: {
    height: "32.61%",
    width: "45%",
    top: "51.09%",
    right: "27.5%",
    bottom: "16.3%",
    left: "27.5%",
    position: "absolute",
  },
  time: {
    top: "16.3%",
    left: "12.5%",
    fontSize: FontSize.size_xl,
    letterSpacing: -0.6,
    lineHeight: 16,
  },
  timeOff: {
    top: 10,
    left: 10,
    width: 120,
    height: 92,
    position: "absolute",
  },
  timeSet: {
    top: 1,
    left: 0,
    width: 140,
    height: 112,
    overflow: "hidden",
    position: "absolute",
  },
});

export default TimeSetContainer;
