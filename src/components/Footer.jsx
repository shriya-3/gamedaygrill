import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faInstagram, faTwitter, faFacebook} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faPhone, faClock } from "@fortawesome/free-solid-svg-icons"
import {  } from "@fortawesome/free-solid-svg-icons"
import Bpa from "../assets/logo6.jpeg"

export default function Footer() {
    return (
        <div className="footer_container">
            <div className="footer_grid">
            <div className="footer_links">
                <div className="footer_links_div">
                    <img src= {Bpa} className="bpa"/>

                </div>
                <div className="footer_links_div">
                </div>
                <div className="footer_links_div">
                </div>
                <div className="footer_links_div">
                    <h4>Follow Us</h4>
                    <div className="social_bar">
                        <FontAwesomeIcon icon={ faInstagram } className="icon2"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={ faTwitter } className="icon"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={ faFacebook } className="icon"></FontAwesomeIcon>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}