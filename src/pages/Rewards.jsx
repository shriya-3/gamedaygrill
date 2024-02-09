import React, { useState } from "react";
import { Link } from "react-router-dom";

import Img from "../assets/img.png";
import Phone from "../assets/rewards_phone2.png";
import "./Rewards.css"
import Grill from "../assets/grill.png";
import MenuBook from "../assets/menu_book.png";
import Birthday from "../assets/birthday.png";
import Event from "../assets/event.png";
import Dessert from "../assets/dessert.jpg";
import Combo from "../assets/combomeal.jpg";
import Pizza from "../assets/2pizza.jpg";
import Modal from 'react-modal';



export default function Rewards() {

    const modalStyle = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '400px', // Set your desired width
          backgroundColor: '#f8fadb'
        },
      };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    const isStrongPassword = (password) => {
      return password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password);
    };
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!isStrongPassword(password)) {
        setError('Password must be at least 8 characters and contain at least one uppercase letter and one digit.');
        return;
      }
      closeModal();
    }; 


    return (
        <div className="rewards_page">
            <div className="join_container">
                <div className="join_sec">
                    <div className="left_con">
                        <div className="left_join">
                            <h4 className="join_title">Game Day Grill Rewards</h4>
                            <h2>Earning stuff is easy!</h2>
                            <p>Earn points for ordering your favorite meals and exchange 
                                them for  rewards on the app. Join now to start earning!</p>

                            <p>Questions? Read our FAQ</p>
                            <div className="button_con">
                                <Link to="/account">
                                    <button>Join Now!</button>

                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="right_join">
                        <img src={Phone} alt="rewards_phone" className="phone" />
                    </div>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={modalStyle}>
                <div className="signup_con">
                    <h2 className="signup_title">Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                    <div className="input3">
                        <label className="input3">
                            Name:
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        </label>
                    </div>
                    
                    <div className="input3">
                    <label className="input3">
                        Email:
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    </div>
                    
                    <div className="input3">
                    <label className="input3">
                        Password:
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    </div>
                    
                    {error && <p className="password_error" style={{ color: 'red' }}>{error}</p>}
                    <button type="submit" className="submit_button">Sign Up</button>
                    </form>
                    <button onClick={closeModal} className="submit_button">
                    Cancel
                    </button>
                </div>
            </Modal>
            
            <div className="circle_container">
                <div className="circles">
                    <div className="circle">100 <br></br> pts</div>
    	            <div className="circle">300 <br></br> pts</div>
    	            <div className="circle">1000 <br></br> pts</div>
                </div>
                <div class="line1"></div>
            </div>



            <div className="rewards_container">
                <div className="rewards_grid">
                    <div className="rewards_card no-top-shadow">
                        <img src={Dessert} alt="img" className="img" />
                        <p>1 FREE complimentary desert of your choice!</p>
                    </div>
                    <div className="rewards_card">
                        <img src={Combo} alt="img" className="img" />
                        <p>1 FREE combo meal including one appetizer, one main dish, and one drink of your choice! </p>
                    </div>
                    <div className="rewards_card">
                        <img src={Pizza} alt="img" className="img" />
                        <p>Buy one pizza, get one pizza free! Also includes 2 free drinks and 1 appetizer of your choice!</p>
                    </div>
                </div>
            </div>
            <div className="benefits_sec">
                <p>.</p>
                <div className="banner_header">
                    <div className="banner"><h4>MORE REWARDS</h4></div>
                </div>
                <div className="benefits_con">
                    
                    <div className="benefits">
                        <li>
                            <div className="space"></div>
                        </li>
                        <li>
                            <img src={Grill} alt="img" className="event_icon" />
                            <h3>1 point for every $1 spent</h3>
                        </li>
                        <li>
                            <img src={MenuBook} alt="img" className="event_icon" />
                            <h3>Early access to menu items</h3>
                        </li>
                        <li>
                            <img src={Birthday} alt="img" className="event_icon" />
                            <h3>Birthday Rewards</h3>
                        </li>
                        <li>
                            <img src={Event} alt="img" className="event_icon" />
                            <h3>Exclusive discounts on special events</h3>
                        </li>
                        
                    </div>
                </div>
            </div>

            
            <div className="howTo">
                <h2>How to Earn Rewards?</h2>
                <div className="steps_container">
                    <div className="howTo_steps">
                        <div className="step">
                            <p className="step_no">1</p>
                            <p>Create an account to start earning rewards or sign in 
                                to your account to check your balance. </p>
                        </div>
                        <div className="step">
                            <p className="step_no">2</p>
                            <p>Order your favorites in person, on app, or online through 
                                your account and earn  1 point per dollar spent.</p>
                        </div>
                        <div className="step">
                            <p className="step_no">3</p>
                            <p>Once you reach 50, 100, or 300 points, click the REDEEM button 
                                on the app or online to earn free items based on their point values!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}