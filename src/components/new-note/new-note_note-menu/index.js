import Util from "bootstrap/js/src/util";
import React, {Component} from 'react';
import ColorMenu from "../../color-menu";
import DropdownButton from "./new-note_dropdown-button";
import Dropdown from "react-bootstrap/Dropdown";
import './style.css'

class NewNoteNoteMenu extends Component {

    render() {

        return (

            <div className="d-inline-block w-100 dropdown " >
                <Dropdown className="d-inline-block">
                    <Dropdown.Toggle as={DropdownButton} id="dropdown-custom-components" url = "url(icon/new-color.png)"/>
                    <Dropdown.Menu as={ColorMenu} />
                </Dropdown>
                <button className="btn note-menu__img-button m-1" style={{"background-image":"url(icon/new-image.png)"}} data-toggle="tooltip" data-placement="top" title="Добавить картинку" />
                <img src="icon/more.png" ></img>
                <button className="btn note-menu__img-button m-1" style={{"background-image":"url(icon/cancel.png)"}} data-toggle="tooltip" data-placement="top" title="Отменить" />
                <button className="btn note-menu__img-button m-1" style={{"background-image":"url(icon/repeat.png)"}} data-toggle="tooltip" data-placement="top" title="Повторить" />
                <button className="btn  btn-light w-auto text-secondary  float-right btn-sm "data-toggle="tooltip" data-placement="top" title="Схоранить заметку" ><h5>Сохранить</h5></button>

            </div>
        )
    }
}

export default NewNoteNoteMenu