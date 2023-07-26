import {useState} from "react";
import {useImmer} from "use-immer";

function Immer() {
    const [msg, setMsg] = useState('')
    const [list, setList] = useImmer([])

    const handleClick = () => {
        setList((draft) => {
            draft.unshift({id: Date.now().toString(36), task: msg, state: false})
            setMsg('')
        })
    }

    const handleChange = (e, id) => {
        setList(draft => {
            draft.find(item => item.id === id).state = e.target.checked
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

        </div>
    )
}

export default Immer