// ToppingsContext.js
import React, { createContext, useContext, useState } from 'react';

// Create context
const ToppingsContext = createContext();

// Create context provider
export const ToppingsProvider = ({ children }) => {
  const [selectedToppings, setSelectedToppings] = useState([]);

  const addTopping = (topping) => {
    setSelectedToppings((prevToppings) => [...prevToppings, topping]);
  };

  const removeTopping = (topping) => {
    setSelectedToppings((prevToppings) =>
      prevToppings.filter((t) => t !== topping)
    );
  };

  const clearToppings = () => {
    setSelectedToppings([]);
  };

  return (
    <ToppingsContext.Provider
      value={{
        selectedToppings,
        addTopping,
        removeTopping,
        clearToppings,
      }}
    >
      {children}
    </ToppingsContext.Provider>
  );
};

// Create custom hook to use the context
export const useToppings = () => {
  const context = useContext(ToppingsContext);
  if (!context) {
    throw new Error('useToppings must be used within a ToppingsProvider');
  }
  return context;
};
