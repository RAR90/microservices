import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Sobre from './Sobre';
import Busca from './pages/Busca';
import Pendentes from './pages/Pendentes';
import Relatorios from './pages/Relatorios';
// import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/relatorios" component={Relatorios} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/busca" component={Busca} />
        <Route path="/pendentes" component={Pendentes} />
    </Switch>
  </ BrowserRouter>,
  document.getElementById('root')
);

// registerServiceWorker();
