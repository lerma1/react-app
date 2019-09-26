import React, {Component} from 'react';
import './style.css'




class ColorMenu extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);

        this.state = { isChecked: this.props.color};
    }

    handleChange(e) {
        this.setState({ value: e.target.value.toLowerCase().trim() });
    }

    render() {
        const {style,className,'aria-labelledby': labeledBy} = this.props;

        const colorElements = this.props.colors.map((color, index) =>
            <button key ={color.code} className="color-menu_button " onClick={this.props.onSetColorNewNote} style={{"background-color": color.code}} data-color = {color.name} data-toggle="tooltip" data-placement="bottom" title={color.name}>
                {color.name===this.props.color?'✔':''}
            </button>);




        return (
            <div style={style} className={className} aria-labelledby={labeledBy}>
            <div className="d-inline-flex  p-2 flex-row  "  >
                {colorElements}
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
