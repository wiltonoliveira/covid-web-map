import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../../components/Mark/Mark'

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
            <Marker //BRASIL
            lat={-4.564910}
            lng={-54.394360}
            />
            <Marker //EUA
            lat={43.834527}
            lng={-105.192930}
            />

            <Marker //RUSSIA
            lat={62.372755}
            lng={47.164475}
            />

            <Marker //CHINA
            lat={39.639538}
            lng={96.396492}
            />

            <Marker //ARGÉLIA
            lat={32.249974}
            lng={-1.247671}
            />
            </GoogleMapReact>
        </div>
    )
}

export default Mapa;