import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

function ImmerReducerStore() {
    const dispatch = useDispatch()
    const list = useSelector((state) => state.ImmerTestReducer.list)

    const [msg, setMsg] = useState('')

    const handleClick = () => {
        dispatch({type: 'addList', item: {id: Date.now().toString(32), task: msg, state: false}});
        setMsg('')
    }

    const handleChange = (e, id) => {
        dispatch({type: 'editList', item: {id, state: e.target.checked}})
    }

    function fetchSecretSauce() {
        return fetch('https://jsonplaceholder.typicode.com/users')
    }

    const handleGetData = () => {
        dispatch(async function (dispatch) {
            const res = await fetchSecretSauce().then(response => response.json())
            dispatch({type: 'saveList', res})
        })
    }

    return (
        <div>

            <input type="text" value={msg} onChange={(e) => setMsg(e.target.value)}/>
            <button type='button' onClick={handleClick}>add</button>

            <div>
                {list && list.map((item, index) => {
                    return (
                        <div key={index}>
                            {item.task}
                            <input type="checkbox" checked={item.state} onChange={(e) => handleChange(e, item.id)}/>
                        </div>
                    )
                })}
            </div>
            <hr/>
            <div>
                <button onClick={() => handleGetData()}>get data</button>
            </div>
        </div>
    )
}

export default ImmerReducerStore