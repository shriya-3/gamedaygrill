import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo5.png";
import Basket from "../assets/basket.png";
import "./Navbar.css";
import Hamburger from "./Hamburger";

import { useQuantity } from "./contexts/Quantity";

const Navbar = ({ size }) => {
  const { quantity, updateQuantity } = useQuantity();

  let items = localStorage.getItem("cart");
  items = JSON.parse(items);
  if (items) {
    let sum = 0;
    for (let i in items) {
      sum += items[i].quantity;
    }
    updateQuantity(sum);
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };


  const toggleBurger = () =>{
    console.log("hi");
  }


  
  return (
    <div className="navbar_container">
      
      <div className="navbar">
        <Link className="item1" tabIndex={1} to="/home">
          <img src={Logo} alt="logo" className="logo" loading="lazy" onClick={scrollToTop}></img>
        </Link>

        <ul id="right-links">
          <Link className="item" tabIndex={2} to="/aboutUs" onClick={scrollToTop}>
            <h3>ABOUT</h3>
          </Link>
          <Link className="item" tabIndex={3} to="/menu" onClick={scrollToTop}>
            <h3>MENU</h3>
          </Link>
          <Link className="item" tabIndex={4} to="/reservations" onClick={scrollToTop}>
            <h3>RESERVATIONS</h3>
          </Link>
          <Link className="item" tabIndex={5} to="/rewards" onClick={scrollToTop}>
            <h3>REWARDS</h3>
          </Link>
          <Link className="item" tabIndex={6} to="/contact" onClick={scrollToTop}>
            <h3>CONTACT</h3>
          </Link>
          <Link className="item" tabIndex={7} to="/checkout" onClick={scrollToTop}>
            <div className="cart_container">
              <img src={Basket} alt="cart" className="cart"></img>
              {quantity !== 0 && <h6 className="cart_count">{quantity}</h6>}
            </div>
          </Link>


        </ul>
        <div className="icon_con">
          <a className="icon" onClick={toggleBurger} >&#9776;  </a>
        </div>

      </div>
      
    </div>
  );
};

export default Navbar;
