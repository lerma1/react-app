

import React from 'react';
import {render} from 'react-dom';
import { Provider} from 'react-redux'
import App from "./components/app";
import {createStore} from "redux";
import rootReducer from "./store/reducers";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import About from "./components/about";
import StatisticsContainer from "./components/statistic";
import NoteListContainer  from "./components/note-list/note-list-container.js"



const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

var mainElem = document.getElementById('root');
render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Switch>
                    <Route exact path='/' component={NoteListContainer}/>
                    <Route path='/statistics' component={StatisticsContainer}/>
                    <Route path='/about' component={About}/>
                </Switch>
            </App>
        </BrowserRouter>
    </Provider>, mainElem);


