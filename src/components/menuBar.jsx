import React from "react";
import { Link } from "react-router-dom";
import New from "../assets/menu_new.png";
import Specials from "../assets/menu1.png";
import Appetizers from "../assets/menub1.png";
import Burgers from "../assets/menub2.png";
import Pizza from "../assets/menub3.png";
import Tex from "../assets/menub4.png";
import Deserts from "../assets/menub5.png";
import Drinks from "../assets/menub6.png";
import Sides from "../assets/menub7.png";
import Arrow from "../assets/arrow1.png";
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
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  const scrollToApp = () => {
    window.scrollTo({
      top: 350,
    });
  };

  return (
    <div className="menuBar">
      <Link to="/menu" className="menu_title"><h4  href="/menu" onClick={scrollToTop}>MENU</h4></Link>
      <div className="menu_sec" id="menu_sec">
        <div className="card1">
          <Link to="/menu?clickSpecials=true">
            <img src={Specialss} alt="Specials" loading="lazy"></img>
          </Link>
          <h5>SPECIALS</h5>
        </div>
        <div className="card1">
        <Link to="/menu" onClick={scrollToApp}>
          <img src={Appetizers} loading="lazy" alt="Appetizers" />
          
        </Link>
          <h5>APPETIZERS</h5>
        </div>
        <div className="card1">
          <img src={Burgers} alt="Burgers" loading="lazy" href="/menu"></img>
          <h5>BURGERS</h5>
        </div>
        <div className="card1">
          <img src={Pizza} alt="Pizza" loading="lazy" href="/menu"></img>
          <h5>PIZZA</h5>
        </div>
        <div className="card1">
          <img src={Tex} alt="Tex" loading="lazy" href="/menu"></img>
          <h5>TEX-MEX</h5>
        </div>
        <div className="card1">
          <img src={Deserts} alt="Deserts" loading="lazy" href="/menu"></img>
          <h5>DESERTS</h5>
        </div>
        <div className="card1">
          <img src={Drinks} alt="Drinks" loading="lazy" href="/menu"></img>
          <h5>DRINKS</h5>
        </div>
        <div className="card1">
          <img src={Sides} alt="Sides" loading="lazy" href="/menu"></img>
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
