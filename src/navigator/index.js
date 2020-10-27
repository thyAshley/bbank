import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import SplashScreen from "../screen/SplashScreen";
import RegisterScreen from "../screen/RegisterScreen";
import LoginScreen from "../screen/LoginScreen";
import Dashboard from "../screen/Dashboard";
import InProgress from "../screen/InProgress";
import color from "../config/color";
import Account from "../screen/Account";
import payTransfer from "../screen/payTransfer";
import Insights from "../screen/Insights";
import Transaction from "../screen/Transaction";

const Stack = createStackNavigator();
const Insight = createStackNavigator();
const Tab = createBottomTabNavigator();

export const InsightsTab = () => {
  return (
    <Insight.Navigator>
      <Insight.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <Insight.Screen name="Insight" component={Insights} />
      <Insight.Screen name="Transaction" component={Transaction} />
    </Insight.Navigator>
  );
};
export const BottomTab = () => {
  return (
    <Tab.Navigator tabBarOptions={{ activeTintColor: color.secondary }}>
      <Tab.Screen
        name="Dashboard"
        component={InsightsTab}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="home"
              size={24}
              color={focused ? color.secondary : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Pay/Transfer"
        component={payTransfer}
        initialParams={{
          route: null,
        }}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="payment"
              size={24}
              color={focused ? color.secondary : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="BbookBot"
        component={InProgress}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="live-help"
              size={24}
              color={focused ? color.secondary : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="account-box"
              size={24}
              color={focused ? color.secondary : "black"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

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
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Dashboard"
        component={BottomTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Construction"
        component={InProgress}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
