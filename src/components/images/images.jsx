import React, { Component } from 'react';

import Article from "../../services/article.json";

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

    componentWillMount() {
        let images = [];

        console.log(`@@@@@@@@@@@@@@@@@@@@@@@
        ${this.props.imagesApiList}`);

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