import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import CustomDropdown from '../CustomDropdown'

const StateDropdown = ({ error, value, onChange }) => {
  const [stateData, setStateData] = useState([])

  useEffect(() => {
    const stateArray = []
    stateArray.push(
      {
        value: 'Maharashtra',
        label: 'Maharashtra'
      },
      {
        value: 'Madhya Pradesh',
        label: 'Madhya Pradesh'
      }
    )
    setStateData(stateArray)
  }, [])

  return (
    <View>
      <CustomDropdown
        data={stateData}
        search={true}
        placeholder={'Select state'}
        value={value}
        onChange={onChange}
        error={error}
      />
    </View>
  )
}

export default StateDropdown
