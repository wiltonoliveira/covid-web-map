import './style.css'
import Mark from '../Mark/Mark'

export default function Popup({id}){

    function myFunction() {
        var popup = document.getElementById(id);
        popup.classList.toggle("show");
      }

    return (
        <div className="popup" onClick={myFunction}>
            <Mark/>
            <span className="popuptext" id={id}>Popup text...</span>
        </div>
    )
}