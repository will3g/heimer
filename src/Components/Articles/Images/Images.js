import React from 'react';
import { Component } from 'react';

import Article from "../../../Services/article.json";

export default class Images extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: []
        };
    }

    componentDidMount() {
        let images = [];
        
        Article.images.map(image => images.push(image));
        this.setState({images});
    }

    render() {
        return(this.state.images.map(image => <img src={image}/>));
    }
}