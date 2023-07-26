import {useReducer, createContext} from 'react'

export const ListContext = createContext(null);
export const ListDispatchContext = createContext(null)

function listReducer(state, action){
    switch(action.type){
        case 'add':
            return [...state, {id:3, text:'ccc'}]
        case 'edit':
            return state.map(item => {
                if(item.id === action.id){
                    return {...item, text: 'new '+item.text}
                }
                return item
            })
        case 'remove':
            return state.filter(item => {
                return item.id !== action.id;
            })
    }
}

function ListProvider({children}) {
    const [list, setListDispatch] = useReducer(listReducer, [
        {id: 1, text: 'aa'},
        {id: 2, text: 'bb'}
    ])
    return (
        <>
            <ListContext.Provider value={list}>
                <ListDispatchContext.Provider value={setListDispatch}>
                    {children}
                </ListDispatchContext.Provider>
            </ListContext.Provider>
        </>
    )
}

export default ListProvider