import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const Button = ({ onPress, style, icon }) => (
  <TouchableOpacity style={style} onPress={onPress}>
    <Feather name={icon} size={24} />
  </TouchableOpacity>
)

const VendorCardItem = ({ cardItems }) => {
  const navigation = useNavigation()
  const onVendorCardPress = (cardItems) => {
    navigation.navigate('Generate Token', { vendorDetails: cardItems })
  }
  return (
    <>
      <Card style={styles.item} onPress={() => onVendorCardPress(cardItems)}>
        <View style={styles.rowView}>
          <View>
            <Text style={styles.title}>
              {cardItems?.firstName} {cardItems?.lastName}
            </Text>
            <Text>{cardItems?.mobile}</Text>
          </View>
          <View style={styles.rowView}>
            <Button icon="edit" style={{ marginHorizontal: 16 }} />
            <Button icon="trash-2" />
          </View>
        </View>
      </Card>
    </>
  )
}
export default VendorCardItem

const styles = StyleSheet.create({
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  item: {
    padding: 16,
    margin: 16,
    elevation: 4,
    borderRadius: 8
  },
  title: {
    fontSize: 18
  }
})
