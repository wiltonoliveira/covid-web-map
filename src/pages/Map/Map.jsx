import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import {Grid} from '@material-ui/core'

import InfoCasos from '../../components/InfoCasos/InfoCasos'
import Marker from '../../components/Mark/Mark'
import './style.css'


class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 20,
      lng: 0
    },
    zoom: 0
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '70vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          
          <Marker //BRA
            lat={-4.564910}
            lng={-54.394360}
          />

          <Marker //EUA
            lat={43.834527}
            lng={-105.192930}
          />

          <Marker //RUS
            lat={62.372755}
            lng={47.164475}
          />

          <Marker //CHI
            lat={39.639538}
            lng={96.396492}
          />

          <Marker //ALG
            lat={32.249974}
            lng={-1.247671}
          />
        </GoogleMapReact>
        <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      
        >
        <InfoCasos />
        <InfoCasos />
        <InfoCasos />
        </Grid>
      </div>
    );
  }
}

export default SimpleMap;
