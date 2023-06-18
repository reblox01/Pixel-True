import React, { memo } from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const DialogWrapper = memo(() => {
  const navigation = useNavigation();

  return (
    <View style={styles.dialog}>
      <View style={styles.rectangle} />
      <View style={styles.addReminder}>
        <View style={[styles.rectangle1, styles.timePosition2]} />
        <View style={[styles.top, styles.timePosition2]}>
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/vector-138.png")}
          />
          <Pressable
            style={styles.cancel}
            onPress={() => navigation.navigate("HomepageNewHabitReminder")}
          >
            <Text style={[styles.cancel1, styles.labelFlexBox]}>Cancel</Text>
          </Pressable>
          <Pressable
            style={styles.save}
            onPress={() => navigation.navigate("Analytics")}
          >
            <Text style={[styles.cancel1, styles.labelFlexBox]}>Save</Text>
          </Pressable>
          <Text style={[styles.label, styles.labelTypo]}>Add Reminders</Text>
        </View>
        <View style={styles.setTime}>
          <View style={[styles.time, styles.timePosition1]}>
            <Text style={[styles.text, styles.textTypo1]}>07</Text>
            <Text style={[styles.text1, styles.textTypo1]}>58</Text>
          </View>
          <View style={[styles.time1, styles.timeLayout]}>
            <Text style={[styles.text2, styles.textTypo2]}>08</Text>
            <Text style={[styles.text3, styles.textTypo2]}>59</Text>
          </View>
          <View style={[styles.time2, styles.timePosition1]}>
            <Text style={[styles.text2, styles.textTypo2]}>10</Text>
            <Text style={[styles.text5, styles.textTypo2]}>01</Text>
          </View>
          <View style={[styles.time3, styles.timeLayout]}>
            <Text style={[styles.text, styles.textTypo1]}>08</Text>
            <Text style={[styles.text7, styles.textTypo1]}>02</Text>
          </View>
          <View style={[styles.time4, styles.timeLayout]}>
            <Text style={[styles.text8, styles.textTypo]}>09</Text>
            <Text style={[styles.text9, styles.textTypo]}>:</Text>
            <Text style={[styles.text10, styles.textTypo]}>00</Text>
          </View>
        </View>
        <View style={[styles.timePeriod, styles.timePosition2]}>
          <Image
            style={[styles.vectorIcon1, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/vector-138.png")}
          />
          <Image
            style={[styles.vectorIcon2, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/vector-138.png")}
          />
          <View style={[styles.time5, styles.timePosition]}>
            <View style={[styles.rectangle2, styles.timePosition2]} />
            <Text style={[styles.label1, styles.labelPosition]}>am</Text>
          </View>
          <View style={[styles.time6, styles.timePosition]}>
            <View style={[styles.rectangle3, styles.timePosition2]} />
            <Text style={[styles.label2, styles.labelPosition]}>pm</Text>
          </View>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  timePosition2: {
    width: "100%",
    left: "0%",
    right: "0%",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    position: "absolute",
  },
  labelFlexBox: {
    textAlign: "center",
    lineHeight: 32,
    letterSpacing: -0.5,
  },
  labelTypo: {
    color: Color.darkslateblue,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
  },
  timePosition1: {
    left: "4.42%",
    height: "14.29%",
    position: "absolute",
  },
  textTypo1: {
    opacity: 0.2,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    letterSpacing: -0.7,
    fontSize: FontSize.size_3xl,
    color: Color.darkslateblue,
    textAlign: "center",
    lineHeight: 32,
    top: "0%",
    position: "absolute",
  },
  timeLayout: {
    height: "14.29%",
    position: "absolute",
  },
  textTypo2: {
    letterSpacing: -0.7,
    fontSize: FontSize.size_3xl,
    color: Color.darkslateblue,
    textAlign: "center",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    lineHeight: 32,
    top: "0%",
    opacity: 0.5,
    position: "absolute",
  },
  textTypo: {
    letterSpacing: -1,
    fontSize: FontSize.size_13xl,
    color: Color.darkslateblue,
    textAlign: "center",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    lineHeight: 32,
    top: "0%",
    position: "absolute",
  },
  timePosition: {
    width: "50%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  labelPosition: {
    lineHeight: 24,
    top: "30%",
    letterSpacing: -0.7,
    fontSize: FontSize.size_3xl,
    textAlign: "center",
    position: "absolute",
  },
  rectangle: {
    top: -359,
    backgroundColor: Color.gray_100,
    height: 896,
    opacity: 0.5,
    left: 0,
    position: "absolute",
    width: 414,
  },
  rectangle1: {
    borderTopLeftRadius: Border.br_xs,
    borderTopRightRadius: Border.br_xs,
    backgroundColor: Color.white,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  vectorIcon: {
    height: "2.08%",
    top: "98.96%",
    bottom: "-1.04%",
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  cancel1: {
    fontSize: FontSize.size_mid,
    color: Color.sandybrown_200,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 32,
    letterSpacing: -0.5,
  },
  cancel: {
    left: "5.31%",
    top: "0%",
    position: "absolute",
  },
  save: {
    left: "83.82%",
    top: "0%",
    position: "absolute",
  },
  label: {
    left: "34.78%",
    fontSize: FontSize.size_lg,
    textAlign: "center",
    lineHeight: 32,
    letterSpacing: -0.5,
    color: Color.darkslateblue,
    top: "0%",
    position: "absolute",
  },
  top: {
    height: "11.21%",
    top: "3.74%",
    bottom: "85.05%",
    left: "0%",
    right: "0%",
    position: "absolute",
  },
  text: {
    left: "0%",
  },
  text1: {
    left: "84.24%",
  },
  time: {
    width: "91.16%",
    bottom: "85.71%",
    right: "4.42%",
    top: "0%",
  },
  text2: {
    left: "0%",
  },
  text3: {
    left: "84.43%",
  },
  time1: {
    width: "92.27%",
    top: "21.43%",
    bottom: "64.29%",
    left: "3.31%",
    right: "4.42%",
  },
  text5: {
    left: "85.37%",
  },
  time2: {
    width: "90.61%",
    top: "64.29%",
    right: "4.97%",
    bottom: "21.43%",
  },
  text7: {
    left: "84.34%",
  },
  time3: {
    width: "91.71%",
    top: "85.71%",
    left: "3.87%",
    right: "4.42%",
    bottom: "0%",
  },
  text8: {
    left: "0%",
  },
  text9: {
    left: "46.96%",
  },
  text10: {
    left: "76.8%",
  },
  time4: {
    top: "42.86%",
    bottom: "42.86%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  setTime: {
    height: "52.34%",
    width: "43.72%",
    top: "24.3%",
    right: "28.02%",
    bottom: "23.36%",
    left: "28.26%",
    position: "absolute",
  },
  vectorIcon1: {
    height: "1.67%",
    top: "-0.83%",
    bottom: "99.17%",
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  vectorIcon2: {
    height: "690%",
    top: "713.33%",
    bottom: "-1303.33%",
    left: "100%",
    width: 0,
  },
  rectangle2: {
    backgroundColor: Color.sandybrown_100,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  label1: {
    left: "42.03%",
    color: Color.darkslateblue,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
  },
  time5: {
    right: "50%",
    left: "0%",
  },
  rectangle3: {
    backgroundColor: Color.linen,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  label2: {
    left: "42.51%",
    color: Color.sandybrown_100,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    lineHeight: 24,
    top: "30%",
  },
  time6: {
    left: "50%",
    right: "0%",
  },
  timePeriod: {
    height: "14.02%",
    top: "85.98%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  addReminder: {
    top: 109,
    height: 428,
    left: 0,
    position: "absolute",
    width: 414,
  },
  dialog: {
    height: 537,
    marginTop: -557,
    width: 414,
  },
});

export default DialogWrapper;
