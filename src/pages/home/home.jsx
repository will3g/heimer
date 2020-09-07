import React from 'react';

// UTILIZADO EM NEWSLIST 1 E CAROUSEL
import api_carousel_and_newslist from "../../services/home.json";
// CAROUSEL
import Carousel from '../../components/carousel/carousel';
// NEWSLIST 1
import Newslist from '../../components/newslist/newslist';

import api_newslist_subhome from "../../services/newslist-3.json";
import NewslistSubhome from '../../components/newslist/newslist-3';

// UTILIZADO EM REVIEW
import Review from '../../components/review/review';
import api_review from "../../services/review.json";

// UTILIZADO EM CONSOLES
import api_consoles from "../../services/consoles.json";
import Consoles from '../../components/consoles/consoles';

// UTILIZADO EM MAIS LIDAS
import api_most_read from "../../services/most-read.json";
import Mostread from '../../components/most-read/mostRead';

// COMPONENTES
import Menu from '../../components/menu/menu';
import Footer from '../../components/footer/footer';
import '../../assets/styles/css/components/home.css';
import '../../assets/styles/css/components/main.min.css';

// URLS:
/*
    http://localhost:3000/
    http://localhost:3000/subhome
*/

export default function Home() {
    return (
        <>
            <Menu/>
            <div className="test">
                {/* <Carousel api={api_carousel_and_newslist}/> */}
                <Newslist api={api_carousel_and_newslist}/>
                <div className="test2">
                    <Review api={api_review}/>
                    <Mostread api={api_most_read}/>
                    <Consoles api={api_consoles}/>
                </div>
            </div>
            {/* <NewslistSubhome api={api_newslist_subhome}/> */}
            <Footer/>
        </>
    );
}