import React, { useContext, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
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
import { AuthContext } from "../context/AuthContext";

const LoginScreen = ({ navigation }) => {
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const LoginSchema = Yup.object().shape({
    username: Yup.string().required("Please enter the username."),
    password: Yup.string().required("Please enter the password."),
  });

  const handleLogin = (values) => {
    login(values.username, values.password)
      .then(() => {
        setError("");
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  const initialValues = () => {
    return {
      username: "",
      password: "",
    };
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={handleLogin}
    >
      {({
        values,
        errors,
        handleChange,
        touched,
        setFieldTouched,
        isValid,
        handleSubmit,
      }) => (
        <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
          <View style={{ paddingHorizontal: 25 }}>
            <View style={{ alignItems: "center", marginBottom: 50 }}>
              <Image
                source={require("../../assets/images/loginScreen.png")}
              ></Image>
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
                autoFocus
                placeholder={"Username"}
                style={{ flex: 1, paddingVertical: 0 }}
                autoCapitalize={false}
                value={values.username}
                onChangeText={handleChange("username")}
                onBlur={() => setFieldTouched("username")}
              />
            </View>
            {touched.username && errors.username && (
              <View
                style={{
                  paddingVertical: 5,
                  marginTop: -20,
                  marginBottom: 5,
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: "#FF0D10",
                  }}
                >
                  {errors.username}
                </Text>
              </View>
            )}

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
                value={values.password}
                onChangeText={handleChange("password")}
                autoCapitalize={false}
                secureTextEntry={true}
                onBlur={() => setFieldTouched("password")}
              />
            </View>
            {touched.password && errors.password && (
              <View
                style={{
                  paddingVertical: 5,
                  marginTop: -20,
                  marginBottom: 5,
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: "#FF0D10",
                  }}
                >
                  {errors.password}
                </Text>
              </View>
            )}
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                onPress={handleSubmit}
                style={{
                  backgroundColor: isValid ? "#7055FF" : "#A5C9CA",
                  padding: 20,
                  borderRadius: 10,
                  marginBottom: 30,
                  marginTop: 30,
                  width: 200,
                }}
                type="submit"
                disabled={!isValid}
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
              <Text style={{ color: "red", fontSize: 16, marginBottom: 8 }}>
                {error}
              </Text>
            </View>
          </View>
        </SafeAreaView>
      )}
    </Formik>
  );
};

export default LoginScreen;
