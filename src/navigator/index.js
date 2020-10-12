import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screen/SplashScreen";
import RegisterScreen from "../screen/RegisterScreen";

const Stack = createStackNavigator();

const AppStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
