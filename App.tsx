const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import SplashScreen from "./screens/SplashScreen";
import Introduction1 from "./screens/Introduction1";
import Introduction2 from "./screens/Introduction2";
import Introduction3 from "./screens/Introduction3";
import Introduction4 from "./screens/Introduction4";
import LoginPage from "./screens/LoginPage";
import SignUpPage from "./screens/SignUpPage";
import ResetPassword from "./screens/ResetPassword";
import HomepageTrackingHabits from "./screens/HomepageTrackingHabits";
import HomepageNewHabit from "./screens/HomepageNewHabit";
import HomepageNewHabitReminder from "./screens/HomepageNewHabitReminder";
import HomepageSetTime from "./screens/HomepageSetTime";
import Analytics from "./screens/Analytics";
import CongratulationPopup from "./screens/CongratulationPopup";
import CourseOverview from "./screens/CourseOverview";
import CourseWhatsInside from "./screens/CourseWhatsInside";
import CommunityPage from "./screens/CommunityPage";
import ProfileDashboard from "./screens/ProfileDashboard";
import Settings from "./screens/Settings";
import SubscriptionPage from "./screens/SubscriptionPage";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 4000);
  }, []);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Introduction1"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Introduction1"
              component={Introduction1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Introduction2"
              component={Introduction2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Introduction3"
              component={Introduction3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Introduction4"
              component={Introduction4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginPage"
              component={LoginPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpPage"
              component={SignUpPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ResetPassword"
              component={ResetPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomepageTrackingHabits"
              component={HomepageTrackingHabits}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomepageNewHabit"
              component={HomepageNewHabit}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomepageNewHabitReminder"
              component={HomepageNewHabitReminder}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomepageSetTime"
              component={HomepageSetTime}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Analytics"
              component={Analytics}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CongratulationPopup"
              component={CongratulationPopup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CourseOverview"
              component={CourseOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CourseWhatsInside"
              component={CourseWhatsInside}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CommunityPage"
              component={CommunityPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfileDashboard"
              component={ProfileDashboard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SubscriptionPage"
              component={SubscriptionPage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <SplashScreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
