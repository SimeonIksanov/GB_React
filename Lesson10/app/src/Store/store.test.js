import { render, screen, fireEvent } from '@testing-library/react';
import { swap } from './checkboxSlice';
import checkboxReducer from './checkboxSlice'

describe("Store tests", () => {
    test(
        'Checkbox initial state is false',
        () => {
            const initialState = checkboxReducer(undefined, {type:''})
            expect(initialState).toEqual({value: false})
        }
    )

    test(
        'Change checkbox value from initial to true',
        () => {
            const action = {type: swap.type}
            const state = checkboxReducer(undefined, action)
            expect(state.value).toEqual(true);
        }
    )

    test(
        'Change checkbox value from true to false',
        () => {
            const action = {type: swap.type}
            const state = checkboxReducer({value:true}, action)
            expect(state.value).toEqual(false);
        }
    )
})