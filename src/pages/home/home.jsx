import React from 'react';

import api from "../../services/home.json";
import Menu from '../../components/menu/menu';
import Carousel from '../../components/carousel/carousel';
import CarouselList from '../../components/carousel-list/carouselList';
import Footer from '../../components/footer/footer';

import '../../assets/styles/css/components/main.min.css';
import '../../assets/styles/css/components/carousel.css';
import '../../assets/styles/css/components/carrouselList.css';
import '../../assets/styles/css/components/image-carousel.css';

export default function Home() {

    return (
        <>
            {/* <Menu/> */}
            <Carousel api={api}/>
            {/* <CarouselList api={api}/> */}
            {/* <Footer/> */}
        </>
    );
}