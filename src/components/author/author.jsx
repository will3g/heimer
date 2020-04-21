import React, { Component } from 'react';

export default class Author extends Component {

    constructor(props) {
        super(props);
        this.state = {
            author: ''
        };
    }

    componentWillMount() {
        this.setState({ author: this.props.author })
    }

    render() {
        return(
            <div>                  
                <span>Escrito por: </span><b>{this.state.author}</b>
            </div>
        );
    }
}