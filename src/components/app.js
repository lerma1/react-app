import React, {Component} from 'react';
import notes from "../fixtures";
import 'bootstrap/dist/css/bootstrap.css'
import NoteList from "./note-list";


class App extends Component {
    constructor(props) {
        super(props)


    }

    render() {
     return(
        <div className ="container"  >
           <NoteList notes={notes} />

        </div>
    )
    }
}




export default App