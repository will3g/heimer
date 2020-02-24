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

    select() {
        if (this.props.id !== undefined) {
            return this.props.id;
        }
        return this.props.match.params.id;
    }

    componentDidMount() {
        let images = [];

        Article.images.map(image => images.push(image));
        this.setState({images});
    }

    render() {
        return(

            <div class="wrapper">

                <img 
                    alt = "Imagem da materia" 
                    src = {this.state.images[this.select()] }                                      
                />

            </div>
            
        );
    }
}