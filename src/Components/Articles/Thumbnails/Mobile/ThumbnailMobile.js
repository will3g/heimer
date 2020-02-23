import React from 'react';
import { Component } from 'react';

import Article from "../../../../Services/article.json";

export default class ThumbnailMobile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ThumbnailMobile: ''
        };
    }

    componentWillMount() {
        this.setState({ ThumbnailMobile: Article.thumbnail_mobile })
    }

    render() {
        return(
            <img src={this.state.ThumbnailMobile}/>
        );
    }
}