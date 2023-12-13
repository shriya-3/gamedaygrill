import React, { createContext, useContext, useState } from 'react';

const QuantityContext = createContext();

export const QuantityProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(0);

  const updateQuantity = (newQuantity) => {
    setQuantity(newQuantity);
  };

  return (
    <QuantityContext.Provider value={{ quantity, updateQuantity }}>
      {children}
    </QuantityContext.Provider>
  );
};

export const useQuantity = () => {
  return useContext(QuantityContext);
};
