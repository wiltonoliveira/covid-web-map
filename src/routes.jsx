import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Map from './pages/WorldMap/WorldMap';
import Country from './pages/CountryMap/Country'
import Teste from './pages/Teste/Teste'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/map" component={Map} />
        <Route path="/country" component={Country} />
        <Route path="/teste" component={Teste} />
        
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;