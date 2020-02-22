import React from 'react';
import { Component } from 'react';

import Article from "../../../Services/article.json";

export default class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: []
        };
    }

    componentDidMount() {
        let content = [];

        for (const i in Article.content) {
            content.push(Article.content[i]);
        }

        this.setState({content});
    }

    render() {
        return(
            this.state.content.map(content => { 
                return <p>{content}</p> 
            })
        );
    }
}