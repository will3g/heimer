import React, { Component } from 'react';

export default class menu extends Component {

    render() {
        return (
            <>
                <nav class="page">
                    <div class="menuDesk">
                        <ul class="menu__list">
                            <li class="menu__group"><a href="#0" class="menu__link">Lorem</a></li>
                            <li class="menu__group"><a href="#0" class="menu__link">Lorem</a></li>
                            <li class="menu__group"><a href="#0" class="menu__link">Lorem</a></li>
                            <li class="menu__group"><a href="#0" class="menu__link">Lorem</a></li>
                            <li class="menu__group"><a href="#0" class="menu__link">Lorem</a></li>
                        </ul>
                    </div>
                    <div id="menuToggle">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul id="menu">
                            <li><a href="#">Lorem</a></li>
                            <li><a href="#">Lorem</a></li>
                            <li><a href="#">Lorem</a></li>
                            <li><a href="#">Lorem</a></li>
                            <li><a href="#">Lorem</a></li>
                            <li><a href="#">Lorem</a></li>
                            <li><a href="#">Lorem</a></li>
                            <li><a href="#">Lorem</a></li>
                        </ul>
                    </div>
                </nav>
            </>
        );
    }
}