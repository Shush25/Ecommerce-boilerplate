import React, { useState } from "react";

export const CartContext = React.createContext(null);

export const CartContextProvider = ({ children }) => {
  const [item, setItem] = useState([]);
  const [total, setTotal] = useState(0);

  /* A simple cart context to store cart state and share it across the application */

  return (
    <CartContext.Provider value={{ item, total, setItem, setTotal }}>
      {children}
    </CartContext.Provider>
  );
};
