// Componentes: Thumbnail, Título, Type, description
import React, { Component } from 'react';

export default class consoles extends Component {

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
            <div className="container">
                <a href="#" className="header-console">Consoles</a>
                <amp-list id="console" layout="fixed-height" src={this.state.api}>
                {
                    this.state.api.map((e, index) => {
                        return (
                            <div option={index} key={index} className="console-list">
                                <amp-img className="console-image" src={e.thumbnail} 
                                width={attr.image.width} height={attr.image.height}>
                                    {
                                        e.consoles.map((e, index) => {
                                            return(
                                                <a className={`${e.slug}-${index}`} href={e.url}>
                                                    <span className="info console-title">{e.console}</span>
                                                </a>
                                            )
                                        })
                                    }
                                </amp-img>
                            </div>
                        )
                    })
                }
                </amp-list>
                <a href="#" className="footer-console">Veja todas</a>
                <div className="footer-console-logo"></div>
            </div>
        );
    }
}