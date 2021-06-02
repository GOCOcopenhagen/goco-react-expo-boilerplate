import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import Onboarding from './Onboarding'

export type RootStackParams = {
    Onboarding: {}
}

const Root = createStackNavigator<RootStackParams>()


const Index: React.FC = () => {

    return (
        <Root.Navigator screenOptions={{ headerShown: false }}>
            <Root.Screen name="Onboarding" component={Onboarding} />
        </Root.Navigator>
    )
}
export default Index
