import {legacy_createStore, combineReducers, compose, applyMiddleware} from "redux"
import thunk from 'redux-thunk'
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
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)
export default store;