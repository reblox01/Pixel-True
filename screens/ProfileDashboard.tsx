import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import HabitTrackerContainer from "../components/HabitTrackerContainer";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const ProfileDashboard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profileDashboard}>
      <Image
        style={[styles.icons, styles.iconsLayout]}
        resizeMode="cover"
        source={require("../assets/icons1.png")}
      />
      <View style={[styles.icons1, styles.iconsLayout]}>
        <View style={styles.ellipse} />
        <Image
          style={[styles.editIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/edit.png")}
        />
      </View>
      <View style={styles.text}>
        <Text style={styles.newHabit}>Profile</Text>
      </View>
      <Image
        style={styles.backgroundIcon}
        resizeMode="cover"
        source={require("../assets/background5.png")}
      />
      <View style={styles.filter}>
        <View style={[styles.filterChild, styles.childLayout]} />
        <View style={styles.thisWeekParent}>
          <Text style={[styles.thisWeek, styles.thisWeekTypo]}>This week</Text>
          <Image
            style={styles.groupChild}
            resizeMode="cover"
            source={require("../assets/vector-1251.png")}
          />
        </View>
      </View>
      <HabitTrackerContainer />
      <View style={[styles.setting2, styles.settingPosition]}>
        <View style={[styles.setting2Child, styles.childLayout]} />
        <View style={[styles.setting2Item, styles.childLayout]} />
        <Text style={[styles.longestStreak, styles.daysPosition]}>
          Longest Streak
        </Text>
        <Text style={[styles.days, styles.daysPosition]}>20 Days</Text>
        <Image
          style={[styles.setting2Inner, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector7.png")}
        />
        <Image
          style={[styles.layer38Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/layer-38.png")}
        />
      </View>
      <View style={[styles.totalWorkHours, styles.taskCompletedPosition]}>
        <View style={[styles.totalWorkHoursChild, styles.childPosition]} />
        <Image
          style={[styles.glyphIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/glyph.png")}
        />
        <View style={[styles.parent, styles.groupPosition]}>
          <Text style={[styles.text1, styles.textTypo]}>18</Text>
          <Text style={[styles.totalWorkHours1, styles.name1Typo]}>
            Total Work Hours
          </Text>
        </View>
      </View>
      <View style={[styles.taskCompleted, styles.taskCompletedPosition]}>
        <View style={[styles.taskCompletedChild, styles.childPosition]} />
        <Image
          style={[styles.groupIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/group1.png")}
        />
        <View style={[styles.group, styles.groupPosition]}>
          <Text style={[styles.text2, styles.textTypo]}>12</Text>
          <Text style={[styles.totalWorkHours1, styles.name1Typo]}>
            Task Completed
          </Text>
        </View>
      </View>
      <Image
        style={styles.imageIcon}
        resizeMode="cover"
        source={require("../assets/image3.png")}
      />
      <View style={[styles.name, styles.nameLayout]}>
        <Text style={[styles.marilynAminoff, styles.name1Position]}>
          Marilyn Aminoff
        </Text>
        <Text style={[styles.name1, styles.name1Position]}>Name</Text>
      </View>
      <Image
        style={styles.menuIcon}
        resizeMode="cover"
        source={require("../assets/menu5.png")}
      />
      <Image
        style={[styles.iconUser, styles.nameLayout]}
        resizeMode="cover"
        source={require("../assets/-icon-user.png")}
      />
      <Image
        style={styles.menuButtonIcon}
        resizeMode="cover"
        source={require("../assets/menu-button2.png")}
      />
      <View style={[styles.setting1, styles.settingPosition]}>
        <View style={[styles.setting2Child, styles.childLayout]} />
        <View style={[styles.setting2Item, styles.childLayout]} />
        <Text style={[styles.longestStreak, styles.daysPosition]}>
          Billing methods
        </Text>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector12.png")}
        />
        <Image
          style={[styles.setting2Inner, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector7.png")}
        />
      </View>
      <Pressable
        style={styles.community}
        onPress={() => navigation.navigate("CommunityPage")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/community.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconsLayout: {
    height: 65,
    width: 64,
    top: 28,
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  childLayout: {
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  thisWeekTypo: {
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  settingPosition: {
    height: "5.58%",
    left: "4.83%",
    right: "4.83%",
    width: "90.34%",
    position: "absolute",
  },
  daysPosition: {
    lineHeight: 16,
    top: "34%",
    fontSize: FontSize.size_base,
    color: Color.darkslateblue,
    letterSpacing: -0.5,
    position: "absolute",
  },
  taskCompletedPosition: {
    bottom: "70.42%",
    top: "25.11%",
    width: "37.44%",
    height: "4.46%",
    position: "absolute",
  },
  childPosition: {
    borderRadius: Border.br_xl,
    left: "74.19%",
    width: "25.81%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    top: "0%",
    opacity: 0.1,
    position: "absolute",
  },
  groupPosition: {
    top: "2.5%",
    left: "0%",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.klasikRegular,
    letterSpacing: -1.2,
    fontSize: FontSize.size_5xl,
    lineHeight: 16,
    textAlign: "left",
    left: "0%",
    color: Color.darkslateblue,
    position: "absolute",
  },
  name1Typo: {
    opacity: 0.5,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    letterSpacing: -0.4,
  },
  nameLayout: {
    height: "3.57%",
    position: "absolute",
  },
  name1Position: {
    lineHeight: 14,
    textAlign: "left",
    left: "0%",
    color: Color.darkslateblue,
    position: "absolute",
  },
  icons: {
    left: 10,
  },
  ellipse: {
    height: "67.69%",
    width: "68.75%",
    top: "16.92%",
    right: "15.63%",
    bottom: "15.38%",
    left: "15.63%",
    borderRadius: Border.br_6xl,
    backgroundColor: Color.darkslateblue,
    opacity: 0.1,
    position: "absolute",
  },
  editIcon: {
    height: "26.77%",
    width: "27.19%",
    top: "38.15%",
    right: "35.62%",
    bottom: "35.08%",
    left: "37.19%",
    position: "absolute",
  },
  icons1: {
    left: 333,
  },
  newHabit: {
    left: "19.78%",
    fontSize: FontSize.size_lg,
    lineHeight: 32,
    textAlign: "center",
    color: Color.darkslateblue,
    letterSpacing: -0.5,
    top: "0%",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    position: "absolute",
  },
  text: {
    top: 45,
    left: 162,
    width: 91,
    height: 32,
    position: "absolute",
  },
  backgroundIcon: {
    height: "28.91%",
    top: "13.95%",
    bottom: "57.14%",
    left: "4.83%",
    right: "4.83%",
    width: "90.34%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  filterChild: {
    borderStyle: "solid",
    borderColor: "rgba(87, 51, 83, 0.1)",
    borderWidth: 1,
    left: "0%",
    bottom: "0%",
    right: "0%",
    borderRadius: Border.br_xs,
    height: "100%",
    top: "0%",
    width: "100%",
  },
  thisWeek: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    lineHeight: 13,
    left: "0%",
    color: Color.darkslateblue,
    top: "0%",
    position: "absolute",
    letterSpacing: -0.4,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
  },
  groupChild: {
    top: 0,
    left: 71,
    width: 24,
    height: 18,
    position: "absolute",
  },
  thisWeekParent: {
    height: "39.39%",
    width: "80%",
    top: "30.3%",
    right: "10.91%",
    bottom: "30.3%",
    left: "9.09%",
    position: "absolute",
  },
  filter: {
    height: "3.68%",
    width: "26.57%",
    top: "16.29%",
    bottom: "80.02%",
    left: "64.73%",
    right: "8.7%",
    position: "absolute",
  },
  setting2Child: {
    backgroundColor: Color.white,
    left: "0%",
    bottom: "0%",
    right: "0%",
    borderRadius: Border.br_xs,
    height: "100%",
    top: "0%",
    width: "100%",
  },
  setting2Item: {
    height: "76%",
    width: "10.16%",
    top: "12%",
    right: "88.24%",
    bottom: "12%",
    left: "1.6%",
    backgroundColor: Color.sandybrown_100,
    opacity: 0.1,
  },
  longestStreak: {
    left: "15.51%",
    textAlign: "left",
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
  },
  days: {
    left: "75.4%",
    textAlign: "right",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    top: "34%",
  },
  setting2Inner: {
    height: "49%",
    width: "4.95%",
    top: "29.5%",
    right: "3.41%",
    bottom: "21.5%",
    left: "91.64%",
    position: "absolute",
  },
  layer38Icon: {
    height: "42.38%",
    width: "4.01%",
    top: "29.17%",
    right: "91.44%",
    bottom: "28.45%",
    left: "4.55%",
    position: "absolute",
  },
  setting2: {
    top: "50.22%",
    bottom: "44.2%",
  },
  totalWorkHoursChild: {
    backgroundColor: Color.sandybrown_100,
  },
  glyphIcon: {
    height: "45%",
    width: "11.61%",
    top: "27.5%",
    right: "7.1%",
    bottom: "27.5%",
    left: "81.29%",
    position: "absolute",
  },
  text1: {
    top: "56.76%",
  },
  totalWorkHours1: {
    textAlign: "left",
    lineHeight: 13,
    left: "0%",
    color: Color.darkslateblue,
    top: "0%",
    position: "absolute",
  },
  parent: {
    height: "92.5%",
    width: "58.06%",
    right: "41.94%",
    bottom: "5%",
  },
  totalWorkHours: {
    right: "53.86%",
    left: "8.7%",
  },
  taskCompletedChild: {
    backgroundColor: Color.midnightblue,
  },
  groupIcon: {
    height: "48.33%",
    width: "9.35%",
    top: "25%",
    right: "8.06%",
    bottom: "26.67%",
    left: "82.58%",
    position: "absolute",
  },
  text2: {
    top: "57.89%",
  },
  group: {
    height: "95%",
    width: "55.48%",
    right: "44.52%",
    bottom: "2.5%",
  },
  taskCompleted: {
    left: "53.86%",
    right: "8.7%",
  },
  imageIcon: {
    top: 137,
    left: 36,
    width: 60,
    height: 60,
    position: "absolute",
  },
  marilynAminoff: {
    fontSize: FontSize.size_base,
    lineHeight: 14,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    letterSpacing: -0.5,
    top: "0%",
  },
  name1: {
    top: "56.25%",
    opacity: 0.5,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    letterSpacing: -0.4,
  },
  name: {
    width: "28.02%",
    top: "16.85%",
    right: "46.38%",
    bottom: "79.58%",
    left: "25.6%",
  },
  menuIcon: {
    top: 772,
    left: 0,
    width: 414,
    height: 124,
    position: "absolute",
  },
  iconUser: {
    width: "6.76%",
    top: "95.42%",
    right: "46.62%",
    bottom: "1%",
    left: "46.62%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  menuButtonIcon: {
    top: 722,
    left: 125,
    width: 164,
    height: 194,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    height: "28%",
    width: "5.35%",
    top: "36%",
    right: "90.64%",
    bottom: "36%",
    left: "4.01%",
    position: "absolute",
  },
  setting1: {
    top: "43.75%",
    bottom: "50.67%",
  },
  icon: {
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  community: {
    left: "65.46%",
    top: "93.97%",
    right: "24.88%",
    bottom: "1.9%",
    width: "9.66%",
    height: "4.12%",
    position: "absolute",
  },
  profileDashboard: {
    backgroundColor: Color.linen,
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default ProfileDashboard;
