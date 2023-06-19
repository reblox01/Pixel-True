import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import ColinContainer from "../components/ColinContainer";
import PostAlContainer from "../components/PostAlContainer";
import GretchenContainer from "../components/GretchenContainer";
import PostContainer from "../components/PostContainer";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const CommunityPage = () => {
  return (
    <View style={styles.communityPage}>
      <View style={[styles.background, styles.contentsPosition]}>
        <View style={[styles.backgroundChild, styles.backgroundPosition]} />
        <Image
          style={[styles.backgroundItem, styles.iconUserLayout]}
          resizeMode="cover"
          source={require("../assets/vector-119.png")}
        />
      </View>
      <View style={[styles.contents, styles.contentsPosition]}>
        <ColinContainer />
        <PostAlContainer />
        <GretchenContainer />
        <PostContainer />
      </View>
      <Image
        style={styles.icons}
        resizeMode="cover"
        source={require("../assets/icons2.png")}
      />
      <Image
        style={styles.profileIcon}
        resizeMode="cover"
        source={require("../assets/profile.png")}
      />
      <View style={styles.text}>
        <Text style={[styles.newHabit, styles.newHabitPosition]}>
          Community
        </Text>
      </View>
      <Image
        style={styles.menuIcon}
        resizeMode="cover"
        source={require("../assets/menu4.png")}
      />
      <Image
        style={[styles.iconUser, styles.iconUserLayout]}
        resizeMode="cover"
        source={require("../assets/vector3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentsPosition: {
    left: "4.83%",
    right: "4.83%",
    width: "90.34%",
    position: "absolute",
  },
  backgroundPosition: {
    left: "0%",
    right: "0%",
    width: "100%",
  },
  iconUserLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  newHabitPosition: {
    top: "0%",
    position: "absolute",
  },
  backgroundChild: {
    height: "100%",
    bottom: "0%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.white,
    top: "0%",
    position: "absolute",
  },
  backgroundItem: {
    height: "0.61%",
    top: "31.4%",
    bottom: "67.99%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  background: {
    height: "18.3%",
    top: "33.15%",
    bottom: "48.55%",
  },
  contents: {
    height: "75.89%",
    top: "13.95%",
    bottom: "10.16%",
  },
  icons: {
    top: 28,
    left: 10,
    width: 64,
    height: 65,
    position: "absolute",
    overflow: "hidden",
  },
  profileIcon: {
    top: 39,
    left: 350,
    width: 44,
    height: 44,
    position: "absolute",
  },
  newHabit: {
    left: "-4.4%",
    fontSize: FontSize.size_lg,
    letterSpacing: -0.5,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    color: Color.darkslateblue,
    textAlign: "center",
  },
  text: {
    top: 45,
    left: 162,
    width: 91,
    height: 32,
    position: "absolute",
  },
  menuIcon: {
    top: 738,
    left: 0,
    width: 414,
    height: 158,
    position: "absolute",
  },
  iconUser: {
    height: "3.57%",
    width: "6.76%",
    top: "95.31%",
    right: "46.62%",
    bottom: "1.12%",
    left: "46.62%",
  },
  communityPage: {
    backgroundColor: Color.linen,
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default CommunityPage;
