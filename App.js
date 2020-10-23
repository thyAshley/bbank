import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStackNavigator, { BottomTab } from "./src/navigator";
import { AuthContext } from "./src/context/AuthContext";

const App = () => {
  const [uid, setUid] = useState(false);
  const login = (email, password) => {
    setUid(3);
  };

  const logout = () => {
    setUid(null);
  };

  return (
    <AuthContext.Provider value={{ uid, login, logout }}>
      <NavigationContainer>
        {uid ? <BottomTab /> : <AppStackNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
