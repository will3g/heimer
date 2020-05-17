// Componentes: Thumbnail, Título, Type, description
import React, { Component } from 'react';

import Title from '../title/title';
import TypeContent from '../type/typeContent';
import Description from '../description/description';

export default class Featured extends Component {

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
            <div className="div-img-featured">
                <img className="img-featured" src={this.state.images}/>
                <TypeContent typeContent={this.state.typeContent}/>
                <Title title={this.state.title}/>
                <Description description={this.state.description}/>
            </div>
        );
    }
}