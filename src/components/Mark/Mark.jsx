import {Link} from 'react-router-dom'
import MarkImg from '../../assets/marker.svg'
import './style.css'




function Marker(){
    return (
        <Link to="/Country">
        <div id="marker">
            <img className="mark" src={MarkImg} alt="covid-marker">
            </img>
        </div>
        </Link>
    )
}

export default Marker