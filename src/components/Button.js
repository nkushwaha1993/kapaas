import React from "react";
import { TouchableOpacity, Text, Dimensions } from "react-native";
import { COLORS } from "../constants/constants";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const SCREEN_WIDTH = Dimensions.get("window").width;

const Button = ({
  title,
  onPress = () => {},
  width = 1,
  iconName,
  buttonStyle = {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        ...buttonStyle,
        height: 55,
        width: width * SCREEN_WIDTH,
        backgroundColor: COLORS.blue,
        marginVertical: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: COLORS.white, fontWeight: "bold", fontSize: 18 }}>
        {iconName && (
          <Icon
            name={iconName}
            style={{ color: COLORS.white, fontSize: 22, marginRight: 10 }}
          />
        )}
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
