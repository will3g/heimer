import React, { Component } from 'react';

export default class videos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: []
        };
    }

    select() {
        if (this.props.id !== undefined) {
            return this.props.id;
        }
        return this.props.match.params.id;
    }

    componentWillMount() {
        let videos = [];

        this.props.videos.map(video => videos.push(video));
        this.setState({videos});
    }

    render() {
        return(
            <div className="wrapper">
                <iframe  
                    src={this.state.videos[this.select()]} 
                    frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                >                    
                </iframe>
            </div>
        );
    }
}