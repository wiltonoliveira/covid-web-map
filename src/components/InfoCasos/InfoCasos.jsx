import React from 'react';

import './styles.css'

const numeros = 999
const dados = 'casos'
function InfoCasos(){
    return (
        <div id="info-casos">
            <p>{numeros}</p>
            <p>{dados}</p>
        </div>
    )
}

export default InfoCasos;