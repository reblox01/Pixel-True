import React, { memo } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const CalendarContainer = memo(() => {
  return (
    <View style={styles.calendar}>
      <View style={styles.rectangle} />
      <View style={[styles.calendarDate, styles.calendarLayout]}>
        <View style={styles.rectangle1} />
        <View style={[styles.day, styles.dayPosition4]}>
          <Text style={[styles.day1, styles.dayTypo]}>8</Text>
        </View>
        <View style={styles.square}>
          <View style={[styles.squareOuter, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon, styles.squareIconLayout]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square1, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate1, styles.calendarLayout]}>
        <View style={styles.rectangle1} />
        <View style={[styles.day, styles.dayPosition4]}>
          <Text style={[styles.day1, styles.dayTypo]}>9</Text>
        </View>
        <View style={styles.square}>
          <View style={[styles.squareOuter, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon1, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={styles.square3} />
        </View>
      </View>
      <View style={[styles.calendarDate2, styles.calendarLayout]}>
        <View style={styles.rectangle1} />
        <View style={[styles.day4, styles.dayPosition3]}>
          <Text style={[styles.day1, styles.dayTypo]}>10</Text>
        </View>
        <View style={styles.square}>
          <View style={[styles.squareOuter, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon, styles.squareIconLayout]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square1, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate3, styles.calendarPosition3]}>
        <View style={styles.rectangle1} />
        <View style={[styles.day6, styles.dayPosition3]}>
          <Text style={[styles.day1, styles.dayTypo]}>15</Text>
        </View>
        <View style={styles.square}>
          <View style={[styles.squareOuter, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon, styles.squareIconLayout]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square1, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate4, styles.calendarPosition2]}>
        <View style={styles.rectangle1} />
        <View style={[styles.day8, styles.dayPosition2]}>
          <Text style={[styles.day1, styles.dayTypo]}>22</Text>
        </View>
        <View style={styles.square}>
          <View style={[styles.squareOuter, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon1, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square1, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate5, styles.calendarPosition2]}>
        <View style={styles.rectangle1} />
        <View style={[styles.day8, styles.dayPosition2]}>
          <Text style={[styles.day1, styles.dayTypo]}>23</Text>
        </View>
        <View style={styles.square}>
          <View style={[styles.squareOuter, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon1, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square1, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate6, styles.calendarPosition2]}>
        <View style={styles.rectangle1} />
        <View style={[styles.day8, styles.dayPosition2]}>
          <Text style={[styles.day1, styles.dayTypo]}>24</Text>
        </View>
        <View style={styles.square}>
          <View style={[styles.squareOuter, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon1, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square1, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate7, styles.calendarPosition1]}>
        <View style={styles.rectangle1} />
        <View style={[styles.day8, styles.dayPosition2]}>
          <Text style={[styles.day1, styles.dayTypo]}>29</Text>
        </View>
        <View style={styles.square}>
          <View style={[styles.squareOuter, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon1, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square1, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate8, styles.calendarPosition1]}>
        <View style={styles.rectangle1} />
        <View style={[styles.day8, styles.dayPosition2]}>
          <Text style={[styles.day1, styles.dayTypo]}>30</Text>
        </View>
        <View style={styles.square}>
          <View style={[styles.squareOuter, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon1, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square1, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate9, styles.calendarPosition1]}>
        <View style={styles.rectangle1} />
        <View style={[styles.day6, styles.dayPosition3]}>
          <Text style={[styles.day1, styles.dayTypo]}>31</Text>
        </View>
        <View style={styles.square}>
          <View style={[styles.squareOuter, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon1, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square1, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate10, styles.calendarPosition2]}>
        <View style={styles.rectangle1} />
        <View style={[styles.day8, styles.dayPosition2]}>
          <Text style={[styles.day1, styles.dayTypo]}>25</Text>
        </View>
        <View style={styles.square}>
          <View style={[styles.squareOuter, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon1, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square1, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate11, styles.calendarPosition2]}>
        <View style={styles.rectangle1} />
        <View style={[styles.day8, styles.dayPosition2]}>
          <Text style={[styles.day1, styles.dayTypo]}>26</Text>
        </View>
        <View style={styles.square}>
          <View style={[styles.squareOuter, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon1, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square1, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate12, styles.calendarPosition2]}>
        <View style={styles.rectangle1} />
        <View style={[styles.day24, styles.dayPosition2]}>
          <Text style={[styles.day1, styles.dayTypo]}>27</Text>
        </View>
        <View style={styles.square}>
          <View style={[styles.squareOuter, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon1, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square1, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate13, styles.calendarPosition2]}>
        <View style={styles.rectangle1} />
        <View style={[styles.day8, styles.dayPosition2]}>
          <Text style={[styles.day1, styles.dayTypo]}>28</Text>
        </View>
        <View style={styles.square}>
          <View style={[styles.squareOuter, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon1, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square1, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate14, styles.calendarPosition1]}>
        <View style={styles.rectangle15} />
        <View style={[styles.day28, styles.dayPosition1]}>
          <Text style={[styles.day29, styles.dayPosition]}>1</Text>
        </View>
        <View style={styles.square}>
          <View style={[styles.squareOuter, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon1, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square1, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate15, styles.calendarPosition1]}>
        <View style={styles.rectangle15} />
        <View style={[styles.day30, styles.dayPosition]}>
          <Text style={[styles.day1, styles.dayTypo]}>2</Text>
        </View>
        <View style={styles.square}>
          <View style={[styles.squareOuter, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon1, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square1, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate16, styles.calendarPosition1]}>
        <View style={styles.rectangle15} />
        <View style={[styles.day, styles.dayPosition4]}>
          <Text style={[styles.day29, styles.dayPosition]}>3</Text>
        </View>
        <View style={styles.square}>
          <View style={[styles.squareOuter, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon1, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square1, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate17, styles.calendarPosition1]}>
        <View style={styles.rectangle15} />
        <View style={[styles.day30, styles.dayPosition]}>
          <Text style={[styles.day1, styles.dayTypo]}>4</Text>
        </View>
        <View style={styles.square}>
          <View style={[styles.squareOuter, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon1, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square1, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate18, styles.calendarPosition3]}>
        <View style={styles.rectangle1} />
        <View style={[styles.day4, styles.dayPosition3]}>
          <Text style={[styles.day1, styles.dayTypo]}>16</Text>
        </View>
        <View style={styles.square}>
          <View style={[styles.squareOuter, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon1, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square1, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate19, styles.calendarPosition3]}>
        <View style={styles.rectangle1} />
        <View style={[styles.day6, styles.dayPosition3]}>
          <Text style={[styles.day1, styles.dayTypo]}>17</Text>
        </View>
        <View style={styles.square}>
          <View style={[styles.squareOuter, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon, styles.squareIconLayout]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square1, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate20, styles.calendarLayout]}>
        <View style={styles.rectangle1} />
        <View style={[styles.day40, styles.dayPosition4]}>
          <Text style={[styles.day1, styles.dayTypo]}>11</Text>
        </View>
        <View style={styles.square}>
          <View style={[styles.squareOuter, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon1, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={styles.square3} />
        </View>
      </View>
      <View style={[styles.calendarDate21, styles.calendarPosition]}>
        <View style={styles.rectangle1} />
        <View style={[styles.day28, styles.dayPosition1]}>
          <Text style={[styles.day1, styles.dayTypo]}>1</Text>
        </View>
        <View style={styles.square}>
          <View style={[styles.squareOuter, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon1, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={styles.square3} />
        </View>
      </View>
      <View style={[styles.calendarDate22, styles.calendarPosition]}>
        <View style={styles.rectangle1} />
        <View style={[styles.day, styles.dayPosition4]}>
          <Text style={[styles.day1, styles.dayTypo]}>2</Text>
        </View>
        <View style={styles.square}>
          <View style={[styles.squareOuter, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon, styles.squareIconLayout]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square1, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate23, styles.calendarPosition]}>
        <View style={styles.rectangle1} />
        <View style={[styles.day46, styles.dayPosition1]}>
          <Text style={[styles.day1, styles.dayTypo]}>7</Text>
        </View>
        <View style={styles.square}>
          <View style={[styles.squareOuter, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon, styles.squareIconLayout]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square1, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate24, styles.calendarPosition]}>
        <View style={styles.rectangle1} />
        <View style={[styles.day, styles.dayPosition4]}>
          <Text style={[styles.day1, styles.dayTypo]}>3</Text>
        </View>
        <View style={styles.square}>
          <View style={[styles.squareOuter, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon1, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={styles.square3} />
        </View>
      </View>
      <View style={[styles.calendarDate25, styles.calendarPosition]}>
        <View style={styles.rectangle1} />
        <View style={[styles.day, styles.dayPosition4]}>
          <Text style={[styles.day1, styles.dayTypo]}>5</Text>
        </View>
        <View style={styles.square}>
          <View style={[styles.squareOuter, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon1, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={styles.square3} />
        </View>
      </View>
      <View style={[styles.calendarDate26, styles.calendarPosition]}>
        <View style={styles.rectangle1} />
        <View style={[styles.day, styles.dayPosition4]}>
          <Text style={[styles.day1, styles.dayTypo]}>6</Text>
        </View>
        <View style={styles.square}>
          <View style={[styles.squareOuter, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon1, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={styles.square3} />
        </View>
      </View>
      <View style={[styles.calendarDate27, styles.calendarLayout]}>
        <View style={styles.rectangle1} />
        <View style={[styles.day4, styles.dayPosition3]}>
          <Text style={[styles.day1, styles.dayTypo]}>12</Text>
        </View>
        <View style={styles.square}>
          <View style={[styles.squareOuter, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon1, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={styles.square3} />
        </View>
      </View>
      <View style={[styles.calendarDate28, styles.calendarLayout]}>
        <View style={styles.rectangle1} />
        <View style={[styles.day6, styles.dayPosition3]}>
          <Text style={[styles.day1, styles.dayTypo]}>13</Text>
        </View>
        <View style={styles.square}>
          <View style={[styles.squareOuter, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon, styles.squareIconLayout]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square1, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate29, styles.calendarLayout]}>
        <View style={styles.rectangle1} />
        <View style={[styles.day4, styles.dayPosition3]}>
          <Text style={[styles.day1, styles.dayTypo]}>14</Text>
        </View>
        <View style={styles.square}>
          <View style={[styles.squareOuter, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon1, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square1, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate30, styles.calendarPosition]}>
        <View style={styles.rectangle1} />
        <View style={[styles.day, styles.dayPosition4]}>
          <Text style={[styles.day1, styles.dayTypo]}>4</Text>
        </View>
        <View style={styles.square}>
          <View style={[styles.squareOuter, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon1, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square1, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate31, styles.calendarPosition3]}>
        <View style={styles.rectangle1} />
        <View style={[styles.day4, styles.dayPosition3]}>
          <Text style={[styles.day1, styles.dayTypo]}>18</Text>
        </View>
        <View style={styles.square}>
          <View style={[styles.squareOuter, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon1, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square1, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate32, styles.calendarPosition3]}>
        <View style={styles.rectangle1} />
        <View style={[styles.day4, styles.dayPosition3]}>
          <Text style={[styles.day1, styles.dayTypo]}>19</Text>
        </View>
        <View style={styles.square}>
          <View style={[styles.squareOuter, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon1, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square1, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate33, styles.calendarPosition3]}>
        <View style={styles.rectangle1} />
        <View style={[styles.day66, styles.dayPosition4]}>
          <Text style={[styles.day1, styles.dayTypo]}>20</Text>
        </View>
        <View style={styles.square}>
          <View style={[styles.squareOuter, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon, styles.squareIconLayout]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square1, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.calendarDate34, styles.calendarPosition3]}>
        <View style={styles.rectangle1} />
        <View style={[styles.day4, styles.dayPosition3]}>
          <Text style={[styles.day1, styles.dayTypo]}>21</Text>
        </View>
        <View style={styles.square}>
          <View style={[styles.squareOuter, styles.squareBg]} />
          <Image
            style={[styles.squareHalfIcon1, styles.squarePosition]}
            resizeMode="cover"
            source={require("../assets/square-half4.png")}
          />
          <View style={[styles.square1, styles.squarePosition]} />
        </View>
      </View>
      <View style={[styles.month, styles.textLayout]}>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector7.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector8.png")}
        />
        <View style={[styles.text, styles.textLayout]}>
          <Text style={[styles.newHabit, styles.dayTypo]}>January</Text>
        </View>
      </View>
      <Text style={[styles.sun, styles.sunTypo]}>SUN</Text>
      <Text style={[styles.mon, styles.sunTypo]}>MON</Text>
      <Text style={[styles.tue, styles.sunTypo]}>TUE</Text>
      <Text style={[styles.wed, styles.sunTypo]}>WED</Text>
      <Text style={[styles.thu, styles.sunTypo]}>THU</Text>
      <Text style={[styles.fri, styles.sunTypo]}>FRI</Text>
      <Text style={[styles.sat, styles.sunTypo]}>SAT</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  calendarLayout: {
    height: 72,
    width: 47,
    top: 161,
    position: "absolute",
  },
  dayPosition4: {
    bottom: "68.06%",
    top: "13.89%",
    height: "18.06%",
  },
  dayTypo: {
    textAlign: "center",
    color: Color.darkslateblue,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    top: "0%",
  },
  squareBg: {
    backgroundColor: Color.sandybrown_200,
    borderRadius: Border.br_xs,
  },
  squareIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
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
  dayPosition3: {
    left: "36.17%",
    bottom: "68.06%",
    top: "13.89%",
    height: "18.06%",
    position: "absolute",
  },
  calendarPosition3: {
    top: 241,
    height: 72,
    width: 47,
    position: "absolute",
  },
  calendarPosition2: {
    top: 321,
    height: 72,
    width: 47,
    position: "absolute",
  },
  dayPosition2: {
    left: "34.04%",
    bottom: "68.06%",
    top: "13.89%",
    height: "18.06%",
    position: "absolute",
  },
  calendarPosition1: {
    top: 401,
    height: 72,
    width: 47,
    position: "absolute",
  },
  dayPosition1: {
    right: "40.43%",
    bottom: "68.06%",
    top: "13.89%",
    height: "18.06%",
    position: "absolute",
  },
  dayPosition: {
    opacity: 0.3,
    position: "absolute",
  },
  calendarPosition: {
    top: 81,
    height: 72,
    width: 47,
    position: "absolute",
  },
  textLayout: {
    height: 32,
    position: "absolute",
  },
  vectorIconLayout: {
    height: 25,
    width: 19,
    top: 6,
    position: "absolute",
  },
  sunTypo: {
    textAlign: "left",
    lineHeight: 14,
    letterSpacing: -0.3,
    fontSize: FontSize.size_3xs,
    top: 59,
    opacity: 0.5,
    color: Color.darkslateblue,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    position: "absolute",
  },
  rectangle: {
    height: "101.67%",
    bottom: "-1.67%",
    backgroundColor: Color.white,
    borderRadius: Border.br_xs,
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    position: "absolute",
  },
  rectangle1: {
    backgroundColor: Color.linen,
    bottom: "0%",
    height: "100%",
    borderRadius: Border.br_xs,
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    position: "absolute",
  },
  day1: {
    lineHeight: 13,
    letterSpacing: -0.4,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.darkslateblue,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    left: "0%",
    position: "absolute",
  },
  day: {
    left: "42.55%",
    right: "38.3%",
    width: "19.15%",
    bottom: "68.06%",
    top: "13.89%",
    height: "18.06%",
    position: "absolute",
  },
  squareOuter: {
    opacity: 0.1,
    bottom: "0%",
    height: "100%",
    backgroundColor: Color.sandybrown_200,
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    position: "absolute",
  },
  squareHalfIcon: {
    top: "17.39%",
    bottom: "-7.14%",
    left: "5.13%",
    right: "5.13%",
    width: "89.74%",
    height: "89.74%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  square1: {
    backgroundColor: Color.sandybrown_200,
    borderRadius: Border.br_xs,
  },
  square: {
    top: 29,
    left: 4,
    width: 38,
    height: 38,
    position: "absolute",
  },
  calendarDate: {
    left: 5,
  },
  squareHalfIcon1: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  square3: {
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
    left: 58,
  },
  day4: {
    width: "31.91%",
    right: "31.91%",
  },
  calendarDate2: {
    left: 111,
  },
  day6: {
    width: "29.79%",
    right: "34.04%",
  },
  calendarDate3: {
    left: 5,
  },
  day8: {
    width: "36.17%",
    right: "29.79%",
  },
  calendarDate4: {
    left: 5,
  },
  calendarDate5: {
    left: 58,
  },
  calendarDate6: {
    left: 111,
  },
  calendarDate7: {
    left: 5,
  },
  calendarDate8: {
    left: 58,
  },
  calendarDate9: {
    left: 111,
  },
  calendarDate10: {
    left: 164,
  },
  calendarDate11: {
    left: 218,
  },
  day24: {
    width: "34.04%",
    right: "31.91%",
  },
  calendarDate12: {
    left: 271,
  },
  calendarDate13: {
    left: 323,
  },
  rectangle15: {
    opacity: 0.5,
    backgroundColor: Color.linen,
    bottom: "0%",
    height: "100%",
    borderRadius: Border.br_xs,
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    position: "absolute",
  },
  day29: {
    textAlign: "center",
    color: Color.darkslateblue,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    top: "0%",
    lineHeight: 13,
    letterSpacing: -0.4,
    fontSize: FontSize.size_sm,
    left: "0%",
  },
  day28: {
    width: "14.89%",
    left: "44.68%",
  },
  calendarDate14: {
    left: 164,
  },
  day30: {
    left: "42.55%",
    bottom: "68.06%",
    top: "13.89%",
    height: "18.06%",
    right: "38.3%",
    width: "19.15%",
  },
  calendarDate15: {
    left: 217,
  },
  calendarDate16: {
    left: 270,
  },
  calendarDate17: {
    left: 322,
  },
  calendarDate18: {
    left: 58,
  },
  calendarDate19: {
    left: 111,
  },
  day40: {
    width: "25.53%",
    right: "36.17%",
    left: "38.3%",
    bottom: "68.06%",
    top: "13.89%",
    height: "18.06%",
    position: "absolute",
  },
  calendarDate20: {
    left: 164,
  },
  calendarDate21: {
    left: 5,
  },
  calendarDate22: {
    left: 58,
  },
  day46: {
    width: "17.02%",
    left: "42.55%",
  },
  calendarDate23: {
    left: 322,
  },
  calendarDate24: {
    left: 111,
  },
  calendarDate25: {
    left: 217,
  },
  calendarDate26: {
    left: 270,
  },
  calendarDate27: {
    left: 217,
  },
  calendarDate28: {
    left: 270,
  },
  calendarDate29: {
    left: 322,
  },
  calendarDate30: {
    left: 164,
  },
  calendarDate31: {
    left: 164,
  },
  calendarDate32: {
    left: 217,
  },
  day66: {
    width: "38.3%",
    left: "31.91%",
    right: "29.79%",
    bottom: "68.06%",
    top: "13.89%",
    height: "18.06%",
    position: "absolute",
  },
  calendarDate33: {
    left: 270,
  },
  calendarDate34: {
    left: 322,
  },
  vectorIcon: {
    left: 323,
  },
  vectorIcon1: {
    left: -7,
  },
  newHabit: {
    left: "17.58%",
    fontSize: FontSize.size_base,
    letterSpacing: -0.5,
    lineHeight: 32,
    position: "absolute",
  },
  text: {
    top: 0,
    left: 124,
    width: 91,
  },
  month: {
    top: 11,
    width: 334,
    left: 20,
  },
  sun: {
    left: 18,
  },
  mon: {
    left: 71,
  },
  tue: {
    left: 125,
  },
  wed: {
    left: 176,
  },
  thu: {
    left: 232,
  },
  fri: {
    left: 287,
  },
  sat: {
    left: 336,
  },
  calendar: {
    top: 223,
    width: 374,
    height: 478,
    left: 20,
    position: "absolute",
  },
});

export default CalendarContainer;
