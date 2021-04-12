// eslint-disable-next-line simple-import-sort/sort
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import * as React from 'react'
import { Button, Text } from 'react-native'

import ExampleCircle from '../../../../assets/examplecircle.svg'
import { BlueButton } from '../../../components/atoms/BlueButton'
import Container from '../../../components/atoms/Container'
import { HomeStackParams } from '../HomeStackParams'

type ScreenRouteProp = RouteProp<HomeStackParams, 'Profile'>
type ScreenNavigationProp = StackNavigationProp<HomeStackParams, 'Profile'>
type Props = {
    route: ScreenRouteProp
    navigation: ScreenNavigationProp
}

const Profile: React.FC<Props> = ({navigation}) => {

    const [latestClick, setLatestClick] = React.useState<number>(Date.now())


    return (
        <Container background="white">
            <Button title="Try me" onPress={() => setLatestClick(Date.now())} />
            <Text>{latestClick}</Text>
            <ExampleCircle />
            <BlueButton text="push to settings" onPress={() => { navigation.push('Settings') }} />
            <BlueButton text="push to welcome" onPress={() => { navigation.navigate('Profile') }} />
        </Container>
    )
}

export default Profile
