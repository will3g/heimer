// Componentes: Thumbnail, Título, Type, description
import React, { Component } from 'react';

import Title from '../title/title';
import TypeContent from '../type/typeContent';
import Description from '../description/description';

export default class Featured extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: '',
            styelImg: '',
            images: '',
            title: '',
            description: '',
            typeContent: ''
        };

    }

    componentWillMount() {
        let styelImg = '';
        let item = this.props.item;
        let images = this.props.images;
        let title = this.props.title;
        let description = this.props.description;
        let typeContent = this.props.typeContent;

        if (item == 4 || item == 5) {
            styelImg = 'shadow-featured';
        }

        this.setState({ item, styelImg, images, title, description, typeContent });
    }

    render() {
        return(
            <article className={`div-featured item-${this.state.item}`}>
                <amp-img className={`img-featured ${this.state.styelImg}`} src={this.state.images}>
                    <img className={`img-featured ${this.state.styelImg}`} src={this.state.images}/>
                </amp-img>
                <TypeContent typeContent={this.state.typeContent}/>
                <Title title={this.state.title}/>
                <Description description={this.state.description}/>
            </article>
        );
    }
}