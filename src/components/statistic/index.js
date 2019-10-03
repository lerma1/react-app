
import React, {Component} from 'react';


class Statistics extends Component {
    constructor(props){
        super(props);
        this.handler = this.handler.bind(this);
    }

    handler(){
        alert(this.props);
        console.log(this.props);
    }

    render() {

        return (
            <div className= "card-body mx-auto" style={{"max-width":"1200px"}} >

                <h3 className="text-center mb-5">Статистика</h3>


                <p className="text-center">Создано заметок: {this.props.countCreateNotes}</p>
                <p className="text-center">Удалено заметок: {this.props.countDeleteNotes}</p>



            </div>

        )
    }
}

export default Statistics

