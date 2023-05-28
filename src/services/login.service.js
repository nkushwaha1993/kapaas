import axios from 'axios'
import { BASE_URL } from '../config'

export const login = async (username, password) => {
  return await axios
    .post(
      `${BASE_URL}/login`,
      {
        userName: username,
        password
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }
    )
    .then((response) => {
      if (response.data) {
        return response.data
      } else {
        throw new Error('Login failed')
      }
    })
    .catch((error) => {
      console.log('Login error', error)
      throw error
    })
}

export const logout = async (userToken) => {
  console.log('userToken', userToken, BASE_URL)

  return await axios
    .delete(`${BASE_URL}/logout`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Session-Id': userToken
      }
    })
    .then((response) => {
      if (response.data) {
        return response.data
      } else {
        throw new Error('Logout failed')
      }
    })
    .catch((error) => {
      console.log('Logout error', error)
      throw error
    })
}
