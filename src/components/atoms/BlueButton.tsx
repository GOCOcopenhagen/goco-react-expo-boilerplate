import * as React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

export const BlueButtonContainer = styled.TouchableOpacity`
    width: 90%;
    background: blue;
    padding: 40px 20px;
`

interface Props {
    text: string
    onPress: () => void
}

export const BlueButton: React.FC<Props> = ({ text, onPress }) => {

    return (
        <BlueButtonContainer onPress={onPress}>
            <Text>{text}</Text>
        </BlueButtonContainer>
    )
}
