// Componentes: Thumbnail, Título, Type, description
import React, { Component } from 'react';

import ImageCarousel from './imageCarousel';

export default class carousel extends Component {

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
            <div id="carousel">
                    <amp-carousel width="700" height="400" layout="responsive" type="slides" autoplay lightbox>
                    {
                        this.state.api.map((e, index) => {
                            return (
                                <ImageCarousel images={e.images} key={index} />
                            )
                        })
                    }
                </amp-carousel>
            </div>
        );
    }
}