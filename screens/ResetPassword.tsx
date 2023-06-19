import * as React from "react";
import { Text, StyleSheet, Pressable, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ContentContainer from "../components/ContentContainer";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const ResetPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.resetPassword}>
      <Pressable
        style={styles.rememberPasswordLoginContainer}
        onPress={() => navigation.navigate("LoginPage")}
      >
        <Text style={[styles.text, styles.textFlexBox]}>
          <Text style={styles.rememberPassword}>{`Remember password? `}</Text>
          <Text style={styles.login}>Login</Text>
        </Text>
      </Pressable>
      <Text style={[styles.forgotYourPassword, styles.textFlexBox]}>
        Forgot your password?
      </Text>
      <Image
        style={styles.icons}
        resizeMode="cover"
        source={require("../assets/icons1.png")}
      />
      <ContentContainer />
      <Image
        style={styles.resetPasswordChild}
        resizeMode="cover"
        source={require("../assets/frame-19.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "center",
    color: Color.darkslateblue,
  },
  rememberPassword: {
    fontWeight: "500",
    fontFamily: FontFamily.manropeMedium,
  },
  login: {
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
  },
  text: {
    fontSize: FontSize.size_sm,
    letterSpacing: -0.4,
    lineHeight: 22,
  },
  rememberPasswordLoginContainer: {
    left: "28.74%",
    top: "93.75%",
    position: "absolute",
  },
  forgotYourPassword: {
    width: "84.54%",
    top: "13.39%",
    left: "7.73%",
    fontSize: FontSize.size_5xl,
    letterSpacing: -0.7,
    lineHeight: 32,
    textTransform: "uppercase",
    fontFamily: FontFamily.klasikRegular,
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
  resetPasswordChild: {
    top: 191,
    left: 0,
    width: 414,
    height: 264,
    position: "absolute",
  },
  resetPassword: {
    backgroundColor: Color.linen,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default ResetPassword;
