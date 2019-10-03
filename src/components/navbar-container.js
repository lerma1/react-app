import React from 'react';
import {connect} from 'react-redux';
import NoteNavbar from "./navbar";
import {setViewNoteList} from "../store/note-list/actions";




class NoteNavbarContainer extends React.Component {
    render() {
        return       <NoteNavbar

            setViewNoteList={this.props.setViewNoteList}


        />


    }
}
//берет из Стейта какие-то значения и передает их в пропсы компонента
const mapStateToProps = (state) => {
    return{

    };
}
//функция, которая будет наши экшн креэйтеры передавать в пропс
const mapDispatchToProps = {

    setViewNoteList:setViewNoteList,

}


//привязываем контейнер к реаксу и экспортируем
export default connect(mapStateToProps,mapDispatchToProps)(NoteNavbarContainer);