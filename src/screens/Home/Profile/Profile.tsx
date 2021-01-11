import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import * as React from 'react'
import { Button, Text } from 'react-native'

import ExampleCircle from '../../../../assets/examplecircle.svg'
import { BlueButton } from '../../../components/atoms/BlueButton'
import Container from '../../../components/atoms/Container'
import { navigate } from '../../../utils/navigationRef'
import { HomeStackParams } from '../HomeStackParams'

type ScreenRouteProp = RouteProp<HomeStackParams, 'Profile'>
type ScreenNavigationProp = StackNavigationProp<HomeStackParams, 'Profile'>
type Props = {
    route: ScreenRouteProp
    navigation: ScreenNavigationProp
}

const Profile: React.FC<Props> = (p) => {


    return (
        <Container background="white">
            <Button title="hej" onPress={() => console.log("hi")} />
            <Text>{10}</Text>
            <ExampleCircle />
            <BlueButton text="push to settings" onPress={() => { p.navigation.push('Settings') }} />
            <BlueButton text="push to welcome" onPress={() => { navigate('Welcome') }} />
        </Container>
    )
}

export default Profile
