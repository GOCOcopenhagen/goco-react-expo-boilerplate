import { NavigationContainer } from '@react-navigation/native'
import { getPersistor } from '@rematch/persist'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Index from './src/screens'
import { store } from './src/state/store'
import { navigationRef } from './src/utils/navigationRef'

export default function App() {
    return (
        <>
            <StatusBar style="auto" />
            <PersistGate persistor={getPersistor()}>
                <Provider store={store}>
                    <NavigationContainer ref={navigationRef}>
                        <SafeAreaProvider>
                            <Index />
                        </SafeAreaProvider>
                    </NavigationContainer>
                </Provider>
            </PersistGate>
        </>
    )
}
