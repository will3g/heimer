import React from 'react'; //Necessário para componentes e JSX
import { Switch, Route } from 'react-router-dom'; //Integração com browser

import home from "../pages/home/home";
import subhome from "../pages/subhome/subhome";
import Article from "../pages/article/article";
import articleAPI from "../services/article.json";

export default function Routes() { //Aqui exportando as rotas como padrão para ser consumida em outros arquivos JS
  return ( //Vai retorar as rotas
    <Switch> {/* Serve para garantir que apenas uma rota seja chamada por requisição*/}
      <Route exact path="/" component={home}/>
      <Route path="/subhome" component={subhome}/>
      {articleAPI.map(art => {
        return(<Route path={art.url} component={Article}/>);
      })}
    </Switch>
  );
}