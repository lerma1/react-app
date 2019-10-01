import React from 'react';
import {connect} from 'react-redux';
import NoteList from "./index";
import {setViewNoteList, addNote, deleteNote} from "../../store/note-list/actions";



class NoteListContainer extends React.Component {
    render() {
        return       <NoteList
            view={this.props.view}
            notes={this.props.notes}
            colors={this.props.colors}
            setViewNoteList={this.props.setViewNoteList}
            addNote={this.props.addNote}
            deleteNote={this.props.deleteNote}
        />


    }
}
//берет из Стейта какие-то значения и передает их в пропсы компонента
const mapStateToProps = (state) => {
    return{
        view: state.noteList.view,
        notes: state.noteList.notes,
        colors:state.noteList.colors,
    };
}
//функция, которая будет наши экшн креэйтеры передавать в пропс
const mapDispatchToProps = {

    setViewNoteList:setViewNoteList,
    addNote: addNote,
    deleteNote:deleteNote,
}


//привязываем контейнер к реаксу и экспортируем
export default connect(mapStateToProps,mapDispatchToProps)(NoteListContainer);