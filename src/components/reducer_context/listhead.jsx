import {useContext} from 'react'
import {ListDispatchContext} from './listProvider'

function ListHead() {
    const setListDispatch = useContext(ListDispatchContext)

    return (
        <div>
            <input/>
            <button onClick={() => setListDispatch({type: 'add'})}>添加</button>
        </div>
    )
}

export default ListHead