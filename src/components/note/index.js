import React, {Component} from 'react';
import NoteMenu from "../note-menu";
import './style.css'



class Note extends Component {
    constructor(props){
        super(props)
        this.onClickDeleteNote = this.onClickDeleteNote.bind(this);


    }

    onClickDeleteNote() {

        let index = this.props.notes.findIndex(item => item.id === this.props.note.id );
        let notes = this.props.notes.slice();

        notes.splice(index,1);
        this.props.deleteNote(notes);
    }


    render() {
       var img = this.props.note.img&&(<img src={this.props.note.img} className="card-img-top" alt="..."/>);


        return (
            <div className="card  " onClick={this.handleClick} >
                {img}
                <div className="card-body pb-1" style={{"background-color": this.props.color}}>

                    <h3 className="new-note__input w-100 text-secondary">{this.props.note.title}</h3>
                    <h5 className="new-note__input w-100 text-secondary">{this.props.note.text}</h5>
                    <div>
                       <NoteMenu note = {this.props.note} onClickDeleteNote={this.onClickDeleteNote}/>
                    </div>
                </div>
            </div>

        )
    }
}

export default Note