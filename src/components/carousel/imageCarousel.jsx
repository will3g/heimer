// Componentes: Thumbnail, Título, Type, description
import React, { Component } from 'react';

export default class imageCarousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: ''
        };
    }

    componentWillMount() {

        let images = this.props.images;

        this.setState({ images });
    }

    render() {
        return (
            <amp-img layout="responsive" id="image-carousel" src={this.state.images} width="700" height="400"></amp-img>
        );
    }
}