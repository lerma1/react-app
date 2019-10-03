import React, {Component} from 'react';
import './style.css'
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "../new-note/new-note_note-menu/new-note_dropdown-button";


class NoteMenu extends Component {

    render() {

        return (
            <div className="d-flex align-items-center w-100 ">


                <OverlayTrigger overlay={ <Tooltip >Удалить заметку</Tooltip>}>
                    <button
                        className="btn  m-2 float-right note-menu__delete-button ml-auto text-white"
                        style={{"background-image":"url(icon/trash-can.png)"}}
                        onClick={this.props.onClickDeleteNote}
                    >. </button>
                </OverlayTrigger>
            </div>


        )
    }
}

export default NoteMenu
