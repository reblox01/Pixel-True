import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import MessageContainer from "../components/MessageContainer";
import ReminderContainer from "../components/ReminderContainer";
import NotificationContainer from "../components/NotificationContainer";
import FrequencyContainer from "../components/FrequencyContainer";
import HabitContainer from "../components/HabitContainer";
import DialogWrapper from "../components/DialogWrapper";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const HomepageSetTime = () => {
  return (
    <View style={styles.homepageSetTime}>
      <View style={styles.content}>
        <Image
          style={styles.menuIcon}
          resizeMode="cover"
          source={require("../assets/menu2.png")}
        />
        <Image
          style={styles.menuButtonIcon}
          resizeMode="cover"
          source={require("../assets/menu-button.png")}
        />
        <MessageContainer propTop={512} propLeft={20} />
        <ReminderContainer propTop={344} propLeft={19} />
        <NotificationContainer propTop={405} propLeft={19} />
        <FrequencyContainer />
        <HabitContainer />
        <Image
          style={styles.icons}
          resizeMode="cover"
          source={require("../assets/icons1.png")}
        />
        <View style={styles.text}>
          <Text style={styles.newHabit}>New Habit</Text>
        </View>
      </View>
      <DialogWrapper />
    </View>
  );
};

const styles = StyleSheet.create({
  menuIcon: {
    top: 744,
    left: 0,
    height: 124,
    position: "absolute",
    width: 414,
  },
  menuButtonIcon: {
    top: 694,
    left: 125,
    width: 164,
    height: 194,
    position: "absolute",
    overflow: "hidden",
  },
  icons: {
    top: 0,
    left: 10,
    width: 64,
    height: 65,
    position: "absolute",
    overflow: "hidden",
  },
  newHabit: {
    top: "0%",
    left: "3.3%",
    fontSize: FontSize.size_lg,
    letterSpacing: -0.5,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    color: Color.darkslateblue,
    textAlign: "center",
    position: "absolute",
  },
  text: {
    top: 17,
    left: 162,
    width: 91,
    height: 32,
    position: "absolute",
  },
  content: {
    height: 888,
    width: 414,
  },
  homepageSetTime: {
    backgroundColor: Color.linen,
    flex: 1,
    width: "100%",
    height: 896,
    paddingTop: Padding.p_9xl,
    alignItems: "center",
    overflow: "hidden",
  },
});

export default HomepageSetTime;
