import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/gdg.png";
import Basket from "../assets/basket.png";
import "./Navbar.css";

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

  return (
    <div className="navbar_container">
      <div className="navbar">
        <Link className="item" to="/home">
          <img src={Logo} alt="logo" className="logo" loading="lazy"></img>
        </Link>
        <Link className="item" to="/menu">
          <h3>MENU</h3>
        </Link>
        <Link className="item" to="/reservations">
          <h3>RESERVATIONS</h3>
        </Link>
        <Link className="item" to="/rewards">
          <h3>REWARDS</h3>
        </Link>
        <Link className="item" to="/contact">
          <h3>CONTACT</h3>
        </Link>
        <Link className="item" to="/checkout">
          <div className="cart_container">
            <img src={Basket} alt="cart" className="cart"></img>
            {(quantity != 0) && (
              <h6 className="cart_count">{quantity}</h6>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
