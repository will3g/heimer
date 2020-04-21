import React, { Component } from 'react';

export default class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            logo: ''
        };
    }

    componentDidMount() {
        this.setState({ logo : this.props.logo })
    }  

    render() {
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