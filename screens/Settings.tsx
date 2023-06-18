import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SettingContainer from "../components/SettingContainer";
import SettingFeedback from "../components/SettingFeedback";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Settings = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.settings}>
      <View style={styles.profileView}>
        <View style={[styles.profileViewChild, styles.maskGroupIconPosition]} />
        <Image
          style={[styles.maskGroupIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/mask-group4.png")}
        />
        <Text style={styles.checkYourProfile}>Check Your Profile</Text>
        <Pressable
          style={styles.profileViewItem}
          onPress={() => navigation.navigate("ProfileDashboard")}
        />
        <Text style={[styles.view, styles.viewTypo]}>View</Text>
        <Text
          style={[styles.jonathansmithgmailcom, styles.customizeItMoreTypo]}
        >
          jonathansmith@gmail.com
        </Text>
      </View>
      <Text style={[styles.general, styles.generalClr]}>General</Text>
      <Text style={[styles.support, styles.generalClr]}>Support</Text>
      <Image
        style={styles.icons}
        resizeMode="cover"
        source={require("../assets/icons2.png")}
      />
      <View style={styles.text}>
        <Text style={[styles.newHabit, styles.generalClr]}>Settings</Text>
      </View>
      <Image
        style={styles.menuIcon}
        resizeMode="cover"
        source={require("../assets/menu6.png")}
      />
      <Image
        style={[styles.iconUser, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={styles.menuButtonIcon}
        resizeMode="cover"
        source={require("../assets/menu-button2.png")}
      />
      <SettingContainer />
      <View style={styles.setting9}>
        <View style={[styles.profileViewChild, styles.maskGroupIconPosition]} />
        <Image
          style={[styles.setting9Item, styles.itemLayout]}
          resizeMode="cover"
          source={require("../assets/frame-24.png")}
        />
        <Image
          style={[styles.setting9Inner, styles.innerPosition]}
          resizeMode="cover"
          source={require("../assets/vector7.png")}
        />
        <Text style={[styles.moreCustomization, styles.contactTypo]}>
          More customization
        </Text>
        <Text style={[styles.customizeItMore, styles.customizeItMoreTypo]}>
          Customize it more to fit your usage
        </Text>
      </View>
      <View style={[styles.setting7, styles.settingLayout]}>
        <View style={[styles.profileViewChild, styles.maskGroupIconPosition]} />
        <View style={[styles.setting7Item, styles.itemLayout]} />
        <Image
          style={[styles.setting7Inner, styles.innerPosition]}
          resizeMode="cover"
          source={require("../assets/vector7.png")}
        />
        <Text style={[styles.contact, styles.contactPosition]}>Contact</Text>
        <Image
          style={[styles.chatPhoneIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/chat-phone.png")}
        />
      </View>
      <SettingFeedback
        vector={require("../assets/vector13.png")}
        feedback="Feedback"
      />
      <SettingFeedback
        vector={require("../assets/group-10075.png")}
        feedback="Privacy Policy"
        propTop={648}
      />
      <View style={[styles.setting12, styles.settingLayout]}>
        <View style={[styles.profileViewChild, styles.maskGroupIconPosition]} />
        <View style={[styles.setting7Item, styles.itemLayout]} />
        <Image
          style={[styles.setting12Inner, styles.contactPosition]}
          resizeMode="cover"
          source={require("../assets/group-10043.png")}
        />
        <Image
          style={[styles.setting7Inner, styles.innerPosition]}
          resizeMode="cover"
          source={require("../assets/vector7.png")}
        />
        <Text style={[styles.contact, styles.contactPosition]}>About</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maskGroupIconPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  viewTypo: {
    textAlign: "center",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
  },
  customizeItMoreTypo: {
    opacity: 0.5,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    letterSpacing: -0.4,
    textAlign: "left",
    color: Color.darkslateblue,
    position: "absolute",
  },
  generalClr: {
    letterSpacing: -0.5,
    color: Color.darkslateblue,
    position: "absolute",
  },
  itemLayout: {
    width: "10.16%",
    position: "absolute",
  },
  innerPosition: {
    left: "91.64%",
    right: "3.41%",
    width: "4.95%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  contactTypo: {
    left: "15.51%",
    letterSpacing: -0.5,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    lineHeight: 16,
    textAlign: "left",
    color: Color.darkslateblue,
  },
  settingLayout: {
    height: 50,
    width: 374,
    left: 20,
    position: "absolute",
  },
  contactPosition: {
    top: "34%",
    position: "absolute",
  },
  profileViewChild: {
    backgroundColor: Color.white,
    borderRadius: Border.br_xs,
  },
  maskGroupIcon: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  checkYourProfile: {
    top: "13.7%",
    fontSize: FontSize.size_xl,
    letterSpacing: -0.6,
    lineHeight: 26,
    textAlign: "left",
    color: Color.darkslateblue,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    left: "8.82%",
    position: "absolute",
  },
  profileViewItem: {
    height: "27.4%",
    width: "32.09%",
    top: "58.9%",
    right: "60.16%",
    bottom: "13.7%",
    left: "7.75%",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.sandybrown_100,
    position: "absolute",
  },
  view: {
    top: "67.12%",
    left: "19.79%",
    lineHeight: 16,
    fontSize: FontSize.size_sm,
    letterSpacing: -0.4,
    textAlign: "center",
    color: Color.darkslateblue,
    position: "absolute",
  },
  jonathansmithgmailcom: {
    top: "34.25%",
    fontSize: FontSize.size_xs,
    lineHeight: 14,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    left: "8.82%",
  },
  profileView: {
    height: "16.29%",
    width: "90.34%",
    top: "13.95%",
    right: "4.83%",
    bottom: "69.75%",
    left: "4.83%",
    position: "absolute",
  },
  general: {
    top: "32.14%",
    fontSize: FontSize.size_base,
    letterSpacing: -0.5,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    lineHeight: 16,
    textAlign: "left",
    left: "4.83%",
  },
  support: {
    top: "55.36%",
    fontSize: FontSize.size_base,
    letterSpacing: -0.5,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    lineHeight: 16,
    textAlign: "left",
    left: "4.83%",
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
    left: "9.89%",
    fontSize: FontSize.size_lg,
    lineHeight: 32,
    textAlign: "center",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    letterSpacing: -0.5,
    top: "0%",
  },
  text: {
    top: 45,
    left: 162,
    width: 91,
    height: 32,
    position: "absolute",
  },
  menuIcon: {
    top: 772,
    left: 0,
    width: 414,
    height: 124,
    position: "absolute",
  },
  iconUser: {
    height: "3.57%",
    width: "6.76%",
    top: "95.31%",
    right: "46.62%",
    bottom: "1.12%",
    left: "46.62%",
    position: "absolute",
  },
  menuButtonIcon: {
    top: 722,
    left: 125,
    width: 164,
    height: 194,
    position: "absolute",
    overflow: "hidden",
  },
  setting9Item: {
    height: "51.35%",
    top: "24.32%",
    right: "87.7%",
    bottom: "24.32%",
    left: "2.14%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  setting9Inner: {
    height: "33.11%",
    top: "36.15%",
    bottom: "30.74%",
  },
  moreCustomization: {
    top: "22.97%",
    position: "absolute",
  },
  customizeItMore: {
    top: "55.41%",
    left: "15.78%",
    lineHeight: 16,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
  },
  setting9: {
    top: 406,
    height: 74,
    width: 374,
    left: 20,
    position: "absolute",
  },
  setting7Item: {
    height: "76%",
    top: "12%",
    right: "88.24%",
    bottom: "12%",
    left: "1.6%",
    opacity: 0.1,
    backgroundColor: Color.sandybrown_100,
    borderRadius: Border.br_xs,
  },
  setting7Inner: {
    height: "49%",
    top: "29.5%",
    bottom: "21.5%",
  },
  contact: {
    left: "15.51%",
    letterSpacing: -0.5,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    lineHeight: 16,
    textAlign: "left",
    color: Color.darkslateblue,
  },
  chatPhoneIcon: {
    height: "36%",
    width: "4.81%",
    top: "32%",
    right: "90.91%",
    bottom: "32%",
    left: "4.28%",
    position: "absolute",
  },
  setting7: {
    top: 532,
  },
  setting12Inner: {
    height: "32%",
    width: "4.28%",
    right: "91.18%",
    bottom: "34%",
    left: "4.55%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  setting12: {
    top: 706,
  },
  settings: {
    backgroundColor: Color.linen,
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default Settings;
