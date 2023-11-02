import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Card, Title, Paragraph } from 'react-native-paper'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const Button = ({ onPress, style, icon }) => (
  <TouchableOpacity style={style} onPress={onPress}>
    <Feather name={icon} size={24} />
  </TouchableOpacity>
)

const TokenCardItem = ({ cardItems }) => {
  const navigation = useNavigation()
  const onTokenCardPress = (cardItems) => {
    navigation.navigate('Generate Token', { tokenDetails: cardItems })
  }
  return (
    <Card style={styles.card} onPress={() => onTokenCardPress(cardItems)}>
      <Card.Content>
        <Title style={styles.title}>
          {cardItems.firstName} {cardItems.lastName}
        </Title>
        <Paragraph style={styles.info}>Mobile: {cardItems.mobile}</Paragraph>
        <Paragraph style={styles.info}>
          Address: {cardItems.address}, {cardItems.city}, {cardItems.state}
        </Paragraph>
        <Paragraph style={styles.info}>ID Type: {cardItems.idType}</Paragraph>
        <Paragraph style={styles.info}>
          ID Number: {cardItems.idNumber}
        </Paragraph>
        <Paragraph style={styles.info}>
          Vehicle Number: {cardItems.vehicleNumber}
        </Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button icon="edit" style={{ marginHorizontal: 16 }} />
        <Button icon="trash-2" />
      </Card.Actions>
    </Card>
  )
}
export default TokenCardItem

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
  card: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    elevation: 4,
    backgroundColor: '#fff',
    padding: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  info: {
    marginVertical: 5,
    fontSize: 16
  }
})
