import React, { memo } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const SecureContainer = memo(() => {
  return (
    <View style={styles.footer}>
      <Text style={styles.restorePurchase}>Restore Purchase</Text>
      <View style={[styles.text, styles.textPosition]}>
        <Text style={[styles.termsOfService, styles.privacyPolicyTypo]}>
          Terms of Service
        </Text>
        <Text style={[styles.and, styles.andTypo]}>and</Text>
        <Text style={[styles.privacyPolicy, styles.privacyPolicyTypo]}>
          Privacy Policy
        </Text>
      </View>
      <View style={styles.text1}>
        <Text style={[styles.securedWithGoggle, styles.andTypo]}>
          Secured with Goggle Play. Cancel anytime
        </Text>
        <Image
          style={[styles.groupIcon, styles.textPosition]}
          resizeMode="cover"
          source={require("../assets/group2.png")}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  textPosition: {
    bottom: "0%",
    position: "absolute",
  },
  privacyPolicyTypo: {
    color: Color.darkslateblue,
    top: "0%",
    textAlign: "center",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    lineHeight: 16,
    letterSpacing: -0.4,
    textDecoration: "underline",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  andTypo: {
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    color: Color.darkslateblue,
    textAlign: "center",
    letterSpacing: -0.4,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  restorePurchase: {
    top: "57.89%",
    left: "29.56%",
    color: Color.sandybrown_100,
    textAlign: "center",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    letterSpacing: -0.4,
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    textDecoration: "underline",
    position: "absolute",
  },
  termsOfService: {
    left: "0%",
  },
  and: {
    left: "48.28%",
    opacity: 0.5,
    top: "0%",
    lineHeight: 16,
    textDecoration: "underline",
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
  },
  privacyPolicy: {
    left: "62.56%",
  },
  text: {
    height: "16.84%",
    width: "84.53%",
    top: "83.16%",
    right: "7.56%",
    left: "7.91%",
  },
  securedWithGoggle: {
    top: "6.79%",
    left: "7.98%",
    lineHeight: 13,
  },
  groupIcon: {
    height: "100%",
    width: "5.15%",
    right: "94.85%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    left: "0%",
    top: "0%",
  },
  text1: {
    height: "15.5%",
    width: "100%",
    right: "0%",
    bottom: "84.5%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  footer: {
    height: "10.6%",
    width: "58.01%",
    top: "86.5%",
    right: "20.98%",
    bottom: "2.9%",
    left: "21.01%",
    position: "absolute",
  },
});

export default SecureContainer;
