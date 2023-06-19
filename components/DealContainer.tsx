import React, { memo } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const DealContainer = memo(() => {
  return (
    <View style={styles.deal}>
      <View style={styles.dealChild} />
      <Image
        style={styles.maskGroupIcon}
        resizeMode="cover"
        source={require("../assets/mask-group5.png")}
      />
      <Text style={styles.offYourUpgrade}>60% off your upgrade</Text>
      <View style={styles.countdownTimer}>
        <View style={styles.expiresInWrapper}>
          <Text style={styles.expiresIn}>Expires in</Text>
        </View>
        <View style={[styles.countdownTimerChild, styles.countdownPosition]} />
        <Text style={[styles.text, styles.textTypo1]}>23</Text>
        <Text style={[styles.text1, styles.textTypo]}>:</Text>
        <Text style={[styles.text2, styles.textTypo]}>:</Text>
        <View style={[styles.countdownTimerItem, styles.countdownPosition]} />
        <Text style={[styles.text3, styles.textTypo1]}>56</Text>
        <View style={[styles.countdownTimerInner, styles.countdownPosition]} />
        <Text style={[styles.text4, styles.textTypo1]}>48</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  countdownPosition: {
    opacity: 0.1,
    backgroundColor: Color.darkslateblue,
    top: "34.92%",
    width: "26.45%",
    height: "65.08%",
    borderRadius: Border.br_xs,
    bottom: "0%",
    position: "absolute",
  },
  textTypo1: {
    letterSpacing: -0.5,
    fontSize: FontSize.size_base,
    top: "55.56%",
    color: Color.darkslateblue,
    textAlign: "left",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    lineHeight: 14,
    position: "absolute",
  },
  textTypo: {
    top: "53.97%",
    letterSpacing: -0.5,
    fontSize: FontSize.size_base,
    color: Color.darkslateblue,
    textAlign: "left",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    lineHeight: 14,
    position: "absolute",
  },
  dealChild: {
    backgroundColor: Color.white,
    borderRadius: Border.br_xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  maskGroupIcon: {
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    left: "0%",
    bottom: "0%",
    width: "100%",
    height: "100%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  offYourUpgrade: {
    top: "19.18%",
    fontSize: FontSize.size_xl,
    letterSpacing: -0.6,
    color: Color.sandybrown_100,
    textAlign: "left",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    lineHeight: 14,
    left: "7.49%",
    position: "absolute",
  },
  expiresIn: {
    fontSize: FontSize.size_xs,
    letterSpacing: -0.4,
    fontWeight: "500",
    fontFamily: FontFamily.manropeMedium,
    opacity: 0.5,
    color: Color.darkslateblue,
    textAlign: "left",
    lineHeight: 14,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  expiresInWrapper: {
    height: "22.22%",
    width: "32.9%",
    right: "67.1%",
    bottom: "77.78%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  countdownTimerChild: {
    right: "73.55%",
    left: "0%",
  },
  text: {
    left: "7.1%",
  },
  text1: {
    left: "29.68%",
  },
  text2: {
    left: "66.45%",
  },
  countdownTimerItem: {
    right: "36.77%",
    left: "36.77%",
  },
  text3: {
    left: "43.87%",
  },
  countdownTimerInner: {
    left: "73.55%",
    right: "0%",
    backgroundColor: Color.darkslateblue,
    top: "34.92%",
    width: "26.45%",
    height: "65.08%",
  },
  text4: {
    left: "80.65%",
  },
  countdownTimer: {
    height: "43.15%",
    width: "41.44%",
    top: "37.67%",
    right: "51.07%",
    bottom: "19.18%",
    left: "7.49%",
    position: "absolute",
  },
  deal: {
    height: "16.29%",
    width: "90.34%",
    top: "13.95%",
    right: "4.83%",
    bottom: "69.75%",
    left: "4.83%",
    position: "absolute",
  },
});

export default DealContainer;
