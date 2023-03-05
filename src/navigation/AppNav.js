import React, { useContext } from "react";
import { ActivityIndicator, useColorScheme, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import AppDarkTheme from "../themes/appDarkTheme";
import AppLightTheme from "../themes/appLightTheme";
import AuthStack from "./AuthStack";
import { AuthContext } from "../context/AuthContext";
import AppStack from "./AppStack";

const AppNav = () => {
  const scheme = useColorScheme();
  const { isLoading, userToken } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }
  return (
    <NavigationContainer
      theme={scheme === "dark" ? AppDarkTheme : AppLightTheme}
    >
      {userToken !== null ? <AppStack /> : <AuthStack />}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default AppNav;
