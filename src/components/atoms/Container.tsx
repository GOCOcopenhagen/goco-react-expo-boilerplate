import * as React from 'react'
import { SafeAreaView } from 'react-native'
import styled from 'styled-components/native'

type Props = {
    background?: string
}

const ContainerView = styled.View<{background?: string}>`
    height: 100%;
    width: 100%;
    background: ${(props: { background: any }) => { return (props.background) ? props.background : 'white' }};
`

const Container: React.FC<Props> = ({ children, background }) => {
    
    return (
        <ContainerView background={background}>
            <SafeAreaView>
                {children}
            </SafeAreaView>
        </ContainerView>
    )
}

export default Container
