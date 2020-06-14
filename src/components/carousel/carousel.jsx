// Componentes: Thumbnail, Título, Type, description
import React, { Component } from 'react';

import ImageCarousel from './imageCarousel';
import CarouselList from '../carousel-list/carouselList';

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
                <amp-selector id="carouselWithPreviewSelector" class="carousel-preview" 
                on="select:carouselWithPreview.goToSlide(index=event.targetOption)" layout="container" autoplay delay="2000">
                    <CarouselList api={this.state.api}/>
                </amp-selector>
                <amp-carousel id="carouselWithPreview" width="400" height="300" layout="responsive" type="slides" 
                on="slideChange:carouselWithPreviewSelector.toggle(index=event.index, value=true)" autoplay delay="2000">
                    <ImageCarousel api={this.state.api}/>
                </amp-carousel>
                <a href="#id5">click</a>
            </div>
        );
    }
}