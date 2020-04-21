import React, { Component } from 'react';

export default class Sponsor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sponsor: ''
        };
    }

    componentWillMount() {
        this.setState({ sponsor: this.props.sponsor })
    }

    render() {
        return(
            <div className="classe">
                <p>{this.state.sponsor}</p>
            </div>
        );
    }
}