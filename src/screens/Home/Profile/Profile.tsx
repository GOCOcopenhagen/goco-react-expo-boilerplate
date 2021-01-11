// eslint-disable-next-line simple-import-sort/sort
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { DataStore } from '@aws-amplify/datastore'
import * as React from 'react'
import { Button, Text } from 'react-native'

import ExampleCircle from '../../../../assets/examplecircle.svg'
import { BlueButton } from '../../../components/atoms/BlueButton'
import Container from '../../../components/atoms/Container'
import { Click } from '../../../models'
import { navigate } from '../../../utils/navigationRef'
import { HomeStackParams } from '../HomeStackParams'

type ScreenRouteProp = RouteProp<HomeStackParams, 'Profile'>
type ScreenNavigationProp = StackNavigationProp<HomeStackParams, 'Profile'>
type Props = {
    route: ScreenRouteProp
    navigation: ScreenNavigationProp
}

const Profile: React.FC<Props> = (p) => {

    const [latestClick, setLatestClick] = React.useState<number>(Date.now())
    const [allCLicks, setAllCLicks] = React.useState<Click[]>()

    React.useEffect(() => {
        (async () => setAllCLicks((await DataStore.query(Click)).reverse()))()
    }, [])

    React.useEffect(() => {
        (async () => {
            const element = await DataStore.save(
                new Click({
                    epocTime: Date.now()
                })
            )
            setAllCLicks((prevState) => (prevState ? [element, ...prevState] : [element]))
        })()
    }, [latestClick])

    return (
        <Container background="white">
            <Button title="Try me" onPress={() => setLatestClick(Date.now())} />
            <Text>{latestClick}</Text>
            <ExampleCircle />
            <BlueButton text="push to settings" onPress={() => { p.navigation.push('Settings') }} />
            <BlueButton text="push to welcome" onPress={() => { navigate('Welcome') }} />
            {allCLicks && allCLicks.map(({ epocTime }, key) => (<Text key={key}>{epocTime}</Text>))}
        </Container>
    )
}

export default Profile
