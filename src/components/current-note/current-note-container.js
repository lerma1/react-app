import React from 'react';
import {connect} from 'react-redux';
import CurrentNote from '../current-note/index.js'
import {saveNote, addImage, setColor, setText, updateTextBuffer, unDoReDo,updateCurrentNote} from '../../store/note/actions.js'
import {updateNotes} from "../../store/note-list/actions";




class CurrentNoteContainer extends React.Component {
    render() {
        return       <CurrentNote
            id={this.props.id}
            title={this.props.title}
            text={this.props.text}
            isOpen={this.props.isOpen}
            isEditing={this.props.isEditing}
            color={this.props.color}
            colors={this.props.colors}
            textBuffer={this.props.textBuffer}
            notes={this.props.notes}

            saveNote={this.props.saveNote}
            addImage={this.props.addImage}
            setColor={this.props.setColor}
            setText={this.props.setText}
            updateTextBuffer={this.props.updateTextBuffer}
            unDoReDo={this.props.unDoReDo}
            updateCurrentNote={this.props.updateCurrentNote}

            updateNotes={this.props.updateNotes}

        />


    }
}
//берет из Стейта какие-то значения и передает их в пропсы компонента
const mapStateToProps = (state) => {
    return{
        id: state.note.id,
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

    saveCurrentNote:saveNote,
    addImageCurrentNote: addImage,
    setColor:setColor,
    setText:setText,
    updateTextBuffer:updateTextBuffer,
    unDoReDo:unDoReDo,
    updateCurrentNote:updateCurrentNote,
    updateNotes:updateNotes,
}


//привязываем контейнер к реаксу и экспортируем
export default connect(mapStateToProps,mapDispatchToProps)(CurrentNoteContainer);