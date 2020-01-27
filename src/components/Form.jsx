import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleClickDel = this.handleClickDel.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    handleClick() {
        this.props.add(this.state.value);
        this.setState({
            value: ''
        })
    };

    handleClickDel() {
        this.props.remove(this.state.value);
        this.setState({
            value: ''
        })
    };

    render() {
        return (
            <div>
                <input type={"text"} value={this.state.value} onChange={(e) => this.handleChange(e)}/>
                <button onClick={this.handleClick}>Submit</button>
                <button onClick={this.handleClickDel}>Delete</button>
            </div>
        );
    }
}

export default Form;