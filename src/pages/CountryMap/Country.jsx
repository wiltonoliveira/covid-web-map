import React, {useEffect}  from 'react';
import { Grid } from '@material-ui/core'

import api from '../../services/api'

import InfoCasos from '../../components/InfoCasos/InfoCasos'
import Mapa from '../../components/Mapa/Mapa'
/*Por meio dessa classe eu posso usar o GoogleMaps como um componente simples e fica mais fácil 
adicionar outros componente dentro do mapa
Bem como fazer as chamadas da disesse.sh via Classe também
*/

function WorldMap() {

    const dados = {
      local: 'Brazil',
      casos: 10000000,
      mortes: 10000000,
      recuperados: 10000000
    };
    
    /*
    const promessa =  api.get("/v3/covid-19/all")
      .then((response) =>{
          //console.log(response.data) 
          return response.data
      })
      .catch((err) => {
        console.log("Erro ao coletar os dados: " + err);
      });
      */

    useEffect(() => {
        const promessaFunction = async () => { 
            return await api.get("/v3/covid-19/all")
    }
        const promessa = promessaFunction()
        console.log(promessa)
    }, [])

    return (
      // Sempre defina a altura do contêiner explicitamente
      <div>
      <Grid container>
        <Mapa 
          latitude = {-9}
          longitude= {-55}
          zoom = {4}
          comprimento = '50%'
          altura = '100vh'
        />
        <Grid>
          <div style={{ width:'350px'}}>

          </div>
        </Grid>
          <Grid style={{marginTop: '10%', textAlign:'center'}}>
          <h1 style={{fontSize:'50px'}}>{dados.local.toUpperCase()}</h1>
          <InfoCasos
            numeros={dados.casos}
            dado="Casos"
          />
          <InfoCasos
            numeros={dados.mortes}
            dado="Mortes"
          />
          <InfoCasos
            numeros={dados.recuperados}
            dado="Recuperados"
          />
          </Grid>
      </Grid>
      </div>
    );
  
}

export default WorldMap;