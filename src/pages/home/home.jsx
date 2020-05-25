import React from 'react';

import api from "../../services/home.json";

import Menu from '../../components/menu/menu';
import Featured from '../../components/featured/featured';
import FeaturedMain from '../../components/featured/featuredMain';
import Advertising from '../../components/advertising/advertising';
import Footer from '../../components/footer/footer';

import '../../assets/styles/css/components/menu/menu.css';
import '../../assets/styles/css/components/advertising/advertising.css';
import '../../assets/styles/css/components/featured/featured.css';
import '../../assets/styles/css/components/footer/footer.css';
import '../../assets/styles/css/components/featured/featured-main.css';

export default function Home() {

    return(
        <>
            <Menu/>
            <div className="content">
                {api.map((e, index) => {
                        if (e.featured_main) {
                            return( 
                                <FeaturedMain 
                                    images={e.images} 
                                    title={e.title} 
                                    description={e.description} 
                                    typeContent={e.type_content}
                                />
                            )
                        } else {
                            return(
                                <Featured 
                                    item={index}
                                    images={e.images} 
                                    title={e.title} 
                                    description={e.description} 
                                    typeContent={e.type_content}
                                />
                            )
                        }
                    }
                )}
                <Advertising adv="fake" item={1}/>
                <Advertising adv="fake" item={2}/>
            </div>
            <Footer/>
        </>
    );
}