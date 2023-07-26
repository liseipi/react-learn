const initState = {
    books: []
}

const actions = {
    addBook(newState, action) {
        newState.books.push(action.value)
    }
}

export const BooksReducer = (state = initState, action) => {
    if (actions[action.type]) {
        let newState = {...state}
        actions[action.type](newState, action)
        return newState
    }

    return state
}