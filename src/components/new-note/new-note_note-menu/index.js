import React, {Component} from 'react';
import './style.css'

class NewNoteNoteMenu extends Component {

    render() {

        return (
            <div className="d-inline-block w-100" >


                    <img className="btn note-menu__img-button" src="icon/new-color.png" alt=""></img>
                    <img className="btn note-menu__img-button" src="icon/new-image.png" alt=""></img>

                    <img className="btn note-menu__img-button" src="icon/more.png" alt=""></img>
                    <img className="btn note-menu__img-button" src="icon/cancel.png" alt=""></img>
                    <img className="btn note-menu__img-button" src="icon/repeat.png" alt=""></img>
                <button className="new-note_button_close btn  btn-light float-right w-auto text-secondary note-menu__img-button float-right " ><h5>Сохранить</h5></button>

            </div>
        )
    }
}

export default NewNoteNoteMenu