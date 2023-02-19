import React, { useState } from "react";
import { Button, Image, View, Text, TextInput } from "react-native";
import { StyleSheet } from "react-native";
const LoginScreen = ({ navigation }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // handle login logic here
  };
  return (
    <View style={styles.loginContainer}>
      <View style={styles.imageContainer}>
        <Image source={require("../../../assets/loginScreen.png")}></Image>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.loginText}>Login</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.username}
          placeholder="Username"
          value={login}
          onChangeText={setLogin}
        />
        <TextInput
          style={styles.username}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Log In" onPress={handleLogin} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20%",
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    fontSize: 25,
  },
  inputContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  username: {
    width: 350,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '02A8FF',
    margin: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default LoginScreen;
