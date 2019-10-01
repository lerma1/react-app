import React from 'react';
import {connect} from 'react-redux';
import NewNote from "./index";
import {setTextNewNote, openNewNote, closeNewNote, setColorNewNote, unDoNewNote, reDoNewNote,updateTextBuffer, createNewNote} from '../../store/new-note/actions.js'
import {addNote} from "../../store/note-list/actions";

class NewNoteContainer extends React.Component {
     render() {
         return       <NewNote
             title={this.props.title}
             text={this.props.text}
             isOpen={this.props.isOpen}
             color={this.props.color}
             colors={this.props.colors}
             textBuffer={this.props.textBuffer}
             openNewNote={this.props.openNewNote}
             closeNewNote={this.props.closeNewNote}
             updateTextBuffer={this.props.updateTextBuffer}
             setTextNewNote={this.props.setTextNewNote}
             setColorNewNote={this.props.setColorNewNote}
             unDoNewNote={this.props.unDoNewNote}
             reDoNewNote={this.props.reDoNewNote}
             createNewNote={this.props.createNewNote}
             addNote={this.props.addNote}

             notes={this.props.notes}
         />


     }
 }
//берет из Стейта какие-то значения и передает их в пропсы компонента
const mapStateToProps = (state) => {
     return{
         title: state.newNote.title,
         text: state.newNote.text,
         isOpen:state.newNote.isOpen,
         color:state.newNote.color,
         colors: state.newNote.colors,
         textBuffer: state.newNote.textBuffer,
         notes:state.noteList.notes,

     };
}
//функция, которая будет наши экшн креэйтеры передавать в пропс
const mapDispatchToProps = {

    setTextNewNote:setTextNewNote,
    openNewNote: openNewNote,
    closeNewNote:closeNewNote,
    setColorNewNote:setColorNewNote,
    unDoNewNote:unDoNewNote,
    reDoNewNote:reDoNewNote,
    updateTextBuffer:updateTextBuffer,
    createNewNote: createNewNote,
    addNote:addNote,
}


//привязываем контейнер к реаксу и экспортируем
export default connect(mapStateToProps,mapDispatchToProps)(NewNoteContainer);