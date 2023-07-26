import {useContext} from 'react'
import {ListContext, ListDispatchContext} from "./listProvider";

function ListContent() {
    const list = useContext(ListContext)
    const setListDispatch = useContext(ListDispatchContext)
    console.log(list)

    return (
        <div>
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

export default ListContent