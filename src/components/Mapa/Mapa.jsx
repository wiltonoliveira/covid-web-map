import React from 'react';
import GoogleMapReact from 'google-map-react';
import Popup from '../../components/Popup/Popup'

function Mapa({latitude, longitude, zoom, comprimento, altura}){
    const center={
        lat: latitude,
        lng: longitude
    }
    const dimensoes={
        compr: comprimento,
        altu: altura
    }

    return(
        <div style={{ height: dimensoes.altu, width: dimensoes.compr }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                center={center}
                defaultZoom={zoom}
            >

            <Popup //BRASIL
            lat={-4.564910}
            lng={-54.394360}
            pais='brazil'
            id="bra"
            />
            
            <Popup //EUA
            lat={43.834527}
            lng={-105.192930}
            pais='us'
            id="us"
            />

            <Popup //RUSSIA
            lat={59.372755}
            lng={47.164475}
            pais='russia'
            id="rus"
            />

            <Popup //CHINA
            lat={39.639538}
            lng={96.396492}
            pais='china'
            id="chi"
            />

            <Popup //ARGÉLIA
            lat={32.249974}
            lng={-1.247671}
            pais='argelia'
            id="arg"
            />
            </GoogleMapReact>
        </div>
    )
}

export default Mapa;