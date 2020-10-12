import { NavigationContainerRef } from '@react-navigation/native'
import * as React from 'react'

export const navigationRef = React.createRef<NavigationContainerRef>()
export function navigate(name: string, params?: any) {

    const cur = navigationRef.current
    if (cur) {

        cur.navigate(name, params)

    }

}
