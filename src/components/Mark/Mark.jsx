//import {Link} from 'react-router-dom'
import MarkImg from '../../assets/marker.svg'
import './style.css'

function Marker(){   
    return ( 
        <div id="marker">
            <img className="mark" src={MarkImg} alt="covid-marker" /> 
        </div>
    )
}

export default Marker