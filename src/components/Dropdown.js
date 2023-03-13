import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants/constants";
import { SelectList } from "react-native-dropdown-select-list";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Dropdown = ({
  label,
  iconName,
  data,
  onSelect,
  placeholder,
  ...props
}) => {
  const [selected, setSelected] = React.useState("");
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={style.label}>{label}</Text>
      <View style={style.selectListView}>
        <Icon name={iconName} style={style.icons} />
        <SelectList
          onSelect={() => alert(selected)}
          setSelected={setSelected}
          data={data}
          arrowicon={<Icon name="chevron-down" style={style.arrowIcon} />}
          searchicon={<Icon name="magnify" style={style.searchIcon} />}
          boxStyles={style.boxStyles}
          dropdownStyles={style.dropdownStyles}
          placeholder={placeholder}
          maxHeight={80}
          {...props}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: COLORS.grey,
  },
  selectListView: {
    paddingHorizontal: 45,
    flexDirection: "row",
    backgroundColor: COLORS.light,
    borderColor: COLORS.darkBlue,
    alignItems: "center",
  },
  icons: {
    color: COLORS.darkBlue,
    fontSize: 22,
    position: "absolute",
    top: 12,
    left: 15,
    right: 0,
  },
  arrowIcon: {
    color: COLORS.darkBlue,
    fontSize: 22,
    marginRight: 10,
  },
  searchIcon: {
    color: COLORS.darkBlue,
    fontSize: 18,
    marginRight: 10,
  },
  inputContainer: {
    height: 55,
    backgroundColor: COLORS.light,
    flexDirection: "row",
    paddingHorizontal: 15,
    borderWidth: 0.5,
  },
  boxStyles: {
    backgroundColor: COLORS.light,
    borderColor: COLORS.darkBlue,
    width: 300,
    borderWidth: 0,
    alignItems: "center",
    borderRadius: 0,
  },
  dropdownStyles: {
    width: 280,
    borderWidth: 1,
    marginBottom: 10,
    borderColor: COLORS.darkBlue,
  },
});

export default Dropdown;
