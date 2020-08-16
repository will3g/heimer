// Componentes: Thumbnail, Título, Type, description
import React, { Component } from 'react';

export default class mostread extends Component {

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
                height: '175px'
            }
        }

        return (
            <div className="container-most-read">
                <a href="#" className="header-most-read">Mais lidas</a>
                <amp-list id="most-read" layout="fixed-height" src={this.state.api}>
                {
                    this.state.api.map((e, index) => {
                        return (
                            <div option={index} key={index} className="artile-list-most-read">
                                {e.thumbnails.map(thumb => {
                                    console.log(window.matchMedia(thumb.size).matches)
                                    
                                    if (window.matchMedia(thumb.size).matches) {
                                        return(
                                            <amp-img src={thumb.thumbnail} 
                                            width={attr.image.width} height={attr.image.height}>
                                                <a href={e.url}>
                                                    <span className="info-most-read article-title-most-read">{e.title}</span>
                                                </a>
                                            </amp-img>
                                        )
                                    }
                                })}
                            </div>
                        )
                    })
                }
            </amp-list>
                <a href="#" className="footer-most-read">Veja todas</a>
                <div className="footer-most-read-logo"></div>
            </div>
        );
    }
}


/*  Exemplo de crops para o componente de mais lidas
    {
        "title": "F1 2020 traz o melhor do automobilismo aos consoles e computador",
        "url": "/f1-2020",
        "thumbnails": [
            {
                "size": "",
                "thumbnail": "https://img1.ibxk.com.br/2020/05/13/13124904103180.jpg?w=290&h=70&mode=crop"
            },
            {
                "size": "(min-width: 2768px)",
                "thumbnail": "https://img1.ibxk.com.br/2020/05/13/13124904103180.jpg?w=690&h=70&mode=crop"
            },
            {
                "size": "(min-width: 2576px)",
                "thumbnail": "https://img1.ibxk.com.br/2020/05/13/13124904103180.jpg?w=510&h=70&mode=crop"
            },
            {
                "size": "(min-width: 21024px)",
                "thumbnail": "https://img1.ibxk.com.br/2020/05/13/13124904103180.jpg?w=575&h=70&mode=crop"
            }
        ]
    }
*/