import React, {useEffect, useState}  from 'react';
import api from '../../services/api'
import Mark from '../Mark/Mark'
import './style.css'

export default function Popup({id}){

    const [dados, setDados] = useState([])

    const dadosFinais={
        casos: addSeparador(String(dados.cases)),
        mortes: addSeparador(String(dados.deaths)),
        recuperados: addSeparador(String(dados.recovered))
    }

    useEffect(() => {
        async function promessaFunction(){ 
            const response = await api.get(`/v3/covid-19/countries/${id}`)
            //console.log(response.data)
            setDados(response.data)
    }
        promessaFunction()
    }, [id])
    
    function addSeparador(nStr) {
        nStr += '';
        var x = nStr.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
                // eslint-disable-next-line
                x1 = x1.replace(rgx, '$1' + '.' + '$2');
        }
        return x1 + x2;
    }


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
                Casos: {dadosFinais.casos}
                <br/>
                Mortes: {dadosFinais.mortes}
                <br/>
                Recuperados: {dadosFinais.recuperados}
                <br/>
            </span>
        </div>
    )
}