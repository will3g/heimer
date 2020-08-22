// Componentes: Thumbnail, Título, Type, description
import React, { Component } from 'react';

export default class carouselList extends Component {

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

        const attr = {
            image: {
                width: '95px',
                height: '75px'
            }
        }

        return (
            <amp-list layout="fixed-height" src={this.state.api}>
                {
                    this.state.api.map((e, index) => {
                        if (index == 0) {
                            return (
                                <div option={index} key={index} className="artile-list">
                                    <a href={e.url}>
                                        <amp-img className="article-image" src={e.images} 
                                        width={attr.image.width} height={attr.image.height}></amp-img>
                                        <span className="article-title">{e.title}</span>
                                    </a>
                                </div>
                            )
                        }

                        return (
                            <div option={index} key={index} className="artile-list">
                                <a href={e.url}>
                                    <amp-img className="article-image" src={e.images} 
                                    width={attr.image.width} height={attr.image.height}></amp-img>
                                    <span className="article-title">{e.title}</span>
                                </a>
                            </div>
                        )
                    })
                }
            </amp-list>
        );
    }
}