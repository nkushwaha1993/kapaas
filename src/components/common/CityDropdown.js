import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import CustomDropdown from '../CustomDropdown'

const CityDropdown = ({ error, value, onChange }) => {
  const [cityData, setCityData] = useState([])

  useEffect(() => {
    const cityArray = []
    cityArray.push(
      {
        value: 'Indore',
        label: 'Indore'
      },
      {
        value: 'Pune',
        label: 'Pune'
      }
    )
    setCityData(cityArray)
  }, [])

  return (
    <View>
      <CustomDropdown
        data={cityData}
        search={true}
        placeholder={'Select city'}
        value={value}
        onChange={onChange}
        error={error}
      />
    </View>
  )
}

export default CityDropdown
