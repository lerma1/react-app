import React, {Component} from 'react';
import NoteMenu from "../note-menu";
import './style.css'



class Note extends Component {
    constructor(props){
        super(props)

        this.state = {
            title: props.note.title,
            text: props.note.text,
            img: props.note.img,
            isHover: false,
        }

        console.log(props);
    }

    handleClick = () =>{
      alert(this.state.img);

    }

    handleMouseenter = () =>{
       this.setState({isHover:true});
       console.log("наведение! " +  this.state.isHover);
    }

    render() {
        var img = this.state.img&&(<img src={this.state.img} className="card-img-top" alt="..."/>);


        return (
            <div className="card  " onClick={this.handleClick} >
                {img}
                <div className="card-body pb-1">

                    <h3 className="new-note__input w-100 text-secondary">{this.state.title}</h3>
                    <h5 className="new-note__input w-100 text-secondary">{this.state.text}</h5>
                    <div data-toggle="">
                        <NoteMenu className="" />
                    </div>
                </div>
            </div>

        )
    }
}

export default Note