import React from 'react';
import {connect} from 'react-redux';
import NewNote from "./index";
import {setTitleNewNote, setTextNewNote, openNewNote, closeNewNote, setColorNewNote} from '../../store/new-note/actions.js'

 class NewNoteContainer extends React.Component {
     render() {
         return       <NewNote
             title={this.props.title}
             text={this.props.text}
             isOpen={this.props.isOpen}
             color={this.props.color}
             openNewNote={this.props.openNewNote}
             closeNewNote={this.props.closeNewNote}
             setTitleNewNote={this.props.setTitleNewNote}
             setTextNewNote={this.props.setTextNewNote}
             setColorNewNote={this.props.setColorNewNote}/>


     }
 }
//берет из Стейта какие-то значения и передает их в пропсы компонента
const mapStateToProps = (state) => {
     return{
         title: state.newNote.title,
         text: state.newNote.text,
         isOpen:state.newNote.isOpen,
         color:state.newNote.color,
     };
}
//функция, которая будет наши экшн креэйтеры передавать в пропс
const mapDispatchToProps = {
    setTitleNewNote:setTitleNewNote,
    setTextNewNote:setTextNewNote,
    openNewNote: openNewNote,
    closeNewNote:closeNewNote,
    setColorNewNote:setColorNewNote,
}


//привязываем контейнер к реаксу и экспортируем
export default connect(mapStateToProps,mapDispatchToProps)(NewNoteContainer);