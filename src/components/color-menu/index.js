import React, {Component} from 'react';
import './style.css'
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";




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
            <OverlayTrigger  overlay={ <Tooltip >{color.tooltip}</Tooltip>}><button key ={color.code} className="color-menu_button " onClick={this.props.onSetColorNewNote} style={{"background-color": color.code}}  data-color = {color.name} >
                {color.name===this.props.color?'✔':''}
            </button></OverlayTrigger>);




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

