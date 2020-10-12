import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'

import Home from './Home'
import { RootStackParams } from './RootStackParams'
import Welcome from './Welcome'

const Root = createStackNavigator<RootStackParams>()

const Index: React.FC = () => (
    <Root.Navigator
        screenOptions={{
            headerShown: false,
        }}>
        <Root.Screen name="Home" component={Home} />
        <Root.Screen name="Welcome" component={Welcome} />
    </Root.Navigator>
)

export default Index
