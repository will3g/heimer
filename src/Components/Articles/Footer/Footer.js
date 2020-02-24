import React from 'react';
import { Component } from 'react';

import Article from "../../../Services/article.json";

export default class Footer extends Component {

    constructor(props) 
    {
        super(props);
        this.state = {
            logo: ''
        };
    }

    componentDidMount()
    {
        let endereco_logo = Article.footer.logo;
        this.setState({ logo :  endereco_logo })
    }  

    render() 
    {
        return(

            <footer>
                <ul>
                    <li>Home</li>
                    <li>Materias</li>
                    <li>Contato</li>
                    <li>Sobre</li>
                </ul>
            </footer>
            
        );
    }

}