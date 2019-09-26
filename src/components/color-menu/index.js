import React, {Component} from 'react';
import './style.css'
import {WHITE,YELLOW,RED,BLUE} from "../../constants/colors";
import Dropdown from "react-bootstrap/Dropdown";



class ColorMenu extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);

        this.state = { value: '' };
    }

    handleChange(e) {
        this.setState({ value: e.target.value.toLowerCase().trim() });
    }

    render() {
        const {children,style,className,'aria-labelledby': labeledBy} = this.props;
        const { value } = this.state;

        return (
            <div style={style} className={className} aria-labelledby={labeledBy}>
            <div className="d-inline-flex  p-2 flex-row  "  >

                <button className="color-menu_button " style={{"background-color": WHITE}} data-toggle="tooltip" data-placement="bottom" title="Белый"> ✔ </button>
                <button className="color-menu_button " style={{"background-color": YELLOW}} data-toggle="tooltip" data-placement="bottom" title="Желтый"> </button>
                <button className="color-menu_button" style={{"background-color": RED}} data-toggle="tooltip" data-placement="bottom" title="Красный"> </button>
                <button className="color-menu_button " style={{"background-color": BLUE}} data-toggle="tooltip" data-placement="bottom" title="Синий"> </button>

            </div>
            </div>
        )
    }
}

export default ColorMenu
/*
<Dropdown.Item eventKey="1">Red</Dropdown.Item>
<Dropdown.Item eventKey="2">Blue</Dropdown.Item>
<Dropdown.Item eventKey="3" active>
Orange
</Dropdown.Item>
<Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
*/
