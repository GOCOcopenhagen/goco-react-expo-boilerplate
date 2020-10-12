import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import * as React from 'react'
import { Button, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import ExampleCircle from '../../../../assets/examplecircle.svg'
import { BlueButton } from '../../../components/atoms/BlueButton'
import Container from '../../../components/atoms/Container'
import { Dispatch, RootState } from '../../../state/store'
import { navigate } from '../../../utils/navigationRef'
import { HomeStackParams } from '../HomeStackParams'

type ScreenRouteProp = RouteProp<HomeStackParams, 'Profile'>
type ScreenNavigationProp = StackNavigationProp<HomeStackParams, 'Profile'>
type Props = {
    route: ScreenRouteProp
    navigation: ScreenNavigationProp
}

const Profile: React.FC<Props> = (p) => {

    const dispatch = useDispatch<Dispatch>()
    const count = useSelector((storeState: RootState) => storeState.test.count)

    return (
        <Container background="white">
            <Button title="hej" onPress={() => { dispatch.test.increment() }} />
            <Text>{count}</Text>
            <ExampleCircle />
            <BlueButton text="push to settings" onPress={() => { p.navigation.push('Settings') }} />
            <BlueButton text="push to welcome" onPress={() => { navigate('Welcome') }} />
        </Container>
    )
}

export default Profile
