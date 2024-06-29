import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faInstagram, faTwitter, faFacebook} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faPhone, faClock } from "@fortawesome/free-solid-svg-icons"
import {  } from "@fortawesome/free-solid-svg-icons"
import Bpa from "../assets/logo6.jpeg"
import Logo from "../assets/logo5.png";


export default function Footer() {
    return (
        <div className="footer_container">
            <div className="footer_grid">
            <div className="footer_links">
                <div className="footer_links_div">
                    <h4>Developed By: Shriya Kaza</h4>
                </div>
                <div className="footer_links_div">
                    <img src= {Bpa} className="bpa"/>

                </div>


                <div className="footer_links_div">
                    <h4>4th at Texas BPA Website Design Competition</h4>
                    <div className="social_bar">

                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}