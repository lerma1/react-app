import React, {Component} from 'react';
//import $ from 'jquery';
//import Popper from "popper.js";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js';

import NewNoteNoteMenu from './new-note_note-menu/index.js';
import './style.css'
import {colors} from "../../constants/colors";



class NewNote extends Component {
    constructor(props){
        super(props)

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.onClickNewNote = this.onClickNewNote.bind(this);
        this.onSetColorNewNote = this.onSetColorNewNote.bind(this);
        //console.log(props);
    }

    onTitleChange(event) {
        this.props.setTitleNewNote(event.target.value);

    }
    onTextChange(event) {
        this.props.setTextNewNote(event.target.value);
    }

    onClickNewNote = (event) =>{
        event.target.closest('.new-note_button_close')? this.props.closeNewNote(): this.props.openNewNote();
    }

    onSetColorNewNote(event) {
          this.props.setColorNewNote(event.target.getAttribute('data-color'));
    }


    renderNewNoteOpen = () =>{
        console.log(this.props);
        console.log(this.props.color);
        return (
                <div className="new-note card-body " style={{"background-color": this.props.colors.find(item => item.name == this.props.color ).code}}>
                    <h2>
                        <input
                            className="new-note__input w-100 text-secondary"
                            type="text"
                            placeholder="Новая заметка..."
                            value={this.props.title}
                            onChange={this.onTitleChange}
                        />
                    </h2>
                    <h4>
                        <textarea
                            className="new-note__input w-100 text-secondary"
                            type="text"
                            rows = "4"
                            placeholder="Текст заметки..."
                            value={this.props.text}
                            onChange={this.onTextChange}
                        />
                    </h4>
                    <div className="m-0">
                        <NewNoteNoteMenu color = {this.props.color} colors = {this.props.colors} onSetColorNewNote = {this.onSetColorNewNote}/>

                    </div>
                </div>
        );
    }

    renderNewNoteClose = () =>{
        return (
                <div className="card-body" >
                    <h2><input className="new-note__input w-100 text-secondary" type="text"  placeholder="Новая заметка..."></input></h2>
                </div>
        );
    }

    render() {
        var body = this.props.isOpen?this.renderNewNoteOpen():this.renderNewNoteClose();

        return (
            <div className="card shadow " onClick={this.onClickNewNote}>
                {body}
            </div>
        )
    }
}
/*
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
*/
export default NewNote