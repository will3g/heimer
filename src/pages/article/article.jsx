import React, { Component } from 'react';

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

export default class Article extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            thumbnail: '',
            description: '',
            author: '',
            publication_date: '',
            sponsor: '',
            type_content: '',
            images: [],
            videos: '',
            content: '',
            footer_logo: ''
        };
    }

    componentWillMount() {
        articleAPI.forEach(article => {
            let url = `/${window.location.href.split('/')[3]}`;
            if (url == article.url) {
                this.setState({ 
                    title: article.title,
                    thumbnail: article.thumbnail,
                    description: article.description,
                    author: article.author,
                    publication_date: article.publication_date,
                    sponsor: article.sponsor,
                    type_content: article.type_content,
                    images: article.images,
                    videos: article.videos,
                    content: article.content,
                    footer_logo: article.footer.logo
                })
            }
        });
    }

    render() {
        return(
            <>
                <Title title={this.state.title}/>
                <Thumbnail thumbnail={this.state.thumbnail}/>
                <Description description={this.state.description}/>
                <Author author={this.state.author}/>
                <PublicationDate publicationDate={this.state.publication_date}/>
                <Sponsor sponsor={this.state.sponsor}/>
                <TypeContent typeContent={this.state.type_content}/>
                <Images images={this.state.images} id="1"/>
                <Videos videos={this.state.videos} id="1"/>
                <Content content={this.state.content}/>
                <Footer logo={this.state.footer_logo}/>
            </>
        );
    }
}