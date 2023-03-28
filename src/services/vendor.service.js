import axios from "axios";
import { BASE_URL,retrieveToken } from "../config";

export const vendorSearch = async (searchInput) => {
  const {userToken} = await retrieveToken();
  console.log("User Token : %O",userToken);
  return await axios
    .post(
      `${BASE_URL}/vendor/search`,
      {
        name: searchInput,
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Session-Id": userToken,
        },
      }
    )
    .then((response) => {
      if (response.data) {
        return response.data.content;
      } else {
        throw new Error("Search failed");
      }
    })
    .catch((error) => {
      console.log("Search error", error);
      throw error;
    });
};


