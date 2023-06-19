import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const CourseOverview = () => {
  return (
    <View style={styles.courseOverview}>
      <Image
        style={styles.backgroundIcon}
        resizeMode="cover"
        source={require("../assets/background2.png")}
      />
      <View style={[styles.courses, styles.headerLayout]}>
        <View style={[styles.backgroundParent, styles.course1Layout]}>
          <View style={[styles.background, styles.backgroundLayout]}>
            <View style={[styles.backgroundChild, styles.childBg]} />
            <Image
              style={[styles.backgroundItem, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/vector-120.png")}
            />
          </View>
          <Image
            style={[styles.maskGroupIcon, styles.headerLayout]}
            resizeMode="cover"
            source={require("../assets/mask-group1.png")}
          />
          <View style={styles.course2}>
            <Text style={styles.dayJournalChallenge}>
              30 Day Journal Challenge - Establish a Habit of Daily Journaling
            </Text>
            <Text style={[styles.h41m, styles.h41mTypo]}>2h 41m</Text>
            <Text style={[styles.lessons, styles.h41mTypo]}>37 Lessons</Text>
            <View style={[styles.sharePost, styles.shareLayout]}>
              <View
                style={[styles.sharePostChild, styles.filterChildPosition]}
              />
              <Image
                style={[styles.vectorIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/vector9.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.course1, styles.course1Layout]}>
          <View style={[styles.background, styles.backgroundLayout]}>
            <View style={[styles.backgroundChild, styles.childBg]} />
            <Image
              style={[styles.backgroundItem, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/vector-120.png")}
            />
          </View>
          <Image
            style={[styles.maskGroupIcon, styles.headerLayout]}
            resizeMode="cover"
            source={require("../assets/mask-group2.png")}
          />
          <View style={styles.course2}>
            <Text style={styles.dayJournalChallenge}>
              Self Help Series: How to Create and Maintain Good Habits
            </Text>
            <Text style={[styles.h41m, styles.h41mTypo]}>4h 6m</Text>
            <Text style={[styles.lessons, styles.h41mTypo]}>24 Lessons</Text>
          </View>
          <View style={[styles.sharePost1, styles.shareLayout]}>
            <View style={[styles.sharePostChild, styles.filterChildPosition]} />
            <Image
              style={[styles.vectorIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/vector9.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.filter}>
        <View style={[styles.filter1, styles.filterChildPosition]}>
          <View style={[styles.filterChild, styles.filterChildPosition]} />
          <View style={styles.filtersParent}>
            <Text style={[styles.filters, styles.filtersLayout]}>Filters</Text>
            <Image
              style={[styles.groupChild, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/vector-125.png")}
            />
          </View>
        </View>
        <View style={[styles.filter2, styles.filterChildPosition]}>
          <View style={[styles.filterChild, styles.filterChildPosition]} />
          <Text style={[styles.popular, styles.sortByTypo]}>Popular</Text>
          <Image
            style={[styles.filterInner, styles.groupChildLayout]}
            resizeMode="cover"
            source={require("../assets/vector-1251.png")}
          />
        </View>
        <Text style={[styles.sortBy, styles.sortByTypo]}>Sort By:</Text>
      </View>
      <View style={[styles.text, styles.shareLayout]}>
        <Text style={[styles.newHabit, styles.text1Position]}>Courses</Text>
      </View>
      <View style={[styles.header, styles.headerLayout]}>
        <Image
          style={[styles.maskGroupIcon2, styles.filterChildPosition]}
          resizeMode="cover"
          source={require("../assets/mask-group3.png")}
        />
        <Text style={[styles.findWhatFascinates, styles.h41mTypo]}>
          Find what fascinates you as you explore these habit courses.
        </Text>
        <View style={styles.textSize40}>
          <Text style={[styles.text1, styles.text1Position]}>
            Habit courses
          </Text>
        </View>
      </View>
      <Image
        style={[styles.icons, styles.iconsLayout]}
        resizeMode="cover"
        source={require("../assets/icons2.png")}
      />
      <Image
        style={[styles.icons1, styles.iconsLayout]}
        resizeMode="cover"
        source={require("../assets/icons3.png")}
      />
      <Image
        style={styles.menuIcon}
        resizeMode="cover"
        source={require("../assets/menu3.png")}
      />
      <Image
        style={[styles.iconUser, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerLayout: {
    width: 374,
    position: "absolute",
  },
  course1Layout: {
    height: 274,
    width: 374,
    left: 0,
    position: "absolute",
  },
  backgroundLayout: {
    height: 273,
    width: 374,
    left: 0,
    position: "absolute",
  },
  childBg: {
    backgroundColor: Color.white,
    borderRadius: Border.br_xs,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  h41mTypo: {
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    letterSpacing: -0.4,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.darkslateblue,
    position: "absolute",
  },
  shareLayout: {
    height: 32,
    position: "absolute",
  },
  filterChildPosition: {
    bottom: "0%",
    height: "100%",
    top: "0%",
    position: "absolute",
  },
  filtersLayout: {
    lineHeight: 13,
    fontSize: FontSize.size_sm,
    letterSpacing: -0.4,
  },
  groupChildLayout: {
    height: 18,
    width: 24,
    position: "absolute",
  },
  sortByTypo: {
    top: "27.27%",
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.darkslateblue,
    position: "absolute",
  },
  text1Position: {
    lineHeight: 32,
    top: "0%",
    color: Color.darkslateblue,
    position: "absolute",
  },
  iconsLayout: {
    height: 65,
    width: 64,
    top: 28,
    position: "absolute",
    overflow: "hidden",
  },
  backgroundIcon: {
    top: 488,
    width: 555,
    height: 543,
    left: 0,
    position: "absolute",
  },
  backgroundChild: {
    height: 273,
    width: 374,
    left: 0,
    position: "absolute",
    top: 0,
  },
  backgroundItem: {
    height: "0.65%",
    top: "15.34%",
    bottom: "84.01%",
    left: "0%",
    width: "100%",
    right: "0%",
    position: "absolute",
  },
  background: {
    top: 1,
  },
  maskGroupIcon: {
    height: 166,
    top: 0,
    left: 0,
  },
  dayJournalChallenge: {
    top: -4,
    lineHeight: 25,
    textAlign: "left",
    color: Color.darkslateblue,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    letterSpacing: -0.5,
    fontSize: FontSize.size_lg,
    width: 340,
    left: 0,
    position: "absolute",
  },
  h41m: {
    top: "62.79%",
    lineHeight: 14,
    width: "23.55%",
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    letterSpacing: -0.4,
    fontSize: FontSize.size_xs,
    left: "0%",
  },
  lessons: {
    top: "83.72%",
    opacity: 0.5,
    lineHeight: 14,
    width: "23.55%",
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    letterSpacing: -0.4,
    fontSize: FontSize.size_xs,
    left: "0%",
  },
  sharePostChild: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.darkslateblue,
    opacity: 0.1,
    left: "0%",
    width: "100%",
    right: "0%",
  },
  vectorIcon: {
    height: "42.01%",
    width: "31.51%",
    top: "28.13%",
    right: "34.11%",
    bottom: "29.86%",
    left: "34.38%",
    position: "absolute",
  },
  sharePost: {
    top: 54,
    left: 318,
    width: 32,
    height: 32,
  },
  course2: {
    top: 178,
    left: 12,
    height: 86,
    width: 340,
    position: "absolute",
  },
  backgroundParent: {
    top: 0,
  },
  sharePost1: {
    top: 232,
    left: 330,
    width: 32,
    height: 32,
  },
  course1: {
    top: 286,
  },
  courses: {
    top: 344,
    height: 560,
    left: 20,
    width: 374,
  },
  filterChild: {
    borderStyle: "solid",
    borderColor: "rgba(87, 51, 83, 0.1)",
    borderWidth: 1,
    left: "0%",
    width: "100%",
    right: "0%",
    backgroundColor: Color.white,
    borderRadius: Border.br_xs,
  },
  filters: {
    color: Color.sandybrown_200,
    top: "0%",
    lineHeight: 13,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    textAlign: "left",
    left: "0%",
    position: "absolute",
  },
  groupChild: {
    left: 60,
    top: 0,
  },
  filtersParent: {
    height: "39.39%",
    width: "70%",
    top: "30.3%",
    right: "10.91%",
    bottom: "30.3%",
    left: "19.09%",
    position: "absolute",
  },
  filter1: {
    width: "29.41%",
    left: "70.59%",
    right: "0%",
  },
  popular: {
    left: "10.38%",
    lineHeight: 13,
    fontSize: FontSize.size_sm,
    letterSpacing: -0.4,
  },
  filterInner: {
    top: 10,
    left: 148,
  },
  filter2: {
    width: "48.93%",
    right: "35.03%",
    left: "16.04%",
  },
  sortBy: {
    fontSize: FontSize.size_base,
    lineHeight: 16,
    letterSpacing: -0.5,
    top: "27.27%",
    left: "0%",
  },
  filter: {
    height: "3.2%",
    width: "90.34%",
    top: "28.61%",
    right: "4.83%",
    bottom: "68.19%",
    left: "4.83%",
    position: "absolute",
  },
  newHabit: {
    left: "10.99%",
    textAlign: "center",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    lineHeight: 32,
    letterSpacing: -0.5,
  },
  text: {
    top: 45,
    left: 162,
    width: 91,
  },
  maskGroupIcon2: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    left: "0%",
    width: "100%",
    right: "0%",
  },
  findWhatFascinates: {
    width: "56.68%",
    top: "59.59%",
    left: "6.68%",
    lineHeight: 18,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    letterSpacing: -0.4,
    fontSize: FontSize.size_xs,
  },
  text1: {
    fontSize: 36,
    letterSpacing: -1.1,
    textTransform: "uppercase",
    fontFamily: FontFamily.klasikRegular,
    textAlign: "left",
    left: "0%",
    width: "100%",
  },
  textSize40: {
    top: 22,
    left: 25,
    width: 144,
    height: 61,
    position: "absolute",
  },
  header: {
    top: 125,
    height: 146,
    left: 20,
    width: 374,
  },
  icons: {
    left: 10,
  },
  icons1: {
    left: 333,
  },
  menuIcon: {
    top: 873,
    width: 414,
    height: 158,
    left: 0,
    position: "absolute",
  },
  iconUser: {
    height: "3.1%",
    width: "6.76%",
    top: "95.93%",
    right: "46.62%",
    bottom: "0.97%",
    left: "46.62%",
    position: "absolute",
  },
  courseOverview: {
    backgroundColor: Color.linen,
    flex: 1,
    height: 1031,
    overflow: "hidden",
    width: "100%",
  },
});

export default CourseOverview;
