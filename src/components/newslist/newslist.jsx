// Componentes: Thumbnail, Título, Type, description
import React, { Component } from 'react';

import '../../assets/styles/css/components/newslist.css';

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
            <amp-list id="newslist-container-1" layout="fixed-height" src={this.state.api}>
                <div>
                    <header class="newslist-header">
                        <a href="/novidades/" class="newslist-header-title">Novidades</a>
                        <span class="separator-newslist"></span>
                        <a href="/novidades/" class="newslist-header-tags-btn">ver todas</a>
                    </header>
                    {
                        this.state.api.map((e, index) => {
                            if (index % 4) {
                                return (
                                    <div option={index} key={index} className="article-normal-newslist info-newslist">
                                        <a href={e.url}>
                                            <amp-img src={e.images} 
                                            width={attr.article.normal.width} height={attr.article.normal.height}></amp-img>
                                        </a>
                                        <div>
                                            <span className="vertical-newslist-info link-newslist">há mais de 16 horas</span>
                                            <a className="link-newslist vertical-newslist-title" href={e.url}><span>{e.title}</span></a>
                                            <a className="vertical-newslist-info link-newslist" href='/plataformas'><span>Plataformas</span></a>
                                        </div>
                                    </div>
                                )
                            }

                            return (
                                <div option={index} key={index} className="article-main-newslist info-newslist">
                                    <a href={e.url}>
                                        <amp-img src={e.images} 
                                        width={attr.article.main.width} height={attr.article.main.height}>
                                            <div>
                                                <span className="home-big-more-info-newslist">há mais de 16 horas</span>
                                                <a className="home-big-title-newslist" href={e.url}><span>{e.title}</span></a>
                                                <a className="home-big-more-info-newslist" href='/plataformas'><span>Plataformas</span></a>
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