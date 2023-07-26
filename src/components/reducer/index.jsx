import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

function ReducerApp() {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.CountReducer.count)
    const books = useSelector((state) => state.BooksReducer.books)

    const [book, setBook] = useState('')
    const addBook = () => {
        dispatch({type: 'addBook', value: {id: Date.now().toString(36), title: book}})
        setBook('')
    }

    return (
        <div>
            reducer: {count} <br/>
            <button onClick={() => dispatch({type: 'add'})}>+1</button>
            <br/>
            <button onClick={() => dispatch({type: 'setCount', value: 5})}>set =5</button>
            <br/>

            <hr/>
            reducer: {book}<br/>
            增加书本：<input type="text"
                   value={book}
                   onChange={(e) => setBook(e.target.value)}
                   onKeyUp={(e) => e.key === 'Enter' && addBook()}/>
            <ul>
                {books && books.map((item, index) => <li key={index}>{item.title}</li>)}
            </ul>


        </div>
    )
}

export default ReducerApp