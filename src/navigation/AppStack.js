import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AppDrawer from "./AppDrawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "../screens/HomeScreen";
import VendorSearchScreen from "../screens/VendorSearchScreen";
import AppVendorTab from "./AppVendorTab";

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <AppDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: "#aa18ea",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#333",
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 15,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="VendorSearch"
        component={AppVendorTab}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
