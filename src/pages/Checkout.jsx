import React, { useState, useEffect } from "react";

import Logo2 from "../assets/logo2.png";
import Credit from "../assets/credit.png";

import "./Checkout.css";

import { useQuantity } from "../components/contexts/Quantity";

const Modal = ({ closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="close_con">
          <p>Your order has been placed successfully!</p>
          <br></br>
          <p>Thank you for choosing Game Day Grill</p>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  );
};

const Checkout = () => {

  
  const [deliveryOption, setDeliveryOption] = useState("delivery");
  const [pickupName, setPickupName] = useState("");
  const [pickupName2, setPickupName2] = useState("");
  const [pickupTimes, setPickupTimes] = useState([]);

  const handleDeliveryOptionChange = (option) => {
      setDeliveryOption(option);
  };

  const [paymentOption, setPaymentOption] = useState("creditCard");

  const handlePaymentOptionChange = (option1) => {
    setPaymentOption(option1);
  };


  const [giftCardBalance, setGiftCardBalance] = useState(0.0);

  // ... (existing functions)

  const handleGiftCardCodeChange = (code) => {
    // Check if the entered code is correct
    if (code === "GAMEDAY10") {
      // Update the balance when the correct code is entered
      setDiscountBalance(10.0);
      setGiftCardBalance(10.0);
    } else {
      // Reset the balance if the code is incorrect or empty
      setGiftCardBalance(0.0);
    }
  };

  const [discountBalance, setDiscountBalance] = useState(0.0);

  const handleDiscountChange = (code) => {
    if (code === "COWBOY20") {
      setDiscountBalance((sum * 1.0825).toFixed(2) * 0.2);
    } else if (code === "SPRING15") {
      setDiscountBalance(15.0)
    } else if (code === "MONDAY5") {
      setDiscountBalance(5.0)
    } else {
      setDiscountBalance(0.0);
    }
  };



  const { updateQuantity } = useQuantity();

  

  let items = localStorage.getItem("cart");
  items = JSON.parse(items) || [];
  let sum = 0;
  for (var i = 0; i < items.length; i++) {
    sum += items[i].price * items[i].quantity;
  }



  const removeItem = (title) => {
    const updatedItems = items.filter((item) => item.title !== title);
    setCartItems(updatedItems);
    updateQuantity(updatedItems.length);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  }

  const closeModal = () => {
    setIsModalVisible(false);
  }
  const placeOrder = () => {
    showModal();
    localStorage.setItem("cart", JSON.stringify([]));
    updateQuantity(0);
    setDiscountCode("");
  };

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const currentDay = new Date().getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const currentTime = new Date();
  
    const generatePickupTimes = () => {
      const weekdayTimes = [
        "8:15", "8:30", "8:45", "9:00", "9:15", "9:30", "9:45", "10:00", "10:15", "10:30",
        "10:45", "11:00", "11:15", "11:30", "11:45", "12:00", "12:15", "12:30",
        "1:00", "1:15", "1:30", "1:45", "2:00", "2:15", "2:30", "2:45", "3:00",
        "3:15", "3:30", "3:45", "4:00", "4:15", "4:30", "4:45", "5:00", "5:15",
        "5:30", "5:45", "6:00", "6:15", "6:30", "6:45", "7:00", "7:15", "7:30",
        "7:45", "8:00", "8:15", "8:30", "8:45", "9:00", "9:15", "9:30", "9:45",
        "10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00",
        "12:15", "12:30"
      ];
  
      const weekendTimes = [
        "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00",
        "12:15", "12:30", "1:00", "1:15", "1:30", "1:45", "2:00", "2:15", "2:30",
        "2:45", "3:00", "3:15", "3:30", "3:45", "4:00", "4:15", "4:30", "4:45",
        "5:00", "5:15", "5:30", "5:45", "6:00", "6:15", "6:30", "6:45", "7:00",
        "7:15", "7:30", "7:45", "8:00", "8:15", "8:30", "8:45", "9:00", "9:15",
        "9:30", "9:45", "10:00", "10:15", "10:30", "10:45", "11:00", "11:15",
        "11:30", "11:45", "12:00", "12:15", "12:30"
      ];
  
      let availableTimes = [];

      if (currentDay >= 1 && currentDay <= 5) {
        availableTimes = weekdayTimes;
      } else if (currentDay === 0 || currentDay === 6) {
        availableTimes = weekendTimes;
      }
  
      // Convert all times to 24-hour format
      const allTimes = availableTimes.map(time => {
        const [hours, minutes] = time.split(":");
        return `${parseInt(hours, 10) < 10 ? '0' : ''}${hours}:${minutes}`;
      });
  
      // Filter out duplicates
      const uniqueTimes = Array.from(new Set(allTimes));
  
      // Filter out times that are earlier than the current time + 10 minutes
      const cutoffTime = new Date(currentTime.getTime() + 10 * 60000); // 10 minutes in the future
      const [cutoffHour, cutoffMinute] = cutoffTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }).split(":");
      const cutoffMinutes = parseInt(cutoffHour, 10) * 60 + parseInt(cutoffMinute, 10);
  
      availableTimes = uniqueTimes.filter(time => {
        const [hours, minutes] = time.split(":");
        const timeMinutes = parseInt(hours, 10) * 60 + parseInt(minutes, 10);
        return timeMinutes >= cutoffMinutes;
      });
  
      setPickupTimes(availableTimes);
    };
  
    generatePickupTimes();
  }, []);





  return (
    <div className="checkout_page">
      <div className="topp">
        <p>.</p>
      </div>
      <div className="checkout_container">
        <div className="checkout_grid">
          <div className="payment">
            <div className="order_type">
              <div className="options">
                <div className="delivery_btn_con">
                  <label htmlFor="delivery">
                    <button
                      onClick={() => handleDeliveryOptionChange("delivery")}
                      className={`delivery_btn ${deliveryOption === "delivery" ? "active1" : ""}`} >
                      <input
                        type="radio"
                        id="delivery"
                        name="orderType"
                        value="delivery"
                        className="delivery_radio"
                        checked={deliveryOption === "delivery"}
                        onChange={() => handleDeliveryOptionChange("delivery")}
                      />
                      Delivery
                    </button>
                  </label>
                </div>
                <div className="pickup_btn_con">
                  <label htmlFor="pickup">
                    <button
                      onClick={() => handleDeliveryOptionChange("pickup")}
                      className={`pickup_btn ${deliveryOption === "pickup" ? "active1" : ""}`} >
                      <input
                        type="radio"
                        id="pickup"
                        name="orderType"
                        value="pickup"
                        className="pickup_radio"
                        checked={deliveryOption === "pickup"}
                        onChange={() => handleDeliveryOptionChange("pickup")}
                      />
                      <label for="pickup">Pickup</label>
                    </button>
                  </label>
                </div>



              </div>


              {deliveryOption === "delivery" && (
                <div className="delivery_con">
                  <div className="delivery_grid">
                    <div className="address_con">
                      <label htmlFor="Address">Street Address</label>
                      <br></br>
                      <input
                        type="text"
                        required
                        id="Address"
                      />
                    </div>
                    <div className="delivery_one">
                      <div>
                        <label htmlFor="suite">Suite/Apt #:</label>
                        <br></br>
                        <input
                          type="text"
                          id="suite"
                        />
                      </div>
                      <div>
                        <label htmlFor="zip">Zip Code:</label>
                        <br></br>
                        <input
                          type="text"
                          id="zip"
                        />
                      </div>
                    </div>

                    <div className="delivery_two">
                      <div>
                        <label htmlFor="city">City:</label>
                        <br></br>
                        <input
                          type="text"
                          id="city"
                        />
                      </div>
                      <div>
                        <label htmlFor="state">State:</label>
                        <br></br>
                        <input
                          type="text"
                          id="state"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {deliveryOption === "pickup" && (
                <div className="pickup_con">
                  <div className="pickup_grid">
                    <div className="pickup_time">
                      <label htmlFor="subject" className="pickup_text">Choose Pickup Time:</label>
                    <select
                      id="subject"
                      className="input"
                      required
                    >
                      <option value="">Select...</option>
                      {pickupTimes.map((time, index) => (
                        <option key={index} value={time}>{time}
                          {parseInt(time.split(":")[0], 10) < 12 ? "pm" : "am"}
                        </option>
                        
                      ))}
                    </select>
                    </div>
                    <div className="pickup_name">
                      <div>
                        <label htmlFor="pickup_name1">First Name:</label>
                        <br></br>
                        <input
                          type="text"
                          id="pickupName"
                          value={pickupName}
                          onChange={(e) => setPickupName(e.target.value)}
                        />
                      </div>
                      <div>
                        <label htmlFor="pickupTime2">Last Name:</label>
                        <br></br>
                        <input
                          type="text"
                          id="pickupName2"
                          value={pickupName2}
                          onChange={(e) => setPickupName2(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="pickup_contact">
                      <div className="pickup_email">
                        <label htmlFor="email">Email:</label>
                        <br></br>
                        <input
                          type="email"
                          id="email"
                          required
                        />
                      </div>
                      <div className="pickup_phone">
                        <label htmlFor="pickupPhone">Phone Number:</label>
                        <br></br>
                        <input
                          type="tel"
                          id="pickupPhone"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="payment_type">
              <div className="options1">
                  <div className="pickup_btn_con1">
                    <label htmlFor="credit_card">
                      <button
                        onClick={() => handlePaymentOptionChange("creditCard")}
                        className={`pickup_btn1 ${paymentOption === "creditCard" ? "active4" : ""}`} >
                        <input
                          type="radio"
                          id="creditCard"
                          name="paymentType"
                          value="creditCard"
                          className="creditCard_radio"
                          checked={paymentOption === "creditCard"}
                          onChange={() => handlePaymentOptionChange("creditCard")}
                        />
                        <img src={Credit} className="credit" />
                        <label for="pickup">Credit Card</label>
                      </button>
                    </label>
                  </div>
                  <div className="delivery_btn_con1">
                    <label htmlFor="giftCard">
                      <button
                        onClick={() => handlePaymentOptionChange("giftCard")}
                        className={`delivery_btn1 ${paymentOption === "giftCard" ? "active3" : ""}`} >
                        <input
                          type="radio"
                          id="giftCard"
                          name="paymentType"
                          value="giftCard"
                          className="giftCard_radio"
                          checked={paymentOption === "giftCard"}
                          onChange={() => handlePaymentOptionChange("giftCard")}
                        />
                        <img src={Logo2} className="logo2" />
                        Gift Card
                      </button>
                    </label>
                  </div>
                  
                  {paymentOption === "creditCard" && (
                    <div className="credit_con">
                      <div className="credit_tab">
                        <div className="credit_no">
                          
                          <label htmlFor="credit_no"> </label>
                          <br></br>
                          <img src={Credit} className="credit_img1" />
                          <input
                            type="text"
                            id="credit_number"
                            placeholder="Card Number"
                          />
                        </div>

                        <div className="month_cvv">
                          <div className="month">
                            <label htmlFor="month"> </label>
                            <br></br>
                            <input
                              type="text"
                              id="month"
                              placeholder="MM/YY"
                            />
                          </div>
                          <div className="cvv">
                            <label htmlFor="cvv"> </label>
                            <br></br>
                            <input
                              type="text"
                              id="cvv"
                              placeholder="CVV"
                            />
                          </div>
                        </div>
                        <div className="name_con">
                          <div className="first_name">
                            <label htmlFor="first_name"> </label>
                              <br></br>
                              <input
                                type="text"
                                id="first_name"
                                placeholder="First Name"
                              />
                          </div>
                          <div className="last_name">
                            <label htmlFor="last_name"> </label>
                              <br></br>
                              <input
                                type="text"
                                id="last_name"
                                placeholder="Last Name"
                              />
                          </div>
                        </div>
                        <div className="zip_code">
                          <label htmlFor="zip_code"> </label>
                            <br></br>
                            <input
                              type="text"
                              id="zip_code"
                              placeholder="Billing Zip Code"
                            />
                        </div>
                      </div>
                    </div>
                  )}
                  {paymentOption === "giftCard" && (
                    <div>
                      <div className="giftcard_num">
                        <label htmlFor="credit_no"> </label>
                            <input
                              type="text"
                              id="credit_number"
                              placeholder="Gift Card Code"
                              onChange={(e) => handleGiftCardCodeChange(e.target.value)}
                            />
                      </div>

                      <div className="balance_con">
                          <div>
                            <p>Balance: <strong>${giftCardBalance.toFixed(2)}</strong></p>
                          </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="discount_con">
                <h3>Enter Discount Code:</h3>
                <div className="discount_num">
                  <label htmlFor="discount_num"> </label>
                  <input
                  type="text"
                  id="discount_num"
                  placeholder="Discount Code"
                  onChange={(e) => {
                    
                    handleDiscountChange(e.target.value);
                  }}
                />
                </div>
                <div className="balance_con">
                  <div>
                    <p>Discount: <strong>-${discountBalance.toFixed(2)}</strong></p>
                  </div>
                </div>
              </div>

            </div>
            <div className="order_summary">
              <h2 className="order_sum">Order Summary</h2>
              <div className="table">
                <table>
                  <thead>
                    <tr>
                      <th>QTY</th>
                      <th>Item</th>
                      <th>Price</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, index) => (
                      <tr key={index}>
                        <td>{item.quantity}</td>
                        <td>{item.title}</td>
                        <td>${item.price * item.quantity}</td>
                        <td>
                          <button className="remove_item" onClick={() => removeItem(item.title)}>X</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="total_con">
                <div className="totals">
                  <div className="total1">
                    <h3>Subtotal:</h3>
                    <h3>${sum.toFixed(2)}</h3>
                  </div>
                  <div className="total1">
                    <h3>Tax:</h3>
                    <h3>${(sum * 0.0825).toFixed(2)}</h3>
                  </div>
                  <div className="total1">
                    <h3>Discount:</h3>
                    <h3>-${discountBalance.toFixed(2)}</h3>
                  </div>
                  <div className="total1">
                    <h2>Total:</h2>
                    <h2> ${(parseFloat(sum.toFixed(2)) + parseFloat((sum * 0.0825).toFixed(2)) - parseFloat(discountBalance.toFixed(2))).toFixed(2)}</h2>

                  </div>

                </div>
              </div>
              {isModalVisible && <Modal closeModal={closeModal} />}
              <div className="place_order">
                <button id="place_order" className="order_btn" onClick={placeOrder}>
                  Place Order
                </button>
              </div>

            </div>
          </div>
        </div>
    </div>
  );
};

export default Checkout;
