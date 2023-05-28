import React, { useState } from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'
import { COLORS } from '../constants/constants'
import ErrorComponent from '../components/common/ErrorComponent'

const SCREEN_WIDTH = Dimensions.get('window').width

const CustomDropdown = ({
  data,
  onChange,
  value,
  placeholder,
  search,
  error
}) => {
  const [isFocus, setIsFocus] = useState(false)
  return (
    <View
      style={{
        borderRadius: 15,
        marginBottom: 20
      }}
    >
      <Dropdown
        style={[
          styles.dropdown,
          { width: SCREEN_WIDTH * 0.95 },
          isFocus && { borderColor: 'blue' }
        ]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search={search}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={onChange}
      />
      {error && (
        <View>
          <ErrorComponent error={error} />
        </View>
      )}
    </View>
  )
}

export default CustomDropdown

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: COLORS.light
  },
  icon: {
    marginRight: 5
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14
  },
  placeholderStyle: {
    fontSize: 16
  },
  selectedTextStyle: {
    fontSize: 16
  },
  iconStyle: {
    width: 20,
    height: 20
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16
  }
})
