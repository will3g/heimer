// Componentes: Thumbnail, Título, Type, description
import React, { Component } from 'react';

export default class newslistSubhome extends Component {

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
                main: {
                    width: '960px',
                    height: '312px'
                },
                normal: {
                    width: '470px',
                    height: '300px'
                },
                list: {
                    width: '306.67px',
                    height: '210px'
                }
            }
        }

        return (
            <amp-list id="newslist-container" width={attr.article.list.width} layout="fixed-height" src={this.state.api}>
                <div id="list">
                    <div class="home-news-list-header">
                        <span class="separator"></span>
                    </div>
                    {
                        this.state.api.map((e, index) => {
                            if (index === 0) {
                                return (
                                    <div option={index} key={index} className={`article-main contrast contrast-${index} info`}>
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
                            }
                            if (index === 1 || index === 2) {
                                return (
                                    <div option={index} key={index} className={`article-main contrast contrast-${index} info`}>
                                        <a href={e.url}>
                                            <amp-img className="article-image" src={e.images} 
                                            width={attr.article.normal.width} height={attr.article.normal.height}>
                                                <div>
                                                    <span className="home-middle-more-info">há mais de 16 horas</span>
                                                    <a className="home-middle-news-title" href={e.url}><span>{e.title}</span></a>
                                                    <a className="home-middle-more-info" href='/plataformas'><span>Plataformas</span></a>
                                                </div>
                                            </amp-img>
                                        </a>
                                    </div>
                                )
                            }
                            return (
                                <div option={index} key={index} className={`article-main contrast contrast-${index} info`}>
                                    <a href={e.url}>
                                        <amp-img className="article-image" src={e.images} 
                                        width={attr.article.list.width} height={attr.article.list.height}>
                                            <div>
                                                <span className="home-small-more-info">há mais de 16 horas</span>
                                                <a className="home-small-news-title" href={e.url}><span>{e.title}</span></a>
                                                <a className="home-small-more-info" href='/plataformas'><span>Plataformas</span></a>
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