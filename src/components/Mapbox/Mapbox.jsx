import React, {useState} from 'react'
import ReactMapGL, {Marker} from "react-map-gl"
import * as countriesCenter from '../../dataset/world_data.json'
import CovidMarker from "../../assets/marker.svg"
import "./style.css"


export default function Mapbox(){
    const [view, setView] = useState({
        latitude: 0,
        longitude: 0,
        width: "100vw",
        height: "100vh",
        zoom: 2
    })

    return(
        <div>
           <ReactMapGL 
           {...view}
           //mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
           mapboxApiAccessToken="pk.eyJ1Ijoid2lsdG9ub2xpdmVpcmEiLCJhIjoiY2tpa21kOXZqMGI2czJzcnh0ZW5jcXZ5cCJ9.H6fVYOkE2OXAluV4YLQwKw"
           mapStyle="mapbox://styles/wiltonoliveira/ckj8rtre41ydp19ph25d8ckhc"
           onViewportChange={view => {
               setView(view)
           }}
           >
            {countriesCenter.features.map(pais =>(
                <Marker key={pais.FID_}
                latitude={pais.Latitude}
                longitude={pais.Longitude}
                >
                    <div className="marker">
                        <img src={CovidMarker} alt="Covid Marker"/>
                    </div>
                </Marker>
            ))}
           </ReactMapGL>
        </div>
    )
}