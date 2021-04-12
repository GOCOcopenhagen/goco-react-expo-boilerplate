import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Index from './src/screens'

export default function App() {
    return (
        <>
            <StatusBar style="auto" />
            <NavigationContainer>
                <SafeAreaProvider>
                    <Index />
                </SafeAreaProvider>
            </NavigationContainer>
        </>
    )
}
