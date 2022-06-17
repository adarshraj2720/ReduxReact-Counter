import { createStore } from 'redux'


function counterReducer(state = { value: 0, step: 1 }, action) {
    switch (action.type) {
        case 'increment':
            return {...state, value: state.value +  state.step}
        case 'decrement':
            return {...state, value: state.value -  state.step}
        case 'reset':
            return {...state, value: state.value = 0  }
        case 'changestep':
            return {...state, step:action.payload }
        default:
            return state
    }
}

export let store = createStore(counterReducer)