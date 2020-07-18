import React from 'react';

// UTILIZADO EM NEWSLIST E CAROUSEL
//import api from "../../services/home.json";

// UTILIZADO EM NEWSLIST DE SUBHOME
import api from "../../services/subhome-newslist.json";

// UTILIZADO EM REVIEW
//import api from "../../services/review.json";

// UTILIZADO EM CONSOLES
//import api from "../../services/consoles.json";

// UTILIZADO EM MAIS LIDAS
//import api from "../../services/most-read.json";

// COMPONENTES
//import Menu from '../../components/menu/menu';
//import Footer from '../../components/footer/footer';
//import Review from '../../components/review/review';
//import Consoles from '../../components/consoles/consoles';
//import Newslist from '../../components/newslist/newslist';
import NewslistSubhome from '../../components/newslist/newslist-subhome';
//import Mostread from '../../components/most-read/mostRead';

// ESTILIZAÇÃO COMPONENTES
//import '../../assets/styles/css/components/review.css';
//import '../../assets/styles/css/components/consoles.css';
//import '../../assets/styles/css/components/main.min.css';
//import '../../assets/styles/css/components/newslist.css';
import '../../assets/styles/css/components/newslist-subhome.css';
//import '../../assets/styles/css/components/most-read.css';

// UTILIZADO EM CARROSSEL
//import Carousel from '../../components/carousel/carousel';
//import CarouselList from '../../components/carousel-list/carouselList';
// ESTILIZAÇÃO CARROSSEL
//import '../../assets/styles/css/components/carousel.css';
//import '../../assets/styles/css/components/image-carousel.css';


// URLS:
/*
    http://localhost:3000/
    http://localhost:3000/subhome
*/

// NÃO CHAMAR MAIS DE UM COMPONENTE POR VEZ, VAI QUEBRAR O CSS
export default function Home() {
    return (
        <>
            {/* <Menu/> */}
            {/* <Mostread api={api}/> */}
            {/* <Carousel api={api}/> */}
            <NewslistSubhome api={api}/>
            {/* <Review api={api}/> */}
            {/* <Consoles api={api}/> */}
            {/* <Footer/> */}
        </>
    );
}