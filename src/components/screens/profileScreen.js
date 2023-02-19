import { Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { styles } from "../../styles/styles";
const ProfileScreen = ({ navigation, route }) => {
  console.log(route.params.name);
  const { colors } = useTheme();
  return (
    <View>
      <Text>This is {route.params.name}'s profile</Text>
    </View>
  );
};

export default ProfileScreen;
