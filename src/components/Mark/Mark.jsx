import MarkImg from '../../assets/marker.svg'
import './style.css'
import {Link} from 'react-router-dom'

function Marker(){
    return (
        <div id="marker">
            <Link to="/Country">
            <img className="mark" src={MarkImg} alt="covid-marker">
            </img>
            </Link>
        </div>
    )
}

export default Marker