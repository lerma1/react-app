import React from 'react';
import {connect} from 'react-redux';
import NoteList from "./index";
import {setViewNoteList, updateNotes} from "../../store/note-list/actions";
import {updateCurrentNote} from "../../store/note/actions";



class NoteListContainer extends React.Component {
    render() {
        return       <NoteList
            view={this.props.view}
            notes={this.props.notes}
            colors={this.props.colors}
            setViewNoteList={this.props.setViewNoteList}
            updateNotes={this.props.updateNotes}

            updateCurrentNote={this.props.updateCurrentNote}

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
    updateNotes: updateNotes,

    updateCurrentNote:updateCurrentNote,

}


//привязываем контейнер к реаксу и экспортируем
export default connect(mapStateToProps,mapDispatchToProps)(NoteListContainer);