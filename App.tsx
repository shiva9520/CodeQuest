import { View, Text } from 'react-native'
import React from 'react'
import SignUpScreen from './src/screens/SignUpScreen'
import { SafeAreaView } from 'react-native-safe-area-context'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SignUpScreen/>
    </SafeAreaView>
  )
}

export default App