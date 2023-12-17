import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faInstagram, faTwitter, faFacebook} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faPhone, faClock } from "@fortawesome/free-solid-svg-icons"
import {  } from "@fortawesome/free-solid-svg-icons"
import Faq from "../components/faq2.jsx";

export default function () {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Details:', details);
    setSubmitted(true);
  };

  const handleReset = () => {
    setName(' ');
    setEmail('');
    setSubject('');
    setDetails('');
    setSubmitted(false);
  };

  return (
    <div className="contact_page">
      <div className="contact_top">
        <div className="contact_container">
          <div className="contact_details">
            <h1 className="contact_header">Contact Us</h1>
            <div className="contact_info">
              <li className="email">
                <FontAwesomeIcon icon={ faEnvelope } className="icon1"></FontAwesomeIcon>
                <p className="email_text">info@gamedaygrill.com</p>
              </li>
              <li className="email">
                <FontAwesomeIcon icon={ faPhone } className="icon1"></FontAwesomeIcon>
                <p className="email_text">298-3985-2092</p>
              </li>
              <li className="email">
                <FontAwesomeIcon icon={ faClock } className="icon1"></FontAwesomeIcon>
                <p className="email_text">Weekdays 10:00am to 1:00am</p>
              </li>
              <li className="email">
                <FontAwesomeIcon icon={ faClock } className="icon2"></FontAwesomeIcon>
                <p className="email_text">Weekends 11:00am to 1:00am</p>
              </li>
            </div>
            <div className="line_container">
              <hr className="line"></hr>
            </div>
            <div className="social_box">
              <li>
                <p>2169 Maplecreek Road</p>
                <p>Frisco, TX 75035</p>
              </li>
              <br></br>
              <li>
                <p>Connect With Us!</p>
              </li>
              <div className="social_bar">
                <FontAwesomeIcon icon={ faInstagram } className="icon"></FontAwesomeIcon>
                <FontAwesomeIcon icon={ faTwitter } className="icon"></FontAwesomeIcon>
                <FontAwesomeIcon icon={ faFacebook } className="icon"></FontAwesomeIcon>
              </div>
            </div>
          </div>
          <div className="form">
            {submitted ? (
              <div className="contact_after">
                <p>Thank you for contacting us! <br></br>We will reach out soon with further information.</p>
                
                <button onClick={handleReset}>Submit Another Response</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name">Name</label>
                  <br></br>
                  <input
                    type="text"
                    id="name"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>    
                  <label htmlFor="email">Email</label>
                  <br></br>
                  <input
                    type="email"
                    id="email"
                    className="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject">Subject</label>
                  <br></br>
                  <select
                    id="subject"
                    required
                    value={subject}
                    className="input"
                    onChange={(e) => setSubject(e.target.value)}
                  >
                    <option value="">Select...</option>
                    <option value="apple">Restaurant Order Issue</option>
                    <option value="orange">Online Order Issue</option>
                    <option value="lime">Rewards</option>
                    <option value="lime1">Gift Cards</option>
                    <option value="lime2">Receipts</option>
                    <option value="lime3">Catering</option>
                    <option value="lime4">Account Security</option>
                    <option value="lime5">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="details">Please share more details</label>
                  <br></br>
                  <input
                    type="text"
                    id="details"
                    required
                    className="input"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    
                  />
                </div>
                
                <button type="submit" className="button">Submit</button>
                
                
              </form>
            )}
          </div>
        </div>
      </div>
      <Faq />
    </div>  
  );
}
