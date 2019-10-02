import React from 'react';
import {connect} from 'react-redux';
import NewNote from "./index";
import {setText, openNewNote, closeNewNote, setColor, unDoReDo, updateTextBuffer, createNewNote} from '../../store/new-note/actions.js'
import {updateNotes} from "../../store/note-list/actions";

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
             setText={this.props.setText}
             setColor={this.props.setColor}
             unDoReDo={this.props.unDoReDo}

             createNewNote={this.props.createNewNote}
             updateNotes={this.props.updateNotes}

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
         colors: state.noteList.colors,
         textBuffer: state.newNote.textBuffer,
         notes:state.noteList.notes,

     };
}
//функция, которая будет наши экшн креэйтеры передавать в пропс
const mapDispatchToProps = {

    setText:setText,
    openNewNote: openNewNote,
    closeNewNote:closeNewNote,
    setColor:setColor,
    unDoReDo:unDoReDo,

    updateTextBuffer:updateTextBuffer,
    createNewNote: createNewNote,
    updateNotes:updateNotes,
}


//привязываем контейнер к реаксу и экспортируем
export default connect(mapStateToProps,mapDispatchToProps)(NewNoteContainer);