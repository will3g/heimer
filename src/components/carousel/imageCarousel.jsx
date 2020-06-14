// Componentes: Thumbnail, Título, Type, description
import React, { Component } from 'react';

export default class imageCarousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            api: ''
        };
    }

    componentWillMount() {
        let api = this.props.api;
        this.setState({ api });
    }

    render() {
        return (
            this.state.api.map((e, index) => {
                return (
                    <amp-img key={index} layout="fill" id="image-carousel" src={e.images} width="400" height="300"></amp-img>
                );
            })
        );
    }
}