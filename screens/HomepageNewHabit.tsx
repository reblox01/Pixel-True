import * as React from "react";
import { Image, StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MessageContainer from "../components/MessageContainer";
import ReminderContainer from "../components/ReminderContainer";
import NotificationContainer from "../components/NotificationContainer";
import HabitContainer1 from "../components/HabitContainer1";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const HomepageNewHabit = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homepageNewHabit}>
      <Image
        style={styles.backgroundIcon}
        resizeMode="cover"
        source={require("../assets/background1.png")}
      />
      <Image
        style={styles.menuIcon}
        resizeMode="cover"
        source={require("../assets/menu1.png")}
      />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("ProfileDashboard")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector3.png")}
        />
      </Pressable>
      <Image
        style={styles.menuButtonIcon}
        resizeMode="cover"
        source={require("../assets/menu-button.png")}
      />
      <View style={styles.body}>
        <MessageContainer propTop={437} propLeft={21} />
        <ReminderContainer />
        <NotificationContainer />
        <HabitContainer1 />
        <View style={[styles.habitName, styles.habitNamePosition]}>
          <View style={[styles.habitNameChild, styles.nameLayout]} />
          <View style={[styles.name, styles.nameLayout]}>
            <Text style={[styles.information, styles.text1FlexBox]}>
              Enter habit name
            </Text>
          </View>
          <Image
            style={[styles.teepeeSwirlyIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/teepeeswirly.png")}
          />
          <Image
            style={[styles.akarIconscirclePlusFill, styles.habitNamePosition]}
            resizeMode="cover"
            source={require("../assets/akariconscircleplusfill.png")}
          />
        </View>
        <Image
          style={styles.faSolidbookReaderIcon}
          resizeMode="cover"
          source={require("../assets/fasolidbookreader.png")}
        />
      </View>
      <Image
        style={styles.icons}
        resizeMode="cover"
        source={require("../assets/icons1.png")}
      />
      <View style={styles.text}>
        <Text style={[styles.text1, styles.text1FlexBox]}>New Habit</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  habitNamePosition: {
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  nameLayout: {
    height: 49,
    backgroundColor: Color.white,
    borderRadius: Border.br_xs,
    top: 4,
    position: "absolute",
  },
  text1FlexBox: {
    textAlign: "center",
    color: Color.darkslateblue,
    letterSpacing: -0.5,
    position: "absolute",
  },
  backgroundIcon: {
    top: 331,
    width: 555,
    height: 543,
    left: 0,
    position: "absolute",
  },
  menuIcon: {
    top: 772,
    height: 124,
    width: 414,
    left: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "46.62%",
    top: "95.31%",
    right: "46.62%",
    bottom: "1.12%",
    width: "6.76%",
    height: "3.57%",
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
  habitNameChild: {
    left: 346,
    width: 48,
  },
  information: {
    top: "34.69%",
    left: "6.39%",
    fontSize: FontSize.size_base,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.manropeMedium,
    opacity: 0.5,
  },
  name: {
    left: 21,
    width: 313,
  },
  teepeeSwirlyIcon: {
    height: "90.74%",
    width: "11.59%",
    top: "9.26%",
    right: "4.83%",
    bottom: "0%",
    left: "83.57%",
    display: "none",
    position: "absolute",
  },
  akarIconscirclePlusFill: {
    left: 378,
    width: 20,
    height: 20,
  },
  habitName: {
    height: 54,
    width: 414,
    left: 0,
  },
  faSolidbookReaderIcon: {
    top: 11,
    left: 353,
    width: 35,
    height: 35,
    position: "absolute",
    overflow: "hidden",
  },
  body: {
    top: 103,
    left: -1,
    height: 654,
    width: 414,
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
  text1: {
    top: "0%",
    left: "3.3%",
    fontSize: FontSize.size_lg,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
  },
  text: {
    top: 45,
    left: 162,
    width: 91,
    height: 32,
    position: "absolute",
  },
  homepageNewHabit: {
    backgroundColor: Color.linen,
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default HomepageNewHabit;
