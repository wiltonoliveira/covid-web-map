import React, {useEffect, useState}  from 'react';
import { Grid } from '@material-ui/core'
import api from '../../services/api'
import InfoCasos from '../../components/InfoCasos/InfoCasos'
import Mapa from '../../components/Mapa/Mapa'


export default function Country({pais, latitude, longitude}) {
  const [dados, setDados] = useState([])

  pais = 'brazil'

  useEffect(() => {
      async function promessaFunction(){ 
          const response = await api.get(`/v3/covid-19/countries/${pais}`)
          console.log(response.data)
          setDados(response.data)
      }
      promessaFunction()
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
          <h1 style={{fontSize:'50px'}}>{dados.country}</h1>
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
      </Grid>
      </div>
    );
}