import React from 'react'
import {
    GoogleMap,
    useLoadScript,
    Marker,
    IndoWindow,
} from '@react-google-maps/api';
import {formatRelative} from 'date-fns';

import "@reach/combobox/styles.css";

const libraries = ["places"];
const mapContainerStyle = {
    width: '100vw',
    heigth: '100vh',
}
const center = {
    lat: -12.977749,
    lng: -38.501629,
}
export default function Map(){
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    })


    if(loadError) return "Erro ao carregar o mapa";
    if(!isLoaded) return "Carregando o mapa";

    return <div>
        <GoogleMap 
        mapContainerStyle={mapContainerStyle} 
        zoom={8} 
        center={center}
        ></GoogleMap>
    </div>
}