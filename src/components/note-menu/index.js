import React, {Component} from 'react';
import './style.css'

class NoteMenu extends Component {

    render() {

        return (
            <div className="d-inline-block w-100" >


                    <img className="btn note-menu__img-button" src="icon/new-color.png" alt=""></img>
                    <img className="btn note-menu__img-button" src="icon/new-image.png" alt=""></img>

                    <img className="btn note-menu__img-button" src="icon/more.png" alt=""></img>
                    <img className="btn note-menu__img-button" src="icon/cancel.png" alt=""></img>
                    <img className="btn note-menu__img-button" src="icon/repeat.png" alt=""></img>
                    <img className="btn note-menu__img-button float-right" src="icon/trash-can.png" alt=""></img>

            </div>
        )
    }
}

export default NoteMenu