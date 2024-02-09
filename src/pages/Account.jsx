import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faSquareCheck} from "@fortawesome/free-solid-svg-icons"

import "./Account.css";

const Account = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const togglePanel = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    const accountData = { name, email, password };
    localStorage.setItem("account", JSON.stringify(accountData));
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    setShowSuccessPopup(true);
    setTimeout(() => {
      setShowSuccessPopup(false);
    }, 3000);
    
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    const email2 = document.getElementById("signin-email").value;
    const password2 = document.getElementById("signin-password").value;
    
    const storedData = JSON.parse(localStorage.getItem("account"));
    if (storedData && storedData.email === email2 && storedData.password === password2) {
        window.location.href = "#/profile";
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="account_main">
        <div className="account_con">
            <div className={`container ${isSignUp ? "right-panel-active" : ""}`}>
            <div className="form-container sign-up-container">
                <form className="formm" onSubmit={handleSignUp}>
                <h1 className="heading1">Sign Up</h1>

                <span className="paragraph"></span>
                <input id="name" className="acc_input" type="text" placeholder="Name" />
                <input id="email" className="acc_input" type="email" placeholder="Email" />
                <input id="password" className="acc_input" type="password" placeholder="Password" />
                <button type="submit" className="acc_button">Sign Up</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form className="formm" onSubmit={handleSignIn}>
                <h1 className="heading2">Sign In</h1>

                <span className="paragraph3"></span>
                <input id="signin-email" className="acc_input" type="email" placeholder="Email" />
                <input id="signin-password" className="acc_input" type="password" placeholder="Password" />
                <a href="#" className="paragraph2">Forgot your password?</a>
                <button type="submit" className="acc_button">Sign In</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1 className="heading1">Welcome Back!</h1>
                    <p className="paragraph">Please login with your personal info</p>
                    <button className="ghost" onClick={togglePanel}>Sign In</button>
                </div>
                <div className="overlay-panel overlay-right">
                    <h1 className="heading1">Hello, Friend!</h1>
                    <p className="paragraph">Enter your personal details and start your journey with us</p>
                    <button className="ghost" onClick={togglePanel}>Sign Up</button>
                </div>
                </div>
            </div>

            </div>
        </div>
        {showSuccessPopup && (
              <div className="success-popup">
                <FontAwesomeIcon icon={faSquareCheck} style={{color: "#5bd77a",}} />   Account created successfully!
              </div>
            )}
    </div>
  );
};

export default Account;