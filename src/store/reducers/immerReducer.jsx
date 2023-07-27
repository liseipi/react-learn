import {produce} from "immer"

const initState = {
    list: [{id: 1, task: 'a', state: true}]
}

const actions = {
    addList(draft, value) {
        draft.list.push(value.item)
    },
    editList(draft, value) {
        draft.list.find(item => item.id === value.item.id).state = value.item.state
    }
}

export const ImmerTestReducer = produce((draft = initState, action) => {
    if (actions[action.type]) {
        actions[action.type](draft, action)
        return draft
    }

    return draft
})

