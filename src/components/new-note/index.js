import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js';

import NewNoteNoteMenu from './new-note_note-menu/index.js';
import './style.css'


class NewNote extends Component {
    constructor(props){
        super(props)


        this.onTextChange = this.onTextChange.bind(this);
        this.onClickNewNote = this.onClickNewNote.bind(this);
        this.onSetColorNewNote = this.onSetColorNewNote.bind(this);
        this.onClickUnDoNewNote = this.onClickUnDoNewNote.bind(this);
        this.onClickReDoNewNote = this.onClickReDoNewNote.bind(this);
        this.addTextBuffer = this.addTextBuffer.bind(this);
        this.onClickCreateNewNote = this.onClickCreateNewNote.bind(this);
        this.timer = undefined;

    }

    onClickCreateNewNote(){
        console.log("onClickCreateNewNote");

        let newNotes = this.props.notes.concat();
        newNotes.unshift({title: this.props.title, text: this.props.text,date: new Date(), id:( "id" + new Date()),color: this.props.color});

        this.props.addNote(newNotes);

        this.props.setColorNewNote(this.props.colors[0].name);
        this.props.setTextNewNote("", "");
        this.props.updateTextBuffer({data:[],currentIndex:-1});
        this.props.closeNewNote();

    }

    addTextBuffer(title, text, buffer){
        let newBuffer = buffer;
        if((newBuffer.currentIndex + 1) < newBuffer.data.length)
               newBuffer.data = newBuffer.data.slice(0,newBuffer.currentIndex);

        newBuffer.data.push ({title: title, text: text});
        newBuffer.currentIndex++;

        return newBuffer;
    }

    onTextChange() {
        let text = document.getElementById("text-new-note").value;
        let title = document.getElementById("title-new-note").value;


        this.props.setTextNewNote(title, text);
        clearTimeout(this.timer);
        this.timer = setTimeout(()=>{ let buffer = this.addTextBuffer(title,text,this.props.textBuffer);this.props.updateTextBuffer(buffer);}, 200);

        }


    onClickNewNote = (event) =>{
        event.target.closest('.new-note_button_close')? this.props.closeNewNote(): this.props.openNewNote();
    }

    onSetColorNewNote(event) {
          this.props.setColorNewNote(event.target.getAttribute('data-color'));
    }

    onClickUnDoNewNote() {
        console.log("onClickUnDoNewNote");   console.log(this.props.textBuffer);
        if (this.props.textBuffer.currentIndex === -1) return;

        this.props.textBuffer.currentIndex--;
        var title = (this.props.textBuffer.currentIndex >= 0) ? this.props.textBuffer.data[this.props.textBuffer.currentIndex].title : "";
        var text = (this.props.textBuffer.currentIndex >= 0) ? this.props.textBuffer.data[this.props.textBuffer.currentIndex].text : "";

        this.props.unDoNewNote(title, text, this.props.textBuffer  );

    }

    onClickReDoNewNote() {

            if (this.props.textBuffer.currentIndex + 1 >= this.props.textBuffer.data.length) return;

            this.props.textBuffer.currentIndex++;
            let title = this.props.textBuffer.data[this.props.textBuffer.currentIndex].title;
            let text = this.props.textBuffer.data[this.props.textBuffer.currentIndex].text;

            this.props.unDoNewNote(title, text, this.props.textBuffer);
        }



    renderNewNoteOpen = () =>{

        return (
                <div className="new-note card-body " style={{"background-color": this.props.colors.find(item => item.name === this.props.color ).code}}>
                    <h2>
                        <input
                            id = "title-new-note"
                            className="new-note__input w-100 text-secondary"
                            type="text"
                            placeholder="Новая заметка..."
                            value={this.props.title}
                            onChange={this.onTextChange}
                        />
                    </h2>
                    <h4>
                        <textarea
                            id = "text-new-note"
                            className="new-note__input w-100 text-secondary"
                            type="text"
                            rows = "4"
                            placeholder="Текст заметки..."
                            value={this.props.text}
                            onChange={this.onTextChange}
                        />
                    </h4>
                    <div className="m-0">
                        <NewNoteNoteMenu
                            color = {this.props.color}
                            colors = {this.props.colors}
                            onSetColorNewNote = {this.onSetColorNewNote}
                            onClickUnDoNewNote = {this.onClickUnDoNewNote}
                            onClickReDoNewNote = {this.onClickReDoNewNote}
                            onClickCreateNewNote = {this.onClickCreateNewNote}
                            enableUnDo = {this.props.textBuffer.currentIndex >= 0}
                            enableReDo = {(this.props.textBuffer.currentIndex + 1) < this.props.textBuffer.data.length}
                         />

                    </div>
                </div>
        );
    }

    renderNewNoteClose = () =>{
        return (
                <div className="card-body" >
                    <h2><input className="new-note__input w-100 text-secondary" type="text"  placeholder="Новая заметка..." onClick={this.onClickNewNote} value={this.props.text} ></input></h2>
                </div>
        );
    }

    render() {
        var body = this.props.isOpen?this.renderNewNoteOpen():this.renderNewNoteClose();

        return (
            <div className="card shadow " >
                {body}
            </div>
        )
    }
}

export default NewNote