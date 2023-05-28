import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import VendorSearchScreen from './VendorSearchScreen'
import GenerateTokenScreen from './GenerateTokenScreen'

const GenerateTokenTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0)

  const handleTabClick = (tabIndex) => {
    setSelectedTab(tabIndex)
  }

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          height: 50
        }}
      >
        <TouchableOpacity onPress={() => handleTabClick(0)}>
          <Text
            style={{
              fontSize: selectedTab === 0 ? 20 : 16,
              fontWeight: selectedTab === 0 ? 'bold' : 'normal'
            }}
          >
            Search Vendors
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabClick(1)}>
          <Text
            style={{
              fontSize: selectedTab === 1 ? 20 : 16,
              fontWeight: selectedTab === 1 ? 'bold' : 'normal'
            }}
          >
            Generate Token
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        {selectedTab === 0 ? <VendorSearchScreen /> : <GenerateTokenScreen />}
      </View>
    </View>
  )
}

export default GenerateTokenTabs
