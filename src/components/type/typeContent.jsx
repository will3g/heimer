import React, { Component } from 'react';

export default class TypeContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: ''
        };
    }

    componentWillMount() {
        this.setState({ content: this.props.typeContent })
    }

    render() {
        return(
            <p className="type" >{this.state.content}</p>
        );
    }
}