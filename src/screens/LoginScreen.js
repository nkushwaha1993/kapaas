import React, { useState } from "react";
import {
  TouchableOpacity,
  Image,
  View,
  Text,
  TextInput,
  SafeAreaView,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

const LoginScreen = ({ navigation }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // handle login logic here
  };
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <View style={{ paddingHorizontal: 25 }}>
        <View style={{ alignItems: "center", marginBottom: 50 }}>
          <Image source={require("../../assets/images/loginScreen.png")}></Image>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 28,
              fontWeight: "500",
              color: "#262626",
              marginBottom: 30,
            }}
          >
            Login
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
          }}
        >
          <FontAwesomeIcon
            icon={faUser}
            size={20}
            color={"black"}
            style={{ marginRight: 5 }}
          />

          <TextInput
            placeholder={"Username"}
            style={{ flex: 1, paddingVertical: 0 }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
          }}
        >
          <FontAwesomeIcon
            icon={faLock}
            size={20}
            color={"black"}
            style={{ marginRight: 5 }}
          />

          <TextInput
            placeholder={"Password"}
            style={{ flex: 1, paddingVertical: 0 }}
            secureTextEntry={true}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              backgroundColor: "#7055FF",
              padding: 20,
              borderRadius: 10,
              marginBottom: 30,
              marginTop: 30,
              width: 200,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "700",
                fontSize: 16,
                color: "#FFFFFF",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
