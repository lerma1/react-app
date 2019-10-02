import React from 'react';
import {connect} from 'react-redux';
import NewNote from '../new-note/index.js'
import {saveCurrentNote, addImageCurrentNote, setColorCurrentNote, setTextCurrentNote, updateTextBuffer, unDoReDoCurrentNote,updateCurrentNote} from '../../store/note/actions.js'
import {updateNotes} from "../../store/note-list/actions";




class CurrentNoteContainer extends React.Component {
    render() {
        return       <NewNote
            title={this.props.title}
            text={this.props.text}
            isOpen={this.props.isOpen}
            isEditing={this.props.isEditing}
            color={this.props.color}
            colors={this.props.colors}
            textBuffer={this.props.textBuffer}
            notes={this.props.notes}

            saveCurrentNote={this.props.saveCurrentNote}
            addImageCurrentNote={this.props.addImageCurrentNote}
            setColorCurrentNote={this.props.setColorCurrentNote}
            setTextCurrentNote={this.props.setTextCurrentNote}
            updateTextBuffer={this.props.updateTextBuffer}
            unDoReDoCurrentNote={this.props.unDoReDoCurrentNote}
            updateCurrentNote={this.props.reDoNewNote}

            updateNotes={this.props.updateNotes}

        />


    }
}
//берет из Стейта какие-то значения и передает их в пропсы компонента
const mapStateToProps = (state) => {
    return{
        title: state.note.title,
        text: state.note.text,
        isOpen:state.note.isOpen,
        isEditing:state.note.isEditing,
        color:state.note.color,
        colors: state.noteList.colors,
        textBuffer: state.note.textBuffer,
        notes:state.noteList.notes,

    };
}
//функция, которая будет наши экшн креэйтеры передавать в пропс
const mapDispatchToProps = {

    saveCurrentNote:saveCurrentNote,
    addImageCurrentNote: addImageCurrentNote,
    setColorCurrentNote:setColorCurrentNote,
    setTextCurrentNote:setTextCurrentNote,
    updateTextBuffer:updateTextBuffer,
    unDoReDoCurrentNote:unDoReDoCurrentNote,
    updateCurrentNote:updateCurrentNote,
    updateNotes:updateNotes,
}


//привязываем контейнер к реаксу и экспортируем
export default connect(mapStateToProps,mapDispatchToProps)(CurrentNoteContainer);