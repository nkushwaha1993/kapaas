import React, { useEffect, useState } from 'react'
import { View, FlatList, SafeAreaView, Dimensions } from 'react-native'
import SearchbarComponent from '../components/SearchbarComponent'
import VendorCardItem from '../components/VendorCardItem'
import { getVendorsList } from '../services/vendor.service'
import { handleError } from '../utility/utils'

const SCREEN_WIDTH = Dimensions.get('window').width

const VendorSearchScreen = () => {
  const [searchText, setSearchText] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let timer
    const getVendorsListData = async () => {
      setLoading(true)
      await getVendorsList(searchText)
        .then((response) => {
          setLoading(false)
          setSearchResults(response)
        })
        .catch((error) => {
          handleError(error)
        })
    }
    const debounceSearch = () => {
      clearTimeout(timer)
      timer = setTimeout(getVendorsListData, 1000)
    }
    debounceSearch()
    return () => {
      clearTimeout(timer)
    }
  }, [searchText])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View contentContainerStyle={{ paddingEnd: 40 }}>
        <View
          style={{
            paddingHorizontal: 10,
            width: SCREEN_WIDTH * 1
          }}
        >
          <SearchbarComponent
            placeholder={'Search vendor'}
            onSearchChange={(val) => setSearchText(val)}
          />
        </View>
        <View
          style={{
            paddingHorizontal: 5,
            width: SCREEN_WIDTH * 1
          }}
        >
          <FlatList
            data={searchResults}
            keyExtractor={(item, index) => item.id + index.toString()}
            refreshing={loading}
            renderItem={({ item }) => <VendorCardItem cardItems={item} />}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default VendorSearchScreen
