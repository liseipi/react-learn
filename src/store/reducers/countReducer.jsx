const initState = {
    count: 2
}

const actions = {
    add(newState) {
        newState.count++
    },
    setCount(newState, action) {
        newState.count = action.value
    }
}

export const CountReducer = (state = initState, action) => {
    if (actions[action.type]) {
        let newState = {...state}
        actions[action.type](newState, action)
        return newState
    }

    return state
}