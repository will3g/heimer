import React, { Component } from 'react';

export default class Advertising extends Component {

    constructor(props) {
        super(props);
        this.state = {
            adv: '',
            item: ''
        };
    }

    componentWillMount() {
        let adv = this.props.adv
        let item = this.props.item

        this.setState({ adv, item })
    }

    render() {
        return (
            <div id={`adv-${this.state.item}`} className="adv">
                <div className="banner-wrapper">
                    <div></div>
                </div>
            </div>
        );
    }
}