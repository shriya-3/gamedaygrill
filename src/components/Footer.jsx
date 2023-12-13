import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faInstagram, faTwitter, faFacebook} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faPhone, faClock } from "@fortawesome/free-solid-svg-icons"
import {  } from "@fortawesome/free-solid-svg-icons"


export default function Footer() {
    return (
        <div className="footer_container">
            <div className="footer_grid">
            <div className="footer_links">
                <div className="footer_links_div">
                    <h4>For Business</h4>
                    <p>link 1</p>
                    <p>link 2</p>
                    <p>link 3</p>
                </div>
                <div className="footer_links_div">
                    <h4>For Business</h4>
                    <p>link 1</p>
                    <p>link 2</p>
                    <p>link 3</p>
                </div>
                <div className="footer_links_div">
                    <h4>For Business</h4>
                    <p>link 1</p>
                    <p>link 2</p>
                    <p>link 3</p>
                </div>
                <div className="footer_links_div">
                    <h4>Follow Us</h4>
                    <div className="social_bar">
                        <FontAwesomeIcon icon={ faInstagram } className="icon"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={ faTwitter } className="icon"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={ faFacebook } className="icon"></FontAwesomeIcon>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}