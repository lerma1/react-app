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
       //this.show=this.props.show;
       console.log("props",this.props);
    }

   handleClose () {
        //this.props.show=false; console.log("handleClose",this.props.show);
    };

  handleShow(){
      this.props.updateCurrentNote(this.props.note.id, this.props.note.title, this.props.note.text, this.props.note.color, this.props.note.date, true);
      let notes = this.props.notes.slice();
      let index = this.props.notes.findIndex(item => item.id === this.props.note.id );
      notes[index].isEditing = true;

      this.props.updateNotes(notes);
      console.log("props",this.props);
  };

    onClickDeleteNote() {

        let index = this.props.notes.findIndex(item => item.id === this.props.note.id );
        let notes = this.props.notes.slice();

        notes.splice(index,1);
        this.props.updateNotes(notes);
    }


    render() {


       var img = this.props.note.img&&(<img src={this.props.note.img} className="card-img-top" alt="..."/>);


        return (
            <div className="card  " onClick={this.handleShow} >

                {img}
                <div className="card-body pb-1" style={{"background-color": this.props.color}}>

                    <h3 className="new-note__input w-100 text-secondary">{this.props.note.title}</h3>
                    <h5 className="new-note__input w-100 text-secondary">{this.props.note.text}</h5>
                    <div>
                       <NoteMenu note = {this.props.note} onClickDeleteNote={this.onClickDeleteNote}/>
                    </div>
                </div>
                <Modal show={true} onHide={this.handleClose} centered size="lg">
                    <CurrentNoteContainer />
                </Modal>

            </div>

        )
    }
}

export default Note