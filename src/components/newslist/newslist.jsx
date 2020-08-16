// Componentes: Thumbnail, Título, Type, description
import React, { Component } from 'react';

export default class newslist extends Component {

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
            article: {
                normal: {
                    width: '210px',
                    height: '124px'
                },
                main: {
                    width: '610px',
                    height: '312px'
                }
            }
        }

        return (
            <amp-list id="newslist-container" layout="fixed-height" src={this.state.api}>
                <div>
                    <header class="home-news-list-header">
                        <a href="/novidades/" class="home-news-list-header-title">Novidades</a>
                        <span class="separator"></span>
                        <a href="/novidades/" class="home-news-list-header-tags-btn">ver todas</a>
                    </header>
                    {
                        this.state.api.map((e, index) => {
                            if (index % 4) {
                                return (
                                    <div option={index} key={index} className="article-normal info">
                                        <a href={e.url}>
                                            <amp-img className="article-image" src={e.images} 
                                            width={attr.article.normal.width} height={attr.article.normal.height}></amp-img>
                                        </a>
                                        <div>
                                            <span className="home-vertical-news-info link">há mais de 16 horas</span>
                                            <a className="link home-vertical-news-title" href={e.url}><span>{e.title}</span></a>
                                            <a className="home-vertical-news-info link" href='/plataformas'><span>Plataformas</span></a>
                                        </div>
                                    </div>
                                )
                            }

                            return (
                                <div option={index} key={index} className="article-main info">
                                    <a href={e.url}>
                                        <amp-img className="article-image" src={e.images} 
                                        width={attr.article.main.width} height={attr.article.main.height}>
                                            <div>
                                                <span className="home-big-more-info">há mais de 16 horas</span>
                                                <a className="home-big-news-title" href={e.url}><span>{e.title}</span></a>
                                                <a className="home-big-more-info" href='/plataformas'><span>Plataformas</span></a>
                                            </div>
                                        </amp-img>
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </amp-list>
        );
    }
}