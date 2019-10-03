import React, {Component} from 'react';
import notes from "../fixtures";
import 'bootstrap/dist/css/bootstrap.css'
//import NoteListContainer  from "./note-list/note-list-container.js"
import NoteNavbarContainer from "./navbar-container.js"
//import About from "./about";
//import Statistics from "./statistic";




const App = ({children}) => (
    <div>
        <NoteNavbarContainer/>
        {children}
    </div>
);

/*
class App extends Component {


    render() {
     return(
        <div>

            <About/>
            <Statistics/>

            <NoteListContainer/>

        </div>
    )
    }
}*/




export default App