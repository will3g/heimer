import React, { Component } from 'react';

export default class Title extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: ''
        };
    }

    componentWillMount() {
        this.setState({ title: this.props.title })        
    }

    render() {
        return(
            <div class="wrapper">
                <h1 class="title">{this.state.title}</h1>
            </div>
        );
    }
}