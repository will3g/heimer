import React, { Component } from 'react';

export default class publicationDate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: ''
        };
    }

    componentWillMount() {
        this.setState({ date: this.props.publicationDate })
    }

    render() {
        return(
            <time>
                <span>Data de publicação: <b>{this.state.date}</b></span>
            </time>
        );
    }
}