import React, {useEffect, useState}  from 'react';
import api from '../../services/api'
import Mark from '../Mark/Mark'
import './style.css'

export default function Popup({id, pais}){

    const [dados, setDados] = useState([])
    
    useEffect(() => {
        async function promessaFunction(){ 
            const response = await api.get(`/v3/covid-19/countries/${id}`)
            console.log(response.data)
            setDados(response.data)
    }
        promessaFunction()
    }, [])
   
    
    function showPopup() {
        var popup = document.getElementById(id);
        popup.classList.toggle("show");
      }

    return (
        <div className="popup" onClick={showPopup}>
            <Mark/>
            <span className="popuptext" id={id}>
                {dados.country}
                <br/>
                Casos: {dados.cases}
                <br/>
                Mortes: {dados.deaths}
                <br/>
                Recuperados: {dados.recovered}
                <br/>
            </span>
        </div>
    )
}