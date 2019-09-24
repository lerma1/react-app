import React from 'react';
import {render} from 'react-dom';
import { Provider} from 'react-redux'
import App from "./components/app";
import {createStore} from "redux";
import rootReducer from "./store/reducers";



const store = createStore(rootReducer);

var mainElem = document.getElementById('root');
render(<Provider store={store}> <App/> </Provider>, mainElem);


