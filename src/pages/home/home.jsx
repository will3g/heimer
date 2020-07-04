import React from 'react';

//import api from "../../services/review.json";
import api from "../../services/home.json";

// import Menu from '../../components/menu/menu';
// import Carousel from '../../components/carousel/carousel';
// import CarouselList from '../../components/carousel-list/carouselList';
// import Review from '../../components/review/review';
// import Footer from '../../components/footer/footer';
import Newslist from '../../components/newslist/newslist';

//import '../../assets/styles/css/components/main.min.css';

import '../../assets/styles/css/components/newslist.css';

export default function Home() {

    return (
        <>
            <Newslist api={api}/>
        </>
    );
}


// {/* <Menu/> */}
// {/* <Carousel api={api}/> import '../../assets/styles/css/components/carousel.css'; import '../../assets/styles/css/components/image-carousel.css';*/}
// {/* <Review api={api}/>  import '../../assets/styles/css/components/review.css'; */}
// {/* <Footer/> */}