import * as React from 'react'
import { Searchbar } from 'react-native-paper'
import { View } from 'react-native'

const SearchbarComponent = ({ placeholder, onSearchChange }) => {
  const [searchQuery, setSearchQuery] = React.useState('')

  const onChangeSearch = (query) => {
    setSearchQuery(query)
    onSearchChange(query)
  }

  return (
    <View>
      <Searchbar
        placeholder={placeholder}
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{ backgroundColor: 'white' }}
      />
    </View>
  )
}

export default SearchbarComponent
