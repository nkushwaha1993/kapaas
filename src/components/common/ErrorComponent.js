import React from 'react'
import { Text } from 'react-native'
import { COLORS } from '../../constants/constants'

const ErrorComponent = ({ error }) => {
  return (
    error && <Text style={{ color: COLORS.red, fontSize: 12 }}>{error}</Text>
  )
}

export default ErrorComponent
