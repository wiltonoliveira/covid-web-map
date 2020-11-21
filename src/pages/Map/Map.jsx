import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import { Grid } from '@material-ui/core'

import api from '../../services/api'

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

  constructor(props) {
    super(props);
    // Initialize empty state here
    this.state = {
      casos: '',
      mortes: '',
      recuperados: ''
    };
  }

  componentWillMount() {
    // It's best to use your api call on componentWillMount
    this.getCasos();
  }

  getCasos(){
    api.get("/v3/covid-19/all")
      .then((response) =>{
        console.log('Casos: ' + response.data.cases)
        console.log('Mortes: ' + response.data.deaths)
        console.log('Recuperados: ' + response.data.recovered)
        this.setState({
          casos: response.data.cases,
          mortes: response.data.deaths,
          recuperados: response.data.recovered
        })
      })
      .catch((err) => {
        console.log("Erro ao coletar os dados: " + err);
      });
  }
  
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '70vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
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
          <InfoCasos
            numeros={this.state.casos}
            dado="Casos"
          />
          <InfoCasos
            numeros={this.state.mortes}
            dado="Mortes"
          />
          <InfoCasos
            numeros={this.state.recuperados}
            dado="Recuperados"
          />
        </Grid>
      </div>
    );
  }
}

export default SimpleMap;
