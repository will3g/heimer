import React from 'react';
import { Component } from 'react';

import Article from "../../../Services/article.json";

export default class Description extends Component {

    constructor(props) {
        super(props);
        this.state = {
            description: ''
        };
    }

    componentWillMount() {
        this.setState({ description: Article.description })
    }

    render() {
        return(
            <summary>{this.state.description}</summary>
        );
    }
}