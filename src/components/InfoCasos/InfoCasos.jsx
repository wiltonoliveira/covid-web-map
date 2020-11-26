import React from 'react';

import './styles.css'

function InfoCasos({numeros, dado}){
    const numero = addSeparador(numeros)

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

    return (
        <div id="info-casos" >
            <p>{numero}</p>
            <p>{dado}</p>
        </div>
    )
}

export default InfoCasos;