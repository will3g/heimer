import React from 'react';
import { Component } from 'react';

import Article from "../services/article.json";

export default class ThumbnailDesktop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ThumbnailDesktop: ''
        };
    }

    componentDidMount() {
        this.setState({ ThumbnailDesktop: Article.thumbnail_desktop })
    }

    render() {
        return(
            <img src={this.state.ThumbnailDesktop}/>
        );
    }
}