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

        this.props.images.map(image => images.push(image));
        this.setState({images});
    }

    render() {
        return(
            <div className="wrapper">
                <amp-img alt = "Imagem da materia" src = {this.state.images[this.select()] }>
                    <img alt = "Imagem da materia" src = {this.state.images[this.select()] }/>
                </amp-img>
            </div>
        );
    }
}