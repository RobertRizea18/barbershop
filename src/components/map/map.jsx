import React from 'react';
import './map.css';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {GrMail} from 'react-icons/gr';
import {HiLocationMarker} from 'react-icons/hi'
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";


const Map = () => {
    return (

        <div className="mapouter">
            
            <div className="gmap_canvas"><iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Strada%20republicii,Videle&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no"></iframe>
            </div>
           
            <div className="work-schedule">
            <span className='social'>Va asteptam si pe retelele noastre de socializare
            </span><br></br>
            <span className='social'></span> <br></br>
            <span className='social-icons'>
                <span className='facebook-icon'><a href="https://www.facebook.com/"><BsFacebook/></a></span>
                <span className='insta-icon'><BsInstagram/></span>
                <span className='wapp-icon'><BsWhatsapp/></span>
                </span><br></br>
                <span className='schedule'>Program</span>
                <div className="week">Luni-Vineri.........................09:00 - 20:00 <br></br> 
                Sambata..............................10:00 - 18:00 <br></br>
                Duminica............................10:00 - 16:00<br></br><br></br>

                <span className='schedule'>Date de contact</span><br></br>
                <BsFillTelephoneFill/> +40 (727) 761 168<br></br>
                <GrMail/> office@barbershop.ro<br></br>
                <HiLocationMarker/> Teleorman, Videle, str.Republicii nr.17
                </div>
            </div>
        </div>
    )
}

export default Map;