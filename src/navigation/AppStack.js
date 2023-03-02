import React from "react";
import ProfileScreen from "../screens/ProfileScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ title: "ProfileScreen" }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
