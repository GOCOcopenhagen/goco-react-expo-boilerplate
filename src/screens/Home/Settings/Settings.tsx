import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import * as React from 'react'
import { Text } from 'react-native'

import Container from '../../../components/atoms/Container'
import { HomeStackParams } from '../HomeStackParams'

type ScreenRouteProp = RouteProp<HomeStackParams, 'Settings'>
type ScreenNavigationProp = StackNavigationProp<HomeStackParams, 'Settings'>
type Props = {
    route: ScreenRouteProp
    navigation: ScreenNavigationProp
}

const Settings: React.FC<Props> = (p) => {

    return (
        <Container background="white">
            <Text>Settings</Text>
        </Container>
    )
}

export default Settings
