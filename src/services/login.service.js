import axios from "axios";
import { BASE_URL } from "../config";

export const login = async (username, password) => {
  return await axios
    .post(
      `${BASE_URL}/login`,
      {
        userName: username,
        password: password,
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      if (response.data) {
        return response.data;
      } else {
        throw new Error("Login failed");
      }
    })
    .then((data) => {
      if (data) {
        return data;
      } else {
        throw new Error("Login failed");
      }
    })
    .catch((error) => {
      console.log("Login error", error);
      throw error;
    });
};
