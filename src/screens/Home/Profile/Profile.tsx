import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import * as React from 'react'
import { Button, Text } from 'react-native'
import { DataStore } from "aws-amplify/datastore";

import ExampleCircle from '../../../../assets/examplecircle.svg'
import { BlueButton } from '../../../components/atoms/BlueButton'
import Container from '../../../components/atoms/Container'
import { navigate } from '../../../utils/navigationRef'
import { HomeStackParams } from '../HomeStackParams'
import { Click } from '../../../models';

type ScreenRouteProp = RouteProp<HomeStackParams, 'Profile'>
type ScreenNavigationProp = StackNavigationProp<HomeStackParams, 'Profile'>
type Props = {
    route: ScreenRouteProp
    navigation: ScreenNavigationProp
}

const Profile: React.FC<Props> = (p) => {

    const [latest, setLatest] = React.useState<number>(Date.now())
    const run = () async => {
        await DataStore.save(
            new Click({
              title: "My First Post"
            })
          );
    };
    React.useEffect(() => {
        console.log("HEY")
    }, [latest])

    return (
        <Container background="white">
            <Button title="Try me" onPress={() => setLatest(Date.now())} />
            <Text>{latest}</Text>
            <ExampleCircle />
            <BlueButton text="push to settings" onPress={() => { p.navigation.push('Settings') }} />
            <BlueButton text="push to welcome" onPress={() => { navigate('Welcome') }} />
        </Container>
    )
}

export default Profile
