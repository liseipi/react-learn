import {useImmerReducer} from 'use-immer'
import {useState} from "react";

function listReducer(draft, action) {
    switch (action.type) {
        case 'add':
            draft.push({id: Date.now().toString(32), text: action.value})
            break
        case 'edit':
            const value = draft.find(item => item.id === action.id)
            value.text = 'new ' + value.text
            break
        case 'remove':
            const index = draft.findIndex(item => item === action.id)
            draft.splice(index, 1)
            break
    }
}


function ImmerReducer() {
    const [msg, setMsg] = useState('')
    const [list, setListDispatch] = useImmerReducer(listReducer, [
        {id: Date.now().toString(32), text: 'aaa'}
    ]);

    return (
        <div>
            <input value={msg} onChange={(e)=> setMsg(e.target.value)}/>
            <button onClick={() => setListDispatch({type: 'add', value: msg})}>添加</button>
            <ul>
                {list.map(item => {
                    return (
                        <li key={item.id}>
                            {item.text}
                            <button onClick={() => setListDispatch({type: 'edit', id: item.id})}>编辑</button>
                            <button onClick={() => setListDispatch({type: 'remove', id: item.id})}>删除</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ImmerReducer