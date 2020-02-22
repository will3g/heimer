import React from 'react'; //Necessário para componentes e JSX
import { Switch, Route } from 'react-router-dom'; //Integração com browser

import Title from "./components/Title";
import Videos from "./components/Videos";
import Images from "./components/Images";
import Author from "./components/Author";
import Sponsor from "./components/Sponsor";
import Content from "./components/Content";
import Description from "./components/Description";
import TypeContent from "./components/TypeContent";
import PublicationDate from "./components/PublicationDate";
import ThumbnailMobile from "./components/ThumbnailMobile";
import ThumbnailDesktop from "./components/ThumbnailDesktop";

export default function Routes() { //Aqui exportando as rotas como padrão para ser consumida em outros arquivos JS
  return ( //Vai retorar as rotas
    <Switch> {/* Serve para garantir que apenas uma rota seja chamada por requisição*/}
      <Route exact path="/"/>
      <Route path="/title" component={Title}/>
      <Route path="/images" component={Images}/>
      <Route path="/videos" component={Videos}/>
      <Route path="/author" component={Author}/>
      <Route path="/content" component={Content}/>
      <Route path="/sponsor" component={Sponsor}/>
      <Route path="/type" component={TypeContent}/>
      <Route path="/date" component={PublicationDate}/>
      <Route path="/description" component={Description}/>
      <Route path="/thumb-mobile" component={ThumbnailMobile}/>
      <Route path="/thumb-desktop" component={ThumbnailDesktop}/>
    </Switch>
  );
}