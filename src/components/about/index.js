
import React, {Component} from 'react';
import NewNoteContainer from "../new-note/new-note-container";


class About extends Component {

    render() {

        return (
            <div className= "card-body mx-auto" style={{"max-width":"1200px"}} >

                    <h3 className="text-center">myNotes</h3>
                    <h5 className="text-center">version 0.0.1</h5>
                    <p className="text-center">Отличный сайт, можно оставлять тут свои заметки.</p>

                    <img className="d-block w-50 mx-auto" src="https://avatanplus.com/files/resources/mid/57517d7dc6c2115516523376.png"/>

            </div>

        )
    }
}

export default About

