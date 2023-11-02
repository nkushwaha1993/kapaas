// import axios from 'axios'
// import { BASE_URL, retrieveToken } from '../config'
import { isEmpty } from 'lodash'
import tokenListData from '../mocks/tokenListData.json'

export const getTokens = async (searchInput) => {
  return isEmpty(searchInput) ? getGeneratedTokens() : getTokenSearch(searchInput)
}

export const getTokenSearch = async (searchInput) => {
  return tokenListData
  // const { userToken } = await retrieveToken()
  // return await axios
  //   .post(
  //     `${BASE_URL}/token/search`,
  //     {
  //       name: searchInput
  //     },
  //     {
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //         'Session-Id': userToken
  //       }
  //     }
  //   )
  //   .then((response) => {
  //     if (response.data) {
  //       return response.data.content
  //     } else {
  //       throw new Error('Search failed')
  //     }
  //   })
  //   .catch((error) => {
  //     console.log('Search error', error)
  //     throw error
  //   })
}

export const getGeneratedTokens = async () => {
  return tokenListData
  // const { userToken } = await retrieveToken()
  // return await axios
  //   .get(
  //       `${BASE_URL}/token/getTokenList`,
  //       {
  //         headers: {
  //           Accept: 'application/json',
  //           'Content-Type': 'application/json',
  //           'Session-Id': userToken
  //         }
  //       }
  //   )
  //   .then((response) => {
  //     if (response.data) {
  //       return response.data.content
  //     } else {
  //       throw new Error('Error in getting token list')
  //     }
  //   })
  //   .catch((error) => {
  //     console.log('Error in getting token list', error)
  //     throw error
  //   })
}

export const generateToken = async (tokenData) => {
  return tokenListData
  // const { userToken } = await retrieveToken()
  // return await axios
  //   .post(
  //     `${BASE_URL}/token/search`,
  //     {
  //       name: searchInput
  //     },
  //     {
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //         'Session-Id': userToken
  //       }
  //     }
  //   )
  //   .then((response) => {
  //     if (response.data) {
  //       return response.data.content
  //     } else {
  //       throw new Error('Search failed')
  //     }
  //   })
  //   .catch((error) => {
  //     console.log('Search error', error)
  //     throw error
  //   })
}
