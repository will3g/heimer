import React from 'react';
import { Component } from 'react';

import Author from "../Author/Author";
import PublicationDate from "../Publication/PublicationDate";

import Article from "../../../Services/article.json";

import "../../../Assets/style.css"; 
import "../../../Assets/responsive.css";

export default class Title extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: ''
        };
    }

    componentWillMount() {
        this.setState({ title: Article.title })        
    }

    render() {
        return(

            <div class="wrapper">

                <h1 class="title">
                    {this.state.title}                
                </h1>

                <Author />
                <div>
                   Publicado em: <PublicationDate />
                </div>

                <div class="separator"></div>
            </div>
            
        );
    }
}