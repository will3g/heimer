// Componentes: Thumbnail, Título, Type, description
import React, { Component } from 'react';

export default class review extends Component {

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
                width: 'auto',
                height: '75px'
            }
        }

        return (
            <div className="container-review">
                <a href="#" className="header-review">Análises</a>
                <amp-list id="review" layout="fixed-height" src={this.state.api}>
                {
                    this.state.api.map((e, index) => {
                        if (index == 0) {
                            return (
                                <div option={index} selected key={index} className="artile-list">
                                    <a href={e.url}>
                                        <amp-img className="article-image selected" src={e.images} 
                                        width={attr.image.width} height={attr.image.height}>
                                            <span className="info article-title">{e.title}</span>
                                            <span className="info plataform">{e.plataform}</span>
                                            <svg className="rate" fill="#ffae00" width="46" height="54" viewBox="0 0 46 54">
                                                <path d="M46 40.28L23 54 0 40.28V14.29L23 0l23 14.29v25.99z">
                                                </path>
                                            </svg>
                                            <span className="info score">{e.score}</span>
                                        </amp-img>
                                    </a>
                                </div>
                            )
                        }

                        return (
                            <div option={index} key={index} className="artile-list">
                                <a href={e.url}>
                                    <amp-img className="article-image" src={e.images} 
                                    width={attr.image.width} height={attr.image.height}>
                                        <span className="info article-title">{e.title}</span>
                                        <span className="info plataform">{e.plataform}</span>
                                        <svg class="rate" fill="#ffae00" width="46" height="54" viewBox="0 0 46 54">
                                            <path d="M46 40.28L23 54 0 40.28V14.29L23 0l23 14.29v25.99z">
                                            </path>
                                        </svg>
                                        <span className="info score">{e.score}</span>
                                    </amp-img>
                                </a>
                            </div>
                        )
                    })
                }
            </amp-list>
                <a href="#" className="footer-review">Veja todas</a>
                <div className="footer-review-logo"></div>
            </div>
        );
    }
}