import {produce} from "immer"

const initState = {
    list: [{id: 1, task: 'a', state: true}],
    originList: []
}

const actions = {
    addList(draft, value) {
        draft.list.push(value.item)
    },
    editList(draft, value) {
        draft.list.find(item => item.id === value.item.id).state = value.item.state
    },
    saveList(draft, value) {
        draft.originList.push(...value.res)
    }
}

export const ImmerTestReducer = produce((draft = initState, action) => {
    if (actions[action.type]) {
        actions[action.type](draft, action)
        return draft
    }

    return draft
})

