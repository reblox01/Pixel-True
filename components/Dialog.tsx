import React, { memo } from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TimeSetForm from "./TimeSetForm";
import TimeSetContainer from "./TimeSetContainer";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Dialog = memo(() => {
  const navigation = useNavigation();

  return (
    <View style={styles.dialog}>
      <View style={[styles.time, styles.timePosition]}>
        <View style={[styles.rectangle, styles.rectanglePosition]} />
        <View style={styles.reminderToggle}>
          <View style={styles.muteNotif}>
            <View style={[styles.square, styles.squarePosition]} />
            <Image
              style={[styles.vectorIcon, styles.squarePosition]}
              resizeMode="cover"
              source={require("../assets/vector6.png")}
            />
          </View>
        </View>
        <View style={[styles.button, styles.timePosition]}>
          <View style={styles.button1}>
            <Pressable
              style={[styles.rectangle1, styles.squarePosition1]}
              onPress={() => navigation.navigate("HomepageSetTime")}
            />
            <Text style={styles.text}>Add Reminder</Text>
          </View>
        </View>
        <View style={styles.timeSet}>
          <TimeSetForm timeSlot="06:30 AM" />
          <TimeSetForm
            timeSlot="07:30 AM"
            propTop={101}
            propLeft={0}
            propLeft1="14.17%"
          />
          <TimeSetForm
            timeSlot="09:00 AM"
            propTop={202}
            propLeft={0}
            propLeft1="12.5%"
          />
          <TimeSetForm
            timeSlot="08:30 AM"
            propTop={101}
            propLeft={255}
            propLeft1="13.33%"
          />
          <TimeSetForm
            timeSlot="07:00 AM"
            propTop={1}
            propLeft={255}
            propLeft1="13.33%"
          />
          <TimeSetForm
            timeSlot="09:30 AM"
            propTop={201}
            propLeft={127}
            propLeft1="13.33%"
          />
          <TimeSetForm
            timeSlot="10:00 AM"
            propTop={201}
            propLeft={255}
            propLeft1="14.17%"
          />
          <TimeSetForm
            timeSlot="10:30 AM"
            propTop={301}
            propLeft={0}
            propLeft1="15%"
          />
          <TimeSetForm
            timeSlot="11:00 AM"
            propTop={301}
            propLeft={128}
            propLeft1="15.83%"
          />
          <TimeSetContainer startTime="06:00 AM" />
          <TimeSetContainer
            startTime="08:00 AM"
            propTop={101}
            propLeft={127}
            propLeft1="13.33%"
          />
          <TimeSetContainer
            startTime="11:30 AM"
            propTop={301}
            propLeft={255}
            propLeft1="16.67%"
          />
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  timePosition: {
    left: 0,
    position: "absolute",
  },
  rectanglePosition: {
    left: "0%",
    right: "0%",
    position: "absolute",
  },
  squarePosition: {
    opacity: 0.3,
    position: "absolute",
  },
  squarePosition1: {
    top: "0%",
    height: "100%",
    bottom: "0%",
    width: "100%",
  },
  rectangle: {
    height: "59.93%",
    top: "40.07%",
    borderTopLeftRadius: Border.br_xs,
    borderTopRightRadius: Border.br_xs,
    backgroundColor: Color.white,
    bottom: "0%",
    width: "100%",
    left: "0%",
    right: "0%",
  },
  square: {
    right: "-100%",
    left: "100%",
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: "#573353",
    borderWidth: 2,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    top: "0%",
    height: "100%",
    bottom: "0%",
    width: "100%",
  },
  vectorIcon: {
    height: "43.33%",
    width: "33.33%",
    top: "28.33%",
    right: "30%",
    bottom: "28.33%",
    left: "36.67%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  muteNotif: {
    top: 8,
    left: 8,
    width: 60,
    height: 60,
    position: "absolute",
  },
  reminderToggle: {
    top: 788,
    left: 329,
    width: 76,
    height: 76,
    overflow: "hidden",
    position: "absolute",
  },
  rectangle1: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.sandybrown_100,
    left: "0%",
    right: "0%",
    position: "absolute",
    top: "0%",
    height: "100%",
  },
  text: {
    top: "36.67%",
    left: "32.89%",
    fontSize: FontSize.size_base,
    letterSpacing: -0.5,
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    color: Color.darkslateblue,
    textAlign: "center",
    position: "absolute",
  },
  button1: {
    width: 304,
    height: 60,
  },
  button: {
    top: 776,
    padding: Padding.p_xl,
    overflow: "hidden",
  },
  timeSet: {
    top: 368,
    left: 10,
    width: 395,
    height: 413,
    position: "absolute",
  },
  time: {
    top: -359,
    backgroundColor: Color.gray_200,
    height: 896,
    width: 414,
  },
  dialog: {
    height: 537,
    marginTop: -557,
    width: 414,
  },
});

export default Dialog;
