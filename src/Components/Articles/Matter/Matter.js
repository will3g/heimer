import React from 'react';
import { Component } from 'react';

import Article from "../../../Services/article.json";

export default class Matter extends Component {

    constructor(props) 
    {
        super(props);
        this.state = {
            content: ''
        };
    }

    componentDidMount()
    {
        let text = Article.content;
        this.setState({ content :  text })
    }  

    render() 
    {
        return(

            <div class="wrapper">

                <div class = "matter">
                    <p>{this.state.content.paragraphe_1}</p>
                    <p>{this.state.content.paragraphe_2}</p>
                    <p>{this.state.content.paragraphe_3}</p>
                </div>

            </div>
            
            
        );
    }

}