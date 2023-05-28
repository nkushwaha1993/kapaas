import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState, createContext, useEffect } from 'react'
import { login as loginService, logout as logoutService } from '../services'
import { storeToken, retrieveToken } from '../config'
import { handleError } from '../utility/utils'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [userToken, setUserToken] = useState(null)
  const [userInfo, setUserInfo] = useState(null)

  const login = async (username, password) => {
    setIsLoading(true)
    await loginService(username, password)
      .then((response) => {
        setUserInfo(response.user)
        const { id } = response?.session
        setUserToken(id)
        storeToken(response)
        setIsLoading(false)
      })
      .catch((error) => {
        setUserToken(null)
        setIsLoading(false)
        handleError(error)
      })
  }

  const logOut = async () => {
    setIsLoading(true)
    await logoutService(userToken)
      .then((response) => {
        setUserToken(null)
        AsyncStorage.removeItem('userToken')
        AsyncStorage.removeItem('userInfo')
        setIsLoading(false)
      })
      .catch((error) => {
        setUserToken(null)
        setIsLoading(false)
        handleError(error)
      })
  }

  const isLoggedIn = async () => {
    try {
      setIsLoading(true)
      const userData = await retrieveToken()
      if (userData) {
        setUserInfo(userData.userInfo)
        setUserToken(userData.userToken)
      } else {
        setUserInfo(null)
        setUserToken(null)
      }
      setIsLoading(false)
    } catch (e) {
      console.log(`isLogged in error ${e}`)
    }
  }

  useEffect(() => {
    isLoggedIn()
  }, [])

  return (
    <AuthContext.Provider
      value={{ login, logOut, isLoading, userToken, userInfo }}
    >
      {children}
    </AuthContext.Provider>
  )
}
