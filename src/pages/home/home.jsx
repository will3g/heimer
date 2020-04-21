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
import Menu from '../../components/menu/menu';

import '../../assets/styles/css/components/menu/menu.css';

export default function article() {
    return(
        <>
            <Menu/>
        </>
    );
}