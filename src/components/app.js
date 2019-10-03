import React, {Component} from 'react';
import notes from "../fixtures";
import 'bootstrap/dist/css/bootstrap.css'
import NoteListContainer  from "./note-list/note-list-container.js"
import NoteNavbar from "./navbar";





class App extends Component {


    render() {
     return(
        <div   >
            <NoteNavbar/>
           <NoteListContainer notes={notes} />

        </div>
    )
    }
}




export default App