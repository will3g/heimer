import React from 'react';
import { Component } from 'react';

import Article from "../../../Services/article.json";

export default class Sponsor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sponsor: ''
        };
    }

    componentDidMount() {
        this.setState({ sponsor: Article.sponsor })
    }

    render() {
        return(
            <p>{this.state.sponsor}</p>
        );
    }
}