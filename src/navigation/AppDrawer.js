import React, { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer'
import { AuthContext } from '../context/AuthContext'
import Ionicons from 'react-native-vector-icons/Ionicons'

const AppDrawer = (props) => {
  const { logOut } = useContext(AuthContext)
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
        <TouchableOpacity onPress={logOut} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5
              }}
            >
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AppDrawer
