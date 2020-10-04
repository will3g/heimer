import React, { Component } from 'react';

import '../../assets/styles/css/components/footer.css';

export default class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            logo: ''
        };
    }

    componentDidMount() {
        this.setState({ logo: this.props.logo })
    }

    render() {
        return (
            <footer className="footer">
                <div class="col-12 col-xl-8">
                    <ul class="footer-nav">
                        <li class="footer-nav-item">
                            <a href="#" class="footer-nav-link" target="_blank">Lorem</a>
                        </li>
                        <li class="footer-nav-item">
                            <a href="#" class="footer-nav-link" target="_blank">Lorem</a>
                        </li>
                        <li class="footer-nav-item">
                            <a href="#" class="footer-nav-link" target="_blank">Lorem</a>
                        </li>
                        <li class="footer-nav-item">
                            <a href="#" class="footer-nav-link" target="_blank">Lorem</a>
                        </li>
                        <li class="footer-nav-item">
                            <a href="#" class="footer-nav-link" target="_blank">Lorem</a>
                        </li>
                        <li class="footer-nav-item">
                            <a href="#" class="footer-nav-link" target="_blank">Lorem</a>
                        </li>
                        <li class="footer-nav-item">
                            <a href="#" class="footer-nav-link" target="_blank">Lorem</a>
                        </li>
                    </ul>
                    <div class="footer-copy">
                        <p className="copy">© Copyright 2020 - LOREM, todos os direitos reservados.</p>
                    </div>
                </div>
            </footer>
        );
    }

}