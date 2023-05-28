import React from 'react'
import { View, Dimensions } from 'react-native'
import { TextInput } from 'react-native-paper'
import { COLORS } from '../constants/constants'
import ErrorComponent from './common/ErrorComponent'

const SCREEN_WIDTH = Dimensions.get('window').width

const Input = ({
  label,
  iconName,
  error,
  password,
  height,
  width = 1,
  ...props
}) => {
  return (
    <View style={{ marginBottom: 20 }}>
      <View>
        <TextInput
          autoCorrect={false}
          mode="outlined"
          label={label}
          style={{
            backgroundColor: COLORS.light,
            color: COLORS.darkBlue,
            flex: 1,
            height: height || 55,
            width: SCREEN_WIDTH * width
          }}
          {...props}
        />
      </View>
      <ErrorComponent error={error} />
    </View>
  )
}

export default Input
