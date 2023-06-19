import React, { memo } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const MonthlyCalendar = memo(() => {
  return (
    <View style={styles.calendar}>
      <View style={[styles.calendar1, styles.calendarLayout1]}>
        <View style={styles.day}>
          <View style={[styles.dayChild, styles.dayChildLayout]} />
          <View style={styles.dateday}>
            <Text style={[styles.sun, styles.sunPosition]}>FRI</Text>
            <Text style={[styles.text, styles.dayTypo]}>6</Text>
          </View>
        </View>
        <View style={[styles.shape, styles.calendarLayout1]}>
          <View style={[styles.squareOuter, styles.squareBg]} />
          <View style={[styles.square, styles.squarePosition1]} />
        </View>
      </View>
      <View style={[styles.calendar2, styles.calendarLayout1]}>
        <View style={styles.day}>
          <View style={[styles.dayChild, styles.dayChildLayout]} />
          <View style={styles.dateday}>
            <Text style={[styles.sun, styles.sunPosition]}>SUN</Text>
            <Text style={[styles.text, styles.dayTypo]}>1</Text>
          </View>
        </View>
        <View style={[styles.shape, styles.calendarLayout1]}>
          <View style={[styles.squareOuter, styles.squareBg]} />
          <View style={[styles.square, styles.squarePosition1]} />
        </View>
      </View>
      <View style={[styles.calendar3, styles.calendarLayout1]}>
        <View style={styles.day}>
          <View style={[styles.dayChild, styles.dayChildLayout]} />
          <View style={styles.dateday}>
            <Text style={[styles.sun, styles.sunPosition]}>THU</Text>
            <Text style={[styles.text, styles.dayTypo]}>5</Text>
          </View>
        </View>
        <View style={[styles.shape, styles.calendarLayout1]}>
          <View style={[styles.squareOuter, styles.squareBg]} />
          <View style={[styles.square, styles.squarePosition1]} />
        </View>
      </View>
      <View style={[styles.calendar4, styles.calendarLayout1]}>
        <View style={styles.day}>
          <View style={[styles.dayChild, styles.dayChildLayout]} />
          <View style={styles.dateday}>
            <Text style={[styles.sun, styles.sunPosition]}>TUE</Text>
            <Text style={[styles.text, styles.dayTypo]}>3</Text>
          </View>
        </View>
        <View style={[styles.shape, styles.calendarLayout1]}>
          <View style={[styles.squareOuter, styles.squareBg]} />
          <View style={[styles.square, styles.squarePosition1]} />
        </View>
      </View>
      <View style={[styles.calendar5, styles.calendarLayout1]}>
        <View style={styles.day}>
          <View style={[styles.dayChild, styles.dayChildLayout]} />
          <View style={styles.dateday}>
            <Text style={[styles.sun, styles.sunPosition]}>MON</Text>
            <Text style={[styles.text, styles.dayTypo]}>2</Text>
          </View>
        </View>
        <View style={[styles.shape, styles.calendarLayout1]}>
          <View style={[styles.squareOuter, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon, styles.squareIconLayout]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
        </View>
      </View>
      <View style={[styles.calendar6, styles.calendarLayout1]}>
        <View style={styles.day}>
          <View style={[styles.dayChild, styles.dayChildLayout]} />
          <View style={styles.dateday}>
            <Text style={[styles.sun, styles.sunPosition]}>WED</Text>
            <Text style={[styles.text, styles.dayTypo]}>4</Text>
          </View>
        </View>
        <View style={[styles.shape, styles.calendarLayout1]}>
          <View style={[styles.squareOuter, styles.squareBg]} />
        </View>
      </View>
      <View style={[styles.calendar7, styles.calendarLayout1]}>
        <View style={styles.day}>
          <View style={[styles.dayChild, styles.dayChildLayout]} />
          <View style={styles.dateday}>
            <Text style={[styles.sun, styles.sunPosition]}>SAT</Text>
            <Text style={[styles.text, styles.dayTypo]}>7</Text>
          </View>
        </View>
        <View style={[styles.shape, styles.calendarLayout1]}>
          <View style={[styles.squareOuter, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon, styles.squareIconLayout]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
        </View>
      </View>
      <View style={[styles.calendarDate, styles.calendarLayout]}>
        <View style={[styles.dayChild, styles.dayChildLayout]} />
        <View style={[styles.day7, styles.dayPosition3]}>
          <Text style={[styles.day8, styles.dayTypo]}>8</Text>
        </View>
        <View style={styles.square4}>
          <View style={[styles.squareOuter7, styles.squareBg]} />
          <Image
            style={styles.squareHalfIcon2}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square5, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate1, styles.calendarLayout]}>
        <View style={[styles.dayChild, styles.dayChildLayout]} />
        <View style={[styles.day7, styles.dayPosition3]}>
          <Text style={[styles.day8, styles.dayTypo]}>9</Text>
        </View>
        <View style={styles.square4}>
          <View style={[styles.squareOuter7, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon3, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={styles.square7} />
        </View>
      </View>
      <View style={[styles.calendarDate2, styles.calendarLayout]}>
        <View style={[styles.dayChild, styles.dayChildLayout]} />
        <View style={[styles.day11, styles.dayPosition2]}>
          <Text style={[styles.day8, styles.dayTypo]}>10</Text>
        </View>
        <View style={styles.square4}>
          <View style={[styles.squareOuter7, styles.squareBg]} />
          <Image
            style={styles.squareHalfIcon2}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square5, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate3, styles.calendarPosition2]}>
        <View style={[styles.dayChild, styles.dayChildLayout]} />
        <View style={[styles.day13, styles.dayPosition2]}>
          <Text style={[styles.day8, styles.dayTypo]}>15</Text>
        </View>
        <View style={styles.square4}>
          <View style={[styles.squareOuter7, styles.squareBg]} />
          <Image
            style={styles.squareHalfIcon2}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square5, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate4, styles.calendarPosition1]}>
        <View style={[styles.dayChild, styles.dayChildLayout]} />
        <View style={[styles.day15, styles.dayPosition1]}>
          <Text style={[styles.day8, styles.dayTypo]}>22</Text>
        </View>
        <View style={styles.square4}>
          <View style={[styles.squareOuter7, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon3, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square5, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate5, styles.calendarPosition1]}>
        <View style={[styles.dayChild, styles.dayChildLayout]} />
        <View style={[styles.day15, styles.dayPosition1]}>
          <Text style={[styles.day8, styles.dayTypo]}>23</Text>
        </View>
        <View style={styles.square4}>
          <View style={[styles.squareOuter7, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon3, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square5, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate6, styles.calendarPosition1]}>
        <View style={[styles.dayChild, styles.dayChildLayout]} />
        <View style={[styles.day15, styles.dayPosition1]}>
          <Text style={[styles.day8, styles.dayTypo]}>24</Text>
        </View>
        <View style={styles.square4}>
          <View style={[styles.squareOuter7, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon3, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square5, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate7, styles.calendarPosition]}>
        <View style={[styles.dayChild, styles.dayChildLayout]} />
        <View style={[styles.day15, styles.dayPosition1]}>
          <Text style={[styles.day8, styles.dayTypo]}>29</Text>
        </View>
        <View style={styles.square4}>
          <View style={[styles.squareOuter7, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon3, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square5, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate8, styles.calendarPosition]}>
        <View style={[styles.dayChild, styles.dayChildLayout]} />
        <View style={[styles.day15, styles.dayPosition1]}>
          <Text style={[styles.day8, styles.dayTypo]}>30</Text>
        </View>
        <View style={styles.square4}>
          <View style={[styles.squareOuter7, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon3, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square5, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate9, styles.calendarPosition]}>
        <View style={[styles.dayChild, styles.dayChildLayout]} />
        <View style={[styles.day13, styles.dayPosition2]}>
          <Text style={[styles.day8, styles.dayTypo]}>31</Text>
        </View>
        <View style={styles.square4}>
          <View style={[styles.squareOuter7, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon3, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square5, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate10, styles.calendarPosition1]}>
        <View style={[styles.dayChild, styles.dayChildLayout]} />
        <View style={[styles.day15, styles.dayPosition1]}>
          <Text style={[styles.day8, styles.dayTypo]}>25</Text>
        </View>
        <View style={styles.square4}>
          <View style={[styles.squareOuter7, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon3, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square5, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate11, styles.calendarPosition1]}>
        <View style={[styles.dayChild, styles.dayChildLayout]} />
        <View style={[styles.day15, styles.dayPosition1]}>
          <Text style={[styles.day8, styles.dayTypo]}>26</Text>
        </View>
        <View style={styles.square4}>
          <View style={[styles.squareOuter7, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon3, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square5, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate12, styles.calendarPosition1]}>
        <View style={[styles.dayChild, styles.dayChildLayout]} />
        <View style={[styles.day31, styles.dayPosition1]}>
          <Text style={[styles.day8, styles.dayTypo]}>27</Text>
        </View>
        <View style={styles.square4}>
          <View style={[styles.squareOuter7, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon3, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square5, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate13, styles.calendarPosition1]}>
        <View style={[styles.dayChild, styles.dayChildLayout]} />
        <View style={[styles.day15, styles.dayPosition1]}>
          <Text style={[styles.day8, styles.dayTypo]}>28</Text>
        </View>
        <View style={styles.square4}>
          <View style={[styles.squareOuter7, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon3, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square5, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate14, styles.calendarPosition]}>
        <View style={[styles.rectangle14, styles.sunPosition]} />
        <View style={[styles.day35, styles.dayPosition4]}>
          <Text style={[styles.day36, styles.dayPosition]}>1</Text>
        </View>
        <View style={styles.square4}>
          <View style={[styles.squareOuter7, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon3, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square5, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate15, styles.calendarPosition]}>
        <View style={[styles.rectangle14, styles.sunPosition]} />
        <View style={[styles.day37, styles.dayPosition]}>
          <Text style={[styles.day8, styles.dayTypo]}>2</Text>
        </View>
        <View style={styles.square4}>
          <View style={[styles.squareOuter7, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon3, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square5, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate16, styles.calendarPosition]}>
        <View style={[styles.rectangle14, styles.sunPosition]} />
        <View style={[styles.day7, styles.dayPosition3]}>
          <Text style={[styles.day36, styles.dayPosition]}>3</Text>
        </View>
        <View style={styles.square4}>
          <View style={[styles.squareOuter7, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon3, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square5, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate17, styles.calendarPosition]}>
        <View style={[styles.rectangle14, styles.sunPosition]} />
        <View style={[styles.day37, styles.dayPosition]}>
          <Text style={[styles.day8, styles.dayTypo]}>4</Text>
        </View>
        <View style={styles.square4}>
          <View style={[styles.squareOuter7, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon3, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square5, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate18, styles.calendarPosition2]}>
        <View style={[styles.dayChild, styles.dayChildLayout]} />
        <View style={[styles.day11, styles.dayPosition2]}>
          <Text style={[styles.day8, styles.dayTypo]}>16</Text>
        </View>
        <View style={styles.square4}>
          <View style={[styles.squareOuter7, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon3, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square5, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate19, styles.calendarPosition2]}>
        <View style={[styles.dayChild, styles.dayChildLayout]} />
        <View style={[styles.day13, styles.dayPosition2]}>
          <Text style={[styles.day8, styles.dayTypo]}>17</Text>
        </View>
        <View style={styles.square4}>
          <View style={[styles.squareOuter7, styles.squareBg]} />
          <Image
            style={styles.squareHalfIcon2}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square5, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate20, styles.calendarLayout]}>
        <View style={[styles.dayChild, styles.dayChildLayout]} />
        <View style={[styles.day47, styles.dayPosition4]}>
          <Text style={[styles.day8, styles.dayTypo]}>11</Text>
        </View>
        <View style={styles.square4}>
          <View style={[styles.squareOuter7, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon3, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={styles.square7} />
        </View>
      </View>
      <View style={[styles.calendarDate21, styles.calendarLayout]}>
        <View style={[styles.dayChild, styles.dayChildLayout]} />
        <View style={[styles.day11, styles.dayPosition2]}>
          <Text style={[styles.day8, styles.dayTypo]}>12</Text>
        </View>
        <View style={styles.square4}>
          <View style={[styles.squareOuter7, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon3, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={styles.square7} />
        </View>
      </View>
      <View style={[styles.calendarDate22, styles.calendarLayout]}>
        <View style={[styles.dayChild, styles.dayChildLayout]} />
        <View style={[styles.day13, styles.dayPosition2]}>
          <Text style={[styles.day8, styles.dayTypo]}>13</Text>
        </View>
        <View style={styles.square4}>
          <View style={[styles.squareOuter7, styles.squareBg]} />
          <Image
            style={styles.squareHalfIcon2}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square5, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate23, styles.calendarLayout]}>
        <View style={[styles.dayChild, styles.dayChildLayout]} />
        <View style={[styles.day11, styles.dayPosition2]}>
          <Text style={[styles.day8, styles.dayTypo]}>14</Text>
        </View>
        <View style={styles.square4}>
          <View style={[styles.squareOuter7, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon3, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square5, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate24, styles.calendarPosition2]}>
        <View style={[styles.dayChild, styles.dayChildLayout]} />
        <View style={[styles.day11, styles.dayPosition2]}>
          <Text style={[styles.day8, styles.dayTypo]}>18</Text>
        </View>
        <View style={styles.square4}>
          <View style={[styles.squareOuter7, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon3, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square5, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate25, styles.calendarPosition2]}>
        <View style={[styles.dayChild, styles.dayChildLayout]} />
        <View style={[styles.day11, styles.dayPosition2]}>
          <Text style={[styles.day8, styles.dayTypo]}>19</Text>
        </View>
        <View style={styles.square4}>
          <View style={[styles.squareOuter7, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon3, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square5, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate26, styles.calendarPosition2]}>
        <View style={[styles.dayChild, styles.dayChildLayout]} />
        <View style={[styles.day59, styles.dayPosition4]}>
          <Text style={[styles.day8, styles.dayTypo]}>20</Text>
        </View>
        <View style={styles.square4}>
          <View style={[styles.squareOuter7, styles.squareBg]} />
          <Image
            style={styles.squareHalfIcon2}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square5, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate27, styles.calendarPosition2]}>
        <View style={[styles.dayChild, styles.dayChildLayout]} />
        <View style={[styles.day11, styles.dayPosition2]}>
          <Text style={[styles.day8, styles.dayTypo]}>21</Text>
        </View>
        <View style={styles.square4}>
          <View style={[styles.squareOuter7, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon3, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square5, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.month, styles.monthPosition]}>
        <View style={styles.monthChild} />
        <View style={styles.vectorParent}>
          <Image
            style={[styles.groupChild, styles.groupLayout]}
            resizeMode="cover"
            source={require("../assets/vector7.png")}
          />
          <Image
            style={[styles.groupItem, styles.groupLayout]}
            resizeMode="cover"
            source={require("../assets/vector8.png")}
          />
          <Text style={[styles.january, styles.sunTypo]}>January</Text>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  calendarLayout1: {
    overflow: "hidden",
    width: 55,
    position: "absolute",
  },
  dayChildLayout: {
    backgroundColor: Color.linen,
    borderRadius: Border.br_xs,
    bottom: "0%",
    right: "0%",
    height: "100%",
  },
  sunPosition: {
    opacity: 0.5,
    left: "0%",
    top: "0%",
    width: "100%",
    position: "absolute",
  },
  dayTypo: {
    letterSpacing: -0.4,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.darkslateblue,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    lineHeight: 13,
  },
  squareBg: {
    opacity: 0.1,
    backgroundColor: Color.sandybrown_200,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  squarePosition1: {
    left: "18.09%",
    right: "19.91%",
    width: "62%",
    height: "62%",
    position: "absolute",
  },
  squareIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  calendarLayout: {
    height: 72,
    top: 161,
    width: 47,
    position: "absolute",
  },
  dayPosition3: {
    left: "42.55%",
    right: "38.3%",
    width: "19.15%",
    bottom: "68.06%",
    top: "13.89%",
    height: "18.06%",
  },
  squarePosition: {
    display: "none",
    bottom: "5.13%",
    top: "5.13%",
    left: "5.13%",
    right: "5.13%",
    width: "89.74%",
    height: "89.74%",
    position: "absolute",
  },
  dayPosition2: {
    left: "36.17%",
    bottom: "68.06%",
    top: "13.89%",
    height: "18.06%",
    position: "absolute",
  },
  calendarPosition2: {
    top: 241,
    height: 72,
    width: 47,
    position: "absolute",
  },
  calendarPosition1: {
    top: 321,
    height: 72,
    width: 47,
    position: "absolute",
  },
  dayPosition1: {
    left: "34.04%",
    bottom: "68.06%",
    top: "13.89%",
    height: "18.06%",
    position: "absolute",
  },
  calendarPosition: {
    top: 401,
    height: 72,
    width: 47,
    position: "absolute",
  },
  dayPosition4: {
    bottom: "68.06%",
    top: "13.89%",
    height: "18.06%",
    position: "absolute",
  },
  dayPosition: {
    opacity: 0.3,
    position: "absolute",
  },
  monthPosition: {
    top: "0%",
    position: "absolute",
  },
  groupLayout: {
    height: 25,
    width: 19,
    top: -1,
    position: "absolute",
  },
  sunTypo: {
    textAlign: "center",
    color: Color.darkslateblue,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
  },
  dayChild: {
    left: "0%",
    top: "0%",
    width: "100%",
    backgroundColor: Color.linen,
    position: "absolute",
  },
  sun: {
    height: "30.56%",
    fontSize: FontSize.size_3xs,
    letterSpacing: -0.3,
    textAlign: "center",
    color: Color.darkslateblue,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    lineHeight: 13,
    opacity: 0.5,
  },
  text: {
    height: "36.11%",
    width: "64%",
    top: "63.89%",
    left: "20%",
    position: "absolute",
  },
  dateday: {
    height: "38.71%",
    width: "53.19%",
    top: "8.6%",
    right: "23.4%",
    bottom: "52.69%",
    left: "23.4%",
    position: "absolute",
  },
  day: {
    top: 4,
    height: 93,
    width: 47,
    left: 4,
    position: "absolute",
  },
  squareOuter: {
    height: "69.09%",
    width: "69.09%",
    top: "14.55%",
    right: "16.36%",
    bottom: "16.36%",
    left: "14.55%",
  },
  square: {
    top: "18.09%",
    bottom: "19.91%",
    backgroundColor: Color.sandybrown_200,
    borderRadius: Border.br_xs,
  },
  shape: {
    top: 46,
    height: 55,
    left: 0,
    overflow: "hidden",
    width: 55,
  },
  calendar1: {
    height: 101,
    top: 56,
    overflow: "hidden",
    width: 55,
    left: 275,
  },
  calendar2: {
    left: 0,
    height: 101,
    top: 56,
    overflow: "hidden",
    width: 55,
  },
  calendar3: {
    left: 220,
    height: 101,
    top: 56,
    overflow: "hidden",
    width: 55,
  },
  calendar4: {
    left: 110,
    height: 101,
    top: 56,
    overflow: "hidden",
    width: 55,
  },
  squareHalfIcon: {
    top: "26.56%",
    bottom: "11.43%",
    left: "18.09%",
    right: "19.91%",
    width: "62%",
    height: "62%",
    position: "absolute",
  },
  calendar5: {
    left: 55,
    height: 101,
    top: 56,
    overflow: "hidden",
    width: 55,
  },
  calendar6: {
    left: 165,
    height: 101,
    top: 56,
    overflow: "hidden",
    width: 55,
  },
  calendar7: {
    left: 330,
    height: 101,
    top: 56,
    overflow: "hidden",
    width: 55,
  },
  day8: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  day7: {
    position: "absolute",
  },
  squareOuter7: {
    left: "0%",
    top: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    opacity: 0.1,
    width: "100%",
  },
  squareHalfIcon2: {
    top: "17.39%",
    bottom: "-7.14%",
    left: "5.13%",
    right: "5.13%",
    width: "89.74%",
    height: "89.74%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  square5: {
    backgroundColor: Color.sandybrown_200,
    borderRadius: Border.br_xs,
  },
  square4: {
    top: 29,
    width: 38,
    height: 38,
    left: 4,
    position: "absolute",
  },
  calendarDate: {
    left: 0,
  },
  squareHalfIcon3: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  square7: {
    bottom: "5.13%",
    top: "5.13%",
    left: "5.13%",
    right: "5.13%",
    width: "89.74%",
    height: "89.74%",
    backgroundColor: Color.sandybrown_200,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  calendarDate1: {
    left: 55,
  },
  day11: {
    width: "31.91%",
    right: "31.91%",
  },
  calendarDate2: {
    left: 110,
  },
  day13: {
    width: "29.79%",
    right: "34.04%",
  },
  calendarDate3: {
    left: 0,
  },
  day15: {
    width: "36.17%",
    right: "29.79%",
  },
  calendarDate4: {
    left: 0,
  },
  calendarDate5: {
    left: 55,
  },
  calendarDate6: {
    left: 110,
  },
  calendarDate7: {
    left: 0,
  },
  calendarDate8: {
    left: 55,
  },
  calendarDate9: {
    left: 110,
  },
  calendarDate10: {
    left: 165,
  },
  calendarDate11: {
    left: 221,
  },
  day31: {
    width: "34.04%",
    right: "31.91%",
  },
  calendarDate12: {
    left: 276,
  },
  calendarDate13: {
    left: 331,
  },
  rectangle14: {
    backgroundColor: Color.linen,
    borderRadius: Border.br_xs,
    bottom: "0%",
    right: "0%",
    height: "100%",
  },
  day36: {
    letterSpacing: -0.4,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.darkslateblue,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    lineHeight: 13,
    left: "0%",
    top: "0%",
  },
  day35: {
    width: "14.89%",
    right: "40.43%",
    left: "44.68%",
  },
  calendarDate14: {
    left: 165,
  },
  day37: {
    left: "42.55%",
    right: "38.3%",
    width: "19.15%",
    bottom: "68.06%",
    top: "13.89%",
    height: "18.06%",
  },
  calendarDate15: {
    left: 220,
  },
  calendarDate16: {
    left: 275,
  },
  calendarDate17: {
    left: 330,
  },
  calendarDate18: {
    left: 55,
  },
  calendarDate19: {
    left: 110,
  },
  day47: {
    width: "25.53%",
    right: "36.17%",
    left: "38.3%",
  },
  calendarDate20: {
    left: 165,
  },
  calendarDate21: {
    left: 220,
  },
  calendarDate22: {
    left: 275,
  },
  calendarDate23: {
    left: 330,
  },
  calendarDate24: {
    left: 165,
  },
  calendarDate25: {
    left: 220,
  },
  day59: {
    width: "38.3%",
    left: "31.91%",
    right: "29.79%",
  },
  calendarDate26: {
    left: 275,
  },
  calendarDate27: {
    left: 330,
  },
  monthChild: {
    backgroundColor: Color.white,
    borderRadius: Border.br_xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  groupChild: {
    left: 323,
  },
  groupItem: {
    left: -7,
  },
  january: {
    left: "41.32%",
    fontSize: FontSize.size_base,
    letterSpacing: -0.5,
    lineHeight: 14,
    top: "0%",
    position: "absolute",
  },
  vectorParent: {
    top: 18,
    left: 20,
    width: 334,
    height: 14,
    position: "absolute",
  },
  month: {
    height: "10.48%",
    width: "96.89%",
    right: "2.07%",
    bottom: "89.52%",
    left: "1.04%",
  },
  calendar: {
    top: 97,
    left: 16,
    width: 386,
    height: 477,
    position: "absolute",
  },
});

export default MonthlyCalendar;
