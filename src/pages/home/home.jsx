import React from 'react';

// UTILIZADO EM NEWSLIST 1 E CAROUSEL
import api_carousel_and_newslist from "../../services/home.json";
// CAROUSEL
// import Carousel from '../../components/carousel/carousel';
//import '../../assets/styles/css/components/carousel.css';
//import '../../assets/styles/css/components/image-carousel.css';
// NEWSLIST 1
import '../../assets/styles/css/components/newslist.css';
import Newslist from '../../components/newslist/newslist';

// NEWSLIST DE SUBHOME
// import '../../assets/styles/css/components/newslist-subhome.css'; // Analisar CSS
// import api_newslist_subhome from "../../services/subhome-newslist.json";
// import NewslistSubhome from '../../components/newslist/newslist-subhome';
//
//import api_newslist_subhome from "../../services/newslist-3.json";
//import NewslistSubhome from '../../components/newslist/newslist-3';

// UTILIZADO EM REVIEW
// import Review from '../../components/review/review';
// import api_review from "../../services/review.json";

// UTILIZADO EM CONSOLES
// import api_consoles from "../../services/consoles.json";
// import Consoles from '../../components/consoles/consoles';

// UTILIZADO EM MAIS LIDAS
// import api_most_read from "../../services/most-read.json";
// import Mostread from '../../components/most-read/mostRead';

// COMPONENTES
// import Menu from '../../components/menu/menu';
// import Footer from '../../components/footer/footer';
//import '../../assets/styles/css/components/main.min.css';

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
            {/* <Mostread api={api_most_read}/> */}
            {/* <Carousel api={api_carousel_and_newslist}/> */}
            <Newslist api={api_carousel_and_newslist}/>
            {/* <Review api={api_review}/> */}
            {/* <Consoles api={api_consoles}/> */}
            {/* <Footer/> */}
        </>
    );
}