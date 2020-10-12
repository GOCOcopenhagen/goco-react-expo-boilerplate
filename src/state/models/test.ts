import { createModel, ModelConfig } from '@rematch/core'

type Test = {
    count: number
}

export const test = createModel<Test, ModelConfig<Test>>({
    state: {
        count: 0 
    },
    reducers: {
        increment: (state) => ({ count: state.count + 1 })
    },
})
