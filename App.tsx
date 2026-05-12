import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import SignUpScreen from './src/screens/SignUpScreen'
import { SafeAreaView } from 'react-native-safe-area-context'
import SignInScreen from './src/screens/SignInScreen'
import { getAuth, FirebaseAuthTypes } from '@react-native-firebase/auth'
const App = () => {
  const [user, setUSer] = useState<FirebaseAuthTypes.User | null>(null);
  useEffect(()=>{
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged(user => setUSer(user));
    return unsubscribe;
  })
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SignInScreen/>
    </SafeAreaView>
  )
}

export default App