import { useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import AppDarkTheme from "./src/themes/appDarkTheme";
import AppLightTheme from "./src/themes/appLightTheme";
import AuthStack from "./src/navigation/AuthStack";

export default function App() {
  const scheme = useColorScheme();
  return (
    <NavigationContainer
      theme={scheme === "dark" ? AppDarkTheme : AppLightTheme}
    >
      <AuthStack />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
