import React, {useState} from 'react'
import ReactMapGL, {Marker} from "react-map-gl"
import * as countriesCenter from '../../dataset/world_data.json'
import Popup from '../../components/Popup/Popup'
import "./style.css"


export default function Mapbox(){
    const [view, setView] = useState({
        latitude: 15,
        longitude: 0,
        width: "100vw",
        height: "100vh",
        zoom: 2.5
    })

    if(view.zoom >= 3){
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
                       
                            
                        <Popup 
                            lat={view.latitude}
                            long={view.longitude}
                            id={pais.postal}
                        />
                    </div>
                </Marker>
            ))}
           </ReactMapGL>
        </div>
    )
    } else if(view.zoom){
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
               </ReactMapGL>
            </div>
        )
    }
}