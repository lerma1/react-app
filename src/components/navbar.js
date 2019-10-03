import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import {Link} from "react-router-dom";



export default class NoteNavbar extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (val) {
        (val===1)? this.props.setViewNoteList(false):this.props.setViewNoteList(true);

    };



    render() {


        return (

            <Navbar collapseOnSelect expand="lg" bg="info" variant="dark" >
                <Navbar.Brand >myNotes</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/" className="text-white m-3">Заметки</Link>
                        <Link to="/statistics" className="text-white m-3">Статистика</Link>
                        <Link to="/about" className="text-white m-3">О программе</Link>
                    </Nav>
                    <Nav>
                        <ToggleButtonGroup type="radio" name="options" defaultValue={1}   onChange={this.handleChange} >
                            <ToggleButton variant="outline-light" value={1}>Список</ToggleButton>
                            <ToggleButton variant="outline-light" value={2}>Сетка</ToggleButton>
                        </ToggleButtonGroup>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
            ;
    }
}