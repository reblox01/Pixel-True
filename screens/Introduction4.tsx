import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Introduction4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.introduction4}>
      <View style={[styles.content, styles.contentLayout]}>
        <View style={styles.textSize40}>
          <Text style={styles.text}>{`JOIN A SUPPORTIVE
COMMUNITY`}</Text>
        </View>
        <View style={[styles.button374xvariant4, styles.buttonFlexBox]}>
          <Pressable
            style={[styles.button, styles.buttonFlexBox]}
            onPress={() => navigation.navigate("LoginPage")}
          >
            <Text style={[styles.text1, styles.text1Typo]}>Get Started</Text>
          </Pressable>
        </View>
        <Text style={[styles.weCanHelpContainer, styles.text1Typo]}>
          <Text style={styles.weCan}>{`We can `}</Text>
          <Text style={styles.helpYou}>help you</Text>
          <Text style={styles.weCan}>{` to be a better version of `}</Text>
          <Text style={styles.helpYou}>yourself.</Text>
        </Text>
        <Image
          style={[styles.communitySupport1, styles.contentLayout]}
          resizeMode="cover"
          source={require("../assets/community-support-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentLayout: {
    width: 417,
    position: "absolute",
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  text1Typo: {
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    textAlign: "center",
  },
  text: {
    top: "0%",
    left: "0%",
    fontSize: FontSize.size_13xl,
    letterSpacing: -1,
    lineHeight: 32,
    fontFamily: FontFamily.klasikRegular,
    textAlign: "center",
    color: Color.darkslateblue,
    textTransform: "uppercase",
    position: "absolute",
    width: "100%",
  },
  textSize40: {
    top: 0,
    left: 34,
    width: 350,
    height: 89,
    position: "absolute",
  },
  text1: {
    fontSize: FontSize.size_base,
    letterSpacing: -0.5,
    lineHeight: 16,
    color: Color.darkslateblue,
  },
  button: {
    alignSelf: "stretch",
    borderRadius: Border.br_xs,
    backgroundColor: Color.sandybrown_100,
    paddingHorizontal: 99,
    paddingVertical: Padding.p_3xl,
  },
  button374xvariant4: {
    marginTop: 271.5,
    top: "50%",
    left: 44,
    width: 329,
    flexDirection: "row",
    padding: Padding.p_xl,
    position: "absolute",
    overflow: "hidden",
  },
  weCan: {
    color: Color.darkslateblue,
  },
  helpYou: {
    color: Color.sandybrown_200,
  },
  weCanHelpContainer: {
    width: "83.93%",
    top: "76.72%",
    left: "8.15%",
    fontSize: FontSize.size_mid,
    lineHeight: 24,
    textTransform: "uppercase",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    position: "absolute",
  },
  communitySupport1: {
    top: 166,
    left: 2,
    height: 309,
    overflow: "hidden",
  },
  content: {
    top: 81,
    left: -2,
    height: 743,
  },
  introduction4: {
    backgroundColor: Color.white,
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default Introduction4;
