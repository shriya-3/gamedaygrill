import React, { useState } from 'react';
import './PizzaPopup.css';

export default function PizzaPopup ({ onClose, onAddToCart }) {
  const [selectedToppings, setSelectedToppings] = useState([]);

  const handleToppingSelection = (topping) => {
    setSelectedToppings((prevToppings) =>
      prevToppings.includes(topping)
        ? prevToppings.filter((t) => t !== topping)
        : [...prevToppings, topping]
    );
  };

  const handleAddToCart = () => {
    onAddToCart(selectedToppings);
    onClose();
  };

  return (
    <div className="pizza-popup">
      <div className="popup-content">
        <h2>Customize Your Pizza</h2>
        <label>
          <input
            type="checkbox"
            checked={selectedToppings.includes('Pepperoni')}
            onChange={() => handleToppingSelection('Pepperoni')}
          />
          Pepperoni
        </label>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
      <button className="close-btn" onClick={onClose}>
        Close
      </button>
    </div>
  );
};
