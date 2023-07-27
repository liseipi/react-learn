import {useReducer, useState} from 'react'

function ReducerCom() {

    function listReducer(state, action) {
        switch (action.type) {
            case 'add':
                return [...state, {id: Date.now().toString(36), text: action.msg}]
            case 'edit':
                return state.map(item => {
                    if (item.id === action.id) {
                        return {...item, text: 'new ' + item.text}
                    }
                    return item
                })
            case 'remove':
                return state.filter(item => {
                    return item.id !== action.id;
                })
        }
    }

    const [list, setListDispatch] = useReducer(listReducer, [
        {id: Date.now().toString(36), text: 'aaa'},
    ]);

    const [msg, setMsg] = useState('')

    return (
        <div>
            <input value={msg} onChange={(e) => setMsg(e.target.value)} />
            <button onClick={() => setListDispatch({type: 'add', msg: msg})}>添加</button>
            <ul>
                {list && list.map(item => {
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

export default ReducerCom