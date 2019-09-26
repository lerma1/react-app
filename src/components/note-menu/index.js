import React, {Component} from 'react';
import './style.css'

class NoteMenu extends Component {

    render() {

        return (
            <div className="d-inline-block w-100" >


                    <img className="btn note-menu__img-button" src="icon/new-color.png" alt="" data-toggle="tooltip" data-placement="bottom" title="Выбрать цвет"></img>
                    <img className="btn note-menu__img-button" src="icon/new-image.png" alt="" data-toggle="tooltip" data-placement="bottom" title="Добавить картинку"></img>

                    <img className="btn note-menu__img-button" src="icon/more.png" alt="" data-toggle="tooltip" data-placement="bottom" title="Еще..."></img>
                    <img className="btn note-menu__img-button float-right" src="icon/trash-can.png" alt="" data-toggle="tooltip" data-placement="Удалить" title="Белый"></img>

            </div>
        )
    }
}

export default NoteMenu