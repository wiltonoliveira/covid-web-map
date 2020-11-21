import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Map from './pages/Map/Map';
import Country from './pages/CountryMap/Country'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/map" component={Map} />
        <Route path="/country" component={Country} />
        
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;