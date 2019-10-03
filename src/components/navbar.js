import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";



export default class NoteNavbar extends Component {
    constructor(props) {
        super(props)

    }

    render() {

        const handleChange = val => alert(val);
        return (

            <Navbar collapseOnSelect expand="lg" bg="info" variant="dark" >
                <Navbar.Brand >myNotes</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Заметки</Nav.Link>
                        <Nav.Link href="#pricing">Статистика</Nav.Link>
                        <Nav.Link href="#pricing">О программе</Nav.Link>
                    </Nav>
                    <Nav>
                        <ToggleButtonGroup type="radio" name="options" defaultValue={1}   onChange={handleChange} >
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