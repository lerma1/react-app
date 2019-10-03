import React, {Component} from 'react';
import NewNoteContainer from '../new-note/new-note-container.js'
import Note from "../note";
import './style.css'

class NoteList extends Component {




    render() {

        let noteGirdClass= this.props.isGirdView? "article-list__li mt-4 m-3 note-list_view-gird-elem ": "article-list__li mt-4 flex-fill";
        let noteListGirdClass = this.props.isGirdView? " card-body mx-auto p-0 note-list_view-gird": "card-body mx-auto p-0 note-list_view-list";

         const noteElements = this.props.notes.map((note, index) =>
                <li key = {note.id} className= {noteGirdClass}  >
                    <Note show={note.isEditing} note = {note} notes={this.props.notes} color={this.props.colors.find(item => item.name === note.color ).code} updateCurrentNote = {this.props.updateCurrentNote} updateNotes = {this.props.updateNotes} />
                </li>
          );
//
        return (
            <div className= "card-body "  >
                <div className="mx-auto note-list_view-list"> <NewNoteContainer  /></div>
                <div className={noteListGirdClass}  >
                <ul className="pl-0 mt-5 d-flex justify-content-start flex-wrap  align-content-stretch">

                   {noteElements}

                </ul>
                </div></div>

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