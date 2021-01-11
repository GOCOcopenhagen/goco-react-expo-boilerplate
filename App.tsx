import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Index from './src/screens'
import { navigationRef } from './src/utils/navigationRef'

export default function App() {
    return (
        <>
            <StatusBar style="auto" />
            <NavigationContainer ref={navigationRef}>
                <SafeAreaProvider>
                    <Index />
                </SafeAreaProvider>
            </NavigationContainer>
        </>
    )
}
