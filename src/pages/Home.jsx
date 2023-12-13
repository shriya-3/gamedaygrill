import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import Deal from "../assets/combo.png";
import MenuBar from "../components/menuBar.jsx";
import App from "../assets/app_final.png";
import AppStore from "../assets/appStore.png";
import GooglePlay from "../assets/GooglePlay.png";
import Video from "../assets/home_video.mp4";
import Burger from "../assets/flameBurger.png";
import NewYear from "../assets/new_year.jpg";
import SuperBowl from "../assets/super_bowl.jpg";
import Nba from "../assets/nba.jpg";
import Christmas from "../assets/christmas.jpg";
import Gift from "../assets/gift.jpg";
import Cowboy from "../assets/cowboy2.jpg";


export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleLearnMoreClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleLearnMoreClick2 = () => {
    setShowModal2(true);
  };

  const handleCloseModal2 = () => {
    setShowModal2(false);
  };
  const handleLearnMoreClick3 = () => {
    setShowModal3(true);
  };

  const handleCloseModal3 = () => {
    setShowModal3(false);
  };

  


  return (
    <div className="home_page">
      {/* Header */}
      <div className="header_sec">
        <div className="overlay">
          <video src={Video} autoPlay loop muted className="video"/>
          <div className="container">
            <h2 className="welcome_text">Welcome To</h2>
            <h1 className="gdg_title">Game Day Grill</h1>
            <h4 className="slogan_text">Where Everyday Is A Game Day!</h4>
          </div>
        </div>
        
          
      </div>  
        {/*<div className="home_container">
          <div className="left_content_side">
            <h1 className="slogan">
              THIS <br />
              IS OUR <br /> SLOGAN
            </h1>
            <p className="desc">
              {" "}
              This is a brief description of our restaurant.
              <br />
              This is a placeholder for some more text
              <br />
              more placeholder text.
            </p>
            <a href="/menu">
              <button className="order_button">Order Now</button>
            </a>
            <div className="dots_sec">
              <h6 className="dots"></h6>
              <h6 className="dots"></h6>
              <h6 className="dots"></h6>
              <h6 className="dots"></h6>
            </div>
          </div>

          <div className="right_food_side">
            <img src={Deal} alt="combo deal" className="deal" />
          </div>
        </div>
  </div> */}
      <MenuBar />
      {/* Special Events and Deals*/}
      <div className="events_sec">
        <div className="events_grid_con">
          <div className="events_con">
            <div className="grid-container">
                <div className="grid-img">
                  <img src={NewYear} alt="burger" className="newyear" />
                </div>
                <div className="grid-item">
                  <h6 className="event_title">New Years Countdown</h6>
                  <h6 className="event_details">Sun, Dec 31, 2023</h6>
                  <h6 className="event_details">10:30 PM CST</h6>
                  <p className="learn_more" onClick={handleLearnMoreClick}>Learn More</p>
                </div>
                <div className="grid-img">
                  <img src={SuperBowl} className="newyear" />
                </div>  
                <div className="grid-item">
                  <h6 className="event_title">Super Bowl Watch Party</h6>
                  <h6 className="event_details">Sun, Feb 11, 2024</h6>
                  <h6 className="event_details">5:00 PM CST</h6>
                  <p className="learn_more" onClick={handleLearnMoreClick2}>Learn More</p>
                </div>
                <div className="grid-img">
                  <img src={Nba} className="newyear" />
                </div>
                <div className="grid-item">
                  <h6 className="event_title">NBA Finals 2024</h6>
                  <h6 className="event_details">Date: TBD</h6>
                  <h6 className="event_details">Time: TBD</h6>
                  <p className="learn_more" onClick={handleLearnMoreClick3}>Learn More</p>
                </div>  
              </div>

            <div className="grid-container1"> 
              <div className="grid-img">
                <img src={Cowboy} className="newyear" />
              </div>
              <div className="grid-item">
                <h6 className="deal_title">20% off of your order on Cowboys Game Days!</h6>
                <p className="code">Use Code: COWBOY20</p>
              </div>
              <div className="grid-img">
                <img src={Christmas} className="newyear" />
              </div> 
              <div className="grid-item">
                <h6 className="deal_title">$15 off on Christmas Eve Day!</h6>
                <p className="code">Use Code: CHRISTMAS15</p>
              </div>
              <div className="grid-img">
                <img src={Gift} className="newyear1" />
              </div>
              <div className="grid-item">
                <h6 className="deal_title">Enjoy $5 off on Mondays</h6>
                <p className="code">Use Code: MONDAY5</p>
              </div> 
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      {showModal && (
        <div className="modal" ref={modalRef}>
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <div className="modal_con">
              <div className="modal_imgg">
                <img src={NewYear} alt="burger" className="newyear2" />
              </div>
              <div className="modal_text">
                <h2 className="modal_title">New Years Countdown</h2>
                <h3 className="modal_date">Sun, Dec 31, 2023</h3>
                <h3 className="modal_time">10:30pm CST</h3>
                <p className="modal_reservee">Join us at Game Day Grill to start the countdown for the new year with 20% off all meals and drinks! 
                <br></br>Only 50 spots left- <Link to="/reservations"><span className="reserveLink"> Reserve Now! </span></Link>
                </p>
              </div>  
            </div>
          </div>
        </div>
      )}
      {showModal2 && (
        <div className="modal" ref={modalRef}>
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal2}>
              &times;
            </span>
            <div className="modal_con">
              <div className="modal_imgg">
                <img src={SuperBowl} alt="burger" className="newyear2" />
              </div>
              <div className="modal_text">
                <h2 className="modal_title">Super Bowl Watch Party</h2>
                <h3 className="modal_date">Sun, Feb 11, 2024</h3>
                <h3 className="modal_time">5:00 PM CST</h3>
                <p className="modal_reservee">Join us at Game Day Grill for an eventful day of snacks, meals, and watching football! 
                <br></br>Only 25 spots left- <Link to="/reservations"><span className="reserveLink"> Reserve Now! </span></Link>
                </p>
              </div>  
            </div>
          </div>
        </div>
      )}
      {showModal3 && (
        <div className="modal" ref={modalRef}>
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal3}>
              &times;
            </span>
            <div className="modal_con">
              <div className="modal_imgg">
                <img src={Nba} alt="burger" className="newyear2" />
              </div>
              <div className="modal_text">
                <h2 className="modal_title">NBA Finals 2024</h2>
                <h3 className="modal_date">Date: TBD</h3>
                <h3 className="modal_time">Time: TBD</h3>
                <p className="modal_reservee">Join us at Game Day Grill to watch the NBA Finals with your favorite drinks, meals, and snacks!
                <br></br>Only 30 spots left- <Link to="/reservations"><span className="reserveLink"> Reserve Now! </span></Link>
                </p>
              </div>  
            </div>
          </div>
        </div>
      )}

        {/*<div className="events_one">
          <div className="event"></div>
          <div className="event"></div>
          <div className="event"></div>
          <div className="event_b"></div>
          <div className="event_b"></div>
</div> */}
      
      {/* Why Us? */}
      <div className="whyUs_sec">
        <div className="why_text">
          <h2>Why Us?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div className="list">
            <ul>
              <li>Lorem ipsum dolor sit amet,</li>
              <li>Lorem ipsum dolor sit amet,</li>
              <li>Lorem ipsum dolor sit amet,</li>
            </ul>
          </div>

        </div>
        <div className="img_container">
          <img src={Burger} alt="burger" className="burger_img" />
        </div>
      </div>
      {/* App Promo */}
      <div className="app_box">
        <div className="app_img">
          <img src={App} alt="app" className="appImg" />
        </div>
        <div className="app_content">
          <h1 className="app_title">Don't Miss Out!</h1>
          <h2 className="app_desc">
            Place orders, receive updates, and join our rewards with the Game
            Day Grill App!
          </h2>
          <div className="download_apps">
            <img src={AppStore} alt="app store" className="appStore" />
            <img src={GooglePlay} alt="google play" className="googlePlay" />
          </div>
        </div>
      </div>
    </div>
  );
}
