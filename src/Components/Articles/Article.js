import React from 'react';

import Title from "./Title/Title";
import Matter from "./Matter/Matter";
import Footer from "./Footer/Footer";
import Videos from "./Videos/Videos";
import Images from "./Images/Images";
import Author from "./Author/Author";
import Sponsor from "./Sponsor/Sponsor";
import Content from "./Content/Content";
import Description from "./Description/Description";
import TypeContent from "./Type/TypeContent";
import PublicationDate from "./Publication/PublicationDate";
import ThumbnailMobile from "./Thumbnails/Mobile/ThumbnailMobile";
import ThumbnailDesktop from "./Thumbnails/Desktop/ThumbnailDesktop";

export default function home() {
    return(
        <>
            <Title />
            <Images id="1" />
            <Matter />
            <Videos id="1" />
            <Footer />
            {/* 
            <Author /> */}
            {/* 
            
            
            <Footer /> */}
        </>
    );
}