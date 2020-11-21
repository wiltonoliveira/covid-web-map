import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import { Grid } from '@material-ui/core'

import api from '../../services/api'

import InfoCasos from '../../components/InfoCasos/InfoCasos'
import Marker from '../../components/Mark/Mark'
import './style.css'


/*Por meio dessa classe eu posso usar o GoogleMaps como um componente simples e fica mais fácil 
adicionar outros componente dentro do mapa
Bem como fazer as chamadas da disesse.sh via Classe também
*/
class SimpleMap extends Component {
  //dados iniciais do mapa
  static defaultProps = {
    //coordenadas da onde o mapa vai começar
    center: {
      lat: 20,
      lng: 0
    },
    zoom: 0 //auto explicativo né?
  };

  constructor(props) {
    super(props);
    // Inicializando os dados que eu quero da disesse.sh
    this.state = {
      casos: '',
      mortes: '',
      recuperados: ''
    };
  }

  componentWillMount() {
    // Fazendo a chamada na disesse.sh e carregando os dados antes de renderizar na tela
    this.getCasos();
  }

  getCasos(){
    api.get("/v3/covid-19/all")
      .then((response) =>{
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
      // Sempre defina a altura do contêiner explicitamente
      <div style={{ height: '70vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker //BRASIL
            lat={-4.564910}
            lng={-54.394360}
          />

          <Marker //EUA
            lat={43.834527}
            lng={-105.192930}
          />

          <Marker //RUSSIA
            lat={62.372755}
            lng={47.164475}
          />

          <Marker //CHINA
            lat={39.639538}
            lng={96.396492}
          />

          <Marker //ARGÉLIA
            lat={32.249974}
            lng={-1.247671}
          />
        </GoogleMapReact>
        <h1 style={{ textAlign: 'center', fontSize:'50px'}}>Dados ao redor do mundo</h1>
        <Grid //Informações da API
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
