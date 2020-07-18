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
                normal: {
                    width: '210px',
                    height: '124px'
                },
                main: {
                    width: '960px',
                    height: '312px'
                },
                list: {
                    width: '960px',
                    height: 'auto'
                }
            }
        }

        return (
            <amp-list id="newslist-container" width={attr.article.list.width} layout="fixed-height" src={this.state.api}>
                <div>
                    <div class="home-news-list-header">
                        <span class="separator"></span>
                    </div>
                    {
                        this.state.api.map((e, index) => {
                            if (e.contrast) {
                                if (index == 1) {
                                    return (
                                        <div option={index} key={index} className={`article-main contrast contrast-${index} info`}>
                                            <a href={e.url}>
                                                <amp-img className="article-image" src={e.images} 
                                                width="400" height={attr.article.main.height}>
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
                                if (index == 4 || index == 5) {
                                    attr.article.main.width = '470px';
                                    attr.article.main.height = '300px';
                                }
                                if (index == 9 || index == 10 || index == 11) {
                                    attr.article.main.width = '306px';
                                    attr.article.main.height = '240px';
                                }
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
                            if (index == 2 || index == 3) {
                                return (
                                    <div option={index} key={index} className={`article-normal normal-${index} info`}>
                                        <a href={e.url}>
                                            <amp-img className="article-image" src={e.images} 
                                            width={attr.article.normal.width} height="144"></amp-img>
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
                                <div option={index} key={index} className="article-normal normal info">
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
                        })
                    }
                </div>
            </amp-list>
        );
    }
}