import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'

import { HomeStackParams } from './HomeStackParams'
import Profile from './Profile/Profile'
import Settings from './Settings/Settings'

const WelcomeStack = createStackNavigator<HomeStackParams>()

const Home: React.FC = () => (
    <WelcomeStack.Navigator>
        <WelcomeStack.Screen name="Profile" component={Profile} />
        <WelcomeStack.Screen name="Settings" component={Settings} />
    </WelcomeStack.Navigator>
)

export default Home
