import { useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import AppDarkTheme from "./src/themes/appDarkTheme";
import AppLightTheme from "./src/themes/appLightTheme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/components/screens/loginScreen";
import ProfileScreen from "./src/components/screens/profileScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const scheme = useColorScheme();
  return (
    <NavigationContainer
      theme={scheme === "dark" ? AppDarkTheme : AppLightTheme}
    >
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
