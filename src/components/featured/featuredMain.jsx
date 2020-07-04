// Componentes: Thumbnail, Título, Type, description
import React, { Component } from 'react';

import Title from '../title/title';
import TypeContent from '../type/typeContent';
import Description from '../description/description';

export default class FeaturedMain extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: '',
            title: '',
            description: '',
            typeContent: ''
        };
    }

    componentWillMount() {

        let images = this.props.images;
        let title = this.props.title;
        let description = this.props.description;
        let typeContent = this.props.typeContent;

        this.setState({ images, title, description, typeContent });
    }

    render() {
        return(
            <article className="div-featured-main">
                <amp-img className="img-featured-main shadow-featured" src={this.state.images}></amp-img>
                <TypeContent typeContent={this.state.typeContent}/>
                <Title title={this.state.title}/>
                <Description description={this.state.description}/>
            </article>
        );
    }
}