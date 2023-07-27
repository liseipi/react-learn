import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux";
import './index.css'

import store from "./store/index.jsx";

// import App from './App.jsx'
import ReducerCom from "./components/reducer/index.jsx";
// import ReducerContext from "./components/reducer_context/index.jsx";

// import ReducerStore from "./components/reducer_store/index.jsx";
// import Immer from "./components/immer/index.jsx";
// import ImmerReducer from "./components/immer_reducer/index.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/*<App />*/}
        <ReducerCom/>
        {/*<ReducerContext />*/}

        {/*<Provider store={store}>*/}
        {/*    <ReducerStore/>*/}
        {/*</Provider>*/}

        {/*<Immer></Immer>*/}
        {/*<ImmerReducer></ImmerReducer>*/}

    </React.StrictMode>,
)
