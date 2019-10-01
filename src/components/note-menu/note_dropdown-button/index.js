import React  from 'react';


export default class DropdownButton extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.url = props.url;
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.onClick(e);
    }

    render() {
        return (
            <button onClick={this.handleClick} className="btn  m-1 dropdown-toggle note-menu__img-button"  style={{"background-image":this.url,'background-origin': 'border-box',
                'background-repeat': 'no-repeat',
                'width': '20px',
                'height': '20px',}} />

        );
    }
}