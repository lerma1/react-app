

import React from 'react';
import {render} from 'react-dom';
import { Provider} from 'react-redux'
import App from "./components/app";
import {createStore} from "redux";
import rootReducer from "./store/reducers";
//import BrowserRouter from "react-router-dom/modules/BrowserRouter";



const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

var mainElem = document.getElementById('root');
render(<Provider store={store}> <App/> </Provider>, mainElem);


