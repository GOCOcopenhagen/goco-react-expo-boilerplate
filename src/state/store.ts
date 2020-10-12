import AsyncStorage from '@react-native-community/async-storage'
import { init, RematchDispatch, RematchRootState } from '@rematch/core'
import createRematchPersist from '@rematch/persist'

import { models, RootModel } from './models'

const persistPlugin = createRematchPersist({
    throttle: 1000,
    whitelist: ['accessToken', 'test'],
    version: 1,
    storage: AsyncStorage,
})

export const store = init({
    models,
    plugins: [
        persistPlugin,
    ],
})

export type Store = typeof store
export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel>
