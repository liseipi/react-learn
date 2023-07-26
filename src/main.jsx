import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux";
import './index.css'

import store from "./store/index.jsx";

// import App from './App.jsx'
// import ReducerContext from "./components/reducer_context/index.jsx";

import ReducerApp from "./components/reducer/index.jsx";
import Immer from "./components/immer/index.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/*<App />*/}
        {/*<ReducerContext />*/}

        {/*<Provider store={store}>*/}
        {/*    <ReducerApp/>*/}
        {/*</Provider>*/}

        <Immer></Immer>
    </React.StrictMode>,
)
