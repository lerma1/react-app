import React from 'react';
import {connect} from 'react-redux';
import Statistics from '/index.js';



class StatisticsContainer extends React.Component {
    render() {
        return       <Statistics
            countCreateNotes={this.props.countCreateNotes}
            countDeleteNotes={this.props.countDeleteNotes}


        />


    }
}
//берет из Стейта какие-то значения и передает их в пропсы компонента
const mapStateToProps = (state) => {
    return{
        countCreateNotes: state.noteList.countCreateNotes,
        countDeleteNotes: state.noteList.countDeleteNotes,

    };
}
//функция, которая будет наши экшн креэйтеры передавать в пропс
const mapDispatchToProps = {


}


//привязываем контейнер к реаксу и экспортируем
export default connect(mapStateToProps,mapDispatchToProps)(StatisticsContainer);