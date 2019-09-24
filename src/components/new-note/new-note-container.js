import React from 'react';
import {connect} from 'react-redux';
import NewNote from "./index";
import {setTitleNewNote, setTextNewNote, openNewNote, closeNewNote} from '../../store/new-note/actions.js'

 class NewNoteContainer extends React.Component {
     render() {
         return       <NewNote
             title={this.props.title}
             text={this.props.text}
             isOpen={this.props.isOpen}
             openNewNote={this.props.openNewNote}
             closeNewNote={this.props.closeNewNote}
             setTitleNewNote={this.props.setTitleNewNote}
             setTextNewNote={this.props.setTextNewNote}/>


     }
 }
//берет из Стейта какие-то значения и передает их в пропсы компонента
const mapStateToProps = (state) => {
     return{
         title: state.newNote.title,
         text: state.newNote.text,
         isOpen:state.newNote.isOpen,
     };
}
//функция, которая будет наши экшн креэйтеры передавать в пропс
const mapDispatchToProps = {
    setTitleNewNote:setTitleNewNote,
    setTextNewNote:setTextNewNote,
    openNewNote: openNewNote,
    closeNewNote:closeNewNote,
}


//привязываем контейнер к реаксу и экспортируем
export default connect(mapStateToProps,mapDispatchToProps)(NewNoteContainer);