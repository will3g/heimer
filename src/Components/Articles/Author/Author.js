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

    componentDidMount() {
        this.setState({ author: Article.author })
    }

    render() {
        return(
            <div>                  
                <address>
                    <span>Escrito por: </span><b>{this.state.author}</b>
                </address>
            </div>
        );
    }
}