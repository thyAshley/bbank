import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStackNavigator, { BottomTab } from "./src/navigator";
import { AuthContext } from "./src/context/AuthContext";
import Axios from "axios";

const App = () => {
  const [uid, setUid] = useState(false);
  const [bank, setBank] = useState([]);
  const [transfer, setTransfer] = useState(false);
  const [creditCard, setCreditCard] = useState([]);
  const login = async (email, password) => {
    const result = await Axios.post("http://is5009bbank.herokuapp.com/login", {
      Email: email,
      Password: password,
    });
    if (result.status == 200) {
      setUid(result.data.CustomerID);
    }
  };

  const logout = () => {
    setUid(null);
  };

  return (
    <AuthContext.Provider
      value={{
        uid,
        login,
        logout,
        bank,
        setBank,
        creditCard,
        setCreditCard,
        transfer,
        setTransfer,
      }}
    >
      <NavigationContainer>
        {uid ? <BottomTab /> : <AppStackNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
