import React from "react";
import { Link } from "react-router-dom";
import "./Menu2.css";
import Img from "../assets/img.png";
import Cart from "../assets/cart2.png";

export default function Menu2() {
    return (
        <div className="menu_page">
            <div className="side_bar">
            <h4 className="side_bar_title">Menu</h4>
            <div className="side_bar_items">
                <Link className="side_item" to="#New">
                <h3>NEW</h3>
                </Link>
                <Link className="side_item" to="home">
                <h3>SPECIALS</h3>
                </Link>
                <Link className="side_item" to="#Appetizers">
                <h3>APPETIZERS</h3>
                </Link>
                <Link className="side_item" to="home">
                <h3>BURGERS</h3>
                </Link>
                <Link className="side_item" to="home">
                <h3>PIZZA</h3>
                </Link>
                <Link className="side_item" to="home">
                <h3>TEX-MEX</h3>
                </Link>
                <Link className="side_item" to="home">
                <h3>DESERTS</h3>
                </Link>
                <Link className="side_item" to="home">
                <h3>DRINKS</h3>
                </Link>
                <Link className="side_item" to="home">
                <h3>SIDES</h3>
                </Link>
                <Link className="side_item_beta" to="home">
                <h3>Allergen Menu</h3>
                </Link>
                <Link className="side_item_beta" to="home">
                <h3>Nutrition Menu</h3>
                </Link>
            </div>
            </div>
            <div className="main_menu">
            <div className="new">
                <h4 className="new_title" id="New">
                New
                </h4>
                <div className="new_items">
                <div className="new_item" data-name="item-1">
                    <img src={Img} alt="img" className="new_item_img" />
                    <h3 className="new_text">Food Name</h3>
                    <h4 className="new_text">Price</h4>
                    <img src={Cart} alt="cart" className="add_cart" />
                </div>
                <div className="new_item">
                    <img src={Img} alt="img" className="new_item_img" />
                    <h3>Food Name</h3>
                    <h4>Price</h4>
                    <img src={Cart} alt="cart" className="add_cart" />
                </div>
                <div className="new_item">
                    <img src={Img} alt="img" className="new_item_img" />
                    <h3>Food Name</h3>
                    <h4>Price</h4>
                    <img src={Cart} alt="cart" className="add_cart" />
                </div>
                <div className="new_item">
                    <img src={Img} alt="img" className="new_item_img" />
                    <h3>Food Name</h3>
                    <h4>Price</h4>
                    <img src={Cart} alt="cart" className="add_cart" />
                </div>
                <div className="new_item">
                    <img src={Img} alt="img" className="new_item_img" />
                    <h3>Food Name</h3>
                    <h4>Price</h4>
                    <img src={Cart} alt="cart" className="add_cart" />
                </div>
                </div>
            </div>
            <div className="new">
                <h4 className="new_title">Specials</h4>
                <div className="new_items">
                <div className="new_item">
                    <img src={Img} alt="img" className="new_item_img" />
                    <h3 className="new_text">Food Name</h3>
                    <h4 className="new_text">Price</h4>
                    <img src={Cart} alt="cart" className="add_cart" />
                </div>
                <div className="new_item">
                    <img src={Img} alt="img" className="new_item_img" />
                    <h3>Food Name</h3>
                    <h4>Price</h4>
                    <img src={Cart} alt="cart" className="add_cart" />
                </div>
                <div className="new_item">
                    <img src={Img} alt="img" className="new_item_img" />
                    <h3>Food Name</h3>
                    <h4>Price</h4>
                    <img src={Cart} alt="cart" className="add_cart" />
                </div>
                <div className="new_item">
                    <img src={Img} alt="img" className="new_item_img" />
                    <h3>Food Name</h3>
                    <h4>Price</h4>
                    <img src={Cart} alt="cart" className="add_cart" />
                </div>
                </div>
            </div>
            <div className="new">
                <h4 className="new_title" id="Appetizers">
                Appetizers
                </h4>
                <div className="new_items">
                <div className="new_item">
                    <img src={Img} alt="img" className="new_item_img" />
                    <h3 className="new_text">Food Name</h3>
                    <h4 className="new_text">Price</h4>
                    <img src={Cart} alt="cart" className="add_cart" />
                </div>
                <div className="new_item">
                    <img src={Img} alt="img" className="new_item_img" />
                    <h3>Food Name</h3>
                    <h4>Price</h4>
                    <img src={Cart} alt="cart" className="add_cart" />
                </div>
                <div className="new_item">
                    <img src={Img} alt="img" className="new_item_img" />
                    <h3>Food Name</h3>
                    <h4>Price</h4>
                    <img src={Cart} alt="cart" className="add_cart" />
                </div>
                <div className="new_item">
                    <img src={Img} alt="img" className="new_item_img" />
                    <h3>Food Name</h3>
                    <h4>Price</h4>
                    <img src={Cart} alt="cart" className="add_cart" />
                </div>
                </div>
            </div>
            <div className="new">
                <h4 className="new_title">Burgers</h4>
                <div className="new_items">
                <div className="new_item">
                    <img src={Img} alt="img" className="new_item_img" />
                    <h3 className="new_text">Food Name</h3>
                    <h4 className="new_text">Price</h4>
                    <img src={Cart} alt="cart" className="add_cart"/>
                </div>
                <div className="new_item">
                    <img src={Img} alt="img" className="new_item_img" />
                    <h3>Food Name</h3>
                    <h4>Price</h4>
                    <img src={Cart} alt="cart" className="add_cart" />
                </div>
                <div className="new_item">
                    <img src={Img} alt="img" className="new_item_img" />
                    <h3>Food Name</h3>
                    <h4>Price</h4>
                    <img src={Cart} alt="cart" className="add_cart" />
                </div>
                <div className="new_item">
                    <img src={Img} alt="img" className="new_item_img" />
                    <h3>Food Name</h3>
                    <h4>Price</h4>
                    <img src={Cart} alt="cart" className="add_cart" />
                </div>
                </div>
            </div>
            <div className="new">
                <h4 className="new_title">Pizza</h4>
                <div className="new_items">
                <div className="new_item">
                    <img src={Img} alt="img" className="new_item_img" />
                    <h3 className="new_text">Food Name</h3>
                    <h4 className="new_text">Price</h4>
                    <img src={Cart} alt="cart" className="add_cart" />
                </div>
                <div className="new_item">
                    <img src={Img} alt="img" className="new_item_img" />
                    <h3>Food Name</h3>
                    <h4>Price</h4>
                    <img src={Cart} alt="cart" className="add_cart" />
                </div>
                <div className="new_item">
                    <img src={Img} alt="img" className="new_item_img" />
                    <h3>Food Name</h3>
                    <h4>Price</h4>
                    <img src={Cart} alt="cart" className="add_cart" />
                </div>
                <div className="new_item">
                    <img src={Img} alt="img" className="new_item_img" />
                    <h3>Food Name</h3>
                    <h4>Price</h4>
                    <img src={Cart} alt="cart" className="add_cart" />
                </div>
                </div>
            </div>
            <div className="new">
                <h4 className="new_title">Tex-Mex</h4>
                <div className="new_items">
                <div className="new_item">
                    <img src={Img} alt="img" className="new_item_img" />
                    <h3 className="new_text">Food Name</h3>
                    <h4 className="new_text">Price</h4>
                    <img src={Cart} alt="cart" className="add_cart" />
                </div>
                <div className="new_item">
                    <img src={Img} alt="img" className="new_item_img" />
                    <h3>Food Name</h3>
                    <h4>Price</h4>
                    <img src={Cart} alt="cart" className="add_cart" />
                </div>
                <div className="new_item">
                    <img src={Img} alt="img" className="new_item_img" />
                    <h3>Food Name</h3>
                    <h4>Price</h4>
                    <img src={Cart} alt="cart" className="add_cart" />
                </div>
                <div className="new_item">
                    <img src={Img} alt="img" className="new_item_img" />
                    <h3>Food Name</h3>
                    <h4>Price</h4>
                    <img src={Cart} alt="cart" className="add_cart" />
                </div>
                </div>
            </div>
            <div className="new">
                <h4 className="new_title">Deserts</h4>
                <div className="new_items">
                <div className="new_item">
                    <img src={Img} alt="img" className="new_item_img" />
                    <h3 className="new_text">Food Name</h3>
                    <h4 className="new_text">Price</h4>
                    <img src={Cart} alt="cart" className="add_cart" />
                </div>
                <div className="new_item">
                    <img src={Img} alt="img" className="new_item_img" />
                    <h3>Food Name</h3>
                    <h4>Price</h4>
                    <img src={Cart} alt="cart" className="add_cart" />
                </div>
                <div className="new_item">
                    <img src={Img} alt="img" className="new_item_img" />
                    <h3>Food Name</h3>
                    <h4>Price</h4>
                    <img src={Cart} alt="cart" className="add_cart" />
                </div>
                <div className="new_item">
                    <img src={Img} alt="img" className="new_item_img" />
                    <h3>Food Name</h3>
                    <h4>Price</h4>
                    <img src={Cart} alt="cart" className="add_cart" />
                </div>
                </div>
            </div>
            <div className="new">
                <h4 className="new_title">Drinks</h4>
                <div className="new_items">
                <div className="new_item">
                    <img src={Img} alt="img" className="new_item_img" />
                    <h3 className="new_text">Food Name</h3>
                    <h4 className="new_text">Price</h4>
                    <img src={Cart} alt="cart" className="add_cart" />
                </div>
                <div className="new_item">
                    <img src={Img} alt="img" className="new_item_img" />
                    <h3>Food Name</h3>
                    <h4>Price</h4>
                    <img src={Cart} alt="cart" className="add_cart" />
                </div>
                <div className="new_item">
                    <img src={Img} alt="img" className="new_item_img" />
                    <h3>Food Name</h3>
                    <h4>Price</h4>
                    <img src={Cart} alt="cart" className="add_cart" />
                </div>
                <div className="new_item">
                    <img src={Img} alt="img" className="new_item_img" />
                    <h3>Food Name</h3>
                    <h4>Price</h4>
                    <img src={Cart} alt="cart" className="add_cart" />
                </div>
                </div>
            </div>
            <div className="new">
                <h4 className="new_title">Sides</h4>
                <div className="new_items">
                <div className="new_item">
                    <img src={Img} alt="img" className="new_item_img" />
                    <h3 className="new_text">Food Name</h3>
                    <h4 className="new_text">Price</h4>
                    <img src={Cart} alt="cart" className="add_cart" />
                </div>
                <div className="new_item">
                    <img src={Img} alt="img" className="new_item_img" />
                    <h3>Food Name</h3>
                    <h4>Price</h4>
                    <img src={Cart} alt="cart" className="add_cart" />
                </div>
                <div className="new_item">
                    <img src={Img} alt="img" className="new_item_img" />
                    <h3>Food Name</h3>
                    <h4>Price</h4>
                    <img src={Cart} alt="cart" className="add_cart" />
                </div>
                <div className="new_item">
                    <img src={Img} alt="img" className="new_item_img" />
                    <h3>Food Name</h3>
                    <h4>Price</h4>
                    <img src={Cart} alt="cart" className="add_cart" />
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}
