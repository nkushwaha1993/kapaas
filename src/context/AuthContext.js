import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, createContext, useEffect } from "react";
import { login as loginService } from "../services";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const login = async (username, password) => {
    setIsLoading(true);
    await loginService(username, password)
      .then((response) => {
        setUserInfo(response.user);
        const { id } = response?.session;
        setUserToken(id);
        AsyncStorage.setItem("userInfo", JSON.stringify(response?.session));
        AsyncStorage.setItem("userToken", id);
        setIsLoading(false);
      })
      .catch((error) => {
        setUserToken(null);
        setIsLoading(false);
      });
  };

  const logOut = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem("userToken");
    AsyncStorage.removeItem("userInfo");
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    // setUserToken(null);
    // AsyncStorage.removeItem("userToken");
    try {
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem("userToken");
      let userInfo = await AsyncStorage.getItem("userInfo");
      userInfo = JSON.parse(userInfo);
      if (userInfo) {
        setUserInfo(userInfo);
        setUserToken(userToken);
      }
      setUserToken(userToken);
      setIsLoading(false);
    } catch (e) {
      console.log(`isLogged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{ login, logOut, isLoading, userToken, userInfo }}
    >
      {children}
    </AuthContext.Provider>
  );
};
