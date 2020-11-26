import React, { Component } from 'react';
import { Grid } from '@material-ui/core'

import api from '../../services/api'

import InfoCasos from '../../components/InfoCasos/InfoCasos'

import './style.css'

import Mapa from '../../components/Mapa/Mapa'
/*Por meio dessa classe eu posso usar o GoogleMaps como um componente simples e fica mais fácil 
adicionar outros componente dentro do mapa
Bem como fazer as chamadas da disesse.sh via Classe também
*/
class WorldMap extends Component {

  constructor(props) {
    super(props);
    // Inicializando os dados que eu quero da disesse.sh
    this.state = {
      local: '',
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
      <div>
        <Mapa 
          latitude = {20}
          longitude= {0}
          zoom = {0}
          comprimento = '100%'
          altura = '70vh'
        />
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

export default WorldMap;