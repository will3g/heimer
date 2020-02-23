import React from 'react';
import { Component } from 'react';

import Article from "../../../Services/article.json";

export default class TypeContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: ''
        };
    }

    componentWillMount() {
        this.setState({ content: Article.type_content })
    }

    render() {
        return(
            <p>{this.state.content}</p>
        );
    }
}