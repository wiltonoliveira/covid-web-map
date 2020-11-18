import React from 'react';

import './styles.css'



function InfoCasos({numeros, dado}){
    return (
        <div id="info-casos" >
            <p>{numeros}</p>
            <p>{dado}</p>
        </div>
    )
}

export default InfoCasos;