import React, { useEffect, useState } from 'react'
import { View, FlatList, SafeAreaView, Dimensions } from 'react-native'
import SearchbarComponent from '../components/SearchbarComponent'
import TokenCardItem from '../components/TokenCardItem'
import { getTokens } from '../services/token.service'
import { handleError } from '../utility/utils'
import { isEmpty } from 'lodash'

const SCREEN_WIDTH = Dimensions.get('window').width

const TokenListScreen = () => {
  const [searchText, setSearchText] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getTokenList = async () => {
      setLoading(true)
      await getTokens('')
        .then((response) => {
          setLoading(false)
          setSearchResults(response)
        })
        .catch((error) => {
          handleError(error)
        })
    }
    getTokenList()
  }, [])

  useEffect(() => {
    let timer
    const getTokenList = async () => {
      setLoading(true)
      await getTokens(searchText)
        .then((response) => {
          setLoading(false)
          setSearchResults(response)
        })
        .catch((error) => {
          handleError(error)
        })
    }
    const debounceTime = isEmpty(searchText) ? 0 : 1000
    const debounceSearch = () => {
      clearTimeout(timer)
      timer = setTimeout(getTokenList, debounceTime)
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
            width: SCREEN_WIDTH * 1,
            marginVertical: 30
          }}
        >
          <SearchbarComponent
            placeholder={'Search token'}
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
            renderItem={({ item }) => <TokenCardItem cardItems={item} />}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default TokenListScreen
