import React from 'react'; //Necessário para componentes e JSX
import { Switch, Route } from 'react-router-dom'; //Integração com browser

import Title from "./Components/Articles/Title/Title";
import Videos from "./Components/Articles/Videos/Videos";
import Images from "./Components/Articles/Images/Images";
import Author from "./Components/Articles/Author/Author";
import Sponsor from "./Components/Articles/Sponsor/Sponsor";
import Content from "./Components/Articles/Content/Content";
import Description from "./Components/Articles/Description/Description";
import TypeContent from "./Components/Articles/Type/TypeContent";
import PublicationDate from "./Components/Articles/Publication/PublicationDate";
import ThumbnailMobile from "./Components/Articles/Thumbnails/Mobile/ThumbnailMobile";
import ThumbnailDesktop from "./Components/Articles/Thumbnails/Desktop/ThumbnailDesktop";

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