import { DefaultTheme } from '@react-navigation/native'

const AppLightTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    text: '#616161',
    card: '#f9f9f9',
    border: '#9F9F9F',
    primary: '#333333',
    background: '#e0f2fe'
  }
}

export default AppLightTheme
