import {legacy_createStore, combineReducers} from "redux"
import {CountReducer} from "./reducers/countReducer.jsx";
import {BooksReducer} from "./reducers/booksReducer.jsx";

const reducers = combineReducers({
    CountReducer,
    BooksReducer
})

const store = legacy_createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store;