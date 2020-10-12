import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStackNavigator from "./src/navigator";

const App = () => {
  return (
    <NavigationContainer>
      <AppStackNavigator />
    </NavigationContainer>
  );
};

export default App;
