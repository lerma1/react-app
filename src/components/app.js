import React, {Component} from 'react';
import notes from "../fixtures";

import 'bootstrap/dist/css/bootstrap.css'
import NoteList from "./note-list";

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpenNewNote: false
        }
    }

    render() {
     return(
        <div className ="container" onClick={this.handleClick} >
           <NoteList notes={notes} isOpenNewNote={this.state.isOpenNewNote}/>
        </div>
    )
    }
}

export default App