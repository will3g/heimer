import React, { Component } from 'react';

export default class thumbnail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Thumbnail: ''
        };
    }

    componentWillMount() {
        this.setState({ Thumbnail: this.props.thumbnail })
    }

    render() {
        return(
            <img src={this.state.Thumbnail}/>
        );
    }
}