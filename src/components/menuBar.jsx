import React from "react";
import { Link } from "react-router-dom";
import New from "../assets/menu_new.png";
import Specials from "../assets/menu1.png";
import Appetizers from "../assets/menu2.png";
import Burgers from "../assets/menu3.png";
import Pizza from "../assets/menu4.png";
import Tex from "../assets/menu5.png";
import Deserts from "../assets/menu6.png";
import Drinks from "../assets/menu7.png";
import Sides from "../assets/menu8.png";
import Arrow from "../assets/arrow.png";
import Specialss from "../assets/specialss.png";

import "./menuBar.css";

export default function menuBar() {
  const scrollHandler = (direction) => {
    let menu = document.getElementById("menu_sec");
    if (direction === "right") {
      menu.scrollLeft += 130;
      return;
    }
    menu.scrollLeft -= 130;
  };

  return (
    <div className="menuBar">
      <h4 className="menu_title">MENU</h4>
      <div className="menu_sec" id="menu_sec">
        <div className="card1">
          <img src={Specialss} alt="Specials" loading="lazy"></img>
          <h5>SPECIALS</h5>
        </div>
        <div className="card1">
          <img src={Appetizers} alt="Appetizers" loading="lazy"></img>
          <h5>APPETIZERS</h5>
        </div>
        <div className="card1">
          <img src={Burgers} alt="Burgers" loading="lazy"></img>
          <h5>BURGERS</h5>
        </div>
        <div className="card1">
          <img src={Pizza} alt="Pizza" loading="lazy"></img>
          <h5>PIZZA</h5>
        </div>
        <div className="card1">
          <img src={Tex} alt="Tex" loading="lazy"></img>
          <h5>TEX-MEX</h5>
        </div>
        <div className="card1">
          <img src={Deserts} alt="Deserts" loading="lazy"></img>
          <h5>DESERTS</h5>
        </div>
        <div className="card1">
          <img src={Drinks} alt="Drinks" loading="lazy"></img>
          <h5>DRINKS</h5>
        </div>
        <div className="card1">
          <img src={Sides} alt="Sides" loading="lazy"></img>
          <h5>SIDES</h5>
        </div>
        <h5 className="border"></h5>
      </div>

      <img
        src={Arrow}
        alt="left arrow"
        className="left_arrow"
        id="left_arrow"
        onClick={() => scrollHandler("left")}
      ></img>
      <img
        src={Arrow}
        alt="right arrow"
        className="right_arrow"
        id="right_arrow"
        onClick={() => scrollHandler("right")}
      ></img>
    </div>
  );
}
