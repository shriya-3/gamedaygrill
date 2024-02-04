import React, { useState } from 'react';

import "./Cards.css";
import Cart from "../assets/cart3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { } from "@fortawesome/free-brands-svg-icons"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import {  } from "@fortawesome/free-solid-svg-icons"
import Mushrooms2 from "../assets/mushrooms2.png"
import Onions from "../assets/onions.png"
import Bellpepper from "../assets/bellpepper.png"
import Olives from "../assets/olives.png"
import Spinach from "../assets/spinach.png"
import Ham from "../assets/ham.png"
import Chicken from "../assets/grilledchicken.png"
import Pep from "../assets/pepperoni.png"
import Bacon from "../assets/bacon.png"
import Sauce from "../assets/redsauce.png"
import Modal from "react-modal";




import { useQuantity } from "./contexts/Quantity";

const getPriceForSize = (size) => {
  switch (size) {
    case 'small':
      return 11.99;
    case 'medium':
      return 13.99;
    case 'large':
      return 16.99;
    default:
      return 0;
  }
};


const addToCart = (newItem, newQuantity) => {
  let items = localStorage.getItem("cart");
  items = JSON.parse(items) || [];
  let index = items.findIndex((item) => item.title === newItem.title);
  if (index !== -1) {
    items[index].quantity += newQuantity;
    if (newItem.title.toLowerCase().includes('pizza')) {
      items[index].total = newQuantity * getPriceForSize(newItem.size);
      items[index].price = getPriceForSize(newItem.size); 
    } else {
      items[index].total = newItem.price * newQuantity;
    }
  } else {
    const total = newItem.title.toLowerCase().includes('pizza')
      ? newQuantity * getPriceForSize(newItem.size)
      : newItem.price * newQuantity;
    items.push({ ...newItem, quantity: newQuantity, total });
    if (newItem.title.toLowerCase().includes('pizza')) {
      items[items.length - 1].price = getPriceForSize(newItem.size); 
    }
  }
  localStorage.setItem("cart", JSON.stringify(items));
};




  


const Cards = (props) => {
  const { title, desc, price, img, calorie } = props.item;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [newQuantity, setNewQuantity] = useState(1);
  const { quantity, updateQuantity } = useQuantity();
  
    const handleQuantityChange = (e) => {
      setNewQuantity(parseInt(e.target.value, 10));
    };

    const [selectedSize, setSelectedSize] = useState('small');
    const [total, setTotal] = useState(11.99);
    const updateTotal = (size) => {
      setSelectedSize(size);
      switch (size) {
        case 'small':
          setTotal(11.99);
          break;
        case 'medium':
          setTotal(13.99);
          break;
        case 'large':
          setTotal(16.99);
          break;
        default:
          break;
      }
    };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const [selectedToppings, setSelectedToppings] = useState({
    mushrooms: false,
    onions: false,
    peppers: false,
    olives: false,
    spinach: false,
    ham: false,
    chicken: false,
    pep: false,
    bacon: false,
    sauce: false
  });

  const toggleTopping = (topping) => {
    setSelectedToppings((prev) => ({
      ...prev,
      [topping]: !prev[topping],
    }));
  };

  const customStyles = {
    content: {
      top: '55%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '55rem',
      height: '30rem',
      background: '#f8fadb'
    },
  };

  return (
    <div className="card">
      <div className="image_box">
        <img src={img} alt="image" className="menu_img" />
      </div>
      <div className="details">
        <h3 className="title">{title}</h3>
        {title.toLowerCase().includes('pizza') ? null : <h4>${price}</h4>}
        <img src={Cart} onClick={() => openModal()} className="cart_img" />

      </div>
      <div className="modal_container">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Add To Cart Modal"
          appElement={document.getElementById('adder')}
        >
          <div className="test">

            <div className="top_sec">

              <div className="image_box">
                <img src={img} alt="image" className="menu_img_modal" />
              </div>
              <div className="desc_con">
                <div className="close_btn_con">

                </div>
                <div className="title_con">
                  <h3>
                    {title}
                  </h3>
                  <button onClick={closeModal} className="close_button">
                      <FontAwesomeIcon icon={ faXmark } ></FontAwesomeIcon>
                    </button>
                </div>

                <div className="sub_con">
                  <p>{desc}</p>
                  <p>Cals: {calorie}</p>
                </div>

              </div>
            </div>

            
              <div className="specifics">
                <div className="quantity_con">
                  <label htmlFor="quantity">Quantity:</label>
                  <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      min="1"
                      value={newQuantity}
                      onChange={handleQuantityChange}
                  />
                  {title.toLowerCase().includes('pizza') && (
                  <div className="sizes">
                    <label htmlFor="quantity">Choose Your Size:</label>
                      <div className="size_con">
                        <button
                          className={`size-circle-small ${selectedSize === 'small' ? 'selected' : ''}`}
                          onClick={() => updateTotal('small')}
                        >
                          Small
                        </button>
                        <button
                          className={`size-circle-medium ${selectedSize === 'medium' ? 'selected' : ''}`}
                          onClick={() => updateTotal('medium')}
                        >
                          Medium
                        </button>
                        <button
                          className={`size-circle-large ${selectedSize === 'large' ? 'selected' : ''}`}
                          onClick={() => updateTotal('large')}
                        >
                          Large
                        </button>

                      </div>
                    
                  </div>
                  )}
                </div>
                

                <div className="toppings">
                  
                  {title.toLowerCase().includes('pizza') && (
                    
                    <div className="toppings_con">
                      <p className="customize_title">Customize your Toppings:</p>
                      <div className="toppings_con2">
                        <div className="topping-circle2" >
                          <div className="topping2_con" onClick={() => toggleTopping('mushrooms')}>
                            <div className="topping-circle" onClick={() => toggleTopping('mushrooms')}>
                              <img className="topping_img" src={Mushrooms2} onClick={() => toggleTopping('mushrooms')}></img>
                            </div>
                            <div className="select_top">
                              {selectedToppings.mushrooms ? <span>-</span> : <span>+</span>}
                            </div>
                            <p>Mushrooms</p>
                          </div>
                        </div>
                        <div className="topping-circle2" onClick={() => toggleTopping('onions')}>
                          <div className="topping2_con">
                            <div className="topping-circle" onClick={() => toggleTopping('onions')}>
                              <img className="topping_img2" src={Onions} onClick={() => toggleTopping('onions')}></img>
                            </div>
                            <div className="select_top">
                              {selectedToppings.onions ? <span>-</span> : <span>+</span>}
                            </div>
                            <p>Onions</p>
                          </div>
                        </div>
                        <div className="topping-circle2" onClick={() => toggleTopping('peppers')}>
                          <div className="topping2_con">
                            <div className="topping-circle" onClick={() => toggleTopping('peppers')}>
                              <img className="topping_img3" src={Bellpepper} onClick={() => toggleTopping('peppers')}></img>
                            </div>
                            <div className="select_top">
                              {selectedToppings.peppers ? <span>-</span> : <span>+</span>}
                            </div>
                            <p>Peppers</p>
                          </div>
                        </div>
                        <div className="topping-circle2" onClick={() => toggleTopping('olives')}>
                          <div className="topping2_con">
                            <div className="topping-circle" onClick={() => toggleTopping('olives')}>
                              <img className="topping_img" src={Olives} onClick={() => toggleTopping('olives')}></img>
                            </div>
                            <div className="select_top">
                              {selectedToppings.olives ? <span>-</span> : <span>+</span>}
                            </div>
                            <p>Olives</p>
                          </div>
                        </div>
                        <div className="topping-circle2" onClick={() => toggleTopping('spinach')}>
                          <div className="topping2_con">
                            <div className="topping-circle" onClick={() => toggleTopping('spinach')}>
                              <img className="topping_img" src={Spinach} onClick={() => toggleTopping('spinach')}></img>
                            </div>
                            <div className="select_top">
                              {selectedToppings.spinach ? <span>+</span> : <span>-</span>}
                            </div>
                            <p>Spinach</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {(title.toLowerCase().includes('fresco'))  && (
                    
                    <div className="toppings_con">
                      <p className="customize_title">Customize your Meat:</p>
                      <div className="toppings_con2">

                        <div className="topping-circle2" onClick={() => toggleTopping('chicken')}>
                          <div className="topping2_con">
                            <div className="topping-circle" onClick={() => toggleTopping('chicken')}>
                              <img className="topping_img" src={Chicken} onClick={() => toggleTopping('chicken')}></img>
                            </div>
                            <div className="select_top">
                              {selectedToppings.chicken ? <span>+</span> : <span>-</span>}
                            </div>
                            <p>Chicken</p>
                          </div>
                        </div>
                        <div className="topping-circle2" onClick={() => toggleTopping('bacon')}>
                          <div className="topping2_con">
                            <div className="topping-circle" onClick={() => toggleTopping('bacon')}>
                              <img className="topping_img" src={Bacon} onClick={() => toggleTopping('bacon')}></img>
                            </div>
                            <div className="select_top">
                              {selectedToppings.bacon ? <span>+</span> : <span>-</span>}
                            </div>
                            <p>Bacon</p>
                          </div>
                        </div>

                        <div className="topping-circle2" >
                          <div className="topping2_con" onClick={() => toggleTopping('ham')}>
                            <div className="topping-circle" onClick={() => toggleTopping('ham')}>
                              <img className="topping_img" src={Ham} onClick={() => toggleTopping('ham')}></img>
                            </div>
                            <div className="select_top">
                              {selectedToppings.ham ? <span>-</span> : <span>+</span>}
                            </div>
                            <p>Ham</p>
                          </div>
                        </div>
                        <div className="topping-circle2" onClick={() => toggleTopping('pep')}>
                          <div className="topping2_con">
                            <div className="topping-circle" onClick={() => toggleTopping('pep')}>
                              <img className="topping_img" src={Pep} onClick={() => toggleTopping('pep')}></img>
                            </div>
                            <div className="select_top">
                              {selectedToppings.pep ? <span>-</span> : <span>+</span>}
                            </div>
                            <p>Pepperoni</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {(title.toLowerCase().includes('buffalo'))  && (
                    
                    <div className="toppings_con">
                      <p className="customize_title">Customize your Meat:</p>
                      <div className="toppings_con2">

                        <div className="topping-circle2" onClick={() => toggleTopping('chicken')}>
                          <div className="topping2_con">
                            <div className="topping-circle" onClick={() => toggleTopping('chicken')}>
                              <img className="topping_img" src={Chicken} onClick={() => toggleTopping('chicken')}></img>
                            </div>
                            <div className="select_top">
                              {selectedToppings.chicken ? <span>+</span> : <span>-</span>}
                            </div>
                            <p>Chicken</p>
                          </div>
                        </div>
                        <div className="topping-circle2" onClick={() => toggleTopping('bacon')}>
                          <div className="topping2_con">
                            <div className="topping-circle" onClick={() => toggleTopping('bacon')}>
                              <img className="topping_img" src={Bacon} onClick={() => toggleTopping('bacon')}></img>
                            </div>
                            <div className="select_top">
                              {selectedToppings.bacon ? <span>-</span> : <span>+</span>}
                            </div>
                            <p>Bacon</p>
                          </div>
                        </div>

                        <div className="topping-circle2" >
                          <div className="topping2_con" onClick={() => toggleTopping('ham')}>
                            <div className="topping-circle" onClick={() => toggleTopping('ham')}>
                              <img className="topping_img" src={Ham} onClick={() => toggleTopping('ham')}></img>
                            </div>
                            <div className="select_top">
                              {selectedToppings.ham ? <span>-</span> : <span>+</span>}
                            </div>
                            <p>Ham</p>
                          </div>
                        </div>
                        <div className="topping-circle2" onClick={() => toggleTopping('pep')}>
                          <div className="topping2_con">
                            <div className="topping-circle" onClick={() => toggleTopping('pep')}>
                              <img className="topping_img" src={Pep} onClick={() => toggleTopping('pep')}></img>
                            </div>
                            <div className="select_top">
                              {selectedToppings.pep ? <span>-</span> : <span>+</span>}
                            </div>
                            <p>Pepperoni</p>
                          </div>
                        </div>
                        <div className="topping-circle2" onClick={() => toggleTopping('sauce')}>
                          <div className="topping2_con">
                            <div className="topping-circle" onClick={() => toggleTopping('sauce')}>
                              <img className="topping_img4" src={Sauce} onClick={() => toggleTopping('sauce')}></img>
                            </div>
                            <div className="select_top">
                              {selectedToppings.sauce ? <span>-</span> : <span>+</span>}
                            </div>
                            <p>Buffalo Sauce</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {(title.toLowerCase().includes('double cheese pizza'))  && (
                    
                    <div className="toppings_con">
                      <p className="customize_title">Customize your Cheese:</p>
                      <div className="toppings_con2">

                        <div className="topping-circle2" onClick={() => toggleTopping('chicken')}>
                          <div className="topping2_con">
                            <div className="topping-circle" onClick={() => toggleTopping('chicken')}>
                              <img className="topping_img" src={Chicken} onClick={() => toggleTopping('chicken')}></img>
                            </div>
                            <div className="select_top">
                              {selectedToppings.chicken ? <span>+</span> : <span>-</span>}
                            </div>
                            <p>Chicken</p>
                          </div>
                        </div>
                        <div className="topping-circle2" onClick={() => toggleTopping('bacon')}>
                          <div className="topping2_con">
                            <div className="topping-circle" onClick={() => toggleTopping('bacon')}>
                              <img className="topping_img" src={Bacon} onClick={() => toggleTopping('bacon')}></img>
                            </div>
                            <div className="select_top">
                              {selectedToppings.bacon ? <span>-</span> : <span>+</span>}
                            </div>
                            <p>Bacon</p>
                          </div>
                        </div>

                        <div className="topping-circle2" >
                          <div className="topping2_con" onClick={() => toggleTopping('ham')}>
                            <div className="topping-circle" onClick={() => toggleTopping('ham')}>
                              <img className="topping_img" src={Ham} onClick={() => toggleTopping('ham')}></img>
                            </div>
                            <div className="select_top">
                              {selectedToppings.ham ? <span>-</span> : <span>+</span>}
                            </div>
                            <p>Ham</p>
                          </div>
                        </div>
                        <div className="topping-circle2" onClick={() => toggleTopping('pep')}>
                          <div className="topping2_con">
                            <div className="topping-circle" onClick={() => toggleTopping('pep')}>
                              <img className="topping_img" src={Pep} onClick={() => toggleTopping('pep')}></img>
                            </div>
                            <div className="select_top">
                              {selectedToppings.pep ? <span>-</span> : <span>+</span>}
                            </div>
                            <p>Pepperoni</p>
                          </div>
                        </div>
                        <div className="topping-circle2" onClick={() => toggleTopping('sauce')}>
                          <div className="topping2_con">
                            <div className="topping-circle" onClick={() => toggleTopping('sauce')}>
                              <img className="topping_img4" src={Sauce} onClick={() => toggleTopping('sauce')}></img>
                            </div>
                            <div className="select_top">
                              {selectedToppings.sauce ? <span>-</span> : <span>+</span>}
                            </div>
                            <p>Buffalo Sauce</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {(title.toLowerCase().includes('hawaiian pizza'))  && (  
                    <div className="toppings_con">
                      <p className="customize_title">Customize your Meat:</p>
                      <div className="toppings_con2">

                        <div className="topping-circle2" onClick={() => toggleTopping('chicken')}>
                          <div className="topping2_con">
                            <div className="topping-circle" onClick={() => toggleTopping('chicken')}>
                              <img className="topping_img" src={Chicken} onClick={() => toggleTopping('chicken')}></img>
                            </div>
                            <div className="select_top">
                              {selectedToppings.chicken ? <span>+</span> : <span>-</span>}
                            </div>
                            <p>Chicken</p>
                          </div>
                        </div>
                        <div className="topping-circle2" onClick={() => toggleTopping('bacon')}>
                          <div className="topping2_con">
                            <div className="topping-circle" onClick={() => toggleTopping('bacon')}>
                              <img className="topping_img" src={Bacon} onClick={() => toggleTopping('bacon')}></img>
                            </div>
                            <div className="select_top">
                              {selectedToppings.bacon ? <span>-</span> : <span>+</span>}
                            </div>
                            <p>Bacon</p>
                          </div>
                        </div>

                        <div className="topping-circle2" >
                          <div className="topping2_con" onClick={() => toggleTopping('ham')}>
                            <div className="topping-circle" onClick={() => toggleTopping('ham')}>
                              <img className="topping_img" src={Ham} onClick={() => toggleTopping('ham')}></img>
                            </div>
                            <div className="select_top">
                              {selectedToppings.ham ? <span>-</span> : <span>+</span>}
                            </div>
                            <p>Ham</p>
                          </div>
                        </div>
                        <div className="topping-circle2" onClick={() => toggleTopping('pep')}>
                          <div className="topping2_con">
                            <div className="topping-circle" onClick={() => toggleTopping('pep')}>
                              <img className="topping_img" src={Pep} onClick={() => toggleTopping('pep')}></img>
                            </div>
                            <div className="select_top">
                              {selectedToppings.pep ? <span>-</span> : <span>+</span>}
                            </div>
                            <p>Pepperoni</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}




                  <div className="request_con">
                    <label htmlFor="requests">Special Requests</label>
                    <br></br>
                    <input
                        type="text"
                        className="requests_input"
                    />
                  </div>
                </div>
              </div>
            <div className="bottom_sec">
              <h4>${title.toLowerCase().includes('pizza') ? (total * newQuantity).toFixed(2) : (price * newQuantity).toFixed(2)}</h4>
              <button
              onClick={() => {
                addToCart({ ...props.item, size: selectedSize }, newQuantity);
                updateQuantity(quantity + newQuantity);
                closeModal();
              }}
            >
              Add to Cart - ${title.toLowerCase().includes('pizza') ? (getPriceForSize(selectedSize) * newQuantity).toFixed(2) : (price * newQuantity).toFixed(2)}
            </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Cards;
