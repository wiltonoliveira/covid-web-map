import React, {useEffect, useState}  from 'react';
import { Grid } from '@material-ui/core'
import api from '../../services/api'
import InfoCasos from '../../components/InfoCasos/InfoCasos'
import Mapa from '../../components/Mapa/Mapa'


function WorldMap() {

    const [dados, setDados] = useState([])
    
    useEffect(() => {
        async function promessaFunction(){ 
            const response = await api.get("/v3/covid-19/all")
            //console.log(response)
            setDados(response.data)
    }
        promessaFunction()
    }, [])

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
            numeros={dados.cases}
            dado="Casos"
          />
          <InfoCasos
            numeros={dados.deaths}
            dado="Mortes"
          />
          <InfoCasos
            numeros={dados.recovered}
            dado="Recuperados"
          />
        </Grid>
      </div>
    );
}
export default WorldMap;