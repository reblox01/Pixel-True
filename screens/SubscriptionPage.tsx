import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import SecureContainer from "../components/SecureContainer";
import LifetimeContainer from "../components/LifetimeContainer";
import YearlyContainer from "../components/YearlyContainer";
import AvatarContainer from "../components/AvatarContainer";
import DealContainer from "../components/DealContainer";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const SubscriptionPage = () => {
  return (
    <View style={[styles.subscriptionPage, styles.monthlyItemLayout]}>
      <SecureContainer />
      <View style={[styles.button374xvariant4, styles.buttonFlexBox]}>
        <View style={[styles.button, styles.buttonFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}>Subscribe Now</Text>
        </View>
      </View>
      <View style={styles.subscriptionPlans}>
        <LifetimeContainer />
        <View style={[styles.monthly, styles.monthlyPosition]}>
          <View style={[styles.monthlyChild, styles.monthlyPosition]} />
          <Image
            style={[styles.monthlyItem, styles.monthlyPosition]}
            resizeMode="cover"
            source={require("../assets/vector-142.png")}
          />
          <Text style={[styles.monthly1, styles.monthly1Layout]}>Monthly</Text>
          <Text style={[styles.text1, styles.textTypo]}>$19.00</Text>
          <Text
            style={[styles.monthPlanFor, styles.monthly1Layout]}
          >{`6-month plan for
39.99 usd`}</Text>
        </View>
        <YearlyContainer />
      </View>
      <AvatarContainer />
      <DealContainer />
      <Image
        style={styles.icons}
        resizeMode="cover"
        source={require("../assets/icons1.png")}
      />
      <View style={styles.text2}>
        <Text style={[styles.newHabit, styles.textTypo]}>Premium</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  monthlyItemLayout: {
    width: "100%",
    overflow: "hidden",
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  textTypo: {
    textAlign: "center",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
  },
  monthlyPosition: {
    left: "0%",
    position: "absolute",
  },
  monthly1Layout: {
    lineHeight: 13,
    textAlign: "center",
    color: Color.darkslateblue,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_base,
    lineHeight: 16,
    color: Color.darkslateblue,
    letterSpacing: -0.5,
    textAlign: "center",
  },
  button: {
    backgroundColor: Color.sandybrown_100,
    width: 374,
    height: 60,
    paddingHorizontal: Padding.p_113xl,
    paddingVertical: Padding.p_3xl,
    borderRadius: Border.br_xs,
  },
  button374xvariant4: {
    top: 680,
    left: 0,
    flexDirection: "row",
    padding: Padding.p_xl,
    position: "absolute",
    overflow: "hidden",
  },
  monthlyChild: {
    height: "100%",
    width: "99.17%",
    right: "0.83%",
    bottom: "0%",
    backgroundColor: Color.white,
    top: "0%",
    borderRadius: Border.br_xs,
  },
  monthlyItem: {
    height: "0.74%",
    top: "78.15%",
    right: "0%",
    bottom: "21.11%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    width: "100%",
  },
  monthly1: {
    top: "84.44%",
    left: "30.83%",
    fontSize: FontSize.size_xs,
    letterSpacing: -0.4,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    lineHeight: 13,
  },
  text1: {
    top: "24.44%",
    left: "17.5%",
    fontSize: FontSize.size_5xl,
    letterSpacing: -0.7,
    lineHeight: 14,
    color: Color.sandybrown_100,
    position: "absolute",
  },
  monthPlanFor: {
    top: "43.7%",
    left: "18.33%",
    fontSize: FontSize.size_3xs,
    letterSpacing: -0.3,
    fontWeight: "500",
    fontFamily: FontFamily.manropeMedium,
    opacity: 0.5,
  },
  monthly: {
    height: "87.66%",
    width: "32%",
    right: "68%",
    bottom: "12.34%",
    top: "0%",
  },
  subscriptionPlans: {
    height: "17.19%",
    width: "90.58%",
    top: "55.25%",
    right: "4.59%",
    bottom: "27.57%",
    left: "4.83%",
    position: "absolute",
  },
  icons: {
    top: 28,
    left: 10,
    width: 64,
    height: 65,
    position: "absolute",
    overflow: "hidden",
  },
  newHabit: {
    left: "8.79%",
    fontSize: FontSize.size_lg,
    lineHeight: 32,
    top: "0%",
    color: Color.darkslateblue,
    letterSpacing: -0.5,
    textAlign: "center",
    position: "absolute",
  },
  text2: {
    top: 45,
    left: 162,
    width: 91,
    height: 32,
    position: "absolute",
  },
  subscriptionPage: {
    backgroundColor: Color.linen,
    flex: 1,
    height: 896,
    overflow: "hidden",
  },
});

export default SubscriptionPage;
