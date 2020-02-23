import React from 'react';
import { Component } from 'react';

import Article from "../../../Services/article.json";

export default class Videos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: []
        };
    }

    select() {
        if (this.props.id !== undefined) {
            return this.props.id;
        }
        return this.props.match.params.id;
    }

    componentWillMount() {
        let videos = [];

        Article.videos.map(video => videos.push(video));
        this.setState({videos});
    }

    render() {
        return(
            <iframe width="560" height="315" 
                src={this.state.videos[this.select()]} frameborder="0" allow="accelerometer; 
                autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
        );
    }
}