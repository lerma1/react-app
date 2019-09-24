import React, {Component} from 'react';
import NewNoteContainer from '../new-note/new-note-container.js'
import Note from "../note";
import './style.css'

class NoteList extends Component {
    constructor(props){
        super(props)

        this.state = {
            isOpenNewNote: false
        }

        console.log(props);
    }


    render() {
         const noteElements = this.props.notes.map((note, index) =>
                <li key = {note.id} className="article-list__li mt-4 ">
                    <Note note = {note} />
                </li>
          );

        return (
            <div className="card-body w-75">
                <NewNoteContainer  isOpen={this.state.isOpenNewNote}/>
                <ul className="pl-0 mt-5">
                   {noteElements}
                </ul>
            </div>

        );
    }
}

export default NoteList