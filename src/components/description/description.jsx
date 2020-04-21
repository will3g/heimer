import React, { Component } from 'react';

export default class Description extends Component {

    constructor(props) {
        super(props);
        this.state = {
            description: ''
        };
    }

    componentWillMount() {
        this.setState({ description: this.props.description })
    }

    render() {
        return(
            <summary>{this.state.description}</summary>
        );
    }
}