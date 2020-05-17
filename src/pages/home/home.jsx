import React from 'react';

import api from "../../services/home.json";

import Menu from '../../components/menu/menu';
import FeaturedMain from '../../components/featured/featuredMain';
import Featured from '../../components/featured/featured';

import '../../assets/styles/css/components/menu/menu.css';
import '../../assets/styles/css/components/featured/featured.css';

export default function article() {

    return(
        <>
            <Menu/>
            {api.map(e => {
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
                                images={e.images} 
                                title={e.title} 
                                description={e.description} 
                                typeContent={e.type_content}
                            />
                        )
                    }
                }
            )}
        </>
    );
}