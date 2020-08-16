import React, { Component } from 'react';

export default class menu extends Component {

    render() {
        return (
            <>
                <nav className="menu">
                    <div className="menuDesk">
                        <ul className="menu__list">
                            <li><a href="#"><div></div></a></li>
                            <li className="menu__group"><a href="#0" className="menu__link">filmes</a></li>
                            <li className="menu__group"><a href="#0" className="menu__link">séries</a></li>
                            <li className="menu__group"><a href="#0" className="menu__link">games</a></li>
                            <li className="menu__group"><a href="#0" className="menu__link">últimas</a></li>
                            <li className="menu__group"><a href="#0" className="menu__link">loja</a></li>
                        </ul>
                    </div>
                    <div id="menuToggle">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul id="menu">
                            <li><a href="#">filmes</a></li>
                            <li><a href="#">séries</a></li>
                            <li><a href="#">games</a></li>
                            <li><a href="#">últimas</a></li>
                            <li><a href="#">vídeos</a></li>
                            <li><a href="#">podcast</a></li>
                            <li><a href="#">loja</a></li>
                            <li><a href="#">sobre</a></li>
                        </ul>
                    </div>
                </nav>
            </>
        );
    }
}