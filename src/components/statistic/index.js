
import React, {Component} from 'react';


class Statistics extends Component {
    constructor(props){
        super(props);
    }

    render() {
        console.log(this.props);
        return (

            <div className="card-body " style={{"max-width":"1200px"}}>
                <h3>Статистика</h3>

                <p>Создано заметок: {this.props.countCreateNotes}</p>
                <p>Удалено заметок: {this.props.countDeleteNotes}</p>

            </div>
        )
    }
}

export default Statistics

