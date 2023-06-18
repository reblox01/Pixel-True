import React, { useState } from "react";
import { Image, StyleSheet, Pressable, View, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import ExerciseBox from "../components/ExerciseBox";
import WakeUpContainer from "../components/WakeUpContainer";
import ReadingContainer from "../components/ReadingContainer";
import DogWalkerContainer from "../components/DogWalkerContainer";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const HomepageTrackingHabits = () => {
  const [iconsOpen, setIconsOpen] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.homepageTrackingHabits}>
      <Image
        style={[styles.backgroundIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/background1.png")}
      />
      <Image
        style={[styles.menuIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/menu.png")}
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
      <View style={styles.body}>
        <ExerciseBox />
        <WakeUpContainer />
        <ReadingContainer />
        <DogWalkerContainer />
        <View style={styles.datedayGroup}>
          <View style={styles.dayLayout}>
            <View style={[styles.shape, styles.shapeBg]} />
            <View style={[styles.daydate, styles.daydatePosition1]}>
              <Text style={[styles.day1, styles.day1Typo]}>SUN</Text>
              <Text style={[styles.date, styles.dateTypo]}>17</Text>
            </View>
          </View>
          <View style={[styles.day2, styles.dayLayout]}>
            <View style={[styles.shape, styles.shapeBg]} />
            <View style={[styles.daydate1, styles.daydatePosition2]}>
              <Text style={[styles.day1, styles.day1Typo]}>MON</Text>
              <Text style={[styles.date1, styles.dateTypo]}>18</Text>
            </View>
          </View>
          <View style={[styles.day2, styles.dayLayout]}>
            <View style={[styles.shape, styles.shapeBg]} />
            <View style={[styles.daydate2, styles.daydatePosition]}>
              <Text style={[styles.day1, styles.day1Typo]}>TUE</Text>
              <Text style={[styles.date2, styles.dateTypo]}>18</Text>
            </View>
          </View>
          <View style={[styles.day2, styles.dayLayout]}>
            <View style={[styles.shape, styles.shapeBg]} />
            <View style={[styles.daydate1, styles.daydatePosition2]}>
              <Text style={[styles.day1, styles.day1Typo]}>WED</Text>
              <Text style={[styles.date1, styles.dateTypo]}>19</Text>
            </View>
          </View>
          <View style={[styles.day2, styles.dayLayout]}>
            <View style={[styles.shape, styles.shapeBg]} />
            <View style={[styles.daydate4, styles.daydatePosition]}>
              <Text style={[styles.day1, styles.day1Typo]}>THU</Text>
              <Text style={[styles.text, styles.dateTypo]}>20</Text>
            </View>
            <Image
              style={[styles.vectorIcon, styles.daydatePosition]}
              resizeMode="cover"
              source={require("../assets/vector4.png")}
            />
          </View>
        </View>
        <Text style={[styles.habits, styles.text2Typo1]}>Habits</Text>
        <View style={[styles.quote, styles.quotePosition]}>
          <Image
            style={styles.quotePosition}
            resizeMode="cover"
            source={require("../assets/mask-group.png")}
          />
          <Text
            style={[styles.weFirstMake, styles.text2Typo]}
          >{`We first make our habits, 
and then our habits 
makes us.`}</Text>
          <Text style={[styles.anonymous, styles.day1Typo]}>- anonymous</Text>
        </View>
      </View>
      <View style={styles.icons}>
        <DropDownPicker open={iconsOpen} setOpen={setIconsOpen} />
      </View>
      <View style={styles.text1}>
        <Text style={[styles.text2, styles.text2Typo]}>Homepage</Text>
      </View>
      <Pressable
        style={styles.image}
        onPress={() => navigation.navigate("ProfileDashboard")}
      >
        <Image
          style={styles.iconLayout1}
          resizeMode="cover"
          source={require("../assets/image.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  shapeBg: {
    backgroundColor: Color.white,
    borderRadius: Border.br_xs,
  },
  daydatePosition1: {
    left: "30%",
    bottom: "24%",
    top: "24%",
    height: "52%",
  },
  day1Typo: {
    opacity: 0.5,
    textAlign: "center",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    color: Color.darkslateblue,
    position: "absolute",
  },
  dateTypo: {
    letterSpacing: -0.5,
    fontSize: FontSize.size_base,
    top: "50%",
    textAlign: "center",
    color: Color.darkslateblue,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    lineHeight: 13,
    position: "absolute",
  },
  dayLayout: {
    width: 50,
    height: 50,
  },
  daydatePosition2: {
    bottom: "24%",
    top: "24%",
    height: "52%",
  },
  daydatePosition: {
    right: "30%",
    position: "absolute",
  },
  text2Typo1: {
    lineHeight: 32,
    textAlign: "center",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
  },
  quotePosition: {
    height: 146,
    width: 374,
    top: 0,
    left: 0,
    position: "absolute",
  },
  text2Typo: {
    fontSize: FontSize.size_lg,
    letterSpacing: -0.5,
    color: Color.darkslateblue,
    position: "absolute",
  },
  backgroundIcon: {
    top: 331,
    width: 555,
    height: 543,
  },
  menuIcon: {
    top: 738,
    width: 414,
    height: 158,
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
  shape: {
    right: "0%",
    bottom: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  day1: {
    fontSize: FontSize.size_3xs,
    letterSpacing: -0.3,
    lineHeight: 13,
    opacity: 0.5,
    textAlign: "center",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    left: "0%",
    top: "0%",
  },
  date: {
    left: "9.52%",
  },
  daydate: {
    width: "42%",
    right: "28%",
    position: "absolute",
  },
  date1: {
    left: "13.04%",
  },
  daydate1: {
    width: "46%",
    right: "26%",
    left: "28%",
    position: "absolute",
  },
  day2: {
    marginLeft: 6,
  },
  date2: {
    left: "5.26%",
  },
  daydate2: {
    width: "38%",
    left: "32%",
    bottom: "24%",
    top: "24%",
    height: "52%",
  },
  text: {
    left: "0%",
  },
  daydate4: {
    width: "40%",
    left: "30%",
    bottom: "24%",
    top: "24%",
    height: "52%",
  },
  vectorIcon: {
    height: "30%",
    width: "51%",
    top: "-9%",
    bottom: "79%",
    left: "19%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  datedayGroup: {
    top: 165,
    left: 135,
    width: 274,
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    position: "absolute",
  },
  habits: {
    top: "32.58%",
    left: "4.25%",
    fontSize: FontSize.size_sm,
    letterSpacing: -0.4,
    textTransform: "uppercase",
    color: Color.darkslateblue,
    lineHeight: 32,
    position: "absolute",
  },
  weFirstMake: {
    width: "93.05%",
    top: "17.81%",
    left: "4.01%",
    lineHeight: 21,
    fontFamily: FontFamily.klasikRegular,
    textAlign: "left",
    textTransform: "uppercase",
  },
  anonymous: {
    top: 88,
    left: 14,
    fontSize: FontSize.size_xs,
    lineHeight: 24,
    textTransform: "uppercase",
  },
  quote: {
    backgroundColor: Color.white,
    borderRadius: Border.br_xs,
  },
  body: {
    top: 107,
    left: 20,
    width: 424,
    height: 534,
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
  text2: {
    lineHeight: 32,
    textAlign: "center",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    left: "0%",
    top: "0%",
  },
  text1: {
    top: 45,
    left: 162,
    width: 91,
    height: 32,
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  image: {
    left: 343,
    top: 39,
    width: 44,
    height: 44,
    position: "absolute",
  },
  homepageTrackingHabits: {
    backgroundColor: Color.linen,
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default HomepageTrackingHabits;
