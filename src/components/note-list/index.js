import React, {Component} from 'react';
import NewNoteContainer from '../new-note/new-note-container.js'
import Note from "../note";
import './style.css'

class NoteList extends Component {




    render() {

        let noteGirdClass= this.props.isGirdView? "article-list__li mt-4 m-3 note-list_view-gird-elem ": "article-list__li mt-4 m-0 d-block mw-100 flex-fill ";
        let noteListGirdClass = this.props.isGirdView? " mt-5 d-flex justify-content-start flex-wrap card-body mx-auto p-0 note-list_view-gird": "mt-5 d-flex justify-content-start flex-wrap card-body mx-auto p-0 note-list_view-list flex-column   ";


         const noteElements = this.props.notes.map((note, index) =>
                <li key = {note.id} className= {noteGirdClass}  >
                    <Note show={note.isEditing} note = {note} notes={this.props.notes} color={this.props.colors.find(item => item.name === note.color ).code} updateCurrentNote = {this.props.updateCurrentNote} updateNotes = {this.props.updateNotes} />
                </li>
          );
//
        return (
            <div className= "card-body   "  >
                <div className="mx-auto note-list_view-list"> <NewNoteContainer  /></div>

                <ul className={noteListGirdClass}>

                   {noteElements}

                </ul>
                </div>

        );
    }
}

export default NoteList
/*
render() {


    const noteElements = this.props.notes.map((note, index) =>
        <li key = {note.id} className="article-list__li mt-4 m-3 " style={{"width":"250px"}}>
            <Note show={note.isEditing} note = {note} notes={this.props.notes} color={this.props.colors.find(item => item.name === note.color ).code} updateCurrentNote = {this.props.updateCurrentNote} updateNotes = {this.props.updateNotes} />
        </li>
    );
//
    return (
        <div className="card-body m-auto" style={{"max-width":"1200px"}}>
            <NewNoteContainer  />
            <ul className="pl-0 mt-5 d-flex justify-content-start flex-wrap  align-content-stretch  ">

                {noteElements}

            </ul>
        </div>

    );
}
}*/