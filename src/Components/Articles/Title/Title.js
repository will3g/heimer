import React from 'react';
import { Component } from 'react';

import Article from "../../../Services/article.json";

export default class Title extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: ''
        };
    }

    componentDidMount() {
        this.setState({ title: Article.title })
    }

    render() {
        return(
            <h1>{this.state.title}</h1>
        );
    }
}