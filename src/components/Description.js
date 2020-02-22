import React from 'react';
import { Component } from 'react';

import Article from "../services/article.json";

export default class Description extends Component {

    constructor(props) {
        super(props);
        this.state = {
            description: ''
        };
    }

    componentDidMount() {
        this.setState({ description: Article.description_article })
    }

    render() {
        return(
            <summary>{this.state.description}</summary>
        );
    }
}