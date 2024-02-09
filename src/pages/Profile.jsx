import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";

<FontAwesomeIcon icon="fa-solid fa-eye" />
import "./Profile.css"
import User from "../assets/profile4.jpg"
export default function Profile() {
    const storedData = JSON.parse(localStorage.getItem("account"));

    const [formData, setFormData] = useState({
        name: storedData.name,
        email: storedData.email,
        password: storedData.password,
      });
      const [changesSaved, setChangesSaved] = useState(false);
      const [showPassword, setShowPassword] = useState(false);

    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.id]: e.target.value,
        });
        setChangesSaved(false); // When a change is made, indicate that changes are not saved
      };
      const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
    
      const saveChanges = () => {
        // Here you can implement saving changes to a server/database
        // For demonstration, let's just log the updated form data
        console.log('Form Data:', formData);
        setChangesSaved(true); // Changes are saved
      };

      const orders = JSON.parse(localStorage.getItem('orders')) || [];

        // Initialize total sum
        let totalPrice = 0;

        // Iterate over each order and sum up the prices
        orders.forEach(order => {
            totalPrice += order.price;
        });

        const scrollToTop = () => {
            window.scrollTo({
              top: 0,
            });
          };

    return(
        <div className="profile">
            <div className="profile_con">
                <h1 className="profile_head">Welcome, {formData.name}! </h1>
                <div className="profile_grid">
                    
                    <div className="profile_pic">
                        <img className="user_img" src={User}></img>

                    </div>
                    <div className="profile_info">
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input className="input_field" type="text" id="name" value={formData.name} onChange={handleChange} /><br /><br />

                            <label htmlFor="email">Email:</label>
                            <input className="input_field" type="email" id="email" value={formData.email} onChange={handleChange} /><br /><br />

                            
                            <div className="password_con">
                                <label htmlFor="password">Password:</label>
                                <div >
                                    <input className="input_field" type={showPassword ? 'text' : 'password'} id="password" value={formData.password} onChange={handleChange} />
                                    <span className="pass_icon" style={{  cursor: 'pointer' }} onClick={togglePasswordVisibility}>
                                    {showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                                    </span>
                                </div>
                            </div>
                            <br /><br />

                            {!changesSaved ? (
                                <button className="changes" onClick={saveChanges}>Save Changes</button>
                            ) : (
                                <button className="changes2">Changes Saved</button>
                            )}
                            </div>

                    </div>
                    <div className="profile_rewards">
                        <p className="b">Rewards Eligibility</p>
                        <p>1 FREE complimentary desert of your choice:</p>
                        <progress className="desert_bar" id="file" value={totalPrice} max="100"> 32% </progress>
                        <p>1 FREE combo meal:</p>
                        <progress className="combo_bar" id="file" value={totalPrice} max="300"> 32% </progress>
                        <p>Buy one pizza, get one pizza free with 2 drinks and 1 appetizer:</p>
                        <progress className="pizza_bar" id="file" value={totalPrice} max="1000" color="green"> 32% </progress>

                    </div>
                    <div className="profile_orders">
                        <p className="b">CURRENT POINTS:</p>
                        <div className="cur_rewards">
                            <p className="circle2">{totalPrice.toFixed(0)} <br></br>PTS</p>
                        </div>
                        <p className="d">Continue earning points to <br></br>redeem your favorite items!</p>


                    </div>
                </div>
                <div className="log_button">
                    <Link to="/account">
                        <button className="logout" onClick={scrollToTop}>Log out</button>
                    </Link>
                </div>
                
            </div>
        </div>
    )

}