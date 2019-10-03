import React, {Component} from 'react';
import notes from "../fixtures";
import 'bootstrap/dist/css/bootstrap.css'
import NoteListContainer  from "./note-list/note-list-container.js"
import NoteNavbarContainer from "./navbar-container.js"





class App extends Component {


    render() {
     return(
        <div   >
            <NoteNavbarContainer/>
           <NoteListContainer notes={notes} />

        </div>
    )
    }
}




export default App