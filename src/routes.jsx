import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Map from './pages/WorldMap/WorldMap';
import Mapbox from './pages/WorldMapBox/WorldMapBox'


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/map" component={Map}/>
        <Route path="/mapbox" component={Mapbox}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;