import React, {Component} from 'react';
import NewNoteContainer from '../new-note/new-note-container.js'
import Note from "../note";
import './style.css'

class NoteList extends Component {




    render() {


         const noteElements = this.props.notes.map((note, index) =>
                <li key = {note.id} className="article-list__li mt-4 ">
                    <Note show={note.isEditing} note = {note} notes={this.props.notes} color={this.props.colors.find(item => item.name === note.color ).code} updateCurrentNote = {this.props.updateCurrentNote} updateNotes = {this.props.updateNotes} />
                </li>
          );
//
        return (
            <div className="card-body w-75">
                <NewNoteContainer  />
                <ul className="pl-0 mt-5">
                   {noteElements}
                </ul>
            </div>

        );
    }
}

export default NoteList