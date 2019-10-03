import React, {Component} from 'react';
import NoteMenu from "../note-menu";
import './style.css'
import Modal from "react-bootstrap/Modal";
import CurrentNoteContainer from "../current-note/current-note-container";




class Note extends Component {
    constructor(props){
        super(props)
        this.onClickDeleteNote = this.onClickDeleteNote.bind(this);

       this.handleClose = this.handleClose.bind(this);
       this.handleShow = this.handleShow.bind(this);

    }

   handleClose () {
       this.props.updateCurrentNote(this.props.note.id, this.props.note.title, this.props.note.text, this.props.note.color, this.props.note.date, false);
       let notes = this.props.notes.slice();
       let index = this.props.notes.findIndex(item => item.id === this.props.note.id );
       notes[index].isEditing = false;

       this.props.updateNotes(notes);

   };

  handleShow(){
      this.props.updateCurrentNote(this.props.note.id, this.props.note.title, this.props.note.text, this.props.note.color, this.props.note.date, true);
      let notes = this.props.notes.slice();
      let index = this.props.notes.findIndex(item => item.id === this.props.note.id );
      notes[index].isEditing = true;

      this.props.updateNotes(notes);

  };

    onClickDeleteNote() {


    }


    render() {


       var img = this.props.note.img&&(<img src={this.props.note.img} className="card-img-top" alt="..."/>);


        return (
            <div className="card  "  >

                {img}
                <div onClick={this.handleShow} className="card-body pb-1" style={{"background-color": this.props.color}}>

                    <h4 className="new-note__input w-100 text-secondary display-5">{this.props.note.title}</h4>
                    <pre className="new-note__input w-100 text-secondary h5 display-5">{this.props.note.text}</pre>
                    <div>
                       <NoteMenu note = {this.props.note} />
                    </div>
                </div>
                <Modal show={this.props.note.isEditing} onHide={this.handleClose} centered size="lg" >
                    <CurrentNoteContainer />
                </Modal>

            </div>

        )
    }
}

export default Note