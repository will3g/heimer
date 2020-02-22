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

    componentDidMount() {
        let videos = [];

        Article.videos.map(video => videos.push(video));
        this.setState({videos});
    }

    render() {
        return(
            this.state.videos.map(video => { 
                return <iframe width="560" height="315" 
                src={video} frameborder="0" allow="accelerometer; 
                autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
            })
        );
    }
}