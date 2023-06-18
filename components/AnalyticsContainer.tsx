import React, { useMemo, memo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

type AnalyticsContainerType = {
  /** Style props */
  propTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const AnalyticsContainer = memo(({ propTop }: AnalyticsContainerType) => {
  const analyticsStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.analytics, analyticsStyle]}>
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group.png")}
      />
      <View style={[styles.averageEasinessScore, styles.currentStreakPosition]}>
        <Text style={[styles.information, styles.informationTypo]}>7</Text>
        <Text style={[styles.text, styles.textTypo1]}>{`Average Easiness 
Score`}</Text>
        <Image
          style={[styles.analyticsIcon, styles.analyticsIconPosition]}
          resizeMode="cover"
          source={require("../assets/analytics.png")}
        />
      </View>
      <View style={[styles.completionRate, styles.longestStreakPosition]}>
        <Text style={[styles.information1, styles.informationTypo]}>98 %</Text>
        <Text style={[styles.text1, styles.textTypo1]}>Completion Rate</Text>
        <Image
          style={[styles.analyticsIcon1, styles.analyticsIconPosition]}
          resizeMode="cover"
          source={require("../assets/analytics1.png")}
        />
      </View>
      <View style={[styles.currentStreak, styles.streakPosition]}>
        <Text style={[styles.information2, styles.informationTypo]}>
          0 Days
        </Text>
        <Text style={[styles.text2, styles.textTypo]}>Current Streak</Text>
        <Image
          style={[styles.analyticsIcon1, styles.analyticsIconPosition]}
          resizeMode="cover"
          source={require("../assets/analytics2.png")}
        />
      </View>
      <View style={[styles.longestStreak, styles.streakPosition]}>
        <Text style={[styles.information2, styles.informationTypo]}>
          20 Days
        </Text>
        <Text style={[styles.text3, styles.textTypo]}>Longest Streak</Text>
        <Image
          style={[styles.analyticsIcon1, styles.analyticsIconPosition]}
          resizeMode="cover"
          source={require("../assets/analytics3.png")}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  currentStreakPosition: {
    left: "55.08%",
    right: "2.94%",
  },
  informationTypo: {
    textAlign: "left",
    color: Color.darkslateblue,
    fontFamily: FontFamily.klasikRegular,
    lineHeight: 16,
    letterSpacing: -1.2,
    fontSize: FontSize.size_5xl,
    left: "0%",
    position: "absolute",
  },
  textTypo1: {
    opacity: 0.5,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    lineHeight: 13,
    letterSpacing: -0.4,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.darkslateblue,
    position: "absolute",
  },
  analyticsIconPosition: {
    left: "65.61%",
    width: "34.39%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  longestStreakPosition: {
    left: "5.08%",
    right: "52.94%",
  },
  streakPosition: {
    bottom: "60.33%",
    top: "10.33%",
    height: "29.35%",
    width: "41.98%",
    position: "absolute",
  },
  textTypo: {
    top: "59.26%",
    opacity: 0.5,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    lineHeight: 13,
    letterSpacing: -0.4,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.darkslateblue,
    position: "absolute",
  },
  groupIcon: {
    width: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    right: "0%",
    top: "0%",
    left: "0%",
    bottom: "0%",
    height: "100%",
    position: "absolute",
  },
  information: {
    top: "12.28%",
  },
  text: {
    top: "54.39%",
    left: "0.64%",
  },
  analyticsIcon: {
    height: "94.74%",
    bottom: "5.26%",
  },
  averageEasinessScore: {
    height: "30.98%",
    bottom: "11.41%",
    top: "57.61%",
    width: "41.98%",
    right: "2.94%",
    position: "absolute",
  },
  information1: {
    top: "24.07%",
  },
  text1: {
    top: "68.52%",
    left: "0%",
  },
  analyticsIcon1: {
    bottom: "0%",
    height: "100%",
    left: "65.61%",
    width: "34.39%",
  },
  completionRate: {
    bottom: "13.04%",
    height: "29.35%",
    right: "52.94%",
    top: "57.61%",
    width: "41.98%",
    position: "absolute",
  },
  information2: {
    top: "14.81%",
  },
  text2: {
    left: "0.64%",
  },
  currentStreak: {
    left: "55.08%",
    right: "2.94%",
  },
  text3: {
    left: "0%",
  },
  longestStreak: {
    left: "5.08%",
    right: "52.94%",
  },
  analytics: {
    top: 104,
    left: 20,
    width: 374,
    height: 184,
    position: "absolute",
  },
});

export default AnalyticsContainer;
