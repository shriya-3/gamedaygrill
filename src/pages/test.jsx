import React, { useState } from 'react';
import PizzaPopup from "../components/PizzaPopup.jsx";

const YourMainComponent = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  const handleAddToCart = (selectedToppings) => {
    console.log('Added to cart with toppings:', selectedToppings);
  };

  return (
    <div>
      <button onClick={handleOpenPopup}>Add to Cart</button>

      {isPopupOpen && (
        <PizzaPopup onClose={handleClosePopup} onAddToCart={handleAddToCart} />
      )}
    </div>
  );
};

export default YourMainComponent;
