import React from 'react';
import Routes from "./routes/routes";
import { BrowserRouter } from 'react-router-dom'; //Serve para navegar o usuário no sistema

export default function App() { //Exportando o App como padrão para ser consumido em outros aquivos JS
  return (
    <BrowserRouter> {/* Serve para navegar o usuário no sistema */}
      <Routes/> {/* Aqui estamos chamando as rotas de routes.js */}
    </BrowserRouter>
  );
}