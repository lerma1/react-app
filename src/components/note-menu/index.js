import React, {Component} from 'react';

class NoteMenu extends Component {

    constructor(props){
        super(props)

        this.state = {

        }
    }

    handleClick = () =>{
        this.setState({isOpen: !this.state.isOpen});
        console.log('---','clicked');
    }

    render() {
        const {article} = this.props;
        console.log(this.props);
        var body = this.state.isOpen&&<section className="card-text">{article.text}</section>;
        var buttonText = this.state.isOpen?'close':'open';

        return (
            <div className="card mx-auto" style={{width:'50%'}}>
                <h2 className="card-header">
                    {article.title}
                    <button className="btn btn-primary float-right" onClick={this.handleClick}>{buttonText}</button>
                </h2>

                <div className="card-body">
                    <h6 className="card-subtitle text-muted">creation date: {(new Date(article.date)).toDateString()}</h6>
                    {body}
                </div>
            </div>
        )
    }
}



export default Article