import React, { Component } from 'react';

export default class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: []
        };
    }

    componentWillMount() {
        let content = [];

        for (const i in this.props.content) {
            content.push(this.props.content[i]);
        }

        this.setState({content});
    }

    render() {
        return(
            <div className="content">
                {this.state.content.map(content => { 
                    return <p>{content}</p> 
                })}
            </div>
        );
    }
}