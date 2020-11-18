import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import {Grid} from '@material-ui/core'

import InfoCasos from '../../components/InfoCasos/InfoCasos'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 10,
      lng: 0
    },
    zoom: 1
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
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
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
