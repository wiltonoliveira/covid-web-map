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
            id="bra"
            pais="Brasil"
            />
            
            <Popup //EUA
            lat={43.834527}
            lng={-105.192930}
            id="us"
            pais="EUA"
            />

            <Popup //RUSSIA
            lat={57.372755}
            lng={36.164475}
            id="rus"
            pais="Russia"
            />

            <Popup //CHINA
            lat={39.639538}
            lng={96.396492}
            id="cn"
            pais="China"
            />

            <Popup //ARGÉLIA
            lat={32.249974}
            lng={-1.247671}
            id="dz"
            pais="Argélia"
            />
            </GoogleMapReact>
        </div>
    )
}

export default Mapa;