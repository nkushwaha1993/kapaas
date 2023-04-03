import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";

export const storeToken = async (userData) => {
  const { id, expiresAt } = userData.session;
  const data = {
    userToken: id,
    userInfo: userData.user,
    expiration: expiresAt,
  };
  AsyncStorage.setItem("userData", JSON.stringify(data));
};

export const retrieveToken = async () => {
  try {
    const userData = await AsyncStorage.getItem("userData");
    if (userData) {
      const data = JSON.parse(userData);
      const now = new Date();
      const expiration = new Date(data.expiration);
      if (now.getTime() < expiration.getTime()) {
        return data;
      } else {
        AsyncStorage.removeItem("userData");
        return {
          userToken: null,
          userInfo: null,
          expiration: expiration.toISOString(),
        };
      }
    }
  } catch (error) {
    console.log("Error retrieving token: ", error);
  }
};

const hostname = Platform.OS === "android" ? "10.0.2.2" : "localhost";

export const BASE_URL = `http://${hostname}:8080`;
