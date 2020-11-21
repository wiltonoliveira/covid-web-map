import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import { Grid } from '@material-ui/core'

import api from '../../services/api'

import InfoCasos from '../../components/InfoCasos/InfoCasos'
import './style.css'

class SimpleMap extends Component{
    //dados iniciais do mapa
    static defaultProps = {
      //coordenadas da onde o mapa vai começar
      center: {
        lat: -15.826691,
        lng: -47.921822
      },
      zoom: 4 //auto explicativo né?
    };
  
    constructor(props, latitude, longitude) {
      super(props);
      // Inicializando os dados que eu quero da disesse.sh
      this.state = {
        casos: '',
        mortes: '',
        recuperados: '',
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
        <div style={{ height: '100vh', width: '50%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >   
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