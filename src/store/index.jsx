import {legacy_createStore, combineReducers} from "redux"
import {CountReducer} from "./reducers/countReducer.jsx";
import {BooksReducer} from "./reducers/booksReducer.jsx";
import {ImmerTestReducer} from "./reducers/immerReducer.jsx";

const reducers = combineReducers({
    CountReducer,
    BooksReducer,
    ImmerTestReducer
})

const store = legacy_createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store;