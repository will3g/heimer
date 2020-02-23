import React from 'react';
import { Component } from 'react';

import Article from "../../../Services/article.json";

export default class Author extends Component {

    constructor(props) {
        super(props);
        this.state = {
            author: ''
        };
    }

    componentWillMount() {
        this.setState({ author: Article.author })
    }

    render() {
        return(
            <address>
                Escrito por <a rel="author" href="#">{this.state.author}</a>
            </address>
        );
    }
}