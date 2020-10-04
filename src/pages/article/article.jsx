import React from 'react';

import articleAPI from "../../services/article.json";

import Title from "../../components/title/title";
import Footer from "../../components/footer/footer";
import Videos from "../../components/videos/videos";
import Images from "../../components/images/images";
import Author from "../../components/author/author";
import Sponsor from "../../components/sponsor/sponsor";
import Content from "../../components/content/content";
import Description from "../../components/description/description";
import TypeContent from "../../components/type/typeContent";
import PublicationDate from "../../components/publication/publicationDate";
import Thumbnail from "../../components/thumbnail/thumbnail";

// import '../../assets/styles/css/components/main.min.css';

export default function article() {
    return(
        <>
            <Title title={articleAPI.title}/>
            <Thumbnail thumbnail={articleAPI.thumbnail}/>
            <Description description={articleAPI.description}/>
            <Author author={articleAPI.author}/>
            <PublicationDate publicationDate={articleAPI.publication_date}/>
            <Sponsor sponsor={articleAPI.sponsor}/>
            <TypeContent typeContent={articleAPI.type_content}/>
            <Images images={articleAPI.images} id="1"/>
            <Videos videos={articleAPI.videos} id="1"/>
            <Content content={articleAPI.content}/>
            <Footer logo={articleAPI.footer.logo}/>
        </>
    );
}