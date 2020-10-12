import { Models } from '@rematch/core'

import { test } from './test'

export interface RootModel extends Models {
    test: typeof test,
}

export const models: RootModel = { test }
