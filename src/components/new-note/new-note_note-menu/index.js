//import Util from "bootstrap/js/src/util";
import React, {Component} from 'react';
import ColorMenu from "../../color-menu";
import DropdownButton from "./new-note_dropdown-button";
import Dropdown from "react-bootstrap/Dropdown";
import './style.css'
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

class NewNoteNoteMenu extends Component {

    render() {
       let reDoButtonEnabled =
           <button
            className="btn note-menu__img-button m-1"
            style={{"background-image":"url(icon/repeat.png)"}}
            onClick= {this.props.onClickReDoNewNote}
        />;

       let reDoButtonDisabled =
           <span className="d-inline-block"><button disabled
            className="btn note-menu__img-button m-1"
            style={{"background-image":"url(icon/repeat-d.png)"}}
        /></span>;

       let unDoButtonEnabled = <button
           className="btn note-menu__img-button m-1"
           style={{"background-image":"url(icon/cancel.png)"}}
           onClick= {this.props.onClickUnDoNewNote}
       />;

        let unDoButtonDisabled = <span className="d-inline-block"><button disabled
            className="btn note-menu__img-button m-1"
            style={{"background-image":"url(icon/cancel-d.png)"}}
         /></span>;



        return (

            <div className="d-flex align-items-center w-100 dropdown " >
                <OverlayTrigger overlay={ <Tooltip >Выбрать цвет заметки</Tooltip>}>
                <Dropdown className="d-inline-block">
                    <Dropdown.Toggle as={DropdownButton} id="dropdown-custom-components" url = "url(icon/new-color.png)"/>
                    <Dropdown.Menu as={ColorMenu} color = {this.props.color} colors = {this.props.colors} onSetColorNewNote = {this.props.onSetColorNewNote}/>
                </Dropdown>
                </OverlayTrigger >
               <img src="icon/more.png" alt="Разделитель" ></img>
                <OverlayTrigger  overlay={ <Tooltip >Отменить</Tooltip>}>
                    {(this.props.enableUnDo) ? unDoButtonEnabled : unDoButtonDisabled}
                </OverlayTrigger>
                <OverlayTrigger overlay={ <Tooltip >Повторить</Tooltip>}>
                    {(this.props.enableReDo) ? reDoButtonEnabled : reDoButtonDisabled}
                </OverlayTrigger>
                <OverlayTrigger overlay={ <Tooltip >Сохранить заметку</Tooltip>}>
                    <button className="btn w-auto text-secondary  float-right btn-sm note-menu__opticality-1 ml-auto" onClick={this.props.onClickCreateNewNote}><h5>Сохранить</h5></button>
                </OverlayTrigger>

            </div>
        )
    }
}

export default NewNoteNoteMenu

/*<input type="file" className="btn note-menu__img-button m-1" style={{"background-image":"url(icon/new-image.png)"}} data-trigger="hover" data-toggle="tooltip" data-placement="top" title="Добавить картинку" />*/
