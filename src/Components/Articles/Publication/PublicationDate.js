import React from 'react';
import { Component } from 'react';

import Article from "../../../Services/article.json";

export default class PublicationDate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: ''
        };
    }

    componentWillMount() {
        this.setState({ date: Article.publication_date })
    }

    render() {
        return(
            <summary>{this.state.date}</summary>
        );
    }
}